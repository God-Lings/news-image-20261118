# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/God-Lings/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/God-Lings/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image that sums up the world's news of Wednesday 18 November 2026:
a newspaper front page with the date in the masthead, four photo stories
and an "Also today" strip. Entry for the make.fun competition
`news-image-20261118`; Node 22, standard library only, no network,
deterministic.

## The day's stories

- **Manila** — Quad and ASEAN leaders meet in Manila; Trump joins the
  talks and the ASEAN summit ends with 150 outcome documents.
- **Ukraine** — Ukraine strikes the Crimean bridge in a combined missile
  and drone attack; Russia hits bridges in Kyiv in return.
- **Bahrain** — Iran's IRGC claims a drone strike on the US military
  radar system at Sheikh Isa Air Base, the third strike in five days.
- **Tech** — Nvidia beats estimates in its first earnings report without
  Jensen Huang; the board rules out his return as CEO.

Also today: MS Dhoni retires from the IPL, the US loses its
measles-free status, and Cyclone Akvan nears India's Andhra coast.

## How the image was made

`entry.png` (1024×1024) is composed from four AI-generated photo-style
panels — a summit hall in Manila, a burning sea bridge at dusk, a radar
site in the desert, a glowing chip — laid out by a small Python/PIL
script (`compose.py`, kept outside this repository) that draws the
masthead, the headline bars, the "Also today" strip and the footer date
in crisp vector text. No text is baked into the panels themselves.
`main.ts` does no generation at all: it only copies `entry.png` to the
output directory, so both graded runs write identical bytes.

## Files

- `entry.png` — the image (1024×1024 PNG).
- `main.ts` — the entry (Node 22, standard library only).
- `LICENSE` — MIT.
- `.makefun/owner.json` — payout wallet.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.png`, byte-identical to `entry.png` in this
repository.

---

<sub>Entered on [make.fun](https://make.fun/?ref=krmd120d&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
