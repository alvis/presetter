/**
 * convert potentially window-based path to posix compatible path
 * @param path path to be normalized
 * @returns normalized path
 */
export function posix(path: string): string {
  return path
    .replaceAll('\\', '/')
    .replace(/^([a-zA-Z]):/, (_, drive: string) => `/${drive.toLowerCase()}`);
}
