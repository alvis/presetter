# 🚀 @presetter/preset-esm

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

<div align="center">

[![npm](https://img.shields.io/npm/v/@presetter/preset-esm?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/master?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/@presetter/preset-esm?style=flat-square)](https://libraries.io/npm/@presetter/preset-esm)

ESM-first TypeScript development — modern modules, zero configuration

•   [Usage](#-usage)   •   [Configuration](#-configuration-details)   •   [Comparison](#-comparison)   •   [FAQ](#-faq)   •

</div>

---

**This is a configuration template that works with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install ESM preset
npm i -D presetter @presetter/preset-esm

# Create presetter.config.ts
echo "export { default } from '@presetter/preset-esm';" > presetter.config.ts

# Bootstrap your project
npx presetter bootstrap
```

Your project is now configured for **native ESM** with TypeScript, modern build targets, and optimized tooling — **ready for the future!**

---

## ✨ Embrace the ESM Revolution

### Still wrestling with CommonJS in 2024?

JavaScript has evolved. ES Modules are the standard. Yet many developers are still stuck with legacy CommonJS setups, dealing with `require()`, `module.exports`, and build tools that need to transform everything.

**It's time to go native.**

### The ESM migration headaches

| Pain Point             | CommonJS Legacy                         | With preset-esm               |
| ---------------------- | --------------------------------------- | ----------------------------- |
| **Module Syntax**      | `require()` and `module.exports` mixing | ✅ Pure `import`/`export`     |
| **Build Complexity**   | Transform ESM → CJS → ESM               | ✅ Direct ESM compilation     |
| **Tool Compatibility** | Configure each tool for module systems  | ✅ ESM-optimized everything   |
| **Tree Shaking**       | Poor due to dynamic CommonJS nature     | ✅ Optimal with static ESM    |
| **Debugging**          | Source maps broken by transformations   | ✅ Perfect source mapping     |
| **Future Proofing**    | Fighting against the platform direction | ✅ Aligned with web standards |

### What you get instead

**@presetter/preset-esm is a configuration template that provides ESM-first TypeScript development.**

When used with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter) (the configuration management tool), this preset extends [preset-essentials](https://github.com/alvis/presetter/blob/master/packages/preset-essentials) with ESM-specific optimizations, ensuring your project uses native ECMAScript modules throughout the entire development and build pipeline.

- 🎯 **ESM-Native**: Pure ECMAScript modules without CommonJS compatibility layers
- ⚡ **Modern Targets**: ES2022+ compilation for current Node.js and browsers
- 🔧 **Zero Config**: TypeScript ESM compilation works perfectly out of the box
- 🌳 **Tree Shaking**: Optimal bundler optimization with static module analysis
- 🚀 **Future Ready**: Aligned with web platform standards and best practices
- 🛠️ **Tool Harmony**: All development tools optimized for ESM workflow

---

## 🎯 Native ESM Without the Pain

### The TypeScript ESM compilation problem

TypeScript doesn't handle ESM compilation correctly by default. You write:

```typescript
import { helper } from './utils';
```

TypeScript outputs:

```javascript
import { helper } from './utils'; // ❌ Missing .js extension - breaks in Node.js ESM
```

**Node.js ESM requires explicit file extensions. Manual fixes are tedious and error-prone.**

### From ESM compilation hell to seamless workflow

```diff
# Before: Manual ESM setup nightmare
my-project/
├── tsconfig.json               ← Complex module resolution config
├── package.json                ← "type": "module" but broken builds
├── build-script.js             ← Custom script to fix imports
├── src/
│   └── index.ts
└── lib/
-   └── index.js                ← Missing .js extensions, broken imports

# After: Generated from ESM template
my-project/
+├── presetter.config.ts        ← References this ESM preset template
├── package.json                ← Perfect ESM configuration
+├── tsconfig.json              ← Generated with optimal ESM settings
+├── Build pipeline             ← Generated with tsc-esm-fix integration
├── src/
│   └── index.ts
└── lib/
+   └── index.js                ← Perfect ESM with correct extensions
```

### How ESM template optimization works

1. **TypeScript Configuration** — Optimal settings for native ESM compilation
2. **Build Pipeline** — Automatic import/export fixing with `tsc-esm-fix`
3. **Package Structure** — Perfect ESM package.json with exports field
4. **Tool Integration** — All development tools configured for ESM workflow

### Why this solves the real problem

- **Correct ESM output**: Generated JavaScript works natively in Node.js ESM
- **Zero manual fixes**: Build pipeline automatically handles TypeScript ESM issues
- **Optimal performance**: Better tree shaking and bundler optimization
- **Future compatibility**: Aligned with evolving JavaScript standards
- **Development efficiency**: Hot reloading and watch mode work perfectly

---

## 🔍 Understanding Presetter vs This Preset

**Important distinction:**

| Component                                                                          | Role                          | What it does                                                         |
| ---------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter)** | Configuration management tool | CLI that processes presets, generates config files, executes scripts |
| **@presetter/preset-esm**                                                           | ESM configuration template    | Extends essentials with ESM-specific optimizations                   |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **This preset** = The blueprint for a modern, standards-compliant home

This preset extends [preset-essentials](https://github.com/alvis/presetter/blob/master/packages/preset-essentials) with ESM-specific configurations. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic ESM Project Setup

#### Step 1: Install Preset

```jsonc
// package.json
{
  "type": "module",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "exports": {
    ".": {
      "types": "./lib/index.d.ts",
      "import": "./lib/index.js",
    },
  },
  "scripts": {
    "build": "run build",
    "test": "run test",
  },
  "devDependencies": {
    "presetter": "latest",
    "@presetter/preset-esm": "latest",
  },
}
```

```typescript
// presetter.config.ts
export { default } from '@presetter/preset-esm';
```

#### Step 2: Bootstrap & Develop

```bash
npm install
# Perfect ESM configuration generated automatically
# Write modern ESM code immediately!
```

That's it! TypeScript compiles to native ESM with correct import extensions. No manual fixes needed.

---

### 🧑‍🔬 Advanced Usage: Custom ESM Optimizations

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import esm from '@presetter/preset-esm';

export default preset('my-esm-project', {
  extends: [esm],
  override: {
    variables: {
      target: 'ES2023', // Even more modern target
    },
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          moduleResolution: 'bundler',
          allowImportingTsExtensions: true,
        },
      },
    },
  },
});
```

> **Need more customization options?** Check the [main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter) for complete guides on overrides, extensions, and advanced configurations.

---

## 📖 API Reference

### Core ESM Configuration Template

This preset extends [preset-essentials](https://github.com/alvis/presetter/blob/master/packages/preset-essentials) with ESM-specific optimizations:

| Configuration         | Purpose         | ESM Optimizations                                          |
| --------------------- | --------------- | ---------------------------------------------------------- |
| **TypeScript**        | ESM compilation | `module: "ESNext"`, `target: "ES2022"`, bundler resolution |
| **Build Pipeline**    | Import fixing   | `tsc-esm-fix` integration for correct .js extensions       |
| **Package Structure** | ESM exports     | Proper `exports` field and module type                     |
| **Source Maps**       | Debugging       | Accurate mapping for ESM output                            |

### Configuration Variables

Inherited from [preset-essentials](https://github.com/alvis/presetter/blob/master/packages/preset-essentials) with ESM-optimized defaults:

| Variable | Default    | Description                          |
| -------- | ---------- | ------------------------------------ |
| `source` | `"src"`    | Source code directory                |
| `output` | `"lib"`    | Build output directory               |
| `test`   | `"spec"`   | Test files directory                 |
| `target` | `"ES2022"` | Modern TypeScript compilation target |

---

## 🔧 Configuration Details

### TypeScript ESM Configuration

```typescript
// Generated tsconfig.json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "target": "ES2022",
    "strict": true,
    "declaration": true,
    "sourceMap": true
  }
}
```

### Enhanced Build Pipeline

```yaml
# Generated build scripts with ESM fixes
build:typescript: run-s build:typescript:tsc build:typescript:alias build:typescript:mjs:fix
build:typescript:mjs:fix: tsc-esm-fix --sourceMap --target {output}
```

### Perfect Package.json Structure

```jsonc
// ESM-optimized package.json
{
  "type": "module",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "exports": {
    ".": {
      "types": "./lib/index.d.ts",
      "import": "./lib/index.js",
    },
  },
}
```

---

## 🏎️ Performance

| Metric       | CommonJS Legacy               | With preset-esm           |
| ------------ | ----------------------------- | ------------------------- |
| Bundle size  | Larger due to polyfills       | **10-30% smaller**        |
| Tree shaking | Poor optimization             | **Optimal**               |
| Load time    | Slower due to transformations | **Faster native modules** |
| Build speed  | Multiple transformation steps | **Direct compilation**    |

---

## 🌐 Compatibility

| Environment | Support                           |
| ----------- | --------------------------------- |
| Node.js     | ≥ 16 (ESM stable)                 |
| Browsers    | Modern (ES2022)                   |
| Bundlers    | Vite, Webpack 5+, Rollup, esbuild |
| TypeScript  | ≥ 5.0                             |

### Extends

- [`@presetter/preset-essentials`](https://github.com/alvis/presetter/blob/master/packages/preset-essentials) - Core TypeScript development toolkit

### Extended By

- [`@presetter/preset-strict`](https://github.com/alvis/presetter/blob/master/packages/preset-strict) - ESM + stricter linting rules
- [`@presetter/preset-web`](https://github.com/alvis/presetter/blob/master/packages/preset-web) - ESM + web development tools
- [`@presetter/preset-react`](https://github.com/alvis/presetter/blob/master/packages/preset-react) - ESM + React development setup

---

## 🆚 Comparison

| Feature           | preset-esm   | CommonJS  | Hybrid          |
| ----------------- | ------------ | --------- | --------------- |
| **Modern Syntax** | ✅ Native    | ❌ Legacy | ⚠️ Mixed        |
| **Tree Shaking**  | ✅ Optimal   | ❌ Poor   | ⚠️ Partial      |
| **Build Speed**   | ✅ Fast      | ⚠️ Slow   | ❌ Complex      |
| **Future Proof**  | ✅ Standards | ❌ Legacy | ⚠️ Transitional |
| **Bundle Size**   | ✅ Smaller   | ❌ Larger | ⚠️ Variable     |

### When to Use

✅ **Use preset-esm when:**

- Building new projects or libraries
- Targeting Node.js 16+ or modern browsers
- Want optimal bundle size and performance
- Need excellent tree shaking support
- Prefer standard JavaScript syntax

❌ **Consider alternatives when:**

- Supporting legacy Node.js versions
- Working with old CommonJS dependencies
- Need dual module publishing

---

## 🛠️ Troubleshooting

> **General Presetter issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/master/README.md#troubleshooting) for common Presetter problems and solutions.

### ESM-Specific Issues

| Issue                      | Symptoms                | Solution                                  |
| -------------------------- | ----------------------- | ----------------------------------------- |
| **Import errors**          | `Cannot resolve module` | Check file extensions in generated output |
| **TypeScript compilation** | Wrong module format     | Preset handles this automatically         |
| **Package imports**        | `ERR_MODULE_NOT_FOUND`  | Ensure dependencies support ESM           |

> **Need help with Presetter CLI commands?** Check the [CLI reference](https://github.com/alvis/presetter/blob/master/README.md#cli-reference) in the main documentation.

---

## ❓ FAQ

> **General Presetter questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/master/README.md#faq) for general usage, configuration, and customization questions.

### ESM-Specific FAQs

#### What's the difference from preset-essentials?

preset-esm **extends** preset-essentials with ESM-specific optimizations:

- TypeScript compilation targets native ESM
- Build pipeline includes import/export fixing
- Package.json structure optimized for ESM
- All tools configured for ESM workflow

#### Can I use CommonJS dependencies?

Yes! ESM projects can import CommonJS packages:

```typescript
import express from 'express'; // Works fine - CommonJS package
import { myFunction } from './my-esm-module.js'; // ESM module
```

#### How does this handle TypeScript path mapping?

The preset configures TypeScript path mapping to work correctly with ESM:

```typescript
// tsconfig.json paths work correctly
import { utils } from '#utils'; // Resolves to ./src/utils.js
```

#### Why not use a bundler instead?

Bundlers are great for applications, but libraries and Node.js projects benefit from native ESM:

- Better debugging with accurate source maps
- Faster development builds
- No bundler configuration needed
- Compatible with all modern tools

---

## 🤝 Contributing

We'd love your ideas and contributions!
Submit issues or suggestions via [GitHub Issues](https://github.com/alvis/presetter/issues).
See the [Contribution Guide](https://github.com/alvis/presetter/blob/master/CONTRIBUTING.md) for more details.

---

## 📄 License

Released under the [MIT License](https://github.com/alvis/presetter/blob/master/LICENSE).
© 2020, [Alvis Tang](https://github.com/alvis).

[![License](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)
