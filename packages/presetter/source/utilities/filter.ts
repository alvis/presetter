import type { IgnorePath, IgnoreRule } from 'presetter-types';

/**
 * remove part of the template content according to the given rules
 * @param subject an object to be filtered
 * @param ignores a list of ignore rules
 * @returns filtered content
 */
export function filter<C extends Record<string, unknown>>(
  subject: C,
  ...ignores: IgnoreRule[]
): C;
export function filter(subject: unknown[], ...ignores: IgnoreRule[]): unknown[];
export function filter(
  subject: Record<string, unknown> | unknown[],
  ...ignores: IgnoreRule[]
): Record<string, unknown> | unknown[] {
  // compute the list of fields in config to be ignored
  const fieldsToIgnore = ignores.filter(
    (ignore): ignore is string | number => typeof ignore !== 'object',
  );

  // filter the unwanted item in an array
  if (Array.isArray(subject)) {
    return subject.filter((_, key) => !fieldsToIgnore.includes(key));
  }

  // filter the unwanted fields below
  const distilled = Object.fromEntries(
    Object.entries(subject).filter(([key, _]) => !fieldsToIgnore.includes(key)),
  );

  // compute the left over and process them further below
  const moreRules = ignores.filter(
    (ignore): ignore is Record<string, IgnorePath> =>
      typeof ignore !== 'string',
  );

  // continue filtering the left over
  return moreRules.reduce(
    (furtherDistilled, ignoreTree) =>
      Object.fromEntries(
        Object.entries(furtherDistilled).map(
          ([key, value]): [string, unknown] => [
            key,
            filterByPath(value, ignoreTree[key]),
          ],
        ),
      ),
    distilled,
  );
}

/**
 * filter a value according to the supplied ignore rules
 * @param value value to be filtered
 * @param path ignore rule to be applied
 * @returns filtered value
 */
function filterByPath(value: unknown, path?: IgnorePath): unknown {
  return path && typeof value === 'object'
    ? filter(
        value as Record<string, unknown>,
        // NOTE
        // if rule is an array, it means that it contains a list of fields to be ignored
        // otherwise, it contains rules in a tree form
        ...(Array.isArray(path) ? path : [path]),
      )
    : value;
}
