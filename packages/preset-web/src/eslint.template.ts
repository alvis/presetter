import globals from 'globals';
import { asset } from 'presetter';

import { locateTailwindConfigFile, locateTailwindEntryFile } from '#tailwind';

import type { Linter } from 'eslint';

export default asset<{ default: Linter.Config[] }>(
  async (current, { projectRoot }) => ({
    default: [
      ...(current?.default ?? []),
      {
        name: 'presetter-preset-web',
        languageOptions: {
          globals: globals.browser,
        },
      },
      {
        name: 'presetter-preset-web:tailwindcss',
        settings: {
          'better-tailwindcss': {
            entryPoint: await locateTailwindEntryFile(projectRoot),
            tailwindConfig: await locateTailwindConfigFile(projectRoot),
          },
        },
      },
    ],
  }),
);
