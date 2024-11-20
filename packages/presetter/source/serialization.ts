import { extname } from 'node:path';

import { dump } from 'js-yaml';

import type { ResolvedPresetAsset } from 'presetter-types';

// JSON format
const INDENT = 2;

/**
 * generates dynamic ES module content for the specified preset
 * @param exports an array of export names to include in the generated content
 * @returns a string representing the dynamically generated ES module content
 */
export function buildEsmFile(exports: string[]): string {
  return [
    `import { resolve } from 'presetter';`,
    '',
    `const assets = await resolve(import.meta.url);`,
    '',
    ...exports.map((exportName) =>
      exportName === 'default'
        ? `export default assets['${exportName}'];`
        : `export const ${exportName} = assets['${exportName}'];`,
    ),
  ].join('\n');
}

/**
 * serialize a configuration content to the right format according to its destination
 * @param destination the path to which the content will be written
 * @param content configuration content
 * @returns serialized content
 */
export function serialize(
  destination: string,
  content: ResolvedPresetAsset,
): string | Buffer {
  if (Buffer.isBuffer(content)) {
    return content;
  }

  switch (extname(destination)) {
    case '.yaml':
    case '.yml':
      return dump(content);
    case '.json':
      return JSON.stringify(content, null, INDENT);
    case '.js':
    case '.mjs':
    case '.ts':
    case '.mts':
      return buildEsmFile(Object.keys(content as Record<string, unknown>));
    default:
      return Array.isArray(content)
        ? content.join('\n') // for ignore list, e.g., .gitignore
        : JSON.stringify(content, null, INDENT); // for JSON config not with a .json extension, e.g., .prettierrc
  }
}
