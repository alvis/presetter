import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

import {
  buildApplication,
  buildCommand,
  buildRouteMap,
  ExitCode,
  run as runApplication,
} from '@stricli/core';

import { use } from '../preset';
import { run } from '../run';
import { parseTaskSpec, unquoteArgs } from '../task';

import {
  bootstrapProjects,
  expandDelimitedValues,
  resolveProjectRoots,
} from './projects';

import type { CommandContext } from '@stricli/core';
import type { PackageJson } from 'type-fest';

import type { PackageManager } from '../preset';

/** context handed to every presetter command */
interface EntryContext extends CommandContext {
  /** arguments given after the first `--`, forwarded to every task */
  readonly globalArgs: readonly string[];
  /** record the failure of a command so that entry can rethrow it */
  readonly fail: (error: Error) => void;
}

/** a command implementation bound to the presetter context */
type CommandAction<FLAGS extends object, ARGS extends readonly string[]> = (
  this: EntryContext,
  flags: FLAGS,
  ...args: ARGS
) => Promise<void>;

interface UseFlags {
  /** fallback when packageManager and lockfiles are inconclusive */
  readonly packageManager?: PackageManager;
  /** replace dependencies that package.json declares with another version */
  readonly force?: boolean;
}

interface BootstrapFlags {
  /** proceed only if the specified file exists */
  readonly only?: string;
  /** path globs matching target project folders */
  readonly project?: readonly string[];
  /** package-name globs matching target packages */
  readonly package?: readonly string[];
}

interface RunFlags {
  /** use script from the template */
  readonly template: boolean;
}

const DEFAULT_PROJECTS = ['.'];
const END_OF_OPTIONS = '--';

const useCommand = buildCommand({
  func: settle<UseFlags, string[]>(async function (flags, ...presets) {
    await use(presets, {
      packageManager: flags.packageManager,
      force: flags.force,
    });
  }),
  parameters: {
    flags: {
      packageManager: {
        kind: 'enum',
        values: ['npm', 'pnpm', 'bun'],
        optional: true,
        brief: 'fallback when packageManager and lockfiles are inconclusive',
      },
      force: {
        kind: 'boolean',
        optional: true,
        brief:
          'replace dependencies that package.json declares with another version',
      },
    },
    positional: {
      kind: 'array',
      minimum: 1,
      parameter: {
        brief: 'preset package names, optionally with versions',
        parse: String,
        placeholder: 'preset',
      },
    },
  },
  docs: { brief: 'install presets and configure the project' },
});

const bootstrapCommand = buildCommand({
  func: settle<BootstrapFlags, string[]>(async function (flags, ...paths) {
    if (flags.only && !existsSync(flags.only)) {
      return;
    }

    // NOTE: positional paths and --project are two spellings of the same input
    const projectPatterns = [...paths, ...(flags.project ?? [])];
    const projectRoots = await resolveProjectRoots({
      projects:
        projectPatterns.length > 0
          ? expandDelimitedValues(projectPatterns)
          : DEFAULT_PROJECTS,
      packages: expandDelimitedValues(flags.package ?? []),
    });

    await bootstrapProjects(projectRoots);
  }),
  parameters: {
    flags: {
      only: {
        kind: 'parsed',
        parse: String,
        optional: true,
        placeholder: 'file',
        brief: 'proceed only if the specified file exists',
      },
      project: {
        kind: 'parsed',
        parse: String,
        variadic: true,
        optional: true,
        placeholder: 'glob',
        brief:
          'a glob pattern matching target project folders containing package.json, same as a positional path (repeatable; comma-separated values supported; prefix with ! to exclude its matches)',
      },
      package: {
        kind: 'parsed',
        parse: String,
        variadic: true,
        optional: true,
        placeholder: 'glob',
        brief:
          'a glob pattern matching target package names, e.g. @presetter/preset-* (repeatable; comma-separated values supported; prefix with ! to exclude its matches)',
      },
    },
    aliases: { p: 'project', P: 'package' },
    positional: {
      kind: 'array',
      parameter: {
        brief:
          'a glob pattern matching target project folders containing package.json (defaults to . when no project is given)',
        parse: String,
        placeholder: 'project',
      },
    },
  },
  docs: { brief: 'setup the project according to the specified preset' },
});

const runCommand = buildCommand({
  func: settle<RunFlags, [string]>(async function (flags, selector) {
    await run([{ selector, args: [...this.globalArgs] }], {
      templateOnly: flags.template,
    });
  }),
  parameters: {
    flags: {
      template: {
        kind: 'boolean',
        default: false,
        brief: 'use script from the template',
      },
    },
    positional: {
      kind: 'tuple',
      parameters: [
        { brief: 'the task to run', parse: String, placeholder: 'task' },
      ],
    },
  },
  docs: { brief: 'run a template script' },
});

const runSCommand = buildCommand({
  func: settle<object, string[]>(async function (_, ...specs) {
    const tasks = specs.map((spec) =>
      parseTaskSpec(spec, [...this.globalArgs]),
    );

    await run(tasks);
  }),
  parameters: {
    positional: {
      kind: 'array',
      minimum: 1,
      parameter: { brief: 'tasks to run', parse: String, placeholder: 'task' },
    },
  },
  docs: { brief: 'run scripts in sequence' },
});

const runPCommand = buildCommand({
  func: settle<object, string[]>(async function (_, ...specs) {
    const tasks = unquoteArgs(specs).map((spec) =>
      parseTaskSpec(spec, [...this.globalArgs]),
    );

    await run(tasks, { parallel: true });
  }),
  parameters: {
    positional: {
      kind: 'array',
      minimum: 1,
      parameter: { brief: 'tasks to run', parse: String, placeholder: 'task' },
    },
  },
  docs: { brief: 'run scripts in parallel' },
});

const application = buildApplication(
  buildRouteMap({
    routes: {
      'use': useCommand,
      'bootstrap': bootstrapCommand,
      'run': runCommand,
      'run-s': runSCommand,
      'run-p': runPCommand,
    },
    docs: { brief: '⚙ presetter: your preset configurator' },
  }),
  {
    name: 'presetter',
    versionInfo: { getCurrentVersion: readVersion },
    scanner: { caseStyle: 'allow-kebab-for-camel' },
  },
);

/**
 * provide a command line interface
 * @param args command line arguments
 */
export async function entry(args: string[]): Promise<void> {
  const [inputs, globalArgs] = splitGlobalArgs(args);

  if (inputs.length === 0) {
    // NOTE: stricli only prints help for a bare invocation, but a missing command is still a
    //       usage error, and stricli keeps an exit code that is already set
    process.exitCode = ExitCode.UnknownCommand;
  }

  // NOTE: stricli reports a thrown error on its own, so a command records it here instead
  //       and leaves the reporting to the caller that knows how to print it nicely
  let failure: Error | undefined;

  await runApplication(application, inputs, {
    process,
    globalArgs: unquoteArgs(globalArgs),
    fail: (error) => {
      failure = error;
    },
  });

  if (failure) {
    throw failure;
  }
}

/**
 * bind a command implementation to the presetter context, handing any failure back to entry
 * @param action the command implementation
 * @returns a command function for stricli
 */
function settle<FLAGS extends object, ARGS extends readonly string[]>(
  action: CommandAction<FLAGS, ARGS>,
): CommandAction<FLAGS, ARGS> {
  return async function (this: EntryContext, flags, ...args) {
    try {
      await action.call(this, flags, ...args);
    } catch (error) {
      this.fail(error as Error);
    }
  };
}

/**
 * split the arguments meant for presetter from the global arguments given after `--`
 * @param args command line arguments
 * @returns arguments for presetter and the global arguments for every task
 */
function splitGlobalArgs(
  args: readonly string[],
): [inputs: string[], globalArgs: string[]] {
  const index = args.indexOf(END_OF_OPTIONS);

  // NOTE: everything after `--` belongs to the tasks, so stricli must never see it,
  //       otherwise a task flag such as `--help` would be taken as presetter's own
  return index === -1
    ? [[...args], []]
    : [args.slice(0, index), args.slice(index + 1)];
}

/**
 * read the version of the running presetter
 * @returns the version declared by presetter's own package.json
 */
async function readVersion(): Promise<string> {
  // NOTE: both src/executable and lib/executable sit two levels below the package root
  const manifest = new URL('../../package.json', import.meta.url);
  const { version } = JSON.parse(
    await readFile(manifest, { encoding: 'utf8' }),
  ) as PackageJson;

  // NOTE: presetter's own manifest always declares its version
  return version!;
}
