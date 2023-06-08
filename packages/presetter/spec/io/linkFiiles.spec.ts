/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on linkFiles
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { jest } from '@jest/globals';

import * as fs from 'node:fs';
import { posix, relative, resolve, sep } from 'node:path';

import type { Stats } from 'node:fs';

jest.unstable_mockModule('node:console', () => ({
  info: jest.fn(),
}));

jest.unstable_mockModule('node:fs', async () => ({
  ...fs,
  lstatSync: jest.fn(
    (
      path: string,
      options: { throwIfNoEntry: boolean },
    ): Partial<Stats> | void => {
      const { throwIfNoEntry } = options;

      // ensure that the paths below is compatible with windows
      const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
      switch (posixPath) {
        case 'path/to/config.json':
        case 'project/old/symlink/rewritten/by/user':
          return { isSymbolicLink: () => false };
        case 'project/old/symlink/by/presetter':
        case 'project/old/symlink/pointed/to/other':
          return { isSymbolicLink: () => true };
        default:
          if (throwIfNoEntry) {
            throw new Error();
          }
      }
    },
  ),
  mkdirSync: jest.fn(),
  symlinkSync: jest.fn(),
  unlinkSync: jest.fn(),
}));

const { linkFiles } = await import('#io');
const { mkdirSync, symlinkSync, unlinkSync } = await import('node:fs');
describe('fn:linkFiles', () => {
  beforeEach(jest.clearAllMocks);

  it('link generated files to the project', async () => {
    await linkFiles('/project', {
      'old/symlink/rewritten/by/user': resolve(
        '/project/relative/path/to/config',
      ),
      'old/symlink/by/presetter': resolve('/project/relative/path/to/config'),
      'new/symlink/config.json': resolve('/project/relative/path/to/config'),
    });

    expect(mkdirSync).toHaveBeenCalledTimes(2);
    expect(mkdirSync).toHaveBeenCalledWith(resolve('/project/new/symlink'), {
      recursive: true,
    });
    expect(unlinkSync).toHaveBeenCalledTimes(1);
    expect(symlinkSync).toHaveBeenCalledTimes(2);
    expect(symlinkSync).toHaveBeenCalledWith(
      '../../../relative/path/to/config'.split(posix.sep).join(sep),
      resolve('/project/old/symlink/by/presetter'),
    );
    expect(symlinkSync).toHaveBeenCalledWith(
      '../../relative/path/to/config'.split(posix.sep).join(sep),
      resolve('/project/new/symlink/config.json'),
    );
  });

  it('ignore any configuration that are written on the project root', async () => {
    await linkFiles('/project', {
      'on/project/root': resolve('/project/on/project/root'),
    });
    expect(mkdirSync).toHaveBeenCalledTimes(0);
    expect(symlinkSync).toHaveBeenCalledTimes(0);
  });

  it('replace existing files if force is set', async () => {
    await linkFiles(
      '/',
      {
        'path/to/config.json': resolve('/relative/path/to/config'),
      },
      { force: true },
    );

    expect(mkdirSync).toHaveBeenCalledTimes(1);
    expect(mkdirSync).toHaveBeenCalledWith(resolve('/path/to'), {
      recursive: true,
    });

    expect(unlinkSync).toHaveBeenCalledTimes(1);

    expect(symlinkSync).toHaveBeenCalledTimes(1);
    expect(symlinkSync).toHaveBeenCalledWith(
      '../../relative/path/to/config'.split(posix.sep).join(sep),
      resolve('/path/to/config.json'),
    );
  });
});
