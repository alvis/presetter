import { readdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

import { resolveModule } from '#module';

/**
 * resolves an import path to an absolute file path
 * @param importPath the import path from CSS @import statement
 * @param currentFilePath the path of the current file being processed
 * @returns resolved absolute file path
 */
function resolveImportPath(
  importPath: string,
  currentFilePath: string,
): string {
  return importPath.startsWith('.')
    ? // resolve relative imports
      resolve(dirname(currentFilePath), importPath)
    : // resolve module imports using import.meta.resolve
      resolveModule(importPath, `file://${currentFilePath}`).replace(
        'file://',
        '',
      );
}

/** common source directories where css files are typically located */
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

/** common css file names prioritized during search */
const commonStyleFileNames = [
  'globals.css',
  'global.css',
  'index.css',
  'main.css',
  'styles.css',
];

/**
 * locates the main css file that contains the tailwind css import directive
 * @param rootDirectory the root directory to search for css files
 * @returns path to the css file containing @import "tailwindcss"
 */
export async function locateTailwindEntryFile(
  rootDirectory: string,
): Promise<string | undefined> {
  // search in common source directories
  for (const sourceDirectory of commonSourceDirectories) {
    const directoryPath = resolve(rootDirectory, sourceDirectory);
    const result = await findTailwindEntryInDirectory(directoryPath);
    if (result) {
      return result;
    }
  }

  // search in root directory
  return findTailwindEntryInDirectory(rootDirectory);
}

/**
 * searches for tailwind css entry file in a specific directory
 * @param directoryPath the directory path to search in
 * @returns path to the css file containing @import "tailwindcss" or undefined
 */
async function findTailwindEntryInDirectory(
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
      if (await hasTailwindImport(filePath)) {
        return filePath;
      }
    }
  } catch {
    // directory doesn't exist or can't be read
  }

  return undefined;
}

/**
 * checks if a css file contains tailwind import directive, following local imports recursively
 * @param path the path to the css file to check
 * @returns true if the file contains @import "tailwindcss" directly or indirectly
 */
async function hasTailwindImport(path: string): Promise<boolean> {
  return checkTailwindImportRecursively(path, new Set<string>());
}

/**
 * internal recursive helper for hasTailwindImport
 * @param path the path to the css file to check
 * @param visited set of already visited files to prevent infinite loops
 * @returns true if the file contains @import "tailwindcss" directly or indirectly
 */
async function checkTailwindImportRecursively(
  path: string,
  visited: Set<string>,
): Promise<boolean> {
  try {
    if (visited.has(path)) {
      return false;
    }
    visited.add(path);

    const content = await readFile(path, 'utf-8');

    // check for direct tailwind import
    if (/@import\s+["']tailwindcss/.exec(content) !== null) {
      return true;
    }

    // find all CSS imports and check them recursively
    const importRegex = /@import\s+["']([^"']+)["']/g;
    let match: RegExpExecArray | null;

    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];

      // skip URL imports (http/https)
      if (/^https?:\/\//.test(importPath)) {
        continue;
      }

      try {
        const resolvedImportPath = resolveImportPath(importPath, path);

        // recursively check the imported file
        if (await checkTailwindImportRecursively(resolvedImportPath, visited)) {
          return true;
        }
      } catch {
        // if import resolution fails, skip this import
        continue;
      }
    }

    return false;
  } catch {
    return false;
  }
}
