import { beforeEach, describe, expect, it, vi } from 'vitest';

import { entry } from '#executable/entry';
import { reifyDependencies } from '#package';
import { bootstrap } from '#preset';
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
  bootstrap: vi.fn(),
}));

vi.mock('#run', () => ({
  run: vi.fn(),
}));

describe('fn:entry', () => {
  beforeEach(() => vi.clearAllMocks());

  describe('bootstrap', () => {
    it('should bootstrap by default', async () => {
      await entry(['bootstrap']);

      expect(bootstrap).toHaveBeenCalled();
    });

    it('should bootstrap if the specified file exists', async () => {
      await entry(['bootstrap', '--only', 'exist']);

      expect(bootstrap).toHaveBeenCalled();
    });

    it('should skip bootstrap if the specified file is missing', async () => {
      await entry(['bootstrap', '--only', 'no-such-file']);

      expect(bootstrap).not.toHaveBeenCalled();
    });
  });

  describe('run', () => {
    it('should run a single task with provided arguments', async () => {
      await entry(['run', 'task', '--', '"arg 1"', "'arg 2'"]);

      expect(run).toHaveBeenCalledWith(
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

      expect(run).toHaveBeenCalledWith([
        {
          selector: 'task',
          args: [],
        },
      ]);
    });

    it('should run multiple tasks without arguments', async () => {
      await entry(['run-s', 'task1', 'task2', '--', 'arg-1', '--arg-2']);

      expect(run).toHaveBeenCalledWith([
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

      expect(run).toHaveBeenCalledWith([
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

      expect(run).toHaveBeenCalledWith(
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

  it('should not do anything if the command cannot be recognized', async () => {
    await entry(['unknown', '--arg-1']);

    expect(reifyDependencies).toHaveBeenCalledTimes(0);
    expect(bootstrap).toHaveBeenCalledTimes(0);
    expect(run).toHaveBeenCalledTimes(0);
  });
});
