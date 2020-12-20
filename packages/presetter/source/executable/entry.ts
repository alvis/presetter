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

import { pathExists } from 'fs-extra';
import yargs from 'yargs';

import { bootstrapPreset, unsetPreset, setupPreset } from '#preset';
import { run } from '#run';

import type { CommandModule } from 'yargs';

const useCommand: CommandModule<Record<string, unknown>, { preset: string }> = {
  command: 'use <preset>',
  describe: 'adopt the specified preset to the project',
  builder: (yargs) =>
    yargs
      .positional('preset', {
        required: true as const,
        type: 'string',
        description: 'proceed only if the specified file exists',
      })
      .help(),
  handler: (argv) => {
    argv._promise = setupPreset(argv.preset);
  },
};

const bootstrapCommand: CommandModule<
  Record<string, unknown>,
  { only?: string }
> = {
  command: 'bootstrap',
  describe: 'setup the project according to the specified preset',
  builder: (yargs) =>
    yargs
      .option('only', {
        type: 'string',
        description: 'proceed only if the specified file exists',
      })
      .help(),
  handler: (argv) => {
    argv._promise = (async () => {
      const { only } = argv;

      // only proceed if the specified file exists
      if (!only || (await pathExists(only))) {
        await bootstrapPreset();
      }
    })();
  },
};

const runCommand: CommandModule = {
  command: 'run',
  describe: 'run a template script',
  builder: (yargs) => yargs.usage('run <task>').demandCommand(),
  handler: async (argv) => {
    argv._promise = (async () => {
      // get the options
      const [, task, ...args] = argv._.map((arg) => arg.toString());

      await run(task, args);
    })();
  },
};

const unsetCommand: CommandModule = {
  command: 'unset',
  describe: 'remove all artifacts created by the preset',
  handler: async () => unsetPreset(),
};

/**
 * provide a command line interface
 * @returns the command entered together with its options
 */
export async function entry(): Promise<void> {
  const [, , ...args] = process.argv;

  await yargs
    .usage('⚙ presetter: your preset configurator')
    .showHelpOnFail(true)
    .command(useCommand)
    .command(bootstrapCommand)
    .command(runCommand)
    .command(unsetCommand)
    .demandCommand()
    .parse(args)._promise;
}
