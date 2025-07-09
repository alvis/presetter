/* v8 ignore start */

import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import globals from 'globals';
import { asset } from 'presetter';

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
            entryPoint: await findTailwindEntryFile(projectRoot),
            tailwindConfig: await findTailwindConfigFile(projectRoot),
          },
        },
      },
    ],
  }),
);

const commonSourceDirectories = [
  '.storybook',
  'source',
  'src',
  'app',
  'styles',
  'assets',
  'public',
  'static',
];
const commonStyleFileNames = [
  'globals.css',
  'global.css',
  'index.css',
  'main.css',
  'styles.css',
];

/**
 * checks if a file contains the tailwind CSS import directive
 * @param filePath the path to the CSS file to check
 * @returns true if the file contains @import "tailwindcss"
 */
async function containsTailwindImport(filePath: string): Promise<boolean> {
  try {
    const content = await readFile(filePath, 'utf-8');

    return /@import\s+["']tailwindcss/.exec(content) !== null;
  } catch {
    return false;
  }
}

/**
 * searches for tailwind entry file in a specific directory
 * @param directoryPath the directory path to search in
 * @returns path to the CSS file containing @import "tailwindcss" or undefined
 */
async function searchDirectoryForTailwindEntry(
  directoryPath: string,
): Promise<string | undefined> {
  try {
    const files = await readdir(directoryPath);

    // create a prioritized list of files to check
    const filesToCheck = [
      // common style files first (if they exist)
      ...commonStyleFileNames.filter((name) => files.includes(name)),
      // then all other CSS files
      ...files.filter(
        (file) => file.endsWith('.css') && !commonStyleFileNames.includes(file),
      ),
    ];

    // check each file for tailwind import
    for (const file of filesToCheck) {
      const filePath = resolve(directoryPath, file);
      if (await containsTailwindImport(filePath)) {
        return filePath;
      }
    }
  } catch {
    // directory doesn't exist or can't be read
  }

  return undefined;
}

/**
 * finds the main CSS file that contains the tailwind CSS import directive
 * @param root the root directory to search for CSS files
 * @returns path to the CSS file containing @import "tailwindcss"
 */
async function findTailwindEntryFile(
  root: string,
): Promise<string | undefined> {
  // search in common source directories
  for (const sourceDirectory of commonSourceDirectories) {
    const directoryPath = resolve(root, sourceDirectory);
    const result = await searchDirectoryForTailwindEntry(directoryPath);
    if (result) {
      return result;
    }
  }

  // search in root directory
  return searchDirectoryForTailwindEntry(root);
}

/**
 * finds the tailwindcss config file under the root directory
 * @param root the root directory to search for tailwindcss config file
 * @returns path to the tailwindcss config file
 */
async function findTailwindConfigFile(
  root: string,
): Promise<string | undefined> {
  try {
    const files = await readdir(root);

    for (const file of files) {
      if (file.startsWith('tailwind.config')) {
        return resolve(root, file);
      }
    }
  } catch {
    // Directory can't be read
  }

  return undefined;
}
