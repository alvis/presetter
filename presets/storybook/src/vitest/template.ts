import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { asset } from '@presetter/types';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { merge } from 'presetter';

import type { ViteUserConfig } from 'vitest/config';

export default asset<{ default: ViteUserConfig }>((current, context) => {
  const { projectRoot } = context;

  const setupPath = join(projectRoot, '.storybook', 'vitest.setup.ts');

  const browserProvider = playwright();
  const storybook = storybookTest({
    configDir: join(projectRoot, '.storybook'),
    storybookScript: 'npx storybook --no-open',
  });

  return merge(current, {
    default: {
      optimizeDeps: {
        include: ['react/jsx-dev-runtime'],
      },
      resolve: {
        conditions: ['browser', 'import', 'default'],
      },
      test: {
        watch: false,
        globals: true,
        testTimeout: 5000,
        hookTimeout: 5000,
        browser: {
          enabled: true,
          headless: true,
          provider: browserProvider,
          instances: [{ browser: 'chromium' }],
        },
        plugins: [storybook],
        setupFiles: existsSync(setupPath) ? [setupPath] : undefined,
        /**
         * suppress specific console warnings that are known false positives
         *
         * intent: filter out React `act()` warnings that occur in async test contexts.
         * These warnings appear when React state updates happen inside event handlers
         * (e.g., setFocus() after a button click), which is correct production behavior.
         *
         * context:
         * - storybook itself intentionally disables act() warnings in its renderer
         * - react Working Group acknowledges these are often false positives
         *   see: https://github.com/reactwg/react-18/discussions/102
         * - testing Library's userEvent is designed to handle act() wrapping
         * - our code correctly represents real user interactions
         *
         * these warnings don't indicate bugs - they're artifacts of React's test
         * environment detecting async updates that are intentional side effects.
         * @param log the console log message
         * @param type the output stream type ('stdout' or 'stderr')
         * @returns false to suppress the log, void to allow it
         */
        onConsoleLog(log: string, type: 'stdout' | 'stderr'): boolean | void {
          if (type === 'stderr') {
            // Suppress: "An update to X inside a test was not wrapped in act(...)"
            if (log.includes('inside a test was not wrapped in act')) {
              return false;
            }
            // Suppress: "A component suspended inside an `act` scope"
            if (log.includes('A component suspended inside an `act` scope')) {
              return false;
            }
          }
        },
      },
    },
  });
});
