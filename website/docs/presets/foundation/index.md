---
sidebar_position: 1
title: Foundation Presets
---

# Foundation Presets

Foundation presets provide the core development tools and essential configurations that serve as the base for all other presets. These presets establish the fundamental development environment with TypeScript, testing, linting, and formatting capabilities.

## Available Foundation Presets

### [presetter-preset-essentials](./essentials)

The cornerstone preset that provides essential development tools for any TypeScript project.

**Key Features:**
- TypeScript compilation with strict configuration
- ESLint 9 with TypeScript support
- Vitest 3 for testing with coverage
- Prettier 3 for code formatting
- Git hooks with Husky and lint-staged
- Standard Version for automated releases
- Cross-platform scripting with zx

**Perfect for:**
- Starting any new TypeScript project
- Building custom preset compositions
- Projects that need basic but comprehensive tooling

## Why Start with Foundation?

Foundation presets establish the development workflow fundamentals:

### 🔧 **Essential Tooling**
Core tools every TypeScript project needs: compiler, linter, formatter, tester.

### 📊 **Best Practices**
Pre-configured with community-recommended settings and best practices.

### 🚀 **Performance Optimized**
Tools configured for optimal performance and developer experience.

### 🔗 **Extensible Base**
Designed to be extended by module system, framework, and quality presets.

## Common Usage Patterns

### Direct Usage
```typescript
// presetter.config.ts
export { default } from 'presetter-preset-essentials';
```

### As Base for Composition
```typescript
// presetter.config.ts
import { preset } from 'presetter-types';
import essentials from 'presetter-preset-essentials';
import customTools from './custom-preset';

export default preset('my-project', {
  extends: [essentials, customTools]
});
```

### With Module System
```typescript
// presetter.config.ts
import { preset } from 'presetter-types';
import essentials from 'presetter-preset-essentials';

export default preset('esm-project', {
  extends: [essentials],
  variables: {
    target: 'ES2022'
  },
  override: {
    assets: {
      'package.json': {
        type: 'module'
      }
    }
  }
});
```

## What's Included

All foundation presets include these core capabilities:

### Development Dependencies
- **TypeScript** - Type-safe JavaScript development
- **ESLint** - Code quality and style enforcement
- **Prettier** - Consistent code formatting
- **Vitest** - Fast unit testing with coverage

### Configuration Files
- `tsconfig.json` - TypeScript compiler settings
- `eslint.config.ts` - ESLint rules and plugins
- `.prettierrc.json` - Code formatting preferences
- `vitest.config.ts` - Test runner configuration
- `.gitignore` - Git ignore patterns

### NPM Scripts
- `build` - Compile TypeScript to JavaScript
- `test` - Run test suite with Vitest
- `lint` - Check code with ESLint
- `format` - Format code with Prettier
- `coverage` - Generate test coverage reports

### Quality Assurance
- Pre-commit hooks for linting and formatting
- Automated dependency vulnerability scanning
- Consistent code style enforcement

## Customization Options

Foundation presets support extensive customization through variables and overrides:

### Common Variables
```typescript
variables: {
  source: 'src',          // Source code directory
  output: 'lib',          // Build output directory
  test: 'spec',           // Test files directory
  types: 'types',         // Type definition directory
  target: 'ES2022'        // TypeScript compilation target
}
```

### Override Examples
```typescript
override: {
  assets: {
    'tsconfig.json': {
      compilerOptions: {
        strict: false,      // Relax TypeScript strictness
        skipLibCheck: true  // Skip type checking of declaration files
      }
    },
    'eslint.config.ts': (current) => ({
      ...current,
      rules: {
        ...current.rules,
        'no-console': 'warn'  // Allow console statements with warning
      }
    })
  }
}
```

## Next Steps

After setting up a foundation preset:

1. **Choose Module System**: Add [ESM](../module-systems/esm), [CJS](../module-systems/cjs), or [Hybrid](../module-systems/hybrid) support
2. **Add Framework Support**: Integrate [React](../frameworks/react) or [Web](../frameworks/web) tools
3. **Enhance Quality**: Include [Strict](../quality/strict) rules or [Monorepo](../quality/monorepo) tools
4. **Consider Bundling**: Add [Rollup](../bundling/rollup) for library packaging

## Migration Guide

### From Manual Setup
```bash
# Replace manual tool installation
npm uninstall typescript eslint prettier jest

# Install foundation preset
npm install --save-dev presetter presetter-preset-essentials

# Create configuration
echo "export { default } from 'presetter-preset-essentials';" > presetter.config.ts

# Bootstrap project
npx presetter bootstrap
```

### From Other Build Tools
```typescript
// Remove tool-specific configs
// .eslintrc.js, prettier.config.js, jest.config.js, etc.

// Replace with presetter.config.ts
export { default } from 'presetter-preset-essentials';
```

## Support and Troubleshooting

### Common Issues
- **TypeScript errors**: Check `tsconfig.json` configuration and target compatibility
- **ESLint conflicts**: Review ESLint rules and disable conflicting ones in override
- **Test failures**: Verify Vitest configuration and test file patterns

### Getting Help
- [Configuration Guide](/docs/introduction/configuration)
- [GitHub Issues](https://github.com/alvis/presetter/issues)
- [Community Discussions](https://github.com/alvis/presetter/discussions)