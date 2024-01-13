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
        case 'project/old/link/rewritten/by/user':
        case 'relative/path/to/config':
          return { isSymbolicLink: () => false };
        case 'project/old/link/by/presetter':
          return { isSymbolicLink: () => true };

        default:
          if (throwIfNoEntry) {
            throw new Error();
          }
      }
    },
  ),
  statSync: jest.fn(
    (
      path: string,
      options: { throwIfNoEntry: boolean },
    ): Partial<Stats> | void => {
      const { throwIfNoEntry } = options;

      // ensure that the paths below is compatible with windows
      const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
      switch (posixPath) {
        case 'project/old/link/rewritten/by/user':
          return { nlink: 1 };
        case 'project/old/link/by/presetter':
          return { nlink: 2 };
        default:
          if (throwIfNoEntry) {
            throw new Error();
          }
      }
    },
  ),
  readlinkSync: jest.fn(() => ''),
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
      'old/link/rewritten/by/user': resolve('/project/relative/path/to/config'),
      'old/link/by/presetter': resolve('/project/relative/path/to/config'),
      'new/link/config.json': resolve('/project/relative/path/to/config'),
    });

    expect(mkdirSync).toHaveBeenCalledTimes(2);
    expect(mkdirSync).toHaveBeenCalledWith(resolve('/project/old/link/by'), {
      recursive: true,
    });
    expect(mkdirSync).toHaveBeenCalledWith(resolve('/project/new/link'), {
      recursive: true,
    });
    expect(unlinkSync).toHaveBeenCalledTimes(1);
    expect(unlinkSync).toHaveBeenCalledWith(
      resolve('/project/old/link/by/presetter'),
    );
    expect(symlinkSync).toHaveBeenCalledTimes(2);
    expect(symlinkSync).toHaveBeenCalledWith(
      '../../../relative/path/to/config'.split(posix.sep).join(sep),
      resolve('/project/old/link/by/presetter'),
    );
    expect(symlinkSync).toHaveBeenCalledWith(
      '../../relative/path/to/config'.split(posix.sep).join(sep),
      resolve('/project/new/link/config.json'),
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
