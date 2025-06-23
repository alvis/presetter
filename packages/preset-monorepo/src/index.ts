import essentials from 'presetter-preset-esm';
import strict from 'presetter-preset-strict';
import { preset } from 'presetter-types';

import eslintOverride from './eslint.override';
import tsconfigOverride from './tsconfig.override';
import vitestOverride from './vitest.config.override';

export { DEFAULT_VARIABLES } from 'presetter-preset-esm';

export type { Variables } from 'presetter-preset-esm';

export default preset('presetter-preset-monorepo', {
  extends: [essentials, strict],
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
            '.prettierrc.json': null,
          },
  },
});
