# 🚀 @presetter/preset-node

[logo.svg](https://github.com/alvis/presetter/blob/master/assets/logo.svg)

<div align="center">

[![npm](https://img.shields.io/npm/v/@presetter/preset-node?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=main&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/main?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/@presetter/preset-node?style=flat-square)](https://libraries.io/npm/@presetter/preset-node)

Node.js-ready TypeScript development — built-in types, zero friction, full essentials toolkit

• [Usage](#-usage) • [Configuration](#-configuration-details) • [Comparison](#-comparison) • [FAQ](#-faq) •

</div>

---

**This is a configuration template that works with [Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install Node.js preset
npm i -D presetter @presetter/preset-node

# Create presetter.config.ts
echo "export { default } from '@presetter/preset-node';" > presetter.config.ts

# Bootstrap your project
npx presetter bootstrap
```

Your project is now configured for **Node.js development** with the full essentials toolkit and Node.js type definitions wired in — **ready to build servers, CLIs, and libraries!**

---

## ✨ TypeScript That Actually Knows Node.js

### Writing Node.js code without the right types?

You open a fresh TypeScript project, import `node:fs`, and immediately get squiggly red lines:

```typescript
import { readFile } from 'node:fs/promises'; // ❌ Cannot find module 'node:fs/promises'
process.env.NODE_ENV; // ❌ Cannot find name 'process'
Buffer.from('hello'); // ❌ Cannot find name 'Buffer'
```

Every Node.js developer has been here. You install `@types/node`, then tweak `tsconfig.json`, then debug why globals still don't resolve.

**It should just work.**

### The Node.js TypeScript setup tax

| Pain Point               | Manual Setup                                    | With preset-node                 |
| ------------------------ | ----------------------------------------------- | -------------------------------- |
| **Node Type Resolution** | Install `@types/node`, edit `tsconfig`          | ✅ Resolved automatically        |
| **Globals (`process`)**  | Manually add `types: ['node']` to compiler opts | ✅ Recognized out of the box     |
| **Built-in Modules**     | `node:fs`, `node:path` often missing types      | ✅ Fully typed                   |
| **Dev Toolkit**          | Wire up ESLint, Prettier, Vitest, Husky by hand | ✅ Inherits from essentials      |
| **Build Pipeline**       | Assemble TypeScript → JS build yourself         | ✅ Provided by essentials        |
| **Version Discipline**   | Each project drifts apart                       | ✅ Unified across all Node repos |

### What you get instead

**@presetter/preset-node is a configuration template that layers Node.js-specific TypeScript support on top of [preset-essentials](https://github.com/alvis/presetter/blob/main/packages/preset-essentials).**

When used with [Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter) (the configuration management tool), this preset gives you the complete essentials toolkit — linting, formatting, testing, building, release automation — plus first-class Node.js types.

- 🟢 **Node Types Built-in**: `types: ['node']` wired into TypeScript automatically
- 🧰 **Full Toolkit Inherited**: ESLint, Prettier, Vitest, Husky, release scripts from essentials
- 🔧 **Zero Config**: Import `node:fs`, `node:path`, `process`, `Buffer` — all typed correctly
- 📦 **Library or App**: Works for CLIs, servers, background workers, and publishable libraries
- 🚀 **Consistent Standards**: Same configuration across every Node.js project you own
- 🪶 **Tiny Footprint**: One extra override on top of essentials — nothing heavy

---

## 🎯 Node.js Types Without the Boilerplate

### The Node.js TypeScript boilerplate problem

Every new Node.js project starts with the same ritual:

1. `npm i -D @types/node`
2. Open `tsconfig.json`, add `"types": ["node"]`
3. Wonder why `process.env.NODE_ENV` still isn't inferring right
4. Copy an ESLint config from the last project
5. Copy a Prettier config from the last project
6. Copy a Vitest config from the last project
7. Start writing actual code — eventually

**Setup fatigue is real, and every manual copy drifts further from the last.**

### From copy-paste setup to one-line config

```diff
# Before: Every Node.js project reinvents the wheel
my-node-api/
├── tsconfig.json            ← Manually maintained
├── eslint.config.ts         ← Copy-pasted, slightly different each time
├── .prettierrc              ← Same story
├── vitest.config.ts         ← Same story
├── .husky/                  ← Set up by hand
├── package.json             ← Dozens of devDependencies
└── src/
    └── server.ts

# After: Driven from the preset template
my-node-api/
+├── presetter.config.ts     ← One line referencing this preset
├── package.json             ← Two devDependencies: presetter + preset-node
└── src/
    └── server.ts            ← All configs generated on bootstrap
```

### How the template works

1. **Extends essentials** — Pulls in the full TypeScript development toolkit
2. **Overrides `tsconfig.json`** — Adds `types: ['node']` so Node.js globals resolve
3. **Keeps the scripts** — Inherits `build`, `test`, `lint`, `typecheck`, release pipelines
4. **Stays out of your way** — No opinions on runtime, server framework, or deployment

### Why this solves the real problem

- **Instant Node.js types**: Import anything from `node:*` and it just works
- **Less drift**: Every Node.js project in your org shares the same base
- **Faster bootstrapping**: Go from `npm install` to `src/index.ts` in seconds
- **Upgradeable**: Bump the preset version, get toolchain upgrades for free

---

## 🔍 Understanding Presetter vs This Preset

**Important distinction:**

| Component                                                                        | Role                           | What it does                                                         |
| -------------------------------------------------------------------------------- | ------------------------------ | -------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter)** | Configuration management tool  | CLI that processes presets, generates config files, executes scripts |
| **@presetter/preset-node**                                                       | Node.js configuration template | Extends essentials with Node.js-specific TypeScript support          |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **This preset** = The blueprint for a Node.js-ready home with utilities pre-wired

This preset extends [preset-essentials](https://github.com/alvis/presetter/blob/main/packages/preset-essentials) with Node.js type support. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/main/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic Node.js Project Setup

#### Step 1: Install Preset

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
    "@presetter/preset-node": "latest",
  },
}
```

```typescript
// presetter.config.ts
export { default } from '@presetter/preset-node';
```

#### Step 2: Bootstrap & Develop

```bash
npm install
# Node.js-ready configuration generated automatically
# Start importing node:fs, node:path, process — fully typed!
```

That's it! Full essentials toolkit + Node.js types, no manual `@types/node` wiring needed.

---

### 🧑‍🔬 Advanced Usage: Custom Node.js Project

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import node from '@presetter/preset-node';

export default preset('my-node-service', {
  extends: [node],
  override: {
    variables: {
      target: 'ES2023', // Match your deployed Node.js version
    },
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          lib: ['ES2023'], // Pin lib to match target
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
        },
      },
    },
  },
});
```

> **Need more customization options?** Check the [main Presetter documentation](https://github.com/alvis/presetter/blob/main/packages/presetter) for complete guides on overrides, extensions, and advanced configurations.

---

## 📖 API Reference

### Core Node.js Configuration Template

This preset extends [preset-essentials](https://github.com/alvis/presetter/blob/main/packages/preset-essentials) with a single targeted addition:

| Configuration  | Purpose                | Node.js Addition                             |
| -------------- | ---------------------- | -------------------------------------------- |
| **TypeScript** | Type resolution        | `compilerOptions.types: ['node']`            |
| **Build**      | TypeScript compilation | Inherited from essentials                    |
| **Linting**    | Code quality           | Inherited from essentials (ESLint, Prettier) |
| **Testing**    | Test runner & coverage | Inherited from essentials (Vitest)           |
| **Release**    | Changelog & publishing | Inherited from essentials                    |

### Configuration Variables

Inherited from [preset-essentials](https://github.com/alvis/presetter/blob/main/packages/preset-essentials):

| Variable | Default    | Description                   |
| -------- | ---------- | ----------------------------- |
| `source` | `"src"`    | Source code directory         |
| `output` | `"lib"`    | Build output directory        |
| `test`   | `"spec"`   | Test files directory          |
| `target` | `"ES2024"` | TypeScript compilation target |

---

## 🔧 Configuration Details

### TypeScript Override

```yaml
# overrides/tsconfig.yaml — the only addition on top of essentials
compilerOptions:
  types:
    - node
```

This single override means Node.js built-in modules and globals are recognized by TypeScript without installing `@types/node` manually.

### Resulting TypeScript Config

```jsonc
// Generated tsconfig.json (merged)
{
  "compilerOptions": {
    "module": "ESNext",
    "target": "ES2024",
    "strict": true,
    "declaration": true,
    "sourceMap": true,
    "types": ["node"], // ← from preset-node
  },
}
```

### Scripts Inherited from Essentials

```bash
npm run build       # TypeScript → JavaScript build pipeline
npm run test        # Run Vitest test suite
npm run test:coverage   # Coverage reporting
npm run lint        # ESLint + Prettier
npm run typecheck   # Type-only checks (no emit)
```

---

## 🏎️ Performance

| Metric             | Hand-rolled Setup            | With preset-node                  |
| ------------------ | ---------------------------- | --------------------------------- |
| Setup time         | Hours per new project        | **Seconds**                       |
| Config drift       | Inevitable across projects   | **Zero — single source of truth** |
| Type coverage      | Partial if types misconfig'd | **Complete Node.js typings**      |
| Toolchain upgrades | Manual, per project          | **Bump preset version once**      |

---

## 🌐 Compatibility

| Environment | Support                          |
| ----------- | -------------------------------- |
| Node.js     | ≥ 20 (preset engine requirement) |
| TypeScript  | ≥ 5.0                            |
| Module Type | ESM (inherits from essentials)   |
| Package Mgr | npm, pnpm, yarn                  |

### Extends

- [`@presetter/preset-essentials`](https://github.com/alvis/presetter/blob/main/packages/preset-essentials) — Core TypeScript development toolkit

### Pairs Well With

- [`@presetter/preset-strict`](https://github.com/alvis/presetter/blob/main/packages/preset-strict) — Production-grade quality enforcement
- [`@presetter/preset-rollup`](https://github.com/alvis/presetter/blob/main/packages/preset-rollup) — Bundled library builds
- [`@presetter/preset-monorepo`](https://github.com/alvis/presetter/blob/main/packages/preset-monorepo) — Workspace-level coordination

---

## 🆚 Comparison

| Feature             | preset-node           | preset-essentials only | preset-bun            |
| ------------------- | --------------------- | ---------------------- | --------------------- |
| **Runtime Target**  | ✅ Node.js            | ⚠️ Runtime-agnostic    | ✅ Bun                |
| **Node.js Types**   | ✅ Built-in           | ❌ You add manually    | ❌ Uses Bun types     |
| **Build Toolchain** | ✅ tsc via essentials | ✅ tsc via essentials  | ✅ Bun native builder |
| **Best For**        | Node.js apps/libs     | Generic TypeScript     | Bun apps/executables  |
| **Dev Toolkit**     | ✅ Full (inherited)   | ✅ Full                | ⚠️ Build-focused      |

### When to Use

✅ **Use preset-node when:**

- Building a Node.js server, CLI, worker, or publishable library
- You want Node.js globals (`process`, `Buffer`, `node:*`) working out of the box
- You need the full development toolkit (linting, formatting, testing, releases)
- You want consistent config across many Node.js projects

❌ **Consider alternatives when:**

- Targeting **Bun** runtime → use [`@presetter/preset-bun`](https://github.com/alvis/presetter/blob/main/packages/preset-bun)
- Building for the **browser** only → use [`@presetter/preset-web`](https://github.com/alvis/presetter/blob/main/packages/preset-web)
- Writing **React** components → use [`@presetter/preset-react`](https://github.com/alvis/presetter/blob/main/packages/preset-react)
- Building **runtime-agnostic** TypeScript → use [`@presetter/preset-essentials`](https://github.com/alvis/presetter/blob/main/packages/preset-essentials) directly

---

## 🛠️ Troubleshooting

> **General Presetter issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/main/README.md#troubleshooting) for common Presetter problems and solutions.

### Node.js-Specific Issues

| Issue                           | Symptoms                            | Solution                                                       |
| ------------------------------- | ----------------------------------- | -------------------------------------------------------------- |
| **`process` not found**         | TypeScript errors on Node globals   | Re-run `npx presetter bootstrap` to regenerate `tsconfig.json` |
| **`node:*` imports unresolved** | `Cannot find module 'node:fs'`      | Ensure `@types/node` is installed (transitive via essentials)  |
| **Engine mismatch warning**     | `engines.node` violation on install | Use Node.js ≥ 20 (required by the preset itself)               |
| **Custom `types` array reset**  | Your additions overwritten          | Spread base in override: `types: ['node', 'vitest/globals']`   |

> **Need help with Presetter CLI commands?** Check the [CLI reference](https://github.com/alvis/presetter/blob/main/README.md#cli-reference) in the main documentation.

---

## ❓ FAQ

> **General Presetter questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/main/README.md#faq) for general usage, configuration, and customization questions.

### Node.js-Specific FAQs

#### What's the difference from preset-essentials?

preset-node **extends** preset-essentials with one targeted addition: Node.js type definitions.

- **essentials** → Generic TypeScript toolkit (runtime-agnostic)
- **preset-node** → essentials + `compilerOptions.types: ['node']`

If your code imports from `node:fs`, `node:path`, or uses `process`/`Buffer`, use preset-node. Otherwise essentials is enough.

#### Do I need to install `@types/node` separately?

No. It's pulled in transitively through essentials. The preset simply enables it in `tsconfig.json` for you.

#### Can I use this for a library that runs in both Node.js and browsers?

Yes — but understand the trade-off. Enabling Node.js types means your code can reference `process` or `Buffer`, which won't exist in browsers. For truly isomorphic libraries, use [`@presetter/preset-essentials`](https://github.com/alvis/presetter/blob/main/packages/preset-essentials) and add types explicitly per environment.

#### How do I target a specific Node.js version?

Override the TypeScript `target` and `lib`:

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import node from '@presetter/preset-node';

export default preset('my-node-app', {
  extends: [node],
  override: {
    variables: { target: 'ES2023' }, // Align with Node.js 20+
    assets: {
      'tsconfig.json': {
        compilerOptions: { lib: ['ES2023'] },
      },
    },
  },
});
```

#### Can I switch from Node.js to Bun later?

Yes — replace `@presetter/preset-node` with `@presetter/preset-bun` in your config. The preset is the only swap; your source code stays the same (unless you use Node-specific APIs Bun doesn't support).

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
