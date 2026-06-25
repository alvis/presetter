---
sidebar_position: 1
title: '@presetter/preset-web'
description: Browser globals, DOM typings, Tailwind linting, and static asset typings
---

# @presetter/preset-web

`@presetter/preset-web` is a focused browser layer. It does not extend `@presetter/preset-essentials` and does not include Storybook; compose it with the TypeScript, React, Next.js, or Storybook presets your project actually needs.

## Purpose

Use this preset when a package needs browser-aware generated configuration:

- `tsconfig.json` is extended with `DOM`, `DOM.Iterable`, and `ESNext` libraries.
- ESLint receives browser globals from `globals.browser`.
- TailwindCSS usage is linted through `eslint-plugin-better-tailwindcss`.
- Tailwind entry/config files are discovered and passed into the ESLint settings when present.
- Image and stylesheet module declarations are generated under the configured `types` directory.
- Generated image/style type files are added to `.gitignore`.

## Installation

```bash
npm install --save-dev presetter @presetter/preset-essentials @presetter/preset-web
```

## Configuration

Compose `web` with a base preset when you want a full TypeScript toolchain:

```typescript title="presetter.config.ts"
import essentials from '@presetter/preset-essentials';
import web from '@presetter/preset-web';
import { preset } from 'presetter';

export default preset('browser-package', {
  extends: [essentials, web],
});
```

For React projects, compose the React and web layers explicitly:

```typescript title="presetter.config.ts"
import react from '@presetter/preset-react';
import web from '@presetter/preset-web';
import { preset } from 'presetter';

export default preset('react-package', {
  extends: [react, web],
});
```

Then generate the files:

```bash
npx presetter bootstrap
```

## Generated Files

| File | Purpose |
| --- | --- |
| `.gitignore` | Adds generated web type files to ignored paths. |
| `eslint.config.ts` | Adds browser globals and TailwindCSS lint settings. |
| `tsconfig.json` | Adds DOM libraries for browser APIs. |
| `types/image.d.ts` | Declares common image module imports. |
| `types/style.d.ts` | Declares stylesheet module imports. |

## TailwindCSS

The preset looks for a Tailwind entry file and Tailwind config file in the project. When found, those paths are passed to `eslint-plugin-better-tailwindcss` so class validation uses the same inputs as the app.

The ESLint override enables the recommended warn-level Tailwind rules and warns on conflicting or unknown classes.

## Variables

| Variable | Default | Description |
| --- | --- | --- |
| `types` | `"types"` | Directory for generated `image.d.ts` and `style.d.ts`. |

```typescript title="presetter.config.ts"
import essentials from '@presetter/preset-essentials';
import web from '@presetter/preset-web';
import { preset } from 'presetter';

export default preset('browser-package', {
  extends: [essentials, web],
  variables: {
    types: 'src/types',
  },
});
```

## Related Presets

- [`@presetter/preset-react`](./react) - TSX-focused React configuration.
- [`@presetter/preset-storybook`](./storybook) - standalone Storybook setup.
- `@presetter/preset-next` - complete Next.js composition including web, React, Node, ESM, and strict layers.
