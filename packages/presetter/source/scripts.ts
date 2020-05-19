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

import { mapValues } from 'lodash';
import { syntax } from 'mvdan-sh';
import { basename } from 'path';
import yargs from 'yargs';

import type { CallExpr, Node, Stmt, Subshell } from 'mvdan-sh';

/** pseudo type for representing the name of a script */
type ScriptName = string;

/** pseudo type for representing the command */
type Command = string;

/** collection of scripts */
export type Script = Record<ScriptName, Command>;

// shell command parser
const parser = syntax.NewParser();

// shell command generator
const printer = syntax.NewPrinter();

// the name of the binary calling this script
const runner = basename(yargs.parse().$0);

/** resource context to be passed for processing */
interface ScriptContext {
  /** scripts defined from the template */
  template: Script;
  /** scripts defined from target's package.json */
  target: Script;
}

/**
 * merge the script definitions from the template and the target package.json
 * @param args template and customised scripts to be merged
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

  return mapValues(
    {
      ...template,
      ...target,
    },
    (command): string => {
      // parse the shell command into its ast
      const ast = parser.Parse(command);

      // walk through the tree and replace any call to the runner e.g. preset task1 task2 -- --help
      syntax.Walk(ast, (node) => replaceRunnerNode(node, { template, target }));

      // remove any unnecessary subshell
      const [statement] = ast.Stmts;
      if (isSubshell(statement.Cmd)) {
        statement.Cmd = statement.Cmd.Stmts[0].Cmd;
      }

      // generate the code from ast
      return printer.Print(ast).trim();
    },
  );
}

/**
 * typeguard helper for CallExpr
 * @param node a node to be tested
 * @returns true if the node is a CallExpr
 */
function isCallExpr(node: Node): node is CallExpr {
  return syntax.NodeType(node) === 'CallExpr';
}

/**
 * typeguard helper for Stmt
 * @param node a node to be tested
 * @returns true if the node is a Stmt
 */
function isStmt(node: Node): node is Stmt {
  return syntax.NodeType(node) === 'Stmt';
}

/**
 * typeguard helper for Subshell
 * @param node a node to be tested
 * @returns true if the node is a Subshell
 */
function isSubshell(node: Node): node is Subshell {
  return syntax.NodeType(node) === 'Subshell';
}

/**
 * resolve a runner command
 * @param command the command to be replaced
 * @param context resource context
 * @returns the resolved command
 */
function resolveRunner(command: string, context: ScriptContext): string {
  const parts = command.split(' ');

  // extract tasks and their arguments
  const destinations = parts.slice(1).filter((task) => !task.startsWith('-'));
  const destinationArgs = parts.filter(
    (part) => part !== '--' && part.startsWith('-'),
  );

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
  if (isStmt(node) && isCallExpr(node.Cmd)) {
    // parse assigned arguments e.g. task1 args --help
    const parts: string[] = node.Cmd.Args.map((part) => part.Parts[0].Value);

    if (basename(parts[0]) === runner) {
      // resolve tasks into its full form e.g. task1 task2
      const resolvedCommand = resolveRunner(parts.join(' '), context);

      // replace the task definition with its expanded statement
      node.Cmd = parser.Parse(`(${resolvedCommand})`).Stmts[0].Cmd;
    }
  }

  return true;
}
