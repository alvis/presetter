# 🚀 @presetter/preset-monorepo

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

<div align="center">

[![npm](https://img.shields.io/npm/v/@presetter/preset-monorepo?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/master?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/@presetter/preset-monorepo?style=flat-square)](https://libraries.io/npm/@presetter/preset-monorepo)

Configuration template for TypeScript monorepos — unified tooling, zero duplication, maximum productivity

•   [Usage](#-usage)   •   [Bootstrap Command](#-monorepo-bootstrap-command)   •   [API Reference](#-api-reference)   •   [FAQ](#-faq)   •

</div>

---

**This is a configuration template that works with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# At monorepo root
npm i -D presetter @presetter/preset-monorepo

# Create presetter.config.ts
echo "export { default } from '@presetter/preset-monorepo';" > presetter.config.ts

# Use Presetter to generate configs for root and all packages
npx presetter bootstrap --projects . --projects packages/*/
```

Your entire monorepo is now configured with TypeScript, ESLint, Vitest, and more — **zero config files in packages!**

---

## ✨ Stop the Monorepo Madness

### How often have you copied configs across packages?

Managing shared build configurations across a monorepo can be maddening. How often have you copied over settings for `eslint`, `vitest`, `typescript`, or the scripts in `package.json` from one package to another? How many dependencies did you have to install in each package before you could even start development?

And when it's time to update those configurations across 20+ packages... 😩

### The monorepo-specific pain points

| Pain Point               | Traditional Approach                           | With preset-monorepo            |
| ------------------------ | ---------------------------------------------- | ------------------------------- |
| **Config Duplication**   | Copy 6-8 config files to every package         | ✅ Zero config files needed     |
| **Version Drift**        | Different packages use different tool versions | ✅ Always synchronized          |
| **Update Fatigue**       | Manually update configs in 20+ packages        | ✅ One command updates all      |
| **Setup Complexity**     | 30 minutes to configure a new package          | ✅ 30 seconds, fully configured |
| **Maintenance Overhead** | Hours spent keeping configs in sync            | ✅ Automatic synchronization    |

### What you get instead

**@presetter/preset-monorepo is a configuration template that defines monorepo-specific development setups.**

When used with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter) (the configuration management tool), this preset automatically generates all your essential development tool configurations (TypeScript, ESLint, Vitest) in every package, with intelligent context-aware customization.

- 🎯 **Context-Aware**: Root gets monorepo configs, packages get package configs
- 📦 **Zero Duplication**: Configurations generated from single source of truth
- 🔄 **Always in Sync**: Update once at root, all packages inherit changes
- ⚡ **Instant Package Setup**: New packages work immediately with zero setup
- 🛡️ **Type-Safe**: Full TypeScript monorepo support with project references
- 📊 **Unified Testing**: Workspace-based testing with aggregated coverage

---

## 🎯 One Config to Rule Them All

### The 90% duplication problem

In every monorepo, 90% of your configuration is identical across packages. Yet you maintain separate config files because that 10% difference makes syncing impossible. The result? Configuration hell:

- **Package A**: Latest ESLint rules + React-specific settings
- **Package B**: Latest ESLint rules + Node.js-specific settings
- **Package C**: Old ESLint rules (forgotten in last update) + React-specific settings
- **Package D**: Mix of old and new rules (partial update failed)

**You want consistency, but customization breaks everything.**

### From scattered configs to single template

```diff
# Before: Maintenance nightmare
monorepo/
├── packages/
│   ├── web-app/
-│   │   ├── .eslintrc.json     ← 90% same as others
-│   │   ├── tsconfig.json      ← 90% same as others
-│   │   ├── vitest.config.ts   ← 90% same as others
-│   │   └── package.json
│   ├── api-server/
-│   │   ├── .eslintrc.json     ← 90% same, but slightly different
-│   │   ├── tsconfig.json      ← 90% same, but slightly different
-│   │   ├── vitest.config.ts   ← 90% same, but slightly different
-│   │   └── package.json
│   └── shared-utils/
-│       ├── .eslintrc.json     ← Forgot to update this one!
-│       ├── tsconfig.json      ← Different target, can't sync
-│       ├── vitest.config.ts   ← Old coverage settings
-│       └── package.json
└── package.json

# After: Generated from template
monorepo/
+├── presetter.config.ts        ← References this preset template
├── packages/
│   ├── web-app/
+│   │   ├── .eslintrc.json     ← Generated by Presetter from template
+│   │   ├── tsconfig.json      ← Generated by Presetter from template
+│   │   ├── vitest.config.ts   ← Generated by Presetter from template
│   │   └── package.json
│   ├── api-server/
+│   │   ├── .eslintrc.json     ← Generated + customized
+│   │   ├── tsconfig.json      ← Generated + customized
+│   │   ├── vitest.config.ts   ← Generated + customized
+│   │   ├── presetter.config.ts ← Package-specific template overrides
│   │   └── package.json
│   └── shared-utils/
+│       ├── .eslintrc.json     ← Always up-to-date from template
+│       ├── tsconfig.json      ← Always up-to-date from template
+│       ├── vitest.config.ts   ← Always up-to-date from template
│       └── package.json
└── package.json
```

### How template-based generation works

1. **Root presetter.config.ts** — References this preset template for 90% shared configuration
2. **Presetter processes template** — Configurations are generated from template definitions, not copied manually
3. **Package-level overrides** — Add `presetter.config.ts` only where you need to customize the template
4. **Always in sync** — Update template once, all packages get updated automatically via Presetter

### Why this solves the real problem

- **End config drift**: Generated configs can't drift because they're regenerated from template on every build
- **Keep customization**: Packages can still override template settings without breaking sync
- **Update once**: Change TypeScript target in template, all packages update (except explicit overrides)
- **Visual clarity**: You can instantly see which packages have customizations (they have their own presetter.config.ts)
- **Best of both worlds**: 90% consistency + 10% flexibility without the maintenance nightmare

---

## 🔍 Understanding Presetter vs This Preset

**Important distinction:**

| Component                                                                          | Role                          | What it does                                                         |
| ---------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter)** | Configuration management tool | CLI that processes presets, generates config files, executes scripts |
| **@presetter/preset-monorepo**                                                     | Configuration template        | Defines what configs to generate for monorepos                       |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **This preset** = The blueprint that defines what type of house to build

This preset is just a template definition. It needs Presetter (the tool) to actually generate your configuration files. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic Monorepo Setup

#### Step 1: Root Configuration

```jsonc
// package.json (monorepo root)
{
  "type": "module",
  "private": true,
  "workspaces": ["packages/*"],
  "scripts": {
    "prepare": "presetter bootstrap --projects . --projects packages/*/",
    "build": "run build",
    "test": "run test",
  },
  "devDependencies": {
    "presetter": "latest",
    "@presetter/preset-monorepo": "latest",
  },
}
```

```typescript
// presetter.config.ts (monorepo root)
export { default } from '@presetter/preset-monorepo';
```

#### Step 2: Package Configuration

```jsonc
// packages/my-package/package.json
{
  "name": "@myorg/my-package",
  "type": "module",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "build": "run build",
    "test": "run test",
  },
  "devDependencies": {
    "presetter": "latest",
  },
}
```

That's it! No tsconfig.json, no eslint.config.ts, no vitest.config.ts needed in packages.

#### Step 3: Bootstrap & Develop

```bash
npm install
# Configs are automatically generated from this preset template via the prepare script
# Or run manually: npx presetter bootstrap --projects . --projects packages/*/
```

---

### 🧑‍🔬 Advanced Usage: Custom Template Overrides

```typescript
// presetter.config.ts (monorepo root)
import { preset } from 'presetter';
import monorepo from '@presetter/preset-monorepo';

export default preset('my-monorepo', {
  extends: [monorepo],
  override: {
    assets: {
      'eslint.config.ts': {
        default: [
          {
            rules: {
              '@typescript-eslint/no-explicit-any': 'off',
            },
          },
        ],
      },
    },
  },
});
```

> **Need more customization options?** Check the [main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter) for complete guides on overrides, extensions, and advanced configurations.

---

### 🏗️ Pro Usage: Package-Specific Template Config

```typescript
// packages/special-package/presetter.config.ts
import { preset } from 'presetter';
import root from 'https://github.com/alvis/presetter/blob/master/presetter.config'; // Import root preset

export default preset('special-package', {
  extends: [root],
  override: {
    variables: {
      source: 'source', // Use 'source' instead of 'src'
    },
  },
});
```

> **Want to understand how preset inheritance works?** See the [preset composition guide](https://github.com/alvis/presetter/blob/master/packages/presetter) in the main documentation.

---

## 🔧 Monorepo Bootstrap Command

For Presetter to generate configurations from this preset template for all packages in your monorepo, you need to specify the project paths using the `--projects` flag:

```bash
# Basic monorepo bootstrap
npx presetter bootstrap --projects . --projects packages/*/

# Alternative patterns
npx presetter bootstrap --projects . --projects "packages/*/" --projects "apps/*/"

# Custom workspace structure
npx presetter bootstrap --projects . --projects "libs/*/" --projects "tools/*/"
```

### Understanding the `--projects` flag

- `--projects .` - Generates configs for the root directory
- `--projects packages/*/` - Generates configs for all immediate subdirectories under `packages/`
- `--projects packages/*/` - Uses glob patterns, so `packages/*/` matches `packages/ui-lib/`, `packages/api-server/`, etc.

### Common workspace patterns

```bash
# Standard packages structure
--projects . --projects packages/*/

# Apps and packages structure
--projects . --projects packages/*/ --projects apps/*/

# Nested structure
--projects . --projects packages/*/ --projects packages/*/lib/*/

# Mixed structure
--projects . --projects libs/*/ --projects tools/*/ --projects examples/*/
```

### Automation in package.json

Always add this to your root `package.json` for automatic bootstrapping:

```jsonc
{
  "scripts": {
    "prepare": "presetter bootstrap --projects . --projects packages/*/",
  },
}
```

This ensures configs are regenerated from the preset template whenever someone runs `npm install`.

---

## 📦 Release (Lock-Step Versioning)

This preset ships a `release:changelog` script that computes **one global version per cycle** and propagates it to every `package.json` in the repo (root + all discovered sub-packages). A per-package `CHANGELOG.md` is generated with [`git-cliff`](https://git-cliff.org) scoped via `--include-path`.

Invoke from the monorepo root via the preset's `run`:

```bash
npm run release:changelog           # bump + write all CHANGELOG.md + git add
npm run release -- --ignore ./e2e/* # skip matching sub-packages
```

### Flags

| Flag       | Effect                                                                                                   |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| `--ignore` | Skip matching sub-packages. Can be repeated, and accepts repo-relative path globs or package-name globs. |

```bash
# skip every package under e2e/
npm run release -- --ignore ./e2e/*

# skip packages named with an @acme/e2e- prefix
npm run release -- --ignore @acme/e2e-*

# combine filters
npm run release -- --ignore ./e2e/* --ignore @acme/e2e-*
```

### Environment variables

| Variable       | Effect                                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `VERSION`      | Use this version instead of computing via `git-cliff --bumped-version`.                                                       |
| `PRERELEASE`   | Inject `--prerelease <value>` into the version bump (e.g. `next`, `beta`).                                                    |
| `IGNORE_PATHS` | Comma-delimited path prefixes to exclude from bumping. Kept for environment-driven release jobs; use `--ignore` for CLI runs. |

```bash
# explicit version
VERSION=9.1.0 npm run release:changelog

# prerelease
PRERELEASE=next npm run release:changelog

# skip example fixtures and internal tools by path prefix
IGNORE_PATHS=examples,tools npm run release:changelog
```

### Discovery

Sub-packages are discovered via `find` (excluding `node_modules` and the root `package.json`) — any layout works: `packages/*`, `apps/*`, `libs/*`, or deeply nested. Path ignores are repo-relative and may include a leading `./`; package-name ignores match the `name` field in each discovered `package.json`. Paths should not contain spaces.

### Flow

1. Compute `V` (from `VERSION` env or `git-cliff --bumped-version`).
2. Root: `npm pkg set version=$V` + regenerate root `CHANGELOG.md` + `git add`.
3. For each discovered sub-package (skipping any matching `--ignore` or `IGNORE_PATHS`): `npm pkg set version=$V` + scoped `CHANGELOG.md` + `git add`.

---

## 📖 API Reference

### Core Configuration Template

This preset template defines context-aware configurations based on location:

#### Root Context (`isRepoRoot: true`)

| Config File        | Purpose                 | Key Features                              |
| ------------------ | ----------------------- | ----------------------------------------- |
| `eslint.config.ts` | Monorepo-wide linting   | Ignores `**/lib/**`, `**/node_modules/**` |
| `tsconfig.json`    | TypeScript project refs | Empty `files[]` & `references[]` arrays   |
| `vitest.config.ts` | Workspace test runner   | 100% coverage thresholds                  |

#### Package Context (`isRepoRoot: false`)

Inherits all template configurations from root with these files removed:

- `.prettierrc.json` (uses root config)
- All other configs (uses root versions)

### Configuration Variables

Inherited from `@presetter/preset-essentials`:

| Variable    | Default       | Description                   |
| ----------- | ------------- | ----------------------------- |
| `source`    | `"src"`       | Source code directory         |
| `output`    | `"lib"`       | Build output directory        |
| `test`      | `"spec"`      | Test files directory          |
| `types`     | `"types"`     | TypeScript declarations       |
| `generated` | `"generated"` | Generated files directory     |
| `target`    | `"ES2024"`    | TypeScript compilation target |

---

## 🔧 Configuration Details

### TypeScript Configuration

```typescript
// Generated tsconfig.json at root
{
  "files": [],          // For monorepo project references
  "references": [],     // Add your packages here
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "target": "ES2024"
  }
}
```

### Vitest Configuration

```typescript
// Generated vitest.config.ts at root
{
  test: {
    workspace: ['*/*/vitest.config{,.int,.e2e}.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'clover', 'json', 'lcov'],
      excludeAfterRemap: true,  // Respects package-level exclusions
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
      }
    }
  }
}
```

---

## 🏎️ Performance

| Metric                     | With Manual Config | With preset-monorepo |
| -------------------------- | ------------------ | -------------------- |
| Setup time (10 packages)   | ~30 minutes        | **< 2 minutes**      |
| Config files per package   | 5-8 files          | **0 files**          |
| Update time (all packages) | ~20 minutes        | **< 30 seconds**     |
| Disk space (configs)       | ~50KB/package      | **0KB/package**      |

---

## 🌐 Compatibility

| Requirement     | Version                       |
| --------------- | ----------------------------- |
| Node.js         | ≥ 18                          |
| Package Manager | npm/yarn/pnpm with workspaces |

### Extends

- [`@presetter/preset-esm`](../preset-esm) - ESM module configuration
- [`@presetter/preset-strict`](../preset-strict) - Strict linting rules

---

## 🆚 Comparison

| Feature              | preset-monorepo | Lerna  | Nx   | Manual |
| -------------------- | --------------- | ------ | ---- | ------ |
| **Zero Config**      | ✅              | ❌     | ❌   | ❌     |
| **TypeScript Ready** | ✅              | ⚠️     | ✅   | ⚠️     |
| **Unified Testing**  | ✅              | ❌     | ✅   | ⚠️     |
| **Auto Updates**     | ✅              | ❌     | ⚠️   | ❌     |
| **Learning Curve**   | Low             | Medium | High | Low    |

### When to Use

✅ **Use preset-monorepo when:**

- Building TypeScript monorepos
- Want zero configuration in packages
- Need consistent tooling across packages
- Prefer convention over configuration

❌ **Consider alternatives when:**

- Using languages other than TypeScript
- Need complex, package-specific builds
- Require specialized monorepo features (publishing, versioning)

---

## 🛠️ Troubleshooting

> **General Presetter issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/master/packages/presetter#troubleshooting) for common Presetter problems and solutions.

### Monorepo-Specific Issues

| Issue                                 | Symptoms                                         | Solution                                                                               |
| ------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------- |
| **Configs not generated in packages** | No `.eslintrc.json`, `tsconfig.json` in packages | Run `npx presetter bootstrap --projects . --projects packages/*/` at **monorepo root** |

> **Need help with Presetter CLI commands?** Check the [CLI reference](https://github.com/alvis/presetter/blob/master/packages/presetter#cli-reference) in the main documentation.

---

## ❓ FAQ

> **General Presetter questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/master/packages/presetter#faq) for general usage, configuration, and customization questions.

### Monorepo-Specific FAQs

#### How do I add TypeScript project references?

Don't edit the generated `tsconfig.json` directly! Instead, configure project references by extending this preset template in your root `presetter.config.ts`:

```typescript
// presetter.config.ts (monorepo root)
import { asset, preset } from 'presetter';
import monorepo from '@presetter/preset-monorepo';

import type { TsConfigJson } from 'type-fest';

export default preset('my-monorepo', {
  extends: [monorepo],
  override: {
    assets: ({ isRepoRoot }) =>
      isRepoRoot
        ? {
            // Root-level overrides
            'tsconfig.json': asset<TsConfigJson>((current) => ({
              ...current,
              references: [
                { path: './packages/ui-components' },
                { path: './packages/shared-utils' },
                { path: './packages/api-client' },
              ],
            })),
          }
        : {
            // Package-level overrides (if needed)
            'tsconfig.json': asset<TsConfigJson>((current) => ({
              ...current,
              compilerOptions: {
                ...current?.compilerOptions,
                composite: true, // Enable for project references
                rootDir: '.',
              },
            })),
          },
  },
});
```

#### Can I use different test frameworks per package?

Yes! Create a package-specific `presetter.config.ts`:

```typescript
// packages/legacy-package/presetter.config.ts
import { preset } from 'presetter';
import root from 'https://github.com/alvis/presetter/blob/master/presetter.config'; // Import root preset

export default preset('legacy-package', {
  extends: [root],
  override: {
    assets: {
      'vitest.config.ts': null, // Remove Vitest
      'jest.config.ts': {
        // Add Jest config
        testEnvironment: 'node',
        testMatch: ['**/__tests__/**/*.test.ts'],
      },
    },
  },
});
```

#### How do I handle packages with different build targets?

Create package-specific configs for different environments:

```typescript
// packages/node-service/presetter.config.ts
import { preset } from 'presetter';
import root from 'https://github.com/alvis/presetter/blob/master/presetter.config'; // Import root preset

export default preset('node-service', {
  extends: [root],
  override: {
    variables: {
      target: 'ES2020', // Node.js target
    },
  },
});

// packages/browser-lib/presetter.config.ts
import { preset } from 'presetter';
import root from 'https://github.com/alvis/presetter/blob/master/presetter.config'; // Import root preset

export default preset('browser-lib', {
  extends: [root],
  override: {
    variables: {
      target: 'ES2018', // Browser target
    },
  },
});
```

#### Can I have different ESLint rules for different package types?

Absolutely! You can use the context object to dynamically apply different ESLint rules based on the current package. Here are two approaches:

**Approach 1: Context-aware rules per package**

```typescript
// presetter.config.ts (root)
import { asset, preset } from 'presetter';
import monorepo from '@presetter/preset-monorepo';

import type { Linter } from 'eslint';

export default preset('my-monorepo', {
  extends: [monorepo],
  override: {
    assets: (context) => ({
      'eslint.config.ts': asset<{ default: Linter.Config[] }>((current) => {
        const baseConfig = current?.default || [];

        // Determine package type from context
        const isReactPackage =
          context.packageJson.dependencies?.react ||
          context.packageJson.devDependencies?.react ||
          context.projectRoot.includes('/ui-') ||
          context.projectRoot.includes('/frontend-');

        const isNodePackage =
          context.packageJson.dependencies?.['@types/node'] ||
          context.projectRoot.includes('/api-') ||
          context.projectRoot.includes('/server-');

        const isLibraryPackage =
          context.packageJson.name?.includes('/lib-') ||
          context.projectRoot.includes('/lib-');

        const packageSpecificRules: Linter.Config = {
          name: `${context.packageJson.name}:rules`,
          rules: {},
        };

        // Apply React-specific rules
        if (isReactPackage) {
          Object.assign(packageSpecificRules.rules, {
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            '@typescript-eslint/no-unused-vars': [
              'error',
              {
                varsIgnorePattern: '^React$',
              },
            ],
          });
        }

        // Apply Node.js-specific rules
        if (isNodePackage) {
          Object.assign(packageSpecificRules.rules, {
            'node/no-unpublished-import': 'error',
            'node/no-missing-import': 'off', // Often false positives in monorepos
            '@typescript-eslint/no-var-requires': 'off',
          });
        }

        // Apply library-specific rules
        if (isLibraryPackage) {
          Object.assign(packageSpecificRules.rules, {
            'no-console': 'error', // Libraries shouldn't have console logs
            '@typescript-eslint/explicit-function-return-type': 'error',
          });
        }

        return {
          default: [...baseConfig, packageSpecificRules],
        };
      }),
    }),
  },
});
```

**Approach 2: Path-based conditional rules**

```typescript
// presetter.config.ts (root) - Apply rules based on package path
export default preset('my-monorepo', {
  extends: [monorepo],
  override: {
    assets: (context) => ({
      'eslint.config.ts': {
        default: [
          // Global rules for all packages
          {
            rules: {
              '@typescript-eslint/no-explicit-any': 'warn',
            },
          },

          // React-specific rules for UI packages
          ...(context.relativeProjectRoot.startsWith('packages/ui-')
            ? [
                {
                  files: ['**/*.{ts,tsx}'],
                  rules: {
                    'react/prop-types': 'off',
                    'react-hooks/rules-of-hooks': 'error',
                    'react-hooks/exhaustive-deps': 'warn',
                  },
                },
              ]
            : []),

          // Node.js API rules for API packages
          ...(context.relativeProjectRoot.startsWith('packages/api-') ||
          context.relativeProjectRoot.startsWith('packages/server-')
            ? [
                {
                  files: ['**/*.ts'],
                  rules: {
                    'node/no-unpublished-import': 'error',
                    'no-console': 'off', // Allow console in APIs
                  },
                },
              ]
            : []),

          // Library rules for lib packages
          ...(context.relativeProjectRoot.startsWith('packages/lib-')
            ? [
                {
                  files: ['**/*.ts'],
                  rules: {
                    'no-console': 'error',
                    '@typescript-eslint/explicit-function-return-type': 'error',
                  },
                },
              ]
            : []),
        ],
      },
    }),
  },
});
```

**Available context properties:**

- `context.isRepoRoot` - Boolean indicating if current project is at repository root
- `context.projectRoot` - Absolute path to the project root (where presetter.config.ts is located)
- `context.repoRoot` - Absolute path to the repository root (where .git is located)
- `context.relativeProjectRoot` - Relative path from repo root to project root
- `context.relativeRepoRoot` - Relative path from project root to repo root
- `context.packageJson` - Parsed package.json content (type-safe with PackageJson from type-fest)
- `context.variables` - Resolved preset variables (source, output, etc.) - only available in content context

#### What's the difference between root and package-level presetter configs?

- **Root config**: References this preset template and defines shared configuration for the entire monorepo
- **Package config**: Overrides or extends root config template for specific packages

```typescript
// Root: references this preset template as defaults for everyone
export default preset('monorepo', { ... });

// Package: only when you need different template settings
import { preset } from 'presetter';
import root from 'https://github.com/alvis/presetter/blob/master/presetter.config'; // Import root preset

export default preset('special-package', {
  extends: [root],
  override: { /* only the differences from template */ }
});
```

> **Want to learn more about preset configuration?** Visit the [configuration guide](https://github.com/alvis/presetter/blob/master/packages/presetter) in the main documentation.

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
