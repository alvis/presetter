/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on script generation
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { describe, expect, it } from 'vitest';

import { mockContext, mockIO, mockModuleResolution } from './mock';

mockContext();
mockModuleResolution();
mockIO();

const { getScripts } = await import('#preset/scripts');

describe('fn:getScripts', () => {
  it('return the scripts of the given preset', async () => {
    expect(await getScripts()).toEqual({
      task: 'command_from_symlink',
    });
  });
});
