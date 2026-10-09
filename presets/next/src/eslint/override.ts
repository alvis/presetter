import { asset, merge, mergeByKey } from 'presetter';

import type { Linter } from 'eslint';

const ROUTE_HANDLER_NAMING_EXCEPTION = {
  selector: ['function', 'variable'],
  modifiers: ['exported'],
  format: null,
  filter: {
    regex: '^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)$',
    match: true,
  },
};

export default asset<{ default: Linter.Config[] }>((current) => {
  const configs = current?.default ?? [];
  const hasTypescriptEslint = configs.some(
    (config) => !!config.plugins?.['@typescript-eslint'],
  );

  if (!hasTypescriptEslint) {
    return { default: configs };
  }

  // reuse each base rule without changing the original config's file scope
  const [essentials, react] = merge<Linter.Config[], Linter.Config[]>(
    mergeByKey('name', [
      { name: '@presetter/preset-essentials' },
      { name: '@presetter/preset-react:override:react-files' },
    ]),
    configs,
  );

  return {
    default: merge<Linter.Config[], Linter.Config[]>(configs, [
      {
        name: '@presetter/preset-next:override:route-handlers',
        files: [
          'app/**/route.{ts,tsx,js,jsx}',
          'src/app/**/route.{ts,tsx,js,jsx}',
        ],
        rules: merge(
          {
            '@typescript-eslint/naming-convention':
              essentials!.rules?.['@typescript-eslint/naming-convention'],
          },
          {
            '@typescript-eslint/naming-convention': [
              ROUTE_HANDLER_NAMING_EXCEPTION,
            ],
          },
        ),
      },
      {
        name: '@presetter/preset-next:override:jsx-route-handlers',
        files: ['app/**/route.{tsx,jsx}', 'src/app/**/route.{tsx,jsx}'],
        rules: merge(
          {
            '@typescript-eslint/naming-convention':
              react!.rules?.['@typescript-eslint/naming-convention'],
          },
          {
            '@typescript-eslint/naming-convention': [
              ROUTE_HANDLER_NAMING_EXCEPTION,
            ],
          },
        ),
      },
    ]),
  };
});
