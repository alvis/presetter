---
sidebar_position: 3
title: Installation
---

# Installation Guide

## System Requirements

Before installing Presetter, ensure you have:

- **Node.js** 20.0.0 or higher
- Active Node.js LTS is recommended; v9 CI tracks active LTS lines and latest.
- **npm** 7.0.0 or higher (npm 7+ required for automatic peer dependency installation)
- **Git** (for version control integration)

## Package Manager Support

Presetter works seamlessly with all major JavaScript package managers:

### npm (Recommended)
```bash
npm install --save-dev presetter @presetter/preset-esm
```

### pnpm
```bash
pnpm add -D presetter @presetter/preset-esm
```

### yarn
```bash
yarn add --dev presetter @presetter/preset-esm
```

## Installation Methods

### Method 1: Quick Setup (Recommended)

The fastest way to get started with a new project:

```bash
# Create new project directory
mkdir my-awesome-project
cd my-awesome-project

# Initialize package.json
npm init -y

# Install Presetter with a preset
npm install --save-dev presetter @presetter/preset-esm

# Create configuration file
echo "export { default } from '@presetter/preset-esm';" > presetter.config.ts

# Add bootstrap script
npm pkg set scripts.bootstrap="presetter bootstrap"

# Install and bootstrap
npm install
```

### Method 2: Manual Setup

For more control over the installation process:

1. **Install packages**:
   ```bash
   npm install --save-dev presetter @presetter/preset-esm
   ```

2. **Create configuration file**:
   ```typescript
   // presetter.config.ts
   export { default } from '@presetter/preset-esm';
   ```

3. **Update package.json**:
   ```json
   {
     "scripts": {
       "bootstrap": "presetter bootstrap"
     }
   }
   ```

4. **Bootstrap the project**:
   ```bash
   npm run bootstrap
   ```

## Preset Selection

Choose the right preset for your project type:

### For Modern ES Modules
```bash
npm install --save-dev presetter @presetter/preset-esm
```
**Best for**: Libraries, Node.js applications, modern web projects

### For React Applications
```bash
npm install --save-dev presetter @presetter/preset-react
```
**Includes**: React-specific linting, Storybook, testing utilities

### For Dual CJS/ESM Libraries
```bash
npm install --save-dev presetter @presetter/preset-hybrid
```
**Best for**: NPM packages that need to support both module systems

### For Monorepos (v8+)
```bash
npm install --save-dev presetter @presetter/preset-monorepo
```
**Best for**: Multi-package repositories with shared configurations, TypeScript project references, unified testing

### For Legacy CommonJS
```bash
npm install --save-dev presetter @presetter/preset-cjs
```
**Best for**: Existing CommonJS projects, legacy Node.js applications

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
These are expected! With npm 7+, peer dependencies are automatically installed. Since v8.0.0, Presetter leverages npm's built-in peer dependency handling for a smoother experience.

**TypeScript errors in config files**:
Ensure you have TypeScript installed:
```bash
npm install --save-dev typescript
```

### Getting Help

- 📚 Check [Advanced Topics](/docs/advanced) for frequently asked questions
- 🐛 [Report issues on GitHub](https://github.com/alvis/presetter/issues)
- 💬 Ask questions in [GitHub Discussions](https://github.com/alvis/presetter/discussions)

## Current Baseline

This checkout's published packages are on the scoped `@presetter/*` preset namespace and the TypeScript 6 toolchain baseline:

### 📦 Scoped package namespace
- Every preset now ships under the **`@presetter/*`** scope (for example, `@presetter/preset-esm`). The main `presetter` CLI package keeps its unscoped name.

### 🧰 TypeScript 6 + ES2024
- **TypeScript 6** is now the required peer dependency.
- The default compile target is **ES2024**.
- **`noUncheckedIndexedAccess`** is enabled in the essentials preset for safer indexed access. The `tsconfig` templates were simplified to rely on TypeScript 6 defaults.
- Repository typechecking now uses `tsgo` via `@typescript/native-preview`; published presets continue to use the TypeScript 6 peer baseline.

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
