---
sidebar_position: 3
title: '@presetter/preset-storybook'
description: Standalone Storybook configuration as a Presetter preset
---

# @presetter/preset-storybook

_A standalone Presetter preset that wires up Storybook, accessibility checks, and Vitest browser testing — drop it on top of any framework preset._

The **storybook preset** generates a ready-to-run `.storybook` setup, Storybook scripts, ESLint rules for stories, and a Vitest **browser** project so your stories double as component tests.

:::tip Standalone preset
`@presetter/preset-storybook` is independent from `@presetter/preset-web`, so you can add Storybook to any project (React, Next.js, etc.) without pulling in browser/Tailwind settings unless you need them.
:::

## Purpose

**@presetter/preset-storybook** is designed to **extend** a framework preset rather than replace it. When composed, it:

- **Generates Storybook config** — emits `.storybook/main.ts` with story globs derived from your `source` directory and the `@storybook/addon-a11y` and `@storybook/addon-vitest` addons.
- **Adds Storybook scripts** — `storybook`, `build:storybook`, and a `pretest` step that installs Playwright's Chromium on demand.
- **Enables accessibility linting** — overrides `eslint.config.ts` with `eslint-plugin-storybook`'s recommended flat config.
- **Runs stories as tests** — overrides `vitest.config.ts` to add a headless Chromium browser project powered by `@storybook/addon-vitest` and `@vitest/browser-playwright`.

## Features

- **`.storybook/main.ts`** — story globs resolved relative to the Storybook config dir, plus the a11y and Vitest addons.
- **Storybook scripts** — `storybook` (`storybook dev -p 6006`) and `build:storybook` (`storybook build`).
- **On-demand Playwright** — a `pretest` step runs `playwright install --with-deps chromium` unless `PLAYWRIGHT_READY=1`.
- **ESLint story rules** — `eslint-plugin-storybook` `flat/recommended` plus a `**/*.stories.[jt]sx` override that disables `compat/compat`.
- **Vitest browser project** — headless Chromium runner with `globals: true`, sensible timeouts, and noise-filtering for benign React `act()` warnings.

## Installation

### Quick Start

```bash
# install the preset alongside a framework preset (Next.js shown)
npm install --save-dev presetter @presetter/preset-next @presetter/preset-storybook
```

### Peer Dependencies

The preset declares the following peer dependencies. With npm 7+ these are installed automatically; install them explicitly for other package managers:

```bash
npm install --save-dev \
  @storybook/addon-a11y \
  @storybook/addon-vitest \
  @storybook/nextjs-vite \
  @vitest/browser-playwright \
  eslint-plugin-storybook \
  playwright \
  storybook \
  vitest
```

## Usage

The storybook preset is meant to be combined with a framework preset:

```typescript title="presetter.config.ts"
import next from '@presetter/preset-next';
import storybook from '@presetter/preset-storybook';
import { preset } from 'presetter';

export default preset('app', {
  extends: [next, storybook],
});
```

### Selecting the Storybook framework

By default `.storybook/main.ts` does not pin a framework. For a Next.js project, override the asset to use `@storybook/nextjs-vite` — the canonical configuration used by the `examples/next` project:

```typescript title="presetter.config.ts"
import next from '@presetter/preset-next';
import storybook from '@presetter/preset-storybook';
import { preset } from 'presetter';

export default preset('example-next', {
  extends: [next, storybook],
  override: {
    assets: {
      '.storybook/main.ts': {
        default: {
          framework: '@storybook/nextjs-vite',
        },
      },
    },
  },
});
```

## Generated Files & Configurations

### `.storybook/main.ts` (auto-generated)

The preset merges the following into your `.storybook/main.ts`. Story globs are resolved against your `source` directory (default `src`) and kept **relative** to the Storybook config dir so `@storybook/addon-vitest` can transform them into Vitest tests:

```typescript
export default {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-vitest'],
};
```

`.storybook/main.ts` is added to `.gitignore` because it is generated during bootstrap.

### `.storybook/preview.ts` (your project)

A preview file enables the a11y addon and turns accessibility findings into test failures. The `examples/next` project uses:

```typescript title=".storybook/preview.ts"
import addonA11y from '@storybook/addon-a11y';
import { definePreview } from '@storybook/nextjs-vite';

export default definePreview({
  parameters: {
    a11y: {
      test: 'error', // run a11y checks as Vitest assertions
    },
  },
  addons: [addonA11y()],
});
```

### Scripts

| Script | Command | Purpose |
| --- | --- | --- |
| `storybook` | `storybook dev -p 6006` | Start the Storybook dev server. |
| `build:storybook` | `storybook build` | Build a static Storybook. |
| `pretest` | installs Chromium unless `PLAYWRIGHT_READY=1` | Ensures Playwright's Chromium is available before tests run. |

### `eslint.config.ts` (override)

```typescript
import storybook from 'eslint-plugin-storybook';

export default [
  ...storybook.configs['flat/recommended'],
  {
    name: '@presetter/preset-storybook:override:stories',
    files: ['**/*.stories.[jt]sx'],
    rules: {
      'compat/compat': 'off',
    },
  },
];
```

### `vitest.config.ts` (override)

The preset adds a headless Chromium **browser** project so every story is executed as a test:

```typescript
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

export default {
  plugins: [storybookTest({ configDir: '.storybook' })],
  test: {
    globals: true,
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
  },
};
```

If a `.storybook/vitest.setup.ts` exists, it is wired up as a setup file automatically.

## Use Cases

- **Component documentation** — interactive playgrounds for your UI library.
- **Story-driven testing** — run every story as a Vitest browser test.
- **Accessibility gates** — fail CI when a story violates a11y rules.
- **Design systems** — document and verify shared components in isolation.

## Variables

| Variable | Default | Description |
| --- | --- | --- |
| `source` | `"src"` | Directory scanned for `*.stories.*` files. |

## Related Presets

- `@presetter/preset-next` — Next.js applications that need Storybook alongside their framework runtime.
- [`@presetter/preset-react`](./react) — React applications with TSX support.
- [`@presetter/preset-web`](./web) — browser globals, TailwindCSS linting, DOM libs, and static asset typings.
