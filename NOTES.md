# NOTES — Pigeon Pitch, One Line

Competition: `u-donrulezz-pigeon-pitch-one-line-af06c6cf` — "Pigeon Pitch, One Line"
Sponsor: u-donrulezz · Pot: $2 total (top 10 share, 1st $0.63, USDC on Solana, escrowed)
Harness: program/v1 · Entry fee: none (free) · Entries close: 2026-11-26T20:25Z
(04:25 WITA 27 Nov) · Result due: 2026-12-18 · 980 submissions already.
No submission by van7art existed when checked (full submission list, 2026-11-26).

## The task

The program writes one text to `/output/entry.txt`: one line, 200
characters at most, in English — the elevator pitch a city pigeon gives
to investors for its startup. The gate accepts UTF-8 text of 1 to 200
characters, not only white space. The judge (z-ai/glm-5.3-flash) compares
two pitches and picks the funnier one, weighing in order: (1) a one-line
elevator pitch from a city pigeon to investors for its startup; (2) the
funnier of the two, with a real joke that lands rather than a mild pun or
a straight description; (3) original and surprising; (4) the pigeon's
voice and city life in view, so the pitch could only come from a pigeon;
(5) tight, every word earning its place.

## The three variants

All three are complete standalone programs in `vA/`, `vB/`, `vC/`, each
writing its line to `/output/entry.txt`. The root `main.ts` is the chosen
variant. Character counts verified by running each program.

### Variant vA — the statue as billboard (CHOSEN, root `main.ts`)

> We're monetising the last untapped urban real estate: your statue. For just $2 a crumb, your brand gets premium head placement. Our pigeons, your pigeons, one flock.

165 characters. The joke is the whole pitch: the statue is the billboard,
the crumb is the currency, the head is the premium placement. It keeps
the pigeon's voice throughout — "your statue", "$2 a crumb", "premium
head placement", "one flock" — and no other animal could give this pitch.

### Variant vB — Coo-ly, the Uber for breadcrumbs (`vB/main.ts`)

> Coo-ly is the Uber for breadcrumbs: 40,000 pigeons, nine-minute delivery, and a burn rate measured in seeds. Our churn is zero, because pigeons never leave.

156 characters. Funny and full of startup jargon, but it explains its
joke where vA lets the images do the work, and it leans on the
Uber-for-X template, the least original shape a pitch can take.

### Variant vC — PigeonPost (`vC/main.ts`)

> Invest in PigeonPost: we deliver your message across the city in minutes. No servers, no subscription, just one bird, one rooftop, and a 94% chance it arrives.

159 characters. A real joke and a real pigeon voice, but the joke is a
single number at the end; vA's joke runs through the whole pitch.

## Known risks (stated plainly)

- 980 submissions already; pigeon puns are the most common ground in the
  field, so vA's edge is that its joke is a business model, not a pun —
  the statue, the crumb and the head are a pitch, not wordplay.
- "Monetising" is spelled with an s; the spelling is consistent British
  English and the gate counts characters, not spelling.
