/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on config generation
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { readdirSync } from 'fs';
import { resolve } from 'path';

import getPresetAsset from '#index';

jest.mock('path', () => ({
  __esModule: true,
  ...jest.requireActual('path'),
  resolve: jest.fn(jest.requireActual('path').resolve),
}));

describe('fn:getPresetAsset', () => {
  it('use all templates', async () => {
    await getPresetAsset();

    const TEMPLATES = resolve(__dirname, '..', 'templates');
    const allTemplates = await readdirSync(TEMPLATES);

    for (const path of allTemplates) {
      expect(resolve).toBeCalledWith(TEMPLATES, path);
    }
  });
});
