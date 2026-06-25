---
sidebar_position: 2
title: '@presetter/preset-node'
description: Opinionated Presetter preset for Node.js applications
---

# @presetter/preset-node

_An opinionated preset tuned for building Node.js applications and CLIs on top of the essentials foundation._

The **node preset** extends [`@presetter/preset-essentials`](../foundation/essentials) with a Node-aware TypeScript configuration, so you can focus on your application logic instead of wiring up Node-specific types.

## Purpose

**@presetter/preset-node** targets projects whose runtime is Node.js by:

- **Inheriting the essentials stack**: All TypeScript, ESLint, Prettier, Vitest, and Husky defaults come from `@presetter/preset-essentials`.
- **Surfacing Node types**: Overrides `tsconfig.json` to include the `node` ambient type package so `process`, `Buffer`, `fs`, and other Node globals type-check out of the box.
- **Staying minimal**: The preset adds only what Node projects need on top of essentials — no extra scripts, no runtime dependencies beyond the type wiring.

## Features

- **Inherits everything** from [`@presetter/preset-essentials`](../foundation/essentials) — TypeScript, ESLint 9, Prettier 3, Vitest 4, Husky, lint-staged, git-cliff, and zx.
- **Node-typed `tsconfig.json`** — `compilerOptions.types` is overridden to `['node']`.
- **Forward-compatible** — composes cleanly with `preset-esm`, `preset-cjs`, `preset-hybrid`, `preset-strict`, and `preset-rollup`.

## Installation

### Quick Start

```bash
# install the preset alongside presetter
npm install --save-dev presetter @presetter/preset-node

# create configuration
echo "export { default } from '@presetter/preset-node';" > presetter.config.ts

# bootstrap your project
npm install
```

Bun and pnpm users can swap `npm install --save-dev` for their equivalents.

### Package.json Setup

Add the standard Presetter script delegates to `package.json`:

```json
{
  "type": "module",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "prepare": "run prepare",
    "build": "run build",
    "lint": "run lint --",
    "test": "run test --",
    "test:coverage": "run test:coverage --",
    "test:watch": "run test:watch --",
    "typecheck": "run typecheck --"
  }
}
```

## What It Overrides

The preset applies a single override on top of essentials: it merges the following into the generated `tsconfig.json`.

```yaml
# presets/node/overrides/tsconfig.yaml
compilerOptions:
  types: ['node']
```

Everything else (scripts, ESLint config, Prettier, Vitest, Husky hooks, etc.) comes unchanged from [`@presetter/preset-essentials`](../foundation/essentials). Refer to its documentation for the full list of generated files and scripts.

## Use Cases

- **Node.js backend services** — HTTP APIs, GraphQL servers, workers.
- **Command-line tools** — scripts and CLIs distributed on npm.
- **Server-side libraries** — packages that assume Node APIs such as `fs`, `path`, or `stream`.
- **DevOps utilities** — deployment scripts, bots, and automation tooling.

## Customisation

Because `@presetter/preset-node` only augments `tsconfig.json`, compose it with essentials-based presets when you want the full build, lint, and test toolchain:

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import node from '@presetter/preset-node';
import esm from '@presetter/preset-esm';
import strict from '@presetter/preset-strict';

export default preset('my-node-service', {
  extends: [node, esm, strict],
  variables: {
    target: 'ES2022',
  },
});
```

## Related Presets

- [`@presetter/preset-essentials`](../foundation/essentials) — the foundation this preset extends.
- [`@presetter/preset-bun`](./bun) — equivalent preset for Bun projects.
- [Module System Presets](../module-systems) — pair with ESM, CJS, or Hybrid.
- [`@presetter/preset-strict`](../quality/strict) — enable additional quality rules.
