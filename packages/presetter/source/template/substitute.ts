import pupa from 'pupa';

import { isJsonObject } from '../utilities';

import type { Variables } from 'presetter-types';

/**
 * replace parameters in the template
 * @param content template content
 * @param variables variables to be substituted in the template
 * @returns customized configuration
 */
export function substitute(content: string, variables: Variables): string;
export function substitute<Content extends Record<string, unknown> | unknown[]>(
  content: Content,
  variables: Variables,
): Content;
export function substitute(content: unknown, variables: Variables): unknown;
export function substitute(content: unknown, variables: Variables): unknown {
  if (typeof content === 'string') {
    return pupa(content, variables, { ignoreMissing: true });
  } else if (Array.isArray(content)) {
    return content.map((value: unknown) => substitute(value, variables));
  } else if (isJsonObject(content)) {
    return Object.fromEntries(
      Object.entries(content).map(([key, value]) => {
        return [substitute(key, variables), substitute(value, variables)];
      }),
    );
  } else {
    return content;
  }
}
