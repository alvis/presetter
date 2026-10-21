import { writeFile } from 'node:fs/promises';

import type { PackageJson } from 'type-fest';

/**
 * writes a manifest using the original indentation and newline preferences
 * @param path the target package.json
 * @param manifest the updated manifest
 * @param original content providing the formatting preferences
 */
export async function writePackageJson(
  path: string,
  manifest: PackageJson,
  original: string,
): Promise<void> {
  const indentation = /^[\t ]+(?=")/m.exec(original)?.[0] ?? 2;
  const newline = original.endsWith('\r\n')
    ? '\r\n'
    : original.endsWith('\n')
      ? '\n'
      : '';
  const content = JSON.stringify(manifest, null, indentation);

  await writeFile(
    path,
    `${content.replaceAll('\n', () => newline || '\n')}${newline}`,
  );
}
