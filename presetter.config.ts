import { asset, preset } from 'presetter';
import monorepo from 'presetter-preset-monorepo';

import type { ViteUserConfig } from 'vitest/config';

export default preset('presetter-monorepo', {
  extends: [monorepo],
  override: {
    assets: ({ isRepoRoot }) =>
      isRepoRoot
        ? {}
        : {
            '.npmignore': ['!/overrides/**', '!/templates/**'], // include overrides and templates folders
            'eslint.config.ts': {
              default: [
                {
                  name: 'presetter-monorepo:template-files',
                  files: ['**/*.override.ts', '**/*.template.ts'],
                  rules: {
                    'max-lines': 'off',
                    'max-lines-per-function': 'off',
                  },
                },
              ],
            },
            'vitest.config.ts': asset<{ default: ViteUserConfig }>({
              default: {
                test: {
                  clearMocks: false, // disable for counting template files usage
                },
              },
            }),
          },
  },
});
