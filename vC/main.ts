// u-donrulezz-pigeon-pitch-one-line-af06c6cf — variant vC
// PigeonPost delivers across the city with no servers and no
// subscription, just one bird, one rooftop, and a 94% chance it arrives.
// A real joke and a real pigeon voice, but the joke is a single number
// at the end.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Invest in PigeonPost: we deliver your message across the city in minutes. No servers, no subscription, just one bird, one rooftop, and a 94% chance it arrives.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
