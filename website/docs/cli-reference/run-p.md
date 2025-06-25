---
sidebar_position: 5
title: presetter run-p
---

# presetter run-p

Run multiple scripts in parallel (simultaneously) for maximum performance and efficiency.

## Synopsis

```bash
presetter run-p <task1> [task2...] [-- global-arguments...]
```

## Description

The `run-p` command executes multiple tasks simultaneously, allowing for:

1. **Parallel execution** - All tasks start at the same time
2. **Performance optimization** - Faster overall completion
3. **Independent task handling** - Tasks don't depend on each other
4. **Comprehensive error reporting** - Waits for all tasks to complete
5. **Advanced argument handling** - Same as `run-s` but for parallel execution

This is ideal for independent tasks like linting + testing, multiple builds, or development servers.

## Arguments

### `<task1> [task2...]`

One or more task names or patterns to execute simultaneously. Each task can be:
- **Simple task name**: `lint`, `test`, `typecheck`
- **Task with arguments**: `"test -- --watch"`
- **Pattern selector**: `"test:*"`, `"build:**"`
- **Quoted complex tasks**: `"dev:server -- --port 3000"`

### `-- global-arguments...`

Arguments after `--` are treated as global arguments passed to all tasks.

## Key Differences from run-s

| Aspect | run-s (Sequential) | run-p (Parallel) |
|--------|-------------------|------------------|
| **Execution** | One after another | All at once |
| **Speed** | Sum of all task times | Time of slowest task |
| **Dependencies** | Tasks can depend on previous | Tasks must be independent |
| **Resource usage** | Lower peak usage | Higher peak usage |
| **Error handling** | Stops on first failure | Reports all failures |
| **Output** | Clean, sequential | Interleaved, tagged |

## Examples

### Basic Parallel Execution

```bash
# Run independent tasks simultaneously
presetter run-p lint test typecheck

# Development workflow
presetter run-p "dev:server" "dev:client" "test:watch"

# Build multiple formats
presetter run-p "build:cjs" "build:esm" "build:types"
```

### Development Servers

```bash
# Run multiple development servers
presetter run-p \
  "dev:api -- --port 3001" \
  "dev:web -- --port 3000" \
  "dev:docs -- --port 3002"

# Full-stack development
presetter run-p \
  "backend:dev" \
  "frontend:dev" \
  "db:watch" \
  "test:watch"
```

### Independent Quality Checks

```bash
# Run all quality checks simultaneously
presetter run-p \
  "lint" \
  "typecheck" \
  "test:unit" \
  "security:audit"

# Multiple test suites
presetter run-p \
  "test:unit" \
  "test:integration" \
  "test:e2e" \
  -- --coverage
```

### Build Optimization

```bash
# Build multiple targets in parallel
presetter run-p \
  "build:main" \
  "build:worker" \
  "build:styles" \
  "build:assets"

# Cross-platform builds
presetter run-p \
  "build:linux" \
  "build:windows" \
  "build:macos"
```

## Advanced Argument Handling

### Global Arguments

```bash
# Pass arguments to all parallel tasks
presetter run-p lint test build -- --verbose --timing

# All tasks receive --verbose and --timing
```

### Task-Specific Arguments

```bash
# Each task gets its own arguments
presetter run-p \
  "dev:server -- --port 3000 --open" \
  "test:watch -- --coverage" \
  "lint:watch -- --fix"
```

### Mixed Arguments

```bash
# Combine task-specific and global arguments
presetter run-p \
  "test -- --watch" \
  "lint -- --fix" \
  typecheck \
  -- --verbose

# Expands to:
# test --watch --verbose (parallel)
# lint --fix --verbose (parallel)
# typecheck --verbose (parallel)
```

### Argument Substitution

```bash
# Use {@} for global argument injection
presetter run-p \
  "test -- {@} --watch" \
  "lint -- --cache {@}" \
  "build -- {@} --watch" \
  -- --verbose --progress

# Results in parallel execution of:
# test --verbose --progress --watch
# lint --cache --verbose --progress  
# build --verbose --progress --watch
```

## Output Management

### Tagged Output

Parallel tasks produce interleaved output with task tags:

```
[lint] ✓ No ESLint errors found
[test] Running test suite...
[typecheck] Checking types...
[test] ✓ 15 tests passed
[typecheck] ✓ No type errors
```

### Output Strategies

```bash
# Redirect output for cleaner logs
presetter run-p \
  "lint > lint.log 2>&1" \
  "test > test.log 2>&1" \
  "build > build.log 2>&1"

# Use different verbosity levels
presetter run-p \
  "lint -- --quiet" \
  "test -- --silent" \
  "typecheck -- --verbose"
```

## Error Handling

### Parallel Error Behavior

```bash
# All tasks run to completion, then report failures
presetter run-p lint test build

# Exit codes:
# 0 - All tasks succeeded
# Non-zero - At least one task failed
```

### Error Isolation

```bash
# One failing task doesn't stop others
presetter run-p \
  "lint" \
  "test" \
  "failing-task"  # This fails, but lint and test continue

# Use error handling in individual tasks
presetter run-p \
  "lint || echo 'Lint failed'" \
  "test || echo 'Tests failed'" \
  "build"
```

### Debugging Parallel Execution

```bash
# Enable debug mode
DEBUG=presetter:* presetter run-p lint test build

# Add timing information
presetter run-p \
  "lint" \
  "test" \
  "build" \
  -- --timing
```

## Performance Considerations

### Resource Management

```bash
# CPU-intensive tasks
presetter run-p \
  "build:main" \
  "build:worker"  # May compete for CPU

# I/O-intensive tasks (better for parallel)
presetter run-p \
  "test:api" \
  "test:db" \
  "lint:files"
```

### Memory Usage

```bash
# Monitor memory usage with parallel tasks
presetter run-p \
  "test -- --max-memory 512MB" \
  "build -- --memory-limit 1GB" \
  "lint"

# Limit concurrent operations
NODE_OPTIONS="--max-old-space-size=4096" \
presetter run-p build:large test:memory-intensive
```

### Optimal Task Selection

```bash
# Good: Independent tasks
presetter run-p lint test typecheck format

# Good: I/O bound tasks
presetter run-p \
  "download:assets" \
  "fetch:dependencies" \
  "validate:schemas"

# Avoid: Dependent tasks
# Don't run: build and test (test might need build output)
# Don't run: clean and build (clean removes build artifacts)
```

## Real-World Use Cases

### Development Environment

```bash
# Complete development setup
presetter run-p \
  "api:dev -- --port 3001" \
  "web:dev -- --port 3000" \
  "docs:dev -- --port 3002" \
  "test:watch -- --coverage" \
  "lint:watch -- --fix"
```

### CI/CD Optimization

```bash
# Parallel quality checks
presetter run-p \
  "lint -- --format junit" \
  "test:unit -- --reporter junit" \
  "test:integration -- --reporter junit" \
  "security:audit -- --json" \
  "dependency:check"

# Multi-platform builds
presetter run-p \
  "build:docker:linux" \
  "build:docker:alpine" \
  "build:binary:linux" \
  "build:binary:windows"
```

### Content Generation

```bash
# Generate multiple content types
presetter run-p \
  "docs:api" \
  "docs:guides" \
  "images:optimize" \
  "translations:compile"

# Asset processing
presetter run-p \
  "images:resize" \
  "css:compile" \
  "js:bundle" \
  "fonts:subset"
```

### Monorepo Operations

```bash
# Build all packages simultaneously
presetter run-p \
  "build:core" \
  "build:utils" \
  "build:ui" \
  "build:cli"

# Test all packages
presetter run-p \
  "test:core" \
  "test:utils" \
  "test:ui" \
  "test:integration"
```

## Integration Patterns

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "presetter run-p 'api:dev' 'web:dev' 'test:watch'",
    "check": "presetter run-p lint typecheck test",
    "build:all": "presetter run-p 'build:lib' 'build:types' 'build:docs'",
    "start:services": "presetter run-p 'start:api' 'start:worker' 'start:scheduler'"
  }
}
```

### Docker Compose Alternative

```bash
# Instead of docker-compose, use presetter run-p
presetter run-p \
  "redis:start" \
  "postgres:start" \
  "api:start" \
  "worker:start"
```

### Watch Mode Development

```bash
# All watch modes in parallel
presetter run-p \
  "src:watch -- --reload" \
  "test:watch -- --coverage" \
  "docs:watch -- --open" \
  "lint:watch -- --fix"
```

## Comparison with Other Tools

### vs npm-run-all

```bash
# npm-run-all
npm-run-all --parallel lint test build

# presetter run-p (equivalent)
presetter run-p lint test build

# But presetter adds:
# - Pattern matching
# - Advanced argument handling
# - Template script support
```

### vs GNU parallel

```bash
# GNU parallel
parallel ::: "npm run lint" "npm run test" "npm run build"

# presetter run-p (simpler)
presetter run-p lint test build
```

## Troubleshooting

### Common Issues

**Port conflicts:**
```bash
# Ensure different ports for dev servers
presetter run-p \
  "api:dev -- --port 3001" \
  "web:dev -- --port 3000"  # Different ports
```

**Resource exhaustion:**
```bash
# Limit concurrent tasks
ulimit -n 4096  # Increase file descriptor limit
presetter run-p task1 task2 task3

# Or run fewer tasks simultaneously
presetter run-p task1 task2
presetter run-p task3 task4
```

**Output confusion:**
```bash
# Use output redirection for clarity
presetter run-p \
  "lint 2>&1 | sed 's/^/[LINT] /'" \
  "test 2>&1 | sed 's/^/[TEST] /'"
```

### Performance Tuning

```bash
# Profile parallel execution
time presetter run-p lint test build

# Compare with sequential
time presetter run-s lint test build

# Monitor resource usage
top -p $(pgrep -f "presetter run-p")
```

## Alternative: Direct Binary

Use the standalone `run-p` binary:

```bash
# These are equivalent
presetter run-p lint test build
run-p lint test build

# Both support the same features
run-p "dev:server -- --port 3000" "test:watch"
```

## Related Commands

- **[`presetter run`](./run)** - Run a single task
- **[`presetter run-s`](./run-s)** - Run multiple tasks sequentially
- **[`presetter bootstrap`](./bootstrap)** - Setup project configuration

## See Also

- [Getting Started Guide](/docs/introduction/getting-started) - Basic task execution
- [Configuration Guide](/docs/introduction/configuration) - Customizing scripts
- [Advanced Topics](/docs/advanced) - Performance optimization