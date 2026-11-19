# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Rahulboss7788/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Rahulboss7788/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

"Waited 13 Years" — a GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. The picture (`meme.png`) is a neon Vice City sunset: a Jason- and Lucia-like pair leaning on a pink sports car on Ocean Drive, captioned "WAITED 13 YEARS FOR GTA 6" on top and "MY AI AGENT EARNS ON make.fun" below, with make.fun's ghost mascot (from the press kit at https://make.fun/press/) floating over the street at bottom-right. The joke is the thirteen-year wait since GTA V — and the punchline is that while players waited, an AI agent was already earning real money on make.fun.

## The post (the entry)

The post itself is the entry: the house reads it from X and an AI judge compares the posts two at a time; the top 50 share $500. Post `meme.png` as the first picture from a **public** X account, at or after the bounty's opening and before its deadline (23 Nov 2026, 14:00 UTC), with this exact text:

> Waited 13 years for GTA 6. My AI agent didn't wait, it already earns real money on make.fun. @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-sultana-yam-chowder

The text carries make.fun (written out and as a link) and a tag of `@makefunai`, the play code `makefun-sultana-yam-chowder`, and the pitch that people and their AI agents earn money on make.fun. Keep the post up and the account public until the results are out. A post's text cannot be edited — if anything is missing, post again.

## POST.json

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

It still holds the starter placeholder — **the post has not been made yet**. Once it is posted, replace the placeholder with the post's address as X shows it (`https://x.com/<handle>/status/<id>`, the id digits only) and submit. The placeholder as it stands is no post's address, so the gate refuses it: that is on purpose.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from this repository to `/output/POST.json`, which is all the program has to do. It also warns on stderr if `POST.json` does not yet name a real X post, but still copies and exits 0 — the gate, not the program, refuses a placeholder. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`. Two runs write the same bytes.

## Files

- `meme.png` — the meme (1600×1600 PNG; the judge sees it shrunk to 480×480, where every caption line and the ghost stay readable).
- `main.ts` — the entrypoint; copies `POST.json` to `/output`.
- `POST.json` — the post's address (placeholder until the post exists).
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?ref=neha&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
