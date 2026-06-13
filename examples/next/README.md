# Next Presetter + Storybook Example

This example demonstrates [`@presetter/preset-storybook`](../../presets/storybook) composed with [`@presetter/preset-next`](../../presets/next) in a real one-page Next app.

## Setup

`presetter.config.ts` combines the Next and Storybook presets, then overrides only `.storybook/main.ts`:

```typescript
import { resolve } from 'node:path';

import next from '@presetter/preset-next';
import storybook from '@presetter/preset-storybook';
import { preset } from 'presetter';

export default preset('example-next', {
  extends: [next, storybook],
  override: {
    assets: {
      '.storybook/main.ts': resolve(import.meta.dirname, '.storybook/main.ts'),
    },
  },
});
```

The override changes the Storybook `addons` list and keeps the framework on `@storybook/nextjs-vite`.

## Quickstart

```bash
pnpm install
pnpm dev
pnpm storybook
pnpm test:storybook
pnpm build-storybook
```

## What's inside

- `src/app/LandingPage.tsx` - the ACME Inc one-page landing page.
- `src/app/LandingPage.stories.tsx` - a fullscreen Storybook story for the page.
- `public/images/acme-hero-landscape.png` - hero landscape illustration.
- `public/images/acme-sky-texture.svg` - generated sky texture asset.
- `public/images/acme-service-narrative-strategy.jpg` - services card image for narrative strategy.
- `public/images/acme-service-production-sprint.jpg` - services card image for production sprint.
- `public/images/acme-service-distribution-kit.jpg` - services card image for distribution kit.
- `.storybook/main.ts` - the local Storybook override consumed by Presetter.
