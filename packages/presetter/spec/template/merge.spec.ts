import { describe, expect, it } from 'vitest';

import { merge } from '#template';

describe('fn:merge', () => {
  it('overwite list content', () => {
    expect(merge('list1', 'list2')).toEqual('list2');
  });

  it('just return the replacement if the supplied customization cannot be mergeed', () => {
    expect(merge('line', { object: true })).toEqual({ object: true });
    expect(merge({ object: true }, 'line')).toEqual('line');
  });

  it('return the original if no replacement is given', () => {
    expect(merge(0)).toEqual(0);
    expect(merge({ a: 0 })).toEqual({ a: 0 });
    expect(merge([0])).toEqual([0]);
  });

  it('merge two independent objects', () => {
    expect(merge({ a: 0 }, { b: 1 })).toEqual({ a: 0, b: 1 });
  });

  it('merge a list', () => {
    expect(merge([0], [1])).toEqual([0, 1]);
  });

  it('overwrite a list', () => {
    expect(merge([0], 1)).toEqual(1);
  });

  it('overwrite a primitive property', () => {
    expect(merge({ a: 0 }, { a: 1 })).toEqual({ a: 1 });
  });

  it('overwrite a list', () => {
    expect(merge({ a: [0, 1] }, { a: { 0: 1 } })).toEqual({ a: [1, 1] });
  });

  it('leave a list untouched', () => {
    expect(merge({ a: [0] }, {})).toEqual({ a: [0] });
  });

  it('deep merge a primitive', () => {
    expect(merge({ a: { b: 0 }, c: 1 }, { a: { b: 1 } })).toEqual({
      a: { b: 1 },
      c: 1,
    });
  });

  it('deep merge an object', () => {
    expect(merge({ a: { b: 0 } }, { a: { c: 1 } })).toEqual({
      a: { b: 0, c: 1 },
    });
  });

  it('deep merge an object in overwrite mode', () => {
    expect(merge({ a: { b: 0 } }, { a: { c: 1 } })).toEqual({
      a: { b: 0, c: 1 },
    });
  });

  it('deep merge a list', () => {
    expect(merge({ a: [{ b: 0 }] }, { a: { 0: { c: 1 } } })).toEqual({
      a: [{ b: 0, c: 1 }],
    });
  });

  it('deep extend a list', () => {
    expect(merge({ a: { b: [0] } }, { a: { b: [1] } })).toEqual({
      a: { b: [0, 1] },
    });
  });

  it('deep overwrite a list', () => {
    expect(
      merge(
        { a: { b: [0, { options: false }] } },
        { a: { b: [1, { options: true }] } },
      ),
    ).toEqual({
      a: { b: [1, { options: true }] },
    });
  });

  it('deep merge a list uniquely', () => {
    expect(merge({ a: [0] }, { a: [0] })).toEqual({ a: [0] });
  });

  it('deep overwrite a list item', () => {
    expect(merge({ a: { b: [0, 1] } }, { a: { b: { 0: 1 } } })).toEqual({
      a: { b: [1, 1] },
    });
  });

  it('deep overwrite a list item', () => {
    expect(merge({ a: { b: [0] } }, { a: { b: 1 } })).toEqual({
      a: { b: 1 },
    });
  });
});
