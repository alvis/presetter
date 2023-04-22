/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Helper functions for parsing task strings
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2019 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import parse from 'yargs-parser';

import type { Arguments } from 'yargs-parser';

/** parsed task object with selector and args */
export interface Task {
  selector: string;
  args: string[];
}

/**
 * parse global arguments from an argv object
 * @param argv - an arguments object containing the command line arguments
 * @returns an array of cleaned up global arguments as strings
 */
export function parseGlobalArgs(argv: Arguments): string[] {
  // get the global arguments as an array of strings or numbers, or undefined if not present
  const globalArgs = argv['--'];

  // if global arguments are present, map them to strings and clean up the quotes
  return (
    globalArgs?.map((arg) =>
      // replace the single or double quotes that wrap the argument
      arg.toString().replace(/^(['"])([^]*?)\1$/, '$2'),
    ) ?? [] // if no global arguments are present, return an empty array
  );
}

/**
 * parse task string and return a parsed task object with selector and args
 * @param spec - the task string to parse
 * @param globalArgs - the global arguments to be added to each task
 * @returns parsed task object with selector and args
 */
export function parseTaskSpec(spec: string, globalArgs: string[]): Task {
  const argv = parse(spec, {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    configuration: { 'populate--': true },
  });

  const selector = argv._[0] as string;
  const args = parseGlobalArgs(argv).reduce((processedArgs, arg) => {
    if (arg === '{@}') {
      // replace {@} with globalArgs
      return [...processedArgs, ...globalArgs];
    } else {
      return [...processedArgs, arg];
    }
  }, [] as string[]);

  return { selector, args };
}

/**
 * select tasks based on a pattern
 * @param tasks array of available tasks in the format 'task:subtask:subsubtask'
 * @param pattern pattern to match tasks ('*' wildcard for single level and '**' wildcard for multiple levels)
 * @returns array of tasks that match the pattern
 */
export function selectTasks(tasks: string[], pattern: string): string[] {
  const regexPattern = pattern
    .split(':')
    .map((part) => {
      if (part === '*') {
        return '[^:]+';
      }
      if (part === '**') {
        return '.*';
      }

      return part;
    })
    .join(':');

  const regex = new RegExp(`^${regexPattern}$`);

  return tasks.filter((task) => regex.test(task));
}
