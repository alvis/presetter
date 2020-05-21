/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Helpers for handling error
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2019 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

/* istanbul ignore file */

import createCallsiteRecord from 'callsite-record';
import chalk from 'chalk';
import { warn } from 'console';

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
