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
logs and preserves any inherited callback.

### Automatic setup files

STO loads `.storybook/vitest.setup.ts` first when present, then conventional
files detected when the Vitest configuration loads:

| Setting       | Bases, in order                                                            | Suffixes, in order |
| ------------- | -------------------------------------------------------------------------- | ------------------ |
| `setupFiles`  | `vitest.setup`, `<test>/setup`, `<test>/vitest.setup`                      | `.sto`, `.story`   |
| `globalSetup` | `vitest.global-setup`, `<test>/global-setup`, `<test>/vitest.global-setup` | `.sto`, `.story`   |

`<test>` is the inherited `test` variable (default `spec`). Each base uses the
suffixes above, then extensions `ts`, `mts`, `cts`, `js`, `mjs`, `cjs`.
All matches load in that order. For example:

- `vitest.setup.sto.ts`
- `spec/setup.story.mts`
- `spec/vitest.global-setup.sto.ts`

Unsuffixed conventional files belong to UNIT in essentials.
User-configured setup files are kept.

| Variable | Default | Description                                          |
| -------- | ------- | ---------------------------------------------------- |
| `source` | `src`   | Source directory scanned for stories.                |
| `test`   | `spec`  | Test directory scanned for conventional setup files. |

### Running story tests

`STO` is always registered, so `run test` and bare `vitest` run `UNIT` and `STO`
together. Use `run test:sto` to select story tests only. `pretest:unit:playwright`
joins the `pretest` hook (and `pretest:sto` reuses it) to install Chromium unless
`PLAYWRIGHT_READY=1`. Package managers fire these hooks only when `package.json`
maps them, e.g. `"pretest": "run pretest"`; `run <script>` alone does not.

STO retains 5-second test and hook timeouts. The shared 10-minute shutdown
timeout applies to the whole Vitest run.
