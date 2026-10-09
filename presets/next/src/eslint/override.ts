import type { Linter } from 'eslint';

export default [
  {
    name: '@presetter/preset-next:override:route-handlers',
    files: ['app/**/route.{ts,tsx,js,jsx}', 'src/app/**/route.{ts,tsx,js,jsx}'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['function', 'variable'],
          modifiers: ['exported'],
          format: null,
          filter: {
            regex: '^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)$',
            match: true,
          },
        },
      ],
    },
  },
] as Linter.Config[];
