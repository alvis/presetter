# Bun Example

This example demonstrates how to compose `@presetter/preset-esm` with `@presetter/preset-bun` for a Bun application.

## Setup

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import bun from '@presetter/preset-bun';
import esm from '@presetter/preset-esm';

export default preset('example-bun', {
  extends: [esm, bun],
});
```

## Available Builds

- `pnpm build` mirrors the `src` tree into `lib` and emits declaration files
- `pnpm exec run build:bundle -- src/index.ts --outdir dist` bundles a single entrypoint
- `pnpm exec run build:compile -- src/index.ts --outfile app` compiles a single entrypoint into an executable

## When to Use

Use this setup when you want Bun for application builds, but still want Presetter to manage your TypeScript, linting, and test configuration.
