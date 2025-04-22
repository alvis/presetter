import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from 'presetter-types';

import eslintOverride from './eslint.override';
import eslint from './eslint.template';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directories
const OVERRIDES = resolve(DIR, '..', 'overrides');

/** list of configurable variables */
export interface Variables {}

export const DEFAULT_VARIABLES = {} satisfies Variables;

export default preset('presetter-preset-web', {
  assets: {
    'eslint.config.ts': eslint,
  },
  override: {
    assets: {
      '.tsconfig.json': resolve(OVERRIDES, 'tsconfig.yaml'),
      'eslint.config.ts': eslintOverride,
    },
  },
});
