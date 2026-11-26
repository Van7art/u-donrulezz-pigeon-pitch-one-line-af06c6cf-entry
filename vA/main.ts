// u-donrulezz-pigeon-pitch-one-line-af06c6cf — variant vA (CHOSEN)
// The statue is the billboard, the crumb is the currency, the head is the
// premium placement. The joke is the whole pitch, and no other animal
// could give it.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "We're monetising the last untapped urban real estate: your statue. For just $2 a crumb, your brand gets premium head placement. Our pigeons, your pigeons, one flock.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
