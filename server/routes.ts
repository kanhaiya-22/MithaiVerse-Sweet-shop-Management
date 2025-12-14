import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  const api = (p: string) => `/api${p}`;

  // Register a new user (basic, plaintext password - for local/dev only)
  app.post(api("/register"), async (req: Request, res: Response) => {
    const { username, password, name } = req.body || {};
    if (!username || !password) return res.status(400).json({ message: "Missing fields" });

    const existing = await storage.getUserByUsername(username);
    if (existing) return res.status(409).json({ message: "User exists" });

    const user = await storage.createUser({ username, password, name: name || username });
    // set session and save it
    console.log("POST /api/register - Creating session for user:", { userId: user.id, username });
    (req.session as any).userId = user.id;
    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ message: "Session save failed" });
      }
      console.log("POST /api/register - Session saved successfully");
      const { password: _p, ...safe } = user as any;
      res.status(201).json(safe);
    });
  });

  // Login
  app.post(api("/login"), async (req: Request, res: Response) => {
    const { username, password } = req.body || {};
    if (!username || !password) return res.status(400).json({ message: "Missing fields" });

    const user = await storage.getUserByUsername(username);
    if (!user || user.password !== password) return res.status(401).json({ message: "Invalid credentials" });

    // set session and save it
    console.log("POST /api/login - Creating session for user:", { userId: user.id, username });
    (req.session as any).userId = user.id;
    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ message: "Session save failed" });
      }
      console.log("POST /api/login - Session saved successfully");
      const { password: _p, ...safe } = user as any;
      res.json(safe);
    });
  });

  // Current user
  app.get(api("/me"), async (req: Request, res: Response) => {
    const userId = (req.session as any).userId;
    console.log("GET /api/me - Session:", { userId, sessionId: req.sessionID, headers: req.headers.cookie });
    if (!userId) {
      console.log("No userId in session, returning 204");
      return res.status(204).end();
    }
    const user = await storage.getUser(userId);
    if (!user) return res.status(404).json({ message: "Not found" });
    const { password: _p, ...safe } = user as any;
    console.log("GET /api/me - Returning user:", safe);
    res.json(safe);
  });

  // Logout
  app.post(api("/logout"), (req: Request, res: Response) => {
    req.session?.destroy((err) => {
      if (err) return res.status(500).json({ message: "Logout failed" });
      res.json({ ok: true });
    });
  });

  // Create item for current user
  app.post(api("/items"), async (req: Request, res: Response) => {
    const userId = (req.session as any).userId;
    console.log("POST /api/items - userId:", userId, "body:", req.body);
    if (!userId) return res.status(401).json({ message: "Not authenticated" });
    const { name, description } = req.body || {};
    if (!name) return res.status(400).json({ message: "Missing item name" });
    const item = await storage.createItem(userId, { name: String(name), description: description ? String(description) : undefined });
    console.log("POST /api/items - Item created:", item);
    res.status(201).json(item);
  });

  // Get items for current user
  app.get(api("/items"), async (req: Request, res: Response) => {
    const userId = (req.session as any).userId;
    if (!userId) return res.status(401).json({ message: "Not authenticated" });
    const items = await storage.getItemsByUser(userId);
    res.json(items);
  });

  // Delete item (only owner)
  app.delete(api("/items/:id"), async (req: Request, res: Response) => {
    const userId = (req.session as any).userId;
    if (!userId) return res.status(401).json({ message: "Not authenticated" });
    const id = req.params.id;
    const item = await storage.getItem(id);
    if (!item || item.userId !== userId) return res.status(404).json({ message: "Not found or not your item" });
    const ok = await storage.deleteItem(id);
    if (!ok) return res.status(500).json({ message: "Delete failed" });
    res.json({ ok: true });
  });

  // Dashboard endpoints
  app.get(api("/dashboard/items"), async (req: Request, res: Response) => {
    const userId = (req.session as any).userId;
    console.log("GET /api/dashboard/items - userId:", userId);
    if (!userId) return res.status(401).json({ message: "Not authenticated" });
    const items = await storage.getItemsByUser(userId);
    console.log("GET /api/dashboard/items - items found:", items);
    res.json(items);
  });

  app.delete(api("/dashboard/items/:id"), async (req: Request, res: Response) => {
    const userId = (req.session as any).userId;
    if (!userId) return res.status(401).json({ message: "Not authenticated" });
    const id = req.params.id;
    const item = await storage.getItem(id);
    if (!item || item.userId !== userId) return res.status(404).json({ message: "Not found or not your item" });
    const ok = await storage.deleteItem(id);
    if (!ok) return res.status(500).json({ message: "Delete failed" });
    res.json({ ok: true });
  });

  return httpServer;
}
