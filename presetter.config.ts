import esm from '@presetter/preset-esm';
import monorepo from '@presetter/preset-monorepo';
import node from '@presetter/preset-node';

import { asset, preset } from 'presetter';

import type { ViteUserConfig } from 'vitest/config';

const vitest = asset<{ default: ViteUserConfig }>({
  default: {
    test: {
      coverage: {
        provider: 'v8',
        exclude: [
          'e2e',
          'examples',
          '**/template.ts',
          '**/*.template.ts',
          '**/*.override.ts',
          '**/override.ts',
        ],
      },
    },
  },
});

export default preset('@presetter/monorepo', {
  extends: [monorepo, esm, node],
  override: {
    scripts: {
      'build:typescript:tsc': 'tsgo -p tsconfig.build.json',
      // Vitest 5 matches coverage paths relative to each selected project.
      'test:coverage':
        'run-s "test -- --project=*:UNIT --project=!@presetter/e2e:UNIT --coverage {@}" --',
    },
    assets: ({ isRepoRoot }) => ({
      'vitest.config.ts': vitest,
      ...(isRepoRoot
        ? {}
        : {
            '.npmignore': ['!/overrides/**', '!/templates/**'], // include overrides and templates folders
            'eslint.config.ts': {
              default: [
                {
                  name: '@presetter/monorepo:template-files',
                  files: [
                    '**/override.ts',
                    '**/*.override.ts',
                    '**/template.ts',
                    '**/*.template.ts',
                  ],
                  rules: {
                    'max-lines': 'off',
                    'max-lines-per-function': 'off',
                  },
                },
              ],
            },
          }),
    }),
  },
});
