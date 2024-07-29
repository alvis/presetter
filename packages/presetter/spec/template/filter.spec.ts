/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on filter
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { describe, expect, it } from 'vitest';

import { filter } from '#template';

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
