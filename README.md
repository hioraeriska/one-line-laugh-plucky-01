# One Line, One Laugh

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![make.fun](https://img.shields.io/badge/make.fun-One%20Line%2C%20One%20Laugh-blue)
![Node](https://img.shields.io/badge/node-%3E%3D22-green)

Entry for the make.fun bounty **One Line, One Laugh** (sponsor mydream):
a program that writes one funny line, at most 200 characters, to
`/output/entry.txt`. An AI judge compares entries two at a time and the
funniest line wins.

## The line

> My bank account has the survival instincts of a lemming with a credit card and a dream.

87 characters, 87 bytes. One sentence, no setup: an everyday self-insult
(a broke bank account) plus one vivid simile (a lemming — famous for
running off cliffs — holding a credit card) with a small sting at the end
(and a dream).

## Run it

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
cat output/entry.txt
```

## Files

- `main.ts` — writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
- `LICENSE` — MIT

## License

MIT — see [LICENSE](LICENSE).
