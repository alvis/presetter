# 🚀 Presetter

<p align="center">
  <img src="https://raw.githubusercontent.com/alvis/presetter/master/assets/logo.svg" alt="Presetter logo" height="128">
</p>

<div align="center">

[![npm](https://img.shields.io/npm/v/presetter?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=main&style=flat-square)](https://github.com/alvis/presetter/actions)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter?style=flat-square)](https://libraries.io/npm/presetter)

Template-driven configuration management for TypeScript projects and monorepos ⚡

•   [Quick Start](#-quick-start)   •   [CLI Reference](#-cli-reference)   •   [Presets](#-official-presets)   •   [Architecture](#-how-it-works)   •

</div>

---

**Presetter is the configuration management tool that turns an explicit preset stack into the files and scripts your TypeScript projects need.**

## ⚡ The Development Setup Revolution

### Still copying configs between projects? 😤

Every repo starts clean. Then the same `eslint`, `vitest`, `typescript`, build, and lifecycle settings fork in small ways across apps, packages, services, and CLIs.

Presetter moves that intent into `presetter.config.ts`: compose official presets for the shared baseline, keep local overrides visible, and regenerate the config files your toolchain still expects.

<p align="center">
  <video src="https://github.com/user-attachments/assets/03eef833-9c20-4d22-99c7-85f26c620e66" controls playsinline preload="metadata" width="100%" title="Presetter launch video: make configuration maintainable again">
    <a href="https://github.com/user-attachments/assets/03eef833-9c20-4d22-99c7-85f26c620e66">Watch the Presetter launch video</a>
  </video>
</p>

### The config drift loop vs. Presetter

```diff
# Before: copied config across repos and packages
workspace/
├── apps/web/eslint.config.ts       ← React-specific edits
├── apps/api/eslint.config.ts       ← Similar, but not quite the same
├── packages/ui/vitest.config.ts    ← Local test tweaks
├── packages/core/tsconfig.json     ← Shared intent copied by hand
└── packages/runtime/package.json   ← Scripts slowly drift

# After: explicit preset stack plus generated outputs
workspace/
+├── presetter.config.ts            ← Compose the maintained baseline
├── package.json                    ← Scripts merge with preset scripts
└── generated config files          ← Output files can stay out of Git
```

---

## 🎯 Compose the Toolchain You Need

```bash
# Choose the preset stack that matches this project:

# 🟢 Modern ESM development
npx presetter use @presetter/preset-esm

# 🔗 Legacy CommonJS compatibility
npx presetter use @presetter/preset-cjs

# 🌐 Dual-module library publishing
npx presetter use @presetter/preset-hybrid

# 🎨 Modern web development with TailwindCSS + Storybook
npx presetter use @presetter/preset-esm @presetter/preset-web

# ⚛️ React application with optimized toolchain
npx presetter use @presetter/preset-esm @presetter/preset-react

# 🏢 Production-grade with security hardening + 100% coverage
npx presetter use @presetter/preset-esm @presetter/preset-strict
```

TypeScript, ESLint, Vitest, build scripts, git hooks, formatter, linter, bundler — the same maintained baseline can travel across repos while each project keeps the differences that matter.

---

## ✨ What Makes Presetter Revolutionary

### 🧠 Intelligent Configuration Generation

Presetter doesn't copy static files. It **generates** configurations using sophisticated templates that adapt to your project:

- **Context-aware**: Presets know about your project structure, dependencies, and requirements
- **Variable substitution**: Templates use dynamic values (`{source}`, `{target}`, `{output}`)
- **Smart merging**: Deep merge algorithms handle complex configuration inheritance
- **Two-pass resolution**: Initial setup + override pass for controlled customization

### 🏗️ Composable Preset Architecture

Mix and match presets like building blocks:

```typescript
// presetter.config.ts - Build the stack this project needs
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';
import web from '@presetter/preset-web';
import react from '@presetter/preset-react';
import strict from '@presetter/preset-strict';

export default preset('my-app', {
  extends: [essentials, web, react, strict], // 🚀 Ultimate React stack
  override: {
    variables: {
      target: 'ES2023', // 🎯 Cutting-edge compilation target
    },
  },
});
```

### ⚡ Real Developer Productivity

| Common Setup Pain                   | With Presetter                         | Result                          |
| ----------------------------------- | -------------------------------------- | ------------------------------- |
| Rebuilding the same toolchain setup | Compose a preset stack once            | Faster project starts           |
| Repeating config updates by hand    | Update preset versions and bootstrap   | Fewer risky edits               |
| Copy-paste errors across projects   | Keep shared intent in one config model | Less drift, clearer differences |

---

## 🔍 Understanding Presetter vs Presets

**Critical distinction:**

| Component                       | Role                               | What it does                                                             |
| ------------------------------- | ---------------------------------- | ------------------------------------------------------------------------ |
| **Presetter** (this package)    | 🎛️ Configuration management engine | CLI tool that processes presets, generates configs, manages dependencies |
| **Presets** (template packages) | 📋 Configuration templates         | Define what configs to generate, how tools should be configured          |

**Think of it like:**

- **Presetter** = The powerful engine that builds development environments
- **Presets** = The blueprints that define what to build

---

## 🚀 Quick Start

### 🎬 Project Setup

```bash
# 1. Choose and adopt a preset stack
npx presetter use @presetter/preset-esm

# 2. Install dependencies and let bootstrap generate tool configs
npm install

# 3. Start developing immediately!
npm run build    # ✅ TypeScript compilation
npm run test     # ✅ Vitest testing
npm run lint     # ✅ ESLint checking
npm run watch    # ✅ Development mode
```

### 🔧 Converting Existing Projects

```bash
# 1. Review current setup (decide what to keep/replace)
ls -la *.config.* .*rc.* tsconfig*.json

# 2. Remove local config files you want presets to own
rm eslint.config.ts vitest.config.ts

# 3. Adopt presetter
npx presetter use @presetter/preset-esm

# 4. Keep only the local overrides that matter
```

---

## 🛠️ CLI Reference

Presetter provides powerful CLI commands for managing your development environment:

```bash
⚙️ presetter: your preset configurator

Commands:
  presetter use <preset>     Adopt specified preset(s) to the project
  presetter bootstrap       Apply preset configurations to the project
  presetter run <task>      Run a task with preset + local script merging
  presetter unset           Remove all artifacts created by presets

Shortcuts:
  run <task>                Shortcut for 'presetter run <task>'
  run-s <tasks...>          Run tasks sequentially
  run-p <tasks...>          Run tasks in parallel

Options:
  --help                    Show help
  --version                 Show version number
```

#### Bootstrap flags

| Flag                | Alias | Default | Purpose                                                                                           |
| ------------------- | ----- | ------- | ------------------------------------------------------------------------------------------------- |
| `--projects <glob>` | `-p`  | `.`     | Path globs to project directories containing a `package.json` (e.g. `packages/*`, `presets/next`) |
| `--packages <glob>` | `-P`  | _none_  | Package-name globs matching `package.json#name` across the workspace (e.g. `@presetter/preset-*`) |
| `--only <file>`     |       | _none_  | Only proceed when the specified file exists                                                       |

Both `--projects` and `--packages` accept comma-separated values; the wildcard `*` in `--packages` does not cross the npm-scope boundary (so `@presetter/preset-*` will not match `@other/foo`).

### 🎯 Common Commands

```bash
# Adopt presets and run bootstrap
presetter use @presetter/preset-esm @presetter/preset-strict

# Manually bootstrap (if needed)
presetter bootstrap

# Bootstrap specific projects by path glob
presetter bootstrap --projects packages/*

# Bootstrap by package name (e.g. every preset package in a monorepo)
presetter bootstrap --packages "@presetter/preset-*"

# Mix path and name globs; both flags accept comma-separated values
presetter bootstrap --projects .,e2e,packages/* --packages "@presetter/preset-*"

# Run development tasks
run build                 # Build your project
run test                  # Run tests
run lint                  # Lint your code
run watch                 # Development mode with hot reload

# Run multiple tasks
run-s clean build test    # Sequential execution
run-p lint test           # Parallel execution

# Remove all preset configurations
presetter unset
```

---

## 📦 Official Presets

Presetter comes with a comprehensive ecosystem of official presets:

### Core Development Presets

| Preset                                                                                                      | Purpose                        | Best For                                  |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------ | ----------------------------------------- |
| **[@presetter/preset-essentials](https://github.com/alvis/presetter/blob/main/packages/preset-essentials)** | 🏗️ Complete TypeScript toolkit | Foundation for all TypeScript projects    |
| **[@presetter/preset-esm](https://github.com/alvis/presetter/blob/main/packages/preset-esm)**               | 🚀 ESM-first development       | Modern Node.js projects, libraries        |
| **[@presetter/preset-cjs](https://github.com/alvis/presetter/blob/main/packages/preset-cjs)**               | 🔗 CommonJS compatibility      | Legacy environments, enterprise           |
| **[@presetter/preset-hybrid](https://github.com/alvis/presetter/blob/main/packages/preset-hybrid)**         | 🌐 Dual-module packages        | npm libraries needing broad compatibility |

### Specialized Extension Presets

| Preset                                                                                              | Purpose                     | Extends         |
| --------------------------------------------------------------------------------------------------- | --------------------------- | --------------- |
| **[@presetter/preset-strict](https://github.com/alvis/presetter/blob/main/packages/preset-strict)** | 🏢 Production-grade quality | Any base preset |
| **[@presetter/preset-web](https://github.com/alvis/presetter/blob/main/packages/preset-web)**       | 🎨 Modern web development   | Any base preset |
| **[@presetter/preset-react](https://github.com/alvis/presetter/blob/main/packages/preset-react)**   | ⚛️ React development        | Any base preset |
| **[@presetter/preset-rollup](https://github.com/alvis/presetter/blob/main/packages/preset-rollup)** | 📦 Library bundling         | Any base preset |

### 🎯 Preset Combination Examples

```typescript
// Modern web application
extends: [essentials, esm, web, strict]

// React component library
extends: [essentials, hybrid, react, rollup]

// Enterprise Node.js service
extends: [essentials, cjs, strict]

// Full-stack TypeScript monorepo
extends: [monorepo, essentials, web, react]
```

---

## 🏗️ How It Works

Presetter uses a sophisticated **two-pass resolution system** that makes configuration management both powerful and flexible:

### Phase 1: Dependency Resolution 🔍

```
📋 Preset Chain: [base] → [extensions] → [customizations]
    ↓
🧩 Build dependency tree and merge configurations
    ↓
🔄 Resolve variables with substitution support
```

### Phase 2: Asset Generation 🏭

```
📝 Template Processing: YAML/JSON/TS → Generated Configs
    ↓
🎯 Context-aware generation (project structure, dependencies)
    ↓
✨ Smart merging with existing configurations
```

### 🧠 Intelligent Features

- **Variable System**: Templates use `{source}`, `{output}`, `{target}` for dynamic configuration
- **Context Awareness**: Presets adapt based on project structure and location
- **Deep Merging**: Sophisticated algorithms handle complex inheritance
- **Script Composition**: Local scripts merge with preset scripts intelligently

### 🔧 Binary Path Resolution

When running tasks via `run`, `run-s`, or `run-p`, Presetter prepends binary paths from preset packages to the PATH environment variable. This makes tools in each preset's `node_modules/.bin` directory available without additional configuration.

**How it works:**

- Direct preset binaries are checked first
- Extended preset binaries are checked next
- Finally, the existing PATH is checked

**Benefits:**

- No need to install shared dev tools at the repository root
- No need for pnpm's `shamefullyHoist: true` or `public-hoist-pattern` for every tool
- Preset dependencies are available to templated scripts through the resolved PATH

**Limitation - Dynamic Imports:**

Libraries loaded via dynamic `import()` may fail because dynamic imports are resolved from the project root, not the preset. This affects libraries that are loaded at runtime rather than through direct imports.

**Notable example:** `@vitest/coverage-v8` - required by vitest when using v8 as the coverage engine.

**Workarounds:**

1. **Install directly:** Add the library to your project's `package.json` (or monorepo root):

   ```bash
   npm install -D @vitest/coverage-v8
   ```

2. **Use pnpm hoisting:** Add the library to pnpm's `public-hoist-pattern` in `pnpm-workspace.yaml`:

   ```yaml
   packages:
     - 'packages/*'
   settings:
     public-hoist-pattern:
       - '@vitest/coverage-v8'
   ```

---

## 🛠️ Advanced Usage

### 🎨 Custom Preset Configuration

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import esm from '@presetter/preset-esm';

export default preset('my-project', {
  extends: [esm],
  override: {
    variables: {
      target: 'ES2023', // Modern compilation target
      source: 'source', // Custom source directory
      output: 'dist', // Custom output directory
    },
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          allowImportingTsExtensions: true, // Enable experimental features
        },
      },
      'package.json': {
        scripts: {
          'custom:task': 'echo "My custom script"',
        },
      },
    },
  },
});
```

### 🔧 Local Configuration Override

Presetter respects local configurations - simply create your own file:

```bash
# Presetter will use your local version instead of generating from template
touch .eslintrc.json      # Use your custom ESLint config
touch vitest.config.ts    # Use your custom Vitest config
```

### 🏗️ Script Composition

Combine preset scripts with your local scripts:

````json5
```jsonc
  scripts: {
    'build': 'run build', // Use preset's build script
    'build:custom': 'run build && echo done', // Extend preset's build
    'test': 'run test --', // Preset test + pass arguments
    'custom': "echo 'My script'", // Pure local script
  },
}
````

---

## 🌟 Benefits & Features

### ✅ Developer Experience

- **⚡ Repeatable setup**: Adopt a preset stack and generate the expected tool configs
- **🔄 Consistent updates**: Update projects by updating preset versions
- **🎯 Recommended baselines**: Configurations follow maintained TypeScript tooling patterns
- **🚀 Composable architecture**: Mix and match presets to fit each project shape

### ✅ Project Management

- **📦 Config drift reduction**: Keep shared toolchain intent in `presetter.config.ts`
- **🔧 Maintenance simplification**: Single source of truth for generated configurations
- **🌐 Team consistency**: Same baseline across team members and projects
- **📈 Scalability**: Manage configurations across many repos and monorepo packages

### ✅ Technical Excellence

- **🧠 Intelligent merging**: Sophisticated algorithms handle complex configurations
- **🔄 Two-pass resolution**: Initial setup + override for controlled customization
- **📝 Template system**: Dynamic, context-aware configuration generation
- **🎛️ Fine-grained control**: Override anything while maintaining preset benefits

---

## 🆚 Alternatives Comparison

| Solution            | Setup Model                  | Maintenance       | Consistency         | Flexibility |
| ------------------- | ---------------------------- | ----------------- | ------------------- | ----------- |
| **Manual Setup**    | Hand-copy each config        | Repeated by hand  | Drifts easily       | Full        |
| **Boilerplate/CRA** | Copy a starter project once  | Template ages     | Medium              | Limited     |
| **Presetter**       | Compose presets and generate | Versioned presets | Maintained baseline | Full        |

---

## 🛠️ Troubleshooting

### Common Issues

| Issue                    | Symptoms                 | Solution                                        |
| ------------------------ | ------------------------ | ----------------------------------------------- |
| **Missing dependencies** | Package import errors    | Run `presetter bootstrap`                       |
| **Config conflicts**     | Unexpected tool behavior | Check for local config files overriding presets |
| **Script not found**     | `run` command fails      | Ensure script exists in preset or package.json  |
| **Preset not found**     | Bootstrap fails          | Check preset package name and installation      |

### Debug Mode

```bash
# Enable detailed logging for troubleshooting
DEBUG=presetter* presetter bootstrap
DEBUG=presetter* run build
```

---

## ❓ FAQ

### How is this different from boilerplates?

Boilerplates copy static files once. Presetter **generates** configurations dynamically and **maintains** them through preset updates. When you update a preset and run `bootstrap`, projects using it can pick up the same improvements.

### Can I customize generated configurations?

Yes! Presetter offers multiple customization levels:

- **Variable overrides**: Change compilation targets, directories, etc.
- **Asset overrides**: Modify specific configuration properties
- **Local files**: Replace preset configs entirely with your own files

### How do I update configurations across projects?

Simply update the preset package version in your projects. Presetter will regenerate configurations with the latest improvements when you run `bootstrap`.

### Can I create my own presets?

Absolutely! Presets are just npm packages that export configuration templates. See [@presetter/types](https://github.com/alvis/presetter/blob/main/packages/types) for TypeScript definitions.

### Does this work with monorepos?

Yes! Presetter supports monorepo setups and can bootstrap multiple projects with glob patterns. Use [@presetter/preset-monorepo](https://github.com/alvis/presetter/blob/main/packages/preset-monorepo) for monorepo-specific configurations.

### Why do some dynamically imported libraries fail to resolve?

While Presetter makes preset tools available via PATH, libraries loaded through dynamic `import()` (like `@vitest/coverage-v8`) resolve from your project root, not the preset. Install such libraries directly at your project root or add them to pnpm's `public-hoist-pattern` in `pnpm-workspace.yaml`.

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
