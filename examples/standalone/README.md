# Standalone Presetter Example

This example demonstrates how to use presetter in a single-package project with minimal configuration.

## Setup

The entire configuration is just one line in `presetter.config.ts`:

```typescript
export { default } from 'presetter-preset-esm';
```

Install dependencies to bootstrap presetter:

```bash
pnpm install
```

## What Gets Generated

Presetter automatically generates all configuration files:

- `tsconfig.json`, `tsconfig.build.json` - TypeScript configuration
- `eslint.config.ts` - ESLint rules
- `vitest.config.ts` - Test runner configuration
- `.prettierrc.json` - Code formatting
- `.gitignore`, `.npmignore` - Ignore patterns
- `.lintstagedrc.json` - Pre-commit linting

## Available Scripts

- `pnpm build` - Build the project
- `pnpm test` - Run tests
- `pnpm lint` - Lint code
- `pnpm coverage` - Run tests with coverage
- `pnpm watch` - Watch mode for development

## Key Benefit

**Zero configuration complexity** - Just install `presetter` and `presetter-preset-esm`, and you get a fully configured TypeScript development environment.
