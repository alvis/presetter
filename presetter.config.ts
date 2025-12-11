import { asset, preset } from 'presetter';
import monorepo from 'presetter-preset-monorepo';

import type { ViteUserConfig } from 'vitest/config';

const vitest = asset<{ default: ViteUserConfig }>({
  default: {
    test: {
      coverage: {
        provider: 'v8',
        exclude: ['examples', '**/*.template.ts', '**/*.override.ts'],
      },
    },
  },
});

export default preset('presetter-monorepo', {
  extends: [monorepo],
  override: {
    assets: ({ isRepoRoot }) => ({
      'vitest.config.ts': vitest,
      ...(isRepoRoot
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
          }),
    }),
  },
});
