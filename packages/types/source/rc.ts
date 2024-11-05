/* v8 ignore start */

import type { JsonObject } from 'type-fest';

import type { Path } from './auxiliary';
import type { IgnoreRule } from './ignore';

/** data structure for .presetterrc */
export interface PresetterConfig {
  /** preset name */
  preset: string | string[];
  /** configuration for customization to be passed to the preset */
  config?: Record<string, JsonObject | Path[]>;
  /** extra scripts available */
  scripts?: Record<string, string>;
  /** variables to be substituted in templates */
  variable?: Record<string, string>;
  /** a list of files not to be linked or fields to be ignores */
  ignores?: IgnoreRule[];
  /** list of templates that should not be created as symlinks */
  noSymlinks?: string[];
}
