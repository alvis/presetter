# @presetter/preset-storybook

Storybook configuration as a standalone Presetter preset.

```typescript
import { preset } from 'presetter';
import next from '@presetter/preset-next';
import storybook from '@presetter/preset-storybook';

export default preset('app', {
  extends: [next, storybook],
});
```

The preset generates `.storybook/main.ts`, `.storybook/preview.ts`, Storybook scripts, Storybook ESLint rules, and the `STO` Vitest browser project.

`STO` runs `*.stories.jsx` and `*.stories.tsx` files selected by the Storybook
`stories` configuration in headless Chromium. The addon replaces Vitest’s
`include`, so the generated Storybook `stories` glob uses the same JSX/TSX pattern.
Override `stories` to customize discovery. Browser plugins, setup
files belong only to `STO`; other inherited projects keep their own settings.
The root console callback suppresses known React warnings only for browser-test
logs and preserves any inherited callback. If present, `.storybook/vitest.setup.ts` is
loaded for story tests.

`STO` is always registered, so `run test` and bare `vitest` run `UNIT` and `STO`
together. Use `run test:sto` to select story tests only. `pretest:unit:playwright`
joins the `pretest` hook (and `pretest:sto` reuses it) to install Chromium unless
`PLAYWRIGHT_READY=1`. Package managers fire these hooks only when `package.json`
maps them, e.g. `"pretest": "run pretest"`; `run <script>` alone does not.

STO retains 5-second test and hook timeouts. The shared 10-minute shutdown
timeout applies to the whole Vitest run.
