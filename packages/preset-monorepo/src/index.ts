import { dirname, resolve } from 'node:path';

import { fileURLToPath } from 'node:url';

import essentials from 'presetter-preset-esm';
import strict from 'presetter-preset-strict';
import { preset } from 'presetter-types';

import eslintOverride from './eslint.override';
import tsconfigOverride from './tsconfig.override';
import vitestOverride from './vitest.config.override';

export { DEFAULT_VARIABLES } from 'presetter-preset-esm';

export type { Variables } from 'presetter-preset-esm';

const DIR = dirname(fileURLToPath(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');

export default preset('presetter-preset-monorepo', {
  root: resolve(import.meta.dirname, '..'),
  extends: [essentials, strict],
  scripts: resolve(TEMPLATES, 'scripts.yaml'),
  override: {
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
