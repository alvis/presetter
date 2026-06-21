import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import essentials from '@presetter/preset-essentials';
import strict from '@presetter/preset-strict';
import { preset } from '@presetter/types';

import eslintOverride from './eslint/override';
import tsconfigOverride from './tsconfig/override';
import vitestOverride from './vitest/config/override';

export { DEFAULT_VARIABLES } from '@presetter/preset-essentials';

export type { Variables } from '@presetter/preset-essentials';

const DIR = dirname(fileURLToPath(import.meta.url));

// paths to the override directory
const OVERRIDES = resolve(DIR, '..', 'overrides');

export default preset('@presetter/preset-monorepo', {
  root: resolve(import.meta.dirname, '..'),
  extends: [essentials, strict],
  override: {
    scripts: resolve(OVERRIDES, 'scripts.yaml'),
    assets: (context) =>
      context.isRepoRoot
        ? {
            // for repo root
            '.lintstagedrc.json': null,
            '.npmignore': null,
            'eslint.config.ts': eslintOverride,
            'tsconfig.json': tsconfigOverride,
            'tsconfig.build.json': null,
            'vitest.config.ts': vitestOverride,
          }
        : {
            // for packages
          },
  },
});
