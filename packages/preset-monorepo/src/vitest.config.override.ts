import { asset } from 'presetter-types';

import type { ViteUserConfig } from 'vitest/config';

export default asset<{ default: ViteUserConfig }>((_, { variables }) => {
  // NOTE: no rules for non-project-specific files
  return {
    default: {
      test: {
        name: 'root',
        projects: [
          '*/*/vitest.config.ts',
          '*/*/vitest.config.int.ts',
          '*/*/vitest.config.e2e.ts',
        ],
        watch: false,
        // NOTE: setting coverage here is needed in order to report coverage at the workspace level
        coverage: {
          include: [`**/${variables.source}/**/*.?(c|m)[jt]s?(x)`],
          exclude: [
            `**/${variables.source!}/**/index.ts`,
            `**/${variables.source}/**/types/**`,
          ],
          provider: 'v8',
          reporter: ['text', 'html', 'clover', 'json', 'lcov'],
          // NOTE: this is important to make sure exclusion rules in individual projects' vitest.config.ts are respected
          // see https://vitest.dev/config/#coverage-exclude-after-remap
          excludeAfterRemap: true,
          thresholds: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
          },
        },
      },
    },
  };
});
