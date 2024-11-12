import essentialConfig from 'presetter-preset-essentials/vitest.config';

import { defineConfig, mergeConfig } from 'vitest/config';

export default mergeConfig(
  essentialConfig,
  defineConfig({
    test: {
      coverage: {
        provider: 'v8',
        thresholds: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    },
  }),
);
