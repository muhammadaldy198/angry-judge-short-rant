// Angry Judge: The Short Rant Contest — 25 Nov 2026.
// One rant, written to /output/entry.txt.
// The rant: a support chatbot sends a 2019 help article about a router
// I have never owned, then asks me to rate how helpful it was —
// so I gave the article five stars for fiction.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "The support chatbot asked for my problem in one sentence, sent me a help article from 2019 about a router I have never owned, and closed the chat to ask me to rate how helpful it was, so I gave the article five stars for fiction.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, RANT, { encoding: "utf8", mode: 0o644 });
chmodSync(outFile, 0o644);

console.log(`wrote ${outFile} (${RANT.length} characters)`);
console.log(RANT);

// Build note: this pick won its duel against the strongest visible field
// entries — the password-reset rant, the 47-page printer error report,
// the 20-minute-late bus, and the out-of-cyan boarding pass — on
// freshness (no chatbot-article entry among 287 submissions) and on a
// concrete final twist: five stars for fiction.
