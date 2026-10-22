---
sidebar_position: 3
title: Installation
---

# Installation Guide

## System Requirements

Before installing Presetter, ensure you have:

- **Node.js** 22.13+ (22.x), 24.x, or 26+
- CI tracks LTS and latest Node.js. Node.js 20 is no longer supported.
- **npm**, **pnpm**, or **Bun** (npm 7+ when using npm, for preset peer dependencies)
- **Git** (for version control integration)

## Package Manager Support

`presetter use` supports npm, pnpm, and Bun. In a project with a `package.json`:

```bash
# npm
npx presetter use @presetter/preset-esm --package-manager=npm

# pnpm
pnpm dlx presetter use @presetter/preset-esm --package-manager=pnpm

# Bun
bunx presetter use @presetter/preset-esm --package-manager=bun
```

Presetter selects the manager from `package.json#packageManager`, then a single lockfile family, then `--package-manager`, then an interactive prompt. The flag is a fallback; it does not override the project's detected manager. Non-interactive adoption without a selection fails and asks for the flag. Yarn is unsupported by `use`.

## Installation Methods

### Method 1: Quick Setup (Recommended)

```bash
mkdir my-awesome-project
cd my-awesome-project
npm init -y
npx presetter use @presetter/preset-esm --package-manager=npm
npm run build
```

`use` installs Presetter and the requested presets as devDependencies, writes `presetter.config.ts`, resolves the stack's declared setup packages and package scripts, and runs bootstrap. No separate config creation or install step is needed.

Setup can declare `dependencies`, `devDependencies`, and `peerDependencies`. Existing package declarations are preserved, with a warning when their specifications differ; `--force` replaces conflicting specifications. Existing script commands are preserved too. See [`presetter use`](../cli-reference/use) for reruns, conflicts, and dependency build approval.

### Method 2: Manual Setup

For an existing custom config, install the preset packages and maintain the config and package script delegates yourself:

```bash
npm install --save-dev presetter @presetter/preset-esm
```

```typescript title="presetter.config.ts"
export { default } from '@presetter/preset-esm';
```

```json title="package.json (partial)"
{
  "scripts": {
    "prepare": "run prepare",
    "build": "run build",
    "lint": "run lint --",
    "test": "run test --",
    "typecheck": "run typecheck --"
  }
}
```

Install the stack's setup packages explicitly, including the [TypeScript aliases below](#using-typescript-7-with-the-typescript-6-api), Vitest, and any framework packages declared by your presets. Then run `npx presetter bootstrap`. Bootstrap only generates assets; it does not install setup packages or write package scripts.

## Preset Selection

Choose the right preset for your project type:

### For Modern ES Modules
```bash
npx presetter use @presetter/preset-esm
```
**Best for**: Libraries, Node.js applications, modern web projects

### For React Applications
```bash
npx presetter use @presetter/preset-esm @presetter/preset-react
```
**Includes**: React-specific linting and TSX support. Add `@presetter/preset-storybook` separately for Storybook.

### For Dual CJS/ESM Libraries
```bash
npx presetter use @presetter/preset-hybrid
```
**Best for**: NPM packages that need to support both module systems

### For Monorepos (v8+)
```bash
npx presetter use @presetter/preset-monorepo
```
**Best for**: Multi-package repositories with shared configurations, TypeScript project references, unified testing

### For Legacy CommonJS
```bash
npx presetter use @presetter/preset-cjs
```
**Best for**: Existing CommonJS projects, legacy Node.js applications

## Using TypeScript 7 with the TypeScript 6 API

TypeScript 7.0 launched without a stable programmatic compiler API. Tools that import from `typescript`, such as `typescript-eslint`, can still use the TypeScript 6 API while you use the native TypeScript 7 compiler.

Essentials declares both aliases in `setup.devDependencies`, so `presetter use` installs them automatically when they are missing. For manual setup, [Microsoft's side-by-side installation guidance](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) uses these npm aliases:

```bash
npm install --save-dev '@typescript/native@npm:typescript@^7.0.0' 'typescript@npm:@typescript/typescript6@^6.0.0'
```

This adds the following development dependencies:

```json title="package.json"
{
  "devDependencies": {
    "@typescript/native": "npm:typescript@^7.0.0",
    "typescript": "npm:@typescript/typescript6@^6.0.0"
  }
}
```

- `tsc` runs the TypeScript 7 compiler installed under the `@typescript/native` alias.
- `tsc6` runs the TypeScript 6 compiler, avoiding a conflict with the `tsc` binary.
- Imports such as `import ts from 'typescript'` resolve to the TypeScript 6 API through the `@typescript/typescript6` compatibility package.

Verify the compiler versions after installation:

```bash
npx tsc --version
npx tsc6 --version
```

If your project already declares `typescript`, use preserves that specification and reports a conflict. Review it before choosing `--force` to adopt the aliases. Keep the TypeScript 6 API available for tools that depend on it.

## Verification

After installation, verify everything is working:

```bash
# Check Presetter CLI is available
npx presetter --help

# Verify configuration files were generated
ls -la tsconfig.json eslint.config.ts vitest.config.ts

# Run a test command
npm run test
```

## Troubleshooting Installation

### Common Issues

**Node.js version too old**:
```bash
# Check your Node.js version
node --version
# Upgrade if needed
nvm install --lts  # or use your preferred Node version manager
```

**Permission errors**:
```bash
# Use npx instead of global installation
npx presetter bootstrap
```

**Peer dependency warnings**:
Review version conflicts rather than ignoring them. Package managers handle the presets’ own peers; `use` also applies explicit setup declarations to your project. Existing conflicting declarations are preserved unless you pass `--force`.

**TypeScript errors in config files**:
Verify the CLI and API versions using the commands above. For manual setup, install both aliases rather than replacing the TypeScript 6 API package with TypeScript 7.

### Getting Help

- 📚 Check [Advanced Topics](/docs/advanced) for frequently asked questions
- 🐛 [Report issues on GitHub](https://github.com/alvis/presetter/issues)
- 💬 Ask questions in [GitHub Discussions](https://github.com/alvis/presetter/discussions)

## Current Baseline

This checkout's published packages are on the scoped `@presetter/*` preset namespace and the TypeScript 7 CLI / TypeScript 6 API baseline:

### 📦 Scoped package namespace
- Every preset now ships under the **`@presetter/*`** scope (for example, `@presetter/preset-esm`). The main `presetter` CLI package keeps its unscoped name.

### 🧰 TypeScript 7 CLI + TypeScript 6 API + ES2024
- Essentials installs the **TypeScript 7 CLI** and **TypeScript 6 API** aliases through `use`.
- The default compile target is **ES2024**.
- **`noUncheckedIndexedAccess`** is enabled in the essentials preset for safer indexed access. The `tsconfig` templates were simplified to rely on TypeScript 6 defaults.
- Repository typechecking now uses `tsgo` via `@typescript/native-preview`; consumer setup uses the stable TypeScript aliases shown above.

### 🆕 New presets
- **`@presetter/preset-node`** — standalone Node type override.
- **`@presetter/preset-bun`** — standalone Bun build and type preset.
- **`@presetter/preset-storybook`** — standalone Storybook configuration.

### ✨ New features
- **`presetter bootstrap --projects`** targets project-folder globs, and **`--packages`** targets package-name globs.
- **lint-staged pre-commit** and **pre-push** hooks out of the box.
- **git-cliff** powered changelog generation.
- **Monorepo sub-level Vitest** configuration support.
- **Package info** is shown during bootstrap.
- Release publishing now uses provenance, and CI follows active Node LTS lines plus latest.

Read the [v8.3 update](/blog/presetter-v8-3-update) for the latest release notes.

## Next Steps

Once installation is complete:

1. **Understand the concepts**: Read [Core Concepts](./concepts)
2. **Learn configuration**: See [Configuration Guide](./configuration)
3. **Start coding**: Your development environment is ready!
4. **Explore presets**: Browse the [Preset Ecosystem](/docs/presets)
5. **Migrating from v7?**: Check out the [v7 to v8 Migration Guide](/docs/tutorials/migration-guides/v7-to-v8)
