# Monorepo Presetter Example

This example demonstrates multiple presetter configuration patterns within a monorepo.

## Structure

```
monorepo/
├── presetter.config.ts      # Root: preset-monorepo
├── packages/
│   ├── core/                # No config - inherits from root
│   ├── ui/                  # Extends monorepo + adds react
│   └── utilities/           # Standalone preset-esm (no inheritance)
└── apps/
    ├── presetter.config.ts  # Shared config for all apps
    ├── web/                 # Next.js web app
    └── control-panel/       # Next.js control panel
```

## Configuration Patterns

### 1. No Config (packages/core)

Packages without `presetter.config.ts` inherit configuration from the monorepo root.

### 2. Extend + Add Preset (packages/ui)

```typescript
import { preset } from 'presetter';
import monorepo from 'presetter-preset-monorepo';
import react from 'presetter-preset-react';

export default preset('@example/ui', {
  extends: [monorepo, react],
});
```

### 3. Standalone (packages/utilities)

```typescript
export { default } from 'presetter-preset-esm';
```

Completely independent configuration - does not inherit from root.

### 4. Shared Config (apps/)

A single `apps/presetter.config.ts` is shared by all app packages:

```typescript
import { preset } from 'presetter';
import monorepo from 'presetter-preset-monorepo';
import next from 'presetter-preset-next';

export default preset('@example/apps', {
  extends: [monorepo, next],
});
```

## Bootstrap Command

The root `package.json` includes:

```json
{
  "scripts": {
    "install": "presetter bootstrap --projects . --projects */*/"
  }
}
```

This bootstraps all packages and apps automatically on `pnpm install`.
