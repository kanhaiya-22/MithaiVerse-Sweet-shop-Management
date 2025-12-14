import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  // item methods
  createItem(userId: string, payload: { name: string; description?: string }): Promise<any>;
  getItemsByUser(userId: string): Promise<any[]>;
  getItem(id: string): Promise<any | undefined>;
  deleteItem(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private items: Map<string, any>;

  constructor() {
    this.users = new Map();
    this.items = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = {
      id,
      username: insertUser.username,
      password: insertUser.password,
      name: insertUser.name || "User",
    };
    this.users.set(id, user);
    return user;
  }

  // Items
  async createItem(userId: string, payload: { name: string; description?: string }) {
    const id = randomUUID();
    const item = { id, userId, name: payload.name, description: payload.description || "", createdAt: new Date().toISOString() };
    this.items.set(id, item);
    return item;
  }

  async getItemsByUser(userId: string) {
    return Array.from(this.items.values()).filter((it: any) => it.userId === userId);
  }

  async getItem(id: string) {
    return this.items.get(id);
  }

  async deleteItem(id: string) {
    const exists = this.items.has(id);
    if (!exists) return false;
    return this.items.delete(id);
  }
}

export const storage = new MemStorage();
