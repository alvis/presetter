/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on preset handling
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { writeJSON } from 'fs-extra';
import { resolve } from 'path';
import writePackage from 'write-pkg';

import { reifyDependencies } from '#package';
import {
  assertPresetterRC,
  bootstrapPreset,
  bootstrapContent,
  getContext,
  getDestinationMap,
  getPresetAssets,
  getPresetterRC,
  getScripts,
  setupPreset,
  unsetPreset,
  updatePresetterRC,
} from '#preset';

import { linkFiles, unlinkFiles, writeFiles } from '#io';

import type { ResolvedPresetContext } from '#types';

jest.mock('console', () => ({
  __esModule: true,
  info: jest.fn(),
}));

jest.mock(
  'fs-extra',
  () => ({
    __esModule: true,
    pathExists: jest.fn(async (path: string): Promise<boolean> => {
      // ensure that the paths below is compatible with windows
      const { posix, relative, resolve, sep } = jest.requireActual('path');
      const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
      switch (posixPath) {
        case `missing-preset/.presetterrc`:
        case `project/.presetterrc`:
        case 'link/rewritten/by/project':
          return true;
        default:
          return false;
      }
    }),
    writeJSON: jest.fn(),
  }),
  { virtual: true },
);

jest.mock('path', () => ({
  __esModule: true,
  ...jest.requireActual<object>('path'),
  resolve: jest.fn((...pathSegments: string[]): string => {
    const { relative, resolve } = jest.requireActual<any>('path');
    const relativePath = relative(
      resolve(__dirname, '..'),
      resolve(...pathSegments),
    );

    return resolve('/', relativePath);
  }),
}));

jest.mock(
  'preset',
  () => ({
    __esModule: true,
    default: async () => ({
      // an empty preset
    }),
  }),
  { virtual: true },
);

jest.mock(
  'extension-preset',
  () => ({
    __esModule: true,
    default: async () => ({
      extends: ['no-symlink-preset', 'symlink-only-preset'],
    }),
  }),
  { virtual: true },
);

jest.mock(
  'no-symlink-preset',
  () => ({
    __esModule: true,
    default: async () => ({
      template: {
        'path/to/file': '/path/to/template',
      },
      scripts: '/path/to/no-symlink-preset/scripts.yaml',
    }),
  }),
  { virtual: true },
);

jest.mock(
  'symlink-only-preset',
  () => ({
    __esModule: true,
    default: async () => ({
      template: {
        'link/pointed/to/preset': '/path/to/template',
        'link/pointed/to/other': '/path/to/template',
        'link/rewritten/by/project': '/path/to/template',
      },
      scripts: '/path/to/symlink-only-preset/scripts.yaml',
    }),
  }),
  { virtual: true },
);

jest.mock('read-pkg', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValueOnce({
      devDependencies: {
        other: '*',
      },
    })
    .mockReturnValueOnce({
      devDependencies: {
        other: '*',
        presetter: '*',
        preset1: '*',
        preset2: '*',
      },
    }),
}));

jest.mock('resolve-pkg', () => ({
  __esModule: true,
  default: (name: string): string => name,
}));

jest.mock('write-pkg', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// file name of the configuration file, null for missing file
jest.mock('#io', () => ({
  __esModule: true,
  loadDynamic: jest.fn(),
  linkFiles: jest.fn(),
  loadFile: jest.fn((path: string) => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('path');
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'path/to/template':
        return { template: true };
      case 'path/to/no-symlink-preset/scripts.yaml':
        return { task: 'command_from_file' };
      case 'path/to/symlink-only-preset/scripts.yaml':
        return { task: 'command_from_symlink' };
      case `missing-preset/.presetterrc`:
        return { preset: 'missing-preset' };
      case `project/.presetterrc`:
        return {
          preset: ['no-symlink-preset', 'symlink-only-preset'],
          noSymlinks: ['path/to/file'],
        };
      default:
        throw new Error(`loadFile: missing ${path}`);
    }
  }),
  unlinkFiles: jest.fn(),
  writeFiles: jest.fn(),
}));

let mockArePeerPackagesAutoInstalled = false;
jest.mock('#package', () => ({
  __esModule: true,
  arePeerPackagesAutoInstalled: () => mockArePeerPackagesAutoInstalled,
  getPackage: jest.fn(async (root) => {
    switch (root) {
      case 'no-symlink-preset':
      case 'symlink-only-preset':
        return {
          json: {
            peerDependencies: {
              package: 'version',
            },
          },
        };
      default:
        return {
          path: '/project/package.json',
          json: {
            name: 'client',
            scripts: {
              test: 'test',
            },
            dependencies: {},
          },
        };
    }
  }),
  reifyDependencies: jest.fn(
    async ({ add }: Parameters<typeof reifyDependencies>[0]) =>
      add?.map((name) => ({ name, version: '*' })),
  ),
}));

const defaultContext: ResolvedPresetContext = {
  target: {
    name: 'client',
    root: '/project',
    package: {},
  },
  custom: {
    preset: ['no-symlink-preset', 'symlink-only-preset'],
    config: {},
    noSymlinks: [],
    variable: {},
  },
};

describe('fn:getPresetterRC', () => {
  it('accept an alternative file extension', async () => {
    expect(await getPresetterRC('/project')).toEqual({
      preset: ['no-symlink-preset', 'symlink-only-preset'],
      noSymlinks: ['path/to/file'],
    });
  });

  it('throw an error if no configuration file is found', async () => {
    expect(() => getPresetterRC('/missing-presetterrc')).rejects.toThrow();
  });
});

describe('fn:updatePresetterRC', () => {
  it('create a new .presetterrc if it is inexistent', async () => {
    await updatePresetterRC('/missing-presetterrc', { preset: ['new-preset'] });

    expect(writeJSON).toBeCalledWith(
      resolve('/missing-presetterrc/.presetterrc.json'),
      {
        preset: ['new-preset'],
      },
      { spaces: 2 },
    );
  });

  it('merge with the existing .presetterrc', async () => {
    await updatePresetterRC('/project', { preset: ['new-preset'] });

    expect(writeJSON).toBeCalledWith(
      resolve('/project/.presetterrc.json'),
      {
        preset: ['no-symlink-preset', 'symlink-only-preset', 'new-preset'],
        noSymlinks: ['path/to/file'],
      },
      { spaces: 2 },
    );
  });
});

describe('fn:assertPresetterRC', () => {
  it('throw an error if the given value is not an object at all', () => {
    expect(() => assertPresetterRC(null)).toThrow();
  });

  it('throw an error if the given configuration misses the preset field', () => {
    expect(() => assertPresetterRC({})).toThrow();
  });

  it('throw an error if the preset field does not contain a preset name', () => {
    expect(() =>
      assertPresetterRC({ preset: { not: { a: { name: true } } } }),
    ).toThrow();
  });

  it('pass if a valid preset is given', () => {
    expect(() => assertPresetterRC({ preset: 'preset' })).not.toThrow();
  });

  it('pass if multiple valid presets are given', () => {
    expect(() =>
      assertPresetterRC({ preset: ['preset1', 'preset2'] }),
    ).not.toThrow();
  });
});

describe('fn:getPresetAssets', () => {
  it('compute the preset configuration', async () => {
    expect(await getPresetAssets(defaultContext)).toEqual([
      {
        template: {
          'path/to/file': '/path/to/template',
        },
        scripts: '/path/to/no-symlink-preset/scripts.yaml',
      },
      {
        template: {
          'link/pointed/to/preset': '/path/to/template',
          'link/pointed/to/other': '/path/to/template',
          'link/rewritten/by/project': '/path/to/template',
        },
        scripts: '/path/to/symlink-only-preset/scripts.yaml',
      },
    ]);
  });

  it('add and merge extended presets', async () => {
    expect(
      await getPresetAssets({
        ...defaultContext,
        custom: { ...defaultContext.custom, preset: 'extension-preset' },
      }),
    ).toEqual([
      {
        template: {
          'path/to/file': '/path/to/template',
        },
        scripts: '/path/to/no-symlink-preset/scripts.yaml',
      },
      {
        template: {
          'link/pointed/to/preset': '/path/to/template',
          'link/pointed/to/other': '/path/to/template',
          'link/rewritten/by/project': '/path/to/template',
        },
        scripts: '/path/to/symlink-only-preset/scripts.yaml',
      },
      { extends: ['no-symlink-preset', 'symlink-only-preset'] },
    ]);
  });

  it('warn about any missing presets', async () => {
    await expect(() =>
      getPresetAssets({
        target: {
          name: 'client',
          root: '/missing-preset',
          package: {},
        },
        custom: { preset: 'missing-preset' },
      }),
    ).rejects.toThrow();
  });
});

describe('fn:getScripts', () => {
  it('combine script templates from presets', async () => {
    const scripts = await getScripts(defaultContext);

    expect(scripts).toEqual({ task: 'command_from_symlink' });
  });
});

describe('fn:setupPreset', () => {
  beforeAll(() => {
    jest.clearAllMocks();
    setupPreset('preset1', 'preset2');
  });

  it('install presetter and the preset', async () => {
    expect(reifyDependencies).toBeCalledWith({
      add: ['presetter', 'preset1', 'preset2'],
      root: '/project',
      saveAs: 'dev',
      lockFile: true,
    });
  });

  it('write to .presetter', async () => {
    expect(writeJSON).toBeCalledWith(
      resolve('/project/.presetterrc.json'),
      {
        preset: [
          'no-symlink-preset',
          'symlink-only-preset',
          'preset1',
          'preset2',
        ],
        noSymlinks: ['path/to/file'],
      },
      { spaces: 2 },
    );
  });

  it('install the peer dependencies provided by the preset', async () => {
    expect(reifyDependencies).toHaveBeenCalledTimes(1);
  });

  it('merge the bootstrapping script to package.json', async () => {
    expect(writePackage).toBeCalledWith('/project', {
      name: 'client',
      scripts: {
        prepare: 'presetter bootstrap',
        test: 'test',
      },
      dependencies: {},
    });
  });
});

describe('fn:bootstrapPreset', () => {
  describe('peer packages auto installed disabled', () => {
    beforeAll(async () => {
      jest.clearAllMocks();

      mockArePeerPackagesAutoInstalled = false;
      await bootstrapPreset();
    });

    it('install packages specified by the preset', async () => {
      expect(reifyDependencies).toHaveBeenCalledTimes(1);
    });
  });

  describe('peer packages auto installed enabled', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      mockArePeerPackagesAutoInstalled = true;
    });

    afterAll(() => {
      mockArePeerPackagesAutoInstalled = false;
    });

    it('install packages regardless', async () => {
      await bootstrapPreset({ force: true });

      expect(reifyDependencies).toHaveBeenCalledTimes(1);
    });

    it('skip installing peer packages manually if it is supported by package manager', async () => {
      mockArePeerPackagesAutoInstalled = true;
      await bootstrapPreset();

      expect(reifyDependencies).not.toHaveBeenCalled();
    });
  });
});

describe('fn:bootstrapContent', () => {
  it('write configuration and link symlinks', async () => {
    await bootstrapContent({
      ...defaultContext,
      custom: { ...defaultContext.custom, noSymlinks: ['path/to/file'] },
    });

    expect(writeFiles).toBeCalledWith(
      '/project',
      {
        'link/pointed/to/other': { template: true },
        'link/pointed/to/preset': { template: true },
        'link/rewritten/by/project': { template: true },
        'path/to/file': { template: true },
      },
      {
        'link/pointed/to/other': resolve(
          '/generated/client/link/pointed/to/other',
        ),
        'link/pointed/to/preset': resolve(
          '/generated/client/link/pointed/to/preset',
        ),
        'link/rewritten/by/project': resolve(
          '/generated/client/link/rewritten/by/project',
        ),
        'path/to/file': resolve('/project/path/to/file'),
      },
    );
    expect(linkFiles).toBeCalledWith('/project', {
      'path/to/file': resolve('/project/path/to/file'),
      'link/pointed/to/preset': resolve(
        '/generated/client/link/pointed/to/preset',
      ),
      'link/pointed/to/other': resolve(
        '/generated/client/link/pointed/to/other',
      ),
      'link/rewritten/by/project': resolve(
        '/generated/client/link/rewritten/by/project',
      ),
    });
  });

  it('ignore configuration', async () => {
    await bootstrapContent({
      ...defaultContext,
      custom: {
        ...defaultContext.custom,
        config: {
          'path/to/file': { name: 'path/to/file' },
          'link/pointed/to/preset': { name: 'link/pointed/to/preset' },
          'link/pointed/to/other': { name: 'link/pointed/to/other' },
          'link/rewritten/by/project': { name: 'link/rewritten/by/project' },
        },
        noSymlinks: ['path/to/file'],
        ignores: [
          'link/pointed/to/preset',
          'link/pointed/to/other',
          'link/rewritten/by/project',
          { 'path/to/file': ['name'] },
        ],
      },
    });

    expect(writeFiles).toBeCalledWith(
      '/project',
      { 'path/to/file': { template: true } },
      { 'path/to/file': resolve('/project/path/to/file') },
    );
    expect(linkFiles).toBeCalledWith('/project', {
      'path/to/file': resolve('/project/path/to/file'),
    });
  });
});

describe('fn:unsetPreset', () => {
  beforeAll(unsetPreset);

  it('clean up any artifacts installed on the project root', async () => {
    expect(unlinkFiles).toHaveBeenCalledWith('/project', {
      'link/pointed/to/other': resolve(
        '/generated/client/link/pointed/to/other',
      ),
      'link/pointed/to/preset': resolve(
        '/generated/client/link/pointed/to/preset',
      ),
      'link/rewritten/by/project': resolve(
        '/generated/client/link/rewritten/by/project',
      ),
      'path/to/file': resolve('/project/path/to/file'),
    });
  });
});

describe('fn:getContext', () => {
  it('compute the current context', async () => {
    expect(await getContext()).toEqual({
      target: {
        name: 'client',
        root: '/project',
        package: {
          dependencies: {},
          name: 'client',
          scripts: {
            test: 'test',
          },
        },
      },
      custom: {
        preset: ['no-symlink-preset', 'symlink-only-preset'],
        noSymlinks: ['path/to/file'],
      },
    });
  });
});

describe('fn:getDestinationMap', () => {
  it('compute the correct output paths', async () => {
    expect(
      await getDestinationMap(
        {
          config: '/path/to/template',
        },
        defaultContext,
      ),
    ).toEqual({
      config: resolve('/generated/client/config'),
    });
  });

  it('compute the correct output paths', async () => {
    expect(
      await getDestinationMap(
        {
          noSymlink: '/path/to/template',
          symlink: '/path/to/template',
        },
        {
          ...defaultContext,
          custom: { ...defaultContext.custom, noSymlinks: ['noSymlink'] },
        },
      ),
    ).toEqual({
      noSymlink: resolve('/project/noSymlink'),
      symlink: resolve('/generated/client/symlink'),
    });
  });
});
