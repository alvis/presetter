import { warn } from 'node:console';

import createCallsiteRecord from 'callsite-record';
import chalk from 'chalk';

type CallsiteRecord = NonNullable<ReturnType<typeof createCallsiteRecord>>;

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
    await printCallsiteRecord(error);
  }

  for (const child of children) {
    await printError(child, depth + 1);
  }
}

/**
 * print the source excerpt behind the error, if it can be rendered
 * @param error the error to be reported
 */
async function printCallsiteRecord(error: Error): Promise<void> {
  const record = createCallsiteRecord({ forError: error });

  if (!record) {
    return;
  }

  const rendered = await renderCallsiteRecord(record);

  if (rendered !== undefined) {
    warn();
    warn(rendered);
  }
}

/**
 * render a callsite record, tolerating a source file the renderer cannot read
 * @param record the callsite record to be rendered
 * @returns the rendered excerpt, or undefined when it cannot be produced
 */
async function renderCallsiteRecord(
  record: CallsiteRecord,
): Promise<string | undefined> {
  try {
    return await record.render({});
  } catch {
    // NOTE: the renderer must read the source behind the callsite, which isn't always possible (e.g. a jiti-transpiled path), and a missing excerpt must never mask the message
    return undefined;
  }
}
