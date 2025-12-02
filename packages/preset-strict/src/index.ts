import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from 'presetter-types';

import * as eslintOverride from './eslint.override';
import eslintTemplate from './eslint.template';
import * as vitestOverride from './vitest.override';

/** list of configurable variables */
export interface Variables {}

export const DEFAULT_VARIABLES = {} satisfies Variables;

const DIR = dirname(fileURLToPath(import.meta.url));

// paths to the template directory
const OVERRIDES = resolve(DIR, '..', 'overrides');

export default preset('presetter-preset-strict', {
  assets: {
    'eslint.config.ts': eslintTemplate,
  },
  override: {
    scripts: resolve(OVERRIDES, 'scripts.yaml'),
    assets: {
      'eslint.config.ts': eslintOverride,
      'vitest.config.ts': vitestOverride,
    },
  },
});
