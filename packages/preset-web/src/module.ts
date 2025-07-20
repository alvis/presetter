/* v8 ignore start */

/**
 * Resolves a module specifier to its full path using the native import.meta.resolve
 * @param specifier - The module specifier to resolve (e.g., package name or relative path)
 * @param parent - The parent URL or path to resolve from
 * @see https://github.com/vitest-dev/vitest/issues/6953#issuecomment-2765228116
 * @returns The resolved module path
 */
export function resolveModule(
  specifier: string,
  parent?: string | URL,
): string {
  return import.meta.resolve(specifier, parent);
}
