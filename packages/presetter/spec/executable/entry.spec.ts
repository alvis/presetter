import { readFile } from 'node:fs/promises';

import { ExitCode } from '@stricli/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { entry } from '#executable/entry';
import { bootstrapProjects, resolveProjectRoots } from '#executable/projects';
import { use } from '#preset';
import { run } from '#run';

vi.mock(
  'node:fs',
  () =>
    ({
      existsSync: vi.fn((path: import('node:fs').PathLike) => path === 'exist'),
    }) satisfies Partial<typeof import('node:fs')>,
);

vi.mock(
  '#executable/projects',
  async (importOriginal) =>
    ({
      ...(await importOriginal<typeof import('#executable/projects')>()),
      bootstrapProjects: vi.fn(),
      resolveProjectRoots: vi.fn(async () => ['/resolved/root']),
    }) satisfies typeof import('#executable/projects'),
);

vi.mock(
  '#preset',
  () =>
    ({
      use: vi.fn(),
    }) satisfies Partial<typeof import('#preset')>,
);

vi.mock(
  '#run',
  () =>
    ({
      run: vi.fn(),
    }) satisfies Partial<typeof import('#run')>,
);

describe('fn:entry', () => {
  beforeEach(() => {
    // NOTE: keep the usage errors printed by stricli out of the test output
    vi.spyOn(process.stderr, 'write').mockReturnValue(true);
  });

  afterEach(() => {
    // NOTE: stricli reports a usage error through the exit code, which must not fail the test run
    process.exitCode = undefined;
  });

  describe('use', () => {
    it('should adopt each named preset with an explicit package manager', async () => {
      await entry([
        'use',
        '@scope/esm@^2',
        'preset-strict',
        '--package-manager=pnpm',
      ]);

      expect(vi.mocked(use).mock.calls).toEqual([
        [['@scope/esm@^2', 'preset-strict'], { packageManager: 'pnpm' }],
      ]);
    });

    it('should pass --force to adoption', async () => {
      await entry(['use', '@scope/esm', '--force']);

      expect(vi.mocked(use).mock.calls).toEqual([
        [['@scope/esm'], { packageManager: undefined, force: true }],
      ]);
    });

    it('should leave package manager detection to adoption when the flag is omitted', async () => {
      await entry(['use', '@scope/esm']);

      expect(vi.mocked(use).mock.calls).toEqual([
        [['@scope/esm'], { packageManager: undefined }],
      ]);
    });

    it('should reject an unsupported package manager', async () => {
      await entry(['use', '@scope/esm', '--package-manager=yarn']);

      expect(use).not.toHaveBeenCalled();
      expect(process.exitCode).toBe(ExitCode.InvalidArgument);
    });
  });

  describe('bootstrap', () => {
    it('should bootstrap the current directory when no project is given', async () => {
      await entry(['bootstrap']);

      expect(resolveProjectRoots).toHaveBeenCalledWith({
        projects: ['.'],
        packages: [],
      });
      expect(bootstrapProjects).toHaveBeenCalledWith(['/resolved/root']);
    });

    it('should bootstrap if the specified file exists', async () => {
      await entry([
        'bootstrap',
        '--only',
        'exist',
        '--project',
        'packages/app',
      ]);

      expect(resolveProjectRoots).toHaveBeenCalledWith({
        projects: ['packages/app'],
        packages: [],
      });
      expect(bootstrapProjects).toHaveBeenCalledWith(['/resolved/root']);
    });

    it('should skip bootstrap if the specified file is missing', async () => {
      await entry(['bootstrap', '--only', 'no-such-file']);

      expect(resolveProjectRoots).not.toHaveBeenCalled();
      expect(bootstrapProjects).not.toHaveBeenCalled();
    });

    it('should select nothing when the only project pattern is empty', async () => {
      await entry(['bootstrap', '-p', '']);

      expect(resolveProjectRoots).toHaveBeenCalledWith({
        projects: [],
        packages: [],
      });
    });

    it('should split comma-separated project patterns', async () => {
      await entry(['bootstrap', '--project', 'presets/next, presets/node']);

      expect(resolveProjectRoots).toHaveBeenCalledWith({
        projects: ['presets/next', 'presets/node'],
        packages: [],
      });
    });

    it('should collect each repeated --project flag via the -p alias', async () => {
      await entry(['bootstrap', '-p', 'presets/next', '-p', 'presets/node']);

      expect(resolveProjectRoots).toHaveBeenCalledWith({
        projects: ['presets/next', 'presets/node'],
        packages: [],
      });
    });

    it('should treat positional paths the same as --project flags', async () => {
      await entry(['bootstrap', 'presets/next', 'presets/node']);

      expect(resolveProjectRoots).toHaveBeenCalledWith({
        projects: ['presets/next', 'presets/node'],
        packages: [],
      });
    });

    it('should combine positional paths with --project flags', async () => {
      await entry(['bootstrap', 'presets/*', '--project', '!presets/node']);

      expect(resolveProjectRoots).toHaveBeenCalledWith({
        projects: ['presets/*', '!presets/node'],
        packages: [],
      });
    });

    it('should collect package-name globs via the -P alias', async () => {
      await entry([
        'bootstrap',
        '-p',
        '',
        '-P',
        '@acme/preset-next,@acme/preset-node',
      ]);

      expect(resolveProjectRoots).toHaveBeenCalledWith({
        projects: [],
        packages: ['@acme/preset-next', '@acme/preset-node'],
      });
    });

    it('should collect each repeated --package flag', async () => {
      await entry([
        'bootstrap',
        '--package',
        '@acme/preset-next',
        '--package',
        '@acme/preset-node',
      ]);

      expect(resolveProjectRoots).toHaveBeenCalledWith({
        projects: ['.'],
        packages: ['@acme/preset-next', '@acme/preset-node'],
      });
    });

    it('should reject the removed --projects flag', async () => {
      await entry(['bootstrap', '--projects', 'packages/app']);

      expect(bootstrapProjects).not.toHaveBeenCalled();
      expect(process.exitCode).toBe(ExitCode.InvalidArgument);
    });

    it('should rethrow a bootstrap failure for the caller to report', async () => {
      const failure = new Error('broken config');
      vi.mocked(bootstrapProjects).mockRejectedValueOnce(failure);

      await expect(entry(['bootstrap'])).rejects.toBe(failure);
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

    it('should use the template script with --template', async () => {
      await entry(['run', '--template', 'task']);

      expect(run).toHaveBeenCalledWith([{ selector: 'task', args: [] }], {
        templateOnly: true,
      });
    });

    it('should forward a --help given after -- to the task', async () => {
      await entry(['run', 'task', '--', '--help']);

      expect(run).toHaveBeenCalledWith(
        [{ selector: 'task', args: ['--help'] }],
        { templateOnly: false },
      );
    });

    it('should reject an unknown flag given before --', async () => {
      await entry(['run', 'task', '--watch']);

      expect(run).not.toHaveBeenCalled();
      expect(process.exitCode).toBe(ExitCode.InvalidArgument);
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

  it('should print the version of presetter', async () => {
    const write = vi.spyOn(process.stdout, 'write').mockReturnValue(true);

    const { version } = JSON.parse(
      await readFile('package.json', { encoding: 'utf8' }),
    ) as { version: string };

    await entry(['--version']);

    expect(write).toHaveBeenCalledWith(`${version}\n`);
  });

  it('should report a missing command as a usage error', async () => {
    vi.spyOn(process.stdout, 'write').mockReturnValue(true);

    await entry([]);

    expect(run).not.toHaveBeenCalled();
    expect(process.exitCode).toBe(ExitCode.UnknownCommand);
  });

  it('should report an unknown command without running anything', async () => {
    await entry(['unknown', '--arg-1']);

    expect(bootstrapProjects).toHaveBeenCalledTimes(0);
    expect(run).toHaveBeenCalledTimes(0);
    expect(process.exitCode).toBe(ExitCode.UnknownCommand);
  });
});
