import esm from '@presetter/preset-esm';
import monorepo from '@presetter/preset-monorepo';
import node from '@presetter/preset-node';

import { asset, preset } from 'presetter';

import type { ViteUserConfig } from 'vitest/config';

const templates = [
  '**/template.ts',
  '**/*.template.ts',
  '**/*.override.ts',
  '**/override.ts',
];

export default preset('@presetter/monorepo', {
  extends: [monorepo, esm, node],
  override: {
    assets: ({ isRepoRoot }) =>
      isRepoRoot
        ? {
            // NOTE: --project ignores root-relative coverage excludes, so keep e2e out of the projects
            'vitest.config.ts': asset<{ default: ViteUserConfig }>({
              default: {
                test: {
                  projects: ['!e2e/vitest.config.ts'],
                  coverage: {
                    exclude: ['e2e/**', 'website/**', 'examples', ...templates],
                  },
                },
              },
            }),
          }
        : {
            'vitest.config.ts': asset<{ default: ViteUserConfig }>({
              default: { test: { coverage: { exclude: templates } } },
            }),
            '.npmignore': ['!/overrides/**', '!/templates/**'],
            'eslint.config.ts': {
              default: [
                {
                  name: '@presetter/monorepo:template-files',
                  files: templates,
                  rules: {
                    'max-lines': 'off',
                    'max-lines-per-function': 'off',
                  },
                },
              ],
            },
          },
  },
});
