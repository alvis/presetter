/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on preset unsetting
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

import {
  makeResolveRelative,
  mockContext,
  mockIO,
  mockModuleResolution,
} from './mock';

makeResolveRelative();
mockContext();
mockIO();
mockModuleResolution();

const { unlinkFiles } = await import('#io');

const { unsetPreset } = await import('#preset/unset');

describe('fn:unsetPreset', () => {
  it('clean up any artifacts installed on the project root', async () => {
    await unsetPreset();

    expect(unlinkFiles).toHaveBeenCalledWith('/project', {
      'link/pointed/to/other': resolve(
        '/.presetter/client/link/pointed/to/other',
      ),
      'link/pointed/to/preset': resolve(
        '/.presetter/client/link/pointed/to/preset',
      ),
      'link/rewritten/by/project': resolve(
        '/.presetter/client/link/rewritten/by/project',
      ),
      'path/to/file': resolve('/project/path/to/file'),
    });
  });
});
