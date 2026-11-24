import esm from '@presetter/preset-esm';
import monorepo from '@presetter/preset-monorepo';
import node from '@presetter/preset-node';

import { asset, preset } from 'presetter';

import type { ViteUserConfig } from 'vitest/config';

const coverage = {
  provider: 'v8',
  exclude: [
    'e2e/**',
    'website/**',
    'examples',
    '**/template.ts',
    '**/*.template.ts',
    '**/*.override.ts',
    '**/override.ts',
  ],
} satisfies NonNullable<ViteUserConfig['test']>['coverage'];

const vitest = asset<{ default: ViteUserConfig }>({
  default: { test: { coverage } },
});

// NOTE: with --project, Vitest matches coverage paths relative to each selected
// project's root, where root-relative excludes such as 'e2e/**' cannot match,
// so keep the E2E package out of the root's projects instead.
const rootVitest = asset<{ default: ViteUserConfig }>({
  default: { test: { projects: ['!e2e/vitest.config.ts'], coverage } },
});

export default preset('@presetter/monorepo', {
  extends: [monorepo, esm, node],
  override: {
    scripts: {
      'build:typescript:tsc': 'tsgo -p tsconfig.build.json',
    },
    assets: ({ isRepoRoot }) => ({
      ...(isRepoRoot
        ? { 'vitest.config.ts': rootVitest }
        : {
            'vitest.config.ts': vitest,
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
