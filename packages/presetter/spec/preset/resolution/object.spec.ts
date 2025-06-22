import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

import { resolveObject } from '#preset/resolution/object';

import { context } from './fixture';

import type { PresetContentContext } from 'presetter-types';

describe('fn:resolveObject', () => {
  it('should resolve an object when it is a function', () => {
    const object = (initial: PresetContentContext) => ({
      root: initial.projectRoot,
      resolved: true,
    });

    const result = resolveObject(object, context);
    const expected = { root: resolve('/path/to/project'), resolved: true };

    expect(result).toEqual(expected);
  });

  it('should return the object as is when it is not a function', () => {
    const object = { resolved: true };

    const result = resolveObject(object, context);
    const expected = object;

    expect(result).toEqual(expected);
  });
});
