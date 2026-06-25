---
slug: presetter-v8-3-update
title: 'Presetter v8.3: Toolchain Refresh and Smarter Presets'
authors: [alvis]
tags: [release, monorepo, storybook, web, v8]
---

Presetter has kept shipping steady improvements since the v8.0 launch. The v8.3 update pulls those changes together with refreshed tooling, smarter defaults, and cleaner monorepo behavior.

{/* truncate */}

## Highlights Since v8.0

### 🚀 Toolchain Upgrades (v8.2)
- **Vitest 4** in `presetter-preset-essentials`
- **Storybook 10** in `presetter-preset-storybook`
- **Next.js 16** in `presetter-preset-next`

### ✨ Smarter Defaults (v8.3)
- **ESLint config discovery** now prefers the closest config file per package
- **Automatic binary resolution** in `run`, `run-s`, and `run-p` for preset-provided tools
- **Typecheck script** included across preset package templates

### 🧭 Monorepo Quality
- **Linting includes source + test files** by default
- **Workspace tests** pick up `vitest.config{,.int,.e2e}.ts` automatically

## Real-World Configuration Example

This simplified snippet mirrors how we run Presetter in a production monorepo (from `~/Repositories/core`):

```typescript title="presetter.config.ts"
import { asset, preset } from 'presetter';
import monorepo from 'presetter-preset-monorepo';

export default preset('core', {
  extends: [monorepo],
  variables: {
    target: 'ES2024',
  },
  override: {
    assets: (context) =>
      context.isRepoRoot
        ? {
            'vitest.config.ts': asset((current) => ({
              ...current,
              default: {
                ...current?.default,
                test: {
                  ...current?.default?.test,
                  projects: ['*/*/vitest.config{,.int,.e2e}.ts'],
                },
              },
            })),
          }
        : {
            'eslint.config.ts': {
              default: [
                {
                  name: 'monorepo:override',
                  rules: {
                    'max-lines': 'off',
                  },
                },
              ],
            },
          },
  },
});
```

## Upgrade Checklist

```bash
npm install --save-dev presetter@^8.3.0 \
  presetter-preset-essentials@^8.3.0 \
  presetter-preset-web@^8.3.0

# Regenerate configs after upgrading
npx presetter bootstrap
```

## Related Docs

- [Installation](/docs/introduction/installation)
- [presetter-preset-web](/docs/presets/frameworks/web)
- [presetter-preset-monorepo](/docs/presets/quality/monorepo)
- [CLI run](/docs/cli-reference/run)
