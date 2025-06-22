# 🚀 presetter-preset-hybrid

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

<div align="center">

[![npm](https://img.shields.io/npm/v/presetter-preset-hybrid?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/master?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter-preset-hybrid?style=flat-square)](https://libraries.io/npm/presetter-preset-hybrid)

Dual-module TypeScript libraries — maximum compatibility, automatic dual builds

•   [Usage](#-usage)   •   [Configuration](#-configuration-details)   •   [Comparison](#-comparison)   •   [FAQ](#-faq)   •

</div>

---

**This is a configuration template that works with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install hybrid preset
npm i -D presetter presetter-preset-hybrid

# Create presetter.config.ts
echo "export { default } from 'presetter-preset-hybrid';" > presetter.config.ts

# Bootstrap your project
npx presetter bootstrap
```

Your project now generates **both CommonJS and ESM** outputs from single TypeScript source — **maximum Node.js ecosystem compatibility!**

---

## ✨ Hybrid Modules: Best of Both Worlds

### Need to support everyone?

Modern Node.js ecosystem is divided: legacy tools need CommonJS, modern environments prefer ESM, and library authors face an impossible choice. Choose CommonJS and miss modern optimizations. Choose ESM and break compatibility.

**What if you could have both?**

### The dual-module distribution challenge

| Challenge                | Single Format              | With preset-hybrid            |
| ------------------------ | -------------------------- | ----------------------------- |
| **Legacy Node.js**       | ❌ ESM breaks old versions | ✅ CommonJS works everywhere  |
| **Modern Bundlers**      | ❌ CJS misses tree-shaking | ✅ ESM enables optimizations  |
| **Library Adoption**     | ⚠️ Forces users to choose  | ✅ Works in any environment   |
| **Package Complexity**   | ⚠️ Simple but limiting     | ✅ Automated dual builds      |
| **Maintenance Burden**   | ⚠️ Manual dual configs     | ✅ Single source, dual output |
| **Import Compatibility** | ❌ Breaking changes        | ✅ Seamless for all users     |

### What you get instead

**presetter-preset-hybrid is a configuration template that provides dual CommonJS/ESM TypeScript library builds.**

When used with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter) (the configuration management tool), this preset extends [preset-essentials](https://github.com/alvis/presetter/blob/master/packages/preset-essentials) with sophisticated dual-module generation, automatically creating both `.js` (CommonJS) and `.mjs` (ESM) outputs from your single TypeScript codebase.

- 🔄 **Dual Builds**: Generates both CommonJS and ESM from single source
- 🛠️ **Automatic Transforms**: Handles import extensions, `__dirname` conversion, path aliases
- 📦 **Package Integration**: Perfect dual-module package.json structure
- ⚡ **Modern DX**: Write TypeScript once, support all Node.js environments
- 🎯 **Library-First**: Optimized for npm packages and open-source libraries
- 🚀 **Zero Config**: Complex dual builds work perfectly out of the box

---

## 🎯 Dual Modules Without the Pain

### The hybrid package setup problem

Creating dual CommonJS/ESM packages manually is extraordinarily complex:

- **Multiple TypeScript configs**: Need separate CommonJS and ESM compilation targets
- **Import transformations**: ESM requires `.js` extensions, `__dirname` doesn't exist
- **Package.json complexity**: Conditional exports, dual entry points, proper module fields
- **Build orchestration**: Sequential builds, post-processing, source map handling
- **Path alias resolution**: TypeScript paths must work in both output formats

**Getting it right requires mastering TypeScript compiler edge cases, Node.js module systems, and complex build tooling.**

### From hybrid confusion to dual-module mastery

```diff
# Before: Manual dual-module setup
my-library/
├── tsconfig.json               ← Single config, wrong for dual builds
├── tsconfig.cjs.json           ← Missing or incorrect CommonJS config
├── tsconfig.esm.json           ← Missing or incorrect ESM config
├── webpack.config.js           ← Complex bundling setup
├── src/
│   └── index.ts                ← Import paths break in one format
└── lib/
-   ├── index.js                 ← Only CommonJS OR only ESM
-   └── index.d.ts               ← Single declaration file

# After: Generated from hybrid template
my-library/
+├── presetter.config.ts        ← References this hybrid preset template
├── package.json                ← Perfect dual-module structure with exports
+├── tsconfig.json              ← Generated base configuration
+├── tsconfig.cjs.json          ← Generated CommonJS build config
+├── tsconfig.mjs.json          ← Generated ESM build config
+├── All dev tools              ← Generated with dual-module awareness
├── src/
│   └── index.ts                ← Import paths work in both formats
└── lib/
+   ├── index.js                ← CommonJS output (require/exports)
+   ├── index.mjs               ← ESM output (import/export)
+   └── index.d.ts              ← TypeScript declarations for both
```

### How dual-module template generation works

1. **Dual TypeScript Compilation** — Separate `tsconfig.cjs.json` and `tsconfig.mjs.json` with format-specific settings
2. **Automated Transformations** — `tsc-esm-fix` handles import extensions, `__dirname` conversion, `.mjs` renaming
3. **Sequential Build Pipeline** — ESM build → CommonJS build → alias resolution → transformations
4. **Package Structure** — Perfect dual-module package.json with conditional exports

### Why this solves the real problem

- **Maximum compatibility**: Works in any Node.js environment or bundler
- **Automatic transformations**: No manual import fixing or environment-specific code
- **Library distribution**: Perfect for npm packages that need broad adoption
- **Single codebase**: Write TypeScript once, get both CommonJS and ESM
- **Production ready**: Handles all the edge cases and gotchas of dual modules

---

## 🔍 Understanding Presetter vs This Preset

**Important distinction:**

| Component                                                                          | Role                               | What it does                                                         |
| ---------------------------------------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter)** | Configuration management tool      | CLI that processes presets, generates config files, executes scripts |
| **presetter-preset-hybrid**                                                        | Dual-module configuration template | Extends essentials with sophisticated dual CommonJS/ESM builds       |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **This preset** = The blueprint for a sophisticated, dual-compatible foundation

This preset extends [preset-essentials](https://github.com/alvis/presetter/blob/master/packages/preset-essentials) with dual-module build capabilities. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic Dual-Module Library Setup

#### Step 1: Install Preset

```jsonc
// package.json
{
  "main": "lib/index.js",
  "module": "lib/index.mjs",
  "types": "lib/index.d.ts",
  "exports": {
    ".": {
      "require": "./lib/index.js",
      "import": "./lib/index.mjs",
    },
  },
  "scripts": {
    "build": "run build",
    "test": "run test",
  },
  "devDependencies": {
    "presetter": "latest",
    "presetter-preset-hybrid": "latest",
  },
}
```

```typescript
// presetter.config.ts
export { default } from 'presetter-preset-hybrid';
```

#### Step 2: Bootstrap & Develop

```bash
npm install
# Perfect dual-module configuration generated automatically
# Write TypeScript, get both CommonJS AND ESM output!
```

That's it! TypeScript compiles to both formats. Your library works everywhere.

---

### 🧑‍🔬 Advanced Usage: Custom Dual-Module Optimizations

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import hybrid from 'presetter-preset-hybrid';

export default preset('my-hybrid-library', {
  extends: [hybrid],
  override: {
    variables: {
      target: 'ES2020', // Custom compilation target
    },
    assets: {
      'tsconfig.cjs.json': {
        compilerOptions: {
          target: 'ES2017', // Conservative CommonJS target
        },
      },
      'tsconfig.mjs.json': {
        compilerOptions: {
          target: 'ES2022', // Modern ESM target
        },
      },
    },
  },
});
```

> **Need more customization options?** Check the [main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter) for complete guides on overrides, extensions, and advanced configurations.

---

## 📖 API Reference

### Core Hybrid Configuration Template

This preset extends [preset-essentials](https://github.com/alvis/presetter/blob/master/packages/preset-essentials) with dual-module build capabilities:

| Configuration          | Purpose              | Hybrid Features                                            |
| ---------------------- | -------------------- | ---------------------------------------------------------- |
| **TypeScript Configs** | Dual compilation     | Separate CommonJS and ESM tsconfig files                   |
| **Build Pipeline**     | Sequential builds    | ESM → CommonJS → transformations → aliases                 |
| **Package Structure**  | Dual exports         | Conditional exports for require/import                     |
| **Transformations**    | Format compatibility | Import extensions, `__dirname` conversion, `.mjs` renaming |

### Generated TypeScript Configurations

#### tsconfig.cjs.json (CommonJS Build)

```typescript
{
  "extends": "./tsconfig.build",
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2017",
    "moduleResolution": "node"
  }
}
```

#### tsconfig.mjs.json (ESM Build)

```typescript
{
  "extends": "./tsconfig.build",
  "compilerOptions": {
    "module": "ES2022",
    "target": "ES2022"
  }
}
```

### Configuration Variables

Inherited from [preset-essentials](https://github.com/alvis/presetter/blob/master/packages/preset-essentials) with hybrid-optimized defaults:

| Variable | Default    | Description                        |
| -------- | ---------- | ---------------------------------- |
| `source` | `"src"`    | Source code directory              |
| `output` | `"lib"`    | Build output directory             |
| `test`   | `"spec"`   | Test files directory               |
| `target` | `"ES2022"` | Base TypeScript compilation target |

---

## 🔧 Configuration Details

### Dual Build Pipeline

```yaml
# Generated build scripts
build:typescript: run-s build:typescript:mjs build:typescript:cjs build:typescript:alias
build:typescript:mjs: run-s build:typescript:mjs:tsc build:typescript:mjs:fix
build:typescript:mjs:tsc: tsc -p tsconfig.mjs.json
build:typescript:mjs:fix: tsc-esm-fix --sourceMap --target {output} --ext .mjs
build:typescript:cjs: run-s build:typescript:cjs:*
build:typescript:cjs:tsc: tsc -p tsconfig.cjs.json
```

### Automatic Transformations

1. **Import Extension Addition**: `import './foo'` → `import './foo.js'`
2. **ESM Global Replacement**: `__dirname` → `import.meta` equivalents
3. **File Extension Renaming**: `.js` → `.mjs` for ESM outputs
4. **Path Alias Resolution**: TypeScript paths work in both formats

### Perfect Package.json Structure

```jsonc
{
  "main": "lib/index.js", // CommonJS entry
  "module": "lib/index.mjs", // ESM entry
  "types": "lib/index.d.ts", // TypeScript definitions
  "exports": {
    ".": {
      "require": "./lib/index.js", // CommonJS conditional export
      "import": "./lib/index.mjs", // ESM conditional export
    },
  },
}
```

---

## 🏎️ Performance

| Metric               | Single Format        | With preset-hybrid           |
| -------------------- | -------------------- | ---------------------------- |
| Build time           | Fast (single target) | **Moderate (dual builds)**   |
| Bundle compatibility | Limited              | **Universal**                |
| Tree shaking         | Format-dependent     | **Both CJS + ESM optimized** |
| Package adoption     | Restricted           | **Maximum**                  |
| User experience      | May break            | **Seamless**                 |

---

## 🌐 Compatibility

| Environment | Support                                  |
| ----------- | ---------------------------------------- |
| Node.js     | CommonJS: ≥8, ESM: ≥14                   |
| Bundlers    | Universal (webpack, Rollup, Vite, etc.)  |
| Tools       | Works with both CommonJS and ESM tooling |
| TypeScript  | ≥ 5.0                                    |

### Extends

- [`presetter-preset-essentials`](https://github.com/alvis/presetter/blob/master/packages/preset-essentials) - Core TypeScript development toolkit

### Used By Libraries Needing

- Broad Node.js ecosystem compatibility
- Modern bundler optimization support
- Seamless user experience across environments

---

## 🆚 Comparison

| Feature                  | preset-hybrid    | preset-cjs | preset-esm   |
| ------------------------ | ---------------- | ---------- | ------------ |
| **CommonJS Support**     | ✅ Native        | ✅ Native  | ❌ Limited   |
| **ESM Support**          | ✅ Native        | ❌ Limited | ✅ Native    |
| **Tree Shaking**         | ✅ ESM optimized | ❌ No      | ✅ Optimized |
| **Legacy Compatibility** | ✅ Full          | ✅ Full    | ❌ Limited   |
| **Build Complexity**     | ⚠️ Complex       | ✅ Simple  | ✅ Simple    |
| **Library Distribution** | ✅ Perfect       | ⚠️ Limited | ⚠️ Limited   |

### When to Use

✅ **Use preset-hybrid when:**

- Building npm packages or open-source libraries
- Need maximum Node.js ecosystem compatibility
- Users require both CommonJS and ESM support
- Want modern bundler optimizations without breaking legacy support
- Library adoption is more important than build simplicity

❌ **Consider alternatives when:**

- Building applications (not libraries)
- Team can commit to single module format
- Build simplicity is more important than compatibility
- Target environment is known and consistent

---

## 🛠️ Troubleshooting

> **General Presetter issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/master/README.md#troubleshooting) for common Presetter problems and solutions.

### Dual-Module Specific Issues

| Issue                       | Symptoms                       | Solution                                              |
| --------------------------- | ------------------------------ | ----------------------------------------------------- |
| **Import extension errors** | `Cannot resolve module` in ESM | `tsc-esm-fix` automatically adds `.js` extensions     |
| **\_\_dirname undefined**   | `ReferenceError` in ESM        | Automatically replaced with `import.meta` equivalents |
| **Wrong module format**     | CJS syntax in .mjs files       | Check build pipeline runs both compilations           |
| **Package.json exports**    | Module resolution failures     | Ensure proper conditional exports structure           |

> **Need help with Presetter CLI commands?** Check the [CLI reference](https://github.com/alvis/presetter/blob/master/README.md#cli-reference) in the main documentation.

---

## ❓ FAQ

> **General Presetter questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/master/README.md#faq) for general usage, configuration, and customization questions.

### Dual-Module Specific FAQs

#### What's the difference from preset-essentials?

preset-hybrid **extends** preset-essentials with sophisticated dual-module capabilities:

- Generates both CommonJS (.js) and ESM (.mjs) outputs
- Separate TypeScript configurations for each format
- Automatic import transformations and path resolution
- Perfect dual-module package.json structure

#### How are import extensions handled?

Automatically by `tsc-esm-fix`:

```typescript
// Your TypeScript code
import { utils } from './utils';

// CommonJS output (no change needed)
const { utils } = require('./utils');

// ESM output (extensions added automatically)
import { utils } from './utils.js';
```

#### What about **dirname and**filename?

Automatically converted for ESM compatibility:

```typescript
// Your TypeScript code
const configPath = path.join(__dirname, 'config.json');

// CommonJS output (unchanged)
const configPath = path.join(__dirname, 'config.json');

// ESM output (automatically converted)
const configPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'config.json',
);
```

#### Do I need to maintain two codebases?

No! Write TypeScript once, get both formats:

- Single TypeScript source in `src/`
- Automatic dual compilation to `lib/index.js` and `lib/index.mjs`
- Shared TypeScript declarations in `lib/index.d.ts`

#### How do users consume my hybrid package?

Seamlessly with conditional exports:

```javascript
// CommonJS users
const myLib = require('my-hybrid-lib');

// ESM users
import myLib from 'my-hybrid-lib';

// Both work automatically based on user's environment
```

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
