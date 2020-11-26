/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on the common line interface
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { entry } from '#executable/entry';
import { installPackages } from '#package';
import { bootstrapPreset, setupPreset, unsetPreset } from '#preset';
import { run } from '#run';

jest.mock('fs-extra', () => ({
  __esModule: true,
  pathExists: jest.fn(async (path: string) => path === 'exist'),
}));

jest.mock('#package', () => ({
  __esModule: true,
  getPackage: jest.fn(() => ({ path: '' })),
  installPackages: jest.fn(
    async ({ packages }: Parameters<typeof installPackages>[0]) =>
      packages.map((name) => ({ name, version: 'latest' })),
  ),
}));

jest.mock('#preset', () => ({
  __esModule: true,
  bootstrapPreset: jest.fn(),
  setupPreset: jest.fn(),
  unsetPreset: jest.fn(),
}));

jest.mock('#run', () => ({
  __esModule: true,
  running: false,
  run: jest.fn(async function () {
    // ensure that nothing is running in parallel
    expect(this.running).toEqual(false);
    this.running = true;

    return new Promise<void>((resolve) =>
      setImmediate(() => {
        this.running = false;
        resolve();
      }),
    );
  }),
}));

describe('fn:executable/entry', () => {
  beforeEach(jest.clearAllMocks);

  it('use preset', async () => {
    process.argv = ['node', 'cli', 'use', 'preset'];
    await entry();

    expect(setupPreset).toBeCalledWith('preset');
  });

  it('bootstrap by default', async () => {
    process.argv = ['node', 'cli', 'bootstrap'];
    await entry();

    expect(bootstrapPreset).toBeCalledWith();
  });

  it('bootstrap if the specified file exists', async () => {
    process.argv = ['node', 'cli', 'bootstrap', '--only', 'exist'];
    await entry();

    expect(bootstrapPreset).toBeCalledWith();
  });

  it('skip bootstrap if the specified file is missing', async () => {
    process.argv = ['node', 'cli', 'bootstrap', '--only', 'no-such-file'];
    await entry();

    expect(bootstrapPreset).not.toBeCalled();
  });

  it('run', async () => {
    process.argv = ['node', 'cli', 'run', 'task', '--', 'arg-1', '--arg-2'];
    await entry();

    expect(run).toBeCalledWith('task', ['arg-1', '--arg-2']);
  });

  it('unset', async () => {
    process.argv = ['node', 'cli', 'unset'];
    await entry();

    expect(unsetPreset).toBeCalledWith();
  });

  it('not run anything when the command cannot be recognised', async () => {
    process.argv = ['node', 'cli', 'unknown', '--arg-1'];
    await entry();

    expect(installPackages).toBeCalledTimes(0);
    expect(bootstrapPreset).toBeCalledTimes(0);
    expect(unsetPreset).toBeCalledTimes(0);
    expect(run).toBeCalledTimes(0);
  });
});
