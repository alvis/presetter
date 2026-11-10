import { existsSync } from 'node:fs';

import yargs from 'yargs';

import { use } from '../preset';
import { run } from '../run';
import { parseGlobalArgs, parseTaskSpec } from '../task';

import {
  bootstrapProjects,
  expandDelimitedValues,
  resolveProjectRoots,
} from './projects';

import type { Argv, CommandModule } from 'yargs';

import type { PackageManager } from '../preset';

interface UseArgs {
  preset: string[];
  packageManager?: PackageManager;
  force?: boolean;
}

interface BootstrapArgs {
  only?: string;
  projects: string[];
  packages: string[];
}

const useCommand: CommandModule<object, UseArgs> = {
  command: 'use <preset..>',
  describe: 'install presets and configure the project',
  builder: (yargs) =>
    yargs
      .positional('preset', {
        type: 'string',
        array: true,
        demandOption: true,
        description: 'preset package names, optionally with versions',
      })
      .option('package-manager', {
        type: 'string',
        choices: ['npm', 'pnpm', 'bun'] as const,
        description:
          'fallback when packageManager and lockfiles are inconclusive',
      })
      .option('force', {
        type: 'boolean',
        description:
          'replace dependencies that package.json declares with another version',
      })
      .help(),
  handler: async (argv) => {
    await use(argv.preset, {
      packageManager: argv.packageManager,
      force: argv.force,
    });
  },
};

const bootstrapCommand: CommandModule<
  Record<string, unknown>,
  BootstrapArgs
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
        coerce: (values: string[]): string[] => expandDelimitedValues(values),
        description:
          'a glob pattern matching any target project folders containing package.json (comma-separated values supported; prefix a pattern with ! to exclude its matches)',
      })
      .option('packages', {
        type: 'string',
        alias: 'P',
        array: true,
        default: [] as string[],
        coerce: (values: string[]): string[] => expandDelimitedValues(values),
        description:
          'a glob pattern matching any target package names (e.g. @presetter/preset-*; comma-separated values supported; prefix a pattern with ! to exclude its matches)',
      })
      .help() as Argv<BootstrapArgs>,
  handler: async (argv) => {
    const { only, projects, packages } = argv;

    if (only && !existsSync(only)) {
      return;
    }

    const projectRoots = await resolveProjectRoots({ projects, packages });

    await bootstrapProjects(projectRoots);
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
    const [, selector] = argv._.map((arg) => arg.toString()) as [
      string,
      string,
      ...Array<string | undefined>,
    ];
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
 */
export async function entry(args: string[]): Promise<void> {
  await yargs()
    .parserConfiguration({
      // make sure flags after end-of-options flag `--` are stored under `--`, not `_`

      'populate--': true,
    })
    .usage('⚙ presetter: your preset configurator')
    .showHelpOnFail(true)
    .command(useCommand)
    .command(bootstrapCommand)
    .command(runCommand)
    .command(runSCommand)
    .command(runPCommand)
    .demandCommand()
    .parse(args);
}
