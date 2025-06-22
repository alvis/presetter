# 🚀 presetter-types

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

<div align="center">

[![npm](https://img.shields.io/npm/v/presetter-types?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/master?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter-types?style=flat-square)](https://libraries.io/npm/presetter-types)

TypeScript definitions for the Presetter ecosystem — type-safe preset development

•   [Usage](#-usage)   •   [Type Reference](#-type-reference)   •   [Examples](#-examples)   •   [FAQ](#-faq)   •

</div>

---

**This package provides comprehensive TypeScript type definitions and type-safe preset and asset declaration tools for [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install types (usually included with presetter)
npm i -D presetter-types

# Use in your preset development
import { preset } from 'presetter-types';

import type { PresetDefinition } from 'presetter-types';
```

**Note**: These types are automatically included when you install `presetter`. You typically don't need to install this package directly.

---

## ✨ Type-Safe Preset Development

### Need robust TypeScript support?

Developing presets for the Presetter ecosystem requires working with complex configuration objects, dynamic content generation, and asset management. Without proper types, this becomes error-prone and difficult to maintain.

**What if you had complete type safety and IntelliSense support?**

### The preset development challenge

| Development Need           | Without Types                      | With presetter-types               |
| -------------------------- | ---------------------------------- | ---------------------------------- |
| **Preset Configuration**   | ❌ No validation, runtime errors   | ✅ Compile-time type checking      |
| **IDE Support**            | ❌ No autocomplete or IntelliSense | ✅ Full IDE integration            |
| **API Contracts**          | ⚠️ Undefined interfaces            | ✅ Strict type contracts           |
| **Content Generation**     | ❌ No context type safety          | ✅ Type-safe dynamic content       |
| **Asset Management**       | ⚠️ String-based, error-prone       | ✅ Strongly-typed asset handling   |
| **Development Experience** | ⚠️ Trial and error debugging       | ✅ Instant feedback and validation |

### What you get instead

**presetter-types provides comprehensive TypeScript definitions for the entire Presetter ecosystem.**

This package serves as the foundation for type-safe preset development, offering complete IntelliSense support, compile-time validation, and consistent interfaces across all Presetter packages.

- 🎯 **Complete Type Coverage**: Every Presetter API is fully typed
- 🧠 **IntelliSense Support**: Full IDE integration with autocomplete
- 🛡️ **Type Safety**: Catch errors at compile time, not runtime
- 📝 **Dynamic Content**: Type-safe generators and context handling
- 🔧 **Asset Management**: Strongly-typed configuration file handling
- 🚀 **Developer Experience**: Professional preset development with confidence

---

## 🔍 Understanding Presetter Types

**Important context:**

| Component                                                                          | Role                          | What it does                                                         |
| ---------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter)** | Configuration management tool | CLI that processes presets, generates config files, executes scripts |
| **presetter-types**                                                                | Type definitions package      | Provides TypeScript types for the entire ecosystem                   |
| **Preset Packages**                                                                | Configuration templates       | Use these types to ensure type safety                                |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **presetter-types** = The blueprint specifications and building codes
- **Preset packages** = The actual blueprints that follow the specifications

This package enables type-safe development across the entire Presetter ecosystem. For general usage, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic Type-Safe Preset Development

```typescript
import { preset } from 'presetter-types';

import type { PresetDefinition } from 'presetter-types';

// Type-safe preset creation with preset() helper
const myPreset: PresetDefinition = preset('my-preset', {
  extends: ['presetter-preset-essentials'],
  variables: {
    NODE_ENV: 'development',
    OUTPUT_DIR: 'dist',
  },
  assets: {
    'eslint.config.ts': {
      extends: ['@eslint/recommended'],
      rules: {
        'no-console': 'warn',
      },
    },
  },
});

export default myPreset;
```

**Why use `preset()`?**

- **Type Safety**: Ensures your preset configuration matches the expected `PresetDefinition` interface
- **ID Assignment**: Automatically assigns the preset ID, preventing mismatches
- **IntelliSense Support**: Provides full autocomplete and validation in your IDE
- **Generator Support**: Handles both static configurations and dynamic generator functions

### 🧑‍🔬 Advanced: Dynamic Content Generation

```typescript
import { preset } from 'presetter-types';

import type { PresetDefinition, PresetContentContext } from 'presetter-types';

const dynamicPreset: PresetDefinition = preset('dynamic-preset', {
  // Type-safe variable generation
  variables: (current, context) => ({
    ...current,
    PROJECT_NAME: context.packageJson.name,
    BUILD_TIME: new Date().toISOString(),
  }),

  // Type-safe asset generation
  assets: {
    'package.json': (current, context) => ({
      ...current,
      scripts: {
        ...current?.scripts,
        start: `node ${context.variables.OUTPUT_DIR}/index.js`,
      },
    }),
  },
});
```

### 🔧 Custom Asset Types with `asset()` Helper

```typescript
import { asset } from 'presetter-types';

import type { PresetAssets } from 'presetter-types';
import type { UserConfig as ViteUserConfig } from 'vite';

// Define custom asset configuration with explicit types
const customAssets: PresetAssets = {
  // JSON configuration
  'config.json': asset<{ api: { baseUrl: string; timeout: number } }>({
    api: {
      baseUrl: 'https://api.example.com',
      timeout: 5000,
    },
  }),

  // Vite configuration with explicit typing
  'vite.config.ts': asset<{ default: ViteUserConfig }>({
    default: {
      build: {
        target: 'es2020',
        outDir: 'dist',
      },
      test: {
        environment: 'jsdom',
      },
    },
  }),

  // Ignore files
  '.gitignore': ['node_modules/', 'dist/', '*.log'],
};
```

**Why use `asset()` with type parameters?**

- **Explicit Type Safety**: The generic type parameter ensures the asset content matches the expected configuration shape
- **IDE IntelliSense**: Full autocomplete and validation for complex config objects like Vite, Webpack, ESLint, etc.
- **Compile-time Validation**: Catches type mismatches before runtime
- **Documentation**: Makes the expected asset structure clear to other developers
- **Framework Integration**: Works seamlessly with existing tool configurations

---

## 📖 Type Reference

### Core Preset Types

#### `PresetDefinition`

The main interface for defining presets:

```typescript
interface PresetDefinition {
  id: string; // Unique preset identifier
  extends?: string[]; // Array of presets to extend
  variables?: Variables | VariableGenerator; // Template variables
  scripts?: Scripts | ScriptGenerator; // NPM scripts
  assets?: PresetAssets; // Configuration files
  override?: OverrideDefinition; // Second-pass overrides
}
```

#### `PresetContentContext`

Context provided to generator functions:

```typescript
interface PresetContentContext {
  packageJson: Record<string, any>; // Project package.json
  variables: Variables; // Resolved variables
  root: string; // Project root path
  repository: string; // Repository root path
}
```

### Asset Types

#### `PresetAssets`

Defines how configuration files are handled:

```typescript
interface PresetAssets {
  [key: string]: PresetContent<any>; // File path to content mapping
}
```

#### `PresetContent<T>`

Union type for asset content:

```typescript
type PresetContent<T> =
  | T // Direct value
  | Path // File path reference
  | PresetContentGenerator<T> // Dynamic generator
  | null // Ignore file
  | undefined; // No change
```

### Dynamic Generation Types

#### `PresetContentGenerator<T>`

Function signature for dynamic content:

```typescript
type PresetContentGenerator<T> = (
  current: T | undefined, // Current value
  context: PresetContentContext, // Project context
) => T | Promise<T>;
```

#### `VariableGenerator`

Function for generating variables:

```typescript
type VariableGenerator = (
  current: Variables, // Current variables
  context: ProjectContext, // Project context
) => Variables | Promise<Variables>;
```

### Utility Types

#### `Variables`

Key-value pairs for template substitution:

```typescript
type Variables = Record<string, string>;
```

#### `Scripts`

NPM script definitions:

```typescript
type Scripts = Record<string, string>;
```

#### `Path`

String representing file paths:

```typescript
type Path = string;
```

### Guard Functions

#### `preset()`

Type-safe preset creation utility:

```typescript
function preset(
  id: string,
  definition: Omit<PresetDefinition, 'id'>,
): PresetDefinition;
```

#### `asset()`

Type-safe asset creation utility:

```typescript
function asset<T>(content: PresetContent<T>): PresetContent<T>;
```

---

## 💡 Examples

### Example 1: ESLint Configuration Preset

```typescript
import { preset, asset } from 'presetter-types';

import type { Linter } from 'eslint';

export default preset('eslint-preset', {
  variables: {
    ESLINT_VERSION: '9.0.0',
  },
  assets: {
    'eslint.config.ts': asset<{ default: Linter.Config[] }>({
      default: [
        {
          languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
          },
          rules: {
            'no-unused-vars': 'error',
            'prefer-const': 'warn',
          },
        },
      ],
    }),
  },
});
```

### Example 2: Dynamic Package.json Generator

```typescript
import { preset, asset } from 'presetter-types';

import type { PresetContentContext } from 'presetter-types';
import type { PackageJson } from 'type-fest';

export default preset('package-preset', {
  assets: {
    'package.json': asset<PackageJson>(
      (current, context: PresetContentContext) => ({
        ...current,
        name: context.packageJson.name,
        scripts: {
          ...current?.scripts,
          build: 'tsc && webpack',
          test: 'vitest',
          [`build:${context.variables.NODE_ENV}`]: 'custom build command',
        },
      }),
    ),
  },
});
```

### Example 3: Multi-File Configuration Preset

```typescript
import { preset, asset } from 'presetter-types';

import type { ProjectContext } from 'presetter-types';

export default preset('full-stack-preset', {
  extends: ['presetter-preset-essentials'],
  variables: (current, context: ProjectContext) => ({
    ...current,
    DATABASE_URL: process.env.DATABASE_URL || 'sqlite:memory:',
    API_PORT: '3000',
  }),
  assets: {
    // TypeScript configuration
    'tsconfig.json': asset({
      compilerOptions: {
        target: 'ES2022',
        module: 'ESNext',
        strict: true,
      },
    }),

    // Environment configuration
    '.env.example': asset(
      [
        'DATABASE_URL=sqlite:memory:',
        'API_PORT=3000',
        'NODE_ENV=development',
      ].join('\n'),
    ),

    // Docker configuration (file reference)
    'Dockerfile': './templates/Dockerfile',

    // Ignore files
    '.gitignore': asset(['node_modules/', '.env', 'dist/']),
  },
});
```

### Example 4: Conditional Configuration

```typescript
import { preset, asset } from 'presetter-types';

import type { PresetContentContext } from 'presetter-types';
import type { Configuration as WebpackConfig } from 'webpack';

export default preset('conditional-preset', {
  assets: {
    'webpack.config.ts': asset<WebpackConfig>(
      (current, context: PresetContentContext) => {
        const isProduction = context.variables.NODE_ENV === 'production';

        return {
          mode: isProduction ? 'production' : 'development',
          optimization: {
            minimize: isProduction,
          },
          devtool: isProduction ? false : 'source-map',
        };
      },
    ),
  },
});
```

---

## 🌐 Compatibility

| Environment | Support      |
| ----------- | ------------ |
| TypeScript  | ≥ 5.0        |
| Node.js     | ≥ 18         |
| Presetter   | All versions |

### Used By

- [`presetter`](https://github.com/alvis/presetter/blob/master/) - Main Presetter package (re-exports all types)
- [`presetter-preset-essentials`](../preset-essentials) - Uses types for preset definition
- [`presetter-preset-esm`](../preset-esm) - Uses types for preset definition
- [`presetter-preset-cjs`](../preset-cjs) - Uses types for preset definition
- [`presetter-preset-hybrid`](../preset-hybrid) - Uses types for preset definition
- [`presetter-preset-strict`](../preset-strict) - Uses types for preset definition
- [`presetter-preset-web`](../preset-web) - Uses types for preset definition
- [`presetter-preset-react`](../preset-react) - Uses types for preset definition
- [`presetter-preset-rollup`](../preset-rollup) - Uses types for preset definition

---

## ❓ FAQ

### Do I need to install presetter-types separately?

No! When you install `presetter`, these types are automatically included:

```typescript
// This works automatically
import { preset } from 'presetter';
```

### How do I create type-safe presets?

Use the provided type definitions and guard functions:

```typescript
import { preset } from 'presetter-types';

import type { PresetDefinition } from 'presetter-types';

const myPreset: PresetDefinition = preset('my-preset', {
  // TypeScript will validate this configuration
});
```

### Can I extend existing presets type-safely?

Yes! The type system validates preset extension:

```typescript
export default preset('my-preset', {
  extends: ['presetter-preset-essentials'], // Type-checked
  // Additional configuration
});
```

### How do generator functions work?

Generator functions receive typed context and must return the expected type:

```typescript
import { asset } from 'presetter-types';

import type { PresetContentContext } from 'presetter-types';

assets: {
  'config.json': asset((current, context: PresetContentContext) => {
    // current: previous config or undefined
    // context: typed project context
    return { /* new config */ };
  }),
}
```

### When should I use the `asset()` function?

The `asset()` function is optional but recommended for:

- **Better Type Inference**: Explicitly marks content as preset assets
- **Type Safety**: Use the generic parameter `asset<T>()` to specify the expected config shape
- **Framework Integration**: Perfect for typed configs like `asset<ViteUserConfig>()`, `asset<WebpackConfig>()`, etc.
- **IDE Support**: Improves autocomplete and error detection
- **Complex Assets**: Especially useful with generator functions for better typing

### How do I use typed assets for specific tools?

Use the generic type parameter to specify the expected configuration shape:

```typescript
import { asset } from 'presetter-types';

import type { UserConfig as ViteUserConfig } from 'vite';
import type { Linter } from 'eslint';

// Vite configuration
'vite.config.ts': asset<{ default: ViteUserConfig }>({
  default: {
    build: { target: 'es2020' },
    test: { environment: 'jsdom' }
  }
}),

// ESLint configuration
'eslint.config.ts': asset<{ default: Linter.Config[] }>({
  default: [{
    rules: { 'no-console': 'warn' }
  }]
}),

// Custom typed configuration
'my-config.json': asset<{ api: { url: string; timeout: number } }>({
  api: { url: 'https://api.example.com', timeout: 5000 }
})
```

### What's the difference between assets and override?

- **assets**: First-pass resolution, defines base configuration
- **override**: Second-pass resolution, handles conflicts and final adjustments

```typescript
export default preset('my-preset', {
  assets: {
    'package.json': { scripts: { build: 'tsc' } },
  },
  override: {
    assets: {
      'package.json': (current) => ({
        ...current,
        scripts: {
          ...current?.scripts,
          'build:watch': 'tsc --watch',
        },
      }),
    },
  },
});
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
