---
sidebar_position: 2
title: New Project Setup
description: Complete walkthrough for setting up a new TypeScript project with Presetter from scratch
---

# New Project Setup 🚀

This tutorial walks you through creating a brand new TypeScript project with Presetter. You'll have a fully configured development environment in under 5 minutes.

## Prerequisites

- **Node.js 22.13+ (22.x), 24.x, or 26+** and **npm 7+**, **pnpm**, or **Bun** installed
- Basic familiarity with TypeScript and npm scripts

## Step 1: Initialize Your Project

Create a new directory and initialize the project:

```bash
mkdir my-awesome-project
cd my-awesome-project
pnpm init
```

Expected output:
```bash
✓ Created package.json
```

## Step 2: Adopt a Preset Stack

```bash
pnpm dlx presetter use @presetter/preset-esm --package-manager=pnpm
```

This installs Presetter and the stack, writes `presetter.config.ts`, adds declared package scripts and setup dependencies, and bootstraps the generated configs. Essentials supplies the TypeScript 7 CLI / TypeScript 6 API aliases and Vitest setup. Approve dependency builds when prompted.

The project's `packageManager` or lockfile takes priority over the fallback flag. See [Installation](../introduction/installation) for npm and Bun commands.

:::tip Preset Selection
- **`@presetter/preset-esm`**: ES modules, extending Essentials
- **`@presetter/preset-esm @presetter/preset-react`**: React and TSX tooling
- **`@presetter/preset-hybrid`**: Dual CJS/ESM libraries
- **`@presetter/preset-monorepo`**: Shared monorepo tooling
:::

## Step 3: Review the Generated Configuration

`use` creates the config with imports for your chosen stack and your package name. Keep project differences there; rerun `pnpm exec presetter bootstrap` after editing it.

Bootstrap overwrites generated assets such as `tsconfig.json`, `eslint.config.ts`, and `vitest.config.ts`. It does not merge existing files from disk, install setup packages, or write package scripts.

## Step 4: Create Source Files

Create your project structure:

```bash
mkdir src
```

Create a simple TypeScript file:

```typescript title="src/index.ts"
interface Greeting {
  message: string;
  target: string;
}

function createGreeting(target: string): Greeting {
  return {
    message: `Hello, ${target}!`,
    target,
  };
}

const greeting = createGreeting('Presetter');
console.log(greeting.message);

export { createGreeting, type Greeting };
```

## Step 5: Test Your Setup

Run the available scripts to verify everything works:

```bash
# Type checking
pnpm run typecheck

# Linting
pnpm run lint

# Build
pnpm run build
```

Expected outputs:

### Type Checking ✅
```bash
$ pnpm run typecheck
✓ No TypeScript errors found
```

### Linting ✅
```bash
$ pnpm run lint
✓ All files pass linting rules
```

### Building ✅
```bash
$ pnpm run build
✓ Built successfully to lib/
```

## Step 6: Development Workflow

Your project now supports the standard development workflow:

### Watch Mode
```bash
pnpm exec run start
# Continuously builds on file changes
```

### Format Code
```bash
pnpm exec run lint:prettier -- src spec
# Formats all files with Prettier
```

### Clean Build
```bash
pnpm exec run clean
# Removes build artifacts
```

## What's Next?

Your project is now fully configured! Here are some next steps:

### Add More Capabilities

Install additional preset packages, then add their imports and references to `extends` in the existing config:

```bash
pnpm add -D @presetter/preset-react @presetter/preset-strict
```

```typescript title="presetter.config.ts"
import esm from '@presetter/preset-esm';
import react from '@presetter/preset-react';
import strict from '@presetter/preset-strict';
import { preset } from 'presetter';

export default preset('my-awesome-project', {
  extends: [esm, react, strict],
});
```

Then run `pnpm exec presetter bootstrap`. For presets with additional setup packages or script delegates, apply those declarations manually. `use` stops on a differing existing config, so it does not append presets to a customized file.

### Explore Available Scripts

Run `pnpm run` to see all available commands:

```bash
pnpm run
# Shows all configured scripts
```

## Troubleshooting

### Issue: TypeScript Errors
**Problem:** Getting type errors on valid code
**Solution:** Verify the CLI and API alias versions; see the [installation guide](../introduction/installation#using-typescript-7-with-the-typescript-6-api):
```bash
pnpm exec tsc --version
pnpm exec tsc6 --version
```

### Issue: ESLint Configuration Conflicts
**Problem:** ESLint rules conflict with existing setup
**Solution:** Check for conflicting ESLint configs:
```bash
rm .eslintrc.* eslint.config.*  # Remove old configs
presetter bootstrap             # Regenerate
```

### Issue: Build Failures
**Problem:** Build fails with module resolution errors
**Solution:** Verify tsconfig.json paths:
```typescript title="tsconfig.json"
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

## Next Tutorial

Once you have a working project, learn how to [migrate an existing project](./existing-project.md) or [set up a monorepo](./monorepo-setup.md).

## Interactive Example

<details>
<summary>🔬 Try a Complete Example</summary>

Here's a complete, working example you can copy and run:

```bash
# Create and enter project directory
mkdir presetter-demo && cd presetter-demo

# Initialize project
pnpm init

# Install, configure, and bootstrap
pnpm dlx presetter use @presetter/preset-esm --package-manager=pnpm

# Create source
mkdir src
echo 'console.log("Hello, Presetter!");' > src/index.ts

# Test it works
pnpm run typecheck && pnpm run lint && pnpm run build

echo "✅ Your Presetter project is ready!"
```
</details>

---

**Time to complete:** ~3-5 minutes  
**Difficulty:** Beginner  
**Prerequisites:** Node.js, pnpm
