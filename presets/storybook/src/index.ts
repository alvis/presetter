import { resolve } from 'node:path';

import { preset } from '@presetter/types';

import * as eslintOverride from './eslint/override';
import storybookMain from './storybook/main.template';
import vitestStorybookOverride from './vitest/template';

/** list of configurable variables */
export interface Variables {
  /** the directory containing all source code (default: src) */
  source: string;
  /** the directory containing all test files (default: spec) */
  test: string;
}

export const DEFAULT_VARIABLES = {
  source: 'src',
  test: 'spec',
} satisfies Variables;

export default preset('@presetter/preset-storybook', {
  root: resolve(import.meta.dirname, '..'),
  setup: {
    devDependencies: {
      'storybook': '^10.6.1',
      '@storybook/addon-vitest': '^10.6.1',
      '@storybook/addon-a11y': '^10.0.0',
      '@vitest/browser-playwright': '^5.0.0',
      'playwright': '^1.0.0',
      'eslint-plugin-storybook': '^10.0.0',
      'vitest': '^5.0.0',
    },
    scripts: {
      'storybook': 'run storybook --',
      'build:storybook': 'run build:storybook --',
      'test:sto': 'run test:sto --',
    },
  },
  scripts: {
    'storybook': 'storybook dev -p 6006',
    'build:storybook': 'storybook build',
    'test:sto': `run-s "test -- --project=STO --project='*(STO)' {@}" --`,
    // joins essentials' pretest hook, which runs when package.json maps "pretest"
    'pretest:unit:playwright': `[ "\${PLAYWRIGHT_READY:-}" = "1" ] || playwright install --with-deps chromium`,
    'pretest:sto': 'run-s pretest:unit:playwright',
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
