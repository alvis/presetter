import parse from 'yargs-parser';

import debug from './debugger';

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

const ARG_PLACEHOLDER_REGEX = /^{@:?(.*)$/;

/**
 * expand a placeholder pattern like {@:default args} into actual arguments
 *
 * this function handles the {@:...} syntax where:
 * - {@} gets replaced with globalArgs
 * - {@:default} uses "default" if no globalArgs, otherwise uses globalArgs
 * - {@:arg1 arg2} splits into ["arg1", "arg2"] if no globalArgs
 * @example
 * // with globalArgs available
 * expandPlaceholderArgs(['{@:--verbose}'], 0, ['--quiet', '--force'])
 * // returns: { args: ['--quiet', '--force'], nextIndex: 1 }
 * @example
 * // No globalArgs, use defaults
 * expandPlaceholderArgs(['{@:--verbose', '--output}'], 0, [])
 * // returns: { args: ['--verbose', '--output'], nextIndex: 2 }
 * @example
 * // empty placeholder
 * expandPlaceholderArgs(['{@:}'], 0, [])
 * // returns: { args: [], nextIndex: 1 }
 * @param rawArgs array of raw arguments
 * @param startIndex starting index of the placeholder
 * @param globalArgs global arguments to use if available
 * @returns object with expanded args and next index to continue from
 */
function expandPlaceholderArgs(
  rawArgs: string[],
  startIndex: number,
  globalArgs: string[],
): { args: string[]; nextIndex: number } {
  // find the closing bracket index - placeholders can span multiple array elements
  // example: ['{@:arg1', 'arg2', 'arg3}'] spans 3 elements
  const closingIndex = rawArgs.findIndex(
    (arg, index) => index >= startIndex && arg.endsWith('}'),
  );

  if (closingIndex === -1) {
    // malformed placeholder without closing }, consume remaining args as empty
    return { args: [], nextIndex: rawArgs.length };
  }

  // extract and reconstruct the default args string from multiple parts
  // example: ['{@:--verbose', '--output', 'file}'] becomes "--verbose --output file"
  const relevantParts = rawArgs.slice(startIndex, closingIndex + 1);
  const defaultArgsString = relevantParts
    .map((part, index) => {
      if (index === 0) {
        // first part: extract content after {@: prefix
        return part.replace(/^{@:/, '');
      } else {
        // subsequent parts: use as-is (they're continuation of the placeholder)
        return part;
      }
    })
    .join(' ') // rejoin with spaces
    .replace('}', '') // remove trailing }
    .trim();

  // priority: globalArgs override defaults
  if (globalArgs.length > 0) {
    // use provided globalArgs instead of placeholder defaults
    return { args: globalArgs, nextIndex: closingIndex + 1 };
  } else if (defaultArgsString) {
    // use placeholder defaults, split by whitespace into individual args
    const defaultArgs = defaultArgsString.split(/\s+/);

    return { args: defaultArgs, nextIndex: closingIndex + 1 };
  }

  // empty placeholder {@:} with no globalArgs produces no args
  return { args: [], nextIndex: closingIndex + 1 };
}

/**
 * state object for functional argument processing in reduce operation
 *
 * this tracks our progress as we iterate through rawArgs and handle different
 * argument types ({@}, {@:defaults}, and regular args)
 */
interface ProcessingState {
  /** the accumulated array of processed arguments */
  processedArgs: string[];
  /** the next array index to process (allows skipping multi-part placeholders) */
  skipUntil: number;
}

/**
 * parse task string and return a parsed task object with selector and args
 * @param spec - the task string to parse
 * @param globalArgs - the global arguments to be added to each task
 * @returns parsed task object with selector and args
 */
export function parseTaskSpec(spec: string, globalArgs: string[]): Task {
  const argv = parse(spec, {
    configuration: { 'populate--': true },
  });

  const selector = argv._[0] as string;
  const rawArgs = parseGlobalArgs(argv);

  // process arguments using functional reduce approach
  // this iterates through rawArgs and handles three cases:
  // 1. {@} - simple placeholder that gets replaced with globalArgs
  // 2. {@:defaults} - complex placeholder that may span multiple array elements
  // 3. regular args - passed through unchanged
  const finalState = rawArgs.reduce<ProcessingState>(
    (state, arg, index) => {
      // skip indices that were already processed by multi-part placeholders
      if (index < state.skipUntil) {
        return state;
      }

      if (ARG_PLACEHOLDER_REGEX.test(arg)) {
        // complex case: {@:default args} that may span multiple elements
        // the expandPlaceholderArgs function finds the closing } and processes defaults
        const { args: processedArgs, nextIndex } = expandPlaceholderArgs(
          rawArgs,
          index,
          globalArgs,
        );

        return {
          processedArgs: [...state.processedArgs, ...processedArgs],
          skipUntil: nextIndex, // skip to after the closing }
        };
      } else {
        // regular argument: add as-is
        return {
          processedArgs: [...state.processedArgs, arg],
          skipUntil: index + 1,
        };
      }
    },
    { processedArgs: [], skipUntil: 0 },
  );

  return { selector, args: finalState.processedArgs };
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

  const selected = tasks.filter((task) => regex.test(task));

  debug('SELECTED TASKS\n%O', { pattern, selected });

  return selected;
}
