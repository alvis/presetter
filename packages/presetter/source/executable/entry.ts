/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Entry point for the command line interface (CLI)
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2019 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { existsSync } from 'node:fs';

import yargs from 'yargs';

import { bootstrapPreset, setupPreset, unsetPreset } from '#preset';
import { run } from '#run';
import { parseGlobalArgs, parseTaskSpec } from '#task';

import type { CommandModule } from 'yargs';

const useCommand: CommandModule<Record<string, unknown>, { preset: string }> = {
  command: 'use <preset..>',
  describe: 'adopt the specified preset to the project',
  builder: (yargs) =>
    yargs
      .positional('preset', {
        required: true as const,
        type: 'string',
        description: 'the name of the preset to be used',
      })
      .help(),
  handler: async (argv) => setupPreset(...argv.preset),
};

const bootstrapCommand: CommandModule<
  Record<string, unknown>,
  { force?: boolean; only?: string }
> = {
  command: 'bootstrap',
  describe: 'setup the project according to the specified preset',
  builder: (yargs) =>
    yargs
      .option('force', {
        type: 'boolean',
        default: false,
        description: 'overwrite existing files',
      })
      .option('only', {
        type: 'string',
        description: 'proceed only if the specified file exists',
      })
      .help(),
  handler: async (argv) => {
    const { force, only } = argv;

    // only proceed if the specified file exists
    if (!only || existsSync(only)) {
      await bootstrapPreset({ force });
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

const unsetCommand: CommandModule = {
  command: 'unset',
  describe: 'remove all artifacts created by the preset',
  handler: async () => unsetPreset(),
};

/**
 * provide a command line interface
 * @param args command line arguments
 * @returns the command entered together with its options
 */
export async function entry(args: string[]): Promise<void> {
  await yargs
    .parserConfiguration({
      // make sure flags after end-of-options flag `--` are stored under `--`, not `_`
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'populate--': true,
    })
    .usage('⚙ presetter: your preset configurator')
    .showHelpOnFail(true)
    .command(useCommand)
    .command(bootstrapCommand)
    .command(runCommand)
    .command(runSCommand)
    .command(runPCommand)
    .command(unsetCommand)
    .demandCommand()
    .parse(args);
}
