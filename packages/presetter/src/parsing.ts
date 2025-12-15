import parseArgs from 'yargs-parser';

/** represents a parsed call expression from command text */
export interface ParsedCallExpr {
  /** the command name (e.g., "run") */
  command: string;
  /** positional arguments before "--" */
  args: string[];
  /** extra arguments after "--" */
  extraArgs: string[];
}

/** represents a run command match with its position */
export interface RunMatch {
  /** the matched text */
  match: string;
  /** start offset in source */
  start: number;
  /** end offset in source */
  end: number;
}

/** parsed command structure */
export type ParsedCommand =
  | ParsedSimpleCommand
  | ParsedBinaryCmd
  | ParsedSubshell
  | ParsedBlock;

/** simple command (e.g., `run build`, `echo test`) */
export interface ParsedSimpleCommand {
  type: 'CallExpr';
  /** command name (first word) */
  command: string;
  /** arguments after command name */
  args: string[];
  /** extra arguments after "--" */
  extraArgs: string[];
  /** start offset in original source */
  start: number;
  /** end offset in original source */
  end: number;
}

/** binary operator type */
type BinaryOperator = '&&' | '||' | '|';

/** binary command (e.g., `cmd1 && cmd2`) */
export interface ParsedBinaryCmd {
  type: 'BinaryCmd';
  /** operator: && || | */
  op: BinaryOperator;
  /** left side command */
  left: ParsedCommand;
  /** right side command */
  right: ParsedCommand;
  /** start offset in original source */
  start: number;
  /** end offset in original source */
  end: number;
}

/** subshell (e.g., `(cmd1 && cmd2)`) */
export interface ParsedSubshell {
  type: 'Subshell';
  /** inner command */
  body: ParsedCommand;
  /** start offset in original source */
  start: number;
  /** end offset in original source */
  end: number;
}

/** block (e.g., `{ cmd1; cmd2; }`) */
export interface ParsedBlock {
  type: 'Block';
  /** inner command */
  body: ParsedCommand;
  /** start offset in original source */
  start: number;
  /** end offset in original source */
  end: number;
}

/** represents a matched operator with its position */
interface OperatorMatch {
  /** the operator type */
  op: BinaryOperator;
  /** position in the string */
  index: number;
}

/**
 * updates depth counters based on character
 * @param char the character
 * @param parenDepth current parenthesis depth
 * @param braceDepth current brace depth
 * @returns updated depths
 */
const updateDepths = (
  char: string,
  parenDepth: number,
  braceDepth: number,
): [number, number] => {
  let newParenDepth = parenDepth;
  let newBraceDepth = braceDepth;

  if (char === '(') {
    newParenDepth++;
  } else if (char === ')') {
    newParenDepth--;
  } else if (char === '{') {
    newBraceDepth++;
  } else if (char === '}') {
    newBraceDepth--;
  }

  return [newParenDepth, newBraceDepth];
};

/**
 * checks if a character ends a quote
 * @param char the character
 * @param inSingleQuote whether in single quote
 * @param inDoubleQuote whether in double quote
 * @returns updated quote states
 */
const updateQuotes = (
  char: string,
  inSingleQuote: boolean,
  inDoubleQuote: boolean,
): [boolean, boolean] => {
  let newSingleQuote = inSingleQuote;
  let newDoubleQuote = inDoubleQuote;

  if (char === "'" && !inDoubleQuote) {
    newSingleQuote = !inSingleQuote;
  } else if (char === '"' && !inSingleQuote) {
    newDoubleQuote = !inDoubleQuote;
  }

  return [newSingleQuote, newDoubleQuote];
};

/**
 * checks for binary operators at current position
 * @param char current character
 * @param nextChar next character
 * @param parenDepth parenthesis depth
 * @param braceDepth brace depth
 * @returns operator match or null
 */
const checkBinaryOp = (
  char: string,
  nextChar: string | undefined,
  parenDepth: number,
  braceDepth: number,
): { op: BinaryOperator } | null => {
  if (parenDepth !== 0 || braceDepth !== 0) {
    return null;
  }
  if (char === '&' && nextChar === '&') {
    return { op: '&&' };
  }
  if (char === '|' && nextChar === '|') {
    return { op: '||' };
  }
  if (char === '|' && nextChar !== '|') {
    return { op: '|' };
  }

  return null;
};

/**
 * finds the first top-level binary operator in command text
 * @param text command text to search
 * @returns operator match or null if none found
 */
const findTopLevelOperator = (text: string): OperatorMatch | null => {
  let parenDepth = 0;
  let braceDepth = 0;
  let inSingleQuote = false;
  let inDoubleQuote = false;
  let escaped = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === '\\' && !inSingleQuote) {
      escaped = true;
      continue;
    }

    [inSingleQuote, inDoubleQuote] = updateQuotes(
      char,
      inSingleQuote,
      inDoubleQuote,
    );

    if (inSingleQuote || inDoubleQuote) {
      continue;
    }

    [parenDepth, braceDepth] = updateDepths(char, parenDepth, braceDepth);

    const opMatch = checkBinaryOp(char, nextChar, parenDepth, braceDepth);
    if (opMatch) {
      return { ...opMatch, index: i };
    }
  }

  return null;
};

/**
 * parses command text into ParsedCallExpr structure (pure)
 * @param cmdText the command text to parse
 * @returns the parsed call expression
 */
export const parseCommandText = (cmdText: string): Readonly<ParsedCallExpr> => {
  const arg = parseArgs(cmdText, {
    configuration: { 'populate--': true, 'unknown-options-as-args': true },
  });

  const parts = arg._ as string[];
  const command = parts[0] ?? '';
  const args = parts.slice(1);
  const extraArgs = (arg['--'] ?? []) as string[];

  return { command, args, extraArgs };
};

/**
 * parses command text into structured form
 * @param text command text to parse
 * @param baseOffset offset in original source
 * @returns parsed command structure
 */
export const parseCommandStructure = (
  text: string,
  baseOffset: number,
): ParsedCommand => {
  const trimmed = text.trim();
  const trimOffset = text.indexOf(trimmed);
  const start = baseOffset + trimOffset;
  const end = start + trimmed.length;

  // check for Subshell: (...)
  if (trimmed.startsWith('(') && trimmed.endsWith(')')) {
    const inner = trimmed.slice(1, -1);

    return {
      type: 'Subshell',
      body: parseCommandStructure(inner, start + 1),
      start,
      end,
    };
  }

  // check for Block: { ... }
  if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
    const inner = trimmed.slice(1, -1);

    return {
      type: 'Block',
      body: parseCommandStructure(inner, start + 1),
      start,
      end,
    };
  }

  // check for BinaryCmd: cmd1 && cmd2
  const opMatch = findTopLevelOperator(trimmed);
  if (opMatch) {
    const leftText = trimmed.slice(0, opMatch.index);
    const rightText = trimmed.slice(opMatch.index + opMatch.op.length);

    return {
      type: 'BinaryCmd',
      op: opMatch.op,
      left: parseCommandStructure(leftText, start),
      right: parseCommandStructure(
        rightText,
        start + opMatch.index + opMatch.op.length,
      ),
      start,
      end,
    };
  }

  // otherwise it's a CallExpr
  const parsed = parseCommandText(trimmed);

  return {
    type: 'CallExpr',
    command: parsed.command,
    args: parsed.args,
    extraArgs: parsed.extraArgs,
    start,
    end,
  };
};

/**
 * finds all run commands in parsed structure
 * @param cmd parsed command to search
 * @param source original source string
 * @returns array of run command matches
 */
export const findRunInParsed = (
  cmd: ParsedCommand,
  source: string,
): RunMatch[] => {
  const matches: RunMatch[] = [];

  const visit = (node: ParsedCommand): void => {
    switch (node.type) {
      case 'CallExpr':
        // check if command is 'run' with at least one task
        if (node.command === 'run' && node.args.length > 0) {
          matches.push({
            match: source.slice(node.start, node.end),
            start: node.start,
            end: node.end,
          });
        }
        break;

      case 'BinaryCmd':
        visit(node.left);
        visit(node.right);
        break;

      case 'Subshell':
      case 'Block':
        visit(node.body);
        break;

      default:
        break;
    }
  };

  visit(cmd);

  return matches;
};
