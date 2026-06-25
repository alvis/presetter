---
sidebar_position: 4
title: presetter run-s
---

# presetter run-s

Run multiple scripts sequentially (one after another) with sophisticated argument handling.

## Synopsis

```bash
presetter run-s <task1> [task2...] [-- global-arguments...]
```

## Description

The `run-s` command executes multiple tasks in sequence, where each task must complete successfully before the next one starts. It provides:

1. **Sequential execution** - Tasks run one after another
2. **Fail-fast behavior** - Stops on first failure
3. **Advanced argument handling** - Global and task-specific arguments
4. **Pattern matching** - Supports wildcards and selectors
5. **Argument substitution** - Dynamic argument injection with `{@}`

This is ideal for CI/CD pipelines, build chains, and workflows where order matters.

## Arguments

### `<task1> [task2...]`

One or more task names or patterns to execute in order. Each task can be:
- **Simple task name**: `lint`, `test`, `build`
- **Task with arguments**: `"test -- --coverage"`
- **Pattern selector**: `"test:*"`, `"build:**"`
- **Quoted complex tasks**: `"lint -- --ext .ts,.tsx --fix"`

### `-- global-arguments...`

Arguments after `--` are treated as global arguments passed to all tasks.

## Argument Handling

### Global Arguments

Arguments after `--` are passed to ALL tasks:

```bash
# Pass --verbose to all tasks
presetter run-s lint test build -- --verbose

# Equivalent to:
presetter run lint -- --verbose
presetter run test -- --verbose  
presetter run build -- --verbose
```

### Task-Specific Arguments

Use quotes to specify arguments for individual tasks:

```bash
# Each task gets its own arguments
presetter run-s \
  "lint -- --fix" \
  "test -- --coverage" \
  "build -- --minify"
```

### Mixed Argument Types

Combine task-specific and global arguments:

```bash
# Task-specific args + global args
presetter run-s \
  "lint -- --fix" \
  "test -- --coverage" \
  build \
  -- --verbose --strict

# Expands to:
# lint --fix --verbose --strict
# test --coverage --verbose --strict  
# build --verbose --strict
```

### Argument Substitution with `{@}`

Use `{@}` to inject global arguments at specific positions:

```bash
# Insert global args at specific positions
presetter run-s \
  "test -- {@} --coverage" \
  "lint -- --fix {@}" \
  "build -- --mode prod {@}" \
  -- --verbose --progress

# Expands to:
# test --verbose --progress --coverage
# lint --fix --verbose --progress
# build --mode prod --verbose --progress
```

## Examples

### Basic Sequential Execution

```bash
# Simple sequence
presetter run-s clean build

# Longer pipeline
presetter run-s clean lint test build package

# With global arguments
presetter run-s lint test build -- --verbose
```

### Development Workflows

```bash
# Pre-commit pipeline
presetter run-s \
  "lint -- --fix" \
  "test -- --coverage" \
  "typecheck"

# Build pipeline
presetter run-s \
  clean \
  "build:types" \
  "build:lib" \
  "build:docs"
```

### CI/CD Pipelines

```bash
# Complete CI pipeline
presetter run-s \
  "install" \
  "lint -- --format junit" \
  "test -- --reporter json --coverage" \
  "build -- --mode production" \
  "package" \
  -- --verbose --strict

# Quality gates
presetter run-s \
  "lint:check" \
  "test:unit" \
  "test:integration" \
  "security:audit" \
  "performance:benchmark"
```

### Pattern-Based Workflows

```bash
# Run all test types in sequence
presetter run-s "test:*"

# Sequential build steps
presetter run-s "build:**"

# Complex pattern workflow
presetter run-s \
  "clean:**" \
  "generate:*" \
  "build:**" \
  "test:integration"
```

### Environment-Specific Pipelines

```bash
# Development
presetter run-s \
  "build:dev" \
  "test:watch" \
  -- --source-maps

# Production
presetter run-s \
  "lint:strict" \
  "test:all" \
  "build:prod" \
  "optimize" \
  -- --minify --tree-shake

# Testing
presetter run-s \
  "test:unit" \
  "test:integration" \
  "test:e2e" \
  -- --coverage --reporter html
```

## Advanced Argument Handling

### Complex Argument Substitution

```bash
# Multiple substitution points
presetter run-s \
  "lint -- {@} --fix" \
  "test -- --env test {@}" \
  "build -- {@} --analyze" \
  -- --verbose --progress --time

# Conditional arguments
presetter run-s \
  "test -- {@} --coverage" \
  "build -- {@} $([ "$NODE_ENV" = "production" ] && echo "--minify")" \
  -- --verbose
```

### Quote Handling

Presetter automatically handles quotes:

```bash
# These are equivalent
presetter run-s "test -- --watch"
presetter run-s 'test -- --watch'
presetter run-s test\ --\ --watch

# Complex quoting
presetter run-s \
  "lint -- --ext '.ts,.tsx' --fix" \
  'test -- --testNamePattern="integration"'
```

### Dynamic Task Generation

```bash
# Generate tasks dynamically
TASKS=$(ls packages/ | sed 's/^/build:/')
presetter run-s $TASKS

# Conditional task inclusion
if [ "$CI" = "true" ]; then
  TASKS="lint test build deploy"
else
  TASKS="lint test build"
fi
presetter run-s $TASKS
```

## Error Handling

### Fail-Fast Behavior

By default, `run-s` stops on the first failed task:

```bash
# If lint fails, test and build won't run
presetter run-s lint test build

# Exit codes:
# 0 - All tasks succeeded
# Non-zero - First task that failed
```

### Error Recovery

```bash
# Use || to continue on failure
presetter run-s \
  "lint || true" \
  "test" \
  "build"

# Or handle errors in individual tasks
presetter run-s \
  "lint -- --max-warnings 0 || echo 'Lint failed but continuing'" \
  "test"
```

### Debugging Failed Pipelines

```bash
# Add verbose output
DEBUG=presetter:* presetter run-s lint test build

# Run with detailed error reporting
presetter run-s \
  "lint -- --format verbose" \
  "test -- --verbose" \
  "build -- --stats" \
  -- --verbose
```

## Performance Optimization

### Efficient Sequencing

```bash
# Good: Logical dependency order
presetter run-s \
  "clean" \
  "generate" \
  "build" \
  "test"

# Avoid: Unnecessary dependencies
# Don't run slow tasks if fast ones might fail
presetter run-s \
  "lint" \
  "typecheck" \
  "test:unit" \
  "test:integration"  # Slowest last
```

### Caching Integration

```bash
# Use cache-aware tasks
presetter run-s \
  "build:cache-check || build:full" \
  "test:cache-check || test:full"

# Conditional rebuilds
presetter run-s \
  "build:check-changes" \
  "build:incremental" \
  "test:affected"
```

## Integration Patterns

### Package.json Scripts

```json
{
  "scripts": {
    "ci": "presetter run-s lint test build",
    "dev": "presetter run-s build:dev test:watch -- --verbose",
    "release": "presetter run-s lint test build package publish",
    "precommit": "presetter run-s 'lint -- --staged' 'test -- --related'"
  }
}
```

### GitHub Actions

```yaml
# .github/workflows/ci.yml
steps:
  - name: Install dependencies
    run: npm ci
    
  - name: Run CI pipeline
    run: |
      presetter run-s \
        "lint -- --format github" \
        "test -- --coverage --reporter github" \
        "build -- --mode production" \
        -- --verbose
```

### Docker Integration

```dockerfile
# Multi-stage build with sequential tasks
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN presetter run-s lint test build -- --production

FROM node:18-alpine
COPY --from=builder /app/dist ./dist
```

## Alternative: Direct Binary

Use the standalone `run-s` binary:

```bash
# These are equivalent
presetter run-s lint test build
run-s lint test build

# Both support the same features
run-s "lint -- --fix" test build -- --verbose
```

## Comparison with run-p

| Feature | run-s (Sequential) | run-p (Parallel) |
|---------|-------------------|------------------|
| **Execution** | One after another | Simultaneously |
| **Dependencies** | Respects order | No dependencies |
| **Failure** | Stops on first | Waits for all |
| **Performance** | Slower total time | Faster total time |
| **Resource usage** | Lower peak usage | Higher peak usage |
| **Use case** | Build pipelines | Independent tasks |

## Related Commands

- **[`presetter run`](./run)** - Run a single task
- **[`presetter run-p`](./run-p)** - Run multiple tasks in parallel
- **[`presetter bootstrap`](./bootstrap)** - Setup project configuration

## See Also

- [Getting Started Guide](/docs/introduction/getting-started) - Basic task execution
- [Configuration Guide](/docs/introduction/configuration) - Customizing scripts
- [Advanced Topics](/docs/advanced) - Performance optimization