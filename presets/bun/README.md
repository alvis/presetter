# 🚀 @presetter/preset-bun

<p align="center">
  <img src="https://raw.githubusercontent.com/alvis/presetter/master/assets/logo.svg" alt="Presetter logo" height="128">
</p>

<div align="center">

[![npm](https://img.shields.io/npm/v/@presetter/preset-bun?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=main&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/main?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/@presetter/preset-bun?style=flat-square)](https://libraries.io/npm/@presetter/preset-bun)

Bun-native build workflow — lightning-fast transpile, bundles, and compiled executables

• [Usage](#-usage) • [Configuration](#-configuration-details) • [Comparison](#-comparison) • [FAQ](#-faq) •

</div>

---

**This is a configuration extension that works with [Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install Bun preset alongside a base preset
npm i -D presetter @presetter/preset-esm @presetter/preset-bun @types/bun

# Create presetter.config.ts
cat > presetter.config.ts << 'EOF'
import { preset } from 'presetter';
import esm from '@presetter/preset-esm';
import bun from '@presetter/preset-bun';

export default preset('my-bun-project', {
  extends: [esm, bun],
});
EOF

# Bootstrap your project
npx presetter bootstrap
```

Your project now builds with **Bun's native transpiler**, can **bundle** single entrypoints, and can **compile standalone executables** — all orders of magnitude faster than `tsc` alone!

---

## ✨ Bun-Speed Builds, Without Reinventing Your Toolchain

### Why is my build still slow in 2026?

Bun's transpiler is [roughly 10–30× faster than `tsc`](https://bun.sh/docs/bundler). Yet most TypeScript projects still hand the compile step to `tsc`, ignore Bun's bundler, and never explore its single-binary `--compile` mode.

The friction isn't Bun itself — it's that Bun's build commands don't integrate cleanly with existing preset-driven tooling.

**That's what this preset solves.**

### The Bun build integration headaches

| Pain Point                      | Manual Bun Setup                              | With preset-bun                           |
| ------------------------------- | --------------------------------------------- | ----------------------------------------- |
| **Transpile speed**             | Hand-wired `bun build` globs in npm scripts   | ✅ One `npm run build` covers it          |
| **Declaration files (`.d.ts`)** | Bun doesn't emit them — need `tsc` separately | ✅ Wired in as `build:typescript:types`   |
| **Single-entry bundles**        | Custom scripts per project                    | ✅ `npm run build:bundle`                 |
| **Standalone executables**      | Figure out `--compile --bytecode` flags       | ✅ `npm run build:compile`                |
| **Bun globals typed**           | Install `@types/bun`, wire `tsconfig.json`    | ✅ `types: ['bun']` applied automatically |
| **Toolchain consistency**       | Each Bun project reinvents its build          | ✅ Shared preset across all Bun repos     |

### What you get instead

**@presetter/preset-bun is a configuration extension that adds a Bun-native build pipeline to any Presetter base preset.**

When used with [Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter) (the configuration management tool) and a base preset like [`preset-esm`](https://github.com/alvis/presetter/blob/main/packages/preset-esm), this extension swaps the TypeScript build step for Bun's native transpiler and unlocks Bun-specific workflows like bundling and executable compilation.

- ⚡ **Bun-Native Transpile**: Source → output via `bun build` (vastly faster than `tsc`)
- 📦 **Bundle Ready**: Opinionated `build:bundle` script for single-entry distributions
- 🏗️ **Executable Ready**: `build:compile` script for standalone `--compile --bytecode` binaries
- 🧩 **Type Declarations Preserved**: `tsc --emitDeclarationOnly` still emits `.d.ts` files
- 🔷 **Bun Types Wired In**: `compilerOptions.types: ['bun']` so `Bun.*` APIs resolve
- 🧱 **Composable Extension**: Works with any base preset (essentials, esm, strict, etc.)

---

## 🎯 From `tsc` to Bun — Without Rewriting Your Scripts

### The Bun build integration problem

Adopting Bun's build toolchain usually means hand-editing `package.json`:

```jsonc
// Before: manual Bun wiring — fragile, verbose, per-project
{
  "scripts": {
    "build:ts": "bun build ./src/**/*.ts --outdir ./lib --target bun --format esm --no-bundle",
    "build:dts": "tsc -p tsconfig.build.json --emitDeclarationOnly",
    "build:bundle": "bun build --target bun --format esm",
    "build:compile": "bun build --compile --bytecode",
    "build": "npm run build:ts && npm run build:dts",
  },
}
```

Every new Bun project copies and tweaks this. Typos slip in. Globs drift. Source/output paths get hardcoded.

### From copy-paste to composable template

```diff
# Before: hand-wired Bun scripts in every project
my-bun-service/
├── package.json             ← Dozens of "bun build ..." lines to maintain
├── tsconfig.json            ← Manually added "types": ["bun"]
└── src/
    └── index.ts

# After: driven from the preset template
my-bun-service/
+├── presetter.config.ts     ← extends: [esm, bun]
├── package.json             ← Three devDependencies only
+├── tsconfig.json           ← Generated with types: ['bun']
+├── Build scripts           ← Generated: build, build:bundle, build:compile
└── src/
    └── index.ts
```

### How the extension works

1. **Scripts override** — Replaces `build:typescript` with a two-step Bun flow:
   - `build:typescript:bun` → transpiles all `.ts/.tsx/.cts/.mts` via `bun build --no-bundle`
   - `build:typescript:types` → emits `.d.ts` files via `tsc -p tsconfig.build.json --emitDeclarationOnly`
2. **TypeScript override** — Adds `compilerOptions.types: ['bun']` so Bun APIs resolve
3. **Extra build targets** — Exposes `build:bundle` and `build:compile` for single-entry workflows
4. **Path variables** — Respects the base preset's `{source}` and `{output}` variables

### Why this solves the real problem

- **Speed**: Bun's transpiler is far faster than `tsc` on multi-file projects
- **Complete artifacts**: You still get `.d.ts` declarations for publishable packages
- **New superpowers**: Bundle or compile to a single binary with one script each
- **Composable**: Pair with `preset-esm`, `preset-strict`, or any other preset

---

## 🔍 Understanding Presetter vs This Extension

**Important distinction:**

| Component                                                                        | Role                          | What it does                                                               |
| -------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter)** | Configuration management tool | CLI that processes presets, generates config files, executes scripts       |
| **Base Preset**                                                                  | Core development template     | Provides TypeScript, testing, linting capabilities (esm, essentials, etc.) |
| **@presetter/preset-bun**                                                        | Bun build extension           | Replaces the TypeScript build step with Bun-native workflows               |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **Base preset** = The blueprint for a functional house
- **This extension** = Swapping in a high-performance engine room — same house, Bun-powered builds

This preset **extends** any base preset with Bun-native build scripts. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/main/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic Bun Project Setup

#### Step 1: Install Extension with Base Preset

```jsonc
// package.json
{
  "type": "module",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "build": "run build",
    "test": "run test",
    "lint": "run lint",
  },
  "devDependencies": {
    "presetter": "latest",
    "@presetter/preset-esm": "latest",
    "@presetter/preset-bun": "latest",
    "@types/bun": "latest",
  },
}
```

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import esm from '@presetter/preset-esm';
import bun from '@presetter/preset-bun';

export default preset('my-bun-project', {
  extends: [esm, bun],
});
```

#### Step 2: Bootstrap & Develop

```bash
npm install
# Bun build pipeline generated automatically
# Bun globals typed, bundle and compile scripts ready!
```

That's it! Your `npm run build` now transpiles with Bun and emits declarations with `tsc`.

---

### 🧑‍🔬 Advanced Usage: Bundle & Compile Workflows

```bash
# Multi-file build: transpile + emit .d.ts
npm run build

# Single-entry bundle (library or worker distribution)
npm exec run build:bundle -- src/index.ts --outdir dist

# Single-entry standalone executable (CLI tool, server binary)
npm exec run build:compile -- src/index.ts --outfile ./bin/app
```

#### Custom Build Targets or Flags

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import esm from '@presetter/preset-esm';
import bun from '@presetter/preset-bun';

export default preset('my-bun-cli', {
  extends: [esm, bun],
  override: {
    scripts: {
      // Compile for a specific platform with custom entrypoint
      'build:compile': 'bun build --compile --bytecode --target=bun-linux-x64',
    },
  },
});
```

> **Need more customization options?** Check the [main Presetter documentation](https://github.com/alvis/presetter/blob/main/packages/presetter) for complete guides on overrides, extensions, and advanced configurations.

---

## 📖 API Reference

### Core Bun Build Extension

This preset adds Bun-specific build workflows on top of any base preset:

| Enhancement                  | Purpose               | Bun Features                                          |
| ---------------------------- | --------------------- | ----------------------------------------------------- |
| **`build:typescript:bun`**   | Fast transpilation    | `bun build --no-bundle` over all `.ts/.tsx/.cts/.mts` |
| **`build:typescript:types`** | Declaration emission  | `tsc -p tsconfig.build.json --emitDeclarationOnly`    |
| **`build:bundle`**           | Single-entry bundle   | `bun build --target bun --format esm`                 |
| **`build:compile`**          | Standalone executable | `bun build --compile --bytecode`                      |
| **TypeScript types**         | Bun API resolution    | `compilerOptions.types: ['bun']`                      |

### Generated Scripts

```yaml
# overrides/scripts.yaml
build:typescript: run-s build:typescript:bun build:typescript:types
build:typescript:bun: bun build "./{source}/**/*.ts" "./{source}/**/*.tsx" "./{source}/**/*.cts" "./{source}/**/*.mts" --outdir "{output}" --root "{source}" --target bun --format esm --no-bundle
build:typescript:types: tsc -p tsconfig.build.json --emitDeclarationOnly
build:bundle: bun build --target bun --format esm
build:compile: bun build --compile --bytecode
```

### Configuration Variables

| Variable | Default | Description            |
| -------- | ------- | ---------------------- |
| `source` | `"src"` | Source code directory  |
| `output` | `"lib"` | Build output directory |

Additional variables come from whichever base preset you compose with.

---

## 🔧 Configuration Details

### TypeScript Override

```yaml
# overrides/tsconfig.yaml
compilerOptions:
  types:
    - bun
```

This enables Bun's globals (`Bun.serve`, `Bun.file`, `Bun.password`, etc.) and runtime module types.

### Build Pipeline

```bash
# What `npm run build` does end-to-end
1. Clean output directory (from base preset)
2. build:typescript:bun    → bun build (all TS files → output/, no bundling)
3. build:typescript:types  → tsc --emitDeclarationOnly (emit .d.ts)
4. Finalize (from base preset)
```

### Bundle Script

```bash
npm exec run build:bundle -- src/index.ts --outdir dist
# Produces a single bundled ESM file targeting the Bun runtime
```

### Compile Script

```bash
npm exec run build:compile -- src/index.ts --outfile ./bin/cli
# Produces a standalone executable with bytecode caching for fast startup
```

---

## 🏎️ Performance

| Metric               | `tsc`-based build       | With preset-bun              |
| -------------------- | ----------------------- | ---------------------------- |
| Transpile speed      | Baseline                | **~10–30× faster**           |
| Declaration emission | Included                | **Still included (via tsc)** |
| Bundle step          | Separate tooling needed | **Built-in**                 |
| Executable output    | Not possible with `tsc` | **`build:compile`**          |
| Cold-start CLI       | Node.js start time      | **Bytecode-cached startup**  |

---

## 🌐 Compatibility

| Environment  | Support                               |
| ------------ | ------------------------------------- |
| Bun runtime  | ≥ 1.0 (for `--compile --bytecode`)    |
| Node.js      | ≥ 20 (Presetter engine requirement)   |
| TypeScript   | ≥ 6.0                                 |
| Base Presets | Composes with essentials, esm, strict |

### Works With All Base Presets

- [`@presetter/preset-essentials`](https://github.com/alvis/presetter/blob/main/packages/preset-essentials) + Bun build
- [`@presetter/preset-esm`](https://github.com/alvis/presetter/blob/main/packages/preset-esm) + Bun build ← **recommended**
- [`@presetter/preset-strict`](https://github.com/alvis/presetter/blob/main/packages/preset-strict) + Bun build

### Required Peer Dependency

- `@types/bun` — provides ambient types for `Bun.*` APIs and globals

---

## 🆚 Comparison

| Feature                   | preset-bun              | `tsc`-only build | esbuild/tsup          |
| ------------------------- | ----------------------- | ---------------- | --------------------- |
| **Transpile speed**       | ✅ Bun-native (fastest) | ❌ Slowest       | ⚠️ Fast               |
| **Declaration files**     | ✅ Via `tsc`            | ✅ Native        | ⚠️ Needs extra plugin |
| **Single-entry bundle**   | ✅ `build:bundle`       | ❌ Not supported | ✅                    |
| **Standalone executable** | ✅ `build:compile`      | ❌ Not possible  | ❌ Not possible       |
| **Runtime target**        | ✅ Bun                  | ⚠️ Node/browser  | ✅ Node/browser       |
| **Bundled toolchain**     | ✅ Single binary        | ❌ Multi-dep     | ❌ Multi-dep          |

### When to Use

✅ **Use preset-bun when:**

- Your runtime target is **Bun**
- You want the **fastest** possible TypeScript compile
- You need **standalone executables** or bytecode-cached CLIs
- You're building Bun-specific servers (`Bun.serve`), tools, or workers
- You want Bun globals typed without manual `tsconfig.json` edits

❌ **Consider alternatives when:**

- Targeting **Node.js** only → use [`@presetter/preset-node`](https://github.com/alvis/presetter/blob/main/packages/preset-node)
- Publishing a **runtime-agnostic** library → stick with [`@presetter/preset-esm`](https://github.com/alvis/presetter/blob/main/packages/preset-esm)
- You need **browser-first** bundling → use [`@presetter/preset-web`](https://github.com/alvis/presetter/blob/main/packages/preset-web)
- Bun isn't installed in your CI — this preset assumes Bun is on `PATH`

---

## 🛠️ Troubleshooting

> **General Presetter issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/main/README.md#troubleshooting) for common Presetter problems and solutions.

### Bun-Specific Issues

| Issue                                 | Symptoms                               | Solution                                                                  |
| ------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------- |
| **`bun: command not found`**          | Build fails on `build:typescript:bun`  | Install Bun: `curl -fsSL https://bun.sh/install \| bash`                  |
| **`Bun.*` globals untyped**           | `Cannot find name 'Bun'` in TypeScript | Ensure `@types/bun` is installed and re-run `npx presetter bootstrap`     |
| **Missing `.d.ts` in output**         | Consumers can't see your types         | Verify `build:typescript:types` ran; `tsconfig.build.json` must exist     |
| **Executable won't run on target OS** | `build:compile` binary fails on deploy | Pass a platform flag: `bun build --compile --target=bun-linux-x64`        |
| **Bundle includes node_modules**      | Bundle bigger than expected            | Mark externals: `bun build --external <pkg>` in a `build:bundle` override |

> **Need help with Presetter CLI commands?** Check the [CLI reference](https://github.com/alvis/presetter/blob/main/README.md#cli-reference) in the main documentation.

---

## ❓ FAQ

> **General Presetter questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/main/README.md#faq) for general usage, configuration, and customization questions.

### Bun-Specific FAQs

#### Do I need a base preset?

Yes. preset-bun is an **extension** that overrides the TypeScript build and adds Bun-specific scripts — it doesn't define linting, testing, or formatting:

```typescript
// ❌ Wrong — bun alone doesn't provide a full TypeScript toolkit
extends: [bun]

// ✅ Correct — base preset + Bun build extension
extends: [esm, bun]
```

#### Why emit `.d.ts` with `tsc` instead of Bun?

Bun's build doesn't emit TypeScript declaration files. For publishable libraries (or any project consumers import), `.d.ts` files are essential — so the preset runs `tsc --emitDeclarationOnly` after the fast Bun transpile pass. You get Bun speed **and** complete type artifacts.

#### How do I change the build target or platform?

Override the specific script in your `presetter.config.ts`:

```typescript
override: {
  scripts: {
    'build:compile': 'bun build --compile --bytecode --target=bun-linux-x64',
  },
}
```

#### Can I run my project with Bun but build with `tsc`?

Yes — just don't install this preset. Use `preset-node` or `preset-esm` and run `bun run src/index.ts` during development. This preset is specifically for teams who want Bun's build speed and output formats.

#### Does this work in CI?

Yes, as long as your CI image has Bun installed. Most CI providers support Bun via setup actions (e.g. `oven-sh/setup-bun` on GitHub Actions). Node.js ≥ 20 is still required because Presetter itself runs on Node.

#### Can I combine this with preset-strict?

Yes — extensions compose:

```typescript
extends: [esm, bun, strict]
```

You'll get ESM output built via Bun with production-grade linting and 100% coverage enforcement.

---

## 🤝 Contributing

We'd love your ideas and contributions!
Submit issues or suggestions via [GitHub Issues](https://github.com/alvis/presetter/issues).
See the [Contribution Guide](https://github.com/alvis/presetter/blob/main/CONTRIBUTING.md) for more details.

---

## 📄 License

Released under the [MIT License](https://github.com/alvis/presetter/blob/main/LICENSE).
© 2020, [Alvis Tang](https://github.com/alvis).

[![License](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/main/LICENSE)
