import addonA11y from '@storybook/addon-a11y';

import { definePreview } from '@storybook/nextjs-vite';

import '../src/app/globals.css';

export default definePreview({
  parameters: {
    a11y: {
      test: 'error', // enable automatic vitest on a11y
    },
  },
  addons: [addonA11y()],
});
