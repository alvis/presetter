/* v8 ignore start */

import type { PackageJson } from 'type-fest';

import type { Path, Variables } from './auxiliaries';

/**
 * input for a preset configurator providing context such as root and package information
 */
export interface PresetContext {
  /** the root directory containing the project's `presetter.config.ts` */
  root: Path;

  /** normalized `package.json` data from the project */
  package: PackageJson;
}

/**
 * supplementary context available for a content resolver
 */
export interface PresetContentContext extends PresetContext {
  variables: Variables;
}
