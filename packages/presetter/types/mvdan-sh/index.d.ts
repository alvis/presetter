/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Definitions for mvdan-sh
 * @see       https://godoc.org/mvdan.cc/sh/syntax
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

export type Node = CallExpr | File | Subshell | Stmt;

export interface File {
  Stmts: Stmt[];
}

export interface Stmt {
  Cmd: Node;
}

export interface Subshell {
  Stmts: Stmt[];
}

export interface CallExpr {
  Args: Word[];
}

interface Word {
  Parts: WordPart[];
}

interface WordPart {
  Value: string;
}

declare class Parser {
  Parse(name: string): File;
}

declare class Printer {
  Print(node: Node): string;
}

export namespace syntax {
  declare function DebugPrint(node: Node): void;
  declare function NewParser(): Parser;
  declare function NewPrinter(): Printer;
  declare function Walk(node: Node, callback: (node: Node) => boolean): void;
  declare function NodeType(node: Node): string;
}
