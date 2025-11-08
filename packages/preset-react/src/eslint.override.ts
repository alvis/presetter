import { asset } from 'presetter';

import type { Linter } from 'eslint';

export default asset<{ default: Linter.Config[] }>((current) => {
  const configs = current?.default ?? [];

  const hasTypescriptEslint = configs.some(
    (config) => !!config.plugins?.['@typescript-eslint'],
  );

  const hasJsDoc = configs.some((config) => !!config.plugins?.jsdoc);

  return {
    default: [
      ...configs,
      {
        name: 'presetter-preset-react:override:react-files',
        files: ['**/*.[jt]sx'],
        rules: {
          'max-lines-per-function': [
            'warn',
            {
              max: 120, // extend the default to 120 lines for functional components
            },
          ],
          ...(hasTypescriptEslint && {
            '@typescript-eslint/naming-convention': [
              'error', // add PascalCase to the list for functional components
              {
                selector: 'default',
                format: [
                  'camelCase', // default
                ],
                leadingUnderscore: 'allow', // default
                trailingUnderscore: 'allow', // default
              },
              {
                selector: 'import',
                format: [
                  'camelCase', // default, for functions and variables
                  'PascalCase', // default, for classes
                ],
              },
              {
                selector: 'function',
                format: [
                  'camelCase', // default
                  'PascalCase', // for react components
                ],
              },
              {
                selector: 'objectLiteralMethod',
                format: null, // disable as an object literal is likely used for assigning parameters to a third-party library
              },
              {
                selector: 'objectLiteralProperty',
                format: null, // disable as an object literal is likely used for assigning parameters to a third-party library
              },
              {
                selector: 'parameter',
                format: [
                  'camelCase', // default
                  'PascalCase', // for react components
                ],
                leadingUnderscore: 'allow', // default
                trailingUnderscore: 'allow', // default
              },
              {
                selector: 'variable',
                format: [
                  'PascalCase', // for react functional components
                  'camelCase', // default, for variables
                  'UPPER_CASE', // default, for constants
                ],
                leadingUnderscore: 'allow', // add _prefix to ignore the rule
                trailingUnderscore: 'allow', // add _suffix to ignore the rule
              },
              {
                selector: 'typeLike',
                format: [
                  'PascalCase', // default
                ],
              },
            ],
          }),
          ...(hasJsDoc && {
            'jsdoc/require-returns': [
              'error', // tell us what the function is expected to return unless it's a JSX element
              {
                checkGetters: false,
                contexts: [
                  "FunctionDeclaration:has(BlockStatement > ReturnStatement:not([argument.type='JSXElement']))",
                  "ArrowFunctionExpression:has(BlockStatement > ReturnStatement:not([argument.type='JSXElement']))",
                ],
              },
            ],
          }),
        },
      },
    ] as Linter.Config[],
  };
});
