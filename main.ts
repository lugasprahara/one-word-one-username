// One Word, One Username, One Reward — the whole entry is a single word:
// lugasprahara, the entrant's own make.fun username, sent bare.
//
// The brief asks for one thing only: your own make.fun handle, one word,
// no explanation, no links, no pitch. The judge compares handles two at a
// time and its first criterion is that the entry is a genuine make.fun
// username — the entrant's own — so this program does exactly that and
// nothing more: it writes the handle, checks it fits the gate (UTF-8
// text of 1 to 30 characters, not only whitespace, no spaces), and stops.

import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "lugasprahara";

// The form is the whole game: one word, the handle itself, nothing
// tacked on — no "@", no gloss, no padding. Mirror the sealed gate
// exactly: UTF-8 text of 1 to 30 characters, and not only whitespace.
const chars = [...USERNAME].length;
if (!/^\S+$/.test(USERNAME) || chars < 1 || chars > 30) {
  throw new Error(`entry must be a single word of 1-30 characters, got ${JSON.stringify(USERNAME)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, "utf8");
