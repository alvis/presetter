import { describe, expect, it, vi } from 'vitest';

import { InterruptedError } from '#interrupted';
import { run } from '#run';
import { startScript } from '#script';

import type { ScriptProcess } from '#script';

vi.mock('#script', () => ({
  startScript: vi.fn(
    ({ command }: { command: string }): ScriptProcess =>
      // NOTE: the script runs once presetter is waiting for it, so a signal it raises reaches its shell
      Object.assign(
        Promise.resolve().then(() => {
          if (command === 'erroneous command') {
            throw new Error('mock task failed');
          }

          // NOTE: a script receiving SIGINT, winding down and exiting with 130
          if (command === 'interrupted command') {
            process.emit('SIGINT');

            throw createInterruption();
          }

          // NOTE: a script receiving SIGHUP and exiting normally
          if (command === 'hung up command') {
            process.emit('SIGHUP');
          }
        }),
        { kill: vi.fn(() => true) },
      ),
  ),
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
      'interrupted': 'interrupted command',
      'sequence': 'run-s halted other',
      'halted': 'hung up command',
      'posthalted': 'posthalted command',
    },
  })),
}));

/**
 * create the error a script rejects with when it exits with 130 after SIGINT
 * @returns the error
 */
function createInterruption(): Error {
  return Object.assign(new Error('mock task interrupted'), {
    exitCode: 130,
  });
}

/**
 * lists the scripts executed so far, in order, with their arguments
 * @returns event name and arguments of each executed script
 */
function getExecutedScripts(): Array<[event: string, args: string[]]> {
  return vi
    .mocked(startScript)
    .mock.calls.map(([{ event, args }]) => [event, args]);
}

describe('fn:run', () => {
  it('should run tasks via listr', async () => {
    const selectors = [
      { selector: 'task', args: [] },
      { selector: 'other', args: [] },
    ];

    await run(selectors);

    expect(startScript).toHaveBeenCalledTimes(2);
    expect(startScript).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ event: 'task' }),
    );
    expect(startScript).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ event: 'other' }),
    );
  });

  it('should run all matching subtasks via listr', async () => {
    const selectors = [{ selector: 'subtask:**', args: [] }];

    await run(selectors);

    expect(startScript).toHaveBeenCalledTimes(2);
    expect(startScript).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ event: 'subtask:task1' }),
    );
    expect(startScript).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ event: 'subtask:task2' }),
    );
  });

  it('should run subtasks via listr', async () => {
    const selectors = [{ selector: 'subtask', args: [] }];

    await run(selectors);

    expect(startScript).toHaveBeenCalledTimes(2);
    expect(startScript).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ event: 'subtask:task1' }),
    );
    expect(startScript).toHaveBeenNthCalledWith(
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

      expect(startScript).toHaveBeenCalledTimes(1);
      expect(startScript).toHaveBeenCalledWith(
        expect.objectContaining({
          event: 'custom',
          command: 'custom command',
          cwd: '/fake/path',
        }),
      );
    });

    it('should run template scripts if templateOnly is true', async () => {
      const selectors = [{ selector: 'custom', args: [] }];

      await run(selectors, { templateOnly: true });

      expect(startScript).toHaveBeenCalledTimes(1);
      expect(startScript).toHaveBeenCalledWith(
        expect.objectContaining({
          event: 'custom',
          command: 'template command',
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

  describe('signals', () => {
    it('should reject with the status of the script that a signal has stopped', async () => {
      await expect(
        run([{ selector: 'interrupted', args: [] }]),
      ).rejects.toEqual(
        new InterruptedError('SIGINT', 130, { cause: createInterruption() }),
      );
    });

    it('should not start the remaining tasks of run-s once a signal has arrived', async () => {
      await expect(run([{ selector: 'sequence', args: [] }])).rejects.toEqual(
        new InterruptedError('SIGHUP', 129),
      );

      expect(getExecutedScripts()).toEqual([['halted', []]]);
    });

    it('should not start the post hook once a signal has arrived', async () => {
      await expect(run([{ selector: 'halted', args: [] }])).rejects.toEqual(
        new InterruptedError('SIGHUP', 129),
      );

      expect(getExecutedScripts()).toEqual([['halted', []]]);
    });

    it('should pass the signal to the running script', async () => {
      await expect(run([{ selector: 'halted', args: [] }])).rejects.toThrow(
        'interrupted by SIGHUP',
      );

      const script = vi.mocked(startScript).mock.results[0]!
        .value as ScriptProcess;

      expect(script.kill).toHaveBeenCalledWith('SIGHUP');
    });

    it('should stop listening to signals once the run has ended', async () => {
      const listening = process.listenerCount('SIGINT');

      await run([{ selector: 'task', args: [] }]);
      await expect(
        run([{ selector: 'interrupted', args: [] }]),
      ).rejects.toThrow('interrupted by SIGINT');

      expect(process.listenerCount('SIGINT')).toBe(listening);
    });
  });
});
