---
sidebar_position: 2
title: New Project Setup
description: Complete walkthrough for setting up a new TypeScript project with Presetter from scratch
---

# New Project Setup 🚀

This tutorial walks you through creating a brand new TypeScript project with Presetter. You'll have a fully configured development environment in under 5 minutes.

## Prerequisites

- **Node.js 18+** and **npm 7+** (or equivalent pnpm/yarn) installed
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

## Step 2: Install Presetter

Add Presetter and your first preset:

```bash
# Install Presetter CLI globally (recommended)
pnpm add -g presetter

# Or install locally in your project
pnpm add -D presetter

# Add a foundation preset
pnpm add -D presetter-preset-essentials
```

:::tip Preset Selection
- **`presetter-preset-essentials`**: Core tooling (TypeScript, ESLint, Prettier)
- **`presetter-preset-react`**: React applications
- **`presetter-preset-esm`**: ES modules focus
- **`presetter-preset-hybrid`**: Dual CJS/ESM libraries

Choose the preset that best matches your project type.
:::

## Step 3: Bootstrap Configuration

Run the bootstrap command to set up your project:

```bash
presetter bootstrap
```

This command will:
- ✅ Create `presetter.config.ts`
- ✅ Generate configuration files (tsconfig.json, .eslintrc.json, etc.)
- ✅ Add npm scripts to package.json
- ✅ Create initial project structure

Expected output:
```bash
✨ Bootstrapping project with presetter-preset-essentials
✓ Created presetter.config.ts
✓ Generated tsconfig.json
✓ Generated .eslintrc.json
✓ Generated prettier.config.js
✓ Updated package.json scripts
```

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
pnpm run watch
# Continuously builds on file changes
```

### Format Code
```bash
pnpm run format
# Formats all files with Prettier
```

### Clean Build
```bash
pnpm run clean
# Removes build artifacts
```

## What's Next?

Your project is now fully configured! Here are some next steps:

### Add More Capabilities

**For React development:**
```bash
pnpm add -D presetter-preset-react
```

**For ES modules:**
```bash
pnpm add -D presetter-preset-esm
```

**For strict mode:**
```bash
pnpm add -D presetter-preset-strict
```

### Customize Configuration

Check the generated `presetter.config.ts`:

```typescript title="presetter.config.ts"
// Simple preset usage - most common pattern
export { default } from 'presetter-preset-essentials';
```

### Explore Available Scripts

Run `pnpm run` to see all available commands:

```bash
pnpm run
# Shows all configured scripts
```

## Troubleshooting

### Issue: TypeScript Errors
**Problem:** Getting type errors on valid code
**Solution:** Ensure TypeScript version compatibility:
```bash
pnpm add -D typescript@latest
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
pnpm init -y

# Install dependencies
pnpm add -D presetter presetter-preset-essentials

# Bootstrap
presetter bootstrap

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