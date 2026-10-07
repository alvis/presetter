# 🚀 @presetter/preset-react

<p align="center">
  <img src="https://raw.githubusercontent.com/alvis/presetter/master/assets/logo.svg" alt="Presetter logo" height="128">
</p>

<div align="center">

[![npm](https://img.shields.io/npm/v/@presetter/preset-react?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=main&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/main?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/@presetter/preset-react?style=flat-square)](https://libraries.io/npm/@presetter/preset-react)

React development perfected — JSX/TSX, React linting, component-first workflows

•   [Usage](#-usage)   •   [Configuration](#-configuration-details)   •   [Comparison](#-comparison)   •   [FAQ](#-faq)   •

</div>

---

**This is a configuration extension that works with [Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install React preset alongside a base preset
npm i -D presetter @presetter/preset-esm @presetter/preset-react

# Create presetter.config.ts
cat > presetter.config.ts << 'EOF'
import { preset } from 'presetter';
import esm from '@presetter/preset-esm';
import react from '@presetter/preset-react';

export default preset('my-react-app', {
  extends: [esm, react],
});
EOF

# Bootstrap your project
npx presetter bootstrap
```

Your project now has **complete React development environment** — JSX/TSX support, React linting, asset imports, component-first workflows!

---

## ✨ React Development Excellence

### Need production-ready React tooling?

React development requires specialized tooling: JSX compilation, React-specific linting, component patterns, asset handling, and development workflows. Setting this up manually is complex and error-prone.

**What if you could get the complete React stack in seconds?**

### The React development challenge

| React Development Need    | Manual Setup                 | With preset-react                       |
| ------------------------- | ---------------------------- | --------------------------------------- |
| **JSX/TSX Compilation**   | ⚠️ Complex TypeScript config | ✅ Perfect JSX transform setup          |
| **React Linting**         | ❌ Basic rules only          | ✅ Comprehensive React best practices   |
| **Asset Type Safety**     | ❌ No TypeScript support     | ✅ Images, styles as typed imports      |
| **Component Patterns**    | ⚠️ No naming conventions     | ✅ PascalCase components, prop ordering |
| **Development Workflow**  | ⚠️ Fragmented tooling        | ✅ Integrated Storybook + testing       |
| **Modern React Features** | ❌ Legacy JSX transform      | ✅ Latest React 18+ features            |

### What you get instead

**@presetter/preset-react is a configuration extension that adds comprehensive React development capabilities to the modern web stack.**

When used with [Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter) (the configuration management tool), this preset extends [preset-web](../preset-web) with React-specific tooling, creating the complete React development environment with JSX/TSX support, React linting, asset type safety, and component-first workflows.

- ⚛️ **React 18+ Ready**: Modern JSX transform, latest React patterns
- 🎯 **TypeScript JSX**: Perfect TSX compilation and type safety
- 📝 **React Linting**: Comprehensive ESLint rules for React best practices
- 🖼️ **Asset Type Safety**: Import images, CSS modules with full TypeScript support
- 🧩 **Component-First**: PascalCase conventions and component checks
- 🚀 **Complete Stack**: Inherits TailwindCSS, Storybook, and modern web tooling

---

## 🎯 React Development Without the Complexity

### The React tooling setup problem

React development requires coordinating multiple specialized tools:

- **JSX/TSX compilation**: TypeScript configuration for React JSX transform
- **React linting**: ESLint rules for React patterns, hooks, JSX best practices
- **Asset handling**: TypeScript declarations for importing images, CSS modules
- **Component conventions**: Naming patterns and component checks
- **Development environment**: Hot reloading, component development, testing

**Getting it right requires deep knowledge of React tooling, TypeScript JSX, and modern React patterns.**

### From fragmented React setup to integrated development

```diff
# Before: Manual React development setup
my-react-app/
├── tsconfig.json               ← Basic TypeScript, missing JSX optimization
├── eslint.config.js            ← Basic linting, no React rules
├── src/
│   ├── components/
│   │   └── Button.tsx          ← No linting for React patterns
│   ├── assets/
│   │   └── logo.png            ← Cannot import in TypeScript
│   └── styles/
-      └── Button.module.css    ← Cannot import as CSS module

# After: Extended with React development stack
my-react-app/
+├── presetter.config.ts        ← Base preset + web + React extensions
├── tsconfig.json               ← Enhanced with React JSX transform
├── eslint.config.ts            ← Enhanced with React linting rules
+├── types/
+│   ├── image.d.ts             ← TypeScript declarations for images
+│   └── style.d.ts             ← TypeScript declarations for CSS modules
├── src/
│   ├── components/
│   │   └── Button.tsx          ← React linting and naming
│   ├── assets/
│   │   └── logo.png            ← Import as typed asset
│   └── styles/
+      └── Button.module.css    ← Import as typed CSS module object
```

### How React development integration works

1. **JSX/TSX Compilation** — TypeScript configured with `react-jsx` transform for modern React
2. **React Linting** — ESLint enhanced with React plugin and component best practices
3. **Asset Type Safety** — TypeScript declarations for importing images, CSS modules, styles
4. **Component Patterns** — Naming conventions and component checks

### Why this solves the real problem

- **Complete React environment**: Everything needed for professional React development
- **Modern React patterns**: Latest React 18+ features and best practices
- **Type-safe assets**: Import any asset with full TypeScript support
- **Component excellence**: Enforced patterns for maintainable React code
- **Integrated workflow**: Inherits Storybook, TailwindCSS, testing from web preset

---

## 🔍 Understanding Presetter vs This Extension

**Important distinction:**

| Component                                                                        | Role                          | What it does                                                                     |
| -------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/main/packages/presetter)** | Configuration management tool | CLI that processes presets, generates config files, executes scripts             |
| **Base Preset**                                                                  | Core development template     | Provides TypeScript, testing, building capabilities (essentials, esm, cjs, etc.) |
| **[preset-web](../preset-web)**                                                  | Web development extension     | Adds TailwindCSS, Storybook, browser optimization                                |
| **@presetter/preset-react**                                                      | React development extension   | Adds JSX/TSX, React linting, asset types, component patterns                     |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **Base preset** = The blueprint for a functional house
- **Web preset** = The modern kitchen and smart home systems
- **This extension** = The family room, entertainment center, and comfort features

This preset **extends** [preset-web](../preset-web) with React-specific capabilities. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/main/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic React Development Setup

#### Step 1: Install Extension with Base Preset

```jsonc
// package.json
{
  "scripts": {
    "build": "run build",
    "test": "run test",
    "storybook": "storybook dev -p 6006",
    "dev": "run develop",
  },
  "devDependencies": {
    "presetter": "latest",
    "@presetter/preset-esm": "latest",
    "@presetter/preset-react": "latest",
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
  },
}
```

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import esm from '@presetter/preset-esm';
import react from '@presetter/preset-react';

export default preset('my-react-app', {
  extends: [esm, react], // Base + React (includes web preset)
});
```

#### Step 2: Bootstrap & Develop

```bash
npm install
# Complete React development environment generated automatically
# JSX/TSX, React linting, asset imports, Storybook ready!
```

That's it! Start building React components with the complete modern stack.

---

### 🧑‍🔬 Advanced Usage: Custom React Optimizations

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import esm from '@presetter/preset-esm';
import react from '@presetter/preset-react';

export default preset('advanced-react-app', {
  extends: [esm, react],
  override: {
    variables: {
      source: 'app', // Custom source directory
      types: 'typings', // Custom types directory
    },
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          jsx: 'react-jsx', // Modern JSX transform
          jsxImportSource: 'react', // JSX import source
          strict: true, // Strict TypeScript
        },
      },
      'eslint.config.ts': (current) => ({
        ...current,
        default: [
          ...current.default,
          {
            rules: {
              '@eslint-react/dom/no-missing-button-type': 'error',
              '@eslint-react/prefer-destructuring-assignment': 'warn',
            },
          },
        ],
      }),
    },
  },
});
```

> **Need more customization options?** Check the [main Presetter documentation](https://github.com/alvis/presetter/blob/main/packages/presetter) for complete guides on overrides, extensions, and advanced configurations.

---

## 📖 API Reference

### Core React Development Extension

This preset extends [preset-web](../preset-web) with React-specific capabilities:

| Enhancement               | Purpose           | React Features                                        |
| ------------------------- | ----------------- | ----------------------------------------------------- |
| **JSX/TSX Compilation**   | React components  | Modern React JSX transform, TypeScript JSX            |
| **React Linting**         | Code quality      | Component patterns, hooks rules, JSX best practices   |
| **Asset Type Safety**     | Import handling   | Images, CSS modules, styles as typed imports          |
| **Component Conventions** | Code organization | PascalCase naming and component checks |

### JSX/TSX Configuration

#### TypeScript JSX Setup

```yaml
# tsconfig.json enhancements
compilerOptions:
  jsx: react-jsx # Modern React 18+ JSX transform
  target: ESNext # Latest JavaScript features
  module: ESNext # ES modules
  lib: [DOM, ESNext] # Browser + modern JavaScript
```

#### File Extension Support

- **TSX Files**: Full TypeScript + JSX support
- **JSX Files**: JavaScript + JSX support
- **Build Integration**: Both included in build and linting processes

### React ESLint Rules

The preset uses the complete `@eslint-react/eslint-plugin` 2.13.0 `recommended` flat configuration, followed by focused overrides. Its plugin registrations and `react-x` settings, including React-version detection, are retained. Automatic JSX runtime does not require a React import. Props need no runtime PropTypes, and existing PropTypes declarations remain allowed.

This is a breaking rule-ID migration. The following table covers every previously active React rule. Old names start with `react/`; replacements start with `@eslint-react/`.

| Old rule (severity/options)                                            | Replacement                                                                                                                                                 | Outcome                                                                                                    |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `display-name` (error)                                                 | `no-missing-component-display-name` (error)                                                                                                                 | Partial component display-name coverage                                                                    |
| `jsx-key` (error)                                                      | `no-missing-key` (error)                                                                                                                                    | List-key checking retained                                                                                 |
| `jsx-no-comment-textnodes` (error)                                     | Same suffix (error)                                                                                                                                         | Retained                                                                                                   |
| `jsx-no-duplicate-props` (error)                                       | Same suffix (error)                                                                                                                                         | Retained                                                                                                   |
| `jsx-no-undef` (error)                                                 | Same suffix (error)                                                                                                                                         | Retained                                                                                                   |
| `jsx-uses-vars` (error)                                                | Same suffix (error)                                                                                                                                         | JSX variable tracking retained on ESLint 9                                                                 |
| `no-children-prop` (error)                                             | Same suffix (error)                                                                                                                                         | Retained                                                                                                   |
| `no-danger-with-children` (error)                                      | `dom/no-dangerously-set-innerhtml-with-children` (error)                                                                                                    | Retained                                                                                                   |
| `no-direct-mutation-state` (error)                                     | Same suffix (error)                                                                                                                                         | Retained                                                                                                   |
| `no-find-dom-node` (error)                                             | `dom/no-find-dom-node` (error)                                                                                                                              | Retained                                                                                                   |
| `no-render-return-value` (error)                                       | `dom/no-render-return-value` (error)                                                                                                                        | Retained                                                                                                   |
| `no-string-refs` (error)                                               | Same suffix (error)                                                                                                                                         | Retained                                                                                                   |
| `no-unknown-property` (error)                                          | `dom/no-unknown-property` (error)                                                                                                                           | DOM property checks retained                                                                               |
| `jsx-no-target-blank` (error)                                          | `dom/no-unsafe-target-blank` (error)                                                                                                                        | Approximate link-safety mapping                                                                            |
| `no-deprecated` (error)                                                | `no-component-will-mount`, `no-component-will-receive-props`, `no-component-will-update`, `dom/no-find-dom-node`, `dom/no-render`, `dom/no-hydrate` (error) | Focused checks; not the complete historical API checklist                                                  |
| `button-has-type` (warn)                                               | `dom/no-missing-button-type` (warn)                                                                                                                         | Checks presence; does not reproduce invalid type-value checking                                            |
| `destructuring-assignment` (warn)                                      | `prefer-destructuring-assignment` (warn)                                                                                                                    | Approximate; named functions/arrows checked, default-export functions and class `this.props` access missed |
| `boolean-prop-naming` (warn)                                           | None                                                                                                                                                        | Intentionally dropped                                                                                      |
| `sort-comp` (warn)                                                     | None                                                                                                                                                        | Intentionally dropped                                                                                      |
| `jsx-sort-props` (warn; `callbacksLast: true`, `shorthandFirst: true`) | None                                                                                                                                                        | Alphabetical, callbacks-last, shorthand-first sorting is no longer enforced                                |
| `no-is-mounted` (error)                                                | None                                                                                                                                                        | Intentionally dropped                                                                                      |
| `no-unescaped-entities` (error)                                        | None                                                                                                                                                        | Intentionally dropped                                                                                      |
| `require-render-return` (error)                                        | None                                                                                                                                                        | Intentionally dropped                                                                                      |

Previously disabled `react/prop-types` maps to disabling the inverse `@eslint-react/no-prop-types` policy. `@eslint-react/jsx-uses-react` is explicitly off to preserve automatic JSX runtime. Existing TypeScript naming, JSDoc, function-length and test-file overrides are unchanged.

New recommended checks remain enabled. Significant additions include nested components and lazy declarations, React API preferences (`Children`, `cloneElement`, context, `forwardRef`, `createRef`, default props), RSC function definitions, leaked timers/listeners/observers, direct state setters in effects/lifecycles, and context/ref/state naming. For example, `@eslint-react/hooks-extra/no-direct-set-state-in-use-effect` warns on a direct setter inside an effect. This release does not provide the later v5 React Compiler inventory.

Migrate explicit rule overrides and all inline `eslint-disable`, `eslint-disable-next-line`, `eslint-disable-line`, `eslint-enable`, and inline rule configuration comments using this table. Remove entries for dropped rules. Consumers managing registrations themselves should use the complete recommended flat object once; its separate namespace plugin objects must not be replaced by repeated registrations of the unified plugin. Custom React settings belong under `react-x`; inspect the selected release's supported options rather than blindly renaming legacy settings. Keep customizations in `presetter.config.ts` so bootstrap can regenerate `eslint.config.ts`.

### Asset Type Declarations

#### Image Import Types

```typescript
// types/image.d.ts - Generated automatically
declare module '*.avif' {
  const src: string;
  export default src;
}
declare module '*.bmp' {
  const src: string;
  export default src;
}
declare module '*.gif' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}

// SVG special handling
declare module '*.svg' {
  const src: string;
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  export default src;
}
```

#### CSS Module Types

```typescript
// types/style.d.ts - Generated automatically
declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
```

### Configuration Variables

Inherited from base presets with React-specific defaults:

| Variable              | Default   | Description                           |
| --------------------- | --------- | ------------------------------------- |
| `source`              | `"src"`   | Source code directory                 |
| `types`               | `"types"` | TypeScript declarations directory     |
| `output`              | `"lib"`   | Build output directory                |
| Base preset variables | Inherited | All variables from chosen base preset |

---

## 🔧 Configuration Details

### Enhanced TypeScript Configuration

```yaml
# Generated tsconfig.json
compilerOptions:
  jsx: react-jsx # Modern React JSX transform
  target: ESNext # Latest JavaScript features
  lib: [DOM, DOM.Iterable, ESNext] # Browser APIs + modern JS
  allowSyntheticDefaultImports: true # React import compatibility
  esModuleInterop: true # Module interoperability

exclude:
  - '**/*.stories.ts' # Exclude Storybook files from build
  - '**/*.stories.tsx' # Exclude TSX Storybook files
```

### React ESLint Integration

#### Plugin Configuration

```typescript
import react from '@eslint-react/eslint-plugin';

export default [
  react.configs.recommended,
  {
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    rules: {
      '@eslint-react/jsx-uses-react': 'off',
      '@eslint-react/no-prop-types': 'off',
      '@eslint-react/dom/no-missing-button-type': 'warn',
    },
  },
];
```

This excerpt illustrates composition; the preset also applies the targeted mappings above.

#### Component-Specific Rules

```typescript
// React component linting
overrides: [
  {
    files: ['**/*.[jt]sx'],
    rules: {
      'max-lines-per-function': ['warn', { max: 120 }], // Larger React components
      'jsdoc/require-returns': 'off',                   // JSX doesn't need return docs
    },
  },
],
```

### Asset Import Integration

#### Build Process Integration

```typescript
// lint-staged.config.js enhancement
'*.{tsx,jsx}': ['presetter run stage'],  // Include React files in staging
```

#### Type Generation

- **Automatic**: Types generated during bootstrap
- **Directories**: Placed in configurable `types` directory
- **Updates**: Regenerated when preset configuration changes

---

## 🏎️ Performance

| Metric                | Standard Web Preset | With preset-react               |
| --------------------- | ------------------- | ------------------------------- |
| Component development | Basic HTML/CSS      | **React components + JSX**      |
| Type safety           | Basic TypeScript    | **Asset imports + React props** |
| Code quality          | Web linting         | **React best practices**        |
| Development workflow  | Manual setup        | **Component-first tooling**     |
| Asset handling        | Manual imports      | **Type-safe asset imports**     |

---

## 🌐 Compatibility

| Environment       | Support                                                                  |
| ----------------- | ------------------------------------------------------------------------ |
| React             | ≥ 18 (with React 16.14+ support)                                         |
| Base Presets      | Works with essentials, esm, cjs, hybrid                                  |
| Browsers          | Modern browsers (ES2024+)                                                |
| Node.js           | ≥ 20.19.0                                                                |
| ESLint            | ^9.36.0 (major 9)                                                        |
| React lint plugin | Exactly 2.13.0                                                           |
| TypeScript        | Plugin declares >=4.8.4 <6.0.0; TypeScript 6 is outside upstream support |

Version [2.13.0](https://github.com/Rel1cx/eslint-react/tree/v2.13.0) is the latest stable release whose tagged documentation explicitly supports ESLint 9 (minimum 9.36.0 and Node 20.19.0). Later major-version documentation requires ESLint 10, even where package peer ranges are permissive. The exact pin prevents crossing that compatibility boundary.

This repository uses TypeScript 6.0.3. pnpm installs it with a TypeScript peer warning; strict npm installation rejects the mismatch. Focused runtime tests and an outside-workspace packed pnpm consumer install, bootstrap and TSX lint pass on ESLint 9.39.4 and TypeScript 6.0.3. These demonstrate the tested cases rather than upstream TypeScript 6 support. Strict peer consumers must resolve this constraint.

### Extends

- [`@presetter/preset-web`](../preset-web) - Modern web development stack with TailwindCSS + Storybook

### Works With All Base Presets

- [`@presetter/preset-essentials`](../preset-essentials) + web + React
- [`@presetter/preset-esm`](../preset-esm) + web + React
- [`@presetter/preset-cjs`](../preset-cjs) + web + React
- [`@presetter/preset-hybrid`](../preset-hybrid) + web + React

### Can Be Combined With

- [`@presetter/preset-strict`](../preset-strict) - React development + strict quality enforcement

---

## 🆚 Comparison

| Feature                    | Web Preset  | With preset-react                 |
| -------------------------- | ----------- | --------------------------------- |
| **Component Framework**    | Generic web | ✅ React + JSX/TSX                |
| **Asset Imports**          | Basic       | ✅ Type-safe images + CSS modules |
| **Linting Rules**          | Web-focused | ✅ React best practices           |
| **Component Patterns**     | None        | ✅ PascalCase + component checks     |
| **Development Experience** | Web tools   | ✅ React-optimized workflow       |
| **Type Safety**            | Basic web   | ✅ React components + assets      |

### When to Use

✅ **Use preset-react when:**

- Building React applications or component libraries
- Need React-specific linting and patterns
- Want type-safe asset imports (images, CSS modules)
- Developing React components with Storybook
- Need modern React development workflow
- Want comprehensive React TypeScript setup

❌ **Consider alternatives when:**

- Building non-React web applications
- Using other frameworks (Vue, Angular, Svelte)
- Basic web development without component frameworks
- Node.js applications or APIs

---

## 🛠️ Troubleshooting

> **General Presetter issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/main/README.md#troubleshooting) for common Presetter problems and solutions.

### React Development Specific Issues

| Issue                         | Symptoms                           | Solution                                       |
| ----------------------------- | ---------------------------------- | ---------------------------------------------- |
| **JSX not compiling**         | TypeScript errors in TSX files     | Ensure `jsx: "react-jsx"` in TypeScript config |
| **Asset imports failing**     | Cannot import images/CSS           | Check type declarations in `types/` directory  |
| **React linting not working** | No React-specific lint errors      | Verify ESLint React plugin is loaded           |
| **Component naming errors**   | PascalCase component names flagged | Check naming convention overrides in ESLint    |

> **Need help with Presetter CLI commands?** Check the [CLI reference](https://github.com/alvis/presetter/blob/main/README.md#cli-reference) in the main documentation.

---

## ❓ FAQ

> **General Presetter questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/main/README.md#faq) for general usage, configuration, and customization questions.

### React Development Specific FAQs

#### Do I need preset-web separately?

No! preset-react **extends** preset-web automatically:

```typescript
// ❌ Redundant - web already included in react
extends: [esm, web, react]

// ✅ Correct - react includes web preset
extends: [esm, react]
```

#### How do I import images and CSS modules?

Type-safe imports work automatically:

```typescript
// Image imports
import logo from './assets/logo.png'; // string URL
import { ReactComponent as Icon } from './icon.svg'; // React component

// CSS module imports
import styles from './Button.module.css'; // CSS module object
const className = styles.button; // Type-safe class names
```

#### What React versions are supported?

React 18+ recommended, with backward compatibility:

- **React 18+**: Full support with modern JSX transform
- **React 16.14+**: Supported with legacy JSX transform
- **React <16.14**: Not recommended, may require manual config

#### How do React linting rules work?

Comprehensive React best practices:

```typescript
// Enforced patterns
const MyComponent = ({ isActive, onClick }) => { }  // ✅ PascalCase component
<button type="button" onClick={handler} disabled />  // ✅ Explicit button type

// Violations caught
const myComponent = () => { }                        // ❌ camelCase component
<button onClick={handler} />                        // ⚠️ Missing button type
```

#### Can I use this with other React tools?

Absolutely! The preset integrates with:

- **Next.js**: Works with Next.js React setup
- **Vite**: Compatible with Vite React templates
- **Create React App**: Can replace CRA configuration
- **Custom bundlers**: Works with any React build setup

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
