# Presetter Launch Video

This directory contains the minimal source package for regenerating `assets/overview.mp4`, the README launch video used by the Presetter monorepo and package README.

## Requirements

- Node.js 18 or newer
- ffmpeg and ffprobe on `PATH`
- HyperFrames, invoked through `npx --yes hyperframes@0.6.120`
- An `.env` file in this directory when regenerating voice audio

Copy `.env.example` to `.env` and fill in:

```sh
ELEVENLABS_API_KEY=
GEMINI_API_KEY=
```

`ELEVENLABS_API_KEY` is required for `npm run voice`. The current final video uses ElevenLabs v3 with the Liam voice (`TX3LPaxmHKxFdv7VOQHJ`). `GEMINI_API_KEY` is kept in the example for future cloud music/image workflows; the current upbeat background bed is generated locally by `scripts/generate-music.mjs`.

## Reproduce

Run from this directory:

```sh
npm run reproduce
```

That command:

1. Generates the ElevenLabs v3 voice and timestamp alignment from `content/variants.json`.
2. Generates the upbeat local music bed.
3. Mixes voice and music into `assets/audio/mix/presetter-v4-mix.mp3`.
4. Builds `compositions/presetter-v4.html` and `index.html`.
5. Runs HyperFrames validation and inspection.
6. Renders the final MP4 to `../../overview.mp4`.

Generated files are intentionally not stored in this source package:

- `assets/audio/`
- `compositions/`
- `index.html`

The spoken script says "Presetter dot dev"; `captionScript` displays `presetter.dev` so the on-screen caption matches the README CTA.

## Voice Markup

The source uses separate narration fields:

- `voiceScript`: sent to ElevenLabs. This may include Eleven v3 delivery tags such as `[warm, conversational]`, `[curious]`, `[relieved]`, and `[excited]`, plus ellipses for natural pacing.
- `captionScript`: shown on screen. This stays clean, without voice-direction tags, and uses `presetter.dev` for the visual CTA.
- `script`: plain fallback copy.

`scripts/build.mjs` strips square-bracket voice tags before matching ElevenLabs character alignment to captions, so expressive delivery markup does not appear on screen.
