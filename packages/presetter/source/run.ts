/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Run a task
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2019 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import execa from 'execa';
import { existsSync, renameSync, unlinkSync, writeFileSync } from 'fs';
import { once } from 'lodash';
import { basename, dirname, resolve } from 'path';

import { getPackage } from './package';
import { getScripts } from './preset';
import { composeScripts } from './scripts';

import type { Package } from './package';

/** manage ~package.json */
class TemporaryPackageJSONManager {
  private package: Package;
  private path: string;

  private shouldRestore: boolean;

  /**
   * create a temporary package.json manager
   * @param packageDetail the content of the target project's package.json
   */
  constructor(packageDetail: Package) {
    this.path = resolve(
      dirname(packageDetail.path),
      '~' + basename(packageDetail.path),
    );

    this.package = packageDetail;
    this.shouldRestore = !existsSync(this.path);
  }

  /**
   * setup an environment for running a task with presetter
   * @param task name of the task to be replaced by the template
   */
  public async replace(task: string): Promise<void> {
    // delete the current task to avoid duplicated task running
    delete this.package.json.scripts[task];

    // get the merged script definitions
    const template = await getScripts();
    this.package.json.scripts = composeScripts({
      template,
      target: {
        ...this.package.json.scripts,
      },
    });

    // move the existing package.json to a safe place
    if (this.shouldRestore) {
      try {
        renameSync(this.package.path, this.path);
      } catch {
        /* istanbul ignore next */
        throw new Error('failed to backup package.json');
      }
    }

    // generate a temporary package.json in order to let npm to see all the definitions
    const PADDING = 2;
    const content = JSON.stringify(this.package.json, null, PADDING);
    try {
      writeFileSync(this.package.path, content);
    } catch {
      /* istanbul ignore next */
      throw new Error('failed to write to package.json');
    }
  }

  /**
   * clean up the temporary artifacts
   */
  public async restore(): Promise<void> {
    if (this.shouldRestore) {
      try {
        unlinkSync(this.package.path);
        renameSync(this.path, this.package.path);
      } catch {
        /* istanbul ignore next */
        throw new Error('failed to restore package.json');
      }
    }
  }
}

/**
 * run a task defined in the combined script definitions
 * @param task the name of the task to be run
 * @param argv parameters supplied for the task
 */
export async function run(task: string, argv: string[] = []): Promise<void> {
  // try to find the target project's package.json
  const packageDetail = await getPackage();
  const manager = new TemporaryPackageJSONManager(packageDetail);

  // setup
  await manager.replace(task);
  const restore = once(async (isInterrupted: boolean): Promise<void> => {
    // stop listening to SIGINT in order to avoid double handling during the restoration process
    process.removeListener('SIGINT', restore);

    // restore package.json
    await manager.restore();

    if (isInterrupted) {
      const SIGINT = 130;
      process.exit(SIGINT);
    }
  });
  process.on('SIGINT', restore.bind(run, true));

  // run the task
  const { exitCode } = await execa('npm', ['run', task, '--', ...argv], {
    cwd: dirname(packageDetail.path),
    stdio: 'inherit',
    reject: false,
    shell: true,
  });

  // restore package.json
  await restore(false);

  // set the exit code as the same as the returned
  if (exitCode > 0) {
    process.exit(exitCode);
  }
}
