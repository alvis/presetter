/**
 * Capitalize the first letter of a string.
 * @param str - The string to capitalize
 * @returns The string with first letter capitalized
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
