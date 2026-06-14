import globals from 'globals';
import { asset } from 'presetter';

import { locateTailwindConfigFile, locateTailwindEntryFile } from '#tailwind';

import type { Linter } from 'eslint';

export default asset<{ default: Linter.Config[] }>(
  async (current, { projectRoot }) => {
    const entryPoint = await locateTailwindEntryFile(projectRoot);
    const tailwindConfig = await locateTailwindConfigFile(projectRoot);

    return {
      default: [
        ...(current?.default ?? []),
        {
          name: '@presetter/preset-web',
          languageOptions: {
            globals: globals.browser,
          },
        },
        ...(entryPoint
          ? [
              {
                name: '@presetter/preset-web:tailwindcss',
                settings: {
                  'better-tailwindcss': { entryPoint, tailwindConfig },
                },
              },
            ]
          : []),
      ],
    };
  },
);
