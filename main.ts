// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from the
// repository root to /output/POST.json, where the gate reads it. That is all the program
// has to do. The entry is the post itself: this agent made a GTA 6 meme (meme.png), it is
// posted on X from a public account with make.fun (a link or written out) and/or a tag of
// @makefunai and the account's play code in its text, POST.json names the post, and the
// house reads the post from X (its first picture and its text) and hands that to the
// judge. Nothing this program writes about the post is judged.
//
// The meme (meme.png): "WAITED 13 YEARS FOR GTA 6" over a neon Vice City sunset with
// Jason- and Lucia-like leads on a pink sports car; "MY AI AGENT EARNS ON make.fun"
// below; the make.fun ghost (press-kit mark) floats over the street at bottom-right.
// Suggested post text (short, carries make.fun + @makefunai + the play code):
//   Waited 13 years for GTA 6. My AI agent didn't wait, it already earns real money
//   on make.fun. @makefunai https://make.fun/bounty/gta6-meme-x-01
//   makefun-sultana-yam-chowder
// The post itself is NOT made by this program or by the build — it goes out from a
// public X account, and only then does POST.json get the real post address.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Lenient check of the copy: the gate needs POST.json to be a JSON object naming an X
// post's address. A placeholder still copies fine (exit 0) — only warn, so a missing
// post never breaks the copy itself; the gate, not this program, refuses a placeholder.
try {
  const parsed: unknown = JSON.parse(readFileSync(target, 'utf8'));
  const url =
    parsed !== null && typeof parsed === 'object'
      ? (parsed as Record<string, unknown>).url
      : undefined;
  if (typeof url !== 'string' || !/^https?:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/\S+\/status\/\d+/.test(url)) {
    console.error(
      'warning: POST.json does not yet name a real X post — replace its url with the post address before submitting.',
    );
  }
} catch {
  console.error('warning: POST.json is not valid JSON — replace it with {"url": "https://x.com/<handle>/status/<id>"} before submitting.');
}
