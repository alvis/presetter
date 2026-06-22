# 🚀 @presetter/preset-rollup

<p align="center">
  <img src="https://raw.githubusercontent.com/alvis/presetter/master/assets/logo.svg" alt="Presetter logo" height="128">
</p>

<div align="center">

[![npm](https://img.shields.io/npm/v/@presetter/preset-rollup?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=main&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/main?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/@presetter/preset-rollup?style=flat-square)](https://libraries.io/npm/@presetter/preset-rollup)

Library bundling perfected — Rollup 4, dual modules, comprehensive asset support

•   [Usage](#-usage)   •   [Configuration](#-configuration-details)   •   [Comparison](#-comparison)   •   [FAQ](#-faq)   •

</div>

---

**This is a configuration extension that works with [Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install Rollup preset alongside a base preset
npm i -D presetter @presetter/preset-essentials @presetter/preset-rollup

# Create presetter.config.ts
cat > presetter.config.ts << 'EOF'
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';
import rollup from '@presetter/preset-rollup';

export default preset('my-library', {
  extends: [essentials, rollup],
});
EOF

# Bootstrap your project
npx presetter bootstrap
```

Your project now has **professional library bundling** — Rollup 4, dual CJS/ESM output, comprehensive asset handling, zero configuration!

---

## ✨ Professional Library Bundling

### Need production-ready library builds?

Building modern JavaScript libraries requires complex bundling setups: dual module formats, asset processing, TypeScript compilation, development workflows, and optimization. Rollup configuration can be overwhelming.

**What if you could get professional library bundling instantly?**

### The library bundling challenge

| Library Development Need   | Manual Rollup Setup             | With preset-rollup                      |
| -------------------------- | ------------------------------- | --------------------------------------- |
| **Dual Module Output**     | ⚠️ Complex format configuration | ✅ CJS + ESM automatically              |
| **Asset Processing**       | ❌ Manual plugin setup          | ✅ Images, CSS, JSON, YAML, GraphQL     |
| **TypeScript Integration** | ⚠️ Manual configuration         | ✅ Perfect TypeScript compilation       |
| **Development Workflow**   | ❌ No watch mode                | ✅ Hot reloading with Rollup watch      |
| **Bundle Analysis**        | ❌ No visualization             | ✅ Built-in bundle visualizer           |
| **Path Mapping**           | ⚠️ Manual tsconfig paths        | ✅ Automatic TypeScript path resolution |

### What you get instead

**@presetter/preset-rollup is a configuration extension that adds professional Rollup bundling to any base preset.**

When used with [Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter) (the configuration management tool), this preset extends your chosen base preset with comprehensive Rollup 4 bundling, creating production-ready library builds with dual module formats, asset processing, and modern development workflows.

- 🗞️ **Rollup 4**: Latest bundling technology with optimal tree-shaking
- 2️⃣ **Dual Module Output**: Automatic CJS (`.js`) and ESM (`.mjs`) generation
- 🎨 **Comprehensive Assets**: Images, CSS, JSON, YAML, GraphQL processing
- 📦 **Library-Optimized**: Perfect for npm packages and component libraries
- 🔍 **Bundle Analysis**: Built-in visualization and optimization insights
- 🚀 **Zero Config**: Professional Rollup setup works immediately

---

## 🎯 Library Bundling Without the Complexity

### The Rollup library setup problem

Creating production-ready library bundles requires orchestrating multiple Rollup plugins:

- **Module formats**: Configuring CJS and ESM outputs with proper entry points
- **Asset processing**: Setting up plugins for images, styles, data files
- **TypeScript integration**: Compilation, path mapping, declaration generation
- **Development workflow**: Watch mode, hot reloading, build optimization
- **Bundle optimization**: Tree-shaking, code splitting, size analysis

**Getting it right requires deep knowledge of Rollup configuration, plugin ecosystem, and library distribution best practices.**

### From complex Rollup setup to instant library bundling

```diff
# Before: Manual Rollup library setup
my-library/
├── rollup.config.js            ← Complex manual configuration
├── package.json                ← Manual dual module setup
├── tsconfig.json               ← Basic TypeScript setup
├── src/
│   ├── index.ts                ← Entry point
│   ├── components/
│   │   └── Button.tsx          ← No asset processing
│   └── assets/
-      └── icon.svg             ← Cannot bundle assets

# After: Extended with professional Rollup bundling
my-library/
+├── presetter.config.ts        ← Base preset + Rollup extension
├── rollup.config.ts            ← Generated professional configuration
├── package.json                ← Perfect dual module exports
├── tsconfig.json               ← Enhanced with path mapping
├── src/
│   ├── index.ts                ← Entry point with asset imports
│   ├── components/
│   │   └── Button.tsx          ← Assets processed automatically
│   └── assets/
+      └── icon.svg             ← Bundled as importable asset
└── lib/
+   ├── index.js                ← CommonJS output
+   ├── index.mjs               ← ES Module output
+   └── index.d.ts              ← TypeScript declarations
```

### How professional library bundling works

1. **Dual Module Generation** — Rollup configured to output both CommonJS and ESM formats
2. **Comprehensive Asset Processing** — All asset types handled with appropriate plugins
3. **TypeScript Integration** — Perfect compilation with path mapping and declaration generation
4. **Development Workflow** — Watch mode, hot reloading, and bundle analysis

### Why this solves the real problem

- **Production-ready bundles**: Optimized for npm distribution and library consumption
- **Universal compatibility**: Works in any JavaScript environment
- **Complete asset support**: Handle any file type your library needs
- **Professional workflow**: Development experience matching industry standards
- **Zero maintenance**: Configuration updates automatically with preset updates

---

## 🔍 Understanding Presetter vs This Extension

**Important distinction:**

| Component                                                                        | Role                          | What it does                                                                    |
| -------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter)** | Configuration management tool | CLI that processes presets, generates config files, executes scripts            |
| **Base Preset**                                                                  | Core development template     | Provides TypeScript, testing, linting capabilities (essentials, esm, cjs, etc.) |
| **@presetter/preset-rollup**                                                     | Library bundling extension    | Adds Rollup 4, dual modules, asset processing, bundle optimization              |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **Base preset** = The blueprint for a functional house
- **This extension** = The packaging and shipping department for your products

This preset **extends** any base preset with professional library bundling. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/main/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic Library Bundling Setup

#### Step 1: Install Extension with Base Preset

```jsonc
// package.json
{
  "main": "lib/index.js",
  "module": "lib/index.mjs",
  "types": "lib/index.d.ts",
  "exports": {
    "require": "./lib/index.js",
    "import": "./lib/index.mjs",
  },
  "scripts": {
    "build": "run build",
    "develop": "run develop",
    "test": "run test",
  },
  "devDependencies": {
    "presetter": "latest",
    "@presetter/preset-essentials": "latest",
    "@presetter/preset-rollup": "latest",
  },
}
```

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';
import rollup from '@presetter/preset-rollup';

export default preset('my-library', {
  extends: [essentials, rollup], // Base preset + Rollup bundling
});
```

#### Step 2: Bootstrap & Develop

```bash
npm install
# Professional Rollup configuration generated automatically
# Build libraries with dual modules and comprehensive asset support!
```

That's it! Your library builds with production-ready bundles.

---

### 🧑‍🔬 Advanced Usage: Custom Rollup Optimizations

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';
import rollup from '@presetter/preset-rollup';

export default preset('advanced-library', {
  extends: [essentials, rollup],
  override: {
    variables: {
      source: 'packages/core', // Custom source directory
      output: 'dist', // Custom output directory
    },
    assets: {
      'rollup.config.ts': {
        // Custom Rollup configuration overrides
        output: [
          {
            format: 'cjs',
            file: 'dist/index.cjs',
            sourcemap: true,
          },
          {
            format: 'esm',
            file: 'dist/index.mjs',
            sourcemap: true,
          },
        ],
      },
    },
  },
});
```

> **Need more customization options?** Check the [main Presetter documentation](https://github.com/alvis/presetter/blob/main/packages/presetter) for complete guides on overrides, extensions, and advanced configurations.

---

## 📖 API Reference

### Core Rollup Bundling Extension

This preset extends any base preset with professional Rollup 4 bundling:

| Enhancement                | Purpose                    | Rollup Features                         |
| -------------------------- | -------------------------- | --------------------------------------- |
| **Dual Module Output**     | Universal compatibility    | CommonJS + ES Module formats            |
| **Asset Processing**       | Comprehensive file support | Images, CSS, JSON, YAML, GraphQL        |
| **TypeScript Integration** | Perfect compilation        | Path mapping, declarations, source maps |
| **Development Workflow**   | Modern library development | Watch mode, hot reload, bundle analysis |

### Comprehensive Plugin Stack

#### Core Bundling Plugins

- **@rollup/plugin-typescript**: TypeScript compilation with source maps
- **@rollup/plugin-node-resolve**: Node module resolution
- **@rollup/plugin-commonjs**: CommonJS to ES6 conversion (supports .js, .jsx, .ts, .tsx)
- **rollup-plugin-tsconfig-paths**: TypeScript path mapping support

#### Asset Processing Plugins

- **@rollup/plugin-json**: JSON file imports
- **@rollup/plugin-yaml**: YAML file imports
- **@rollup/plugin-graphql**: GraphQL file imports
- **@rollup/plugin-image**: Image asset handling
- **rollup-plugin-import-css**: CSS processing with PostCSS

#### Development & Analysis

- **rollup-plugin-visualizer**: Bundle analysis and size visualization

### Dual Module Configuration

#### CommonJS Output

```typescript
// Generated lib/index.js
module.exports = {
  // Your library exports in CommonJS format
};
```

#### ES Module Output

```typescript
// Generated lib/index.mjs
export // Your library exports in ES Module format
 {};
```

#### Package.json Integration

```jsonc
{
  "main": "lib/index.js", // CommonJS entry
  "module": "lib/index.mjs", // ES Module entry
  "types": "lib/index.d.ts", // TypeScript declarations
  "exports": {
    "require": "./lib/index.js", // CommonJS conditional export
    "import": "./lib/index.mjs", // ES Module conditional export
  },
}
```

### Configuration Variables

Inherited from base preset with Rollup-specific defaults:

| Variable              | Default   | Description                           |
| --------------------- | --------- | ------------------------------------- |
| `source`              | `"src"`   | Source code directory (Rollup input)  |
| `output`              | `"lib"`   | Build output directory                |
| Base preset variables | Inherited | All variables from chosen base preset |

---

## 🔧 Configuration Details

### Generated Rollup Configuration

```typescript
// rollup.config.ts - Generated automatically
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import tsconfigPaths from 'rollup-plugin-tsconfig-paths';
import json from '@rollup/plugin-json';
import yaml from '@rollup/plugin-yaml';
import graphql from '@rollup/plugin-graphql';
import image from '@rollup/plugin-image';
import css from 'rollup-plugin-import-css';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      file: 'lib/index.js',
      sourcemap: true,
    },
    {
      format: 'esm',
      file: 'lib/index.mjs',
      sourcemap: true,
    },
  ],
  plugins: [
    tsconfigPaths(),
    typescript(),
    resolve(),
    commonjs({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    json(),
    yaml(),
    graphql(),
    image(),
    postcss({ inject: { insertAt: 'top' } }),
    visualizer(),
  ],
});
```

### Build Scripts Integration

```yaml
# Generated package.json scripts
build: cross-env NODE_ENV=production run-s clean build:rollup
build:rollup: rollup --config rollup.config.ts --configPlugin typescript
develop: cross-env NODE_ENV=development run-s "build:rollup -- --watch {@}" --
```

### Asset Import Support

#### Supported File Types

```typescript
// Images
import logo from './assets/logo.png';
import icon from './assets/icon.svg';

// Data files
import config from './config.json';
import data from './data.yaml';
import schema from './schema.graphql';

// Styles
import './styles/component.css';
```

#### CSS Processing

- **PostCSS Integration**: Full PostCSS pipeline with plugin support
- **Style Injection**: CSS automatically injected at document top
- **Source Maps**: CSS source maps for debugging

---

## 🏎️ Performance

| Metric               | Manual Rollup Setup    | With preset-rollup         |
| -------------------- | ---------------------- | -------------------------- |
| Configuration time   | Hours/days             | **Minutes**                |
| Bundle optimization  | Manual tweaking        | **Automatic optimization** |
| Asset handling       | Plugin-by-plugin setup | **Comprehensive support**  |
| Development workflow | Basic build only       | **Watch mode + analysis**  |
| Module compatibility | Single format          | **Universal dual format**  |

---

## 🌐 Compatibility

| Environment    | Support                                 |
| -------------- | --------------------------------------- |
| Base Presets   | Works with essentials, esm, cjs, hybrid |
| Rollup         | 4.x (latest)                            |
| Node.js        | ≥ 18                                    |
| TypeScript     | ≥ 5.0                                   |
| Output Formats | CommonJS, ES Modules                    |

### Works With All Base Presets

- [`@presetter/preset-essentials`](../preset-essentials) + Rollup bundling
- [`@presetter/preset-esm`](../preset-esm) + Rollup bundling
- [`@presetter/preset-cjs`](../preset-cjs) + Rollup bundling
- [`@presetter/preset-hybrid`](../preset-hybrid) + Rollup bundling

### Can Be Combined With

- [`@presetter/preset-strict`](../preset-strict) - Library bundling + strict quality
- Other specialized presets for specific library types

---

## 🆚 Comparison

| Feature                  | TypeScript Only | With preset-rollup             |
| ------------------------ | --------------- | ------------------------------ |
| **Module Formats**       | Single output   | ✅ Dual CJS + ESM              |
| **Asset Bundling**       | None            | ✅ Comprehensive asset support |
| **Bundle Optimization**  | Basic           | ✅ Professional tree-shaking   |
| **Development Workflow** | Compile only    | ✅ Watch + hot reload          |
| **Library Distribution** | Manual          | ✅ npm-ready packages          |
| **Bundle Analysis**      | None            | ✅ Size visualization          |

### When to Use

✅ **Use preset-rollup when:**

- Building JavaScript/TypeScript libraries for npm
- Need dual module format support (CJS + ESM)
- Creating component libraries or UI packages
- Building libraries with assets (images, styles, data)
- Want professional bundle optimization
- Need library-specific development workflow

❌ **Consider alternatives when:**

- Building applications (not libraries)
- Single format output is sufficient
- Using application-specific bundlers (webpack, Vite)
- Simple scripts without bundling needs

---

## 🛠️ Troubleshooting

> **General Presetter issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/main/README.md#troubleshooting) for common Presetter problems and solutions.

### Rollup Bundling Specific Issues

| Issue                      | Symptoms                         | Solution                                                  |
| -------------------------- | -------------------------------- | --------------------------------------------------------- |
| **Bundle not generating**  | No output files created          | Check that base preset provides TypeScript tooling        |
| **Asset imports failing**  | Cannot import images/data files  | Verify plugin configuration in generated rollup.config.ts |
| **Module format errors**   | Import/require issues            | Check package.json exports configuration                  |
| **Watch mode not working** | No hot reload during development | Ensure using `run develop` command with watch flag        |

> **Need help with Presetter CLI commands?** Check the [CLI reference](https://github.com/alvis/presetter/blob/main/README.md#cli-reference) in the main documentation.

---

## ❓ FAQ

> **General Presetter questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/main/README.md#faq) for general usage, configuration, and customization questions.

### Rollup Bundling Specific FAQs

#### Do I need a base preset?

Yes! preset-rollup is an **extension preset** that adds bundling to base functionality:

```typescript
// ❌ Wrong - rollup alone doesn't provide TypeScript tooling
extends: [rollup]

// ✅ Correct - base preset + rollup bundling
extends: [essentials, rollup]
```

#### What's the difference from using Rollup directly?

preset-rollup provides professional setup instantly:

- **Zero Configuration**: Works immediately with sensible defaults
- **Comprehensive Plugins**: All common plugins pre-configured
- **Dual Output**: Automatic CJS + ESM generation
- **Asset Processing**: Images, CSS, data files handled automatically
- **Integration**: Seamlessly works with other presets

#### How do I customize the Rollup configuration?

Override through presetter.config.ts:

```typescript
override: {
  assets: {
    'rollup.config.ts': {
      // Custom Rollup configuration
      external: ['react', 'react-dom'], // External dependencies
      output: {
        globals: { react: 'React' },    // Global variable names
      },
    },
  },
}
```

#### Can I use this for applications?

While possible, preset-rollup is optimized for **libraries**:

- **Libraries**: ✅ Perfect for npm packages, component libraries
- **Applications**: ⚠️ Consider application-specific bundlers (webpack, Vite)

#### What asset types are supported?

Comprehensive asset support out of the box:

- **Images**: PNG, JPG, SVG, WebP, etc.
- **Data**: JSON, YAML files
- **Code**: GraphQL schemas
- **Styles**: CSS with PostCSS processing

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
