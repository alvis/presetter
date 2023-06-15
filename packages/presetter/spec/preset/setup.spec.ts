/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on preset bootstrapping
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { jest } from '@jest/globals';
import {
  defaultDummyContext,
  mockContext,
  mockIO,
  mockModuleResolution,
} from './mock';

jest.unstable_mockModule('node:console', () => ({
  info: jest.fn(),
}));

jest.unstable_mockModule('read-pkg', () => ({
  readPackage: jest
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

jest.unstable_mockModule('write-pkg', () => ({
  writePackage: jest.fn(),
}));

jest.unstable_mockModule('#package', () => ({
  arePeerPackagesAutoInstalled: jest.fn(),
  getPackage: jest.fn(() => ({
    path: '/project/package.json',
    json: {
      name: 'client',
      scripts: {
        test: 'test',
      },
      dependencies: {},
    },
  })),
  reifyDependencies: jest.fn(
    async ({ add }: Parameters<typeof reifyDependencies>[0]) =>
      add?.map((name) => ({ name, version: '*' })),
  ),
}));

jest.unstable_mockModule('#preset/content', () => ({
  bootstrapContent: jest.fn(),
}));

jest.unstable_mockModule('#preset/presetterRC', () => ({
  updatePresetterRC: jest.fn(),
}));

mockContext();
mockIO();
mockModuleResolution();

const { writePackage } = await import('write-pkg');
const { arePeerPackagesAutoInstalled, reifyDependencies } = await import(
  '#package'
);
const { bootstrapContent } = await import('#preset/content');
const { updatePresetterRC } = await import('#preset/presetterRC');

const { bootstrapPreset } = await import('#preset');
describe('fn:bootstrapPreset', () => {
  beforeEach(() => {
    jest.mocked(reifyDependencies).mockReset();
  });

  it('install packages specified by the preset if peer packages are not automatically installed by the package manager', async () => {
    jest.mocked(arePeerPackagesAutoInstalled).mockReturnValue(false);

    await bootstrapPreset();

    expect(reifyDependencies).toHaveBeenCalledTimes(1);
  });

  it('skip installing peer packages manually if auto peers install is supported by package manager', async () => {
    jest.mocked(arePeerPackagesAutoInstalled).mockReturnValue(true);

    await bootstrapPreset();

    expect(reifyDependencies).not.toHaveBeenCalled();
  });
});

const { setupPreset } = await import('#preset/setup');
describe('fn:setupPreset', () => {
  beforeAll(() => setupPreset('preset1', 'preset2'));

  it('install presetter and the preset', async () => {
    expect(reifyDependencies).toHaveBeenCalledTimes(1);
    expect(reifyDependencies).toBeCalledWith({
      add: ['presetter', 'preset1', 'preset2'],
      root: '/project',
      saveAs: 'dev',
      lockFile: true,
    });
  });

  it('write to .presetterrc.json', async () => {
    expect(updatePresetterRC).toBeCalledWith('/project', {
      preset: ['preset1', 'preset2'],
    });
  });

  it('bootstrap the client project', async () => {
    expect(bootstrapContent).toBeCalledWith(defaultDummyContext);
  });

  it('merge the bootstrapping script to package.json', async () => {
    expect(writePackage).toBeCalledWith(
      '/project',
      expect.objectContaining({
        scripts: {
          prepare: 'presetter bootstrap',
          test: 'test',
        },
      }),
    );
  });
});
