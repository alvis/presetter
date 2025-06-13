/* v8 ignore start */

import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import globals from 'globals';
import { asset } from 'presetter';

import type { Linter } from 'eslint';

export default asset<{ default: Linter.Config[] }>(
  (current, { projectRoot }) => ({
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
            tailwindConfig: findTailwindConfigs(projectRoot),
          },
        },
      },
    ],
  }),
);

/**
 * finds all possible tailwindcss config files under the root directory
 * @param root the root directory to search for tailwindcss config files
 * @returns an array of paths to tailwindcss config files
 */
function findTailwindConfigs(root: string): string | undefined {
  const files = readdirSync(root);

  for (const file of files) {
    if (file.startsWith('tailwind.config')) {
      return resolve(root, file);
    }
  }

  return undefined;
}
