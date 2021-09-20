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

import execa from 'execa';
import { move, unlink, writeFile } from 'fs-extra';
import { resolve } from 'path';

import { run } from '#run';

let mockTemporaryPackageJSONExists: boolean;

const MOCK_PACKAGE_PATH = resolve('tmp', 'package.json');
const MOCK_TEMPORARY_PACKAGE_PATH = resolve('tmp', '~package.json');

jest.spyOn(process, 'exit').mockImplementation((() => {}) as any);

jest.mock('execa', () => ({
  __esModule: true,
  default: jest.fn(async (_: string, [__, task]: string[]) => {
    switch (task) {
      case 'error':
        return {
          exitCode: 99,
        };
      case 'sigint':
        return new Promise((resolve) => {
          process.emit('SIGINT', 'SIGINT');
          // a second signal to ensure that the signal is only handled once
          process.emit('SIGINT', 'SIGINT');

          // ensure that the event has been processed by the handlers
          process.nextTick(() =>
            resolve({
              exitCode: 0,
            }),
          );
        });
      default:
        return {
          exitCode: 0,
        };
    }
  }),
}));

jest.mock('fs-extra', () => ({
  __esModule: true,
  pathExistsSync: jest.fn(() => mockTemporaryPackageJSONExists),
  move: jest.fn().mockResolvedValue(undefined),
  unlink: jest.fn().mockResolvedValue(undefined),
  writeFile: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('yargs', () => ({
  __esModule: true,
  default: {
    parse: jest.fn((path: string) =>
      path
        ? jest.requireActual('yargs').parse(path)
        : {
            // mimic the current runner
            $0: 'run',
          },
    ),
  },
}));

jest.mock('#package', () => ({
  esModule: true,
  getPackage: jest.fn(async () => ({
    path: MOCK_PACKAGE_PATH,
    json: {
      scripts: {
        task: 'run task --arg-package',
        other: 'run other -- --arg-package',
      },
    },
  })),
}));

jest.mock('#preset', () => ({
  esModule: true,
  getContext: jest.fn(),
  getScripts: jest.fn(async () => ({
    task: 'command --arg-template',
    other: 'other --arg-template',
  })),
}));

function expectCompleteSetupAndTeardown() {
  // setup and restore
  if (mockTemporaryPackageJSONExists) {
    expect(move).toHaveBeenCalledTimes(0);
    expect(unlink).toHaveBeenCalledTimes(0);
  } else {
    expect(move).toHaveBeenCalledTimes(2);
    expect(move).toHaveBeenCalledWith(
      MOCK_PACKAGE_PATH,
      MOCK_TEMPORARY_PACKAGE_PATH,
    );
    expect(move).toHaveBeenCalledWith(
      MOCK_TEMPORARY_PACKAGE_PATH,
      MOCK_PACKAGE_PATH,
    );
    expect(unlink).toHaveBeenCalledTimes(1);
    expect(unlink).toHaveBeenCalledWith(MOCK_PACKAGE_PATH);
  }
}

describe('fn:run', () => {
  for (const value of [true, false]) {
    describe(`mock temporary package.json: ${value}`, () => {
      beforeEach(jest.clearAllMocks);
      beforeEach(() => {
        mockTemporaryPackageJSONExists = value;
      });

      it('run self referenced task properly', async () => {
        await run('task', ['--arg-extra']);

        expectCompleteSetupAndTeardown();
        expect(execa).toHaveBeenCalledWith(
          'npm',
          ['run', 'task', '--', '--arg-extra'],
          {
            cwd: resolve('tmp'),
            reject: false,
            shell: true,
            stdio: 'inherit',
          },
        );
        expect(writeFile).toHaveBeenCalledWith(
          MOCK_PACKAGE_PATH,
          JSON.stringify(
            {
              scripts: {
                task: 'command --arg-template',
                other: 'other --arg-template --arg-package',
              },
            },
            null,
            2,
          ),
        );
      });

      it('forward the exit code from the task', async () => {
        await run('error');

        expectCompleteSetupAndTeardown();

        // the exit code 99 is arbitrary here, just to make sure it's exited with the same code as the task
        expect(process.exit).toHaveBeenCalledWith(99);
      });

      it('restore package.json when the process is terminated prematurely', async () => {
        await run('sigint');

        expectCompleteSetupAndTeardown();

        // a SIGINT signal should result in exit code 130
        expect(process.exit).toHaveBeenCalledWith(130);
      });
    });
  }
});
