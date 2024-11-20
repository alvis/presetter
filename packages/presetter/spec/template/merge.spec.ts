import { describe, expect, it } from 'vitest';

import { merge } from '#template/merge';

describe('fn:merge', () => {
  it('should overwite list content', () => {
    expect(merge('list1', 'list2')).toEqual('list2');
  });

  it('should just return the replacement if the supplied customization cannot be mergeed', () => {
    expect(merge('line', { object: true })).toEqual({ object: true });
    expect(merge({ object: true }, 'line')).toEqual('line');
  });

  it('should return the original if no replacement is given', () => {
    expect(merge(0)).toEqual(0);
    expect(merge({ a: 0 })).toEqual({ a: 0 });
    expect(merge([0])).toEqual([0]);
  });

  it('should return the original if the replacement is undefined', () => {
    expect(merge(0, undefined)).toEqual(0);
    expect(merge({ a: 0 }, undefined)).toEqual({ a: 0 });
    expect(merge([0], undefined)).toEqual([0]);
  });

  it('should return null if the replacement is null', () => {
    expect(merge(0, null)).toEqual(null);
    expect(merge({ a: 0 }, null)).toEqual(null);
    expect(merge([0], null)).toEqual(null);
  });

  it('should merge two independent objects', () => {
    expect(merge({ a: 0 }, { b: 1 })).toEqual({ a: 0, b: 1 });
  });

  it('should merge a list', () => {
    expect(merge([0], [1])).toEqual([0, 1]);
  });

  it('should overwrite a list', () => {
    expect(merge([0], 1)).toEqual(1);
  });

  it('should overwrite a primitive property', () => {
    expect(merge({ a: 0 }, { a: 1 })).toEqual({ a: 1 });
  });

  it('should overwrite a list', () => {
    expect(merge({ a: [0, 1] }, { a: { 0: 1 } })).toEqual({ a: [1, 1] });
  });

  it('should leave a list untouched', () => {
    expect(merge({ a: [0] }, {})).toEqual({ a: [0] });
  });

  it('should deep merge a primitive', () => {
    expect(merge({ a: { b: 0 }, c: 1 }, { a: { b: 1 } })).toEqual({
      a: { b: 1 },
      c: 1,
    });
  });

  it('should deep merge an object', () => {
    expect(merge({ a: { b: 0 } }, { a: { c: 1 } })).toEqual({
      a: { b: 0, c: 1 },
    });
  });

  it('should deep merge an object in overwrite mode', () => {
    expect(merge({ a: { b: 0 } }, { a: { c: 1 } })).toEqual({
      a: { b: 0, c: 1 },
    });
  });

  it('should deep merge a list', () => {
    expect(merge({ a: [{ b: 0 }] }, { a: { 0: { c: 1 } } })).toEqual({
      a: [{ b: 0, c: 1 }],
    });
  });

  it('should deep extend a primitive list', () => {
    expect(merge({ a: { b: [0] } }, { a: { b: [1] } })).toEqual({
      a: { b: [0, 1] },
    });
  });

  it('should deep extend an object list', () => {
    expect(
      merge({ a: { b: [{ name: 'foo' }] } }, { a: { b: [{ name: 'bar' }] } }),
    ).toEqual({
      a: { b: [{ name: 'foo' }, { name: 'bar' }] },
    });
  });

  it('should deep extend an object list uniquely', () => {
    const item = { name: 'foo' };

    expect(merge({ a: { b: [item] } }, { a: { b: [item] } })).toEqual({
      a: { b: [{ name: 'foo' }] },
    });
  });

  it('should deep extend an object list without checking its content', () => {
    expect(
      merge({ a: { b: [{ name: 'foo' }] } }, { a: { b: [{ name: 'foo' }] } }),
    ).toEqual({
      a: { b: [{ name: 'foo' }, { name: 'foo' }] },
    });
  });

  it('should deep merge a list uniquely', () => {
    expect(merge({ a: [0] }, { a: [0] })).toEqual({ a: [0] });
  });

  it('should deep overwrite a list item', () => {
    expect(merge({ a: { b: [0, 1] } }, { a: { b: { 0: 1 } } })).toEqual({
      a: { b: [1, 1] },
    });
  });

  it('should deep overwrite a list item', () => {
    expect(merge({ a: { b: [0] } }, { a: { b: 1 } })).toEqual({
      a: { b: 1 },
    });
  });
});
