---
sidebar_position: 3
title: '@presetter/preset-bun'
description: Standalone Presetter preset tuned for Bun projects
---

# @presetter/preset-bun

_A standalone, opinionated preset for building applications and libraries that run on [Bun](https://bun.sh)._

Unlike most Presetter presets, **`@presetter/preset-bun` does not extend `@presetter/preset-essentials`**. Bun replaces a lot of the Node toolchain (bundler, test runner, transpiler), so this preset ships its own focused set of overrides instead of inheriting the Node-oriented defaults.

## Purpose

**@presetter/preset-bun** provides a cohesive Bun-native workflow by:

- **Staying standalone** — no dependency on `@presetter/preset-essentials`, avoiding conflicts with Bun's built-in tooling.
- **Typing Bun APIs** — overrides `tsconfig.json` to include the `bun` ambient types so `Bun.serve`, `Bun.file`, and related globals type-check automatically.
- **Leveraging Bun for builds** — overrides the build scripts to use `bun build` with `--target bun --format esm`, and optionally produce compiled binaries.
- **Exposing a minimal variable surface** — `source` and `output` only, matching what Bun-native projects actually need.

## Architectural Distinction

Some presets inherit the essentials toolchain and tweak a file or two. `@presetter/preset-node` and `@presetter/preset-bun` are intentionally standalone:

| Aspect              | `@presetter/preset-node` | `@presetter/preset-bun` |
|---------------------|--------------------------|--------------------------|
| Extends essentials? | **No**                   | **No**                   |
| Variables           | none                     | `source`, `output`       |
| Build tool          | none                     | `bun build`              |
| Test runner         | none                     | Provided by Bun          |
| `tsconfig.types`    | `['node']`               | `['bun']`                |

Choose this preset when Bun is your primary runtime. If you need Node-specific tooling (Vitest, Husky hooks, git-cliff releases, etc.), compose with other presets explicitly instead of assuming the essentials stack is present.

## Variables

The preset defines its own variables interface:

```typescript
// from presets/bun/src/index.ts
export interface Variables {
  /** the directory containing all source code (default: src) */
  source: string;
  /** the directory containing all the compiled files (default: lib) */
  output: string;
}

export const DEFAULT_VARIABLES = {
  source: 'src',
  output: 'lib',
} satisfies Variables;
```

Override them via `variables` in your `presetter.config.ts`.

## Installation

### Quick Start

```bash
# install the preset alongside presetter
bun add --dev presetter @presetter/preset-bun

# create configuration
echo "export { default } from '@presetter/preset-bun';" > presetter.config.ts

# bootstrap your project
bun install
```

### Package.json Setup

```json
{
  "type": "module",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "prepare": "run prepare",
    "build": "run build",
    "typecheck": "run typecheck"
  },
  "peerDependencies": {
    "@types/bun": "*"
  }
}
```

## What It Overrides

### TypeScript Configuration

```yaml
# presets/bun/overrides/tsconfig.yaml
compilerOptions:
  types: ['bun']
```

This ensures Bun's ambient types resolve. Pair with `@types/bun` (declared as a peer dependency).

### Scripts

```yaml
# presets/bun/overrides/scripts.yaml
build:typescript: run-s build:typescript:bun build:typescript:types
build:typescript:bun: bun build "./{source}/**/*.ts" "./{source}/**/*.tsx" "./{source}/**/*.cts" "./{source}/**/*.mts" --outdir "{output}" --root "{source}" --target bun --format esm --no-bundle
build:typescript:types: tsc -p tsconfig.build.json --emitDeclarationOnly
build:bundle: bun build --target bun --format esm
build:compile: bun build --compile --bytecode
```

Notable behaviours:

- `build:typescript` runs the Bun transpile step and then emits declaration files via `tsc`.
- `build:typescript:bun` uses `--no-bundle` so source files mirror the input tree — ideal for libraries.
- `build:bundle` produces a single Bun-targeted ESM bundle.
- `build:compile` produces a standalone Bun executable (with bytecode) — useful for CLIs and services distributed as binaries.

## Use Cases

- **Bun-native HTTP services** using `Bun.serve`.
- **Bun CLIs** compiled to standalone binaries via `bun build --compile`.
- **Libraries targeting Bun** that want native ESM output without Node-specific tooling.
- **Edge / container workloads** where Bun's startup time and bundled runtime are advantageous.

## Customisation

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import bun from '@presetter/preset-bun';

export default preset('my-bun-service', {
  extends: [bun],
  variables: {
    source: 'src',
    output: 'dist',
  },
  override: {
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          jsx: 'react-jsx',
        },
      },
    },
  },
});
```

## Related Presets

- [`@presetter/preset-node`](./node) — equivalent preset for Node.js projects.
- [`@presetter/preset-essentials`](../foundation/essentials) — foundation for Node-oriented presets (not used here).
- [Preset Ecosystem](../) — overview of how presets compose.
