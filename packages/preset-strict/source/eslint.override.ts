/* v8 ignore start */

import type { Linter } from 'eslint';

export default [
  {
    name: 'presetter-preset-strict:override:test-files',
    files: [
      '**/*.e2e.ts',
      '**/*.integration.ts',
      '**/*.spec.ts',
      '**/*.spec-d.ts',
      '**/*.test.ts',
      '**/*.test-d.ts',
      '**/*.unit.ts',
      '**/*.unit-d.ts',
    ],
    rules: {
      'sonarjs/no-duplicate-string': 'off', // permits duplicate strings in tests, as repeated values may be intentional
    },
  },
] satisfies Linter.Config[] as Linter.Config[];
