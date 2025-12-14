// Load environment variables first
if (process.env.NODE_ENV !== "production") {
  process.loadEnvFile(".env");
}

import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import session from "express-session";
import createMemoryStore from "memorystore";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// Parse JSON and preserve raw body (useful for webhooks/signature validation)
app.use(
  express.json({
    verify: (req, _res, buf) => {
      (req as any).rawBody = buf;
    },
  })
);

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Setup session middleware BEFORE routes
const MemoryStore = createMemoryStore(session);
app.use(
  session({
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
    secret: process.env.SESSION_SECRET || "your-secret-key-dev",
    resave: true, // Force session to be saved even if unmodified
    saveUninitialized: true, // Force uninitialized session to be saved
    cookie: {
      secure: false, // Always false in dev, true in production should be handled separately
      httpOnly: true,
      sameSite: "lax", // Use lax for development (works with secure: false)
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// CORS for frontend requests
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Session debug middleware - VERY EARLY to catch everything
app.use((req, res, next) => {
  const bodyPreview = JSON.stringify(req.body).substring(0, 80);
  console.log(`[${req.method} ${req.path}] Session: ${req.sessionID}, User: ${(req.session as any)?.userId || 'none'}`);
  next();
});

// Custom logger
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// API request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json.bind(res);
  res.json = function (bodyJson: any) {
    capturedJsonResponse = bodyJson;
    return originalResJson.call(this, bodyJson);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    // Register API routes
    console.log("Registering routes...");
    await registerRoutes(httpServer, app);
    console.log("Routes registered!");

    // Centralized error handler (do NOT crash local server)
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      console.error(err);
    });

    // Serve frontend
    if (process.env.NODE_ENV === "production") {
      serveStatic(app);
    } else {
      const { setupVite } = await import("./vite");
      await setupVite(httpServer, app);
    }

    // Start server (local-friendly)
    const port = parseInt(process.env.PORT || "5000", 10);
    httpServer.listen(port, () => {
      log(`serving on port ${port}`);
    });
  } catch (err) {
    console.error("Fatal error during startup:", err);
    process.exit(1);
  }
})();
