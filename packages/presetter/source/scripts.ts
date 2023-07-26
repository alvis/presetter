/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Handle script merging
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2019 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { basename } from 'node:path';

import mvdan from 'mvdan-sh';
import parse from 'yargs-parser';

import { mapValues } from './utilities';

import type { CallExpr, Node, Stmt, Subshell } from 'mvdan-sh';

/** pseudo type for representing the name of a script */
type ScriptName = string;

/** pseudo type for representing the command */
type Command = string;

/** collection of scripts */
export type Script = Record<ScriptName, Command>;

const { syntax } = mvdan;

// shell command parser
const parser = syntax.NewParser();

// shell command generator
const printer = syntax.NewPrinter();

/** resource context to be passed for processing */
interface ScriptContext {
  /** scripts defined from the template */
  template: Script;
  /** scripts defined from target's package.json */
  target: Script;
}

/**
 * merge the script definitions from the template and the target package.json
 * @param args template and customized scripts to be merged
 * @param args.template scripts defined from the template
 * @param args.target scripts defined from target's package.json
 * @returns a dictionary of merged definitions
 */
export function composeScripts(args: {
  /** scripts defined from the template */
  template: Script;
  /** scripts defined from target's package.json */
  target: Script;
}): Script {
  const { template, target } = args;

  return mapValues({ ...template, ...target }, (command): string => {
    try {
      // parse the shell command into its ast
      const ast = parser.Parse(command);

      // walk through the tree and replace any call to the runner e.g. preset task1 task2 -- --help
      syntax.Walk(ast, (node) => replaceRunnerNode(node, { template, target }));

      // remove any unnecessary subshell
      const [statement] = ast.Stmts;
      if (isNodeType(statement.Cmd, 'Subshell')) {
        statement.Cmd = statement.Cmd.Stmts[0].Cmd;
      }

      // generate the code from ast
      return printer.Print(ast).trim();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error;
      } else {
        // parser.Parse may throw an empty object as an error, catch here
        throw new Error(`failed to parse command: ${command}`);
      }
    }
  });
}

/**
 * typeguard helper for different node type
 * @param node a node to be tested
 * @param type node type
 * @returns true if the node is the specified type
 */
function isNodeType(node: Node, type: 'CallExpr'): node is CallExpr;
function isNodeType(node: Node, type: 'Stmt'): node is Stmt;
function isNodeType(node: Node, type: 'Subshell'): node is Subshell;
function isNodeType(node: Node, type: string): boolean {
  return syntax.NodeType(node) === type;
}

/**
 * resolve a runner command
 * @param command the command to be replaced
 * @param context resource context
 * @returns the resolved command
 */
function resolveRunner(command: string, context: ScriptContext): string {
  const arg = parse(command, {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    configuration: { 'populate--': true, 'unknown-options-as-args': true },
  });

  // extract tasks and their arguments
  const destinations = arg['_'].slice(1);
  const destinationArgs = arg['--'] ?? [];

  // resolve tasks into its full form e.g. task1 task2
  return destinations
    .map((destination) => {
      const expandedCommand =
        context.template[destination] ||
        (context.target[destination] === command
          ? undefined
          : context.target[destination]);

      if (expandedCommand === undefined) {
        throw new Error(`"${destination}" cannot be resolved in "${command}"`);
      }

      return [expandedCommand, ...destinationArgs].join(' ');
    })
    .join(' && ');
}

/**
 * replace a runner node with the actual command
 * @param node an expression node
 * @param context resource context
 * @returns boolean true for no error
 */
function replaceRunnerNode(node: Node, context: ScriptContext): boolean {
  // replace only it's a runner call, not anything else
  if (isNodeType(node, 'Stmt') && isNodeType(node.Cmd, 'CallExpr')) {
    // parse assigned arguments e.g. task1 args --help
    const parts: string[] = node.Cmd.Args.map((part) => part.Lit());

    // only resolve if the `run` cli shipped in this package is invoke
    if (parts.length && basename(parts[0]) === 'run') {
      // resolve tasks into its full form e.g. task1 task2
      const resolvedCommand = resolveRunner(parts.join(' '), context);

      // replace the task definition with its expanded statement
      node.Cmd = parser.Parse(`(${resolvedCommand})`).Stmts[0].Cmd;

      // recursively replace any runner call in the expanded statement
      replaceRunnerNode(node.Cmd, context);
    }
  }

  return true;
}
