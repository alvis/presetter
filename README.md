# ![Logo](assets/logo.svg)

<div align="center">

[![npm](https://img.shields.io/npm/v/presetter?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter?style=flat-square)](https://libraries.io/npm/presetter)
[![docs](https://img.shields.io/badge/docs-presetter.dev-blue?style=flat-square)](https://alvis.github.io/presetter/)

_Transform 40+ dev dependencies into 2 packages — template-driven configuration management for modern TypeScript development_

•   [Quick Start](#-quick-start)   •   [Monorepo Structure](#-monorepo-structure)   •   [Official Presets](#-official-presets)   •   [Usage](#-usage)   •

</div>

**Presetter** is a configuration management tool that eliminates the pain of setting up and maintaining build configurations across TypeScript projects. Instead of copying dozens of config files and managing 40+ dev dependencies, you install 2 packages and get a perfectly configured development environment.

This monorepo contains the **Presetter engine** and a comprehensive ecosystem of **official presets** for every TypeScript development scenario.

![Before and After](assets/before-and-after.jpg)

---

## 🚀 Quick Start

### 🎯 Choose Your Development Style

```bash
# 🟢 Modern ESM development
npx presetter use @presetter/preset-esm

# 🔗 Legacy CommonJS compatibility
npx presetter use @presetter/preset-cjs

# 🌐 Dual-module library publishing
npx presetter use @presetter/preset-hybrid

# 🎨 Modern web development (TailwindCSS + Storybook)
npx presetter use @presetter/preset-esm @presetter/preset-web

# ⚛️ React application with optimized toolchain
npx presetter use @presetter/preset-esm @presetter/preset-react

# 🏢 Production-grade (security + 100% coverage)
npx presetter use @presetter/preset-esm @presetter/preset-strict

# ⚡ Next.js application with full-stack support
npx presetter use @presetter/preset-next
```

### 🔧 Or Set It Up Manually

1. **Add Presetter and preset to your project:**

```json5
{
  scripts: {
    bootstrap: 'presetter bootstrap',
  },
  devDependencies: {
    'presetter': 'latest',
    '@presetter/preset-esm': 'latest',
  },
}
```

1. **Create preset configuration:**

```typescript
// presetter.config.ts
export { default } from '@presetter/preset-esm';
```

1. **Install and start developing:**

```bash
npm install  # Configurations generated automatically
npm run test # Everything just works! ✨
```

![Demo](assets/demo.gif)

---

## 🏗️ Monorepo Structure

This repository is organized as a TypeScript monorepo containing the core Presetter engine and all official presets:

```
presetter/
├── packages/
│   ├── presetter/          🎛️ Core engine
│   └── types/              📋 TypeScript definitions
│
├── presets/
│   ├── essentials/         🏗️ Foundation toolkit
│   ├── monorepo/           📦 Monorepo management
│   │
│   ├── esm/                🚀 ESM-first
│   ├── cjs/                🔗 CommonJS
│   ├── hybrid/             🌐 Dual CJS/ESM
│   │
│   ├── strict/             🏢 Production-grade quality
│   ├── web/                🎨 Web dev stack
│   ├── react/              ⚛️ React
│   ├── next/               ⚡ Next.js
│   └── rollup/             📦 Library bundling
│
├── website/                📖 Docusaurus documentation site
├── e2e/                    🧪 End-to-end integration tests
├── examples/               🔬 Example consumer projects
└── assets/                 🎨 Logos and demo assets
```

### 🎯 Package Categories

| **Category**       | **Packages**                                                                  | **Purpose**                                        |
| ------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------- |
| **Core Engine**    | `presetter`, `types`                                                          | Configuration management infrastructure            |
| **Foundation**     | `preset-essentials`, `preset-monorepo`                                        | Base TypeScript development toolkit                |
| **Module Systems** | `preset-esm`, `preset-cjs`, `preset-hybrid`                                   | JavaScript module format & runtime specializations |
| **Extensions**     | `preset-strict`, `preset-web`, `preset-react`, `preset-next`, `preset-rollup` | Specialized development environments               |

---

## 📦 Official Presets

### 🏗️ Foundation Presets

| Preset                                                 | Purpose                                 | Dependencies                                | Best For                               |
| ------------------------------------------------------ | --------------------------------------- | ------------------------------------------- | -------------------------------------- |
| **[@presetter/preset-essentials](presets/essentials)** | Complete TypeScript development toolkit | TypeScript, ESLint, Vitest, Prettier, Husky | Foundation for all TypeScript projects |
| **[@presetter/preset-monorepo](presets/monorepo)**     | Monorepo project management             | Workspace tools, cross-package scripts      | Multi-package repositories             |

### 🚀 Module System & Runtime Presets

| Preset                                         | Purpose                    | Extends    | Best For                                  |
| ---------------------------------------------- | -------------------------- | ---------- | ----------------------------------------- |
| **[@presetter/preset-esm](presets/esm)**       | ESM-first development      | essentials | Modern Node.js projects, libraries        |
| **[@presetter/preset-cjs](presets/cjs)**       | CommonJS compatibility     | essentials | Legacy environments, enterprise           |
| **[@presetter/preset-hybrid](presets/hybrid)** | Dual CommonJS/ESM packages | essentials | npm libraries needing broad compatibility |

### 🎨 Specialized Extension Presets

| Preset                                         | Purpose                              | Extends              | Best For                                        |
| ---------------------------------------------- | ------------------------------------ | -------------------- | ----------------------------------------------- |
| **[@presetter/preset-strict](presets/strict)** | Production-grade quality enforcement | Any base preset      | Enterprise applications, critical systems       |
| **[@presetter/preset-web](presets/web)**       | Modern web development stack         | Any base preset      | Web applications, SPAs                          |
| **[@presetter/preset-react](presets/react)**   | React development excellence         | Any base preset      | React applications, component libraries         |
| **[@presetter/preset-next](presets/next)**     | Next.js full-stack development       | esm + strict + react | Next.js apps with App Router, Server Components |
| **[@presetter/preset-rollup](presets/rollup)** | Professional library bundling        | Any base preset      | npm packages, open-source libraries             |

### 🎯 Common Preset Combinations

```typescript
// Modern web application
extends: [esm, web]

// React component library
extends: [react, rollup]

// Legacy Node.js service
extends: [cjs]

// Full-stack TypeScript monorepo
extends: [monorepo]

// Next.js application (includes everything)
export { default } from '@presetter/preset-next';
```

---

## 🔍 How Presetter Works

**Presetter** transforms configuration management through intelligent template processing:

### 🎛️ The Core Engine ([packages/presetter](packages/presetter))

Presetter handles two main responsibilities:

1. **🏗️ Environment Setup:**
   - Installs development dependencies defined by presets
   - Generates configuration files using sophisticated templates

2. **⚡ Script Management:**
   - Merges preset scripts with local `package.json` scripts
   - Provides intelligent script composition and execution
   - Enables `run`, `run-s`, and `run-p` commands for enhanced workflows
   - **Binary Path Resolution**: Automatically discovers executables in each preset's `node_modules/.bin` and prepends them to PATH, allowing preset tools to take priority without requiring `shamefullyHoist` or `public-hoist-pattern` configuration

   > **Note**: Libraries loaded via dynamic import (like `@vitest/coverage-v8`) may still need to be installed at root or hoisted. See the [presetter package docs](packages/presetter) for details.

### 📋 Preset Architecture

Each preset is a reusable configuration bundle containing:

- **Dependencies**: Defined as `peerDependencies` and installed automatically
- **Configuration Templates**: Dynamic files that adapt to your project structure
- **Scripts**: Lifecycle commands that integrate with your local workflows
- **Variables**: Customizable parameters for flexible configuration

### 🧠 Two-Pass Resolution System

Presetter uses a sophisticated resolution process:

1. **📋 Dependency Resolution**: Build preset inheritance tree and merge configurations
2. **🎯 Asset Generation**: Process templates with context-aware variable substitution
3. **⚡ Override Application**: Apply customizations while preserving preset benefits

> Want the full diagrammed walkthrough? See **[ARCHITECTURE.md](ARCHITECTURE.md)**.

---

## 🛠️ Usage

### 📝 Basic Configuration

```typescript
// presetter.config.ts - Use a preset as-is
export { default } from '@presetter/preset-esm';
```

### 🎨 Advanced Customization

```typescript
// presetter.config.ts - Customize and extend presets
import { preset } from 'presetter';
import esm from '@presetter/preset-esm';
import strict from '@presetter/preset-strict';

export default preset('my-project', {
  extends: [esm, strict],
  override: {
    variables: {
      target: 'ES2023', // Modern compilation target
      source: 'source', // Custom source directory
    },
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          allowImportingTsExtensions: true,
        },
      },
    },
  },
});
```

### ⚡ CLI Commands

```bash
# Preset management
presetter use <preset>         # Adopt preset(s) to project
presetter bootstrap           # Apply configurations
presetter unset              # Remove all preset artifacts

# Development workflows
run build                    # Build your project
run test                     # Run tests with coverage
run lint                     # Lint and fix code
run watch                    # Development mode

# Advanced execution
run-s clean build test       # Sequential execution
run-p lint test              # Parallel execution
```

---

## 🏢 Monorepo Development

### 🔧 Development Setup

This monorepo uses **Presetter itself** for development! Each package has its own preset configuration:

```bash
# Install dependencies
npm install

# Bootstrap all packages
npm run bootstrap

# Run tests across all packages
npm run test

# Build all packages
npm run build
```

### 📊 Package Dependencies

```mermaid
graph TD
  T[types]
  P[presetter]
  E[preset-essentials]
  S[preset-strict]
  M[preset-esm]
  C[preset-cjs]
  H[preset-hybrid]
  W[preset-web]
  R[preset-react]
  X[preset-next]
  U[preset-rollup]
  O[preset-monorepo]

  P --> T
  E --> T
  M --> E
  C --> E
  H --> E
  S --> T
  W --> T
  R --> W
  X --> M
  X --> S
  X --> R
  U --> T
  O --> M
  O --> S
```

### 🎯 Workspace Scripts

The monorepo provides convenient workspace-wide commands:

| Command             | Purpose                                |
| ------------------- | -------------------------------------- |
| `npm run build`     | Build all packages in dependency order |
| `npm run test`      | Run tests across all packages          |
| `npm run lint`      | Lint all packages with auto-fix        |
| `npm run clean`     | Clean build artifacts                  |
| `npm run bootstrap` | Bootstrap all preset configurations    |

---

## 📖 Documentation

### 📚 Package Documentation

Each package contains comprehensive documentation:

- **[Core Engine Documentation](packages/presetter)** - CLI usage, configuration, advanced features
- **[Preset Development Guide](packages/types)** - TypeScript definitions and preset creation
- **Individual Preset Guides** - Detailed feature explanations and usage examples

### 🎓 Learning Resources

| Topic               | Resource                                                  |
| ------------------- | --------------------------------------------------------- |
| **Getting Started** | [Core Engine Quick Start](packages/presetter#quick-start) |
| **Preset Creation** | [Types Package Guide](packages/types)                     |
| **Advanced Usage**  | [Configuration Customization](#-advanced-customization)   |
| **Monorepo Setup**  | [Monorepo Preset Guide](presets/monorepo)                 |

---

## 🤝 Contributing

We'd love your ideas and contributions!
Submit issues or suggestions via [GitHub Issues](https://github.com/alvis/presetter/issues).
See the [Contribution Guide](https://github.com/alvis/presetter/blob/master/CONTRIBUTING.md) for more details.

---

## ❓ FAQ

### How do I create a custom preset?

Create a TypeScript file that exports a preset configuration:

```typescript
import { preset } from 'presetter';

export default preset('my-preset', {
  variables: {
    source: 'src',
    output: 'dist',
  },
  scripts: {
    build: 'tsc',
    test: 'vitest',
  },
  assets: {
    'tsconfig.json': {
      compilerOptions: {
        target: 'ES2022',
        module: 'ESNext',
      },
    },
  },
});
```

### How do I customize an existing preset?

Use the `override` field to modify preset configurations:

```typescript
import { preset } from 'presetter';
import esm from '@presetter/preset-esm';

export default preset('custom', {
  extends: [esm],
  override: {
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          strict: false, // Relax TypeScript strictness
        },
      },
    },
  },
});
```

### Can I combine multiple presets?

Yes! Presets are designed to be composable:

```typescript
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';
import web from '@presetter/preset-web';
import react from '@presetter/preset-react';
import strict from '@presetter/preset-strict';

export default preset('ultimate-react', {
  extends: [essentials, web, react, strict],
});
```

### How do I ignore files from a preset?

Override the asset with `null`:

```typescript
export default preset('custom', {
  extends: [somePreset],
  override: {
    assets: {
      '.gitignore': null, // Don't generate .gitignore
    },
  },
});
```

---

## 🌟 Philosophy

Presetter was born from the frustration of maintaining identical configurations across multiple TypeScript projects. The core principles:

- **🎯 Simplicity**: One command should set up a complete development environment
- **🔄 Maintainability**: Updates should propagate automatically across all projects
- **🧩 Composability**: Presets should work together seamlessly
- **⚡ Flexibility**: Local customizations should always be respected
- **📈 Scalability**: Should work for individual projects and large monorepos

---

## 📄 License

Released under the [MIT License](https://github.com/alvis/presetter/blob/master/LICENSE).
© 2020, [Alvis Tang](https://github.com/alvis).

[![License](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)
