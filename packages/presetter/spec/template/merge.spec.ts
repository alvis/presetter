import { describe, expect, it } from 'vitest';

import { merge, mergeByKey } from '#template/merge';

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

describe('fn:mergeByKey', () => {
  it('should deep merge matching elements by key', () => {
    const source = { items: [{ name: 'foo', x: 1 }] };
    const target = { items: mergeByKey('name', [{ name: 'foo', y: 2 }]) };

    expect(merge(source, target)).toEqual({
      items: [{ name: 'foo', x: 1, y: 2 }],
    });
  });

  it('should append unmatched target elements', () => {
    const source = { items: [{ name: 'foo', x: 1 }] };
    const target = { items: mergeByKey('name', [{ name: 'bar', y: 2 }]) };

    expect(merge(source, target)).toEqual({
      items: [
        { name: 'foo', x: 1 },
        { name: 'bar', y: 2 },
      ],
    });
  });

  it('should preserve source elements when no target match exists', () => {
    const source = {
      items: [
        { name: 'foo', x: 1 },
        { name: 'baz', z: 3 },
      ],
    };
    const target = { items: mergeByKey('name', [{ name: 'foo', y: 2 }]) };

    expect(merge(source, target)).toEqual({
      items: [
        { name: 'foo', x: 1, y: 2 },
        { name: 'baz', z: 3 },
      ],
    });
  });

  it('should use the annotation when only the target is annotated', () => {
    const source = { items: [{ id: 'a', v: 1 }] };
    const target = { items: mergeByKey('id', [{ id: 'a', v: 2 }]) };

    expect(merge(source, target)).toEqual({ items: [{ id: 'a', v: 2 }] });
  });

  it('should use the annotation when only the source is annotated', () => {
    const source = { items: mergeByKey('id', [{ id: 'a', v: 1 }]) };
    const target = { items: [{ id: 'a', v: 2 }] };

    expect(merge(source, target)).toEqual({ items: [{ id: 'a', v: 2 }] });
  });

  it('should prefer the target key when both sides are annotated with different keys', () => {
    const source = {
      items: mergeByKey('id', [{ id: 'a', name: 'alpha', x: 1 }]),
    };
    const target = {
      items: mergeByKey('name', [{ id: 'b', name: 'beta', y: 2 }]),
    };

    // target key is 'name'; source has 'alpha', target has 'beta' -- no match
    expect(merge(source, target)).toEqual({
      items: [
        { id: 'a', name: 'alpha', x: 1 },
        { id: 'b', name: 'beta', y: 2 },
      ],
    });
  });

  it('should pass through elements without the key property', () => {
    const source = {
      items: [
        { name: 'foo', x: 1 },
        'primitive' as unknown as Record<string, unknown>,
      ],
    };
    const target = {
      items: mergeByKey('name', [{ name: 'foo', y: 2 }, { other: 'no-key' }]),
    };

    expect(merge(source, target)).toEqual({
      items: [{ name: 'foo', x: 1, y: 2 }, 'primitive', { other: 'no-key' }],
    });
  });

  it('should propagate annotation across a three-way merge chain', () => {
    const a = mergeByKey('name', [{ name: 'foo', a: 1 }]);
    const b = mergeByKey('name', [{ name: 'foo', b: 2 }]);

    const firstPass = merge({ items: a }, { items: b });

    const c = [{ name: 'foo', c: 3 }];
    const result = merge({ items: firstPass.items }, { items: c });

    // if attachMergeKey were removed from mergeArraysByKey, firstPass.items
    // would lose its annotation and the second merge() call would fall back
    // to set-dedup, producing two distinct {name:'foo',...} entries instead
    // of the single deep-merged entry asserted below
    expect(result).toEqual({ items: [{ name: 'foo', a: 1, b: 2, c: 3 }] });
  });

  it('should deep merge nested objects within matched elements', () => {
    const source = { items: [{ name: 'foo', config: { a: 1, b: 2 } }] };
    const target = {
      items: mergeByKey('name', [{ name: 'foo', config: { b: 3, c: 4 } }]),
    };

    expect(merge(source, target)).toEqual({
      items: [{ name: 'foo', config: { a: 1, b: 3, c: 4 } }],
    });
  });

  it('should handle nested mergeByKey annotations within matched items', () => {
    const source = {
      items: [
        {
          name: 'foo',
          plugins: mergeByKey('id', [{ id: 'p1', enabled: true }]),
        },
      ],
    };
    const target = {
      items: mergeByKey('name', [
        {
          name: 'foo',
          plugins: mergeByKey('id', [{ id: 'p1', extra: 'value' }]),
        },
      ]),
    };

    expect(merge(source, target)).toEqual({
      items: [
        {
          name: 'foo',
          plugins: [{ id: 'p1', enabled: true, extra: 'value' }],
        },
      ],
    });
  });

  it('should return an empty array when both sides are empty', () => {
    const source = {
      items: mergeByKey('name', [] as Array<Record<string, unknown>>),
    };
    const target = {
      items: mergeByKey('name', [] as Array<Record<string, unknown>>),
    };

    expect(merge(source, target)).toEqual({ items: [] });
  });

  it('should merge mergeByKey arrays nested in objects via merge()', () => {
    const source = {
      rules: mergeByKey('name', [{ name: 'rule1', severity: 'warn' }]),
    };
    const target = {
      rules: mergeByKey('name', [
        { name: 'rule1', severity: 'error' },
        { name: 'rule2', severity: 'warn' },
      ]),
    };

    expect(merge(source, target)).toEqual({
      rules: [
        { name: 'rule1', severity: 'error' },
        { name: 'rule2', severity: 'warn' },
      ],
    });
  });

  it('should preserve existing set-dedup behavior for non-annotated arrays', () => {
    expect(merge([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});

describe('fn:mergeByKey nested paths', () => {
  it('should match elements by a dot-notation nested path', () => {
    const source = { items: [{ meta: { id: 'a' }, v: 1 }] };
    const target = {
      items: mergeByKey('meta.id', [{ meta: { id: 'a' }, v: 2 }]),
    };

    expect(merge(source, target)).toEqual({
      items: [{ meta: { id: 'a' }, v: 2 }],
    });
  });

  it('should match elements by a bracket-notation array-index path', () => {
    const source = { items: [{ tags: ['x'], n: 1 }] };
    const target = {
      items: mergeByKey('tags[0]', [{ tags: ['x'], n: 2 }]),
    };

    expect(merge(source, target)).toEqual({
      items: [{ tags: ['x'], n: 2 }],
    });
  });

  it('should match elements by a mixed dot-and-bracket path', () => {
    // share the same nested array reference so that the inner array merge
    // collapses via set-dedup; this isolates the test to the path-resolver
    // behaviour rather than the `mergeArrays` set-dedup semantics
    const owners = [{ id: 'u1' }];
    const source = { items: [{ owners, score: 1 }] };
    const target = {
      items: mergeByKey('owners[0].id', [{ owners, score: 2 }]),
    };

    expect(merge(source, target)).toEqual({
      items: [{ owners: [{ id: 'u1' }], score: 2 }],
    });
  });

  it('should treat items missing a nested path as non-keyed and preserve them', () => {
    const source = {
      items: [
        { meta: { id: 'a' }, v: 1 },
        { meta: {}, other: true },
      ] as Array<Record<string, unknown>>,
    };
    const target = {
      items: mergeByKey('meta.id', [
        { meta: { id: 'a' }, v: 2 },
        { unrelated: 'x' },
      ] as Array<Record<string, unknown>>),
    };

    expect(merge(source, target)).toEqual({
      items: [
        { meta: { id: 'a' }, v: 2 },
        { meta: {}, other: true },
        { unrelated: 'x' },
      ],
    });
  });

  it('should treat invalid array path segments as non-keyed and preserve them', () => {
    const source = {
      items: [
        { tags: ['x'], v: 1 },
        { tags: [], missingIndex: true },
        { tags: 'primitive', primitiveBranch: true },
      ] as Array<Record<string, unknown>>,
    };
    const target = {
      items: mergeByKey('tags[0]', [{ tags: ['x'], v: 2 }] as Array<
        Record<string, unknown>
      >),
    };

    expect(merge(source, target)).toEqual({
      items: [
        { tags: ['x'], v: 2 },
        { tags: [], missingIndex: true },
        { tags: 'primitive', primitiveBranch: true },
      ],
    });
  });

  it('should treat an empty dynamic key path as non-keyed', () => {
    const source = {
      items: [{ id: 'source' }] as Array<Record<string, unknown>>,
    };
    const target = {
      items: mergeByKey(
        '[]' as never,
        [{ id: 'target' }] as Array<Record<string, unknown>>,
      ),
    };

    expect(merge(source, target)).toEqual({
      items: [{ id: 'source' }, { id: 'target' }],
    });
  });

  it('should append unmatched target items when nested path differs', () => {
    const source = { items: [{ meta: { id: 'a' }, v: 1 }] };
    const target = {
      items: mergeByKey('meta.id', [{ meta: { id: 'b' }, v: 2 }]),
    };

    expect(merge(source, target)).toEqual({
      items: [
        { meta: { id: 'a' }, v: 1 },
        { meta: { id: 'b' }, v: 2 },
      ],
    });
  });

  it('should resolve numeric-string keys on plain objects without confusing them with array indices', () => {
    // `meta` is a plain object whose key happens to be the string '0'; the
    // resolver must walk it via the `isPlainObject` branch (where `'0' in meta`
    // is true) rather than the `Array.isArray` branch. type-fest emits the
    // canonical `meta[0]` form for the numeric-looking key; our `parsePath`
    // accepts both `meta[0]` and `meta.0` and resolves them identically here.
    // share the `meta` reference so the inner object merge collapses cleanly,
    // isolating this test to the path-resolver behaviour
    const meta = { '0': 'a' };
    const source = mergeByKey('meta[0]', [{ meta, v: 1 }]);
    const target = mergeByKey('meta[0]', [{ meta, v: 2 }]);

    expect(merge(source, target)).toEqual([{ meta: { '0': 'a' }, v: 2 }]);
  });

  it('should treat a present-but-null nested value as keyed (distinct from missing)', () => {
    const source = {
      items: [{ meta: { id: null }, v: 1 }] as Array<Record<string, unknown>>,
    };
    const target = {
      items: mergeByKey('meta.id', [{ meta: { id: null }, v: 2 }] as Array<
        Record<string, unknown>
      >),
    };

    expect(merge(source, target)).toEqual({
      items: [{ meta: { id: null }, v: 2 }],
    });
  });
});
