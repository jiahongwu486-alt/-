/* ============================================================
   Historical Persona — payment verification server
   Stripe Webhook + /verify endpoint for server-side unlock.

   Install:  npm install stripe
   Env vars: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, PORT, ALLOWED_ORIGIN
   Run:      node webhook.mjs
   ============================================================ */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let Stripe = null;
try {
  ({ default: Stripe } = await import("stripe"));
} catch (e) {
  console.error("ERROR: 'stripe' package not installed. Run: npm install stripe");
  process.exit(1);
}

const SECRET = process.env.STRIPE_SECRET_KEY;
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const PORT = Number(process.env.PORT || 8787);
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

if (!SECRET || !WEBHOOK_SECRET) {
  console.error("Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET");
  process.exit(1);
}

const stripe = new Stripe(SECRET);
const ORDER_FILE = path.resolve("outputs/data/paid_orders.jsonl");

function recordOrder(sessionId, email) {
  fs.appendFileSync(ORDER_FILE, JSON.stringify({ session_id: sessionId, email, paid_at: new Date().toISOString() }) + "\n");
}

function isRecorded(sessionId) {
  if (!fs.existsSync(ORDER_FILE)) return false;
  return fs.readFileSync(ORDER_FILE, "utf8").split("\n").some((line) => {
    try { return JSON.parse(line).session_id === sessionId; } catch (e) { return false; }
  });
}

function json(res, code, obj) {
  res.writeHead(code, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN
  });
  res.end(JSON.stringify(obj));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    return res.end();
  }

  // Stripe webhook
  if (req.method === "POST" && url.pathname === "/webhook") {
    const raw = await readBody(req);
    const sig = req.headers["stripe-signature"];
    let event;
    try {
      event = stripe.webhooks.constructEvent(raw, sig, WEBHOOK_SECRET);
    } catch (e) {
      return json(res, 400, { error: "invalid signature" });
    }
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      if (session.payment_status === "paid") {
        recordOrder(session.id, session.customer_email || "");
      }
    }
    return json(res, 200, { received: true });
  }

  // Client verification
  if (req.method === "GET" && url.pathname === "/verify") {
    const sessionId = url.searchParams.get("session_id");
    if (!sessionId) return json(res, 400, { ok: false, error: "missing session_id" });
    if (isRecorded(sessionId)) return json(res, 200, { ok: true });
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (session.payment_status === "paid") {
        recordOrder(session.id, session.customer_email || "");
        return json(res, 200, { ok: true });
      }
    } catch (e) {
      return json(res, 404, { ok: false, error: "session not found" });
    }
    return json(res, 200, { ok: false });
  }

  return json(res, 404, { ok: false, error: "not found" });
});

server.listen(PORT, () => console.log("verify server on http://localhost:" + PORT));
