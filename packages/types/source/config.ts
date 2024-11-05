/* v8 ignore start */

import type { JsonObject } from 'type-fest';

import type { Path } from './auxiliary';

/** an auxiliary type for representing a config */
export type Config = Path[] | JsonObject;
