import { REACT_NAMING_CONVENTION_OPTIONS } from '@presetter/preset-react';

import { asset } from 'presetter';

import { ROUTE_HANDLER_NAMING_EXCEPTION } from './naming-convention';

import type { Linter } from 'eslint';

export default asset<{ default: Linter.Config[] }>((current) => {
  const configs = current?.default ?? [];
  const hasTypescriptEslint = configs.some(
    (config) => !!config.plugins?.['@typescript-eslint'],
  );
  const namingConvention = configs.find(
    (config) => config.name === '@presetter/preset-essentials',
  )?.rules?.['@typescript-eslint/naming-convention'];

  if (!hasTypescriptEslint || !Array.isArray(namingConvention)) {
    return { default: configs };
  }

  return {
    default: [
      ...configs,
      {
        name: '@presetter/preset-next:override:route-handlers',
        files: [
          'app/**/route.{ts,tsx,js,jsx}',
          'src/app/**/route.{ts,tsx,js,jsx}',
        ],
        rules: {
          '@typescript-eslint/naming-convention': [
            namingConvention[0],
            ROUTE_HANDLER_NAMING_EXCEPTION,
            ...namingConvention.slice(1),
          ],
        },
      },
      {
        name: '@presetter/preset-next:override:jsx-route-handlers',
        files: ['app/**/route.{tsx,jsx}', 'src/app/**/route.{tsx,jsx}'],
        rules: {
          '@typescript-eslint/naming-convention': [
            'error',
            ROUTE_HANDLER_NAMING_EXCEPTION,
            ...REACT_NAMING_CONVENTION_OPTIONS,
          ],
        },
      },
    ] as Linter.Config[],
  };
});
