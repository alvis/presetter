import { asset } from 'presetter';

import { REACT_NAMING_CONVENTION_OPTIONS } from './naming-convention';

import type { Linter } from 'eslint';

export default asset<{ default: Linter.Config[] }>((current, { variables }) => {
  const configs = current?.default ?? [];

  const hasTypescriptEslint = configs.some(
    (config) => !!config.plugins?.['@typescript-eslint'],
  );

  const hasJsDoc = configs.some((config) => !!config.plugins?.jsdoc);

  return {
    default: [
      ...configs,
      {
        name: '@presetter/preset-react:override:react-files',
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
              ...REACT_NAMING_CONVENTION_OPTIONS,
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
      {
        name: '@presetter/preset-react:override:test-files',
        files: [`${variables.test!}/**/*.[jt]sx`],
        // disable rules that are not suitable for test files
        rules: {
          'max-lines-per-function': 'off', // allows longer functions in tests, especially when handling complex expected values
          ...(hasTypescriptEslint && {
            '@typescript-eslint/naming-convention': 'off', // ignores strict naming conventions in tests for flexibility with expected values
          }),
          ...(hasTypescriptEslint && {
            'jsdoc/require-returns': 'off', // does not require return documentation for test functions
          }),
        },
      },
    ] as Linter.Config[],
  };
});
