import type { JsonObject, JsonValue } from 'type-fest';

/**
 * indicate whether the supplied value is a JSON object
 * @param subject the subject to be tested
 * @returns true if the subject is a JSON object
 */
export function isJsonObject(subject: unknown): subject is JsonObject {
  return (
    typeof subject === 'object' &&
    !Array.isArray(subject) &&
    subject !== null &&
    isJsonCompatible(subject)
  );
}

/**
 * check if value is JSON compatible
 * @param subject value to be checked
 * @returns true if the value is JSON compatible
 */
export function isJsonCompatible(subject: unknown): subject is JsonValue {
  return (
    typeof subject === 'string' ||
    typeof subject === 'number' ||
    typeof subject === 'boolean' ||
    subject === null ||
    (Array.isArray(subject) && subject.every(isJsonCompatible)) ||
    (isPlainObject(subject) && Object.values(subject).every(isJsonCompatible))
  );
}

/**
 * indicates whether the target is a plain object
 * @param subject target to be checked
 * @returns true if the target is a plain object
 */
export function isPlainObject(
  subject: unknown,
): subject is Record<string, unknown> {
  return (
    !!subject &&
    typeof subject === 'object' &&
    ((Object.getPrototypeOf(subject) as object | null)?.constructor ===
      Object ||
      Object.getPrototypeOf(subject) === null)
  );
}
