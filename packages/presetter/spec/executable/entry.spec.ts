import { describe, expect, it, vi } from 'vitest';

import { entry } from '#executable/entry';
import { reifyDependencies } from '#package';
import { bootstrapPreset, setupPreset, unsetPreset } from '#preset';
import { run } from '#run';

vi.mock('node:fs', () => ({
  existsSync: vi.fn((path: string) => path === 'exist'),
}));

vi.mock('#package', () => ({
  getPackage: vi.fn(() => ({ path: '' })),
  reifyDependencies: vi.fn(
    async ({
      add,
    }: Parameters<typeof import('#package').reifyDependencies>[0]) =>
      add?.map((name) => ({ name, version: '*' })),
  ),
}));

vi.mock('#preset', () => ({
  bootstrapPreset: vi.fn(),
  setupPreset: vi.fn(),
  unsetPreset: vi.fn(),
}));

vi.mock('#run', () => ({
  run: vi.fn(),
}));

describe('fn:entry', () => {
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

      expect(bootstrapPreset).toBeCalledWith({ force: false });
    });

    it('bootstrap if the specified file exists', async () => {
      await entry(['bootstrap', '--only', 'exist']);

      expect(bootstrapPreset).toBeCalledWith({ force: false });
    });

    it('bootstrap with force', async () => {
      await entry(['bootstrap', '--force']);

      expect(bootstrapPreset).toBeCalledWith({ force: true });
    });

    it('skip bootstrap if the specified file is missing', async () => {
      await entry(['bootstrap', '--only', 'no-such-file']);

      expect(bootstrapPreset).not.toBeCalled();
    });
  });

  describe('run', () => {
    it('should run a single task with provided arguments', async () => {
      await entry(['run', 'task', '--', '"arg 1"', "'arg 2'"]);

      expect(run).toBeCalledWith(
        [
          {
            selector: 'task',
            args: ['arg 1', 'arg 2'],
          },
        ],
        { templateOnly: false },
      );
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
