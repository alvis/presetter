import { existsSync } from 'node:fs';
import { dirname, posix } from 'node:path';

import { globby } from 'globby';
import yargs from 'yargs';

import { bootstrap } from '../preset';
import { run } from '../run';
import { parseGlobalArgs, parseTaskSpec } from '../task';

import type { CommandModule } from 'yargs';

const bootstrapCommand: CommandModule<
  Record<string, unknown>,
  { only?: string; projects: string[] }
> = {
  command: 'bootstrap',
  describe: 'setup the project according to the specified preset',
  builder: (yargs) =>
    yargs
      .option('only', {
        type: 'string',
        description: 'proceed only if the specified file exists',
      })
      .option('projects', {
        type: 'string',
        alias: 'p',
        array: true,
        default: ['.'],
        description:
          'a glob pattern matching any target project folders containing package.json',
      })
      .help(),
  handler: async (argv) => {
    const { only, projects } = argv;

    // only proceed if the specified file exists
    if (!only || existsSync(only)) {
      // look for all projects by looking for the `preset.json` file
      const packageJsons = await globby(
        projects.map((project) => posix.join(project, 'package.json')),
        {
          gitignore: true,
          ignore: ['**/node_modules/**'],
        },
      );

      const projectRoots = packageJsons.map(dirname);

      // bootstrap all projects
      for (const root of projectRoots) {
        await bootstrap(root);
      }
    }
  },
};

const runCommand: CommandModule<
  Record<string, unknown>,
  { template?: boolean }
> = {
  command: 'run',
  describe: 'run a template script',
  builder: (yargs) =>
    yargs
      .option('template', {
        type: 'boolean',
        default: false,
        description: 'use script from the template',
      })
      .usage('run <task>')
      .demandCommand(),
  handler: async (argv) => {
    // get the options
    const [, selector] = argv._.map((arg) => arg.toString());
    const args = parseGlobalArgs(argv);

    await run([{ selector, args }], { templateOnly: argv.template });
  },
};

const runSCommand: CommandModule = {
  command: 'run-s',
  describe: 'run scripts in sequence',
  builder: (yargs) => yargs.usage('run-s <task>').demandCommand(),
  handler: async (argv) => {
    const [, ...specs] = argv._.map((arg) => arg.toString());
    const globalArgs = parseGlobalArgs(argv);

    const tasks = specs.map((spec) => parseTaskSpec(spec, globalArgs));

    await run(tasks);
  },
};

const runPCommand: CommandModule = {
  command: 'run-p',
  describe: 'run scripts in parallel',
  builder: (yargs) => yargs.usage('run-p <task>').demandCommand(),
  handler: async (argv) => {
    const [, ...specs] = argv._.map(
      (arg) => arg.toString().replace(/^(['"])([^]*?)\1$/, '$2'), // replace the single or double quotes that wrap the argument
    );
    const globalArgs = parseGlobalArgs(argv);

    const tasks = specs.map((spec) => parseTaskSpec(spec, globalArgs));

    await run(tasks, { parallel: true });
  },
};

/**
 * provide a command line interface
 * @param args command line arguments
 * @returns the command entered together with its options
 */
export async function entry(args: string[]): Promise<void> {
  await yargs()
    .parserConfiguration({
      // make sure flags after end-of-options flag `--` are stored under `--`, not `_`

      'populate--': true,
    })
    .usage('⚙ presetter: your preset configurator')
    .showHelpOnFail(true)
    .command(bootstrapCommand)
    .command(runCommand)
    .command(runSCommand)
    .command(runPCommand)
    .demandCommand()
    .parse(args);
}
