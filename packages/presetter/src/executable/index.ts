/* v8 ignore start */

import { entry } from './entry';
import { handleError } from './error';

const [, , ...args] = process.argv;

entry(args).catch(async (error: Error) => {
  // NOTE: report the failure to the shell, otherwise a broken bootstrap passes CI silently
  process.exitCode = 1;

  await handleError(error);
});
