/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on loadFile
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { jest } from '@jest/globals';

import * as fs from 'node:fs';
import { posix, relative, resolve, sep } from 'node:path';

jest.unstable_mockModule('node:fs', async () => ({
  ...fs,
  readFileSync: jest.fn((path: string) => {
    // ensure that the paths below is compatible with windows
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'path/to/config.json':
        return Buffer.from('{ "json": true }');
      case 'path/to/config.yaml':
      case 'path/to/config.yml':
        return Buffer.from('yaml: true');
      case 'path/to/text':
        return Buffer.from('{"text": true}');
      default:
        throw new Error(`readFile: missing ${path}`);
    }
  }),
}));

const { loadFile } = await import('#io');
describe('fn:loadFile', () => {
  it('load a json file', async () => {
    expect(await loadFile('/path/to/config.json')).toEqual({
      json: true,
    });
  });

  it('load a yaml file', async () => {
    expect(await loadFile('/path/to/config.yaml')).toEqual({
      yaml: true,
    });

    expect(await loadFile('/path/to/config.yml')).toEqual({
      yaml: true,
    });
  });

  it('load a text file', async () => {
    expect(await loadFile('/path/to/text')).toEqual('{"text": true}');
  });

  it('load a text file but assume it as a json', async () => {
    expect(await loadFile('/path/to/text', 'json')).toEqual({ text: true });
  });
});
