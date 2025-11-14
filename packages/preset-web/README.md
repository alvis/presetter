# 🚀 presetter-preset-web

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

<div align="center">

[![npm](https://img.shields.io/npm/v/presetter-preset-web?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/master?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter-preset-web?style=flat-square)](https://libraries.io/npm/presetter-preset-web)

Modern web development — TailwindCSS, Storybook, browser-optimized TypeScript

•   [Usage](#-usage)   •   [Configuration](#-configuration-details)   •   [Comparison](#-comparison)   •   [FAQ](#-faq)   •

</div>

---

**This is a configuration extension that works with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install web preset alongside a base preset
npm i -D presetter presetter-preset-essentials presetter-preset-web

# Create presetter.config.ts
cat > presetter.config.ts << 'EOF'
import { preset } from 'presetter';
import essentials from 'presetter-preset-essentials';
import web from 'presetter-preset-web';

export default preset('my-web-app', {
  extends: [essentials, web],
});
EOF

# Bootstrap your project
npx presetter bootstrap
```

Your project now has **modern web development tooling** — TailwindCSS 4, Storybook 9, browser-optimized TypeScript, and intelligent CSS workflows!

---

## ✨ Modern Web Development Stack

### Need comprehensive web tooling?

Modern web development requires an intricate stack: CSS frameworks, component libraries, browser compatibility, styling workflows, and visual development tools. Setting these up manually is time-consuming and error-prone.

**What if you could get the complete modern web stack instantly?**

### The modern web development challenge

| Web Development Need      | Manual Setup                | With preset-web                      |
| ------------------------- | --------------------------- | ------------------------------------ |
| **CSS Framework**         | ⚠️ Manual TailwindCSS setup | ✅ TailwindCSS 4 auto-configured     |
| **Component Development** | ❌ No visual development    | ✅ Storybook 9 with addons           |
| **Browser Compatibility** | ⚠️ Manual TypeScript config | ✅ DOM/Browser types included        |
| **Styling Workflow**      | ❌ Basic CSS processing     | ✅ PostCSS + Autoprefixer + Prettier |
| **CSS Linting**           | ❌ No CSS-specific rules    | ✅ TailwindCSS conflict detection    |
| **Development Tools**     | ⚠️ Fragmented tooling       | ✅ Integrated accessibility testing  |

### What you get instead

**presetter-preset-web is a configuration extension that adds comprehensive modern web development tooling to any base preset.**

When used with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter) (the configuration management tool), this preset extends your chosen base preset with the complete modern web development stack, including TailwindCSS 4, Storybook 9, browser-optimized TypeScript, and intelligent styling workflows.

- 💨 **TailwindCSS 4**: Latest utility-first CSS framework with intelligent auto-discovery
- 📚 **Storybook 9**: Component-driven development with accessibility testing
- 🎨 **PostCSS Pipeline**: Advanced CSS processing with autoprefixer
- 🌐 **Browser-Optimized**: TypeScript configured for DOM and modern browser APIs
- 🔍 **Smart Linting**: TailwindCSS conflict detection and auto-formatting
- 🚀 **Zero Config**: Intelligent discovery of project structure and entry points

---

## 🎯 Modern Web Without the Configuration

### The modern web tooling setup problem

Modern web development requires coordinating multiple complex tools:

- **TailwindCSS setup**: Configuration, purging, entry points, plugin integration
- **Storybook configuration**: Stories, addons, accessibility testing, Vitest integration
- **Browser TypeScript**: DOM types, modern JavaScript features, web-specific APIs
- **CSS workflow**: PostCSS, autoprefixer, formatting, conflict detection
- **Development environment**: Hot reloading, visual development, testing integration

**Getting it right requires deep knowledge of each tool's configuration and how they interact.**

### From fragmented tooling to integrated web stack

```diff
# Before: Manual web development setup
my-web-app/
├── tsconfig.json               ← Missing DOM types, browser APIs
├── tailwind.config.js          ← Manual configuration, no auto-discovery
├── postcss.config.js           ← Basic setup, missing optimizations
├── .storybook/                 ← Complex manual setup
│   ├── main.js                 ← Missing modern addons
│   └── preview.js              ← No accessibility testing
├── src/
│   ├── styles/
│   │   └── globals.css         ← No auto-discovery
│   └── components/
-      └── Button.tsx           ← No component development environment

# After: Extended with modern web stack
my-web-app/
+├── presetter.config.ts        ← Base preset + web extension
├── tsconfig.json               ← Enhanced with DOM, browser types
├── eslint.config.ts            ← Enhanced with TailwindCSS linting
├── .prettierrc                 ← Enhanced with TailwindCSS formatting
+├── All web dev tools          ← Generated with intelligent discovery
├── src/
│   ├── styles/
│   │   └── globals.css         ← Auto-discovered for TailwindCSS
│   └── components/
+      └── Button.tsx           ← Storybook-ready component development
```

### How modern web stack integration works

1. **Intelligent Discovery** — Auto-detects TailwindCSS entry points, config files, project structure
2. **Browser Optimization** — TypeScript configured with DOM, DOM.Iterable, and ESNext libraries
3. **Styling Workflow** — PostCSS + TailwindCSS + Prettier integration with conflict detection
4. **Component Development** — Storybook 9 with accessibility, testing, and pseudo-state addons

### Why this solves the real problem

- **Complete modern stack**: Everything needed for professional web development
- **Intelligent auto-configuration**: Discovers project structure automatically
- **Component-driven development**: Visual development environment with testing
- **Professional styling**: Advanced CSS workflows with conflict detection
- **Browser compatibility**: Properly configured for modern web APIs

---

## 🔍 Understanding Presetter vs This Extension

**Important distinction:**

| Component                                                                          | Role                          | What it does                                                                     |
| ---------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter)** | Configuration management tool | CLI that processes presets, generates config files, executes scripts             |
| **Base Preset**                                                                    | Core development template     | Provides TypeScript, testing, building capabilities (essentials, esm, cjs, etc.) |
| **presetter-preset-web**                                                           | Web development extension     | Adds TailwindCSS, Storybook, browser optimization, CSS workflows                 |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **Base preset** = The blueprint for a functional house
- **This extension** = The modern kitchen, smart home systems, and designer finishes

This preset **extends** any base preset with modern web development capabilities. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic Modern Web Setup

#### Step 1: Install Extension with Base Preset

```jsonc
// package.json
{
  "scripts": {
    "build": "run build",
    "test": "run test",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
  },
  "devDependencies": {
    "presetter": "latest",
    "presetter-preset-essentials": "latest",
    "presetter-preset-web": "latest",
  },
}
```

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import essentials from 'presetter-preset-essentials';
import web from 'presetter-preset-web';

export default preset('my-web-app', {
  extends: [essentials, web], // Base preset + web extension
});
```

#### Step 2: Bootstrap & Develop

```bash
npm install
# Modern web development stack generated automatically
# TailwindCSS, Storybook, and browser optimization ready!
```

That's it! Start developing with the complete modern web stack.

---

### 🧑‍🔬 Advanced Usage: Custom Web Optimizations

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import essentials from 'presetter-preset-essentials';
import web from 'presetter-preset-web';

export default preset('advanced-web-app', {
  extends: [essentials, web],
  override: {
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          lib: ['DOM', 'DOM.Iterable', 'ES2023'], // Latest features
          target: 'ES2022', // Modern browser target
        },
      },
      'eslint.config.ts': {
        rules: {
          // Custom TailwindCSS rules
          'tailwindcss/no-custom-classname': 'warn',
        },
      },
    },
  },
});
```

> **Need more customization options?** Check the [main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter) for complete guides on overrides, extensions, and advanced configurations.

---

## 📖 API Reference

### Core Web Development Extension

This preset extends any base preset with modern web development capabilities:

| Enhancement            | Purpose               | Web Features                                             |
| ---------------------- | --------------------- | -------------------------------------------------------- |
| **TailwindCSS 4**      | Utility-first CSS     | Auto-discovery, conflict detection, formatting           |
| **Storybook 9**        | Component development | Accessibility testing, Vitest integration, pseudo-states |
| **Browser TypeScript** | Web APIs              | DOM types, modern JavaScript features                    |
| **CSS Workflow**       | Styling pipeline      | PostCSS, autoprefixer, intelligent formatting            |

### TailwindCSS Integration

#### Auto-Discovery Features

```typescript
// Automatically discovers entry files in:
const searchDirectories = [
  'source',
  'src',
  'app',
  'styles',
  'assets',
  'public',
  'static',
];

const entryFiles = [
  'globals.css',
  'global.css',
  'index.css',
  'main.css',
  'styles.css',
];

// Scans for @import "tailwindcss" directives
```

#### Enhanced Linting

```typescript
// eslint-plugin-better-tailwindcss
'tailwindcss/classnames-order': 'warn',          // Consistent ordering
'tailwindcss/enforces-negative-arbitrary-values': 'warn', // Proper syntax
'tailwindcss/no-contradicting-classname': 'error',       // Conflict detection
```

### Storybook Configuration

#### Core Addons Included

- **@storybook/addon-a11y**: Accessibility testing and guidelines
- **@storybook/addon-vitest**: Seamless Vitest integration for component testing
- **storybook-addon-pseudo-states**: CSS pseudo-state visualization (hover, focus, etc.)
- **storybook-addon-test-codegen**: Automatic test code generation from stories

#### Browser Environment

```typescript
// Enhanced TypeScript configuration
compilerOptions: {
  lib: ['DOM', 'DOM.Iterable', 'ESNext'], // Complete browser API support
}
```

### Configuration Variables

Inherited from base preset with web-specific enhancements:

| Variable              | Default         | Description                             |
| --------------------- | --------------- | --------------------------------------- |
| Base preset variables | Inherited       | All variables from chosen base preset   |
| TailwindCSS entry     | Auto-discovered | Automatically found CSS entry points    |
| Config files          | Auto-discovered | Automatically found configuration files |

---

## 🔧 Configuration Details

### Intelligent TailwindCSS Discovery

#### Entry Point Detection

```typescript
// Searches common directories for CSS files
const directories = ['src', 'app', 'styles', 'assets'];
const filenames = ['globals.css', 'index.css', 'main.css'];

// Scans file contents for TailwindCSS imports
const tailwindImports = /@import\s+["']tailwindcss/;
```

#### Config File Detection

```typescript
// Automatically finds configuration files
const configPatterns = [
  'tailwind.config.ts',
  'tailwind.config.js',
  'tailwind.config.mjs',
  'tailwind.config.cjs',
];
```

### Enhanced ESLint Configuration

#### Web-Specific Plugins

- **eslint-plugin-better-tailwindcss**: Advanced TailwindCSS linting
- **eslint-plugin-storybook**: Storybook-specific rules
- **globals**: Browser environment variables

#### Browser Globals

```typescript
globals: {
  window: 'readonly',
  document: 'readonly',
  navigator: 'readonly',
  // ... all browser globals
}
```

### TypeScript Browser Optimization

```yaml
# tsconfig.json override
compilerOptions:
  lib:
    - DOM # Browser DOM APIs
    - DOM.Iterable # Iterable DOM elements
    - ESNext # Latest JavaScript features
```

---

## 🏎️ Performance

| Metric                 | Standard Preset      | With preset-web                   |
| ---------------------- | -------------------- | --------------------------------- |
| Component development  | Manual setup         | **Storybook visual environment**  |
| CSS workflow           | Basic                | **Advanced PostCSS pipeline**     |
| Browser compatibility  | Manual configuration | **Auto-optimized TypeScript**     |
| Styling conflicts      | Manual detection     | **Automated TailwindCSS linting** |
| Development experience | Fragmented tools     | **Integrated modern stack**       |

---

## 🌐 Compatibility

| Environment  | Support                                 |
| ------------ | --------------------------------------- |
| Base Presets | Works with essentials, esm, cjs, hybrid |
| Browsers     | Modern browsers (ES2022+)               |
| Node.js      | ≥ 18                                    |
| TypeScript   | ≥ 5.0                                   |

### Works With All Base Presets

- [`presetter-preset-essentials`](../preset-essentials) + web development
- [`presetter-preset-esm`](../preset-esm) + web development
- [`presetter-preset-cjs`](../preset-cjs) + web development
- [`presetter-preset-hybrid`](../preset-hybrid) + web development

### Can Be Combined With

- [`presetter-preset-react`](../preset-react) - React + modern web stack
- [`presetter-preset-strict`](../preset-strict) - Web development + strict quality

### Extended By

- [`presetter-preset-react`](../preset-react) - Adds React-specific features to web stack

---

## 🆚 Comparison

| Feature                   | Standard Presets | With preset-web               |
| ------------------------- | ---------------- | ----------------------------- |
| **CSS Framework**         | None             | ✅ TailwindCSS 4              |
| **Component Development** | Basic            | ✅ Storybook 9 environment    |
| **Browser Optimization**  | Manual           | ✅ Auto-configured TypeScript |
| **CSS Workflow**          | Basic            | ✅ PostCSS + Autoprefixer     |
| **Visual Development**    | CLI only         | ✅ Component playground       |
| **Accessibility Testing** | Manual           | ✅ Automated Storybook addon  |

### When to Use

✅ **Use preset-web when:**

- Building web applications or component libraries
- Need modern CSS workflows (TailwindCSS)
- Want visual component development (Storybook)
- Developing for browser environments
- Need accessibility testing integration
- Want professional styling workflows

❌ **Consider alternatives when:**

- Building Node.js applications or CLIs
- No visual UI components needed
- Basic styling requirements only
- Minimal web development needs

---

## 🛠️ Troubleshooting

> **General Presetter issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/master/README.md#troubleshooting) for common Presetter problems and solutions.

### Web Development Specific Issues

| Issue                               | Symptoms                          | Solution                                                       |
| ----------------------------------- | --------------------------------- | -------------------------------------------------------------- |
| **TailwindCSS not auto-discovered** | No CSS framework integration      | Ensure CSS files are in common directories (`src/`, `styles/`) |
| **Storybook not starting**          | Component development unavailable | Check that base preset provides build tooling                  |
| **Browser types missing**           | TypeScript errors with DOM APIs   | Ensure TypeScript override is applied correctly                |
| **CSS conflicts undetected**        | TailwindCSS class conflicts       | Check ESLint TailwindCSS plugin configuration                  |

> **Need help with Presetter CLI commands?** Check the [CLI reference](https://github.com/alvis/presetter/blob/master/README.md#cli-reference) in the main documentation.

---

## ❓ FAQ

> **General Presetter questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/master/README.md#faq) for general usage, configuration, and customization questions.

### Web Development Specific FAQs

#### Do I need a base preset?

Yes! preset-web is an **extension preset** that adds web tooling to base functionality:

```typescript
// ❌ Wrong - web alone doesn't provide TypeScript tooling
extends: [web]

// ✅ Correct - base preset + web extension
extends: [essentials, web]
```

#### How does TailwindCSS auto-discovery work?

The preset intelligently scans your project:

```typescript
// Searches these directories for CSS files
['src', 'app', 'styles', 'assets', 'public', 'static']

// Looks for these common CSS file names
['globals.css', 'global.css', 'index.css', 'main.css', 'styles.css']

// Scans file contents for TailwindCSS imports
/@import\s+["']tailwindcss/
```

#### What Storybook addons are included?

Professional component development addons:

- **Accessibility testing** (`@storybook/addon-a11y`)
- **Vitest integration** (`@storybook/addon-vitest`)
- **Pseudo-state testing** (`storybook-addon-pseudo-states`)
- **Test code generation** (`storybook-addon-test-codegen`)

#### Can I use this without TailwindCSS?

Yes! The preset provides value beyond TailwindCSS:

- Storybook for component development
- Browser-optimized TypeScript
- PostCSS workflow
- Enhanced ESLint for web development

#### Is this compatible with React?

Absolutely! Use with [`presetter-preset-react`](../preset-react):

```typescript
extends: [essentials, web, react] // Full React + web stack
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
