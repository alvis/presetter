/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on getConfigKey
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { describe, expect, it } from 'vitest';

import { getConfigKey } from '#resolution';

describe('fn:getConfigKey', () => {
  it('get config keys based on the filename', () => {
    expect(getConfigKey('.tsconfig.json')).toEqual('tsconfig');
    expect(getConfigKey('.npmignore')).toEqual('npmignore');
    expect(getConfigKey('rollup.config.ts')).toEqual('rollup');
  });
});
