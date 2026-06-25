---
sidebar_position: 2
title: Presetter v8 to v9 Migration
description: Complete guide for upgrading your Presetter setup from v8 to v9
---

# Migrating from Presetter v8 to v9 🚀

Presetter v9 is a major release that modernizes the toolchain, reorganizes the preset ecosystem, and hardens releases. This guide walks you through the breaking changes - the **scoped namespace migration**, the **TypeScript 6 upgrade**, the **script renames**, and the **Node support policy shift** - plus the new presets and features you get along the way.

## Overview of Changes

### 🎯 **Breaking Changes**
- **Scoped namespace**: every preset moves from `presetter-preset-*` to **`@presetter/preset-*`**. The main `presetter` CLI package keeps its unscoped name.
- **TypeScript 6 required**: TypeScript 6 is now the required peer dependency, replacing TypeScript 5.
- **ES2024 default target**: the default compile target is now **ES2024** (was ES2022).
- **`noUncheckedIndexedAccess` enabled**: the essentials preset turns on `noUncheckedIndexedAccess` for safer indexed access.
- **Simplified `tsconfig`**: the explicit `strictNullChecks: false` and `noImplicitAny: false` overrides were removed — the templates now rely on TypeScript 6 defaults.
- **Standardized script names**: preset script names were renamed for consistency (see [Step 4](#step-4-update-npm-scripts)).
- **Node 20 CI support dropped**: Presetter's own CI now follows active Node LTS lines plus latest. Keep production projects on an actively supported Node LTS even though package engines still accept Node 20.

### 🆕 **New Presets**
- **`@presetter/preset-node`** — standalone Node-tuned TypeScript configuration.
- **`@presetter/preset-bun`** — standalone preset for Bun projects.
- **`@presetter/preset-storybook`** — standalone Storybook configuration with a11y checks and Vitest browser testing.

### ✨ **New Features**
- **`presetter bootstrap --packages`** bootstraps projects by package-name glob, while `--projects` continues to target project paths.
- **lint-staged pre-commit** and **pre-push** hooks out of the box.
- **git-cliff** powered changelog generation (replacing Standard Version).
- **Monorepo sub-level Vitest** configuration support.
- **Package info** displayed during bootstrap.
- **Provenance publishing** for released packages.
- **Native typecheck path** in the Presetter monorepo via `tsgo` and `@typescript/native-preview`.

## Prerequisites

Before starting the migration:

- **Node.js 20+** and **npm 7+** installed; an active Node LTS is recommended because v9 CI no longer covers Node 20
- A working Presetter v8 project
- A Git repository with a clean working tree (so you can roll back)

## Migration Steps

### Step 1: Rename Preset Packages

Every preset now lives under the `@presetter` scope. Use this find-and-replace table:

| v8 (old) | v9 (new) |
| --- | --- |
| `presetter` | `presetter` _(unchanged)_ |
| `presetter-preset-essentials` | `@presetter/preset-essentials` |
| `presetter-preset-esm` | `@presetter/preset-esm` |
| `presetter-preset-cjs` | `@presetter/preset-cjs` |
| `presetter-preset-hybrid` | `@presetter/preset-hybrid` |
| `presetter-preset-web` | `@presetter/preset-web` |
| `presetter-preset-react` | `@presetter/preset-react` |
| `presetter-preset-next` | `@presetter/preset-next` |
| `presetter-preset-rollup` | `@presetter/preset-rollup` |
| `presetter-preset-strict` | `@presetter/preset-strict` |
| `presetter-preset-monorepo` | `@presetter/preset-monorepo` |
| `presetter-types` | `@presetter/types` |

A repository-wide rename covers `package.json`, `presetter.config.ts`, and any import statements:

```bash
# preview the matches first
grep -rl 'presetter-preset-\|presetter-types' . --exclude-dir=node_modules

# then rename (macOS/BSD sed shown; use `sed -i` on GNU/Linux)
grep -rl 'presetter-preset-' . --exclude-dir=node_modules \
  | xargs sed -i '' 's#presetter-preset-#@presetter/preset-#g'
grep -rl 'presetter-types' . --exclude-dir=node_modules \
  | xargs sed -i '' 's#presetter-types#@presetter/types#g'
```

**Before** (`package.json`):

```json title="package.json"
{
  "devDependencies": {
    "presetter": "^8.3.0",
    "presetter-preset-essentials": "^8.3.0",
    "presetter-preset-esm": "^8.3.0"
  }
}
```

**After** (`package.json`):

```json title="package.json"
{
  "devDependencies": {
    "presetter": "^9.0.0",
    "@presetter/preset-essentials": "^9.0.0",
    "@presetter/preset-esm": "^9.0.0"
  }
}
```

**Before** (`presetter.config.ts`):

```typescript title="presetter.config.ts"
import { preset } from 'presetter-types';
import esm from 'presetter-preset-esm';
import strict from 'presetter-preset-strict';

export default preset('my-project', {
  extends: [esm, strict],
});
```

**After** (`presetter.config.ts`):

```typescript title="presetter.config.ts"
import { preset } from 'presetter';
import esm from '@presetter/preset-esm';
import strict from '@presetter/preset-strict';

export default preset('my-project', {
  extends: [esm, strict],
});
```

### Step 2: Bump Versions to v9

Update every Presetter dependency to `^9.0.0`:

```bash
# core CLI (unscoped)
npm install --save-dev presetter@^9.0.0

# presets (scoped) — update those your project uses
npm install --save-dev @presetter/preset-essentials@^9.0.0
npm install --save-dev @presetter/preset-esm@^9.0.0
npm install --save-dev @presetter/preset-react@^9.0.0
npm install --save-dev @presetter/preset-monorepo@^9.0.0
```

### Step 3: Upgrade to TypeScript 6

TypeScript 6 is the new required peer. With npm 7+ it is pulled in automatically, but you can upgrade it explicitly:

```bash
npm install --save-dev typescript@^6.0.0
```

The generated `tsconfig` templates were simplified. If you previously relied on the implicit `strictNullChecks: false` / `noImplicitAny: false` behavior, note that v9 follows TypeScript 6 strict defaults instead. You may also see new errors from `noUncheckedIndexedAccess`:

For maintainers following Presetter's own repository setup, the root workspace now runs typechecking through `tsgo` from `@typescript/native-preview`. That is an internal repository workflow improvement, not an additional dependency required for ordinary preset consumers.

```typescript
// v9 flags this — record[key] is now `string | undefined`
const value: string = record[key];

// fix with a guard or a non-null assertion when you are sure
const value = record[key] ?? '';
```

If you need to opt out temporarily, override `tsconfig.json` in your `presetter.config.ts`:

```typescript title="presetter.config.ts"
export default preset('my-project', {
  extends: [esm],
  override: {
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          noUncheckedIndexedAccess: false,
        },
      },
    },
  },
});
```

### Step 4: Update npm Scripts

The generated script delegates were standardized. Update your `package.json` scripts to the v9 names:

| v8 (old) | v9 (new) |
| --- | --- |
| `coverage` | `test:coverage` |
| `watch` | `test:watch` |
| `develop` | `start` |
| `format` | folded into `lint` |

**Before** (`package.json`):

```json title="package.json"
{
  "scripts": {
    "build": "run build",
    "test": "run test",
    "coverage": "run coverage",
    "watch": "run watch",
    "format": "run format",
    "typecheck": "run typecheck"
  }
}
```

**After** (`package.json`):

```json title="package.json"
{
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

:::tip
After `npm install`, run `npx presetter bootstrap` to regenerate configuration files. Keep the package script delegates above so `run` resolves the v9 preset script names.
:::

### Step 5: Re-bootstrap Your Project

Regenerate the configuration files with the v9 templates:

```bash
# clean old configs (they will be regenerated)
rm -f tsconfig.json eslint.config.ts vitest.config.ts

# install + bootstrap
npm install
```

### Step 6: Verify Everything Works

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Preset-Specific Updates

### Storybook (new standalone preset)

If you previously carried Storybook setup alongside web tooling, you can now add it independently to any framework via [`@presetter/preset-storybook`](../../presets/frameworks/storybook):

```typescript title="presetter.config.ts"
import next from '@presetter/preset-next';
import storybook from '@presetter/preset-storybook';
import { preset } from 'presetter';

export default preset('app', {
  extends: [next, storybook],
});
```

It generates `.storybook/main.ts`, Storybook scripts, ESLint story rules, and a Vitest browser project. See the [Storybook preset page](../../presets/frameworks/storybook) for details.

### Node and Bun

New runtime presets let you target a specific runtime explicitly:

```typescript title="presetter.config.ts (Node)"
import { preset } from 'presetter';
import node from '@presetter/preset-node';
import esm from '@presetter/preset-esm';

export default preset('my-node-service', {
  extends: [node, esm],
});
```

```typescript title="presetter.config.ts (Bun)"
// standalone — no essentials required
export { default } from '@presetter/preset-bun';
```

### Monorepo

`@presetter/preset-monorepo` now supports **sub-level Vitest configuration**, so individual packages can refine their test setup while inheriting workspace defaults. Re-bootstrap each package to pick up the new configs.

### Bootstrapping by package name

Use `presetter bootstrap --packages` for package-name globs:

```bash
# v9 — bootstrap specific packages by name
presetter bootstrap --packages @myorg/web-app @myorg/shared-utils
```

## Troubleshooting

### Issue: Module not found for `presetter-preset-*`

**Problem:** Imports or dependencies still reference the old unscoped names.

**Solution:** Re-run the rename from [Step 1](#step-1-rename-preset-packages) and check both `package.json` and every `*.config.ts` / source import.

### Issue: New TypeScript errors after upgrading

**Problem:** `noUncheckedIndexedAccess` or TypeScript 6 strict defaults surface new type errors.

**Solution:** Add guards/assertions for indexed access, or temporarily override `noUncheckedIndexedAccess: false` in `tsconfig.json` (see [Step 3](#step-3-upgrade-to-typescript-6)).

### Issue: `npm run coverage` / `npm run watch` no longer exists

**Problem:** Scripts were renamed in v9.

**Solution:** Use `npm run test:coverage` and `npm run test:watch`, and update your package script delegates if they still point at the old names (see [Step 4](#step-4-update-npm-scripts)).

### Issue: Changelog generation behaves differently

**Problem:** Releases used Standard Version in v8.

**Solution:** v9 uses [git-cliff](https://git-cliff.org). Run `run release` to bump, generate the changelog, commit, and tag. Pass a prerelease with `PRERELEASE=alpha run release`.

## Rollback Plan

If you need to revert:

```bash
# restore v8 dependencies
npm install --save-dev presetter@^8.3.0
npm install --save-dev presetter-preset-essentials@^8.3.0
# ... other presets

# restore v8 configurations
git checkout HEAD~1 -- tsconfig.json eslint.config.ts vitest.config.ts package.json

# re-bootstrap with v8
npm install
```

## Post-Migration Checklist

- [ ] ✅ All preset packages renamed to `@presetter/*`
- [ ] ✅ All Presetter dependencies bumped to `^9.0.0`
- [ ] ✅ TypeScript upgraded to `^6.0.0`
- [ ] ✅ `noUncheckedIndexedAccess` errors resolved (or overridden)
- [ ] ✅ npm scripts updated to v9 names (`test:coverage`, `test:watch`, …)
- [ ] ✅ Bootstrap completed successfully
- [ ] ✅ Typecheck, lint, test, and build all pass
- [ ] ✅ New presets adopted where relevant (node / bun / storybook)
- [ ] ✅ CI/CD updated for renamed packages and scripts
- [ ] ✅ Runtime matrix moved to active Node LTS lines where applicable

## Getting Help

- 📚 [GitHub Issues](https://github.com/alvis/presetter/issues) - Report bugs or ask questions
- 💬 [GitHub Discussions](https://github.com/alvis/presetter/discussions) - Community support
- 🔧 [Advanced Topics](/docs/advanced) - Troubleshooting guides

---

**Migration Time:** 30-60 minutes for most projects
**Difficulty:** Moderate
**Breaking Changes:** Namespace rename, TypeScript 6, script renames, and Node support policy
