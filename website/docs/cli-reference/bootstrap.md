---
sidebar_position: 2
title: presetter bootstrap
---

# presetter bootstrap

Generate configuration assets from an existing preset stack. Use [`presetter use`](./use) to install presets and apply declared package/script setup.

## Synopsis

```bash
presetter bootstrap [options] [project...]
```

## Description

The `bootstrap` command is the core setup command that:

1. **Reads your preset configuration** from `presetter.config.ts`
2. **Resolves the preset graph** and asset templates
3. **Generates configuration files** (tsconfig.json, eslint.config.ts, etc.)
4. **Skips null assets** and writes generated assets to the project root

When several projects are targeted, bootstrap always attempts **every** project, even if
an earlier one fails. Failures are collected and reported together on stderr once the run
is over, and the command then exits with a non-zero status. That way a single broken
package no longer leaves the rest of a monorepo un-bootstrapped.

```text
[AggregateError] failed to bootstrap 1 of 3 projects
  [Error] failed to bootstrap packages/b
    [Error] failed to load the presetter configuration at /repo/packages/b/presetter.config.ts
      [SyntaxError] Unexpected token
```

This command is typically run:
- After installing Presetter and a preset for the first time
- When updating to a new preset version
- When adding Presetter to an existing project
- From a `bootstrap` package script that you run explicitly

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

### `[project...]` and `-p, --project <pattern>`

Glob patterns matching target project folders containing package.json. Give them as plain
arguments or with the repeatable `--project` flag; both spellings add to the same list, so
`presetter bootstrap a b` is the same as `presetter bootstrap --project a --project b`.

**Default:** `.` (current directory), used only when no project pattern is given

```bash
# Bootstrap multiple packages in a monorepo
presetter bootstrap "packages/*" "apps/*"

# The same with the flag, one value per occurrence
presetter bootstrap --project "packages/*" --project "apps/*"

# Bootstrap specific packages
presetter bootstrap packages/core packages/utils
```

**Pattern Examples:**
- `"packages/*"` - All direct subdirectories in packages/
- `"apps/*/"` - All app directories
- `"."` - Current directory only
- `"**/"` - All directories recursively (use with caution)

Unquoted globs are fine too: when the shell expands `packages/*` into several paths, each
one is taken as a project.

### `-P, --package <pattern>`

Glob patterns matching target **package names** rather than paths, as declared by each
project's `package.json` `name` field. Within a pattern, `*` matches anything except `/`,
so `@acme/*` stays inside the `@acme` scope. Repeat the flag to give several patterns.

**Default:** none (no package-name selection)

Package patterns add to the project patterns rather than replace them, so the default `.`
is still bootstrapped when no project pattern is given. Pass an explicit project pattern,
or `'!.'`, to leave the current directory out.

```bash
# Bootstrap every preset package in a scope
presetter bootstrap --package "@presetter/preset-*"

# Combine path and name selection; both contribute to the same set of roots
presetter bootstrap "packages/*" --package "@acme/tooling"
```

Both project and package patterns also accept comma-separated values, such as
`--package "@acme/web,@acme/api"`.

### Excluding with `!`

Any project or package pattern may be prefixed with `!` to **exclude** its matches. Quote
such a pattern with single quotes, since an interactive shell expands `!` inside double
quotes.

```bash
# Every preset except presets/node
presetter bootstrap 'presets/*' '!presets/node'

# Every @acme preset except one, by package name
presetter bootstrap --package '@acme/preset-*' --package '!@acme/preset-node'

# Exclusions cross flags: the path exclusion also drops a name-selected root
presetter bootstrap --package '@acme/preset-*' '!presets/legacy'
```

Two rules govern how exclusions behave:

- **Negations never select.** They only subtract, following the same convention as globby
  and `.gitignore`. `presetter bootstrap -p '!e2e'` on its own therefore selects nothing.
- **Exclusions apply to the whole selection**, not only to where they were given. A `!`
  project pattern still removes a root that `--package` selected, and vice versa.

### Global Options

- `--help` - Show help information
- `--version` - Show version number

## Examples

### Basic Project Setup

```bash
# First-time adoption also runs bootstrap
npx presetter use @presetter/preset-esm

# Regenerate assets after editing an existing config
npx presetter bootstrap
```

### Monorepo Setup

```bash
# Bootstrap all packages in a monorepo
presetter bootstrap "packages/*" "apps/*"

# Only bootstrap packages that have a presetter config
presetter bootstrap "packages/*" --only presetter.config.ts

# Bootstrap the whole monorepo apart from a couple of exceptions
presetter bootstrap '.,packages/*,presets/*,!presets/legacy,!packages/sandbox'
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

Add a package script so the bootstrap command is easy to run:

```json
{
  "scripts": {
    "bootstrap": "presetter bootstrap"
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

### Dependency Installation

`bootstrap` does not install packages or write package scripts. `use` applies the preset stack’s declared `setup.dependencies`, `setup.devDependencies`, `setup.peerDependencies`, and `setup.scripts`. When maintaining a custom config manually, install those packages and maintain script delegates yourself.

### Generated File Strategy

Bootstrap writes generated files directly into the target project. Keep durable changes in `presetter.config.ts`, then rerun `presetter bootstrap` to regenerate the output files.

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
Bootstrap overwrites generated paths without creating backups. Preserve intentional settings in `presetter.config.ts` before regenerating, and keep generated assets ignored and untracked.

**Missing Dependencies:**
```bash
# Ensure preset is properly installed
npm list @presetter/preset-esm

# Reinstall if needed
npm install --save-dev @presetter/preset-esm
```

**Monorepo Issues:**
```bash
# Use absolute patterns for complex structures
presetter bootstrap "$(pwd)/packages/*"

# Debug with verbose output
DEBUG=presetter:* presetter bootstrap "packages/*"
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

- **[`presetter use`](./use)** - Install presets and apply declared setup
- **[`presetter run`](./run)** - Execute runtime preset tasks with local script overrides
- **[`presetter run-s`](./run-s)** - Run multiple scripts sequentially
- **[`presetter run-p`](./run-p)** - Run multiple scripts in parallel

## See Also

- [Getting Started Guide](/docs/introduction/getting-started) - First time setup
- [Configuration Guide](/docs/introduction/configuration) - Customizing your setup
- [Preset Ecosystem](/docs/presets) - Available presets
