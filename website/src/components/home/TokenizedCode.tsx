import clsx from 'clsx';

import styles from './TokenizedCode.module.css';

import type { CSSProperties, ReactNode } from 'react';

/** color class of a token */
type TokenKind =
  | 'plain'
  | 'comment'
  | 'string'
  | 'keyword'
  | 'call'
  | 'key'
  | 'prompt'
  | 'output';

interface Token {
  /** character offset of the token within its line, unique per line */
  offset: number;
  /** color class of the token */
  kind: TokenKind;
  /** source text of the token */
  text: string;
}

interface Line {
  /** zero-based line number */
  number: number;
  /** tokens of the line in source order */
  tokens: Token[];
}

// NOTE: comments, strings, keywords, calls `name(`, then object keys `name:`
const TOKEN_PATTERN =
  /(\/\/.*$)|('[^']*')|\b(import|from|export|default|const|null|true|false)\b|\b([A-Za-z_]\w*)(?=\()|\b([A-Za-z_]\w*)(?=:)/g;

/**
 * classifies a regular-expression match into a token kind
 * @param match a match of the token pattern
 * @returns the token kind for the matched group
 */
function classify(match: RegExpExecArray): TokenKind {
  if (match[1]) {
    return 'comment';
  }

  if (match[2]) {
    return 'string';
  }

  if (match[3]) {
    return 'keyword';
  }

  return match[4] ? 'call' : 'key';
}

/**
 * splits one source line into colored tokens
 * @param line the source line
 * @returns the tokens of the line
 */
function tokenizeLine(line: string): Token[] {
  if (line.startsWith('$ ')) {
    return [
      { offset: 0, kind: 'prompt', text: '$ ' },
      { offset: 2, kind: 'plain', text: line.slice(2) },
    ];
  }

  if (line.startsWith('+ ') || /^v\d/.test(line)) {
    return [{ offset: 0, kind: 'output', text: line }];
  }

  const tokens: Token[] = [];
  let last = 0;

  for (const match of line.matchAll(TOKEN_PATTERN)) {
    if (match.index > last) {
      tokens.push({
        offset: last,
        kind: 'plain',
        text: line.slice(last, match.index),
      });
    }

    tokens.push({ offset: match.index, kind: classify(match), text: match[0] });
    last = match.index + match[0].length;
  }

  if (last < line.length) {
    tokens.push({ offset: last, kind: 'plain', text: line.slice(last) });
  }

  return tokens;
}

/**
 * splits source into numbered, tokenized lines
 * @param source the full source text
 * @returns the tokenized lines
 */
function tokenize(source: string): Line[] {
  return source
    .split('\n')
    .map((text, number) => ({ number, tokens: tokenizeLine(text) }));
}

export interface TokenizedCodeProps {
  /** source text to highlight */
  readonly source: string;
  /** when set, lines rise in one after another with this stagger in milliseconds */
  readonly lineStaggerMs?: number;
}

/**
 * renders TypeScript or shell snippets with the homepage's fixed dark-panel palette
 * @param props component props
 * @param props.source source text to highlight
 * @param props.lineStaggerMs when set, lines rise in one after another with this stagger
 * @returns the highlighted code element
 */
export default function TokenizedCode({
  source,
  lineStaggerMs,
}: TokenizedCodeProps): ReactNode {
  const lines = tokenize(source);

  return (
    <code className={styles.code} translate="no">
      {lines.map(({ number, tokens }) => {
        const style: CSSProperties | undefined =
          lineStaggerMs === undefined
            ? undefined
            : { animationDelay: `${number * lineStaggerMs}ms` };

        return (
          <span
            className={clsx(
              styles.line,
              lineStaggerMs !== undefined && styles.rise,
            )}
            key={number}
            style={style}>
            {tokens.length === 0
              ? ' '
              : tokens.map(({ offset, kind, text }) => (
                  <span className={styles[kind]} key={offset}>
                    {text}
                  </span>
                ))}
          </span>
        );
      })}
    </code>
  );
}
