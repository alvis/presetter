/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on configuration management
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { jest } from '@jest/globals';

import { posix, relative, resolve, sep } from 'node:path';

import { mockIO } from './mock';

jest.unstable_mockModule('read-pkg-up', () => ({
  readPackageUp: jest.fn(({ cwd }: { cwd: string }) => {
    // ensure that the paths below is compatible with windows
    const posixPath = relative(resolve('/'), cwd).split(sep).join(posix.sep);
    switch (posixPath) {
      case `monorepo`:
      case `monorepo/packages`:
        return { path: '/monorepo/package.json' };
      default:
        return undefined;
    }
  }),
}));

mockIO({
  'monorepo/packages/package1/.presetterrc': {},
  'monorepo/.presetterrc': {},
});

const { writeFileSync } = await import('node:fs');

const { assertPresetterRC } = await import('#preset/presetterRC');
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

const { getPresetterRC } = await import('#preset/presetterRC');
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

const { getPresetterRCPaths } = await import('#preset/presetterRC');
describe('fn:getPresetterRCPaths', () => {
  it('return the path to the configuration file in a single project repo', async () => {
    expect(await getPresetterRCPaths('/project')).toEqual([
      resolve('/project/.presetterrc'),
    ]);
  });

  it('return paths to the configuration files in a monorepo', async () => {
    expect(await getPresetterRCPaths('/monorepo/packages/package1')).toEqual([
      resolve('/monorepo/.presetterrc'),
      resolve('/monorepo/packages/package1/.presetterrc'),
    ]);
  });
});

const { updatePresetterRC } = await import('#preset/presetterRC');
describe('fn:updatePresetterRC', () => {
  it('create a new .presetterrc if it is inexistent', async () => {
    await updatePresetterRC('/missing-presetterrc', { preset: ['new-preset'] });

    expect(writeFileSync).toBeCalledWith(
      resolve('/missing-presetterrc/.presetterrc.json'),
      JSON.stringify({ preset: ['new-preset'] }, null, 2),
    );
  });

  it('merge with the existing .presetterrc', async () => {
    await updatePresetterRC('/project', { preset: ['new-preset'] });

    expect(writeFileSync).toBeCalledWith(
      resolve('/project/.presetterrc.json'),
      JSON.stringify(
        {
          preset: ['no-symlink-preset', 'symlink-only-preset', 'new-preset'],
          noSymlinks: ['path/to/file'],
        },
        null,
        2,
      ),
    );
  });
});
