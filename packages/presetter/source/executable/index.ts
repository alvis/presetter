/* v8 ignore start */

import { entry } from './entry';
import { handleError } from './error';

const [, , ...args] = process.argv;

entry(args).catch(handleError);
