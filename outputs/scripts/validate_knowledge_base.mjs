import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const base = path.resolve("outputs/middle-east/js");

const DATA = require(path.join(base, "data.js"));
const QUESTIONS = require(path.join(base, "data-questions.js"));
const CHARACTERS = require(path.join(base, "data-characters.js"));

const DIM_IDS = DATA.dimensions.map((d) => d.id);
let failures = 0;
const ok = (cond, msg) => { if (!cond) { failures++; console.log("FAIL:", msg); } };

/* ---- questions ---- */
const qids = new Set();
let published = 0;
const dimCoverage = Object.fromEntries(DIM_IDS.map((d) => [d, 0]));

for (const q of QUESTIONS) {
  ok(!qids.has(q.question_id), "duplicate question_id " + q.question_id);
  qids.add(q.question_id);
  ok(DIM_IDS.includes(q.dimension), q.question_id + " bad dimension " + q.dimension);
  ok(q.en && q.en.q && q.en.a && q.en.b && q.en.c && q.en.d, q.question_id + " missing en text");
  ok(q.ar && q.ar.q && q.ar.a && q.ar.b && q.ar.c && q.ar.d, q.question_id + " missing ar text");
  ok(q.scores && ["a", "b", "c", "d"].every((l) => q.scores[l]), q.question_id + " missing scores");
  for (const l of ["a", "b", "c", "d"]) {
    const s = q.scores[l] || {};
    for (const d of Object.keys(s)) {
      ok(DIM_IDS.includes(d), q.question_id + " score maps to unknown dim " + d);
      ok(s[d] > 0, q.question_id + " non-positive score");
      dimCoverage[d]++;
    }
  }
  if (q.status === "published") published++;
}

ok(published >= 30, "published questions below target: " + published);
for (const d of DIM_IDS) {
  ok(dimCoverage[d] >= 10, "dimension " + d + " under-covered: " + dimCoverage[d]);
}

/* exact duplicate detection on normalized question text */
const norm = (s) => (s || "").toLowerCase().replace(/[^a-z0-9\u0600-\u06FF]+/g, " ").replace(/\s+/g, " ").trim();
const seen = new Map();
for (const q of QUESTIONS) {
  const key = norm(q.en.q);
  ok(!seen.has(key), "exact duplicate question: " + q.question_id + " ~ " + seen.get(key));
  seen.set(key, q.question_id);
}

/* ---- characters ---- */
const pids = new Set();
let allowed = 0;
for (const c of CHARACTERS) {
  ok(!pids.has(c.person_id), "duplicate person_id " + c.person_id);
  pids.add(c.person_id);
  ok(c.names && c.names.en && c.names.ar, c.person_id + " missing names");
  ok(c.profile && DIM_IDS.every((d) => typeof c.profile[d] === "number" && c.profile[d] >= 0 && c.profile[d] <= 1), c.person_id + " bad profile vector");
  ok(c.profile_type === "product_interpretation", c.person_id + " profile type not product_interpretation");
  ok(c.review_status && c.review_status !== "approved", c.person_id + " AI content auto-approved (not allowed)");
  if (c.allowed_match) {
    allowed++;
    ok(c.sources && c.sources.length >= 1, c.person_id + " no sources");
    ok(c.verification_status === "needs_verification", c.person_id + " verification status not needs_verification");
    ok(c.bio && c.bio.en && c.bio.ar, c.person_id + " missing bio");
    ok(c.strengths && c.strengths.length >= 3, c.person_id + " insufficient strengths");
  }
}
ok(allowed >= 18, "allowed_match characters below target: " + allowed);

/* ---- matching determinism ---- */
function matchFor(letters) {
  const raw = Object.fromEntries(DIM_IDS.map((d) => [d, 0]));
  const maxp = Object.fromEntries(DIM_IDS.map((d) => [d, 0]));
  QUESTIONS.forEach((q, i) => {
    const s = q.scores[letters[i]] || {};
    for (const d of DIM_IDS) if (s[d]) { raw[d] += s[d]; maxp[d]++; }
  });
  const vec = Object.fromEntries(DIM_IDS.map((d) => [d, maxp[d] ? raw[d] / maxp[d] : 0.5]));
  return CHARACTERS.filter((c) => c.allowed_match).map((c) => {
    let sum = 0;
    DIM_IDS.forEach((d) => { const x = vec[d] - c.profile[d]; sum += x * x; });
    return { id: c.person_id, d: Math.sqrt(sum) };
  }).sort((a, b) => a.d - b.d || a.id.localeCompare(b.id)).map((x) => x.id);
}

const letters = QUESTIONS.map(() => "a");
const r1 = matchFor(letters);
const r2 = matchFor(letters);
ok(JSON.stringify(r1) === JSON.stringify(r2), "matching not deterministic");
ok(r1.length === r2.length && r1[0] === r2[0] && r1[1] === r2[1], "primary/secondary match unstable");

/* ---- summary ---- */
const dimSummary = Object.entries(dimCoverage).map(([d, n]) => `${d}:${n}`).join(", ");
console.log("questions:", QUESTIONS.length, "| published:", published);
console.log("characters:", CHARACTERS.length, "| allowed_match:", allowed);
console.log("dimension option coverage:", dimSummary);
console.log("primary match (all-a):", r1[0], "| secondary:", r1[1]);

if (failures === 0) {
  console.log("VALIDATION PASSED");
} else {
  console.log("VALIDATION FAILED with " + failures + " issue(s)");
  process.exitCode = 1;
}
