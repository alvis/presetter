import npmRunScript from '@npmcli/run-script';
import { describe, expect, it, vi } from 'vitest';

import { run } from '#run';

vi.mock('@npmcli/run-script', () => ({
  default: vi.fn(({ event, pkg }: Parameters<typeof npmRunScript>[0]) => {
    if (pkg.scripts?.[event] === 'erroneous command') {
      throw new Error('mock task failed');
    }
  }),
}));

vi.mock('#context', () => ({
  resolveProjectContext: vi.fn(async () => ({
    isRepoRoot: false,
    repoRoot: '/fake/path',
    projectRoot: '/fake/path',
    packageJson: {
      scripts: {
        custom: 'custom command',
        task: 'run task -- --arg-package',
        other: 'run other -- --arg-package',
        subtask: 'run subtask',
        error: 'erroneous command',
        prelocal: 'prelocal command',
      },
    },
  })),
}));

vi.mock('#preset', () => ({
  getScripts: vi.fn(async () => ({
    paths: [],
    scripts: {
      'custom': 'template command',
      'task': 'command --arg-template',
      'other': 'other --arg-template',
      'subtask': 'run-s subtask:*',
      'subtask:task1': 'command1 --arg',
      'subtask:task2': 'command2 --arg',
      'local': 'local command',
      'wrapper': 'run-s local',
      'hooked': 'hooked command',
      'prehooked': 'prehooked command',
      'posthooked': 'posthooked command',
      'preprehooked': 'preprehooked command',
      'postposthooked': 'postposthooked command',
      'nested': 'run-s hooked other',
      'concurrent': 'run-p blocked other',
      'blocked': 'blocked command',
      'preblocked': 'erroneous command',
      'postblocked': 'postblocked command',
      'aborted': 'erroneous command',
      'preaborted': 'preaborted command',
      'postaborted': 'postaborted command',
    },
  })),
}));

/**
 * lists the scripts executed so far, in order, with their arguments
 * @returns event name and arguments of each executed script
 */
function getExecutedScripts(): Array<[event: string, args: string[]]> {
  return vi
    .mocked(npmRunScript)
    .mock.calls.map(([{ event, args }]) => [event, args]);
}

describe('fn:run', () => {
  it('should run tasks via listr', async () => {
    const selectors = [
      { selector: 'task', args: [] },
      { selector: 'other', args: [] },
    ];

    await run(selectors);

    expect(npmRunScript).toHaveBeenCalledTimes(2);
    expect(npmRunScript).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ event: 'task' }),
    );
    expect(npmRunScript).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ event: 'other' }),
    );
  });

  it('should run all matching subtasks via listr', async () => {
    const selectors = [{ selector: 'subtask:**', args: [] }];

    await run(selectors);

    expect(npmRunScript).toHaveBeenCalledTimes(2);
    expect(npmRunScript).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ event: 'subtask:task1' }),
    );
    expect(npmRunScript).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ event: 'subtask:task2' }),
    );
  });

  it('should run subtasks via listr', async () => {
    const selectors = [{ selector: 'subtask', args: [] }];

    await run(selectors);

    expect(npmRunScript).toHaveBeenCalledTimes(2);
    expect(npmRunScript).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ event: 'subtask:task1' }),
    );
    expect(npmRunScript).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ event: 'subtask:task2' }),
    );
  });

  it('should reject when any one of the tasks fails', async () => {
    await expect(run([{ selector: 'error', args: [] }])).rejects.toThrow(
      'mock task failed',
    );
  });

  describe('opt:templateOnly', () => {
    it('should run custom scripts by default', async () => {
      const selectors = [{ selector: 'custom', args: [] }];

      await run(selectors);

      expect(npmRunScript).toHaveBeenCalledTimes(1);
      expect(npmRunScript).toHaveBeenCalledWith(
        expect.objectContaining({
          event: 'custom',
          pkg: expect.objectContaining({
            scripts: expect.objectContaining({ custom: 'custom command' }),
          }),
        }),
      );
    });

    it('should run template scripts if templateOnly is true', async () => {
      const selectors = [{ selector: 'custom', args: [] }];

      await run(selectors, { templateOnly: true });

      expect(npmRunScript).toHaveBeenCalledTimes(1);
      expect(npmRunScript).toHaveBeenCalledWith(
        expect.objectContaining({
          event: 'custom',
          pkg: expect.objectContaining({
            scripts: expect.objectContaining({ custom: 'template command' }),
          }),
        }),
      );
    });
  });

  describe('pre and post hooks', () => {
    it('should run the pre hook before and the post hook after the task', async () => {
      await run([{ selector: 'hooked', args: [] }]);

      expect(getExecutedScripts()).toEqual([
        ['prehooked', []],
        ['hooked', []],
        ['posthooked', []],
      ]);
    });

    it('should pass arguments to the main task only', async () => {
      await run([{ selector: 'hooked', args: ['--flag', 'value'] }]);

      expect(getExecutedScripts()).toEqual([
        ['prehooked', []],
        ['hooked', ['--flag', 'value']],
        ['posthooked', []],
      ]);
    });

    it('should run the hooks of a task reached through run-s', async () => {
      await run([{ selector: 'nested', args: [] }]);

      expect(getExecutedScripts()).toEqual([
        ['prehooked', []],
        ['hooked', []],
        ['posthooked', []],
        ['other', []],
      ]);
    });

    it('should keep the hooks in sequence with a task reached through run-p', async () => {
      await expect(run([{ selector: 'concurrent', args: [] }])).rejects.toThrow(
        'mock task failed',
      );

      const executed = getExecutedScripts();

      expect(executed).toContainEqual(['preblocked', []]);
      expect(executed).not.toContainEqual(['blocked', []]);
    });

    it('should run the hooks of a hook script run as a task', async () => {
      await run([{ selector: 'prehooked', args: [] }]);

      expect(getExecutedScripts()).toEqual([
        ['preprehooked', []],
        ['prehooked', []],
      ]);
    });

    it('should run a hook defined only in package.json', async () => {
      await run([{ selector: 'local', args: [] }]);

      expect(getExecutedScripts()).toEqual([
        ['prelocal', []],
        ['local', []],
      ]);
    });

    it('should ignore package.json hooks if templateOnly is true', async () => {
      await run([{ selector: 'local', args: [] }], { templateOnly: true });

      expect(getExecutedScripts()).toEqual([['local', []]]);
    });

    describe('run as a package.json script', () => {
      it('should skip the hooks package.json defines, which the package manager runs', async () => {
        vi.stubEnv('npm_lifecycle_event', 'local');

        await run([{ selector: 'local', args: [] }]);

        expect(getExecutedScripts()).toEqual([['local', []]]);
      });

      it('should run the hooks only the template defines', async () => {
        vi.stubEnv('npm_lifecycle_event', 'hooked');

        await run([{ selector: 'hooked', args: [] }]);

        expect(getExecutedScripts()).toEqual([
          ['prehooked', []],
          ['hooked', []],
          ['posthooked', []],
        ]);
      });

      it('should run the package.json hooks of a task reached through run-s', async () => {
        vi.stubEnv('npm_lifecycle_event', 'local');

        await run([{ selector: 'wrapper', args: [] }]);

        expect(getExecutedScripts()).toEqual([
          ['prelocal', []],
          ['local', []],
        ]);
      });
    });

    it('should stop before the task when the pre hook fails', async () => {
      await expect(run([{ selector: 'blocked', args: [] }])).rejects.toThrow(
        'mock task failed',
      );

      expect(getExecutedScripts()).toEqual([['preblocked', []]]);
    });

    it('should skip the post hook when the task fails', async () => {
      await expect(run([{ selector: 'aborted', args: [] }])).rejects.toThrow(
        'mock task failed',
      );

      expect(getExecutedScripts()).toEqual([
        ['preaborted', []],
        ['aborted', []],
      ]);
    });
  });
});
