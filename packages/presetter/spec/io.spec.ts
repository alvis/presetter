/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on io helpers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { info } from 'node:console';
import { mkdirSync, symlinkSync, unlinkSync, writeFileSync } from 'node:fs';
import { posix, relative, resolve, sep } from 'node:path';

import {
  loadFile,
  serializeContent,
  writeFiles,
  linkFiles,
  unlinkFiles,
} from '#io';

import type { ResolvedPresetContext } from '#types';

jest.mock('node:console', () => ({
  __esModule: true,
  info: jest.fn(),
}));

jest.mock('node:fs', () => ({
  __esModule: true,
  lstatSync: jest.fn((path: string): {} => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('node:path');
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'project/old/symlink/by/presetter':
      case 'project/old/symlink/pointed/to/other':
        return {};
      default:
        throw new Error();
    }
  }),
  mkdirSync: jest.fn(),
  existsSync: jest.fn((path: string): boolean => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('node:path');
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'path/to/config.json':
      case 'path/to/config.yaml':
      case 'path/to/list1':
      case 'path/to/list2':
      case 'project/old/symlink/by/presetter':
      case 'project/old/symlink/pointed/to/other':
      case 'project/old/symlink/rewritten/by/user':
        return true;
      default:
        return false;
    }
  }),
  readFileSync: jest.fn((path: string) => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('node:path');
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'path/to/config.json':
        return Buffer.from('{ "json": true }');
      case 'path/to/config.yaml':
      case 'path/to/config.yml':
        return Buffer.from('yaml: true');
      case 'path/to/text':
        return Buffer.from('{"text": true}');
      case 'path/to/list1':
        return Buffer.from('list1');
      case 'path/to/list2':
        return Buffer.from('list2');
      default:
        throw new Error(`readFile: missing ${path}`);
    }
  }),
  readlinkSync: jest.fn((path: string): string => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('node:path');
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'project/old/symlink/by/presetter':
        return 'relative/path/to/config'.split(posix.sep).join(sep);
      case 'project/old/symlink/pointed/to/other':
        return 'other/path'.split(posix.sep).join(sep);
      default:
        throw new Error();
    }
  }),
  symlinkSync: jest.fn(),
  unlinkSync: jest.fn(),
  writeFileSync: jest.fn(),
}));

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

describe('fn:serializeContent', () => {
  it('treat string as a string', () => {
    expect(serializeContent('/path/to/config.json', '{ "json": true }'));
  });

  it('convert an object to a json format', () => {
    expect(serializeContent('/path/to/config.json', { json: true })).toEqual(
      '{\n  "json": true\n}',
    );
  });

  it('convert an object to a yaml format', () => {
    expect(serializeContent('/path/to/config.yaml', { yaml: true })).toEqual(
      'yaml: true\n',
    );
  });
});

describe('fn:writeFiles', () => {
  beforeEach(jest.clearAllMocks);

  it('write content to the disk if the destination path does not exist', async () => {
    await writeFiles(
      '/path/to',
      { 'new.yaml': { yaml: true } },
      { 'new.yaml': '/path/to/new.yaml' },
    );

    expect(mkdirSync).toBeCalledWith('/path/to', { recursive: true });
    expect(writeFileSync).toBeCalledWith('/path/to/new.yaml', 'yaml: true\n');
  });

  it('write content to the disk for symlinked templates', async () => {
    await writeFiles(
      '/path/to',
      { 'config.yaml': { yaml: true } },
      { 'config.yaml': '/config.yaml' },
    );

    expect(mkdirSync).toBeCalledWith('/', { recursive: true });
    expect(writeFileSync).toBeCalledWith('/config.yaml', 'yaml: true\n');
  });

  it('skip content to the disk if the destination already exist on the project root', async () => {
    await writeFiles(
      '/path/to',
      { 'config.yaml': { yaml: true } },
      { 'config.yaml': resolve('/path/to/config.yaml') },
    );

    expect(mkdirSync).toBeCalledTimes(0);
    expect(writeFileSync).toBeCalledTimes(0);
  });
});

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
});

describe('fn:unlinkFiles', () => {
  beforeEach(jest.clearAllMocks);

  it('clean up any artifacts installed on the project root', async () => {
    await unlinkFiles('/project', {
      'old/symlink/by/presetter': resolve('/project/relative/path/to/config'),
      'old/symlink/pointed/to/other': resolve(
        '/project/relative/path/to/config',
      ),
      'old/symlink/rewritten/by/user': resolve(
        '/project/relative/path/to/config',
      ),
    });

    expect(info).toHaveBeenCalledTimes(3);
    expect(info).toHaveBeenCalledWith('Removing old/symlink/by/presetter');
    expect(info).toHaveBeenCalledWith('Skipping old/symlink/pointed/to/other');
    expect(info).toHaveBeenCalledWith('Skipping old/symlink/rewritten/by/user');
    expect(unlinkSync).toHaveBeenCalledTimes(1);
    expect(unlinkSync).toHaveBeenCalledWith(
      resolve('/project/old/symlink/by/presetter'),
    );
  });

  it('ignore any configuration that are written on the project root', async () => {
    await unlinkFiles('/project', {
      'on/project/root': resolve('/project/on/project/root'),
    });
    expect(info).toHaveBeenCalledTimes(1);
    expect(info).toHaveBeenCalledWith('Skipping on/project/root');
    expect(unlinkSync).toHaveBeenCalledTimes(0);
  });
});
