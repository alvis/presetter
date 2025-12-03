import npmRunScript from '@npmcli/run-script';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { run } from '#run';

vi.mock('@npmcli/run-script', () => ({
  default: vi.fn(({ event }: { event: string }) => {
    if (event === 'error') {
      throw new Error();
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
      },
    },
  })),
}));

vi.mock('#preset', () => ({
  getScripts: vi.fn(async () => ({
    'custom': 'template command',
    'task': 'command --arg-template',
    'other': 'other --arg-template',
    'subtask': 'run-s subtask:*',
    'subtask:task1': 'command1 --arg',
    'subtask:task2': 'command2 --arg',
  })),
}));

describe('fn:run', () => {
  beforeEach(() => vi.clearAllMocks());

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

  it('should exit with an error code when any one of the tasks fails', async () => {
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
    await run([{ selector: 'error', args: [] }]);

    expect(process.exit).toHaveBeenCalledWith(1);
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
});
