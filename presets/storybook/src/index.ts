import { resolve } from 'node:path';

import { preset } from '@presetter/types';

import * as eslintOverride from './eslint/override';
import storybookMain from './storybook/main.template';
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
  scripts: {
    'storybook': 'storybook dev -p 6006',
    'build:storybook': 'storybook build',
    'pretest': `[ $PLAYWRIGHT_READY = "1" ] || playwright install --with-deps chromium`,
  },
  assets: {
    '.gitignore': ['.storybook/main.ts'],
    '.storybook/main.ts': storybookMain,
  },
  override: {
    assets: {
      'eslint.config.ts': eslintOverride,
      'vitest.config.ts': vitestStorybookOverride,
    },
  },
});
