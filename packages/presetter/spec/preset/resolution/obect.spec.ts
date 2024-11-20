import { describe, expect, it } from 'vitest';

import { resolveObject } from '#preset/resolution/object';

import type { PresetContentContext } from 'presetter-types';

const context = {
  root: '/',
  package: {},
  variables: {},
} satisfies PresetContentContext;

describe('fn:resolveObject', () => {
  it('should resolve an object when it is a function', () => {
    const object = (initial: PresetContentContext) => ({
      root: initial.root,
      resolved: true,
    });

    const result = resolveObject(object, context);
    const expected = { root: '/', resolved: true };

    expect(result).toEqual(expected);
  });

  it('should return the object as is when it is not a function', () => {
    const object = { resolved: true };

    const result = resolveObject(object, context);
    const expected = object;

    expect(result).toEqual(expected);
  });
});
