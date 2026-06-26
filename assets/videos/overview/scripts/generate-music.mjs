import fs from "node:fs";
import fsp from "node:fs/promises";

const SAMPLE_RATE = 48000;
const CHANNELS = 2;
const DURATION = 74;
const BPM = 122;
const beat = 60 / BPM;
const totalSamples = Math.floor(SAMPLE_RATE * DURATION);

await fsp.mkdir("assets/audio", { recursive: true });

function clamp(value) {
  return Math.max(-1, Math.min(1, value));
}

function tone(freq, t, type = "sine") {
  const x = 2 * Math.PI * freq * t;
  if (type === "tri") return (2 * Math.asin(Math.sin(x))) / Math.PI;
  if (type === "soft-square") return Math.tanh(Math.sin(x) * 1.7);
  return Math.sin(x);
}

function noise(seed) {
  let x = (seed + 1) * 1664525 + 1013904223;
  x = (x >>> 16) & 32767;
  return x / 16383.5 - 1;
}

function envelope(local, attack, decay) {
  if (local < 0) return 0;
  if (local < attack) return local / attack;
  return Math.exp(-(local - attack) / decay);
}

function kick(t) {
  const local = t % beat;
  if (local > 0.18) return 0;
  const freq = 72 * Math.exp(-local * 20) + 44;
  return tone(freq, local) * Math.exp(-local * 18) * 0.58;
}

function clap(t, i) {
  const local = (t - beat) % (beat * 2);
  if (local < 0 || local > 0.16) return 0;
  return (noise(i * 19) * 0.09 + tone(210, local, "tri") * 0.1) * Math.exp(-local * 24);
}

const roots = [110, 146.83, 130.81, 164.81];
const leadNotes = [440, 493.88, 392, 329.63, 392, 493.88, 523.25, 493.88];

function bass(t) {
  const bar = beat * 4;
  const root = roots[Math.floor(t / bar) % roots.length];
  const local = t % beat;
  const pulse = envelope(local, 0.015, 0.25);
  return (tone(root / 2, t, "soft-square") * 0.28 + tone(root, t, "tri") * 0.08) * pulse;
}

function piano(t) {
  const step = beat / 2;
  const idx = Math.floor(t / step) % leadNotes.length;
  const local = t % step;
  const note = leadNotes[idx];
  const e = envelope(local, 0.018, 0.24);
  return (tone(note, t, "tri") * 0.13 + tone(note / 2, t, "sine") * 0.08) * e;
}

function pad(t) {
  const bar = beat * 8;
  const root = roots[Math.floor(t / bar) % roots.length];
  const chord = [root, root * 1.25, root * 1.5, root * 2];
  const fade = Math.min(1, (t % bar) / 1.2) * Math.min(1, (bar - (t % bar)) / 1.2);
  return chord.reduce((sum, freq, index) => {
    const drift = Math.sin(t * 0.12 + index) * 0.8;
    return sum + tone(freq + drift, t, "sine") * 0.038;
  }, 0) * fade;
}

function shaker(t, i) {
  const step = beat / 4;
  const local = t % step;
  if (local > 0.036) return 0;
  return noise(i * 7) * Math.exp(-local * 62) * 0.018;
}

function writeWav(file, left, right) {
  const dataSize = totalSamples * CHANNELS * 2;
  const buffer = Buffer.alloc(44 + dataSize);
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(CHANNELS, 22);
  buffer.writeUInt32LE(SAMPLE_RATE, 24);
  buffer.writeUInt32LE(SAMPLE_RATE * CHANNELS * 2, 28);
  buffer.writeUInt16LE(CHANNELS * 2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  let offset = 44;
  for (let i = 0; i < totalSamples; i++) {
    buffer.writeInt16LE(Math.round(clamp(left[i]) * 32767), offset);
    buffer.writeInt16LE(Math.round(clamp(right[i]) * 32767), offset + 2);
    offset += 4;
  }
  fs.writeFileSync(file, buffer);
}

const left = new Float32Array(totalSamples);
const right = new Float32Array(totalSamples);

for (let i = 0; i < totalSamples; i++) {
  const t = i / SAMPLE_RATE;
  const fade = Math.min(1, t / 2.5) * Math.min(1, (DURATION - t) / 3);
  const groove = kick(t) + clap(t, i) + shaker(t, i);
  const music = bass(t) + piano(t) + pad(t);
  const width = pad(t + 0.027) * 0.28 + piano(t + 0.011) * 0.18;
  left[i] = (groove * 0.48 + music - width) * fade * 0.7;
  right[i] = (groove * 0.48 + music + width) * fade * 0.7;
}

writeWav("assets/audio/presetter-uplifting-bed.wav", left, right);
console.log("music wrote: assets/audio/presetter-uplifting-bed.wav");
