# STATUS — Free Transcription and Caption Tools Directory

## What was built

A free no-account transcription and caption tools directory: a static HTML site (`index.html`) with client-side search and filters, plus a plain Markdown version (`tools.md`) for offline reading.

- **20 tools** covering live captions, transcription (audio/video to text), dictation (speak to type), caption/subtitle editing, and reading & playback (text-to-speech).
- **Built-in OS features included** (Windows Live Captions, Windows Dictation, Windows Voice Access, macOS Live Captions, macOS Dictation, macOS Voice Control, iOS Live Captions, iOS Dictation, Chrome Live Caption, Android Select to Speak) alongside free third-party and local options (Live Transcribe, Gboard Voice Typing, OpenAI Whisper local, Whisper.cpp, Vosk, oTranscribe, Subtitle Edit, Aegisub, Google Docs Voice Typing, YouTube Auto-Captions).
- **Local-first options** (Whisper, Whisper.cpp, Vosk) run entirely on your computer — no account, no API key, no internet after setup, audio never leaves your device.
- **Free tier options** noted (Google Docs Voice Typing, YouTube Auto-Captions require a free Google/YouTube account — stated in costDetail).
- Grouped by **need** (Live captions, Transcription, Dictation, Caption editing, Reading & playback — 5 groups) and by **device** (Windows, macOS, Linux, iOS, Android, Web, ChromeOS — 7 groups).
- Each tool has cost, costDetail, platforms, setup steps, built-in flag, tags, and an official link.
- **No affiliate links** — every link points to an official product or support page.
- **Local-first:** the site runs entirely in the browser; no server, no build step, no tracking, no API keys.
- Client-side search and need/device filters (`js/app.js`, loading `data/tools.json`).
- Published by **Asdale Dynamics, LLC** (Indiana, formed Oct 2026), credited in `README.md`, `index.html`, `tools.md`, and `LICENSE`.

## Files

- `index.html` — static site shell, search toolbar, need/device filters, results area, markdown note, footer
- `tools.md` — Markdown directory of all 20 tools, by need and by device
- `README.md` — project overview, how to run, how to add a tool, credits, license
- `LICENSE` — MIT, Copyright (c) 2026 Asdale Dynamics, LLC
- `data/tools.json` — structured source of truth for all tools and groups
- `css/style.css` — responsive styles
- `js/app.js` — loads data, renders cards, search + filters
- `scripts/verify.js` — validation checks (`npm test`)
- `package.json` — `npm test` / `npm start` scripts
- `STATUS.md` — this file

## How to run

```sh
# Option 1: open directly
open index.html   # or double-click in your file explorer

# Option 2: local server
python3 -m http.server 8000   # or: npm start
# then open http://localhost:8000
```

No install, no build step, no API keys, no secrets.

## Verification results

`npm test` — `node scripts/verify.js` — **passes**:

- `data/tools.json` is valid JSON
- All 20 tools have required fields (id, name, cost, costDetail, platforms, devices, category, need, builtIn, setup, link, tags)
- All links are valid URLs and none are affiliate links
- All group toolIds reference existing tools (5 need groups, 7 device groups)
- Every tool is assigned to at least one need group and one device group
- `index.html` references `css/style.css` and `js/app.js`; `js/app.js` loads `data/tools.json`
- `tools.md` mentions every tool by name

Site check: `index.html`, `data/tools.json`, `tools.md`, `css/style.css`, and `js/app.js` all return HTTP 200 when served with `python3 -m http.server` and fetched over `http://localhost:8000`.

## Known gaps

- No automated browser tests (no headless browser available in this environment); filter/search behavior is covered manually via `scripts/verify.js` data checks plus a manual HTTP check.
- Data is static: new OS versions, pricing, or support URLs must be updated by hand in `data/tools.json` and `tools.md`.
- Some entries are marked beta (macOS/iOS Live Captions) or require a free Google/YouTube account for free tiers (noted in costDetail).
- OpenAI Whisper (local) and Whisper.cpp require downloading model files (1–5 GB) and, for Whisper, Python and `pip`.
- Vosk and Whisper.cpp Android support requires manual setup; not all Android devices are supported out of the box.
- The Chrome Live Caption link points to Chrome Help, which may change over time.
