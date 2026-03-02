# 🚀 @presetter/preset-essentials

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

<div align="center">

[![npm](https://img.shields.io/npm/v/@presetter/preset-essentials?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/master?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/@presetter/preset-essentials?style=flat-square)](https://libraries.io/npm/@presetter/preset-essentials)

Essential development toolkit for TypeScript projects — zero setup, maximum productivity

•   [Usage](#-usage)   •   [Configuration](#-configuration-details)   •   [Comparison](#-comparison)   •   [FAQ](#-faq)   •

</div>

---

**This is a configuration template that works with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install essentials preset
npm i -D presetter @presetter/preset-essentials

# Create presetter.config.ts
echo "export { default } from '@presetter/preset-essentials';" > presetter.config.ts

# Bootstrap your project
npx presetter bootstrap
```

Your TypeScript project is now configured with ESLint, Prettier, Vitest, Husky, and more — **ready to code!**

---

## ✨ Stop the Setup Madness

### How many hours have you spent configuring projects?

Setting up a new TypeScript project is painful. Install TypeScript, configure ESLint, set up Prettier, add Vitest, configure Husky, set up lint-staged, configure TypeScript paths, resolve tool conflicts...

**And that's just to write your first line of code.**

### The modern development setup nightmare

| Pain Point                | Traditional Approach                             | With preset-essentials            |
| ------------------------- | ------------------------------------------------ | --------------------------------- |
| **Initial Setup**         | 2-4 hours configuring 10+ tools                  | ✅ 2 minutes, fully configured    |
| **Tool Conflicts**        | Hours debugging ESLint + Prettier + TS conflicts | ✅ Pre-resolved configurations    |
| **Dependency Management** | Track 15+ dev dependencies manually              | ✅ Just 2 packages                |
| **Team Onboarding**       | "Good luck setting up your environment"          | ✅ `npm install` and you're ready |
| **Updates & Security**    | Update tools individually, fix breaking changes  | ✅ One command updates all        |

### What you get instead

**@presetter/preset-essentials is a configuration template that provides a complete TypeScript development environment.**

When used with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter) (the configuration management tool), this preset automatically configures all essential development tools with battle-tested settings that work perfectly together.

- 🔧 **Complete Toolkit**: ESLint, Prettier, Vitest, Husky, TypeScript — everything configured
- ⚡ **Instant Setup**: From zero to fully configured in under 2 minutes
- 🎯 **Intelligent Defaults**: Opinionated settings that work for 90% of projects
- 🛡️ **Type-Safe**: Comprehensive TypeScript integration with strict settings
- 🚀 **Modern Tools**: Latest versions with best practices built-in
- 🔄 **Zero Conflicts**: Pre-tested tool combinations that work together

---

## 🎯 One Preset to Rule Them All

### The 15-tool configuration problem

Every TypeScript project needs the same core tools, but configuring them consistently is a nightmare:

- **TypeScript**: Compiler options, path mapping, incremental builds
- **ESLint**: 100+ rules, TypeScript integration, import resolution
- **Prettier**: Code formatting that doesn't conflict with ESLint
- **Vitest**: Test runner with TypeScript support and coverage
- **Husky**: Git hooks for code quality
- **Lint-staged**: Pre-commit checks
- **Standard-version**: Automated versioning and changelog

**Each tool has dozens of options. Getting them to work together perfectly? Hours of frustration.**

### From configuration hell to instant productivity

```diff
# Before: Configuration nightmare
my-project/
├── package.json                 ← 15+ devDependencies
├── tsconfig.json               ← Manual TypeScript config
├── eslint.config.js            ← 200+ lines of ESLint rules
├── .prettierrc.json            ← Prettier settings
├── vitest.config.ts            ← Test configuration
├── .lintstagedrc.json          ← Pre-commit setup
├── .husky/
│   └── pre-commit              ← Git hooks
└── src/
    └── index.ts

# After: Generated from template
my-project/
+├── presetter.config.ts        ← References this preset template
├── package.json                ← 2 devDependencies
+├── tsconfig.json              ← Generated by Presetter from template
+├── eslint.config.ts           ← Generated by Presetter from template
+├── .prettierrc.json           ← Generated by Presetter from template
+├── vitest.config.ts           ← Generated by Presetter from template
+├── .lintstagedrc.json         ← Generated by Presetter from template
+├── .husky/                    ← Generated by Presetter from template
└── src/
    └── index.ts
```

### How template-based generation works

1. **Root presetter.config.ts** — References this preset template for complete toolkit
2. **Presetter processes template** — All configurations generated from proven templates
3. **Intelligent defaults** — Settings optimized for modern TypeScript development
4. **Always in sync** — Update preset once, all configurations update automatically

### Why this solves the real problem

- **End setup friction**: New projects start productive immediately
- **Eliminate conflicts**: All tools pre-configured to work together perfectly
- **Consistent quality**: Same high-quality setup across all projects
- **Easy updates**: Update entire toolkit with one command
- **Team alignment**: Everyone uses identical, proven configurations

---

## 🔍 Understanding Presetter vs This Preset

**Important distinction:**

| Component                                                                          | Role                          | What it does                                                         |
| ---------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter)** | Configuration management tool | CLI that processes presets, generates config files, executes scripts |
| **@presetter/preset-essentials**                                                   | Configuration template        | Defines essential TypeScript development toolkit                     |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **This preset** = The blueprint for a fully-equipped development workshop

This preset is just a template definition. It needs Presetter (the tool) to actually generate your configuration files. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic Project Setup

#### Step 1: Install Preset

```jsonc
// package.json
{
  "type": "module",
  "scripts": {
    "build": "run build",
    "test": "run test",
    "lint": "run lint",
    "coverage": "run coverage",
  },
  "devDependencies": {
    "presetter": "latest",
    "@presetter/preset-essentials": "latest",
  },
}
```

```typescript
// presetter.config.ts
export { default } from '@presetter/preset-essentials';
```

#### Step 2: Bootstrap & Develop

```bash
npm install
# Configs are automatically generated from this preset template
# Start coding immediately - everything is configured!
```

That's it! No manual configuration files needed. TypeScript, ESLint, Prettier, Vitest, and Git hooks are all set up.

---

### 🧑‍🔬 Advanced Usage: Custom Template Overrides

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';

export default preset('my-project', {
  extends: [essentials],
  override: {
    variables: {
      target: 'ES2020', // Different TypeScript target
      source: 'source', // Use 'source' instead of 'src'
    },
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

## 📖 API Reference

### Core Configuration Template

This preset template provides essential development tools:

| Tool            | Purpose                | Key Features                                            |
| --------------- | ---------------------- | ------------------------------------------------------- |
| **TypeScript**  | Type-safe JavaScript   | ES2022 target, incremental builds, path mapping         |
| **ESLint**      | Code linting           | TypeScript integration, import rules, JSDoc enforcement |
| **Prettier**    | Code formatting        | Consistent style, ESLint integration                    |
| **Vitest**      | Testing framework      | Fast tests, TypeScript support, coverage reporting      |
| **Husky**       | Git hooks              | Pre-commit quality checks                               |
| **Lint-staged** | Staged file processing | Format and lint only changed files                      |

### Configuration Variables

Customize your project structure:

| Variable    | Default       | Description                   |
| ----------- | ------------- | ----------------------------- |
| `source`    | `"src"`       | Source code directory         |
| `output`    | `"lib"`       | Build output directory        |
| `test`      | `"spec"`      | Test files directory          |
| `types`     | `"types"`     | TypeScript declarations       |
| `generated` | `"generated"` | Generated files directory     |
| `target`    | `"ES2022"`    | TypeScript compilation target |

---

## 🔧 Configuration Details

### TypeScript Configuration

```typescript
// Generated tsconfig.json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "target": "ES2022",
    "strict": true,
    "incremental": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
  }
}
```

### ESLint Configuration

```typescript
// Generated eslint.config.ts - Key rules
{
  "@typescript-eslint/recommended": "error",
  "@typescript-eslint/recommended-type-checked": "error",
  "import/order": "error",
  "jsdoc/require-jsdoc": "error",
  "compat/compat": "error"
}
```

### Vitest Configuration

```typescript
// Generated vitest.config.ts
{
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'clover', 'json', 'lcov'],
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

| Metric               | Manual Setup         | With preset-essentials  |
| -------------------- | -------------------- | ----------------------- |
| Setup time           | 2-4 hours            | **< 2 minutes**         |
| Tools configured     | 8-12 tools           | **All essential tools** |
| Config files created | 6-10 files           | **Auto-generated**      |
| Tool conflicts       | Many hours debugging | **Zero conflicts**      |

---

## 🌐 Compatibility

| Requirement     | Version       |
| --------------- | ------------- |
| Node.js         | ≥ 18          |
| TypeScript      | ≥ 5.0         |
| Package Manager | npm/yarn/pnpm |

### Extended By

- [`@presetter/preset-esm`](../preset-esm) - ESM module configuration
- [`@presetter/preset-cjs`](../preset-cjs) - CommonJS module configuration
- [`@presetter/preset-hybrid`](../preset-hybrid) - Dual module configuration
- [`@presetter/preset-strict`](../preset-strict) - Stricter linting rules
- [`@presetter/preset-web`](../preset-web) - Web development tools
- [`@presetter/preset-react`](../preset-react) - React development setup
- [`@presetter/preset-monorepo`](../preset-monorepo) - Monorepo management

---

## 🆚 Comparison

| Feature              | preset-essentials | Manual Setup | Other Presets |
| -------------------- | ----------------- | ------------ | ------------- |
| **Complete Toolkit** | ✅                | ❌           | ⚠️            |
| **Zero Config**      | ✅                | ❌           | ⚠️            |
| **Type-Safe**        | ✅                | ⚠️           | ⚠️            |
| **Modern Tools**     | ✅                | ⚠️           | ⚠️            |
| **Team Ready**       | ✅                | ❌           | ⚠️            |

### When to Use

✅ **Use preset-essentials when:**

- Starting new TypeScript projects
- Modernizing existing projects
- Standardizing team development environments
- Building npm packages or libraries
- Want best practices without the research

❌ **Consider alternatives when:**

- Working with non-TypeScript projects
- Need specialized tools not included
- Have very specific configuration requirements

---

## 🛠️ Troubleshooting

> **General Presetter issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/master/README.md#troubleshooting) for common Presetter problems and solutions.

### Common Issues

| Issue                 | Symptoms                        | Solution                                                            |
| --------------------- | ------------------------------- | ------------------------------------------------------------------- |
| **TypeScript errors** | Module resolution failures      | Check `paths` configuration in generated `tsconfig.json`            |
| **ESLint conflicts**  | Conflicting rules with Prettier | Preset resolves conflicts automatically - check for local overrides |
| **Test failures**     | Vitest not finding tests        | Tests should be in `spec/` directory by default                     |

> **Need help with Presetter CLI commands?** Check the [CLI reference](https://github.com/alvis/presetter/blob/master/README.md#cli-reference) in the main documentation.

---

## ❓ FAQ

> **General Presetter questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/master/README.md#faq) for general usage, configuration, and customization questions.

### Essentials-Specific FAQs

#### What tools are included?

The preset includes everything needed for modern TypeScript development:

- **TypeScript** compiler with optimal settings
- **ESLint** with TypeScript and import rules
- **Prettier** for consistent formatting
- **Vitest** for fast testing with coverage
- **Husky** for Git hooks
- **Lint-staged** for pre-commit checks
- **Standard-version** for automated releases

#### Can I use a different test framework?

Yes! Override the test configuration:

```typescript
export default preset('my-project', {
  extends: [essentials],
  override: {
    assets: {
      'vitest.config.ts': null, // Remove Vitest
      'jest.config.ts': {
        // Add Jest config
        testEnvironment: 'node',
      },
    },
  },
});
```

#### How do I customize TypeScript settings?

Use the variables system or override the config:

```typescript
export default preset('my-project', {
  extends: [essentials],
  override: {
    variables: {
      target: 'ES2020', // Different compilation target
    },
  },
});
```

#### Can I add additional ESLint rules?

Absolutely! Extend the generated configuration:

```typescript
export default preset('my-project', {
  extends: [essentials],
  override: {
    assets: {
      'eslint.config.ts': {
        default: [
          {
            rules: {
              'no-console': 'error',
              'prefer-const': 'error',
            },
          },
        ],
      },
    },
  },
});
```

---

## 📦 Release

`preset-essentials` provides standalone release scripts for single-package projects: `release:changelog`, `release:notes`, `release:commit`.

### Environment variables

| Variable     | Effect                                                                     |
| ------------ | -------------------------------------------------------------------------- |
| `VERSION`    | Use this version instead of computing via `git-cliff --bumped-version`.    |
| `PRERELEASE` | Inject `--prerelease <value>` into the version bump (e.g. `next`, `beta`). |

```bash
npm run release:changelog                      # auto-bumped version
VERSION=2.1.0 npm run release:changelog        # explicit
PRERELEASE=next npm run release:changelog      # prerelease
```

For monorepos, use [`@presetter/preset-monorepo`](../preset-monorepo) which orchestrates lock-step bumping across all packages.

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
