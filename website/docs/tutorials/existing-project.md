---
sidebar_position: 3
title: Migrating Existing Projects
description: Step-by-step guide to convert existing projects to use Presetter configurations
---

# Migrating Existing Projects 🔄

Learn how to migrate your existing TypeScript, React, or Node.js project to Presetter. This guide helps you transition smoothly while preserving your custom configurations.

## Before You Start

### Backup Your Project

```bash
# Create a backup branch
git checkout -b backup-before-presetter
git commit -am "Backup before migrating to Presetter"
git checkout main
```

### Assess Your Current Setup

Take inventory of your existing configurations:

```bash
# List configuration files
ls -la | grep -E "\.(json|js|ts|yaml|yml)$"
```

Common files you might have:

- `tsconfig.json`
- `.eslintrc.*`
- `prettier.config.*`
- `jest.config.*`
- `rollup.config.*`
- `webpack.config.*`

## Migration Strategy

### Option A: Clean Migration (Recommended)

Replace existing configurations entirely with Presetter-managed ones.

### Option B: Gradual Migration

Keep some existing configs and selectively adopt Presetter for others.

## Step 1: Choose the Stack

Choose `@presetter/preset-esm` for ES module libraries, add `@presetter/preset-react` for React tooling, or use `@presetter/preset-monorepo` for a monorepo. Back up configs before adoption because bootstrap overwrites generated paths.

## Step 2: Backup Existing Configurations

```bash
# Create a backup directory
mkdir config-backup

# Move existing configs
mv tsconfig.json config-backup/ 2>/dev/null || true
mv .eslintrc.* config-backup/ 2>/dev/null || true
mv eslint.config.* config-backup/ 2>/dev/null || true
mv prettier.config.* config-backup/ 2>/dev/null || true
mv jest.config.* config-backup/ 2>/dev/null || true
```

## Step 3: Adopt Presetter

For a project without an existing Presetter config:

```bash
pnpm dlx presetter use @presetter/preset-esm @presetter/preset-react --package-manager=pnpm
```

`use` installs the stack and its declared setup packages, writes `presetter.config.ts`, adds missing package script delegates, and bootstraps assets. Existing scripts and package declarations are preserved; conflicts are reported. Review them before opting into `--force` for package specifications.

If you already have a custom Presetter config, install the desired presets, edit `extends`, and run `pnpm exec presetter bootstrap`. Apply any additional setup packages and delegates manually. `use` stops on differing configs; it does not append presets to them.

## Step 4: Restore Custom Configurations

### Review Generated Configuration

Review the generated config before adding local overrides. For example, a React stack composes ESM and React:

```typescript title="presetter.config.ts"
import esm from '@presetter/preset-esm';
import react from '@presetter/preset-react';
import { preset } from 'presetter';

export default preset('my-project', { extends: [esm, react] });
```

### Merge Custom Settings

If you had custom configurations, merge them into the Presetter config:

```typescript title="presetter.config.ts"
import presetReact from '@presetter/preset-react';
import { preset } from 'presetter';

export default preset('react-project', {
  extends: [presetReact],
  // Custom variables
  variables: {
    source: 'src', // Your source directory
    output: 'dist', // Your build output
  },

  // Custom asset overrides
  override: {
    assets: {
      // Extend TypeScript config
      'tsconfig.json': {
        compilerOptions: {
          // Add your custom compiler options
          paths: {
            '@/*': ['./src/*'],
            '@components/*': ['./src/components/*'],
          },
        },
      },

      // Extend ESLint flat config
      'eslint.config.ts': (current) => ({
        default: [
          ...(current?.default ?? []),
          {
            rules: {
              // Add your custom rules
              'no-console': 'warn',
              '@typescript-eslint/no-unused-vars': 'error',
            },
          },
        ],
      }),
    },
  },
});
```

## Step 5: Update Package Scripts

### Compare Scripts

Replace direct tool commands with delegates to Presetter's script runner:

```json title="package.json (before)"
{
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "lint": "eslint src/**/*.ts",
    "format": "prettier --write src/**/*.ts"
  }
}
```

```json title="package.json"
{
  "scripts": {
    "build": "run build",
    "clean": "run clean",
    "format": "run format",
    "lint": "run lint",
    "test": "run test",
    "typecheck": "run typecheck",
    "watch": "run watch"
  }
}
```

### Preserve Custom Scripts

Keep any custom scripts you need:

```json title="package.json"
{
  "scripts": {
    // Presetter script delegates
    "build": "run build",
    "test": "run test",

    // Your custom scripts
    "deploy": "npm run build && aws s3 sync dist/ s3://my-bucket",
    "storybook": "storybook dev -p 6006",
    "analyze": "npm run build && npx webpack-bundle-analyzer"
  }
}
```

## Step 6: Handle Dependencies

### Review Dependency Changes

Compare your old and new dependencies:

```bash
# Review package changes you made during migration
git diff package.json
```

### Preserve Required Setup Packages

Keep dependencies explicitly installed by `use`, including `@typescript/native`, the `typescript` API alias, Vitest, and coverage packages. They are deliberate project declarations, including libraries that resolve from the project root. Remove an older dependency only after verifying that the new stack no longer needs it.

## Step 7: Test the Migration

### 1. Type Checking

```bash
pnpm run typecheck
```

**If you get errors:**

- Check `tsconfig.json` paths configuration
- Verify all source files are included
- Compare with backup config if needed

### 2. Linting

```bash
pnpm run lint
```

**If you get linting errors:**

- Review ESLint rule differences
- Adjust rules in `presetter.config.ts` if needed
- Run `pnpm run lint --fix` for auto-fixable issues

### 3. Building

```bash
pnpm run build
```

**If build fails:**

- Check TypeScript configuration
- Verify all imports resolve correctly
- Compare build output with previous setup

### 4. Testing

```bash
pnpm run test
```

## Step 8: Fine-Tune Configuration

### Common Adjustments

**Custom TypeScript paths:**

```typescript title="presetter.config.ts"
export default preset({
  assets: {
    'tsconfig.json': {
      compilerOptions: {
        paths: {
          '@/*': ['./src/*'],
          '@utils/*': ['./src/utils/*'],
        },
      },
    },
  },
});
```

**Custom ESLint rules:**

```typescript title="presetter.config.ts"
export default preset({
  assets: {
    '.eslintrc.json': (current) => ({
      ...current,
      rules: {
        ...current.rules,
        'prefer-const': 'error',
        'no-var': 'error',
      },
    }),
  },
});
```

**Custom build output:**

```typescript title="presetter.config.ts"
export default preset({
  variables: {
    output: 'build', // Instead of default 'lib'
  },
});
```

## Migration Checklists

### ✅ React Project Checklist

- [ ] React preset installed
- [ ] JSX files lint correctly
- [ ] React hooks rules work
- [ ] Build includes JSX transform
- [ ] Dev server starts correctly

### ✅ Library Project Checklist

- [ ] TypeScript builds without errors
- [ ] Declaration files generate correctly
- [ ] Package.json exports are correct
- [ ] Tests run successfully
- [ ] Linting covers all source files

### ✅ Monorepo Checklist

- [ ] Root configuration applies to all packages
- [ ] Individual package configs work
- [ ] Cross-package imports resolve
- [ ] Build processes work for all packages

## Troubleshooting Common Issues

### Issue: Import Path Errors

**Problem:** Module resolution fails after migration
**Solution:** Update `tsconfig.json` paths:

```typescript title="presetter.config.ts"
export default preset({
  assets: {
    'tsconfig.json': {
      compilerOptions: {
        paths: {
          '@/*': ['./src/*'], // match your import patterns
        },
      },
    },
  },
});
```

### Issue: Linting Rule Conflicts

**Problem:** New ESLint rules conflict with existing code
**Solution:** Gradually adopt stricter rules:

```typescript title="presetter.config.ts"
export default preset({
  assets: {
    '.eslintrc.json': (current) => ({
      ...current,
      rules: {
        ...current.rules,
        // Temporarily downgrade problematic rules
        '@typescript-eslint/no-explicit-any': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
      },
    }),
  },
});
```

### Issue: Build Output Changes

**Problem:** Build output structure doesn't match deployment expectations
**Solution:** Customize output directory and structure:

```typescript title="presetter.config.ts"
export default preset({
  variables: {
    output: 'build', // Match your deployment scripts
  },
  assets: {
    'tsconfig.json': {
      compilerOptions: {
        outDir: 'build',
        rootDir: 'src',
      },
    },
  },
});
```

## Next Steps

After successful migration:

1. **Update CI/CD**: Ensure your deployment scripts use the new npm scripts
2. **Team Training**: Share the migration changes with your team
3. **Documentation**: Update project README with new development workflow
4. **Monitoring**: Watch for any issues in the first few development cycles

## Advanced Migration: Multiple Presets

For complex projects, you might need multiple presets:

```typescript title="presetter.config.ts"
import presetEssentials from '@presetter/preset-essentials';
import presetReact from '@presetter/preset-react';
import presetStrict from '@presetter/preset-strict';
import { preset } from 'presetter';

export default preset('my-project', {
  extends: [
    presetEssentials,
    presetReact,
    presetStrict, // Additional strict rules for code quality
  ],
});
```

---

**Migration Time:** 15-30 minutes  
**Difficulty:** Intermediate  
**Prerequisites:** Existing TypeScript/JavaScript project
