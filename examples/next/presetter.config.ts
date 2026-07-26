import next from '@presetter/preset-next';
import storybook from '@presetter/preset-storybook';
import { preset } from 'presetter';

import { name } from './package.json' with { type: 'json' };

export default preset(name, {
  extends: [next, storybook],
  override: {
    assets: {
      '.storybook/main.ts': {
        default: {
          framework: '@storybook/nextjs-vite',
        },
      },
      'vitest.config.ts': {
        default: {
          optimizeDeps: {
            include: [
              'react/jsx-dev-runtime',
              '@storybook/addon-a11y',
              '@storybook/nextjs-vite',
            ],
          },
        },
      },
    },
  },
});
