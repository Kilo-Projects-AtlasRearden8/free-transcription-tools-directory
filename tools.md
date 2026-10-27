# Free Transcription and Caption Tools Directory

Free no-account transcription and caption tools — live captions, dictation, audio/video-to-text, local Whisper options, and caption editors — each with cost, platform, setup steps, and an official link. No affiliate links. Every link points to an official product or support page.

Published by [Asdale Dynamics, LLC](https://dylanasdale.github.io) (Indiana, formed Oct 2026) — beginner-friendly AI education, books, and practical tools.

## How to use this directory

- Browse by **need** (Live captions, Transcription, Dictation, Caption editing, Reading & playback) or by **device** (Windows, macOS, Linux, iOS, Android, Web, ChromeOS).
- Each tool lists cost, platforms, setup steps, and an official link.
- **"Built in"** means the feature comes free with the operating system or browser — nothing to download.
- **Local** tools run entirely on your computer; no audio leaves your device and no account is needed.
- The companion site (`index.html`) is a static HTML page with client-side search and filters; it runs entirely in your browser with no install or build step.

---

## By need

### Live captions

#### Windows Live Captions
- **Cost:** Free
- **Platforms:** Windows
- **Built in:** Yes — built into Windows 11 at no extra cost; runs locally
- **Setup:** Press Windows+Ctrl+L to turn Live Captions on. Download the language pack when prompted, then pick your caption style and microphone source in Settings > Accessibility > Captions. Works for any audio playing on your PC, including microphone input.
- **Official link:** https://support.microsoft.com/windows/use-live-captions-to-understand-audio-better

#### macOS Live Captions
- **Cost:** Free
- **Platforms:** macOS
- **Built in:** Yes — built into macOS at no extra cost
- **Setup:** Open System Settings > Accessibility > Live Captions (beta) and turn it on. Captions appear in a floating window for any audio playing on your Mac.
- **Official link:** https://support.apple.com/guide/mac-help/use-live-captions-on-mac-mh42238/mac

#### iOS Live Captions
- **Cost:** Free
- **Platforms:** iOS (iPhone, iPad)
- **Built in:** Yes — built into iOS 16 and later at no extra cost
- **Setup:** Open Settings > Accessibility > Live Captions (beta) and turn it on. Type-to-speak responses are also supported during FaceTime and phone calls.
- **Official link:** https://support.apple.com/guide/iphone/use-live-captions-iphone

#### Chrome Live Caption
- **Cost:** Free
- **Platforms:** Chrome (any OS), ChromeOS
- **Built in:** Yes — built into the Chrome browser at no extra cost
- **Setup:** Open Chrome Settings > Accessibility and turn on Live Caption. Captions appear automatically for videos and audio playing in Chrome tabs.
- **Official link:** https://support.google.com/chrome/answer/99619157

#### Live Transcribe & Sound Notifications
- **Cost:** Free
- **Platforms:** Android
- **Built in:** No
- **Setup:** Install Live Transcribe from the Play Store, then enable it in Settings > Accessibility > Live Transcribe. It transcribes speech in real time and can alert you to sounds like doorbells or alarms.
- **Official link:** https://support.google.com/android/answer/9206238

### Transcription

#### OpenAI Whisper (local)
- **Cost:** Free
- **Platforms:** Windows, macOS, Linux
- **Built in:** No
- **Setup:** Install Python from python.org, then run `pip install faster-whisper`. Transcribe a file with `python -m faster_whisper transcribe audio.mp3 --model base --output_format txt`. No audio leaves your computer.
- **Official link:** https://github.com/openai/whisper

#### Whisper.cpp
- **Cost:** Free
- **Platforms:** Windows, macOS, Linux, Android
- **Built in:** No
- **Setup:** Download a prebuilt binary from the GitHub releases page (or install with `brew install whisper.cpp` on Mac). Run `whisper-cli -m models/ggml-base.en.bin -f meeting.wav -of output` to get a local transcript.
- **Official link:** https://github.com/ggerganov/whisper.cpp

#### Vosk
- **Cost:** Free
- **Platforms:** Linux, Android
- **Built in:** No
- **Setup:** Download a model from alphacephei.com/vosk/models, then use the Vosk API or command-line tool to transcribe audio offline. Models are around 50 MB, so it runs on low-end hardware.
- **Official link:** https://alphacephei.com/vosk/

#### oTranscribe
- **Cost:** Free
- **Platforms:** Web
- **Built in:** No
- **Setup:** Open otranscribe.com in any browser. Upload your audio or video file, then play it in the built-in player and type the transcript in the same window. Your audio stays in your browser — nothing is uploaded.
- **Official link:** https://otranscribe.com/

#### Google Docs Voice Typing
- **Cost:** Free
- **Platforms:** Web
- **Built in:** No
- **Setup:** Open docs.google.com in Chrome or Edge, create a new document, then click Tools > Voice typing. Click the microphone icon and speak — text appears in real time. Sign in with a free Google account.
- **Official link:** https://docs.google.com/

#### YouTube Auto-Captions
- **Cost:** Free
- **Platforms:** Web
- **Built in:** No
- **Setup:** Go to studio.youtube.com and sign in. Upload your video as Unlisted, wait for YouTube to generate auto-captions, then go to Subtitles > your video > English (Automatic) and download the captions as .vtt, .srt, or .txt.
- **Official link:** https://studio.youtube.com/

### Dictation

#### Windows Dictation
- **Cost:** Free
- **Platforms:** Windows
- **Built in:** Yes — built into Windows at no extra cost
- **Setup:** Press Windows+H in any text field to start dictation. Say punctuation like 'period' or 'comma' as you speak. Enable online speech recognition in Settings > Privacy & security > Speech.
- **Official link:** https://support.microsoft.com/windows/dictate-text-using-speech-recognition

#### Windows Voice Access
- **Cost:** Free
- **Platforms:** Windows
- **Built in:** Yes — built into Windows 11 at no extra cost
- **Setup:** Open Settings > Accessibility > Speech > Voice Access and turn it on. Download the language pack when prompted, then say 'Voice Access wake up' to begin controlling your PC and dictating by voice.
- **Official link:** https://support.microsoft.com/windows/use-voice-access-to-control-your-pc-with-your-voice

#### macOS Dictation
- **Cost:** Free
- **Platforms:** macOS
- **Built in:** Yes — built into macOS at no extra cost
- **Setup:** Open System Settings > Keyboard > Dictation and turn it on. Press the Fn key (or the Dictation key) twice to start speaking wherever you can type.
- **Official link:** https://support.apple.com/guide/mac-help/dictate-text-on-mac

#### macOS Voice Control
- **Cost:** Free
- **Platforms:** macOS
- **Built in:** Yes — built into macOS at no extra cost
- **Setup:** Open System Settings > Accessibility > Voice Control and turn it on. Number overlays and a grid let you click, scroll, and navigate entirely by voice.
- **Official link:** https://support.apple.com/guide/mac-help/control-your-mac-using-voice-control

#### iOS Dictation
- **Cost:** Free
- **Platforms:** iOS (iPhone, iPad)
- **Built in:** Yes — built into iOS at no extra cost
- **Setup:** Open Settings > General > Keyboard and turn on Enable Dictation. Tap the microphone icon on the keyboard to dictate text in any app.
- **Official link:** https://support.apple.com/guide/iphone/dictate-text-on-iphone

#### Gboard Voice Typing
- **Cost:** Free
- **Platforms:** Android, iOS
- **Built in:** No
- **Setup:** Install Gboard from the Play Store (Android) or App Store (iOS), set it as your keyboard, then tap the microphone icon on the keyboard to dictate text.
- **Official link:** https://gboard.blogspot.com/

### Caption editing

#### Subtitle Edit
- **Cost:** Free
- **Platforms:** Windows
- **Built in:** No
- **Setup:** Download and install Subtitle Edit from subtitleedit.org. Open an .srt or .vtt caption file, fix timing and text, then save. You can also create captions from scratch and sync them to audio.
- **Official link:** https://subtitleedit.org/

#### Aegisub
- **Cost:** Free
- **Platforms:** Windows, macOS, Linux
- **Built in:** No
- **Setup:** Download Aegisub from aegisub.org and install it for your operating system. Open a subtitle file, edit the text and timing with the built-in audio player and waveform, then save as .ass, .srt, or .vtt.
- **Official link:** https://www.aegisub.org/

### Reading & playback

#### Android Select to Speak
- **Cost:** Free
- **Platforms:** Android
- **Built in:** Yes — built into Android at no extra cost
- **Setup:** Open Settings > Accessibility > Select to Speak and turn it on. Tap the Play button or tap items on screen to hear them read aloud.
- **Official link:** https://support.google.com/android/answer/9206284

---

## By device

### Windows
- **Windows Live Captions** — Live captions — Built in
- **Windows Dictation** — Dictation — Built in
- **Windows Voice Access** — Dictation — Built in
- **OpenAI Whisper (local)** — Transcription
- **Whisper.cpp** — Transcription
- **Subtitle Edit** — Caption editing

### macOS
- **macOS Live Captions** — Live captions — Built in
- **macOS Dictation** — Dictation — Built in
- **macOS Voice Control** — Dictation — Built in
- **OpenAI Whisper (local)** — Transcription
- **Whisper.cpp** — Transcription
- **Aegisub** — Caption editing

### Linux
- **OpenAI Whisper (local)** — Transcription
- **Whisper.cpp** — Transcription
- **Vosk** — Transcription
- **Aegisub** — Caption editing

### iOS (iPhone / iPad)
- **iOS Live Captions** — Live captions — Built in
- **iOS Dictation** — Dictation — Built in
- **Gboard Voice Typing** — Dictation

### Android
- **Live Transcribe & Sound Notifications** — Live captions
- **Android Select to Speak** — Reading & playback — Built in
- **Gboard Voice Typing** — Dictation
- **Whisper.cpp** — Transcription
- **Vosk** — Transcription

### Web (any device)
- **Chrome Live Caption** — Live captions — Built in
- **oTranscribe** — Transcription
- **Google Docs Voice Typing** — Transcription
- **YouTube Auto-Captions** — Transcription

### ChromeOS
- **Chrome Live Caption** — Live captions — Built in

---

## Notes on cost and accounts

- **Built in** tools are free with the operating system or browser — no download, no account.
- **Local** tools (Whisper, Whisper.cpp, Vosk) run on your computer and need no account, no API key, and no internet after setup.
- **Free tier** tools (Google Docs Voice Typing, YouTube Auto-Captions) are free but require a free Google/YouTube account.
- None of these tools require a paid subscription to use the features listed.

---

Published by Asdale Dynamics, LLC (Indiana, formed Oct 2026). LLC focus: beginner-friendly AI education, books and guides, and practical tools. Hub site: [dylanasdale.github.io](https://dylanasdale.github.io).

## License

MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. See [LICENSE](LICENSE).
