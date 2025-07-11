import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

/**
 * locates the tailwind css config file under the root directory
 * @param rootDirectory the root directory to search for tailwindcss config file
 * @returns path to the tailwindcss config file
 */
export async function locateTailwindConfigFile(
  rootDirectory: string,
): Promise<string | undefined> {
  try {
    const files = await readdir(rootDirectory);

    for (const file of files) {
      if (file.startsWith('tailwind.config')) {
        return resolve(rootDirectory, file);
      }
    }
  } catch {
    // directory can't be read
  }

  return undefined;
}
