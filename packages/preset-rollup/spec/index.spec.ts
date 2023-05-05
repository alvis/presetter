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

import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadDynamicMap, resolveContext } from 'presetter';

import getPresetAsset from '#index';

jest.mock('node:path', () => ({
  __esModule: true,
  ...jest.requireActual('node:path'),
  resolve: jest.fn(jest.requireActual('node:path').resolve),
}));

describe('fn:getPresetAsset', () => {
  it('use all templates', async () => {
    const asset = getPresetAsset();
    const context = await resolveContext({
      graph: [{ name: 'preset', asset, nodes: [] }],
      context: {
        target: { name: 'preset', root: '/', package: {} },
        custom: { preset: 'preset' },
      },
    });

    // load all potential dynamic content
    await loadDynamicMap(asset.supplementaryConfig, context);
    await loadDynamicMap(asset.template, context);

    const TEMPLATES = resolve(__dirname, '..', 'templates');
    const allTemplates = readdirSync(TEMPLATES);
    const CONFIGS = resolve(__dirname, '..', 'configs');
    const supplementaryConfig = readdirSync(CONFIGS);

    for (const path of allTemplates) {
      expect(resolve).toBeCalledWith(TEMPLATES, path);
    }
    for (const path of supplementaryConfig) {
      expect(resolve).toBeCalledWith(CONFIGS, path);
    }
  });
});
