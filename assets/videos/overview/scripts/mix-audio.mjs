import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";

const variantId = process.env.VARIANT_ID || "v4";
const config = JSON.parse(await fs.readFile("content/variants.json", "utf8"));
const variant = config.variants.find((item) => item.id === variantId);

if (!variant) {
  throw new Error(`Missing ${variantId} variant in content/variants.json.`);
}

await fs.mkdir("assets/audio/mix", { recursive: true });

const duration = String(variant.duration);
const bedPath = "assets/audio/presetter-uplifting-bed.wav";
const voicePath = `assets/audio/presetter-${variantId}-voice.mp3`;
const outPath = `assets/audio/mix/presetter-${variantId}-mix.mp3`;

execFileSync(
  "ffmpeg",
  [
    "-y",
    "-stream_loop",
    "-1",
    "-i",
    bedPath,
    "-i",
    voicePath,
    "-filter_complex",
    `[0:a]atrim=0:${duration},asetpts=PTS-STARTPTS,volume=0.17,lowpass=f=9500,highpass=f=80[bed];` +
      "[1:a]adelay=350|350,volume=1.0[voice];" +
      "[bed][voice]amix=inputs=2:duration=first:dropout_transition=0,loudnorm=I=-16:TP=-1.5:LRA=11[a]",
    "-map",
    "[a]",
    "-c:a",
    "libmp3lame",
    "-b:a",
    "192k",
    outPath
  ],
  { stdio: "inherit" }
);

console.log(`mix wrote: ${outPath}`);
