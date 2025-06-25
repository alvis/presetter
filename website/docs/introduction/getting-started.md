---
sidebar_position: 2
title: Getting Started
---

# Getting Started with Presetter

## 30-Second Setup

Ready to transform your development workflow? Let's set up Presetter in under 30 seconds:

```bash
# 1. Install Presetter and a preset
npm install --save-dev presetter presetter-preset-esm

# 2. Create configuration file
echo "export { default } from 'presetter-preset-esm';" > presetter.config.ts

# 3. Add bootstrap script to package.json
npm pkg set scripts.bootstrap="presetter bootstrap"

# 4. Install and initialize
npm install
```

🎉 **That's it!** Your project now has TypeScript, ESLint, Vitest, Prettier, and all configurations set up automatically.

## What Just Happened?

When you ran `npm install`, Presetter automatically:

- ✅ Installed all development dependencies (TypeScript, ESLint, Vitest, etc.)
- ✅ Generated configuration files (tsconfig.json, eslint.config.ts, vitest.config.ts, etc.)
- ✅ Set up build and test scripts
- ✅ Configured git hooks for code quality

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

# Lint your code with ESLint
npm run lint

# Format code with Prettier
npm run format

# Run tests in watch mode
npm run test:watch

# Check test coverage
npm run coverage
```

## Choose Your Preset

Different presets are optimized for different project types:

### 🚀 Modern ES Modules Project
```bash
npm install --save-dev presetter presetter-preset-esm
echo "export { default } from 'presetter-preset-esm';" > presetter.config.ts
```

### ⚛️ React Application
```bash
npm install --save-dev presetter presetter-preset-react
echo "export { default } from 'presetter-preset-react';" > presetter.config.ts
```

### 📚 NPM Library (Dual CJS/ESM)
```bash
npm install --save-dev presetter presetter-preset-hybrid
echo "export { default } from 'presetter-preset-hybrid';" > presetter.config.ts
```

### 🏢 Monorepo
```bash
npm install --save-dev presetter presetter-preset-monorepo
echo "export { default } from 'presetter-preset-monorepo';" > presetter.config.ts
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