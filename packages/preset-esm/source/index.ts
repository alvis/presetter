import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import essentials from 'presetter-preset-essentials';
import { preset } from 'presetter-types';

export { DEFAULT_VARIABLES } from 'presetter-preset-essentials';

export type { Variables } from 'presetter-preset-essentials';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const OVERRIDES = resolve(DIR, '..', 'overrides');

export default preset('presetter-preset-esm', {
  extends: [essentials],
  override: {
    assets: {
      'tsconfig.json': resolve(OVERRIDES, 'tsconfig.yaml'),
    },
    scripts: resolve(OVERRIDES, 'scripts.yaml'),
  },
});
