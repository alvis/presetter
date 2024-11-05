/* v8 ignore start */

import type { JsonObject } from 'type-fest';

import type { Path } from './auxiliary';

/** an auxiliary type for representing a template (either path to the template file or its content) */
export type Template = Path | JsonObject;
