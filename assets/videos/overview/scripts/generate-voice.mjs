import fs from "node:fs/promises";

async function loadEnv(file) {
  try {
    const text = await fs.readFile(file, "utf8");
    for (const line of text.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
      process.env[key] = process.env[key] || value;
    }
  } catch {}
}

await loadEnv(".env");

const config = JSON.parse(await fs.readFile("content/variants.json", "utf8"));
const variantId = process.env.VARIANT_ID || "v4";
const variant = config.variants.find((item) => item.id === variantId);

if (!variant) {
  throw new Error(`Missing ${variantId} variant in content/variants.json.`);
}

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  throw new Error("ELEVENLABS_API_KEY is not set.");
}

const voiceId = process.env.PRESETTER_VOICE_ID || config.voice.voiceId;
const spokenScript = variant.voiceScript || variant.spokenScript || variant.script;

async function synthesize(body) {
  return fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps`, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "content-type": "application/json",
      accept: "audio/mpeg"
    },
    body: JSON.stringify(body)
  });
}

const baseBody = {
  text: spokenScript,
  model_id: "eleven_v3"
};

let response = await synthesize({
  ...baseBody,
  voice_settings: {
    stability: 0.36,
    similarity_boost: 0.72,
    style: 0.45,
    use_speaker_boost: true,
    speed: 0.97
  }
});

if (!response.ok && response.status === 400) {
  response = await synthesize(baseBody);
}

if (!response.ok) {
  const detail = await response.text();
  throw new Error(`ElevenLabs v3 failed for ${variant.id}: ${response.status} ${detail}`);
}

await fs.mkdir("assets/audio", { recursive: true });
const payload = await response.json();
const audio = Buffer.from(payload.audio_base64, "base64");
await fs.writeFile(`assets/audio/presetter-${variant.id}-voice.mp3`, audio);
await fs.writeFile(
  `assets/audio/presetter-${variant.id}-alignment.json`,
  JSON.stringify(
    {
      voice_id: voiceId,
      model_id: "eleven_v3",
      text: spokenScript,
      alignment: payload.alignment,
      normalized_alignment: payload.normalized_alignment
    },
    null,
    2
  )
);
console.log(`voice wrote: assets/audio/presetter-${variant.id}-voice.mp3 (${audio.length} bytes)`);
console.log(`alignment wrote: assets/audio/presetter-${variant.id}-alignment.json`);
