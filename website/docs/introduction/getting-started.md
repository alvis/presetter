---
sidebar_position: 2
title: Getting Started
---

# Getting Started with Presetter

## 30-Second Setup

Ready to transform your development workflow? Let's set up Presetter in under 30 seconds:

```bash
# In a project with a package.json:
npx presetter use @presetter/preset-esm --package-manager=npm
```

🎉 **That's it!** Your project now has TypeScript, ESLint, Vitest, Prettier, and all configurations set up automatically.

## What Just Happened?

When you ran `presetter use`, Presetter:

- ✅ Installed all development dependencies (TypeScript, ESLint, Vitest, etc.)
- ✅ Generated configuration files (tsconfig.json, eslint.config.ts, vitest.config.ts, etc.)
- ✅ Set up build and test scripts
- ✅ Generated git hook files; the declared `prepare` script runs setup on subsequent installs

The project’s `packageManager` or lockfile takes priority over the fallback flag. [Installation](./installation) covers pnpm, Bun, dependency build approval, and existing declarations.

Your project structure now looks like this:

```diff
my-project/
├── package.json
+ ├── presetter.config.ts         # Your preset configuration
+ ├── tsconfig.json               # TypeScript configuration (generated)
+ ├── eslint.config.ts            # ESLint configuration (generated)
+ ├── vitest.config.ts            # Vitest test configuration (generated)
+ ├── .prettierrc.json            # Prettier formatting (generated)
+ ├── .gitignore                  # Git ignore patterns (generated)
└── src/
    └── index.ts                  # Your code here
```

## Start Developing

Now you can immediately start using professional development tools:

```bash
# Build your TypeScript project
npm run build

# Run tests with Vitest
npm run test

# Lint and format your code (ESLint + Prettier)
npm run lint

# Run tests in watch mode
npm run test:watch

# Check test coverage
npm run test:coverage
```

## Choose Your Preset

Different presets are optimized for different project types:

### 🚀 Modern ES Modules Project
```bash
npx presetter use @presetter/preset-esm
```

### ⚛️ React Application
```bash
npx presetter use @presetter/preset-esm @presetter/preset-react
```

### 📚 NPM Library (Dual CJS/ESM)
```bash
npx presetter use @presetter/preset-hybrid
```

### 🏢 Monorepo
```bash
npx presetter use @presetter/preset-monorepo
```

## Next Steps

- **Customize your setup**: Learn about [Core Concepts](./concepts) to understand how Presetter works
- **Add custom rules**: See [Configuration](./configuration) to override preset settings
- **Explore presets**: Check out the [Preset Ecosystem](/docs/presets) to find the perfect preset for your needs
- **Build something**: Your development environment is ready - start coding!

## Need Help?

- 📚 **New concepts?** Read [Core Concepts](./concepts)
- 🔧 **Having issues?** Check [Advanced Topics](/docs/advanced) for troubleshooting
- ❓ **Questions?** Visit [Advanced Topics](/docs/advanced) for frequently asked questions
- 🐛 **Found a bug?** [Report it on GitHub](https://github.com/alvis/presetter/issues)