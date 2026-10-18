import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const base = path.resolve("outputs/middle-east/js");
const outDir = path.resolve("outputs/data");
fs.mkdirSync(outDir, { recursive: true });

const QUESTIONS = require(path.join(base, "data-questions.js"));
const CHARACTERS = require(path.join(base, "data-characters.js"));

const norm = (s) =>
  (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06FF]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const tokens = (s) => new Set(norm(s).split(" ").filter(Boolean));
const jaccard = (a, b) => {
  const sa = tokens(a), sb = tokens(b);
  if (!sa.size || !sb.size) return 0;
  let inter = 0;
  for (const t of sa) if (sb.has(t)) inter++;
  return inter / (sa.size + sb.size - inter);
};

const candidates = [];
const processed = new Set();

/* exact + near duplicates for questions (semantic proxy on normalized text) */
for (let i = 0; i < QUESTIONS.length; i++) {
  for (let j = i + 1; j < QUESTIONS.length; j++) {
    const a = QUESTIONS[i], b = QUESTIONS[j];
    const enExact = norm(a.en.q) === norm(b.en.q);
    const arExact = norm(a.ar.q) === norm(b.ar.q);
    const sim = Math.max(jaccard(a.en.q, b.en.q), jaccard(a.ar.q, b.ar.q));
    if (enExact || arExact || sim >= 0.8) {
      candidates.push({
        type: "question",
        a_id: a.question_id,
        b_id: b.question_id,
        similarity: Number(sim.toFixed(3)),
        exact: enExact || arExact,
        reason: enExact || arExact ? "exact_normalized_match" : "near_duplicate_text",
        recommendation: enExact || arExact ? "merge_or_dedupe" : "needs_manual_review"
      });
      processed.add(a.question_id + "|" + b.question_id);
    }
  }
}

/* character duplicates by normalized primary name */
const nameMap = new Map();
for (const c of CHARACTERS) {
  const key = norm(c.names.en) + "::" + norm(c.names.ar);
  if (nameMap.has(key)) {
    candidates.push({
      type: "character",
      a_id: nameMap.get(key),
      b_id: c.person_id,
      similarity: 1,
      exact: true,
      reason: "duplicate_person_name",
      recommendation: "merge_or_dedupe"
    });
    processed.add(nameMap.get(key) + "|" + c.person_id);
  } else {
    nameMap.set(key, c.person_id);
  }
}

const mergeLog = [];
const deletedArchive = [];

fs.writeFileSync(
  path.join(outDir, "duplicate_candidates.json"),
  JSON.stringify(
    { generated_at: new Date().toISOString(), total_candidates: candidates.length, candidates },
    null,
    2
  )
);
fs.writeFileSync(
  path.join(outDir, "merge_log.json"),
  JSON.stringify({ generated_at: new Date().toISOString(), merges: mergeLog }, null, 2)
);
fs.writeFileSync(
  path.join(outDir, "deleted_records_archive.json"),
  JSON.stringify({ generated_at: new Date().toISOString(), archived: deletedArchive }, null, 2)
);

console.log("question count:", QUESTIONS.length);
console.log("character count:", CHARACTERS.length);
console.log("duplicate candidates:", candidates.length);
console.log("merge actions:", mergeLog.length, "| archived deletions:", deletedArchive.length);
console.log("output written to outputs/data/");
