import { normalize } from 'node:path';

/**
 * convert potentially window-based path to posix compatible path
 * @param path path to be normalized
 * @returns normalized path
 */
export function posix(path: string) {
  return normalize(path)
    .replace(/^[a-zA-Z]:[\\/]/, '/')
    .replaceAll(/[\\/]/g, '/');
}
