import npmRunScript from '@npmcli/run-script';
import { Listr } from 'listr2';

import parse from 'yargs-parser';

import { resolveProjectContext } from './context';
import debug from './debugger';
import { getScripts } from './preset';
import { composeScripts } from './scripts';
import { parseGlobalArgs, parseTaskSpec, selectTasks } from './task';

import type { ListrTask, SimpleRenderer } from 'listr2';
import type { ProjectContext } from 'presetter-types';

import type { Task } from './task';

/**
 * create an array of Listr tasks based on the provided inputs
 * @param _ collection of arguments
 * @param _.composed composed script object containing script definitions
 * @param _.template template object containing script definitions
 * @param _.context project context
 * @param _.task task name
 * @param _.args array of arguments
 * @returns array of Listr tasks
 */
function createListrTask(_: {
  composed: Record<string, string>;
  template: Record<string, string>;
  context: ProjectContext;
  task: string;
  args: string[];
}): ListrTask<never, typeof SimpleRenderer> {
  const { composed, template, task, args, context } = _;

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
          getListrTasksBySpec({ template, context, taskSpec, globalArgs }),
        );

        const concurrent = executable === 'run-p';

        return taskControl.newListr(subTasks, { concurrent });
      } else {
        taskControl.output = `${composed[task]} ${args.join(' ')}`;

        // run the npm script with the provided arguments and package information
        return runWithNPM({
          task,
          args,
          context,
          composedScript: composed,
        });
      }
    },
  };
}

/**
 * get Listr tasks based on the task specification and global arguments
 * @param _ collection of arguments
 * @param _.template template object containing script definitions
 * @param _.context package context
 * @param _.taskSpec task specification string
 * @param _.globalArgs array of global arguments
 * @returns array of Listr tasks
 */
function getListrTasksBySpec(_: {
  template: Record<string, string>;
  context: ProjectContext;
  taskSpec: string;
  globalArgs: string[];
}): Array<ListrTask<never, typeof SimpleRenderer>> {
  const { template, context, taskSpec, globalArgs } = _;

  // parse the task specification and remove any quotes
  const task = parseTaskSpec(
    taskSpec.toString().replace(/^(['"])([^]*?)\1$/, '$2'),
    globalArgs,
  );

  // get Listr tasks based on the provided inputs
  return getListrTasks({
    template,
    context,
    selector: task.selector,
    args: task.args,
  });
}

/**
 * create an array of Listr tasks based on the provided inputs
 * @param _ collection of arguments
 * @param _.template template object containing script definitions
 * @param _.context project context
 * @param _.selector task selector string
 * @param _.args array of arguments
 * @returns array of Listr tasks
 */
function getListrTasks(_: {
  template: Record<string, string>;
  context: ProjectContext;
  selector: string;
  args: string[];
}): Array<ListrTask<never, typeof SimpleRenderer>> {
  const { template, context, selector, args } = _;

  // clone the content for immutability
  const target = { ...context.packageJson.scripts } as Record<string, string>;

  // compose the script using the provided template and target
  const composed = composeScripts({ template, target });

  // select tasks based on the composed script and selector
  const tasks = selectTasks(Object.keys(composed), selector);

  // create Listr tasks based on the selected tasks
  return tasks.map((task) =>
    createListrTask({ composed, template, context, task, args }),
  );
}

/**
 * run a task defined in the combined script definitions using npm-run-script
 * @param _ collection of arguments
 * @param _.task task name
 * @param _.args array of arguments
 * @param _.context project context
 * @param _.composedScript combined script definitions
 * @returns a promise that will be resolved when the task is completed
 */
async function runWithNPM(_: {
  task: string;
  args: string[];
  context: ProjectContext;
  composedScript: Record<string, string>;
}): Promise<void> {
  const {
    task,
    args,
    context: { projectRoot },
    composedScript,
  } = _;

  debug('RUNNING\n%O', { task, command: composedScript[task] });

  await npmRunScript({
    event: task,
    args,
    pkg: { scripts: composedScript },
    path: projectRoot,
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
  const context = await resolveProjectContext();
  const distilled: ProjectContext = templateOnly
    ? ({
        ...context,
        packageJson: { ...context.packageJson, scripts: {} },
      } as ProjectContext)
    : context;

  // get the merged script definitions
  const template = await getScripts();

  // get Listr tasks based on the provided tasks and package information
  const listTasks = tasks.flatMap((task) =>
    getListrTasks({ template, context: distilled, ...task }),
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
