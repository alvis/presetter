import pupa from 'pupa';

import { isJsonObject } from '../utilities';

/**
 * replace parameters in the template
 * @param content template content
 * @param parameter variables to be substituted in the template
 * @returns customized configuration
 */
export function substitute(
  content: string,
  parameter: Record<string, string>,
): string;
export function substitute<Content extends Record<string, unknown> | unknown[]>(
  content: Content,
  parameter: Record<string, string>,
): Content;
export function substitute(
  content: unknown,
  parameter: Record<string, string>,
): unknown;
export function substitute(
  content: unknown,
  parameter: Record<string, string>,
): unknown {
  if (typeof content === 'string') {
    return pupa(content, parameter, { ignoreMissing: true });
  } else if (Array.isArray(content)) {
    return content.map((value: unknown) => substitute(value, parameter));
  } else if (isJsonObject(content)) {
    return Object.fromEntries(
      Object.entries(content).map(([key, value]) => {
        return [substitute(key, parameter), substitute(value, parameter)];
      }),
    );
  } else {
    return content;
  }
}
