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
      'sonarjs/no-clear-text-protocols': 'off', // permits usage of http:// protocol in test files for local testing
      'sonarjs/no-duplicate-string': 'off', // permits duplicate strings in tests, as repeated values may be intentional
      // eslint-disable-next-line sonarjs/no-hardcoded-passwords
      'sonarjs/no-hardcoded-passwords': 'off', // allows hardcoded credentials in test files for flexibility with dummy data
      'sonarjs/no-hardcoded-ip': 'off', // allows hardcoded IP addresses in test files for flexibility with dummy data
    },
  },
] satisfies Linter.Config[] as Linter.Config[];
