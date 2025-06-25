---
sidebar_position: 4
title: Monorepo Setup
description: Configure a multi-package workspace with shared Presetter configurations
---

# Monorepo Setup 🏢

Learn how to set up a monorepo with Presetter, sharing configurations across multiple packages while allowing individual customizations. Perfect for organizations with multiple related projects.

## Overview

This tutorial covers:
- Setting up a pnpm workspace
- Configuring shared Presetter settings
- Managing per-package configurations
- Cross-package dependencies
- Build orchestration

## Prerequisites

- **Node.js 18+** and **pnpm** installed
- Understanding of package workspaces
- Basic familiarity with monorepo concepts

## Step 1: Create Monorepo Structure

Initialize your monorepo workspace:

```bash
mkdir my-awesome-monorepo
cd my-awesome-monorepo

# Initialize root package.json
pnpm init

# Create workspace structure
mkdir packages apps tools
```

Create workspace configuration:

```yaml title="pnpm-workspace.yaml"
packages:
  - "packages/*"
  - "apps/*"
  - "tools/*"
```

## Step 2: Configure Root Presetter Setup

Install Presetter at the root level:

```bash
# Install Presetter and monorepo preset
pnpm add -D presetter presetter-preset-monorepo

# Bootstrap root configuration
presetter bootstrap
```

Configure the root Presetter setup:

```typescript title="presetter.config.ts"
import monorepo from 'presetter-preset-monorepo';
import { preset } from 'presetter-types';

export default preset('my-monorepo', {
  extends: [monorepo],
  variables: {
    // Shared variables for all packages
    nodeVersion: '18',
    source: 'src',
    output: 'lib'
  },
  
  override: {
    assets: {
      // Root-level configurations
      '.gitignore': [
        'node_modules/',
        '*/node_modules/',
        'dist/',
        'lib/',
        'build/',
        'coverage/',
        '.env.local',
        '.DS_Store'
      ]
    }
  }
});
```

## Step 3: Create Package Templates

### Library Package Template

Create a shared library package:

```bash
mkdir packages/shared-utils
cd packages/shared-utils
pnpm init
```

```json title="packages/shared-utils/package.json"
{
  "name": "@myorg/shared-utils",
  "version": "1.0.0",
  "type": "module",
  "main": "./lib/index.js",
  "types": "./lib/index.d.ts",
  "exports": {
    ".": {
      "import": "./lib/index.js",
      "types": "./lib/index.d.ts"
    }
  },
  "files": ["lib/"],
  "scripts": {
    "build": "run build",
    "clean": "run clean",
    "test": "run test",
    "typecheck": "run typecheck"
  },
  "devDependencies": {
    "presetter": "workspace:*",
    "presetter-preset-esm": "workspace:*"
  }
}
```

```typescript title="packages/shared-utils/presetter.config.ts"
// Simple preset usage for most packages
export { default } from 'presetter-preset-esm';
```

```typescript title="packages/shared-utils/src/index.ts"
export interface Logger {
  info(message: string): void;
  error(message: string): void;
  warn(message: string): void;
}

export function createLogger(prefix: string): Logger {
  return {
    info: (message) => console.log(`[${prefix}] INFO: ${message}`),
    error: (message) => console.error(`[${prefix}] ERROR: ${message}`),
    warn: (message) => console.warn(`[${prefix}] WARN: ${message}`)
  };
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
```

### React App Package

Create a React application:

```bash
mkdir apps/web-app
cd apps/web-app
pnpm init
```

```json title="apps/web-app/package.json"
{
  "name": "@myorg/web-app",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "run dev",
    "build": "run build",
    "preview": "run preview",
    "test": "run test",
    "lint": "run lint"
  },
  "dependencies": {
    "@myorg/shared-utils": "workspace:*",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "presetter": "workspace:*",
    "presetter-preset-react": "workspace:*",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0"
  }
}
```

```typescript title="apps/web-app/presetter.config.ts"
import react from 'presetter-preset-react';
import { preset } from 'presetter-types';

export default preset('web-app', {
  extends: [react],
  variables: {
    source: 'src',
    output: 'dist'
  },
  
  override: {
    assets: {
      // Custom Vite configuration for the app
      'vite.config.ts': (current) => ({
        ...current,
        server: {
          port: 3000,
          open: true
        },
        build: {
          sourcemap: true
        }
      })
    }
  }
});
```

```tsx title="apps/web-app/src/App.tsx"
import React from 'react';
import { createLogger, formatDate } from '@myorg/shared-utils';

const logger = createLogger('WebApp');

function App() {
  React.useEffect(() => {
    logger.info('App mounted');
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Awesome Web App</h1>
      <p>Today is: {formatDate(new Date())}</p>
    </div>
  );
}

export default App;
```

## Step 4: Configure Cross-Package Dependencies

### Update Root Package.json

```json title="package.json"
{
  "name": "@myorg/monorepo",
  "private": true,
  "scripts": {
    "build": "pnpm -r run build",
    "test": "pnpm -r run test",
    "lint": "pnpm -r run lint",
    "clean": "pnpm -r run clean",
    "dev": "pnpm --parallel -r run dev",
    "typecheck": "pnpm -r run typecheck"
  },
  "devDependencies": {
    "presetter": "^8.0.0",
    "presetter-preset-monorepo": "^8.0.0"
  }
}
```

### Bootstrap All Packages

From the root directory:

```bash
# Install dependencies for all packages
pnpm install

# Bootstrap Presetter in all packages
pnpm -r exec presetter bootstrap
```

## Step 5: Build Orchestration

### Sequential Build (Dependencies First)

Create a build script that respects dependency order:

```bash title="scripts/build.sh"
#!/bin/bash
set -e

echo "🏗️  Building monorepo packages..."

# Build shared utilities first
echo "📦 Building shared-utils..."
cd packages/shared-utils
pnpm run build
cd ../..

# Build applications that depend on utilities
echo "🌐 Building web-app..."
cd apps/web-app
pnpm run build
cd ../..

echo "✅ All packages built successfully!"
```

### Parallel Development

For development, run multiple packages in parallel:

```json title="package.json"
{
  "scripts": {
    "dev": "concurrently \"pnpm --filter @myorg/shared-utils run watch\" \"pnpm --filter @myorg/web-app run dev\"",
    "dev:utils": "pnpm --filter @myorg/shared-utils run watch",
    "dev:web": "pnpm --filter @myorg/web-app run dev"
  },
  "devDependencies": {
    "concurrently": "^8.0.0"
  }
}
```

## Step 6: Shared Configuration Management

### ESLint Configuration Sharing

Create a shared ESLint config package:

```bash
mkdir packages/eslint-config
cd packages/eslint-config
pnpm init
```

```json title="packages/eslint-config/package.json"
{
  "name": "@myorg/eslint-config",
  "version": "1.0.0",
  "main": "index.js",
  "files": ["index.js"],
  "peerDependencies": {
    "eslint": "^8.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0"
  }
}
```

```javascript title="packages/eslint-config/index.js"
module.exports = {
  extends: [
    '@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    // Shared organization rules
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn'
  }
};
```

### Use Shared Config in Packages

```typescript title="packages/shared-utils/presetter.config.ts"
import presetEsm from 'presetter-preset-esm';

export default presetEsm({
  assets: {
    '.eslintrc.json': {
      extends: ['@myorg/eslint-config']
    }
  }
});
```

## Step 7: Testing Strategy

### Jest Configuration for Monorepo

```typescript title="jest.config.ts"
import type { Config } from 'jest';

const config: Config = {
  projects: [
    '<rootDir>/packages/*/jest.config.ts',
    '<rootDir>/apps/*/jest.config.ts'
  ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'packages/*/src/**/*.{ts,tsx}',
    'apps/*/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/*.test.{ts,tsx}'
  ]
};

export default config;
```

### Package-Specific Tests

```typescript title="packages/shared-utils/jest.config.ts"
import type { Config } from 'jest';

const config: Config = {
  displayName: 'shared-utils',
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts']
};

export default config;
```

## Step 8: Development Workflow

### Quick Commands

Add convenience scripts to your shell:

```bash title="~/.zshrc or ~/.bashrc"
# Monorepo helpers
alias repo="cd /path/to/my-awesome-monorepo"
alias build-all="pnpm run build"
alias test-all="pnpm run test"
alias dev-web="pnpm --filter @myorg/web-app run dev"
```

### VS Code Workspace

```json title=".vscode/settings.json"
{
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "typescript.suggest.includeCompletionsForModuleExports": true,
  "eslint.workingDirectories": [
    "packages/shared-utils",
    "apps/web-app"
  ]
}
```

## Step 9: CI/CD Integration

### GitHub Actions Example

```yaml title=".github/workflows/ci.yml"
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'pnpm'
      
      - run: pnpm install --frozen-lockfile
      - run: pnpm run typecheck
      - run: pnpm run lint
      - run: pnpm run test
      - run: pnpm run build
```

## Best Practices

### 1. **Dependency Management**
- Use `workspace:*` for internal dependencies
- Pin external dependencies to specific versions
- Regular dependency updates across all packages

### 2. **Build Strategy**
- Build shared libraries first
- Use incremental builds when possible
- Cache build artifacts in CI

### 3. **Code Sharing**
- Extract common utilities to shared packages
- Use TypeScript path mapping for cleaner imports
- Share ESLint, Prettier configs

### 4. **Testing**
- Test packages in isolation
- Integration tests for cross-package functionality
- Shared test utilities

## Troubleshooting

### Issue: Import Resolution Fails
**Problem:** Can't import from workspace packages
**Solution:** Ensure proper TypeScript configuration:

```typescript title="tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@myorg/*": ["packages/*/src"]
    }
  }
}
```

### Issue: Build Order Dependencies
**Problem:** Builds fail due to dependency order
**Solution:** Use pnpm's filtering and topological sorting:

```bash
# Build in dependency order
pnpm -r --filter="...@myorg/web-app" run build
```

### Issue: Hot Reload Not Working
**Problem:** Changes in shared packages don't trigger reload
**Solution:** Set up proper watch mode with linking:

```json title="packages/shared-utils/package.json"
{
  "scripts": {
    "watch": "tsc --watch --preserveWatchOutput"
  }
}
```

## Next Steps

- [Custom Preset Creation](./custom-presets.md) - Build organization-specific presets
- [API Documentation](../api/) - TypeScript API reference
- [Advanced Topics](../advanced/) - Performance and optimization

---

**Setup Time:** 30-45 minutes  
**Difficulty:** Advanced  
**Prerequisites:** TypeScript, package workspaces, build tools