import esm from 'presetter-preset-esm';
import strict from 'presetter-preset-strict';
import { preset } from 'presetter-types';

export default preset('presetter-monorepo', {
  extends: [esm, strict],
  variables: {
    root: '../..',
  },
  override: {
    assets: (context) =>
      context.root === import.meta.dirname
        ? {
            // for root
            '.gitignore': null,
            '.npmignore': null,
            'eslint.config.ts': null,
            'tsconfig.json': null,
            'tsconfig.build.json': null,
            'vitest.config.ts': (current, { variables }) => ({
              ...current,
              default: {
                ...current!.default,
                test: {
                  ...current!.default.test,
                  coverage: {
                    ...current!.default.test.coverage,
                    include: [`packages/*/${variables.source!}/**`],
                  },
                },
              },
            }),
          }
        : {
            // for packages
            '.prettierrc.json': null,
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
            'vitest.config.ts': {
              default: {
                test: {
                  clearMocks: false, // disable for counting template files usage
                },
              },
            },
          },
  },
});
