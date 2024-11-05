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
  Lit(): string;
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
