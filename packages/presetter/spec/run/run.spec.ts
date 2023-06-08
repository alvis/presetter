/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on task running
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { jest } from '@jest/globals';

jest.spyOn(process, 'exit').mockImplementation((() => {}) as any);

jest.unstable_mockModule('@npmcli/run-script', () => ({
  default: jest.fn(({ event }: { event: string }) => {
    if (event === 'error') {
      throw new Error();
    }
  }),
}));

jest.unstable_mockModule('#package', () => ({
  getPackage: jest.fn(async () => ({
    path: '/fake/path/package.json',
    json: {
      scripts: {
        custom: 'custom command',
        task: 'run task --arg-package',
        other: 'run other -- --arg-package',
        subtask: 'run subtask',
        error: 'erroneous command',
      },
    },
  })),
}));

jest.unstable_mockModule('#preset', () => ({
  getScripts: jest.fn(async () => ({
    'custom': 'template command',
    'task': 'command --arg-template',
    'other': 'other --arg-template',
    'subtask': 'run-s subtask:*',
    'subtask:task1': 'command1 --arg',
    'subtask:task2': 'command2 --arg',
  })),
}));

const { run } = await import('#run');
const { default: npmRunScript } = await import('@npmcli/run-script');
describe('fn:run', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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
