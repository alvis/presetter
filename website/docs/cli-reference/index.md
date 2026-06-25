---
sidebar_position: 1
title: CLI Reference
---

# CLI Reference

The Presetter CLI provides powerful commands for managing your project configuration and running scripts efficiently.

## Available Commands

### Project Setup
- [`presetter bootstrap`](./bootstrap) - Setup project according to specified preset

### Script Execution
- [`presetter run <task>`](./run) - Run a single script or task
- [`presetter run-s <tasks...>`](./run-s) - Run multiple scripts sequentially
- [`presetter run-p <tasks...>`](./run-p) - Run multiple scripts in parallel

## Command Shortcuts

For convenience, Presetter provides these standalone binaries:
- `run` → `presetter run`
- `run-s` → `presetter run-s`  
- `run-p` → `presetter run-p`

## Global Options

All commands support these global options:
- `--help` - Show help information for the command
- `--version` - Show version number

## Advanced Pattern Matching

Presetter supports sophisticated task selection patterns:

### Single-level Wildcards (`*`)
- `test:*` - Run all direct subtasks of `test`
- `build:*` - Run all direct subtasks of `build`

### Multi-level Wildcards (`**`)
- `test:**` - Run all test-related tasks at any depth
- `build:**` - Run all build-related tasks recursively

### Specific Pattern Examples
```bash
# Available tasks: task1, task1:subtask1, task1:subtask2, task1:subtask1:deep
presetter run "task1:*"           # Runs: task1:subtask1, task1:subtask2
presetter run "task1:**"          # Runs: task1:subtask1, task1:subtask2, task1:subtask1:deep
presetter run "task1:*:deep"      # Runs: task1:subtask1:deep
```

## Argument Handling

### Global Arguments
Use `--` to separate global arguments that apply to all tasks:
```bash
presetter run-s lint test build -- --verbose --strict
```

### Task-Specific Arguments
For sequential and parallel execution, specify arguments per task:
```bash
presetter run-s "lint -- --fix" "test -- --coverage" "build -- --minify"
```

### Argument Substitution
Use `{@}` to inject global arguments into specific positions:
```bash
presetter run-s "test -- {@} --coverage" "lint -- --fix {@}" -- --verbose
# Expands to: test --verbose --coverage && lint --fix --verbose
```

## Quick Start Examples

### Basic Usage
```bash
# Setup project with preset
presetter bootstrap

# Run single task
presetter run build

# Run with arguments
presetter run test -- --watch
```

### Sequential Execution
```bash
# Basic sequence
presetter run-s clean build

# With arguments
presetter run-s "lint -- --fix" "test -- --coverage" build
```

### Parallel Execution
```bash
# Run multiple tasks simultaneously
presetter run-p lint test typecheck

# With arguments
presetter run-p "test -- --watch" "lint -- --cache"
```

### Pattern-Based Selection
```bash
# Run all test variants
presetter run "test:*"

# Run all build-related tasks
presetter run "build:**"
```

## Integration with Package Scripts

Presetter merges template scripts with your local `package.json` scripts, with local scripts taking priority:

```json
{
  "scripts": {
    "build": "presetter run build",
    "test": "presetter run test",
    "ci": "presetter run-s lint test build"
  }
}
```

## Error Handling

- **Exit codes**: Commands return appropriate exit codes for CI/CD integration
- **Script failures**: In sequential mode, execution stops on first failure
- **Parallel failures**: All tasks complete, but command fails if any task fails
- **Pattern matching**: No error if pattern matches no tasks (returns success)

## Next Steps

Explore each command in detail:
- **[bootstrap](./bootstrap)** - Learn about project setup and configuration generation
- **[run](./run)** - Master single task execution and template scripts
- **[run-s](./run-s)** - Understand sequential task orchestration
- **[run-p](./run-p)** - Leverage parallel execution for performance