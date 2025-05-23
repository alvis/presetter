import { warn } from 'node:console';

import createCallsiteRecord from 'callsite-record';
import chalk from 'chalk';

/**
 * print error nicely on console
 * @param error the error to be reported
 */
export async function handleError(error: Error): Promise<void> {
  if (!process.stdout.isTTY) {
    // don't print formatted error message if the process is not run on TTY
    warn(error);
  } else {
    // print the error message
    const type = chalk.red.bold(`[${error.name}]`);
    const message = chalk.white.bold(error.message.trim());
    warn(`${type} ${message}`);

    // print the callsite record
    const record = createCallsiteRecord({
      forError: error,
    });

    if (record) {
      warn();
      warn(await record.render({}));
    }
  }
}
