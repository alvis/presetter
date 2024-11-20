import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import essentials from 'presetter-preset-essentials';
import { preset } from 'presetter-types';

export { DEFAULT_VARIABLES } from 'presetter-preset-essentials';

export type { Variables } from 'presetter-preset-essentials';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const OVERRIDES = resolve(DIR, '..', 'overrides');
const TEMPLATES = resolve(DIR, '..', 'templates');

export default preset('presetter-preset-hybrid', {
  extends: [essentials],
  assets: {
    'tsconfig.cjs.json': resolve(TEMPLATES, 'tsconfig.cjs.yaml'),
    'tsconfig.mjs.json': resolve(TEMPLATES, 'tsconfig.mjs.yaml'),
  },
  override: {
    scripts: resolve(OVERRIDES, 'scripts.yaml'),
    assets: {
      '.gitignore': ['tsconfig.cjs.json', 'tsconfig.mjs.json'],
    },
  },
});
