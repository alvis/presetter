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

import { beforeEach, describe, expect, it, vi } from 'vitest';

// import { writePackage } from 'write-pkg';

// import { bootstrapContent } from '#preset/content';
// import { updatePresetterRC } from '#preset/presetterRC';

// import type { setupPreset } from '#preset/setup';
import {
  defaultDummyContext,
  mockContext,
  mockIO,
  mockModuleResolution,
} from './mock';

vi.doMock('node:console', () => ({
  info: vi.fn(),
}));

vi.doMock('read-pkg', () => ({
  readPackage: vi
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

vi.doMock('write-pkg', () => ({
  writePackage: vi.fn(),
}));

vi.doMock('#package', () => ({
  arePeerPackagesAutoInstalled: vi.fn(),
  getPackage: vi.fn(() => ({
    path: '/project/package.json',
    json: {
      name: 'client',
      scripts: {
        test: 'test',
      },
      dependencies: {},
    },
  })),
  reifyDependencies: vi.fn(
    async ({ add }: Parameters<typeof reifyDependencies>[0]) =>
      add?.map((name) => ({ name, version: '*' })),
  ),
}));

vi.doMock('#preset/content', () => ({
  bootstrapContent: vi.fn(),
}));

vi.doMock('#preset/presetterRC', async (importActual) => ({
  updatePresetterRC: vi.fn(),
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
const { bootstrapPreset, setupPreset } = await import('#preset/setup');

describe('fn:bootstrapPreset', () => {
  beforeEach(() => {
    vi.mocked(reifyDependencies).mockReset();
  });

  it('should install packages specified by the preset if peer packages are not automatically installed by the package manager', async () => {
    vi.mocked(arePeerPackagesAutoInstalled).mockReturnValue(false);

    await bootstrapPreset();

    expect(reifyDependencies).toHaveBeenCalledTimes(1);
  });

  it('should skip installing peer packages manually if auto peers install is supported by package manager', async () => {
    vi.mocked(arePeerPackagesAutoInstalled).mockReturnValue(true);

    await bootstrapPreset();

    expect(reifyDependencies).not.toHaveBeenCalled();
  });
});

describe('fn:setupPreset', () => {
  it('should install presetter and the preset', async () => {
    await setupPreset('preset1', 'preset2');

    // it should install presetter and the preset
    expect(reifyDependencies).toHaveBeenCalledTimes(1);
    expect(reifyDependencies).toBeCalledWith({
      add: ['presetter', 'preset1', 'preset2'],
      root: '/project',
      saveAs: 'dev',
      lockFile: true,
    });

    // it should write to .presetterrc.json
    expect(updatePresetterRC).toBeCalledWith('/project', {
      preset: ['preset1', 'preset2'],
    });

    // it should bootstrap the client project
    expect(bootstrapContent).toBeCalledWith(defaultDummyContext);

    // it should merge the bootstrapping script to package.json
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
