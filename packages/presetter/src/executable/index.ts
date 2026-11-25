/* v8 ignore start */

import { InterruptedError } from '../interrupted';

import { entry } from './entry';
import { handleError } from './error';

const [, , ...args] = process.argv;

entry(args).catch(async (error: Error) => {
  if (error instanceof InterruptedError) {
    // NOTE: a signal stopped the run and the script has said all it has to, so exit as the script did
    process.exitCode = error.exitCode;

    return;
  }

  // NOTE: report the failure to the shell, otherwise a broken bootstrap passes CI silently
  process.exitCode = 1;

  await handleError(error);
});
