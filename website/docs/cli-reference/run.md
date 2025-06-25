---
sidebar_position: 3
title: presetter run
---

# presetter run

Run a single script or task from your preset configuration.

## Synopsis

```bash
presetter run <task> [options] [-- arguments...]
```

## Description

The `run` command executes a single script defined in your preset or local `package.json`. It:

1. **Merges scripts** from preset with local package.json (local takes priority)
2. **Resolves task patterns** using wildcards and selectors
3. **Passes arguments** to the underlying script
4. **Provides template-only mode** for preset-specific scripts

This is the fundamental command for task execution in Presetter projects.

## Arguments

### `<task>`

The task name or pattern to execute. Supports:
- **Exact names**: `build`, `test`, `lint`
- **Wildcard patterns**: `test:*`, `build:**`
- **Complex selectors**: `task1:*:subtask`

## Options

### `--template`

Use script from the template (preset) only, ignoring local package.json scripts.

```bash
# Run the preset's build script, not local override
presetter run build --template

# Compare preset vs local script
presetter run test --template  # Runs preset version
presetter run test             # Runs local version (if exists)
```

**Use cases:**
- Debugging preset configurations
- Bypassing local script customizations
- Testing preset updates before adopting locally

### Global Options

- `--help` - Show help information
- `--version` - Show version number

## Argument Passing

Arguments after `--` are passed directly to the script:

```bash
# Pass --watch flag to test script
presetter run test -- --watch

# Pass multiple arguments
presetter run build -- --mode production --minify

# Pass flags with values
presetter run lint -- --ext .ts,.tsx --fix
```

## Pattern Matching

Presetter supports sophisticated task selection:

### Single-level Wildcards (`*`)

```bash
# Run all direct test subtasks
presetter run "test:*"
# Matches: test:unit, test:integration, test:e2e
# Doesn't match: test:unit:watch

# Run all build variants
presetter run "build:*"
# Matches: build:dev, build:prod, build:lib
```

### Multi-level Wildcards (`**`)

```bash
# Run all test-related tasks at any depth
presetter run "test:**"
# Matches: test:unit, test:unit:watch, test:integration:slow

# Run all tasks under a namespace
presetter run "tools:**"
# Matches: tools:clean, tools:copy:assets, tools:generate:types
```

### Complex Patterns

```bash
# Run specific pattern at any depth
presetter run "*:*:watch"
# Matches: test:unit:watch, build:dev:watch

# Multiple wildcards
presetter run "**:clean"
# Matches: build:clean, test:clean, tools:assets:clean
```

## Examples

### Basic Usage

```bash
# Run common tasks
presetter run build
presetter run test
presetter run lint

# Run with arguments
presetter run test -- --watch --coverage
presetter run build -- --mode development
```

### Pattern-Based Execution

```bash
# Run all test variants
presetter run "test:*"

# Run all build-related tasks
presetter run "build:**"

# Run all watch tasks
presetter run "**:watch"
```

### Template Mode

```bash
# Use preset version of scripts
presetter run build --template
presetter run test --template

# Compare outputs
presetter run lint --template  # Preset ESLint config
presetter run lint             # Local ESLint config
```

### Real-World Scenarios

```bash
# Development workflow
presetter run dev -- --open
presetter run test -- --watch

# CI/CD pipeline
presetter run lint -- --format junit
presetter run test -- --reporter json
presetter run build -- --analyze

# Library development
presetter run build:lib -- --format cjs
presetter run build:types
presetter run test:integration
```

## Script Resolution

Presetter resolves scripts in this order:

1. **Local package.json scripts** (highest priority)
2. **Preset scripts** (from presetter.config.ts)
3. **Extended preset scripts** (from preset dependencies)

### Example Resolution

**Preset scripts:**
```json
{
  "scripts": {
    "build": "tsc",
    "test": "vitest",
    "lint": "eslint src/**/*.ts"
  }
}
```

**Local package.json:**
```json
{
  "scripts": {
    "build": "vite build",
    "dev": "vite dev"
  }
}
```

**Resolved scripts:**
```bash
presetter run build   # Runs: vite build (local override)
presetter run test    # Runs: vitest (from preset)
presetter run lint    # Runs: eslint src/**/*.ts (from preset)
presetter run dev     # Runs: vite dev (local only)
```

## Integration Patterns

### With npm/pnpm/yarn

```json
{
  "scripts": {
    "build": "presetter run build",
    "test": "presetter run test",
    "lint": "presetter run lint",
    "dev": "presetter run dev -- --open"
  }
}
```

### With IDE Integration

**VS Code tasks.json:**
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build",
      "type": "shell",
      "command": "presetter run build",
      "group": "build"
    },
    {
      "label": "Test Watch",
      "type": "shell",
      "command": "presetter run test -- --watch",
      "isBackground": true
    }
  ]
}
```

### With Git Hooks

**Using husky:**
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "presetter run lint -- --staged",
      "pre-push": "presetter run test"
    }
  }
}
```

## Troubleshooting

### Common Issues

**Task not found:**
```bash
# Check available scripts
npm run

# List preset scripts
presetter run --help

# Use pattern to find tasks
presetter run "*build*"
```

**Wrong script version:**
```bash
# Check which script is being used
presetter run build --dry-run

# Force preset version
presetter run build --template

# Check script resolution
DEBUG=presetter:* presetter run build
```

**Arguments not passed:**
```bash
# Ensure -- separator is used
presetter run test -- --watch    # Correct
presetter run test --watch       # Wrong

# Quote complex arguments
presetter run lint -- "--ext .ts,.tsx"
```

### Debug Mode

```bash
# Enable debug output
DEBUG=presetter:* presetter run build

# Check script resolution
DEBUG=presetter:script presetter run test

# Verbose pattern matching
DEBUG=presetter:pattern presetter run "test:*"
```

## Advanced Usage

### Dynamic Task Selection

```bash
# Run tasks based on file changes
if git diff --name-only | grep -q '\.test\.';
then
  presetter run test
fi

# Run different tasks per environment
case $NODE_ENV in
  development) presetter run dev ;;
  test) presetter run test:ci ;;
  production) presetter run build:prod ;;
esac
```

### Custom Task Runners

```typescript
// scripts/custom-runner.ts
import { run } from 'presetter/run';

// Custom run logic
const tasks = process.argv.slice(2);
for (const task of tasks) {
  await run([{ selector: task, args: [] }]);
}
```

### Performance Optimization

```bash
# Use patterns to avoid multiple invocations
presetter run "test:**"     # Better than multiple run commands

# Cache-friendly builds
presetter run build:cache
presetter run test:cached
```

## Alternative: Direct Binary

You can use the standalone `run` binary instead of `presetter run`:

```bash
# These are equivalent
presetter run build
run build

# Both support the same options
run test -- --watch
run build --template
```

## Related Commands

- **[`presetter run-s`](./run-s)** - Run multiple tasks sequentially
- **[`presetter run-p`](./run-p)** - Run multiple tasks in parallel
- **[`presetter bootstrap`](./bootstrap)** - Setup project configuration

## See Also

- [Getting Started Guide](/docs/introduction/getting-started) - Basic task execution
- [Configuration Guide](/docs/introduction/configuration) - Customizing scripts
- [Preset Ecosystem](/docs/presets) - Available preset scripts