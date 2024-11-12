import { describe, expect, it } from 'vitest';

import {
  isJsonCompatible,
  isJsonObject,
  isPlainObject,
} from '#utilities/object';

describe('fn:isJsonObject', () => {
  it('return true for a valid json object', () => {
    expect(isJsonObject({})).toEqual(true);
  });

  it('return false for an array', () => {
    expect(isJsonObject([])).toEqual(false);
  });

  it('return false for an non json object', () => {
    expect(
      isJsonObject({
        foo: Buffer.from('foo'),
      }),
    ).toEqual(false);
  });
});

describe('fn:isJsonCompatible', () => {
  it('should return true for JSON compatible values', () => {
    expect(isJsonCompatible('hello')).toEqual(true);
    expect(isJsonCompatible(123)).toEqual(true);
    expect(isJsonCompatible(true)).toEqual(true);
    expect(isJsonCompatible(null)).toEqual(true);
    expect(isJsonCompatible([])).toEqual(true);
    expect(isJsonCompatible([1, 'two', true, null])).toEqual(true);
    expect(isJsonCompatible({})).toEqual(true);
    expect(isJsonCompatible({ foo: 'bar', baz: 123 })).toEqual(true);
    expect(isJsonCompatible({ foo: { bar: [1, 2, 3] } })).toEqual(true);
  });

  it('should return false for non-JSON compatible values', () => {
    expect(isJsonCompatible(undefined)).toEqual(false);
    expect(isJsonCompatible(() => {})).toEqual(false);
    expect(isJsonCompatible(Symbol('foo'))).toEqual(false);
    expect(isJsonCompatible(new Date())).toEqual(false);
    expect(isJsonCompatible(/regex/)).toEqual(false);
    expect(isJsonCompatible(new Map())).toEqual(false);
    expect(isJsonCompatible(new Set())).toEqual(false);
    expect(isJsonCompatible({ foo: new Set() })).toEqual(false);
    expect(isJsonCompatible({ foo: { bar: new Set() } })).toEqual(false);
  });
});

describe('fn:isPlainObject', () => {
  it('should return true for a plain object', () => {
    expect(isPlainObject({})).toEqual(true);
    expect(isPlainObject({ foo: 'bar' })).toEqual(true);
  });

  it('should return false for non-objects', () => {
    expect(isPlainObject(null)).toEqual(false);
    expect(isPlainObject(undefined)).toEqual(false);
    expect(isPlainObject(42)).toEqual(false);
    expect(isPlainObject('foo')).toEqual(false);
    expect(isPlainObject(true)).toEqual(false);
    expect(isPlainObject(Symbol('description'))).toEqual(false);
  });

  it('should return false for non-plain objects', () => {
    expect(isPlainObject([])).toEqual(false);
    expect(isPlainObject(new Date())).toEqual(false);
    expect(isPlainObject(/foo/)).toEqual(false);
    expect(isPlainObject(() => {})).toEqual(false);
    expect(isPlainObject(Object.create(null))).toEqual(false);
  });
});
