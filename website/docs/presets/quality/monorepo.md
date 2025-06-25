---
sidebar_position: 2
title: presetter-preset-monorepo
---

# presetter-preset-monorepo

**New in v8.0.0** - A comprehensive preset designed specifically for TypeScript monorepos with intelligent workspace management and unified tooling.

## Purpose

This preset solves the "monorepo configuration hell" problem by providing:

- 🏗️ **Zero configuration duplication** across packages
- 🧪 **Unified testing** with workspace-based test running
- 📁 **Type-safe monorepo** with TypeScript project references
- ⚡ **Instant package setup** - new packages work immediately
- 🔄 **Always synchronized** configurations across the entire workspace

## Key Features

### Context-Aware Configuration

The preset intelligently adapts based on where it's applied:

- **Repository Root**: Generates workspace-level configurations with project references
- **Individual Packages**: Minimal configuration that inherits from root

### Unified Tooling

Built on top of two powerful presets:
- `presetter-preset-esm` - Modern ES modules configuration
- `presetter-preset-strict` - Enhanced linting and type safety

### Workspace Testing

Aggregated test running across all packages with:
- Unified coverage reporting
- Multi-format output (text, HTML, JSON, LCOV)
- 100% coverage thresholds
- Intelligent test discovery

## Installation

### Repository Setup

```bash
# Install at repository root
npm install --save-dev presetter presetter-preset-monorepo

# Create configuration
echo "export { default } from 'presetter-preset-monorepo';" > presetter.config.ts

# Bootstrap entire monorepo
npx presetter bootstrap --projects . --projects packages/*/
```

### Package Manager Integration

Works seamlessly with all major package managers:

```bash
# npm workspaces
npm install --save-dev presetter presetter-preset-monorepo

# pnpm workspaces  
pnpm add -D presetter presetter-preset-monorepo

# yarn workspaces
yarn add --dev presetter presetter-preset-monorepo
```

## Configuration

### Basic Setup

```typescript title="presetter.config.ts (root)"
// Simple monorepo configuration
export { default } from 'presetter-preset-monorepo';
```

### Advanced Customization

```typescript title="presetter.config.ts (root)"
import monorepo from 'presetter-preset-monorepo';

export default {
  ...monorepo,
  // Override test patterns
  override: {
    'vitest.config.ts': {
      test: {
        workspace: [
          'packages/*/vitest.config.ts',
          'apps/*/vitest.config.ts',
        ],
        coverage: {
          thresholds: {
            global: {
              branches: 90,  // Relax from 100%
              functions: 95,
              lines: 95,
              statements: 95,
            },
          },
        },
      },
    },
  },
};
```

### Package-Level Customization

```typescript title="packages/my-package/presetter.config.ts"
import base from '../../presetter.config.ts';

export default {
  ...base,
  // Package-specific overrides
  override: {
    'vitest.config.ts': {
      test: {
        // Package-specific test configuration
        setupFiles: ['./test/setup.ts'],
        environment: 'jsdom', // For packages that need DOM
      },
    },
  },
};
```

## Generated Files

### Repository Root

When applied to the monorepo root, generates:

#### `eslint.config.ts`
```typescript
// Monorepo-wide linting configuration
export default [
  {
    ignores: [
      '**/lib/**',      // Build outputs
      '**/types/**',    // Generated types  
      '**/generated/**', // Generated files
      '**/node_modules/**',
    ],
  },
  // ... ESLint rules from preset-strict
];
```

#### `tsconfig.json`
```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler", 
    "target": "ES2022",
    "baseUrl": "."
  },
  "files": [],
  "references": []  // Manually add package references
}
```

#### `vitest.config.ts`
```typescript
// Workspace test runner
export default defineConfig({
  test: {
    workspace: ['*/*/vitest.config{,.int,.e2e}.ts'],
    coverage: {
      thresholds: {
        global: {
          branches: 100,
          functions: 100, 
          lines: 100,
          statements: 100,
        },
      },
      reporter: ['text', 'html', 'clover', 'json', 'lcov'],
      excludeAfterRemap: true,
    },
  },
});
```

### Individual Packages

For packages, generates minimal configuration that inherits from root:

- **Removes** `.prettierrc.json` (uses root configuration)
- **Inherits** all other configurations from base presets
- **Maintains** package-specific `package.json` scripts

## Usage Examples

### Development Workflow

```bash
# Root level - affects entire monorepo
npm run typecheck    # Check types across all packages
npm run lint         # Lint entire workspace
npm run test         # Run all tests with unified coverage
npm run format       # Format all files

# Package level
cd packages/my-package
npm run build        # Build this package
npm run test:watch   # Watch tests for this package
```

### Testing Strategy

```bash
# Run all tests
npm run test

# Run tests for specific packages
npm run test -- packages/core

# Run with coverage
npm run coverage

# Integration tests only
npm run test:integration

# End-to-end tests only  
npm run test:e2e
```

### CI/CD Integration

```yaml title=".github/workflows/ci.yml"
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      
      - run: npm ci
      - run: npm run bootstrap
      - run: npm run typecheck
      - run: npm run lint  
      - run: npm run test
      - run: npm run build
```

## Best Practices

### Repository Structure

```
my-monorepo/
├── packages/
│   ├── core/           # Core package
│   ├── utils/          # Utility package
│   └── components/     # UI components
├── apps/
│   ├── web/           # Web application
│   └── api/           # API server
├── tools/
│   └── build-config/  # Shared build tools
├── presetter.config.ts
├── package.json
└── tsconfig.json
```

### TypeScript Project References

Manually configure TypeScript project references for optimal type checking:

```json title="tsconfig.json (root)"
{
  "files": [],
  "references": [
    { "path": "./packages/core" },
    { "path": "./packages/utils" },
    { "path": "./packages/components" },
    { "path": "./apps/web" },
    { "path": "./apps/api" }
  ]
}
```

### Package Dependencies

Establish clear dependency hierarchies:

```json title="packages/components/package.json"
{
  "dependencies": {
    "@my-org/core": "workspace:*",
    "@my-org/utils": "workspace:*"
  }
}
```

### Test Organization

Organize tests by type across the workspace:

```
packages/core/
├── src/
│   └── index.ts
├── spec/
│   ├── unit/          # Unit tests
│   ├── integration/   # Integration tests
│   └── e2e/          # End-to-end tests
├── vitest.config.ts   # Package test config
└── package.json
```

## Variables

Inherits configuration variables from `presetter-preset-esm`:

| Variable | Default | Description |
|----------|---------|-------------|
| `source` | `"src"` | Source code directory |
| `output` | `"lib"` | Build output directory |
| `test` | `"spec"` | Test files directory |
| `types` | `"types"` | TypeScript declarations |
| `generated` | `"generated"` | Generated files directory |
| `target` | `"ES2022"` | TypeScript compilation target |

## Troubleshooting

### Issue: Package not found in workspace

**Problem:** New package not detected by workspace tools

**Solution:** Re-run bootstrap to include new packages:
```bash
npx presetter bootstrap --projects . --projects packages/*/
```

### Issue: Type errors across packages

**Problem:** TypeScript can't resolve cross-package types

**Solution:** Add package references to root tsconfig.json:
```json
{
  "references": [
    { "path": "./packages/new-package" }
  ]
}
```

### Issue: Test coverage issues

**Problem:** Coverage reporting incorrect for workspace

**Solution:** Ensure all packages have proper test configurations:
```bash
# Verify workspace test pattern
npm run test -- --reporter=verbose
```

### Issue: Linting configuration conflicts

**Problem:** Individual packages have conflicting ESLint rules

**Solution:** Remove package-level ESLint configs and use workspace configuration:
```bash
# Remove conflicting configs
find packages -name "eslint.config.*" -delete
find packages -name ".eslintrc.*" -delete
```

## Migration from Other Setups

### From Lerna

```bash
# Remove Lerna configuration
rm lerna.json

# Install preset-monorepo
npm install --save-dev presetter presetter-preset-monorepo

# Bootstrap workspace
npx presetter bootstrap --projects . --projects packages/*/
```

### From Nx

```bash
# Remove Nx configuration
rm -rf nx.json .nxignore tools/

# Install preset-monorepo
npm install --save-dev presetter presetter-preset-monorepo

# Adapt workspace structure
npx presetter bootstrap --projects . --projects packages/*/
```

### From Manual Setup

```bash
# Clean existing configurations
find . -name "tsconfig.json" -not -path "./node_modules/*" -delete
find . -name "eslint.config.*" -not -path "./node_modules/*" -delete
find . -name "vitest.config.*" -not -path "./node_modules/*" -delete

# Install and bootstrap
npm install --save-dev presetter presetter-preset-monorepo
npx presetter bootstrap --projects . --projects packages/*/
```

## Next Steps

- **New packages**: Simply create package directory and re-run bootstrap
- **Custom configurations**: Use the override system for package-specific needs
- **Advanced features**: Explore preset composition for complex requirements
- **Performance**: Consider incremental builds and selective testing for large workspaces

---

The preset-monorepo is perfect for teams managing complex TypeScript monorepos who want unified tooling without configuration overhead.