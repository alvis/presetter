/* v8 ignore start */

import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import tailwind from 'eslint-plugin-tailwindcss';
import testing from 'eslint-plugin-testing-library';
import globals from 'globals';
import { asset } from 'presetter';

import type { Linter } from 'eslint';

export default asset<{ default: Linter.Config[] }>((_, { root }) => {
  return {
    default: [
      ...tailwind.configs['flat/recommended'],
      testing.configs['flat/dom'],
      {
        name: 'presetter-preset-web',
        languageOptions: {
          globals: globals.browser,
        },
      },
      {
        name: 'presetter-preset-web:tailwindcss',
        settings: {
          tailwindcss: {
            config: findTailwindConfigs(root),
          },
        },
      },
    ],
  };
});

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
