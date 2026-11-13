import { createSourceIndex, parse, print, walk } from 'sh-syntax';

import debug from './debugger';
import { mapValuesAsync } from './utilities';

import type { CallExpr, File, Word, WordPart } from 'sh-syntax';

/** pseudo type for representing the name of a script */
type ScriptName = string;

/** collection of scripts */
export type Script = Record<ScriptName, string>;

/** resource context to be passed for processing */
interface ScriptContext {
  /** scripts defined from the template */
  template: Script;
  /** scripts defined from target's package.json */
  target: Script;
}

/** represents a text replacement operation */
interface Replacement {
  start: number;
  end: number;
  text: string;
}

/** a resolved `run` call with source positions */
interface RunCallExpr {
  args: string[];
  extraArgs: string[];
  prefix: string;
  start: number;
  end: number;
}

type SourceIndex = (byteOffset: number) => number;

const MAX_DEPTH = 10;

/**
 * merge the script definitions from the template and the target package.json
 * @param args template and customized scripts to be merged
 * @param args.template scripts defined from the template
 * @param args.target scripts defined from target's package.json
 * @returns a promise resolving to a dictionary of merged definitions
 */
export async function composeScripts(args: {
  /** scripts defined from the template */
  template: Script;
  /** scripts defined from target's package.json */
  target: Script;
}): Promise<Script> {
  const { template, target } = args;

  debug('SCRIPT PROVIDED BY PROJECT\n%O', target);

  const script = await mapValuesAsync(
    { ...template, ...target },
    async (command): Promise<string> => {
      try {
        // resolve any 'run' commands in the script
        const context = { template, target };
        const resolvedCommand = await resolveAllRunCommands(command, context);

        // print and normalize formatting
        const printed = await print(resolvedCommand);

        return printed.trim();
      } catch (error: unknown) {
        // check if it's a resolution error (our own error)
        if (
          error instanceof Error &&
          error.message.includes('cannot be resolved')
        ) {
          throw error;
        }

        // otherwise it's a parse error
        throw new Error(`failed to parse command: ${command}`);
      }
    },
  );

  debug('SCRIPT RESOLVED FROM PRESET AND PROJECT\n%O', script);

  return script;
}

/**
 * resolves a runner command into its expanded form (pure)
 * @param parsedExpr the parsed call expression
 * @param originalCommand the original full command (for error messages)
 * @param context resource context
 * @returns the resolved command string
 */
const resolveRunner = (
  parsedExpr: Readonly<Pick<RunCallExpr, 'args' | 'extraArgs' | 'prefix'>>,
  originalCommand: string,
  context: Readonly<ScriptContext>,
): string => {
  const { args, extraArgs, prefix } = parsedExpr;

  const destinations = args.filter((arg) => !arg.startsWith('--'));

  // resolve tasks into its full form e.g. task1 task2
  return destinations
    .map((destination) => {
      const expandedCommand =
        context.template[destination] ??
        (context.target[destination] === originalCommand
          ? undefined
          : context.target[destination]);

      if (expandedCommand === undefined) {
        throw new Error(
          `"${destination}" cannot be resolved in "${originalCommand}"`,
        );
      }

      const resolved = [expandedCommand, ...extraArgs].join(' ');
      const assignments = prefix.trim();
      return assignments ? `(export ${assignments}; ${resolved})` : resolved;
    })
    .join(' && ');
};

/**
 * finds all replacements needed for run commands
 * @param command the original source command string
 * @param context resource context
 * @param ast the parsed AST from sh-syntax
 * @returns array of replacements to apply
 */
const findReplacements = (
  command: string,
  context: Readonly<ScriptContext>,
  ast: File,
): Replacement[] =>
  findRunCalls(ast, command).map((runCall): Replacement => ({
    start: runCall.start,
    end: runCall.end,
    text: resolveRunner(runCall, command, context),
  }));

/**
 * finds all `run` calls in an AST
 * @param ast the parsed AST from sh-syntax
 * @param source the original source string
 * @returns run calls with source positions
 */
const findRunCalls = (ast: File, source: string): RunCallExpr[] => {
  const toIndex = createSourceIndex(source);
  const calls: RunCallExpr[] = [];

  walk(ast, (node) => {
    if (node.type === 'CallExpr') {
      const parsed = parseCallExpr(node, source, toIndex);
      if (parsed) {
        calls.push(parsed);
      }
    }
    return true;
  });

  return calls;
};

/**
 * parses a CallExpr into a run command if the command is `run`
 * @param call the call expression
 * @param source the original source string
 * @param toIndex byte-offset to string-index converter
 * @returns parsed run call, or undefined for non-run commands
 */
const parseCallExpr = (
  call: CallExpr,
  source: string,
  toIndex: SourceIndex,
): RunCallExpr | undefined => {
  if (call.args.length === 0) {
    return undefined;
  }

  const words = call.args.map((arg) => wordText(arg, source, toIndex));
  if (words[0] !== 'run') {
    return undefined;
  }

  const separatorIndex = words.indexOf('--');
  const args =
    separatorIndex < 0 ? words.slice(1) : words.slice(1, separatorIndex);
  if (args.length === 0) {
    return undefined;
  }

  const extraArgs =
    separatorIndex < 0
      ? []
      : call.args
          .slice(separatorIndex + 1)
          .map((arg) => source.slice(toIndex(arg.start), toIndex(arg.end)));

  return {
    args,
    extraArgs,
    prefix:
      call.assigns.length > 0
        ? source.slice(
            toIndex(call.assigns[0]!.start),
            toIndex(call.args[0]!.start),
          )
        : '',
    start: toIndex(call.start),
    end: toIndex(call.end),
  };
};

/**
 * reconstructs a shell word from its AST parts
 * @param word the word node
 * @param source the original source string
 * @param toIndex byte-offset to string-index converter
 * @returns the word as written without quote delimiters
 */
const wordText = (word: Word, source: string, toIndex: SourceIndex): string =>
  word.parts.map((part) => wordPartText(part, source, toIndex, false)).join('');

/**
 * reconstructs a word part, preserving expansions as source text
 * @param part the word part
 * @param source the original source string
 * @param toIndex byte-offset to string-index converter
 * @param doubleQuoted whether the part is inside double quotes
 * @returns the reconstructed part
 */
const wordPartText = (
  part: WordPart,
  source: string,
  toIndex: SourceIndex,
  doubleQuoted: boolean,
): string => {
  switch (part.type) {
    case 'Lit':
      return doubleQuoted ? unescapeDoubleQuoted(part.value) : part.value;
    case 'SglQuoted':
      return part.value;
    case 'DblQuoted':
      return part.parts
        .map((nested) => wordPartText(nested, source, toIndex, true))
        .join('');
    default:
      return source.slice(toIndex(part.start), toIndex(part.end));
  }
};

/**
 * removes shell escapes inside double quotes
 * @param value raw double-quoted text
 * @returns unescaped text
 */
const unescapeDoubleQuoted = (value: string): string => {
  let result = '';
  for (let index = 0; index < value.length; index++) {
    const char = value[index]!;
    if (
      char === '\\' &&
      index + 1 < value.length &&
      /[\\$`"\n]/.test(value[index + 1]!)
    ) {
      const next = value[index + 1]!;
      if (next !== '\n') {
        result += next;
      }
      index += 1;
      continue;
    }
    result += char;
  }
  return result;
};

/**
 * apply replacements to source (pure, processes right-to-left)
 * @param source the original source string
 * @param replacements the replacements to apply
 * @returns the source with all replacements applied
 */
const applyReplacements = (
  source: string,
  replacements: Replacement[],
): string =>
  [...replacements]
    .sort((a, b) => b.start - a.start) // right to left to preserve positions
    .reduce(
      (text, { start, end, text: replacement }) =>
        text.slice(0, start) + replacement + text.slice(end),
      source,
    );

/**
 * recursively resolve all run commands (immutable recursion)
 * @param command the command to process
 * @param context resource context
 * @param depth current recursion depth (for cycle detection)
 * @returns the resolved command with all run patterns replaced
 */
const resolveAllRunCommands = async (
  command: string,
  context: Readonly<ScriptContext>,
  depth = 0,
): Promise<string> => {
  if (depth > MAX_DEPTH) {
    throw new Error('Maximum recursion depth exceeded');
  }

  const ast = await parse(command);
  const replacements = findReplacements(command, context, ast);

  if (replacements.length === 0) {
    return command;
  }

  const resolved = applyReplacements(command, replacements);

  return resolveAllRunCommands(resolved, context, depth + 1);
};
