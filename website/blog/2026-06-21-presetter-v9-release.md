---
slug: presetter-v9-release
title: 'Presetter v9: Scoped Namespace, TypeScript 6, and Release Hardening'
authors: [alvis]
tags: [release, typescript, storybook, monorepo, v9]
---

Presetter v9 is here - a major release that modernizes the toolchain, reorganizes the preset ecosystem, and hardens the release pipeline. Every preset moves to the `@presetter/*` scope, TypeScript 6 becomes the public baseline, and three new presets join the family: **node**, **bun**, and **storybook**.

{/* truncate */}

## 📦 A scoped namespace

All preset packages now ship under the **`@presetter/*`** scope. The main `presetter` CLI keeps its unscoped name, but every preset has a new home:

| v8 (old) | v9 (new) |
| --- | --- |
| `presetter-preset-essentials` | `@presetter/preset-essentials` |
| `presetter-preset-esm` | `@presetter/preset-esm` |
| `presetter-preset-react` | `@presetter/preset-react` |
| `presetter-preset-monorepo` | `@presetter/preset-monorepo` |
| `presetter-types` | `@presetter/types` |

The full lineup at v9: `essentials`, `node`, `bun`, `esm`, `cjs`, `hybrid`, `web`, `react`, `next`, `rollup`, `strict`, `monorepo`, and `storybook`.

## 🧰 TypeScript 6, native typechecking, and ES2024

TypeScript 6 is now the required peer dependency. The default compile target moves up to **ES2024**, and the essentials preset enables **`noUncheckedIndexedAccess`** for safer indexed access. The `tsconfig` templates were simplified to lean on TypeScript 6's strict defaults instead of carrying explicit overrides.

The Presetter repository itself also moved its workspace typecheck path to `tsgo` via `@typescript/native-preview`, so maintainers can validate the monorepo against the native compiler path while published presets continue to declare the TypeScript 6 peer baseline.

```typescript
// noUncheckedIndexedAccess makes indexed reads `T | undefined`
const value = record[key] ?? fallback;
```

## 🆕 Three new presets

- **[`@presetter/preset-node`](/docs/presets/runtimes/node)** — a standalone Node-tuned TypeScript configuration.
- **[`@presetter/preset-bun`](/docs/presets/runtimes/bun)** — a standalone preset for Bun projects, complete with Bun ambient types.
- **[`@presetter/preset-storybook`](/docs/presets/frameworks/storybook)** — a standalone Storybook setup that generates `.storybook/main.ts`, Storybook scripts, ESLint story rules, and a Vitest browser project.

```typescript title="presetter.config.ts"
import next from '@presetter/preset-next';
import storybook from '@presetter/preset-storybook';
import { preset } from 'presetter';

export default preset('app', {
  extends: [next, storybook],
});
```

## ✨ Quality-of-life features

- **`presetter bootstrap --packages`** bootstraps projects by package-name glob, while `--projects` continues to target project paths.
- **lint-staged pre-commit** and **pre-push** hooks ship out of the box.
- **git-cliff** powers changelog generation, replacing Standard Version.
- **Monorepo sub-level Vitest** configuration lets packages refine their own test setup.
- **Package info** is displayed while bootstrapping.
- **Provenance publishing** is enabled for the release workflow, and CI now tracks active Node LTS lines plus latest instead of the EOL Node 20 line.

## ⬆️ Upgrade

```bash
npm install --save-dev presetter@^9.0.0 \
  @presetter/preset-essentials@^9.0.0 \
  @presetter/preset-esm@^9.0.0

# regenerate configs after upgrading
npx presetter bootstrap
```

Because v9 includes breaking changes, follow the migration guide for the namespace rename, TypeScript 6 upgrade, and script renames.

## 📚 Related Docs

- [v8 to v9 Migration Guide](/docs/tutorials/migration-guides/v8-to-v9)
- [Installation](/docs/introduction/installation)
- [@presetter/preset-storybook](/docs/presets/frameworks/storybook)
- [@presetter/preset-node](/docs/presets/runtimes/node)
- [@presetter/preset-bun](/docs/presets/runtimes/bun)
