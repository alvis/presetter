import { asset } from '@presetter/types';

import type { ViteUserConfig } from 'vitest/config';

export default asset<{ default: ViteUserConfig }>(
  (_, { packageJson, variables }) => {
    // NOTE: no rules for non-project-specific files
    return {
      default: {
        test: {
          name: packageJson.name!,
          projects: ['*/vitest.config.ts', '*/*/vitest.config.ts'],
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
            // reapply coverage exclusions after remapping to original source files.
            excludeAfterRemap: true,
          },
        },
      },
    };
  },
);
