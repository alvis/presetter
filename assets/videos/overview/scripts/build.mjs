import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";

const WIDTH = 1920;
const HEIGHT = 1080;
const CAPTION_Y = 900;
const VARIANT_ID = process.env.VARIANT_ID || "v4";
const VOICE_DELAY_SECONDS = 0.35;

const sceneKeys = ["opening", "growth", "agents", "drift", "source", "ecosystem", "merge", "cta"];

const sceneCopy = {
  opening: {
    kicker: "RECURRING PAIN",
    title: "Config maintenance comes back.",
    note: "A new repo or a toolchain update starts the same checklist again."
  },
  growth: {
    kicker: "TOOLCHAIN FILES",
    title: "The config list keeps growing.",
    note: "ESLint, Vitest, TypeScript, scripts, release rules, runtimes, overrides."
  },
  agents: {
    kicker: "AI AGENT LAYER",
    title: "Now agents add another stack.",
    note: "CLAUDE.md, AGENTS.md, standards, skills, hooks, MCP, and teams."
  },
  drift: {
    kicker: "TINY MIGRATIONS",
    title: "More files. More ways to drift.",
    note: "Every update becomes a cross-repo migration with hidden differences."
  },
  source: {
    kicker: "SOURCE OF TRUTH",
    title: "Put intent in Presetter config.",
    note: "Compose presets. Keep overrides explicit. Generate the rest."
  },
  ecosystem: {
    kicker: "OFFICIAL PRESETS",
    title: "Stack the toolchain you actually need.",
    note: "Essentials, monorepo, ESM, Bun, Node, React, Next, strict, and more."
  },
  merge: {
    kicker: "WORKFLOWS",
    title: "Shared baseline. Local shape.",
    note: "Scripts merge. Packages keep the differences that matter."
  },
  cta: {
    kicker: "PRESETTER",
    title: "Make configuration maintainable again.",
    note: "Explore the engine, official presets, and docs."
  }
};

function esc(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsString(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function stripVoiceMarkup(text) {
  return String(text)
    .replace(/\[[^\]]+\]\s*/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanVoiceScriptWithMap(text) {
  const clean = [];
  const map = [];
  let inTag = false;
  let pendingSpace = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === "[") {
      inTag = true;
      pendingSpace = clean.length > 0;
      continue;
    }
    if (inTag) {
      if (char === "]") inTag = false;
      continue;
    }
    if (/\s/.test(char)) {
      pendingSpace = clean.length > 0;
      continue;
    }
    if (pendingSpace) {
      clean.push(" ");
      map.push(i);
      pendingSpace = false;
    }
    clean.push(char);
    map.push(i);
  }

  return { clean: clean.join("").trim(), map };
}

function durationOf(file) {
  return Number(
    execFileSync("ffprobe", [
      "-v",
      "error",
      "-show_entries",
      "format=duration",
      "-of",
      "default=nk=1:nw=1",
      file
    ])
      .toString()
      .trim()
  );
}

function splitScript(text) {
  const normalized = text
    .replace(/CLAUDE\.md/g, "CLAUDE_DOT_md")
    .replace(/AGENTS\.md/g, "AGENTS_DOT_md")
    .replace(/presetter\.dev/gi, "presetter_DOT_dev");
  const restore = (value) => value
    .replace(/CLAUDE_DOT_md/g, "CLAUDE.md")
    .replace(/AGENTS_DOT_md/g, "AGENTS.md")
    .replace(/presetter_DOT_dev/g, "presetter.dev");
  const sentences = normalized
    .replace(/\s+/g, " ")
    .match(/[^.!?]+[.!?]+/g)
    ?.map((sentence) => sentence.trim().replace(/[.!?]$/, "")) || [text];

  const chunks = [];
  for (const sentence of sentences) {
    const words = sentence.split(/\s+/).filter(Boolean);
    if (words.length <= 8) {
      chunks.push(restore(sentence));
      continue;
    }
    for (let i = 0; i < words.length; i += 7) {
      chunks.push(restore(words.slice(i, i + 7).join(" ")));
    }
  }
  return chunks;
}

function captionGroups(script, voiceDuration, totalDuration) {
  const chunks = splitScript(script);
  const weights = chunks.map((chunk) => chunk.split(/\s+/).filter(Boolean).length);
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let cursor = 0.45;
  const usable = Math.min(voiceDuration + 0.35, totalDuration - 1.1) - cursor;

  return chunks.map((chunk, index) => {
    const length = Math.max(0.95, (usable * weights[index]) / totalWeight);
    const start = cursor;
    const end = Math.min(totalDuration - 0.4, cursor + length);
    cursor = end + 0.05;
    return {
      text: chunk,
      start: Number(start.toFixed(2)),
      end: Number(end.toFixed(2))
    };
  });
}

function timedCaptionGroups(spokenScript, captionScript, timingPayload, totalDuration) {
  const alignment = timingPayload?.alignment || timingPayload;
  const characters = alignment?.characters || [];
  const starts = alignment?.character_start_times_seconds || [];
  const ends = alignment?.character_end_times_seconds || [];

  if (!characters.length || starts.length !== characters.length || ends.length !== characters.length) {
    return null;
  }

  const { clean: cleanSpokenScript, map: cleanToOriginalIndex } = cleanVoiceScriptWithMap(spokenScript);
  const spokenChunks = splitScript(cleanSpokenScript);
  const captionChunks = splitScript(captionScript);
  const groups = [];
  let searchFrom = 0;

  for (let index = 0; index < spokenChunks.length; index++) {
    const chunk = spokenChunks[index];
    const startIndex = cleanSpokenScript.indexOf(chunk, searchFrom);
    if (startIndex === -1) return null;

    const endIndex = startIndex + chunk.length;
    searchFrom = endIndex;

    let firstTimed = cleanToOriginalIndex[startIndex] ?? startIndex;
    while (firstTimed < characters.length && starts[firstTimed] == null) firstTimed++;

    let lastTimed = Math.min(cleanToOriginalIndex[endIndex - 1] ?? endIndex - 1, characters.length - 1);
    while (lastTimed >= 0 && ends[lastTimed] == null) lastTimed--;

    if (firstTimed >= characters.length || lastTimed < firstTimed) return null;

    const start = Math.max(0, starts[firstTimed] + VOICE_DELAY_SECONDS - 0.04);
    const end = Math.min(totalDuration - 0.4, ends[lastTimed] + VOICE_DELAY_SECONDS + 0.08);
    groups.push({
      text: captionChunks[index] || chunk,
      start: Number(start.toFixed(2)),
      end: Number(Math.max(start + 0.55, end).toFixed(2))
    });
  }

  for (let i = 0; i < groups.length - 1; i++) {
    if (groups[i].end > groups[i + 1].start - 0.03) {
      groups[i].end = Number(Math.max(groups[i].start + 0.45, groups[i + 1].start - 0.03).toFixed(2));
    }
  }

  return groups;
}

function sceneDurations(totalDuration) {
  const weights = [0.86, 1.0, 1.06, 0.95, 1.0, 0.82, 0.95, 0.72];
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let cursor = 0;

  return sceneKeys.map((key, index) => {
    const duration = index === sceneKeys.length - 1
      ? totalDuration - cursor
      : (totalDuration * weights[index]) / totalWeight;
    const start = cursor;
    cursor += duration;
    return {
      key,
      start: Number(start.toFixed(3)),
      duration: Number(duration.toFixed(3)),
      end: Number((start + duration).toFixed(3))
    };
  });
}

function treeLine(line) {
  const item = typeof line === "string" ? { text: line } : line;
  const type = item.type ? ` ${item.type}` : "";
  return `<div class="tree-line${type}"><span class="tree-dot"></span>${esc(item.text)}</div>`;
}

function fileTree(title, lines, extra = "") {
  return `
    <div class="file-tree ${extra}">
      <div class="tree-head"><span></span><span></span><span></span><strong data-label="${esc(title)}"></strong></div>
      <div class="tree-body">${lines.map(treeLine).join("")}</div>
    </div>
  `;
}

function chip(label, tone = "") {
  return `<span class="chip ${tone}">${esc(label)}</span>`;
}

function logoOrb() {
  return `
    <div class="animated-logo" aria-label="Animated Presetter logo">
      <svg viewBox="0 0 280 280" aria-hidden="true" data-layout-allow-overflow>
        <circle class="logo-ring one" cx="140" cy="140" r="116" />
        <circle class="logo-ring two" cx="140" cy="140" r="92" />
        <circle class="logo-spark green s1" cx="62" cy="80" r="7" />
        <circle class="logo-spark blue s2" cx="222" cy="86" r="6" />
        <circle class="logo-spark green s3" cx="212" cy="205" r="9" />
      </svg>
      <img class="logo-base" src="assets/logo.svg" alt="Presetter logo" />
    </div>
  `;
}

function sceneBody(key) {
  const c = sceneCopy[key];

  if (key === "opening") {
    return `
      <div class="opening-layout">
        <div class="copy-block">
          <div class="kicker">${esc(c.kicker)}</div>
          <h1>${esc(c.title)}</h1>
          <p>${esc(c.note)}</p>
          <div class="pill">files pulse into almost-matching trees</div>
        </div>
        <div class="logo-stage glass">
          ${logoOrb()}
          <div class="mini-forest" data-layout-allow-occlusion>
            ${fileTree("repo-a", ["package.json", { text: "eslint.config.ts", type: "generated" }, { text: "CLAUDE.md", type: "generated" }])}
            ${fileTree("repo-b", ["package.json", { text: "old hook rules", type: "warning" }, { text: "AGENTS.md", type: "generated" }])}
          </div>
        </div>
      </div>
    `;
  }

  if (key === "growth") {
    return `
      <div class="inventory-layout">
        <div class="copy-block">
          <div class="kicker">${esc(c.kicker)}</div>
          <h1>${esc(c.title)}</h1>
          <p>${esc(c.note)}</p>
          <div class="callout-grid">
            <div class="callout"><strong>Toolchain</strong><span>rules, scripts, releases, runtimes</span></div>
            <div class="callout"><strong>Overrides</strong><span>copied, adjusted, checked again</span></div>
          </div>
        </div>
        ${fileTree("workspace config inventory", [
          "presetter.config.ts",
          "package.json",
          { text: "eslint.config.ts", type: "generated" },
          { text: "vitest.config.ts", type: "generated" },
          { text: "tsconfig.json", type: "generated" },
          { text: "tsconfig.build.json", type: "generated" },
          { text: "prettier.config.ts", type: "generated" },
          { text: "lint-staged.config.ts", type: "generated" },
          { text: "rollup.config.ts", type: "generated" },
          { text: "storybook/main.ts", type: "generated" },
          { text: "React override", type: "warning" },
          { text: "Bun override", type: "warning" }
        ], "inventory-tree")}
      </div>
    `;
  }

  if (key === "agents") {
    const cards = [
      ["CLAUDE.md", "project memory", "generated"],
      ["AGENTS.md", "Codex instructions", "generated"],
      ["code standards", "shared rules", ""],
      ["agent skills", "team capabilities", ""],
      ["hooks", "lifecycle automation", "warning"],
      ["MCP access", "repo permissions", "warning"],
      ["agent teams", "specialized workers", ""],
      ["local settings", "machine-specific", "warning"]
    ];
    return `
      <div class="agents-layout">
        <div class="copy-block">
          <div class="kicker">${esc(c.kicker)}</div>
          <h1>${esc(c.title)}</h1>
          <p>${esc(c.note)}</p>
          <div class="agent-signal">same setup pain · more files · more drift</div>
        </div>
        <div class="agent-stack">
          <div class="agent-core">AI agent setup</div>
          ${cards.map(([name, detail, tone], index) => `
            <div class="agent-card ${tone}" style="--i:${index}">
              <strong>${esc(name)}</strong>
              <span>${esc(detail)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  if (key === "drift") {
    return `
      <div class="drift-layout">
        <div class="copy-block">
          <div class="kicker">${esc(c.kicker)}</div>
          <h1>${esc(c.title)}</h1>
          <p>${esc(c.note)}</p>
        </div>
        <div class="matrix">
          ${["apps/web", "packages/api", "packages/cli", "packages/runtime"].map((name, index) => `
            <div class="matrix-card">
              <b>${esc(name)}</b>
              <span class="generated">toolchain baseline</span>
              <span class="${index === 0 ? "warning" : "generated"}">${index === 0 ? "React rules" : "agent docs"}</span>
              <span class="${index === 1 ? "warning" : "generated"}">${index === 1 ? "MCP access" : "hooks"}</span>
              <span class="${index === 3 ? "warning" : "generated"}">${index === 3 ? "Bun override" : "scripts"}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  if (key === "source") {
    return `
      <div class="source-layout">
        <div class="copy-block">
          <div class="kicker">${esc(c.kicker)}</div>
          <h1>${esc(c.title)}</h1>
          <p>${esc(c.note)}</p>
          <div class="stack-row">
            ${chip("essentials", "green")}
            ${chip("monorepo")}
            ${chip("ESM", "dark")}
            ${chip("Bun")}
            ${chip("Node")}
          </div>
        </div>
        <div class="source-flow">
          <div class="code-card">
            <div class="tree-head"><span></span><span></span><span></span><strong data-label="presetter.config.ts"></strong></div>
            <pre>extends:
  essentials
  monorepo
  esm
  node
  bun

scripts:
  merge package.json

  generate:
  configs + agents</pre>
          </div>
          <div class="output-stack">
            ${["eslint.config.ts", "vitest.config.ts", "CLAUDE.md", "AGENTS.md", "package scripts"].map((name) => `<div class="ghost-file">${esc(name)}</div>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  if (key === "ecosystem") {
    const chips = ["essentials", "monorepo", "ESM", "Bun", "Node", "React", "Next", "strict", "web", "storybook", "rollup"];
    return `
      <div class="ecosystem-layout">
        <div class="copy-block">
          <div class="kicker">${esc(c.kicker)}</div>
          <h1>${esc(c.title)}</h1>
          <p>${esc(c.note)}</p>
        </div>
        <div class="preset-cloud">
          ${chips.map((name, index) => chip(name, index % 3 === 0 ? "green" : index % 3 === 1 ? "blue" : "dark")).join("")}
        </div>
      </div>
    `;
  }

  if (key === "merge") {
    return `
      <div class="merge-layout">
        <div class="copy-block">
          <div class="kicker">${esc(c.kicker)}</div>
          <h1>${esc(c.title)}</h1>
          <p>${esc(c.note)}</p>
        </div>
        <div class="merge-board">
          <div class="script-card"><strong>local</strong><span>dev</span><span>preview</span><span>deploy</span></div>
          <div class="merge-symbol">+</div>
          <div class="script-card"><strong>preset</strong><span>build</span><span>test</span><span>lint</span><span>agents</span></div>
          <div class="merge-symbol">=</div>
          <div class="script-card merged"><strong>workflow</strong><span>run build</span><span>run test</span><span>agent setup</span></div>
        </div>
        <div class="package-strip">
          <span>apps/web · React</span>
          <span>packages/api · Node</span>
          <span>packages/runtime · Bun</span>
          <span>agents · hooks + MCP</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="cta-layout">
      <div class="logo-stage glass">
        ${logoOrb()}
      </div>
      <div class="copy-block">
        <div class="kicker">${esc(c.kicker)}</div>
        <h1>${esc(c.title)}</h1>
        <p>${esc(c.note)}</p>
        <div class="url">presetter.dev</div>
      </div>
    </div>
  `;
}

function makeHtml(variant, scenes, captions, voiceDuration) {
  const duration = variant.duration;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=${WIDTH}, height=${HEIGHT}" />
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <style>
      * { box-sizing: border-box; }
      html, body { width: ${WIDTH}px; height: ${HEIGHT}px; margin: 0; overflow: hidden; background: #EAF5F1; color: #172635; }
      body { font-family: system-ui, "Segoe UI", Arial, sans-serif; }
      #root { position: relative; width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; background:
        radial-gradient(circle at 7% 10%, rgba(183, 199, 161, 0.44), rgba(183, 199, 161, 0) 28%),
        radial-gradient(circle at 91% 86%, rgba(95, 131, 166, 0.34), rgba(95, 131, 166, 0) 34%),
        radial-gradient(circle at 50% 45%, rgba(255,255,255,0.92), rgba(255,255,255,0) 33%),
        linear-gradient(135deg, #F7FBF1 0%, #E8F6F2 44%, #F6F3EA 100%);
      }
      .scene { position: absolute; inset: 0; width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; opacity: 0; visibility: hidden; background:
        radial-gradient(circle at 18% 15%, rgba(183, 199, 161, 0.34), rgba(183, 199, 161, 0) 34%),
        radial-gradient(circle at 88% 82%, rgba(95, 131, 166, 0.31), rgba(95, 131, 166, 0) 38%),
        radial-gradient(circle at 52% 42%, rgba(255,255,255,0.84), rgba(255,255,255,0.08) 30%, rgba(255,255,255,0) 55%),
        linear-gradient(135deg, #F7FBF1 0%, #E8F6F2 52%, #F6F3EA 100%);
      }
      #scene-0 { opacity: 1; visibility: visible; }
      .liquid { position: absolute; z-index: 0; pointer-events: none; border-radius: 999px; filter: blur(18px); }
      .liquid.a { width: 600px; height: 460px; left: -150px; top: -120px; background: radial-gradient(circle, rgba(183, 199, 161, 0.75), rgba(183, 199, 161, 0.06) 72%); }
      .liquid.b { width: 620px; height: 500px; right: -140px; bottom: -120px; background: radial-gradient(circle, rgba(95, 131, 166, 0.50), rgba(95, 131, 166, 0.06) 72%); }
      .liquid.c { width: 720px; height: 520px; left: 34%; top: 24%; background: radial-gradient(circle at 38% 34%, rgba(255,255,255,0.92), rgba(183,199,161,0.26) 34%, rgba(95,131,166,0.18) 57%, rgba(95,131,166,0) 76%); filter: blur(24px); opacity: 0.88; }
      .scene::after { content: ""; position: absolute; inset: 0; opacity: 0.18; pointer-events: none; background-image: linear-gradient(rgba(36,56,74,0.10) 1px, rgba(36,56,74,0) 1px), linear-gradient(90deg, rgba(36,56,74,0.10) 1px, rgba(36,56,74,0) 1px); background-size: 84px 84px; }
      .scene-inner { position: relative; z-index: 2; width: 100%; height: 100%; padding: 96px 100px 180px; display: grid; align-items: center; isolation: isolate; }
      .scene-inner::before { content: ""; position: absolute; inset: 64px 70px 146px; z-index: -1; border-radius: 46px; border: 2px solid rgba(255,255,255,0.78); background:
        linear-gradient(135deg, rgba(255,255,255,0.56), rgba(255,255,255,0.16) 48%, rgba(95,131,166,0.10)),
        radial-gradient(circle at 18% 18%, rgba(255,255,255,0.88), rgba(255,255,255,0) 34%),
        radial-gradient(circle at 84% 74%, rgba(183,199,161,0.26), rgba(183,199,161,0) 38%);
        box-shadow: 0 40px 110px rgba(23,38,53,0.13), inset 0 1px 0 rgba(255,255,255,0.96), inset 0 -38px 80px rgba(95,131,166,0.10);
        backdrop-filter: blur(28px) saturate(1.42);
      }
      .copy-block { min-width: 0; }
      .kicker { margin: 0 0 22px; color: #6F855D; font: 900 24px "JetBrains Mono", ui-monospace, monospace; letter-spacing: 0.08em; text-transform: uppercase; }
      h1 { margin: 0; max-width: 900px; color: #172635; font: 900 88px/1.02 Georgia, "Times New Roman", serif; letter-spacing: 0; }
      p { margin: 26px 0 0; max-width: 760px; color: rgba(36, 56, 74, 0.88); font-size: 36px; font-weight: 700; line-height: 1.2; }
      .glass { border: 2px solid rgba(255,255,255,0.88); border-radius: 34px; background: linear-gradient(135deg, rgba(255,255,255,0.70), rgba(255,255,255,0.22) 48%, rgba(95,131,166,0.12)); box-shadow: 0 34px 96px rgba(23,38,53,0.15), inset 0 1px 0 rgba(255,255,255,0.98), inset 0 -30px 74px rgba(95,131,166,0.12); backdrop-filter: blur(28px) saturate(1.42); }
      .pill, .url { display: inline-flex; align-items: center; min-height: 62px; margin-top: 34px; padding: 0 26px; border-radius: 999px; background: rgba(15,23,32,0.88); color: #F8FAF4; font: 900 21px "JetBrains Mono", ui-monospace, monospace; box-shadow: 0 18px 46px rgba(23,38,53,0.22); }
      .opening-layout, .inventory-layout, .agents-layout, .drift-layout, .source-layout, .ecosystem-layout, .cta-layout { display: grid; grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr); gap: 72px; align-items: center; }
      .logo-stage { position: relative; display: grid; place-items: center; min-height: 610px; overflow: hidden; }
      .animated-logo { position: relative; display: grid; place-items: center; width: 390px; height: 390px; z-index: 2; }
      .animated-logo svg { position: absolute; inset: 0; width: 100%; height: 100%; }
      .logo-ring { fill: none; stroke: #5F83A6; stroke-width: 9; stroke-linecap: round; stroke-dasharray: 104 330; }
      .logo-ring.two { stroke: #B7C7A1; stroke-width: 11; stroke-dasharray: 64 360; }
      .logo-spark.green { fill: #B7C7A1; }
      .logo-spark.blue { fill: #5F83A6; }
      .logo-base { position: relative; z-index: 2; width: 238px; height: 238px; object-fit: contain; filter: drop-shadow(0 22px 48px rgba(23,38,53,0.20)); }
      .mini-forest { position: absolute; inset: auto 42px 36px auto; width: 610px; height: 292px; opacity: 0.95; }
      .mini-forest .file-tree { position: absolute; width: 330px; transform: rotate(-2deg); }
      .mini-forest .file-tree:nth-child(2) { right: 0; bottom: 0; transform: rotate(2deg); }
      .file-tree, .code-card, .matrix-card, .script-card { overflow: hidden; border-radius: 24px; border: 1px solid rgba(255,255,255,0.16); background: linear-gradient(150deg, rgba(15,23,32,0.91), rgba(22,34,49,0.78)), #0F1720; color: #F8FAF4; box-shadow: 0 30px 82px rgba(23,38,53,0.30), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -22px 60px rgba(95,131,166,0.10); backdrop-filter: blur(18px) saturate(1.22); font-family: "JetBrains Mono", ui-monospace, monospace; }
      .tree-head { display: flex; align-items: center; gap: 10px; height: 56px; padding: 0 20px; background: rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.12); }
      .tree-head span { width: 13px; height: 13px; border-radius: 50%; background: #E0705B; }
      .tree-head span:nth-child(2) { background: #B7C7A1; }
      .tree-head span:nth-child(3) { background: #5F83A6; }
      .tree-head strong { margin-left: 8px; color: #F8FAF4; font-size: 18px; font-weight: 900; }
      .tree-head strong::before { content: attr(data-label); }
      .tree-body { display: grid; gap: 10px; padding: 18px 20px 22px; }
      .tree-line { display: flex; align-items: center; gap: 12px; min-height: 38px; padding: 7px 12px; border-radius: 12px; background: rgba(255,255,255,0.06); color: #F8FAF4; font-size: 20px; font-weight: 850; white-space: nowrap; }
      .tree-dot { width: 9px; height: 9px; flex: 0 0 auto; border-radius: 50%; background: #B7C7A1; }
      .tree-line.generated, .ghost-file { color: #9BA5AD; border: 2px dashed rgba(203,210,214,0.46); }
      .tree-line.generated .tree-dot { background: #9BA5AD; }
      .tree-line.warning { color: #FFE8E2; background: rgba(224,112,91,0.24); }
      .tree-line.warning .tree-dot { background: #B7C7A1; }
      .inventory-tree { position: relative; width: 100%; }
      .inventory-tree .tree-body { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; padding: 22px; }
      .inventory-tree .tree-line { min-height: 44px; font-size: 19px; }
      .callout-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; margin-top: 34px; max-width: 700px; }
      .callout { min-height: 134px; padding: 24px 26px; border: 2px solid rgba(255,255,255,0.84); border-radius: 24px; background: linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.34)); box-shadow: 0 20px 54px rgba(23,38,53,0.13), inset 0 1px 0 rgba(255,255,255,0.96); backdrop-filter: blur(18px) saturate(1.28); }
      .callout strong { display: block; color: #172635; font: 900 29px/1.0 Georgia, "Times New Roman", serif; }
      .callout span { display: block; margin-top: 10px; color: rgba(36,56,74,0.78); font-size: 21px; font-weight: 760; line-height: 1.16; }
      .agent-signal { display: inline-flex; align-items: center; min-height: 58px; margin-top: 32px; padding: 0 22px; border-radius: 999px; color: #172635; background: rgba(183,199,161,0.72); border: 2px solid rgba(255,255,255,0.88); box-shadow: 0 16px 42px rgba(23,38,53,0.12), inset 0 1px 0 rgba(255,255,255,0.95); font: 900 19px "JetBrains Mono", ui-monospace, monospace; }
      .agent-stack { position: relative; min-height: 590px; padding: 38px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; border: 2px solid rgba(255,255,255,0.84); border-radius: 34px; background:
        radial-gradient(circle at 52% 48%, rgba(255,255,255,0.68), rgba(255,255,255,0.14) 42%, rgba(95,131,166,0.12)),
        linear-gradient(135deg, rgba(255,255,255,0.58), rgba(255,255,255,0.18));
        box-shadow: 0 30px 86px rgba(23,38,53,0.14), inset 0 1px 0 rgba(255,255,255,0.96);
        backdrop-filter: blur(28px) saturate(1.38);
      }
      .agent-stack::before, .agent-stack::after { content: ""; position: absolute; inset: 92px 118px; border: 2px dashed rgba(95,131,166,0.28); border-radius: 50%; pointer-events: none; }
      .agent-stack::after { inset: 150px 218px; border-color: rgba(183,199,161,0.42); transform: rotate(-10deg); }
      .agent-core { position: relative; z-index: 4; grid-column: 1 / -1; justify-self: center; display: grid; place-items: center; width: 300px; height: 70px; border-radius: 999px; background: rgba(15,23,32,0.92); color: #F8FAF4; border: 2px solid rgba(183,199,161,0.74); box-shadow: 0 20px 58px rgba(23,38,53,0.22); font: 900 21px "JetBrains Mono", ui-monospace, monospace; }
      .agent-card { position: relative; z-index: 3; min-height: 108px; padding: 19px 21px; border-radius: 22px; background: linear-gradient(135deg, rgba(255,255,255,0.76), rgba(255,255,255,0.34)); border: 2px solid rgba(255,255,255,0.88); box-shadow: 0 18px 46px rgba(23,38,53,0.12), inset 0 1px 0 rgba(255,255,255,0.96); backdrop-filter: blur(16px) saturate(1.24); }
      .agent-card strong { display: block; color: #172635; font: 900 26px/1.02 "JetBrains Mono", ui-monospace, monospace; }
      .agent-card span { display: block; margin-top: 10px; color: rgba(36,56,74,0.76); font-size: 19px; font-weight: 820; line-height: 1.12; }
      .agent-card.generated { color: #7B858D; border-style: dashed; }
      .agent-card.warning { background: linear-gradient(135deg, rgba(255,232,226,0.76), rgba(255,255,255,0.38)); border-color: rgba(224,112,91,0.54); }
      .matrix { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 22px; }
      .matrix-card { min-height: 560px; padding: 32px 28px; display: flex; flex-direction: column; gap: 22px; }
      .matrix-card b { display: block; margin-bottom: 8px; font-size: 19px; line-height: 1.14; }
      .matrix-card span { display: block; padding: 19px 17px; border-radius: 16px; background: rgba(248,250,244,0.08); color: #F8FAF4; font-size: 22px; font-weight: 850; }
      .matrix-card span.generated { color: #9BA5AD; border: 2px dashed rgba(203,210,214,0.46); }
      .matrix-card span.warning { color: #FFE8E2; background: rgba(224,112,91,0.23); border: 2px solid rgba(224,112,91,0.74); }
      .source-flow { display: grid; grid-template-columns: minmax(0, 1fr) 310px; gap: 24px; align-items: stretch; }
      .code-card pre { margin: 0; padding: 28px 34px 32px; color: #F8FAF4; font: 850 28px/1.32 "JetBrains Mono", ui-monospace, monospace; white-space: pre-wrap; }
      .output-stack { display: grid; gap: 16px; align-content: center; }
      .ghost-file { min-height: 62px; padding: 17px 19px; border-radius: 18px; background: linear-gradient(135deg, rgba(255,255,255,0.70), rgba(255,255,255,0.28)); font: 900 20px "JetBrains Mono", ui-monospace, monospace; box-shadow: inset 0 1px 0 rgba(255,255,255,0.96), 0 16px 36px rgba(23,38,53,0.10); backdrop-filter: blur(16px) saturate(1.22); }
      .stack-row, .preset-cloud { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 32px; }
      .chip { display: inline-flex; align-items: center; justify-content: center; min-height: 54px; padding: 0 22px; border-radius: 999px; border: 2px solid rgba(255,255,255,0.88); background: linear-gradient(135deg, rgba(255,255,255,0.76), rgba(255,255,255,0.34)); color: #172635; font: 900 20px "JetBrains Mono", ui-monospace, monospace; box-shadow: 0 16px 42px rgba(23,38,53,0.12), inset 0 1px 0 rgba(255,255,255,0.96); backdrop-filter: blur(16px) saturate(1.24); }
      .chip.green { background: rgba(183,199,161,0.78); }
      .chip.blue { background: rgba(95,131,166,0.24); }
      .chip.dark { background: rgba(15,23,32,0.90); color: #F8FAF4; }
      .ecosystem-layout { grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr); }
      .preset-cloud { margin: 0; align-content: center; justify-content: flex-start; min-height: 520px; padding: 44px; border-radius: 34px; background: linear-gradient(135deg, rgba(255,255,255,0.60), rgba(255,255,255,0.20)); border: 2px solid rgba(255,255,255,0.86); box-shadow: 0 30px 86px rgba(23,38,53,0.14), inset 0 1px 0 rgba(255,255,255,0.96); backdrop-filter: blur(26px) saturate(1.38); }
      .preset-cloud .chip { min-height: 68px; padding: 0 28px; font-size: 25px; }
      .merge-layout { display: grid; grid-template-rows: auto 1fr auto; gap: 34px; align-items: center; }
      .merge-layout .copy-block { display: grid; grid-template-columns: 360px 1fr 650px; gap: 46px; align-items: end; }
      .merge-layout .copy-block .kicker { margin: 0; }
      .merge-layout .copy-block p { margin: 0; }
      .merge-board { display: grid; grid-template-columns: 1fr 78px 1fr 78px 1.08fr; gap: 18px; align-items: center; }
      .script-card { min-height: 350px; padding: 32px; display: flex; flex-direction: column; gap: 18px; }
      .script-card strong { color: #F8FAF4; font: 900 43px/1.02 Georgia, "Times New Roman", serif; }
      .script-card span { padding: 16px 18px; border-radius: 14px; background: rgba(248,250,244,0.08); font-size: 24px; font-weight: 850; }
      .script-card.merged { background: linear-gradient(150deg, rgba(183,199,161,0.92), rgba(183,199,161,0.76)); color: #172635; }
      .script-card.merged strong { color: #172635; }
      .script-card.merged span { background: rgba(23,38,53,0.12); }
      .merge-symbol { color: #6F855D; text-align: center; font: 900 76px Georgia, "Times New Roman", serif; }
      .package-strip { display: flex; gap: 18px; }
      .package-strip span { display: inline-flex; align-items: center; min-height: 54px; padding: 0 22px; border-radius: 999px; background: rgba(255,255,255,0.68); color: #24384A; font: 850 20px "JetBrains Mono", ui-monospace, monospace; box-shadow: 0 12px 32px rgba(23,38,53,0.09); }
      .cta-layout { grid-template-columns: 500px 1fr; }
      .cta-layout .logo-stage { min-height: 560px; }
      .cta-layout h1 { max-width: 1100px; font-size: 104px; }
      .captions { position: absolute; left: 0; right: 0; top: ${CAPTION_Y}px; height: 150px; z-index: 90; display: flex; align-items: center; justify-content: center; pointer-events: none; }
      .caption-group { position: absolute; max-width: 1320px; min-height: 72px; padding: 17px 32px; border-radius: 20px; background: rgba(15,23,32,0.93); color: #F8FAF4; border: 2px solid rgba(183,199,161,0.74); box-shadow: 0 18px 48px rgba(23,38,53,0.26); font: 850 34px/1.08 system-ui, "Segoe UI", Arial, sans-serif; text-align: center; opacity: 0; visibility: hidden; }
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="presetter-${VARIANT_ID}" data-start="0" data-duration="${duration}" data-width="${WIDTH}" data-height="${HEIGHT}">
      <audio id="audio-${VARIANT_ID}" data-start="0" data-duration="${duration}" data-track-index="20" data-volume="1" src="assets/audio/mix/presetter-${VARIANT_ID}-mix.mp3"></audio>
      ${scenes.map((scene, index) => {
        const c = sceneCopy[scene.key];
        return `
          <section id="scene-${index}" class="scene scene-${scene.key}" data-scene-key="${scene.key}">
            <div class="liquid a" data-layout-ignore></div>
            <div class="liquid b" data-layout-ignore></div>
            <div class="liquid c" data-layout-ignore></div>
            <div class="scene-inner">${sceneBody(scene.key)}</div>
          </section>
        `;
      }).join("")}
      <div class="captions" data-layout-allow-occlusion>
        ${captions.map((group, index) => `<div id="caption-${index}" class="caption-group" data-layout-allow-occlusion>${esc(group.text)}</div>`).join("")}
      </div>
    </div>
    <script>
      window.__timelines = window.__timelines || {};
      var tl = gsap.timeline({ paused: true });
      var scenes = ${jsString(scenes)};
      var captions = ${jsString(captions)};
      var voiceDuration = ${voiceDuration.toFixed(3)};

      function q(sel) { return document.querySelector(sel); }
      function qa(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
      function repeatFor(duration, cycle) { return Math.max(0, Math.ceil(duration / cycle) - 1); }

      function animateAmbient(i, at) {
        var scene = q("#scene-" + i);
        var duration = scenes[i].duration;
        tl.to("#scene-" + i + " .liquid.a", { x: 70, y: 28, scale: 1.08, duration: duration, ease: "sine.inOut" }, at);
        tl.to("#scene-" + i + " .liquid.b", { x: -56, y: -36, scale: 1.06, duration: duration, ease: "sine.inOut" }, at);
        tl.to("#scene-" + i + " .liquid.c", { x: 34, y: -18, scale: 1.04, duration: duration, ease: "sine.inOut" }, at);
        qa("#scene-" + i + " .logo-ring.one").forEach(function(el) {
          tl.to(el, { rotation: 720, transformOrigin: "50% 50%", duration: duration, ease: "none" }, at);
        });
        qa("#scene-" + i + " .logo-ring.two").forEach(function(el) {
          tl.to(el, { rotation: -540, transformOrigin: "50% 50%", duration: duration, ease: "none" }, at);
        });
        qa("#scene-" + i + " .logo-base").forEach(function(el) {
          tl.to(el, { y: -12, scale: 1.018, duration: 1.7, yoyo: true, repeat: repeatFor(duration, 1.7), ease: "sine.inOut" }, at);
        });
        qa("#scene-" + i + " .logo-spark").forEach(function(el, index) {
          tl.to(el, { scale: 1.2, opacity: 0.38, transformOrigin: "50% 50%", duration: 0.95 + index * 0.12, yoyo: true, repeat: repeatFor(duration, 0.95 + index * 0.12), ease: "sine.inOut" }, at + index * 0.12);
        });
        qa("#scene-" + i + " .agent-card").forEach(function(el, index) {
          tl.to(el, { y: index % 2 === 0 ? -8 : 8, duration: 1.25 + index * 0.04, yoyo: true, repeat: repeatFor(duration, 1.25 + index * 0.04), ease: "sine.inOut" }, at + 0.2 + index * 0.05);
        });
        qa("#scene-" + i + " .agent-core").forEach(function(el) {
          tl.to(el, { scale: 1.045, duration: 1.05, yoyo: true, repeat: repeatFor(duration, 1.05), ease: "sine.inOut" }, at + 0.15);
        });
      }

      function enterScene(i, at) {
        var scene = q("#scene-" + i);
        var inner = q("#scene-" + i + " .scene-inner");
        var elements = qa([
          "#scene-" + i + " .kicker",
          "#scene-" + i + " h1",
          "#scene-" + i + " p",
          "#scene-" + i + " .pill",
          "#scene-" + i + " .url",
          "#scene-" + i + " .logo-stage",
          "#scene-" + i + " .file-tree",
          "#scene-" + i + " .tree-line",
          "#scene-" + i + " .callout",
          "#scene-" + i + " .agent-signal",
          "#scene-" + i + " .agent-core",
          "#scene-" + i + " .agent-card",
          "#scene-" + i + " .matrix-card",
          "#scene-" + i + " .code-card",
          "#scene-" + i + " .ghost-file",
          "#scene-" + i + " .chip",
          "#scene-" + i + " .script-card",
          "#scene-" + i + " .merge-symbol",
          "#scene-" + i + " .package-strip span"
        ].join(", "));

        tl.fromTo(inner, { scale: 0.986 }, { scale: 1, duration: 0.86, ease: "power2.out" }, at);
        elements.forEach(function(el, index) {
          var x = index % 4 === 0 ? -46 : index % 4 === 1 ? 44 : 0;
          var y = index % 4 === 2 ? 34 : index % 4 === 3 ? -22 : 0;
          var scale = el.classList.contains("chip") || el.classList.contains("ghost-file") ? 0.9 : 1;
          var ease = index % 3 === 0 ? "power3.out" : index % 3 === 1 ? "back.out(1.18)" : "expo.out";
          tl.fromTo(el, { opacity: 0, x: x, y: y, scale: scale }, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.42 + (index % 3) * 0.08, ease: ease }, at + 0.08 + index * 0.035);
        });
        animateAmbient(i, scenes[i].start);
      }

      function transition(oldIndex, newIndex, at, mode) {
        var oldScene = q("#scene-" + oldIndex);
        var newScene = q("#scene-" + newIndex);
        tl.set(newScene, { visibility: "visible" }, at);
        if (mode === "zoom") {
          tl.to(oldScene, { scale: 1.16, opacity: 0, filter: "blur(12px)", duration: 0.48, ease: "power3.in" }, at);
          tl.fromTo(newScene, { scale: 0.9, opacity: 0, filter: "blur(14px)" }, { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.58, ease: "power3.out" }, at + 0.08);
          tl.set(oldScene, { scale: 1, filter: "blur(0px)", opacity: 0, visibility: "hidden" }, at + 0.66);
          return;
        }
        if (mode === "blur") {
          tl.to(oldScene, { filter: "blur(16px)", scale: 1.04, opacity: 0, duration: 0.56, ease: "sine.inOut" }, at);
          tl.fromTo(newScene, { filter: "blur(16px)", scale: 0.98, opacity: 0 }, { filter: "blur(0px)", scale: 1, opacity: 1, duration: 0.58, ease: "sine.inOut" }, at + 0.06);
          tl.set(oldScene, { filter: "blur(0px)", scale: 1, opacity: 0, visibility: "hidden" }, at + 0.66);
          return;
        }
        tl.to(oldScene, { x: -${WIDTH}, filter: "blur(6px)", duration: 0.46, ease: "power3.inOut" }, at);
        tl.fromTo(newScene, { x: ${WIDTH}, opacity: 1, filter: "blur(6px)" }, { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.46, ease: "power3.inOut" }, at);
        tl.set(oldScene, { opacity: 0, x: 0, filter: "blur(0px)", visibility: "hidden" }, at + 0.52);
      }

      scenes.forEach(function(scene, i) {
        if (i === 0) {
          animateAmbient(i, scenes[i].start);
          return;
        }
        var at = Math.max(0, scene.start - 0.18);
        transition(i - 1, i, at, i === 4 ? "zoom" : i === 6 ? "blur" : "push");
        enterScene(i, scene.start + 0.18);
      });

      captions.forEach(function(group, i) {
        var el = q("#caption-" + i);
        if (i === 0) {
          tl.set(el, { opacity: 1, visibility: "visible", y: 0, scale: 1 }, 0);
          tl.to(el, { opacity: 0, y: -10, scale: 0.99, duration: 0.14, ease: "power2.in" }, Math.max(group.start + 0.35, group.end - 0.14));
          tl.set(el, { opacity: 0, visibility: "hidden" }, group.end);
          return;
        }
        tl.set(el, { visibility: "visible" }, group.start);
        tl.fromTo(el, { opacity: 0, y: 16, scale: 0.985 }, { opacity: 1, y: 0, scale: 1, duration: 0.16, ease: "power2.out" }, group.start);
        tl.to(el, { opacity: 0, y: -10, scale: 0.99, duration: 0.14, ease: "power2.in" }, Math.max(group.start + 0.35, group.end - 0.14));
        tl.set(el, { opacity: 0, visibility: "hidden" }, group.end);
      });

      var finalStart = Math.max(0, ${duration} - 1.05);
      tl.to("#scene-" + (scenes.length - 1) + " .scene-inner", { opacity: 0, y: -18, duration: 0.72, ease: "power2.in" }, finalStart);
      window.__timelines["presetter-${VARIANT_ID}"] = tl;
    </script>
  </body>
</html>`;
}

const config = JSON.parse(await fs.readFile("content/variants.json", "utf8"));
const variant = config.variants.find((item) => item.id === VARIANT_ID);
if (!variant) throw new Error(`Missing ${VARIANT_ID} variant in content/variants.json`);

const voicePath = `assets/audio/presetter-${VARIANT_ID}-voice.mp3`;
const voiceDuration = durationOf(voicePath);
const spokenScript = variant.voiceScript || variant.spokenScript || variant.script;
const captionScript = variant.captionScript || stripVoiceMarkup(spokenScript);
let timingPayload = null;
try {
  timingPayload = JSON.parse(await fs.readFile(`assets/audio/presetter-${VARIANT_ID}-alignment.json`, "utf8"));
} catch {}
const scenes = sceneDurations(variant.duration);
const captions = timedCaptionGroups(spokenScript, captionScript, timingPayload, variant.duration) || captionGroups(captionScript, voiceDuration, variant.duration);
const html = makeHtml(variant, scenes, captions, voiceDuration);

await fs.mkdir("compositions", { recursive: true });
await fs.writeFile(`compositions/presetter-${VARIANT_ID}.html`, html);
await fs.writeFile("index.html", html);

console.log(`wrote compositions/presetter-${VARIANT_ID}.html`);
console.log("wrote index.html");
