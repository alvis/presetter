---
sidebar_position: 2
title: '@presetter/preset-essentials'
---

# @presetter/preset-essentials

🏄🏻 _A collection of opinionated configurations for a TypeScript project_

The **essentials preset** is the foundation of the Presetter ecosystem, providing all the core development tools and configurations you need to build modern TypeScript projects. It's designed to get you from zero to productive development in seconds.

## 🎯 Purpose

**@presetter/preset-essentials** eliminates the tedious setup of TypeScript development environments by providing:

- **Instant productivity**: Start coding immediately without configuration overhead
- **Best practices**: Pre-configured tools following community standards
- **Type safety**: Strict TypeScript configuration for robust development
- **Quality assurance**: Automated linting, formatting, and testing
- **Developer experience**: Git hooks, hot reloading, and helpful scripts

## 🚀 Features

### Core Development Tools
- **🛠️ TypeScript 6** - Type-safe JavaScript with a strict configuration targeting **ES2024**, including `noUncheckedIndexedAccess` for safer indexed access
- **🚨 ESLint 9** - Code quality enforcement with TypeScript support
- **💅 Prettier 3** - Consistent code formatting
- **🧪 Vitest 4** - Fast unit testing with coverage reporting
- **💰 git-cliff** - Automated semantic versioning and changelogs
- **🔧 zx** - Cross-platform shell scripting

### Quality Assurance
- **Git hooks** with Husky for pre-commit quality checks
- **Lint-staged** for efficient linting of changed files
- **Coverage reporting** with comprehensive test metrics
- **Automatic .gitignore** integration with ESLint
- **Nearest ESLint config** lookup for package-level overrides

### Developer Experience
- **Hot reloading** for development workflow
- **Watch mode** for continuous testing
- **Cross-platform** script compatibility
- **Path mapping** support for clean imports

## 💫 Installation

### Quick Start

```bash
# Install the preset
npm install --save-dev presetter @presetter/preset-essentials

# Create configuration
echo "export { default } from '@presetter/preset-essentials';" > presetter.config.ts

# Bootstrap your project
npm install
```

### Package.json Setup

Add these scripts to your `package.json`:

```json
{
  "type": "module",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "prepare": "run prepare",
    "build": "run build",
    "lint": "run lint --",
    "test": "run test --",
    "test:coverage": "run test:coverage --",
    "test:watch": "run test:watch --",
    "typecheck": "run typecheck --"
  }
}
```

## 📋 Configuration Files Generated

After bootstrapping, your project will include:

- **`tsconfig.json`** - TypeScript compiler configuration
- **`tsconfig.build.json`** - Production build configuration
- **`eslint.config.ts`** - ESLint rules and plugins
- **`.prettierrc.json`** - Code formatting preferences
- **`vitest.config.ts`** - Test runner configuration
- **`.lintstagedrc.json`** - Pre-commit hook configuration
- **`.npmignore`** - NPM packaging exclusions
- **`.husky/`** - Git hook scripts

## 📁 Project Structure

The preset expects this project structure:

```
(root)
 ├─ .git
 ├─ .husky/
 ├─ .lintstagedrc.json
 ├─ .npmignore
 ├─ .prettierrc.json
 ├─ presetter.config.ts
 ├─ node_modules/
 ├─ src/
 │   ├─ index.ts          # Main entry point
 │   └─ (other files)
 ├─ spec/
 │   └─ *.spec.ts         # Test files
 ├─ package.json
 ├─ eslint.config.ts
 ├─ tsconfig.json
 ├─ tsconfig.build.json
 └─ vitest.config.ts
```

## 📋 Available Scripts

### Build & Development

#### `run build`
Transpile TypeScript source code and replace any mapped paths.

```bash
npm run build
# or
run build
```

#### `run clean`
Clean up any previously transpiled code.

```bash
run clean
```

#### `run start`
Watch source files and rebuild on change (development service).

```bash
run start
```

### Testing

#### `run test`
Run all tests with Vitest.

```bash
run test

# With options
run test -- --watch
run test -- --ui
```

#### `run test:unit`
Run unit tests only (files matching `*:UNIT` pattern).

```bash
run test:unit
```

#### `run test:int`
Run integration tests only (files matching `*:INT` pattern).

```bash
run test:int
```

#### `run test:e2e`
Run end-to-end tests only (files matching `*:E2E` pattern).

```bash
run test:e2e
```

#### `run typecheck`
Run TypeScript type checking without emitting files.

```bash
run typecheck
```

#### `run test:watch`
Continuously run unit tests whenever source code changes.

```bash
run test:watch
```

#### `run test:coverage`
Run all tests with coverage reporting.

```bash
run test:coverage
```

### Release Management

#### `run release`
Bump the version and generate the changelog with [git-cliff](https://git-cliff.org), then commit and tag the release.

```bash
run release

# With a prerelease tag
PRERELEASE=alpha run release
```

## 🔩 Customization

### Basic Customization

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';

export default preset('my-project', {
  extends: [essentials],
  variables: {
    source: 'lib',        // Change from default 'src'
    output: 'dist',       // Change from default 'lib'
    test: 'tests',        // Change from default 'spec'
    target: 'ES2020'      // Change TypeScript target
  }
});
```

### Advanced Configuration Override

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';

export default preset('custom-project', {
  extends: [essentials],
  override: {
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          strict: false,           // Relax TypeScript strictness
          experimentalDecorators: true  // Enable decorators
        }
      },
      'eslint.config.ts': (current) => ({
        ...current,
        rules: {
          ...current.rules,
          'no-console': 'warn',    // Allow console with warning
          '@typescript-eslint/no-explicit-any': 'off'  // Allow any type
        }
      }),
      'vitest.config.ts': {
        test: {
          globals: true,           // Enable global test functions
          environment: 'jsdom'     // Use jsdom for DOM testing
        }
      }
    }
  }
});
```

### Combining with Other Presets

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';
import strict from '@presetter/preset-strict';

export default preset('production-ready', {
  extends: [essentials, strict],  // Add strict quality rules
  variables: {
    target: 'ES2022'
  }
});
```

## 💻 Included Dependencies

### Core Tools
- `typescript` (^6.0.0) - TypeScript compiler
- `eslint` (^9.18.0) - Linting utility
- `prettier` (^3.0.0) - Code formatter
- `vitest` (^4.0.0) - Test framework

### ESLint Plugins
- `typescript-eslint` (^8.0.0) - TypeScript parser and rules
- `eslint-plugin-import` - Import/export syntax checking
- `eslint-plugin-jsdoc` - JSDoc comment validation
- `@eslint-community/eslint-plugin-eslint-comments` - ESLint directive validation

### Build & Development
- `tsx` (^4.0.0) - TypeScript execution and REPL
- `tsc-alias` (^1.0.0) - Path mapping resolution
- `tsc-esm-fix` (^3.0.0) - ESM compatibility fixes
- `cross-env` (^10.0.0) - Cross-platform environment variables
- `jiti` (^2.4.0) - Runtime TypeScript and ESM support

### Quality & Tooling
- `husky` (^9.0.0) - Git hook management
- `lint-staged` (^16.0.0) - Run linters on staged files
- `git-cliff` (^2.12.0) - Version calculation and changelog generation
- `@vitest/coverage-v8` (^4.0.0) - Test coverage reporting
- `zx` (^8.0.0) - Shell scripting utilities

## 🔧 Common Use Cases

### Node.js Application

```typescript
// presetter.config.ts
export { default } from '@presetter/preset-essentials';

// package.json
{
  "type": "module",
  "main": "lib/index.js",
  "bin": {
    "my-cli": "lib/cli.js"
  }
}
```

### NPM Library

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';

export default preset('my-library', {
  extends: [essentials],
  variables: {
    target: 'ES2018'  // Broader compatibility for libraries
  },
  override: {
    assets: {
      'package.json': {
        files: ['lib'],
        exports: {
          '.': {
            types: './lib/index.d.ts',
            import: './lib/index.js'
          }
        }
      }
    }
  }
});
```

### Workspace Package

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';

export default preset('workspace-package', {
  extends: [essentials],
  variables: {
    source: 'src',
    output: 'dist'
  }
});
```

## ⚡ Performance Tips

### Faster Builds
- Use `--skipLibCheck` in TypeScript for faster compilation
- Enable `incremental` compilation for large projects
- Consider `--transpileOnly` for development builds

### Efficient Testing
- Use test patterns to run specific test suites
- Enable coverage only when needed
- Utilize watch mode for development

### Optimized Linting
- Use lint-staged to lint only changed files
- Configure ESLint cache for faster subsequent runs
- Set appropriate ignore patterns

## 🐛 Troubleshooting

### Common Issues

**TypeScript compilation errors:**
```bash
# Check TypeScript configuration
cat tsconfig.json

# Verify target compatibility
npx tsc --showConfig
```

**ESLint configuration conflicts:**
```bash
# Test ESLint configuration
npx eslint --print-config src/index.ts

# Debug rules
npx eslint src/index.ts --debug
```

**Test failures:**
```bash
# Run tests with verbose output
run test -- --reporter=verbose

# Check Vitest configuration
cat vitest.config.ts
```

### Performance Issues

**Slow builds:**
- Enable TypeScript incremental compilation
- Use `--skipLibCheck` for faster compilation
- Consider excluding large dependencies from type checking

**Slow tests:**
- Use test patterns to run specific suites
- Enable test parallelization
- Mock expensive operations

## 🔗 Integration Examples

### CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

### VS Code Integration

```json
// .vscode/settings.json
{
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "eslint.format.enable": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 🔄 Migration Guide

### From Manual Setup

```bash
# 1. Remove existing tool configurations
rm .eslintrc.* prettier.config.* jest.config.* tsconfig.json

# 2. Install presetter
npm install --save-dev presetter @presetter/preset-essentials

# 3. Create preset configuration
echo "export { default } from '@presetter/preset-essentials';" > presetter.config.ts

# 4. Bootstrap
npm install
```

### From Create React App

```bash
# 1. Eject first (if needed)
npm run eject

# 2. Install presetter
npm install --save-dev presetter @presetter/preset-essentials

# 3. Create configuration
echo "export { default } from '@presetter/preset-essentials';" > presetter.config.ts

# 4. Bootstrap and clean up
npm install
rm -rf config/ scripts/  # Remove CRA configs
```

## 🕰️ Next Steps

After setting up the essentials preset:

1. **Choose module system**: Add [ESM](../module-systems/esm), [CJS](../module-systems/cjs), or [Hybrid](../module-systems/hybrid)
2. **Enhance quality**: Consider [Strict preset](../quality/strict) for additional rules
3. **Add framework support**: Integrate [React](../frameworks/react) or [Web](../frameworks/web) tools
4. **Bundle for distribution**: Use [Rollup preset](../bundling/rollup) for libraries

## 📚 Related Resources

- [Configuration Guide](/docs/introduction/configuration) - Deep dive into customization
- [CLI Reference](/docs/cli-reference) - Command usage and options
- [Module System Presets](../module-systems) - ESM, CJS, and Hybrid configurations
- [GitHub Repository](https://github.com/alvis/presetter) - Source code and issues
