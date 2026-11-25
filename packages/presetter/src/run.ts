import { Listr } from 'listr2';

import parse from 'yargs-parser';

import { resolveProjectContext } from './context';
import debug from './debugger';
import { getScripts } from './preset';
import { startScript } from './script';
import { composeScripts } from './scripts';
import { trapSignals } from './signals';
import { parseGlobalArgs, parseTaskSpec, selectTasks } from './task';

import type { ProjectContext } from '@presetter/types';
import type { ListrTask, SimpleRenderer } from 'listr2';

import type { SignalTrap } from './signals';
import type { Task } from './task';

/** a Listr task rendered by the simple renderer */
type RunnerTask = ListrTask<never, typeof SimpleRenderer>;

/**
 * create Listr tasks that run a task between its pre and post hooks, as npm run does
 * @param _ collection of arguments
 * @param _.scripts composed script object containing script definitions
 * @param _.template template object containing script definitions
 * @param _.context project context
 * @param _.paths additional binary paths from preset roots
 * @param _.task task name
 * @param _.args array of arguments, passed to the task only and never to its hooks
 * @param _.concurrent whether the tasks join a list that runs concurrently
 * @param _.trap the trap keeping the scripts from starting once a signal has arrived
 * @param _.lifecycleEvent the package.json script the package manager is running, if any
 * @returns Listr tasks running the hooks and the task in sequence
 */
function createListrTasks(_: {
  scripts: Record<string, string>;
  template: Record<string, string>;
  context: ProjectContext;
  paths: string[];
  task: string;
  args: string[];
  concurrent: boolean;
  trap: SignalTrap;
  lifecycleEvent?: string;
}): RunnerTask[] {
  const { concurrent, lifecycleEvent, ...script } = _;
  const { scripts, task, context } = script;

  // NOTE: a package manager running the task as a package.json script has already run the hooks package.json defines
  const managedHooks =
    task === lifecycleEvent ? { ...context.packageJson.scripts } : {};

  // NOTE: like npm, hooks get no arguments and never fire hooks of their own
  const createHookTasks = (hook: string): RunnerTask[] => {
    const command = scripts[hook];

    return command && !Object.hasOwn(managedHooks, hook)
      ? [createScriptTask({ ...script, task: hook, args: [] })]
      : [];
  };
  const sequence = [
    ...createHookTasks(`pre${task}`),
    createScriptTask(script),
    ...createHookTasks(`post${task}`),
  ];

  // NOTE: a sequential list keeps the hooks beside the task so the output reads like npm's,
  //       while a concurrent one needs an untitled group to keep them in order
  return concurrent && sequence.length > 1
    ? [
        {
          task: (_, taskControl) =>
            taskControl.newListr(sequence, { concurrent: false }),
        },
      ]
    : sequence;
}

/**
 * create a Listr task that runs a single script without its hooks
 * @param _ collection of arguments
 * @param _.scripts composed script object containing script definitions
 * @param _.template template object containing script definitions
 * @param _.context project context
 * @param _.paths additional binary paths from preset roots
 * @param _.task task name
 * @param _.args array of arguments
 * @param _.trap the trap keeping the script from starting once a signal has arrived
 * @returns a Listr task running the script
 */
function createScriptTask(_: {
  scripts: Record<string, string>;
  template: Record<string, string>;
  context: ProjectContext;
  paths: string[];
  task: string;
  args: string[];
  trap: SignalTrap;
}): RunnerTask {
  const { scripts, template, task, args, context, paths, trap } = _;

  return {
    title: `Running ${task}...`,
    task: async (_, taskControl) => {
      const command = scripts[task]!;

      // parse the command and extract the executable and task specifications
      const argv = parse(command, {
        configuration: { 'populate--': true, 'unknown-options-as-args': true },
      });
      const [executable, ...taskSpecs] = argv._.map((arg) =>
        arg.toString(),
      ) as [string, ...string[]];

      // check if the executable is 'run-s' or 'run-p'
      if (['run-s', 'run-p'].includes(executable)) {
        const globalArgs = [...parseGlobalArgs(argv), ...args];
        const concurrent = executable === 'run-p';

        // get subtasks based on the task specifications and global arguments
        const nestedTasks = await Promise.all(
          taskSpecs.map(async (taskSpec) =>
            getListrTasksBySpec({
              template,
              context,
              paths,
              taskSpec,
              globalArgs,
              concurrent,
              trap,
            }),
          ),
        );
        const subTasks = nestedTasks.flat();

        return taskControl.newListr(subTasks, { concurrent });
      }
      taskControl.output = `${scripts[task]} ${args.join(' ')}`;

      // run the script with the provided arguments in the project root
      // NOTE: skipping a script that a signal kept from starting stops Listr from reporting it as completed
      return trap.guard(
        () =>
          startScript({
            event: task,
            command,
            args,
            cwd: context.projectRoot,
            paths,
          }),
        () => {
          taskControl.skip('interrupted by a signal');
        },
      );
    },
  };
}

/**
 * get Listr tasks based on the task specification and global arguments
 * @param _ collection of arguments
 * @param _.template template object containing script definitions
 * @param _.context package context
 * @param _.paths additional binary paths from preset roots
 * @param _.taskSpec task specification string
 * @param _.globalArgs array of global arguments
 * @param _.concurrent whether the tasks join a list that runs concurrently
 * @param _.trap the trap keeping the scripts from starting once a signal has arrived
 * @returns a promise resolving to an array of Listr tasks
 */
async function getListrTasksBySpec(_: {
  template: Record<string, string>;
  context: ProjectContext;
  paths: string[];
  taskSpec: string;
  globalArgs: string[];
  concurrent: boolean;
  trap: SignalTrap;
}): Promise<RunnerTask[]> {
  const { template, context, paths, taskSpec, globalArgs, concurrent } = _;
  const { trap } = _;

  // parse the task specification and remove any quotes
  const task = parseTaskSpec(
    taskSpec.replace(/^(['"])([^]*?)\1$/, '$2'),
    globalArgs,
  );

  // get Listr tasks based on the provided inputs
  return getListrTasks({
    template,
    context,
    paths,
    selector: task.selector,
    args: task.args,
    concurrent,
    trap,
  });
}

/**
 * create an array of Listr tasks based on the provided inputs
 * @param _ collection of arguments
 * @param _.template template object containing script definitions
 * @param _.context project context
 * @param _.paths additional binary paths from preset roots
 * @param _.selector task selector string
 * @param _.args array of arguments
 * @param _.concurrent whether the tasks join a list that runs concurrently
 * @param _.trap the trap keeping the scripts from starting once a signal has arrived
 * @param _.lifecycleEvent the package.json script the package manager is running, if any
 * @returns a promise resolving to an array of Listr tasks
 */
async function getListrTasks(_: {
  paths: string[];
  template: Record<string, string>;
  context: ProjectContext;
  selector: string;
  args: string[];
  concurrent: boolean;
  trap: SignalTrap;
  lifecycleEvent?: string;
}): Promise<RunnerTask[]> {
  const { paths, template, context, selector, args } = _;
  const { concurrent, trap, lifecycleEvent } = _;

  // clone the content for immutability
  const target = { ...context.packageJson.scripts } as Record<string, string>;

  // compose the script using the provided template and target
  const scripts = await composeScripts({ template, target });

  // select tasks based on the composed script and selector
  const tasks = selectTasks(Object.keys(scripts), selector);

  // create Listr tasks, with their hooks, based on the selected tasks
  return tasks.flatMap((task) =>
    createListrTasks({
      paths,
      scripts,
      template,
      context,
      task,
      args,
      concurrent,
      trap,
      lifecycleEvent,
    }),
  );
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
  const { paths, scripts: template } = await getScripts();

  // NOTE: from here a signal must reach the scripts and wait for them, not kill presetter and leave them behind
  const trap = trapSignals();

  try {
    // get Listr tasks based on the provided tasks and package information
    const nestedTasks = await Promise.all(
      tasks.map(async (taskItem) =>
        getListrTasks({
          paths,
          template,
          context: distilled,
          selector: taskItem.selector,
          args: taskItem.args,
          concurrent: parallel,
          trap,
          // NOTE: only a top-level task can be the script the package manager runs
          lifecycleEvent: process.env.npm_lifecycle_event,
        }),
      ),
    );
    const listTasks = nestedTasks.flat();

    // create a Listr instance with the list of tasks and configuration options
    const listr = new Listr<never, 'simple'>(listTasks, {
      concurrent: parallel,
      exitOnError: true,
      renderer: 'simple',
      // NOTE: on SIGINT Listr abandons the running task and exits with 127 at once, before the script has wound down
      registerSignalListeners: false,
    });

    // run the Listr tasks
    await trap.supervise(listr.run());
  } finally {
    trap.release();
  }
}
