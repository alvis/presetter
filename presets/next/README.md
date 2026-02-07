# 🚀 @presetter/preset-next

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

<div align="center">

[![npm](https://img.shields.io/npm/v/@presetter/preset-next?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/master?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/@presetter/preset-next?style=flat-square)](https://libraries.io/npm/@presetter/preset-next)

Combines preset-esm, preset-strict, and preset-react with Next.js-optimized configurations

•   [Usage](#-usage)   •   [Configuration](#-configuration-details)   •   [Comparison](#-comparison)   •   [FAQ](#-faq)   •

</div>

---

**This is a configuration template that works with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install Next.js preset
npm i -D presetter @presetter/preset-next

# Create presetter.config.ts
echo "export { default } from '@presetter/preset-next';" > presetter.config.ts

# Bootstrap your project
npx presetter bootstrap
```

Your Next.js project now has all the benefits from preset-esm, preset-strict, and preset-react, plus Next.js-optimized configurations!

---

## ✨ What This Preset Does

### Convenience wrapper for Next.js development

Setting up a Next.js project with proper tooling requires configuring multiple presets and tools. This preset simplifies that process by combining several presets into one convenient package.

**The main benefit: One preset instead of three, with Next.js tweaks included.**

### What you get

| What You Need              | Without This Preset                 | With preset-next               |
| -------------------------- | ----------------------------------- | ------------------------------ |
| **ES Modules Support**     | Manually include preset-esm         | ✅ Included automatically      |
| **Strict Quality Rules**   | Manually include preset-strict      | ✅ Included automatically      |
| **React Development**      | Manually include preset-react       | ✅ Included automatically      |
| **Next.js ESLint Rules**   | Configure @next/eslint-plugin-next  | ✅ Pre-configured              |
| **TypeScript for Next.js** | Adjust TypeScript settings          | ✅ Optimized settings included |
| **Combined Benefits**      | Manage multiple preset dependencies | ✅ Single preset dependency    |

### Core functionality

**@presetter/preset-next is a convenience configuration wrapper that combines multiple presets with Next.js-specific tweaks.**

When used with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter) (the configuration management tool), this preset combines [preset-esm](../preset-esm), [preset-strict](../preset-strict), and [preset-react](../preset-react) and adds Next.js-specific configuration adjustments.

**What it actually provides:**

- 📦 **Combined Presets**: All benefits from preset-esm + preset-strict + preset-react
- 📝 **Next.js ESLint Rules**: Adds @next/eslint-plugin-next configuration
- 🔧 **TypeScript Tweaks**: Minor adjustments for Next.js compatibility
- 📚 **Simplified Setup**: One dependency instead of managing three presets

---

## 🔍 Understanding Presetter vs This Preset

**Important distinction:**

| Component                                                                          | Role                          | What it does                                                         |
| ---------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter)** | Configuration management tool | CLI that processes presets, generates config files, executes scripts |
| **[preset-esm](../preset-esm)**                                                    | Base ES modules template      | Provides modern JavaScript/TypeScript with ES modules                |
| **[preset-strict](../preset-strict)**                                              | Quality enforcement extension | Adds strict linting, type checking, quality rules                    |
| **[preset-react](../preset-react)**                                                | React development extension   | Adds React 18+, JSX/TSX, TailwindCSS, Storybook                      |
| **@presetter/preset-next**                                                          | Next.js complete template     | Combines all above + Next.js-specific optimizations                  |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **ESM preset** = The modern foundation
- **Strict preset** = The building codes and inspections
- **React preset** = The family-friendly features
- **This preset** = The complete smart home with everything integrated

This preset **combines** multiple presets to create the ultimate Next.js development experience. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic Next.js Setup

#### Step 1: Install Preset

```typescript
// presetter.config.ts
export { default } from '@presetter/preset-next';
```

#### Step 2: Install Next.js Dependencies

```bash
npm i next react react-dom
npm i -D presetter @presetter/preset-next
```

#### Step 3: Bootstrap & Develop

```bash
npx presetter bootstrap
```

That's it! Your Next.js project is now configured with:

- Everything from preset-esm (ES modules, modern JavaScript/TypeScript)
- Everything from preset-strict (quality rules, strict linting)
- Everything from preset-react (React 18+, TailwindCSS 4, Storybook)
- Plus: @next/eslint-plugin-next rules for Next.js-specific linting
- Plus: Minor TypeScript configuration tweaks for Next.js

---

### 🧑‍🔬 Advanced Usage: Custom Next.js Configuration

```typescript
// presetter.config.ts
import preset from '@presetter/preset-next';

export default preset.extend({
  variables: {
    source: 'app', // use Next.js app directory
    types: 'types', // custom types directory
  },
  override: {
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          // additional Next.js optimizations
          paths: {
            '@/*': ['./src/components*'],
          },
        },
      },
      'eslint.config.ts': {
        rules: {
          // custom Next.js rules
          '@next/next/no-img-element': 'error',
          '@next/next/no-sync-scripts': 'error',
        },
      },
    },
  },
});
```

> **Need more customization?** Check the [main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter) for complete customization guides.

---

## 📖 API Reference

### Core Functionality

This preset combines multiple presets and adds Next.js-specific configurations:

| What's Added          | Source        | Purpose                                     |
| --------------------- | ------------- | ------------------------------------------- |
| **ES Modules**        | preset-esm    | Modern JavaScript/TypeScript support        |
| **Quality Rules**     | preset-strict | Strict linting and quality enforcement      |
| **React Stack**       | preset-react  | React 18+, TailwindCSS 4, Storybook         |
| **Next.js ESLint**    | This preset   | @next/eslint-plugin-next rules              |
| **TypeScript Tweaks** | This preset   | Minor adjustments for Next.js compatibility |

### TypeScript Configuration

#### Next.js Optimizations

```typescript
// Generated tsconfig.json includes:
{
  "compilerOptions": {
    "jsx": "preserve",              // next.js handles JSX
    "moduleResolution": "bundler",  // next.js module resolution
    "allowJs": true,                // javaScript support
    "plugins": [{ "name": "next" }] // next.js language service
  }
}
```

### ESLint Integration

```typescript
// full Next.js ESLint support
import * as next from '@next/eslint-plugin-next';
import storybook from 'eslint-plugin-storybook';

export default [
  ...baseConfig,
  next.flatConfig.recommended,
  ...storybook.configs['flat/recommended'],
];
```

### Generated Files

| File                  | Purpose                               |
| --------------------- | ------------------------------------- |
| `eslint.config.ts`    | ESLint with Next.js + Storybook rules |
| `tsconfig.json`       | TypeScript optimized for Next.js      |
| `tsconfig.build.json` | Build configuration                   |
| `postcss.config.json` | PostCSS with TailwindCSS              |
| `next-env.d.ts`       | Next.js type definitions              |
| `.gitignore`          | Git ignore patterns                   |
| `.npmignore`          | NPM ignore patterns                   |

---

## 🔧 Configuration Details

### Complete Preset Stack

**preset-next** = ESM + Strict + React + Next.js configuration tweaks

You get everything from:

- **[preset-esm](../preset-esm)**: ES modules, modern JavaScript
- **[preset-strict](../preset-strict)**: Production-grade quality rules
- **[preset-react](../preset-react)**: React 18+, TailwindCSS 4, web tooling

### Plus Next.js Specific Adjustments

- ✅ **Next.js ESLint Plugin**: Adds @next/eslint-plugin-next rules
- ✅ **TypeScript Configuration**: Minor tweaks for Next.js compatibility
- ✅ **Combined Dependencies**: Single preset instead of three

### Included Dependencies

Automatically configured tools:

- `@next/eslint-plugin-next` - Next.js specific linting
- `@storybook/nextjs-vite` - Storybook Next.js integration
- `sharp` - Image optimization
- `postcss-preset-env` - Modern CSS features
- All tools from ESM, Strict, and React presets

---

## 🏎️ Benefits

| What You Get          | Manual Setup          | With preset-next       |
| --------------------- | --------------------- | ---------------------- |
| **Setup Time**        | Configure 3 presets   | ✅ 1 preset            |
| **Dependency Count**  | 3 preset dependencies | ✅ 1 preset dependency |
| **Next.js ESLint**    | Manual configuration  | ✅ Pre-configured      |
| **TypeScript Config** | Manual adjustments    | ✅ Pre-adjusted        |
| **Combined Benefits** | Manage separately     | ✅ All-in-one          |

---

## 🌐 Compatibility

| Environment | Support                |
| ----------- | ---------------------- |
| Next.js     | ≥ 15 (with App Router) |
| React       | ≥ 15                   |
| Node.js     | ≥ 20                   |
| TypeScript  | ≥ 5.0                  |

### Includes All From

- [`@presetter/preset-esm`](../preset-esm) - ES modules support
- [`@presetter/preset-strict`](../preset-strict) - Quality enforcement
- [`@presetter/preset-react`](../preset-react) - React + web development

---

## 🆚 Comparison

| Feature               | Using Individual Presets | With preset-next                  |
| --------------------- | ------------------------ | --------------------------------- |
| **Dependencies**      | 3 preset packages        | ✅ 1 preset package               |
| **Configuration**     | Manage 3 presets         | ✅ Single configuration           |
| **Next.js ESLint**    | Manual add & configure   | ✅ @next/eslint-plugin-next ready |
| **TypeScript Tweaks** | Manual adjustments       | ✅ Pre-adjusted for Next.js       |
| **Preset Benefits**   | All included separately  | ✅ All combined in one            |

### When to Use

✅ **Use preset-next when:**

- Building Next.js applications
- Want the benefits of preset-esm + preset-strict + preset-react
- Don't want to manage three separate preset dependencies
- Want Next.js-specific ESLint rules pre-configured
- Prefer a single preset for simplicity

❌ **Consider alternatives when:**

- Building non-Next.js React apps (use preset-react directly)
- Want more granular control over individual presets
- Only need one of the included presets (e.g., just ESM or just React)
- Have specific preset version requirements

---

## 🛠️ Troubleshooting

> **General issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/master/README.md#troubleshooting).

### Next.js Specific Issues

| Issue                            | Symptoms                 | Solution                                    |
| -------------------------------- | ------------------------ | ------------------------------------------- |
| **TypeScript paths not working** | Module resolution errors | Next.js handles paths, check tsconfig       |
| **Server Component types**       | Async component errors   | Ensure Next.js TypeScript plugin is active  |
| **ESLint Next.js rules**         | Rules not applying       | Check @next/eslint-plugin-next is installed |
| **Storybook loading**            | Components not rendering | Verify @storybook/nextjs-vite configuration |

---

## ❓ FAQ

> **General questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/master/packages/presetter#faq).

#### Why combine ESM + Strict + React?

This preset provides convenience by bundling commonly used presets together:

- **ESM**: Modern JavaScript/TypeScript foundation
- **Strict**: Quality rules and strict linting
- **React**: React development tools and configurations
- **Plus**: Next.js-specific ESLint rules and TypeScript tweaks

#### Do I need to install Next.js separately?

Yes, Next.js is a peer dependency:

```bash
npm i next react react-dom
npm i -D presetter @presetter/preset-next
```

#### What's the main benefit?

**Simplicity.** Instead of:

```typescript
// presetter.config.ts
import presetESM from '@presetter/preset-esm';
import presetStrict from '@presetter/preset-strict';
import presetReact from '@presetter/preset-react';
// Plus manual Next.js configurations...
```

You just need:

```typescript
// presetter.config.ts
export { default } from '@presetter/preset-next';
```

#### Does it do anything special for Next.js?

Yes, it adds:

- @next/eslint-plugin-next ESLint rules
- Minor TypeScript configuration adjustments for Next.js
- All the benefits from the three included presets

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
