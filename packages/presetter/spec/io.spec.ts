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

import { info } from 'console';
import { ensureFile, mkdir, symlink, unlink, writeFile } from 'fs-extra';
import { posix, relative, resolve, sep } from 'path';

import {
  loadDynamic,
  loadFile,
  serializeContent,
  writeFiles,
  linkFiles,
  unlinkFiles,
} from '#io';

import type { ResolvedPresetContext } from '#types';

jest.mock('console', () => ({
  __esModule: true,
  info: jest.fn(),
}));

jest.mock('fs-extra', () => ({
  __esModule: true,
  ensureFile: jest.fn(),
  lstat: jest.fn(async (path: string): Promise<{}> => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('path');
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'project/old/symlink/by/presetter':
      case 'project/old/symlink/pointed/to/other':
        return {};
      default:
        throw new Error();
    }
  }),
  mkdir: jest.fn(),
  pathExists: jest.fn(async (path: string): Promise<boolean> => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('path');
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
  readFile: jest.fn(async (path: string) => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('path');
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
  readlink: jest.fn(async (path: string): Promise<string> => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('path');
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
  symlink: jest.fn(),
  unlink: jest.fn(),
  writeFile: jest.fn(),
}));

describe('fn:loadDynamic', () => {
  const context: ResolvedPresetContext<'variable'> = {
    target: { name: 'name', root: 'root', package: {} },
    custom: { preset: 'preset', variable: { key: 'value' } },
  };

  it('load the content from a dynamic generator', async () => {
    expect(
      await loadDynamic(
        (args: ResolvedPresetContext<'variable'>) => ({
          key: args.custom.variable.key,
        }),
        context,
      ),
    ).toEqual({
      key: 'value',
    });
  });

  it('load the content from a file if it is a valid path', async () => {
    expect(await loadDynamic('/path/to/config.json', context)).toEqual({
      json: true,
    });
  });

  it('return any non-generator content directly', async () => {
    expect(await loadDynamic('text', context)).toEqual('text');
    expect(await loadDynamic({ a: 0 }, context)).toEqual({ a: 0 });
  });
});

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

    expect(ensureFile).toBeCalledWith('/path/to/new.yaml');
    expect(writeFile).toBeCalledWith('/path/to/new.yaml', 'yaml: true\n');
  });

  it('write content to the disk for symlinked templates', async () => {
    await writeFiles(
      '/path/to',
      { 'config.yaml': { yaml: true } },
      { 'config.yaml': '/config.yaml' },
    );

    expect(ensureFile).toBeCalledWith('/config.yaml');
    expect(writeFile).toBeCalledWith('/config.yaml', 'yaml: true\n');
  });

  it('skip content to the disk if the destination already exist on the project root', async () => {
    await writeFiles(
      '/path/to',
      { 'config.yaml': { yaml: true } },
      { 'config.yaml': resolve('/path/to/config.yaml') },
    );

    expect(ensureFile).toBeCalledTimes(0);
    expect(writeFile).toBeCalledTimes(0);
  });
});

describe('fn:linkFiles', () => {
  beforeEach(jest.clearAllMocks);

  it('link generated files to the project', async () => {
    await linkFiles('/project', {
      'new/symlink/config.json': resolve('/project/relative/path/to/config'),
      'old/symlink/by/presetter': resolve('/project/relative/path/to/config'),
    });

    expect(mkdir).toHaveBeenCalledTimes(1);
    expect(mkdir).toHaveBeenCalledWith(resolve('/project/new/symlink'), {
      recursive: true,
    });
    expect(symlink).toHaveBeenCalledTimes(1);
    expect(symlink).toHaveBeenCalledWith(
      '../../relative/path/to/config'.split(posix.sep).join(sep),
      resolve('/project/new/symlink/config.json'),
    );
  });

  it('ignore any configuration that are written on the project root', async () => {
    await linkFiles('/project', {
      'on/project/root': resolve('/project/on/project/root'),
    });
    expect(mkdir).toHaveBeenCalledTimes(0);
    expect(symlink).toHaveBeenCalledTimes(0);
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
    expect(unlink).toHaveBeenCalledTimes(1);
    expect(unlink).toHaveBeenCalledWith(
      resolve('/project/old/symlink/by/presetter'),
    );
  });

  it('ignore any configuration that are written on the project root', async () => {
    await unlinkFiles('/project', {
      'on/project/root': resolve('/project/on/project/root'),
    });
    expect(info).toHaveBeenCalledTimes(1);
    expect(info).toHaveBeenCalledWith('Skipping on/project/root');
    expect(unlink).toHaveBeenCalledTimes(0);
  });
});
