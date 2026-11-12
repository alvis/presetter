import { warn } from 'node:console';

import chalk from 'chalk';
import { disassembleStack, renderLocation } from 'sherlog';

import type { SourceResolver, StackLocationBlock } from 'sherlog';

const INDENT = '  ';

/**
 * print error nicely on console
 * @param error the error to be reported
 */
export async function handleError(error: Error): Promise<void> {
  if (!process.stdout.isTTY) {
    // don't print formatted error message if the process is not run on TTY
    // NOTE: node already inspects both `cause` and `errors` when logging an error directly
    warn(error);
  } else {
    await printError(error, 0);
  }
}

/**
 * print an error together with every aggregated member and nested cause
 * @param error the error to be reported
 * @param depth the nesting level of the error, used for indentation
 */
async function printError(error: Error, depth: number): Promise<void> {
  const type = chalk.red.bold(`[${error.name}]`);
  const message = chalk.white.bold(error.message.trim());
  warn(`${INDENT.repeat(depth)}${type} ${message}`);

  const children =
    error instanceof AggregateError
      ? (error.errors as Error[])
      : error.cause instanceof Error
        ? [error.cause]
        : [];

  // NOTE: only a leaf carries the callsite the user cares about, as any wrapper points at presetter itself
  if (children.length === 0) {
    await printCallsite(error);
  }

  for (const child of children) {
    await printError(child, depth + 1);
  }
}

/**
 * print the source excerpt and stack behind the error, if they can be rendered
 * @param error the error to be reported
 */
async function printCallsite(error: Error): Promise<void> {
  const rendered = await renderCallsite(error);

  if (rendered === undefined) {
    return;
  }
  warn();
  warn(rendered);
}

/**
 * render the stack of an error with a source excerpt at its top frame, tolerating a source the renderer cannot read
 * @param error the error to be rendered
 * @returns the rendered callsite, or undefined when it cannot be produced
 */
async function renderCallsite(error: Error): Promise<string | undefined> {
  try {
    const locations = disassembleStack(error.stack ?? '').flatMap(
      (block): StackLocationBlock[] =>
        block.type === 'location'
          ? [{ ...block, entry: block.entry || '<anonymous>' }]
          : [],
    );

    if (locations.length === 0) {
      return undefined;
    }

    // NOTE: share resolvers so a file referenced by many frames is read once
    const cache = new Map<string, Promise<SourceResolver>>();
    const frames = await Promise.all(
      locations.map(async (block, index) =>
        renderLocation(block, { indent: 0, showSource: index === 0, cache }),
      ),
    );

    return frames.join('\n');
  } catch {
    // NOTE: the renderer must read the source behind the callsite, which isn't always possible (e.g. a jiti-transpiled path), and a missing excerpt must never mask the message
    return undefined;
  }
}
