import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

function usersFile() {
  return process.env.AUTH_STORE_FILE || path.resolve(__dirname, "..", "..", "data", "users.json");
}

function loadDb() {
  try {
    return JSON.parse(fs.readFileSync(usersFile(), "utf8"));
  } catch (e) {
    return { users: [], sessions: [] };
  }
}

function saveDb(db) {
  fs.mkdirSync(path.dirname(usersFile()), { recursive: true });
  fs.writeFileSync(usersFile(), JSON.stringify(db, null, 2));
}

function hashPassword(password, salt) {
  return crypto.scryptSync(String(password), salt, 64).toString("hex");
}

function publicUser(u) {
  return { id: u.id, email: u.email, createdAt: u.createdAt };
}

export function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

export function signup(email, password) {
  email = normalizeEmail(email);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return { ok: false, error: "invalid_email" };
  if (typeof password !== "string" || password.length < 8) return { ok: false, error: "password_too_short" };

  const db = loadDb();
  if (db.users.some((u) => u.email === email)) return { ok: false, error: "email_taken" };

  const salt = crypto.randomBytes(16).toString("hex");
  const user = {
    id: "usr_" + crypto.randomBytes(12).toString("hex"),
    email,
    salt,
    hash: hashPassword(password, salt),
    createdAt: new Date().toISOString(),
    results: []
  };
  db.users.push(user);

  const token = crypto.randomBytes(32).toString("hex");
  db.sessions = (db.sessions || []).concat([{ token, userId: user.id, expiresAt: Date.now() + SESSION_TTL_MS }]);
  saveDb(db);

  return { ok: true, user: publicUser(user), token };
}

export function login(email, password) {
  email = normalizeEmail(email);
  const db = loadDb();
  const user = db.users.find((u) => u.email === email);
  if (!user || hashPassword(password || "", user.salt) !== user.hash) {
    return { ok: false, error: "invalid_credentials" };
  }

  const token = crypto.randomBytes(32).toString("hex");
  db.sessions = (db.sessions || [])
    .filter((s) => s.expiresAt > Date.now())
    .concat([{ token, userId: user.id, expiresAt: Date.now() + SESSION_TTL_MS }]);
  saveDb(db);

  return { ok: true, user: publicUser(user), token };
}

export function authenticate(token) {
  if (!token) return null;
  const db = loadDb();
  const s = (db.sessions || []).find((x) => x.token === token);
  if (!s || s.expiresAt < Date.now()) return null;
  const user = db.users.find((u) => u.id === s.userId);
  return user ? publicUser(user) : null;
}

export function logout(token) {
  if (!token) return;
  const db = loadDb();
  db.sessions = (db.sessions || []).filter((s) => s.token !== token);
  saveDb(db);
}
