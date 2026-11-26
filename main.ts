// Pigeon Pitch, One Line — the chosen entry (variant vA).
//
// Competition: u-donrulezz-pigeon-pitch-one-line-af06c6cf (make.fun, program/v1).
// The entry is one line, 200 characters at most, in English: the elevator
// pitch a city pigeon gives to investors for its startup. The judge
// (z-ai/glm-5.3-flash) compares two pitches and picks the funnier one,
// weighing in order: (1) a one-line elevator pitch from a city pigeon to
// investors for its startup; (2) the funnier of the two, with a real joke
// that lands rather than a mild pun or a straight description;
// (3) original and surprising; (4) the pigeon's voice and city life in
// view, so the pitch could only come from a pigeon; (5) tight, every word
// earning its place inside 200 characters.
//
// Why vA won over the other two variants (see vA/, vB/, vC/):
//   - vC (PigeonPost, 94% chance it arrives) has a real joke and a real
//     pigeon voice, but its joke is a single number at the end; vA's joke
//     is the whole pitch: the statue is the billboard, the crumb is the
//     currency, the head is the premium placement.
//   - vB (Coo-ly, the Uber for breadcrumbs) is funny and full of startup
//     jargon, but it explains its joke — nine-minute delivery, burn rate
//     in seeds, zero churn — where vA lets the images do the work in
//     fewer words. It also leans on the Uber-for-X template, the least
//     original shape a pitch can take.
//   - vA keeps the pigeon's voice throughout: "your statue", "$2 a
//     crumb", "premium head placement", "one flock". No other animal
//     could give this pitch, and no human startup could either.
//
// The program writes exactly the line to /output/entry.txt (the grader's
// gate: UTF-8 text of 1 to 200 characters, not only white space) with no
// trailing newline, and prints exactly that line to stdout. It uses no
// network, no randomness, no clock and no environment input, so two runs
// produce byte-identical output. Run record: built in this session;
// the variant choice and counts are recorded in NOTES.md.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one line, and nothing else.
const LINE =
  "We're monetising the last untapped urban real estate: your statue. For just $2 a crumb, your brand gets premium head placement. Our pigeons, your pigeons, one flock.";

// The gate: 1 to 200 characters, a single line, not only white space.
const LIMIT = 200;
if (
  LINE.length < 1 ||
  LINE.length > LIMIT ||
  LINE.includes("\n") ||
  LINE.trim() !== LINE
) {
  throw new Error(
    `invalid entry of ${LINE.length} characters: must be one line of 1 to ${LIMIT} characters`,
  );
}

// Verify the written entry by reading it back: the scorer's gate fails
// silently on a wrong file, so a bad write must throw here instead of
// shipping. Checks both the byte length and the exact line.
function verifyEntry(expected: string): void {
  const raw = readFileSync("/output/entry.txt");
  const text = raw.toString("utf8");
  if (text !== expected) {
    throw new Error(
      `entry mismatch: /output/entry.txt holds ${JSON.stringify(text)}, expected ${JSON.stringify(expected)}`,
    );
  }
}

// The grader's gate reads /output/entry.txt. Write the line with no
// trailing newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read the file back and prove what was written is exactly the entry.
verifyEntry(LINE);

// Print the entry and nothing else: the line, no newline, so stdout
// carries exactly the entry too.
process.stdout.write(LINE);
