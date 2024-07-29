/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on mapValues
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { describe, expect, it } from 'vitest';

import { mapValues } from '#utilities/mapValues';

describe('fn:mapValues', () => {
  it('should map object values correctly', () => {
    const input = { a: 1, b: 2, c: 3 };
    const expectedOutput = { a: '1', b: '2', c: '3' };
    const output = mapValues(input, (value) => String(value));

    expect(output).toEqual(expectedOutput);
  });
});
