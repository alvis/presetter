import { join } from 'node:path';

import { asset, merge } from 'presetter';

import type { StorybookConfig } from 'storybook/internal/types';

export default asset<{ default: StorybookConfig }>(
  (current, { relativeRepoRoot, variables }) => ({
    default: merge(
      {
        stories: [
          join(
            relativeRepoRoot,
            variables.source!,
            '**',
            '*.stories.@(ts|tsx|js|jsx|mdx)',
          ),
        ],
        addons: ['@storybook/addon-a11y', '@storybook/addon-vitest'],
        // framework: {
        //   name: '@storybook/nextjs-vite',
        //   options: {},
        // },
      },
      current,
    ),
  }),
);
