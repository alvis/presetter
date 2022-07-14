/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on template related helpers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { filter, merge, template } from '#template';

describe('fn:filter', () => {
  it('return the subject without filtering', () => {
    expect(filter({ a: 'a' })).toEqual({
      a: 'a',
    });
  });

  it('filter out fields that are in the list', () => {
    expect(filter({ a: 'a', b: 'b', c: 'c' }, 'b', 'c')).toEqual({
      a: 'a',
    });
  });

  it('filter out fields deep', () => {
    expect(
      filter({ a: { aa: { aaa: 'aaa', aab: 'aab' } } }, { a: { aa: ['aab'] } }),
    ).toEqual({ a: { aa: { aaa: 'aaa' } } });
  });

  it('filter out a list deep', () => {
    expect(
      filter({ a: { aa: [0, 1, 2, 3, 4] } }, { a: { aa: [1, 3] } }),
    ).toEqual({ a: { aa: [0, 2, 4] } });
  });

  it('merge filtering rules', () => {
    expect(
      filter(
        { a: { aa: { aaa: 'aaa', aab: 'aab' } } },
        { a: { aa: ['aaa'] } },
        { a: { aa: ['aab'] } },
      ),
    ).toEqual({ a: { aa: {} } });
  });

  it('ignore non-existent paths', () => {
    expect(
      filter({ a: { aa: { aaa: 'aaa' } }, b: 'b' }, { a: { aa: ['aab'] } }),
    ).toEqual({ a: { aa: { aaa: 'aaa' } }, b: 'b' });

    expect(filter({ a: { aa: { aaa: 'aaa' } }, b: 'b' }, { a: ['b'] })).toEqual(
      { a: { aa: { aaa: 'aaa' } }, b: 'b' },
    );

    expect(filter({ a: { aa: { aaa: 'aaa' } }, b: 'b' }, { b: ['c'] })).toEqual(
      { a: { aa: { aaa: 'aaa' } }, b: 'b' },
    );

    expect(filter({ a: { aa: { aaa: 'aaa' } }, b: 'b' }, 'c')).toEqual({
      a: { aa: { aaa: 'aaa' } },
      b: 'b',
    });
  });
});

describe('fn:merge', () => {
  it('return the subject if no replacement is given', () => {
    expect(merge({ a: 0 })).toEqual({ a: 0 });
  });

  it('merge two independent objects', () => {
    expect(merge({ a: 0 }, { b: 1 })).toEqual({ a: 0, b: 1 });
  });

  it('merge a list', () => {
    expect(merge([0], [1])).toEqual([0, 1]);
  });

  it('overwrite a list', () => {
    expect(merge([0], [1], { mode: 'overwrite' })).toEqual([1]);
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
    expect(
      merge({ a: { b: 0 } }, { a: { c: 1 } }, { mode: 'overwrite' }),
    ).toEqual({
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
      merge({ a: { b: [0] } }, { a: { b: [1] } }, { mode: 'overwrite' }),
    ).toEqual({
      a: { b: [1] },
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

  it('overwrite an object by null', () => {
    expect(
      merge(
        {
          a: { b: 0 },
        },
        { a: null },
      ),
    ).toEqual({ a: null });
  });
});

describe('fn:template', () => {
  it('replace a simple string', () => {
    expect(template('{value}', { value: 'value' })).toEqual('value');
  });

  it('replace content in an array', () => {
    expect(
      template(['{key}', '{value}'], { key: 'key', value: 'value' }),
    ).toEqual(['key', 'value']);
  });

  it('replace content in an object', () => {
    expect(
      template({ '{key}': '{value}' }, { key: 'key', value: 'value' }),
    ).toEqual({ key: 'value' });
  });

  it('return the original content if not recognized', () => {
    expect(template(null, {})).toEqual(null);
  });
});
