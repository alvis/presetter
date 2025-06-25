---
sidebar_position: 2
title: presetter bootstrap
---

# presetter bootstrap

Setup the project according to the specified preset by generating configuration files and installing dependencies.

## Synopsis

```bash
presetter bootstrap [options]
```

## Description

The `bootstrap` command is the core setup command that:

1. **Reads your preset configuration** from `presetter.config.ts`
2. **Installs development dependencies** defined by the preset
3. **Generates configuration files** (tsconfig.json, eslint.config.ts, etc.)
4. **Creates symlinks/hardlinks** to keep configs synchronized with the preset
5. **Merges scripts** from preset with your local package.json

This command is typically run:
- After installing Presetter and a preset for the first time
- When updating to a new preset version
- When adding Presetter to an existing project
- As part of your npm install lifecycle (via postinstall hooks)

## Options

### `--only <file>`

Proceed only if the specified file exists. Useful for conditional bootstrapping.

```bash
# Only bootstrap if package.json exists
presetter bootstrap --only package.json

# Only bootstrap if preset config exists
presetter bootstrap --only presetter.config.ts
```

**Use cases:**
- CI/CD pipelines that should only run in certain contexts
- Monorepo setups where not all packages need bootstrapping
- Conditional setup based on project structure

### `-p, --projects <patterns...>`

Specify glob patterns matching target project folders containing package.json.

**Default:** `["."` (current directory)

```bash
# Bootstrap multiple packages in a monorepo
presetter bootstrap --projects "packages/*" "apps/*"

# Bootstrap all packages recursively
presetter bootstrap --projects "**/package.json"

# Bootstrap specific packages
presetter bootstrap --projects "packages/core" "packages/utils"
```

**Pattern Examples:**
- `"packages/*"` - All direct subdirectories in packages/
- `"apps/*/"` - All app directories
- `"."` - Current directory only
- `"**/"` - All directories recursively (use with caution)

### Global Options

- `--help` - Show help information
- `--version` - Show version number

## Examples

### Basic Project Setup

```bash
# First time setup
npm install --save-dev presetter presetter-preset-esm
echo "export { default } from 'presetter-preset-esm';" > presetter.config.ts
presetter bootstrap
```

### Monorepo Setup

```bash
# Bootstrap all packages in a monorepo
presetter bootstrap --projects "packages/*" "apps/*"

# Only bootstrap packages that have a presetter config
presetter bootstrap --projects "packages/*" --only presetter.config.ts
```

### Conditional Bootstrapping

```bash
# Only bootstrap in CI if lock file exists
presetter bootstrap --only package-lock.json

# Bootstrap for production deployment only
if [ "$NODE_ENV" = "production" ]; then
  presetter bootstrap
fi
```

### Integration with Package Scripts

Add to your `package.json` for automatic bootstrapping:

```json
{
  "scripts": {
    "bootstrap": "presetter bootstrap",
    "postinstall": "presetter bootstrap",
    "prepare": "presetter bootstrap"
  }
}
```

**Lifecycle hook usage:**
- `postinstall` - Runs after `npm install`
- `prepare` - Runs before publishing and after `npm install`
- `prepack` - Runs before creating package tarball

## What Gets Generated

The bootstrap command typically generates:

### Configuration Files
- `tsconfig.json` - TypeScript compiler configuration
- `eslint.config.ts` - ESLint linting rules
- `vitest.config.ts` - Vitest testing configuration
- `.prettierrc.json` - Prettier formatting rules
- `.gitignore` - Git ignore patterns
- `package.json` scripts - Merged with preset scripts

### Dependency Installation
Automatic installation of preset peer dependencies:
- TypeScript compiler and types
- ESLint and plugins
- Testing frameworks (Vitest, Jest)
- Build tools (Rollup, Vite)
- Formatting tools (Prettier)

### File Linking Strategy

Presetter uses intelligent file linking:
- **Hard links** for small config files (fast, space-efficient)
- **Symlinks** for larger files or when hard links aren't supported
- **Direct generation** for complex configs that need project-specific content

## Troubleshooting

### Common Issues

**Permission Errors:**
```bash
# Try with elevated permissions
sudo presetter bootstrap

# Or fix npm permissions
npm config set prefix ~/.npm-global
```

**File Conflicts:**
```bash
# Existing configs will be backed up automatically
# Check .presetter-backup/ directory for originals
ls -la .presetter-backup/
```

**Missing Dependencies:**
```bash
# Ensure preset is properly installed
npm list presetter-preset-esm

# Reinstall if needed
npm install --save-dev presetter-preset-esm
```

**Monorepo Issues:**
```bash
# Use absolute patterns for complex structures
presetter bootstrap --projects "$(pwd)/packages/*"

# Debug with verbose output
DEBUG=presetter:* presetter bootstrap --projects "packages/*"
```

### Verification

After running bootstrap, verify the setup:

```bash
# Check generated files
ls -la tsconfig.json eslint.config.ts vitest.config.ts

# Verify dependencies are installed
npm list typescript eslint vitest

# Test the setup
npm run test
npm run lint
npm run build
```

## Advanced Usage

### Custom Bootstrap Logic

Create a wrapper script for complex bootstrap scenarios:

```typescript
// scripts/bootstrap.ts
import { bootstrap } from 'presetter/preset';
import { existsSync } from 'fs';

// Custom bootstrap logic
if (existsSync('custom.config.js')) {
  console.log('Custom configuration detected');
  await bootstrap('.', { customMode: true });
} else {
  await bootstrap('.');
}
```

### Integration with Build Tools

```bash
# Vite integration
echo "import { defineConfig } from 'vite'; export default defineConfig({});" > vite.config.ts
presetter bootstrap

# Webpack integration
echo "module.exports = {};" > webpack.config.js
presetter bootstrap
```

### Environment-Specific Configs

```typescript
// presetter.config.ts
export default preset('env-aware', (context) => {
  const isDev = process.env.NODE_ENV === 'development';
  
  return {
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          sourceMap: isDev,
          strict: !isDev
        }
      }
    }
  };
});
```

## Related Commands

- **[`presetter run`](./run)** - Execute scripts generated by bootstrap
- **[`presetter run-s`](./run-s)** - Run multiple scripts sequentially
- **[`presetter run-p`](./run-p)** - Run multiple scripts in parallel

## See Also

- [Getting Started Guide](/docs/introduction/getting-started) - First time setup
- [Configuration Guide](/docs/introduction/configuration) - Customizing your setup
- [Preset Ecosystem](/docs/presets) - Available presets