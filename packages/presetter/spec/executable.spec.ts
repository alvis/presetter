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
import { reifyDependencies } from '#package';
import { bootstrapPreset, setupPreset, unsetPreset } from '#preset';
import { run } from '#run';

jest.mock('node:fs', () => ({
  __esModule: true,
  existsSync: jest.fn((path: string) => path === 'exist'),
}));

jest.mock('#package', () => ({
  __esModule: true,
  getPackage: jest.fn(() => ({ path: '' })),
  reifyDependencies: jest.fn(
    async ({ add }: Parameters<typeof reifyDependencies>[0]) =>
      add?.map((name) => ({ name, version: '*' })),
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
  run: jest.fn(),
}));

describe('fn:entry', () => {
  beforeEach(jest.clearAllMocks);

  describe('use', () => {
    it('use preset', async () => {
      await entry(['use', 'preset']);

      expect(setupPreset).toBeCalledWith('preset');
    });

    it('take multiple presets', async () => {
      await entry(['use', 'preset1', 'preset2']);

      expect(setupPreset).toBeCalledWith('preset1', 'preset2');
    });
  });

  describe('bootstrap', () => {
    it('bootstrap by default', async () => {
      await entry(['bootstrap']);

      expect(bootstrapPreset).toBeCalledWith();
    });

    it('bootstrap if the specified file exists', async () => {
      await entry(['bootstrap', '--only', 'exist']);

      expect(bootstrapPreset).toBeCalledWith();
    });

    it('skip bootstrap if the specified file is missing', async () => {
      await entry(['bootstrap', '--only', 'no-such-file']);

      expect(bootstrapPreset).not.toBeCalled();
    });
  });

  describe('run', () => {
    it('should run a single task with provided arguments', async () => {
      await entry(['run', 'task', '--', '"arg 1"', "'arg 2'"]);

      expect(run).toBeCalledWith([
        {
          selector: 'task',
          args: ['arg 1', 'arg 2'],
        },
      ]);
    });
  });

  describe('run-s', () => {
    it('should run a single task without arguments', async () => {
      await entry(['run-s', 'task', '--', 'arg-1', '--arg-2']);

      expect(run).toBeCalledWith([
        {
          selector: 'task',
          args: [],
        },
      ]);
    });

    it('should run multiple tasks without arguments', async () => {
      await entry(['run-s', 'task1', 'task2', '--', 'arg-1', '--arg-2']);

      expect(run).toBeCalledWith([
        {
          selector: 'task1',
          args: [],
        },
        {
          selector: 'task2',
          args: [],
        },
      ]);
    });

    it('should run multiple tasks with specified arguments', async () => {
      await entry([
        'run-s',
        'task1 -- arg-1 --arg-2 "arg 3"',
        'task2 -- arg-4 --arg-5 {@}',
        '--',
        'arg-6',
        '--arg-7',
      ]);

      expect(run).toBeCalledWith([
        {
          selector: 'task1',
          args: ['arg-1', '--arg-2', 'arg 3'],
        },
        {
          selector: 'task2',
          args: ['arg-4', '--arg-5', 'arg-6', '--arg-7'],
        },
      ]);
    });
  });

  describe('run-p', () => {
    it('should run multiple tasks in parallel', async () => {
      await entry(['run-p', 'task1', 'task2']);

      expect(run).toBeCalledWith(
        [
          {
            selector: 'task1',
            args: [],
          },
          {
            selector: 'task2',
            args: [],
          },
        ],
        { parallel: true },
      );
    });
  });

  describe('unset', () => {
    it('unset', async () => {
      await entry(['unset']);

      expect(unsetPreset).toBeCalledWith();
    });
  });

  it('does not do anything if the command cannot be recognized', async () => {
    await entry(['unknown', '--arg-1']);

    expect(reifyDependencies).toBeCalledTimes(0);
    expect(bootstrapPreset).toBeCalledTimes(0);
    expect(unsetPreset).toBeCalledTimes(0);
    expect(run).toBeCalledTimes(0);
  });
});
