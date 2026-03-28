import { existsSync, readFileSync } from 'node:fs';
import { dirname, posix, resolve } from 'node:path';

import { globby } from 'globby';
import yargs from 'yargs';

import { bootstrap } from '../preset';
import { run } from '../run';
import { parseGlobalArgs, parseTaskSpec } from '../task';

import type { PackageJson } from 'type-fest';
import type { Argv, CommandModule } from 'yargs';

interface BootstrapArgs {
  only?: string;
  projects: string[];
  packages: string[];
}

interface ResolveProjectRootsOptions {
  readonly projects: readonly string[];
  readonly packages: readonly string[];
}

const DEFAULT_LIST_DELIMITER = ',';
const WORKSPACE_GLOB_OPTIONS = {
  gitignore: true,
  ignore: ['**/node_modules/**'],
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
          'a glob pattern matching any target project folders containing package.json (comma-separated values supported)',
      })
      .option('packages', {
        type: 'string',
        alias: 'P',
        array: true,
        default: [] as string[],
        coerce: (values: string[]): string[] => expandDelimitedValues(values),
        description:
          'a glob pattern matching any target package names (e.g. @presetter/preset-*; comma-separated values supported)',
      })
      .help() as Argv<BootstrapArgs>,
  handler: async (argv) => {
    const { only, projects, packages } = argv;

    if (only && !existsSync(only)) {
      return;
    }

    const projectRoots = await resolveProjectRoots({ projects, packages });
    for (const root of projectRoots) {
      await bootstrap(root);
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
    .command(bootstrapCommand)
    .command(runCommand)
    .command(runSCommand)
    .command(runPCommand)
    .demandCommand()
    .parse(args);
}

/**
 * resolve target project roots from path globs and package-name globs
 * @param options resolution inputs
 * @param options.projects path globs (e.g. `presets/next`, `packages/*`)
 * @param options.packages package-name globs (e.g. `@presetter/preset-*`)
 * @returns deduped absolute project root paths
 */
export async function resolveProjectRoots(
  options: ResolveProjectRootsOptions,
): Promise<string[]> {
  const { projects, packages } = options;
  const roots = new Set<string>();

  if (projects.length > 0) {
    const files = await globby(
      projects.map((project) => posix.join(project, 'package.json')),
      WORKSPACE_GLOB_OPTIONS,
    );
    for (const file of files) {
      roots.add(resolve(dirname(file)));
    }
  }

  if (packages.length > 0) {
    const candidates = await globby('**/package.json', WORKSPACE_GLOB_OPTIONS);
    const isMatchingName = compileNameMatcher(packages);
    await Promise.all(
      candidates.map(async (path) => {
        const { name } = JSON.parse(
          readFileSync(path, { encoding: 'utf8' }),
        ) as PackageJson;

        if (name && isMatchingName(name)) {
          roots.add(resolve(dirname(path)));
        }
      }),
    );
  }

  return [...roots];
}

/**
 * expand each entry by splitting on a delimiter and trimming the parts
 * @param values raw flag values, each possibly containing the delimiter
 * @param delimiter delimiter character (defaults to `,`)
 * @returns flattened, trimmed, non-empty values
 */
export function expandDelimitedValues(
  values: readonly string[],
  delimiter: string = DEFAULT_LIST_DELIMITER,
): string[] {
  return values.flatMap((value) =>
    value
      .split(delimiter)
      .map((part) => part.trim())
      .filter(Boolean),
  );
}

/**
 * compile a list of package-name globs into a single predicate
 * @param patterns package-name globs (`*` matches anything except `/`)
 * @returns predicate returning true when a name matches any pattern
 */
function compileNameMatcher(
  patterns: readonly string[],
): (name: string) => boolean {
  const expressions = patterns.map((pattern) => {
    const escaped = pattern
      .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
      .replace(/\*/g, '[^/]*');

    return new RegExp(`^${escaped}$`);
  });

  return (name) => expressions.some((expression) => expression.test(name));
}
