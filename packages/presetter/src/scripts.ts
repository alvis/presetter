import { parse, print } from 'sh-syntax';

import debug from './debugger';
import {
  findRunInParsed,
  parseCommandStructure,
  parseCommandText,
} from './parsing';
import { mapValuesAsync } from './utilities';

import type { File } from 'sh-syntax';

import type { ParsedCallExpr, RunMatch } from './parsing';

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

// a temporary fix for mismatched type in sh-syntax
// see https://github.com/un-ts/sh-syntax/issues/130
// eslint-disable-next-line @typescript-eslint/naming-convention
type CorrectFile = File & { Stmt: File['Stmts'] };

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
        // first validate the shell command syntax
        await parse(command);

        // resolve any 'run' commands in the script
        const context = { template, target };
        const resolvedCommand = await resolveAllRunCommands(command, context);

        // parse and print to normalize formatting
        const ast = await parse(resolvedCommand);
        const printed = await print(ast, { originalText: resolvedCommand });

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
  parsedExpr: Readonly<ParsedCallExpr>,
  originalCommand: string,
  context: Readonly<ScriptContext>,
): string => {
  const { args, extraArgs } = parsedExpr;

  const destinations = args.filter((arg) => !arg.startsWith('--'));

  // resolve tasks into its full form e.g. task1 task2
  return destinations
    .map((destination) => {
      const expandedCommand =
        context.template[destination] ||
        (context.target[destination] === originalCommand
          ? undefined
          : context.target[destination]);

      if (expandedCommand === undefined) {
        throw new Error(
          `"${destination}" cannot be resolved in "${originalCommand}"`,
        );
      }

      return [expandedCommand, ...extraArgs].join(' ');
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
): Replacement[] => {
  const matches: RunMatch[] = [];

  // iterate over statements from sh-syntax
  for (const stmt of (ast as CorrectFile).Stmt) {
    if (stmt.Cmd) {
      // extract command text using sh-syntax positions
      const cmdText = command.slice(stmt.Cmd.Pos.Offset, stmt.Cmd.End.Offset);
      // parse structure ourselves
      const parsed = parseCommandStructure(cmdText, stmt.Cmd.Pos.Offset);
      // find run commands
      matches.push(...findRunInParsed(parsed, command));
    }
  }

  return matches.map((runMatch): Replacement => {
    const parsedExpr = parseCommandText(runMatch.match);
    const resolved = resolveRunner(parsedExpr, command, context);

    return {
      start: runMatch.start,
      end: runMatch.end,
      text: resolved,
    };
  });
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
