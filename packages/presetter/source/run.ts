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

import { dirname } from 'node:path';

import { Listr } from 'listr2';

import parse from 'yargs-parser';

import npmRunScript from '@npmcli/run-script';

import debug from './debugger';
import { getPackage } from './package';
import { getScripts } from './preset';
import { composeScripts } from './scripts';
import { parseGlobalArgs, parseTaskSpec, selectTasks } from './task';

import type { ListrTask, SimpleRenderer } from 'listr2';

import type { Package } from './package';
import type { Task } from './task';

/**
 * create an array of Listr tasks based on the provided inputs
 * @param _ collection of arguments
 * @param _.composed composed script object containing script definitions
 * @param _.template template object containing script definitions
 * @param _.pkg detail of package.json
 * @param _.task task name
 * @param _.args array of arguments
 * @returns array of Listr tasks
 */
function createListrTask(_: {
  composed: Record<string, string>;
  template: Record<string, string>;
  pkg: Package;
  task: string;
  args: string[];
}): ListrTask<never, typeof SimpleRenderer> {
  const { composed, template, task, args, pkg } = _;

  return {
    title: `Running ${task}...`,
    task: async (_, taskControl) => {
      const command = composed[task];

      // parse the command and extract the executable and task specifications
      const argv = parse(command, {
        configuration: { 'populate--': true, 'unknown-options-as-args': true },
      });
      const [executable, ...taskSpecs] = argv._.map((arg) => arg.toString());

      // check if the executable is 'run-s' or 'run-p'
      if (['run-s', 'run-p'].includes(executable)) {
        const globalArgs = [...parseGlobalArgs(argv), ...args];

        // get subtasks based on the task specifications and global arguments
        const subTasks = taskSpecs.flatMap((taskSpec) =>
          getListrTasksBySpec({ template, pkg, taskSpec, globalArgs }),
        );

        const concurrent = executable === 'run-p';

        return taskControl.newListr(subTasks, { concurrent });
      } else {
        // run the npm script with the provided arguments and package information
        return runWithNPM({ task, args, pkg, composedScript: composed });
      }
    },
  };
}

/**
 * get Listr tasks based on the task specification and global arguments
 * @param _ collection of arguments
 * @param _.template template object containing script definitions
 * @param _.pkg detail of package.json
 * @param _.taskSpec task specification string
 * @param _.globalArgs array of global arguments
 * @returns array of Listr tasks
 */
function getListrTasksBySpec(_: {
  template: Record<string, string>;
  pkg: Package;
  taskSpec: string;
  globalArgs: string[];
}): Array<ListrTask<never, typeof SimpleRenderer>> {
  const { template, pkg, taskSpec, globalArgs } = _;

  // parse the task specification and remove any quotes
  const task = parseTaskSpec(
    taskSpec.toString().replace(/^(['"])([^]*?)\1$/, '$2'),
    globalArgs,
  );

  // get Listr tasks based on the provided inputs
  return getListrTasks({
    template,
    pkg,
    selector: task.selector,
    args: task.args,
  });
}

/**
 * create an array of Listr tasks based on the provided inputs
 * @param _ collection of arguments
 * @param _.template template object containing script definitions
 * @param _.pkg detail of package.json
 * @param _.selector task selector string
 * @param _.args array of arguments
 * @returns array of Listr tasks
 */
function getListrTasks(_: {
  template: Record<string, string>;
  pkg: Package;
  selector: string;
  args: string[];
}): Array<ListrTask<never, typeof SimpleRenderer>> {
  const { template, pkg, selector, args } = _;

  // clone the content for immutability
  const target = { ...pkg.json.scripts } as Record<string, string>;

  // compose the script using the provided template and target
  const composed = composeScripts({ template, target });

  // select tasks based on the composed script and selector
  const tasks = selectTasks(Object.keys(composed), selector);

  // create Listr tasks based on the selected tasks
  return tasks.map((task) =>
    createListrTask({ composed, template, pkg, task, args }),
  );
}

/**
 * run a task defined in the combined script definitions using npm-run-script
 * @param _ collection of arguments
 * @param _.task task name
 * @param _.args array of arguments
 * @param _.pkg detail of package.json
 * @param _.composedScript combined script definitions
 * @returns a promise that will be resolved when the task is completed
 */
async function runWithNPM(_: {
  task: string;
  args: string[];
  pkg: Package;
  composedScript: Record<string, string>;
}): Promise<void> {
  const { task, args, pkg, composedScript } = _;

  debug('RUNNING\n%O', { task, command: composedScript[task] });

  await npmRunScript({
    event: task,
    args,
    pkg: { scripts: composedScript },
    path: dirname(pkg.path),
    stdio: 'inherit',
  });
}

/**
 * run a task defined in the combined script definitions.
 * @param tasks array of objects containing the selector and args for the task
 * @param options collection of options
 * @param options.parallel whether to run tasks concurrently
 * @param options.templateOnly whether to resolve the task from the template only
 */
export async function run(
  tasks: Task[],
  options?: { parallel?: boolean; templateOnly?: boolean },
): Promise<void> {
  const { parallel = false, templateOnly = false } = { ...options };

  debug('TASK INSTRUCTION\n%O', { tasks, parallel, templateOnly });

  // find the target project's package.json information
  const pkg = await getPackage();
  if (templateOnly) {
    // remove all scripts from the package.json
    pkg.json.scripts = {};
  }

  // get the merged script definitions
  const template = await getScripts();

  // get Listr tasks based on the provided tasks and package information
  const listTasks = tasks.flatMap((task) =>
    getListrTasks({ template, pkg, ...task }),
  );

  // create a Listr instance with the list of tasks and configuration options
  const listr = new Listr<never, 'simple'>(listTasks, {
    concurrent: parallel,
    exitOnError: true,
    renderer: 'simple',
  });

  // run the Listr tasks
  try {
    await listr.run();
  } catch {
    process.exit(1);
  }
}
