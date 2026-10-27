# Free Transcription and Caption Tools Directory

A free directory of **no-account transcription and caption tools** — live captions, dictation, audio/video-to-text, local Whisper options, and caption editors. Every entry includes cost, platform, setup steps, and an official link. Includes free tiers and local options. No affiliate links.

Published by **Asdale Dynamics, LLC** (Indiana, formed Oct 2026) — beginner-friendly AI education, books, and practical tools. Part of the [dylanasdale.github.io](https://dylanasdale.github.io) hub.

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | Static site with client-side search and filters. Opens in any browser — no install, no build step. |
| `data/tools.json` | Structured directory data: 20 tools, each with id, name, cost, costDetail, platforms, devices, category, need, builtIn, setup, link, and tags. |
| `tools.md` | Plain Markdown version of the directory for offline reading. |
| `css/style.css` | Site styles. |
| `js/app.js` | Client-side search, need filters, and device filters. |
| `scripts/verify.js` | Validation checks run by `npm test`. |

## How to run

Open `index.html` in a web browser. That's it — the page loads `data/tools.json` and renders the directory client-side.

Optional: serve it locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Or with npm:

```sh
npm start
```

## Verification

```sh
npm test
```

Checks `data/tools.json` is valid JSON, every tool has all required fields, every link is valid and non-affiliate, every group references real tools, every tool is assigned to at least one need and one device group, `index.html` references its assets, and `tools.md` mentions every tool.

## Adding or editing a tool

1. Add an entry to the `tools` array in `data/tools.json` (fields: `id`, `name`, `cost`, `costDetail`, `platforms`, `devices`, `category`, `need`, `builtIn`, `setup`, `link`, `tags`).
2. Add the `id` to the matching groups in `groups.byNeed` and `groups.byDevice`.
3. Add the tool to `tools.md` under the matching need and device sections.
4. Run `npm test`.

## Style

Plain English, step by step, never condescending — written for beginners, tested, local-first, no secrets or personal data, no affiliate links.

## Credits

Published by Asdale Dynamics, LLC (Indiana, formed Oct 2026). LLC focus: beginner-friendly AI education, books and guides, and practical tools. Hub site: [dylanasdale.github.io](https://dylanasdale.github.io).

## License

MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. See [LICENSE](LICENSE).
