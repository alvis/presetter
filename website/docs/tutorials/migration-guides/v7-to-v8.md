---
sidebar_position: 2
title: Presetter v7 to v8 Migration
description: Complete guide for upgrading your Presetter setup from v7 to v8
---

# Migrating from Presetter v7 to v8 🚀

This guide helps you upgrade your existing Presetter v7 projects to take advantage of v8's new features and improvements.

## Overview of Changes

Presetter v8 introduces significant improvements focused on modernization and better monorepo support:

### 🎯 **Breaking Changes**
- **npm 7+ Required**: Dropped support for npm versions below 7
- **Automatic peer dependency installation**: Now handled by npm 7+ instead of Presetter

### 🆕 **New Features**
- **New preset-monorepo**: Dedicated monorepo configuration preset
- **Enhanced environment compatibility checking**
- **Vitest project names in configurations**
- **Storybook 9 integration in preset-web**
- **TailwindCSS 4 with modular imports (v8.0.2+)**
- **Improved test script organization**

### 🐛 **Key Fixes**
- **TypeScript files in hidden folders** now included correctly
- **Better type checking** for test files
- **Improved project root handling**
- **ESLint caching** enabled by default for performance (v8.0.2+)
- **TailwindCSS import resolution** fixes for Storybook (v8.0.3+)
- **Node.js engine warnings** for better compatibility (v8.0.2+)

## Prerequisites

Before starting the migration:

- **Node.js 18+** and **npm 7+** installed
- Working Presetter v7 project
- Git repository with clean working tree

## Migration Steps

### Step 1: Update Package Manager

First, ensure you're using npm 7 or later:

```bash
# Check your npm version
npm --version

# Upgrade npm if needed
npm install -g npm@latest

# Verify version is 7.0.0 or higher
npm --version
```

### Step 2: Update Presetter Dependencies

Update all Presetter packages to v8:

```bash
# Update core Presetter to latest v8.x
npm install --save-dev presetter@^8.0.3

# Update existing presets (update as needed for your project)
npm install --save-dev presetter-preset-essentials@^8.0.3
npm install --save-dev presetter-preset-esm@^8.0.3
npm install --save-dev presetter-preset-react@^8.0.3
npm install --save-dev presetter-preset-hybrid@^8.0.3
npm install --save-dev presetter-preset-web@^8.0.3

# For monorepos, add the new preset
npm install --save-dev presetter-preset-monorepo@^8.0.3
```

### Step 3: Remove Manual Peer Dependencies (Optional)

Since npm 7+ now handles peer dependencies automatically, you can remove manually installed peer dependencies that were previously required:

```bash
# These were commonly manually installed in v7
npm uninstall typescript @types/node eslint prettier vitest
```

Don't worry - npm will automatically reinstall them as peer dependencies when you run the bootstrap command.

### Step 4: Update Configuration (if using monorepo)

If you're working with a monorepo, consider switching to the new `presetter-preset-monorepo`:

```typescript title="presetter.config.ts"
// Before (v7)
export { default } from 'presetter-preset-essentials';

// After (v8) - for monorepos
export { default } from 'presetter-preset-monorepo';
```

### Step 5: Re-bootstrap Your Project

Regenerate configuration files with v8 improvements:

```bash
# Clean old configurations
rm -f tsconfig.json eslint.config.ts vitest.config.ts

# Bootstrap with v8
npm run bootstrap
```

### Step 6: Update Scripts (if needed)

Check if any new scripts were added to your package.json:

```json title="package.json"
{
  "scripts": {
    // New in v8 - enhanced test organization
    "test:unit": "vitest run unit",
    "test:integration": "vitest run integration", 
    "test:e2e": "vitest run e2e"
  }
}
```

### Step 7: Verify Everything Works

Test your upgraded setup:

```bash
# Install dependencies
npm install

# Run type checking
npm run typecheck

# Run linting
npm run lint

# Run tests
npm run test

# Build project
npm run build
```

## Preset-Specific Updates

### preset-web Changes

If you're using `presetter-preset-web`, you now get enhanced Storybook integration and TailwindCSS improvements:

```bash
# New Storybook scripts available
npm run storybook        # Start Storybook dev server
npm run build-storybook  # Build static Storybook
```

**New in v8.0.2+:**
- **TailwindCSS 4** with modular import resolution
- **Recursive import detection** for TailwindCSS usage
- **Enhanced linting** with named ESLint rules

**Fixed in v8.0.3+:**
- **Storybook CSS loading** issues resolved
- **Import resolution** improvements for relative paths

### preset-monorepo (New!)

For monorepo setups, the new preset provides:

- Optimized configurations for workspace management
- Better handling of inter-package dependencies
- Enhanced build coordination across packages

```typescript title="presetter.config.ts"
// Monorepo configuration
export { default } from 'presetter-preset-monorepo';
```

## Configuration Changes

### Vitest Configuration

Vitest configs now include project names for better organization:

```typescript title="vitest.config.ts"
// Generated automatically in v8
export default defineConfig({
  test: {
    name: 'my-project', // Automatically set from package.json
    // ... other config
  }
});
```

### TypeScript Configuration

Improved handling of files in hidden folders:

```json title="tsconfig.json"
{
  "include": [
    "src/**/*",
    "./**/*.ts",  // Now properly includes hidden folder TypeScript files
    "./**/*.tsx"
  ]
}
```

## Troubleshooting

### Issue: npm version too old

**Problem:** Getting errors about peer dependencies not being installed

**Solution:** Upgrade to npm 7+:
```bash
npm install -g npm@latest
```

### Issue: Missing peer dependencies

**Problem:** Development tools not found after upgrade

**Solution:** Re-run bootstrap to let npm 7+ handle peer dependencies:
```bash
npm run bootstrap
```

### Issue: Configuration conflicts

**Problem:** Old configuration files conflicting with new ones

**Solution:** Clean slate approach:
```bash
# Remove old configs
rm -f tsconfig.json eslint.config.* vitest.config.ts prettier.config.*

# Regenerate everything
npm run bootstrap
```

### Issue: Build failures in monorepo

**Problem:** Build coordination issues in monorepo setups

**Solution:** Consider switching to the new monorepo preset:
```typescript title="presetter.config.ts"
export { default } from 'presetter-preset-monorepo';
```

## Performance Improvements

### ESLint Caching

v8 enables ESLint caching by default for faster linting:

```bash
# Caching is now automatic - clean cache if needed
npx eslint --cache-location .eslintcache --cache
```

### Better Build Optimization

Enhanced TypeScript target configuration for optimal output:

- Automatic target detection based on Node.js version
- Improved tree-shaking for smaller bundles
- Better source map generation

## Testing v8 Features

### Environment Compatibility

v8 includes automatic environment compatibility checking:

```bash
# This now validates your environment automatically
npm run bootstrap
```

### Enhanced Test Organization

New test script organization makes testing more granular:

```bash
# Run different test types
npm run test:unit         # Unit tests only
npm run test:integration  # Integration tests only
npm run test:e2e         # End-to-end tests only
npm run test:watch       # Watch mode for development
```

## Post-Migration Checklist

After completing the migration:

- [ ] ✅ All dependencies updated to v8
- [ ] ✅ npm version 7+ confirmed
- [ ] ✅ Bootstrap completed successfully
- [ ] ✅ All tests pass
- [ ] ✅ Build completes without errors
- [ ] ✅ Linting passes
- [ ] ✅ New features tested (if applicable)
- [ ] ✅ CI/CD pipeline updated (if needed)

## Rollback Plan

If you encounter issues and need to rollback:

```bash
# Revert to v7 versions
npm install --save-dev presetter@^7.3.0
npm install --save-dev presetter-preset-essentials@^7.3.0
# ... other presets

# Restore v7 configurations
git checkout HEAD~1 -- tsconfig.json eslint.config.ts vitest.config.ts

# Re-bootstrap with v7
npm run bootstrap
```

## Benefits After Migration

Once migration is complete, you'll enjoy:

- 🚀 **Faster setup**: npm 7+ handles peer dependencies automatically
- 🏗️ **Better monorepo support**: New preset-monorepo for complex projects
- 🧪 **Enhanced testing**: Better test organization and project naming
- 📱 **Storybook integration**: Built-in Storybook support for web projects
- ⚡ **Performance improvements**: ESLint caching and build optimizations

## Getting Help

If you encounter issues during migration:

- 📚 [GitHub Issues](https://github.com/alvis/presetter/issues) - Report bugs or ask questions
- 💬 [GitHub Discussions](https://github.com/alvis/presetter/discussions) - Community support
- 🔧 [Advanced Topics](/docs/advanced) - Troubleshooting guides

---

**Migration Time:** 15-30 minutes for most projects  
**Difficulty:** Easy to Moderate  
**Breaking Changes:** Minimal (mainly npm version requirement)