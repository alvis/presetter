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

import { existsSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import * as pathNode from 'node:path';
import { fileURLToPath } from 'node:url';

import { jest } from '@jest/globals';

const __dir = fileURLToPath(dirname(import.meta.url));

jest.unstable_mockModule('node:path', () => ({
  ...pathNode,
  // spy on resolve to check if a template is referenced
  resolve: jest.fn(resolve),
}));

const { resolve: resolveSpyed } = await import('node:path');
const { loadDynamicMap, resolveContext } = await import('presetter');

const { default: getPresetAsset } = await import('#index');
describe('fn:getPresetAsset', () => {
  it('use all templates', async () => {
    const asset = await getPresetAsset();
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

    const CONFIGS = resolve(__dir, '..', 'configs');
    const configs = (existsSync(CONFIGS) && readdirSync(CONFIGS)) || [];
    const TEMPLATES = resolve(__dir, '..', 'templates');
    const templates = (existsSync(TEMPLATES) && readdirSync(TEMPLATES)) || [];

    for (const path of configs) {
      expect(resolveSpyed).toBeCalledWith(CONFIGS, path);
    }
    for (const path of templates) {
      expect(resolveSpyed).toBeCalledWith(TEMPLATES, path);
    }
  });
});
