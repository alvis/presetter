# 🚀 @presetter/preset-cjs

[logo.svg](https://github.com/alvis/presetter/blob/master/assets/logo.svg)

<div align="center">

[![npm](https://img.shields.io/npm/v/@presetter/preset-cjs?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=main&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/main?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/@presetter/preset-cjs?style=flat-square)](https://libraries.io/npm/@presetter/preset-cjs)

CommonJS TypeScript development — reliable compatibility, zero configuration

•   [Usage](#-usage)   •   [Configuration](#-configuration-details)   •   [Comparison](#-comparison)   •   [FAQ](#-faq)   •

</div>

---

**This is a configuration template that works with [Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install CommonJS preset
npm i -D presetter @presetter/preset-cjs

# Create presetter.config.ts
echo "export { default } from '@presetter/preset-cjs';" > presetter.config.ts

# Bootstrap your project
npx presetter bootstrap
```

Your project is now configured for **CommonJS** with TypeScript, optimized for maximum compatibility — **works everywhere!**

---

## ✨ CommonJS: Battle-Tested Reliability

### Need to support legacy environments?

While ESM is the future, the reality is that many production environments, tools, and libraries still rely on CommonJS. Enterprise applications, older Node.js versions, certain CI/CD systems, and legacy toolchains require `require()` and `module.exports`.

**Sometimes compatibility trumps cutting edge.**

### The CommonJS compatibility challenge

| Challenge                | ESM-First Approach                    | With preset-cjs                |
| ------------------------ | ------------------------------------- | ------------------------------ |
| **Legacy Node.js**       | Breaks on Node.js < 14                | ✅ Works on Node.js 8+         |
| **Tool Compatibility**   | Some tools don't support ESM          | ✅ Universal tool support      |
| **Library Dependencies** | ESM-only deps break CommonJS projects | ✅ Works with any dependency   |
| **Enterprise Systems**   | Complex module loading configurations | ✅ Drop-in compatibility       |
| **Migration Effort**     | All-or-nothing ESM conversion         | ✅ Gradual TypeScript adoption |
| **Bundle Complexity**    | Requires build-time transformations   | ✅ Native runtime support      |

### What you get instead

**@presetter/preset-cjs is a configuration template that provides CommonJS-optimized TypeScript development.**

When used with [Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter) (the configuration management tool), this preset extends [preset-essentials](https://github.com/alvis/presetter/blob/main/packages/preset-essentials) with CommonJS-specific optimizations, ensuring your TypeScript compiles to reliable, universally-compatible CommonJS modules.

- 🛡️ **Maximum Compatibility**: Works everywhere CommonJS is supported
- 🎯 **Legacy-Friendly**: Optimized for older Node.js and enterprise environments
- 🔧 **Zero Config**: TypeScript CommonJS compilation works perfectly out of the box
- ⚡ **Simplified Build**: No complex transformations or post-processing needed
- 🚀 **Modern DX**: All the TypeScript tooling you love, CommonJS output you need
- 🌐 **Universal Support**: Compatible with any tool or environment

---

## 🎯 Reliable CommonJS Without Compromise

### The TypeScript CommonJS setup problem

Setting up TypeScript for CommonJS seems simple until you hit the edge cases:

- **Module resolution**: Should you use `node` or `bundler`?
- **Target compatibility**: ES2024? ES2017? What works everywhere?
- **Build pipeline**: How do you handle paths, aliases, and declarations?
- **Tool integration**: Will ESLint, Vitest, and other tools work correctly?

**Getting it right requires deep knowledge of TypeScript compiler options and CommonJS quirks.**

### From CommonJS confusion to solid foundation

```diff
# Before: Manual CommonJS setup
my-project/
├── tsconfig.json               ← Guessing at compiler options
├── package.json                ← No "type" field or wrong settings
├── webpack.config.js           ← Extra bundling for simple projects?
├── src/
│   └── index.ts
└── lib/
-   └── index.js                ← Wrong module format or missing features

# After: Generated from CommonJS template
my-project/
+├── presetter.config.ts        ← References this CommonJS preset template
├── package.json                ← Perfect CommonJS configuration
+├── tsconfig.json              ← Generated with optimal CommonJS settings
+├── All dev tools              ← Generated with CommonJS compatibility
├── src/
│   └── index.ts
└── lib/
+   └── index.js                ← Perfect CommonJS with require/exports
```

### How CommonJS template optimization works

1. **TypeScript Configuration** — `module: "commonjs"`, `target: "ES2017"`, `node` resolution
2. **Build Pipeline** — Optimized for CommonJS output without unnecessary transformations
3. **Package Structure** — Correct CommonJS package.json configuration
4. **Tool Integration** — All development tools configured for CommonJS workflow

### Why this solves the real problem

- **Guaranteed compatibility**: Works in any environment that supports CommonJS
- **Optimized build process**: Faster builds without ESM post-processing
- **Legacy migration path**: Easy way to modernize older JavaScript projects
- **Enterprise ready**: Reliable for production environments with strict requirements
- **Tool universality**: Works with any tool that supports CommonJS modules

---

## 🔍 Understanding Presetter vs This Preset

**Important distinction:**

| Component                                                                        | Role                            | What it does                                                         |
| -------------------------------------------------------------------------------- | ------------------------------- | -------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter)** | Configuration management tool   | CLI that processes presets, generates config files, executes scripts |
| **@presetter/preset-cjs**                                                        | CommonJS configuration template | Extends essentials with CommonJS-specific optimizations              |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **This preset** = The blueprint for a rock-solid, time-tested foundation

This preset extends [preset-essentials](https://github.com/alvis/presetter/blob/main/packages/preset-essentials) with CommonJS-specific configurations. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/main/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic CommonJS Project Setup

#### Step 1: Install Preset

```jsonc
// package.json
{
  "type": "commonjs",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "build": "run build",
    "test": "run test",
  },
  "devDependencies": {
    "presetter": "latest",
    "@presetter/preset-cjs": "latest",
  },
}
```

```typescript
// presetter.config.ts
export { default } from '@presetter/preset-cjs';
```

#### Step 2: Bootstrap & Develop

```bash
npm install
# Perfect CommonJS configuration generated automatically
# Write TypeScript, get reliable CommonJS output!
```

That's it! TypeScript compiles to CommonJS modules that work everywhere. No compatibility worries.

---

### 🧑‍🔬 Advanced Usage: Custom CommonJS Optimizations

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import cjs from '@presetter/preset-cjs';

export default preset('my-cjs-project', {
  extends: [cjs],
  override: {
    variables: {
      target: 'ES2015', // Even broader compatibility
    },
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          strict: false, // Gradual migration from JavaScript
        },
      },
    },
  },
});
```

> **Need more customization options?** Check the [main Presetter documentation](https://github.com/alvis/presetter/blob/main/packages/presetter) for complete guides on overrides, extensions, and advanced configurations.

---

## 📖 API Reference

### Core CommonJS Configuration Template

This preset extends [preset-essentials](https://github.com/alvis/presetter/blob/main/packages/preset-essentials) with CommonJS-specific optimizations:

| Configuration         | Purpose              | CommonJS Optimizations                                      |
| --------------------- | -------------------- | ----------------------------------------------------------- |
| **TypeScript**        | CommonJS compilation | `module: "commonjs"`, `target: "ES2017"`, `node` resolution |
| **Build Pipeline**    | Simplified process   | No ESM post-processing, direct CommonJS output              |
| **Package Structure** | CommonJS exports     | Proper CommonJS package.json configuration                  |
| **Compatibility**     | Legacy support       | Optimized for older Node.js and enterprise environments     |

### Configuration Variables

Inherited from [preset-essentials](https://github.com/alvis/presetter/blob/main/packages/preset-essentials) with CommonJS-optimized defaults:

| Variable | Default    | Description                                |
| -------- | ---------- | ------------------------------------------ |
| `source` | `"src"`    | Source code directory                      |
| `output` | `"lib"`    | Build output directory                     |
| `test`   | `"spec"`   | Test files directory                       |
| `target` | `"ES2017"` | Conservative TypeScript compilation target |

---

## 🔧 Configuration Details

### TypeScript CommonJS Configuration

```typescript
// Generated tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "moduleResolution": "node",
    "target": "ES2017",
    "strict": true,
    "declaration": true,
    "sourceMap": true
  }
}
```

### Simplified Build Pipeline

```yaml
# Generated build scripts - no ESM post-processing needed
build:typescript: run-s build:typescript:tsc build:typescript:alias
```

### CommonJS Package.json Structure

```jsonc
// CommonJS-optimized package.json
{
  "type": "commonjs",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
}
```

---

## 🏎️ Performance

| Metric             | ESM + Polyfills          | With preset-cjs     |
| ------------------ | ------------------------ | ------------------- |
| Build speed        | Slower (transformations) | **Faster (direct)** |
| Runtime loading    | Variable                 | **Immediate**       |
| Tool compatibility | Sometimes breaks         | **Universal**       |
| Debugging          | Complex source maps      | **Straightforward** |

---

## 🌐 Compatibility

| Environment | Support                        |
| ----------- | ------------------------------ |
| Node.js     | ≥ 8 (excellent legacy support) |
| Browsers    | Any (with bundling)            |
| Tools       | Universal CommonJS support     |
| TypeScript  | ≥ 5.0                          |

### Extends

- [`@presetter/preset-essentials`](https://github.com/alvis/presetter/blob/main/packages/preset-essentials) - Core TypeScript development toolkit

### Extended By

- [`@presetter/preset-strict`](https://github.com/alvis/presetter/blob/main/packages/preset-strict) - CommonJS + stricter linting rules

---

## 🆚 Comparison

| Feature                | preset-cjs       | preset-esm      | preset-hybrid   |
| ---------------------- | ---------------- | --------------- | --------------- |
| **Legacy Support**     | ✅ Excellent     | ❌ Limited      | ⚠️ Complex      |
| **Tool Compatibility** | ✅ Universal     | ⚠️ Modern only  | ⚠️ Variable     |
| **Build Speed**        | ✅ Fast          | ⚠️ Slower       | ❌ Complex      |
| **Future Proof**       | ⚠️ Stable        | ✅ Standard     | ⚠️ Transitional |
| **Enterprise Ready**   | ✅ Battle-tested | ❌ Cutting edge | ⚠️ Mixed        |

### When to Use

✅ **Use preset-cjs when:**

- Supporting older Node.js versions (< 16)
- Working in enterprise environments with legacy constraints
- Migrating JavaScript projects to TypeScript gradually
- Building tools that need universal compatibility
- Dealing with CommonJS-only dependencies or tools

❌ **Consider alternatives when:**

- Building new projects with modern targets only
- Want optimal tree shaking and bundle sizes
- Team is committed to ESM-first development

---

## 🛠️ Troubleshooting

> **General Presetter issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/main/README.md#troubleshooting) for common Presetter problems and solutions.

### CommonJS-Specific Issues

| Issue                     | Symptoms                     | Solution                                               |
| ------------------------- | ---------------------------- | ------------------------------------------------------ |
| **Module loading errors** | `Cannot find module`         | Check `moduleResolution: "node"` in generated tsconfig |
| **Wrong output format**   | ESM syntax in output         | Preset configures CommonJS automatically               |
| **Legacy compatibility**  | Code breaks on older Node.js | Target ES2017 is optimized for broad compatibility     |

> **Need help with Presetter CLI commands?** Check the [CLI reference](https://github.com/alvis/presetter/blob/main/README.md#cli-reference) in the main documentation.

---

## ❓ FAQ

> **General Presetter questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/main/README.md#faq) for general usage, configuration, and customization questions.

### CommonJS-Specific FAQs

#### What's the difference from preset-essentials?

preset-cjs **extends** preset-essentials with CommonJS-specific optimizations:

- TypeScript compilation targets CommonJS modules
- More conservative ES2017 target for better compatibility
- Node.js module resolution instead of bundler resolution
- Simplified build pipeline without ESM post-processing

#### Can I import ESM packages?

Yes, but with limitations. CommonJS can import ESM packages using dynamic imports:

```typescript
// Static imports (converted to require by TypeScript)
const express = require('express'); // Works for CommonJS packages

// Dynamic imports for ESM packages
const esmModule = await import('esm-only-package');
```

#### How do I handle TypeScript path mapping?

The preset configures TypeScript path mapping to work correctly with CommonJS:

```typescript
// tsconfig.json paths work correctly
import { utils } from '#utils'; // Resolves to ./src/utils.js
```

#### Why choose CommonJS over ESM?

Choose CommonJS when:

- **Legacy support**: Need to work with older Node.js versions
- **Tool compatibility**: Working with tools that don't support ESM
- **Enterprise constraints**: Corporate environments with CommonJS requirements
- **Migration path**: Gradually moving from JavaScript to TypeScript

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
