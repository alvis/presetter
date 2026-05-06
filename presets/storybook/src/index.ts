import { resolve } from 'node:path';

import { preset } from '@presetter/types';

import eslintOverride from './eslint/override';
import storybookMain from './storybook/main/template';
import storybookPreview from './storybook/preview/template';
import vitestStorybookOverride from './vitest/template';

/** list of configurable variables */
export interface Variables {
  /** the directory containing all source code (default: src) */
  source: string;
}

export const DEFAULT_VARIABLES = {
  source: 'src',
} satisfies Variables;

export default preset('@presetter/preset-storybook', {
  root: resolve(import.meta.dirname, '..'),
  scripts: (current, { isRepoRoot }) => ({
    ...current,
    'storybook': 'storybook dev -p 6006',
    'build:storybook': 'storybook build',
    'test': 'run-s test:storybook',
    'pretest:storybook': `[ "$PLAYWRIGHT_READY = "1" ] || playwright install --with-deps chromium`,
    'test:storybook': 'vitest passWithNoTests --project=*:STO',

    // pretest:story: run-s pretest:story:*
    // test:story: run-s "test -- --project=*:STO {@}" --
  }),
  assets: {
    '.storybook/main.ts': storybookMain,
    '.storybook/preview.ts': storybookPreview,
  },
  override: {
    assets: {
      'eslint.config.ts': eslintOverride,
      'vitest.config.ts': vitestStorybookOverride,
    },
  },
});
