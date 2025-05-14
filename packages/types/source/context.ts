/* v8 ignore start */

import type { PackageJson } from 'type-fest';

import type { Path, Variables } from './auxiliaries';

/**
 * input for a preset configurator providing context such as root and package information
 */
export interface ProjectContext {
  /** indicate whether the current project root is also the repository root */
  isRepoRoot: boolean;
  /** relative project root to the repository root */
  relativeProjectRoot: string;
  /** relative repository root to the project root */
  relativeRepoRoot: string;
  /** path to the root of the repository (typicall the folder hosting .git) */
  repoRoot: string;
  /** the root directory containing the project's `presetter.config.ts` */
  projectRoot: Path;

  /** normalized `package.json` data from the project */
  packageJson: PackageJson;
}

/**
 * supplementary context available for a content resolver
 */
export interface PresetContentContext extends ProjectContext {
  variables: Variables;
}
