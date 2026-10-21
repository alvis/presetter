/* v8 ignore start */

import type { Promisable } from 'type-fest';

import type { PresetAssets } from './asset';
import type { Scripts, Variables } from './auxiliaries';
import type { PresetContent } from './content';
import type { ProjectContext } from './context';
import type { PresetObject } from './object';

/**
 * represents a preset which can be a definition, generator, or an array of these types
 */
export type Preset = PresetDefinition | (PresetGenerator & { id: string });

/**
 * defines a generator function for presets that accepts a context and returns a preset definition or an array of them
 */
export type PresetGenerator = (
  context: ProjectContext,
) => Promisable<Omit<PresetDefinition, 'id'>>;

/**
 * defines a preset with optional name, variables, scripts, assets, and an override for a second-pass merge
 */
export interface PresetDefinition {
  /** optional list of presets to extend */
  extends?: Preset[];
  /** optional name, typically used for debugging purposes */
  id: string;
  /** optional root path of the preset package for binary resolution */
  root?: string;

  /** substitution variables used within the preset */
  variables?: PresetContent<Variables>;

  /** additional scripts to be executed within the preset */
  scripts?: PresetContent<Scripts>;

  /** package configuration written only when adopting presets with `presetter use` */
  setup?: PresetSetup;

  /** collection of assets associated with the preset */
  assets?: PresetObject<PresetAssets>;

  /**
   * secondary pass for asset resolution, allowing modifications post initial asset formation
   * this can be used to append content to config files or handle conflicts in content
   */
  override?: {
    /**
     * plain object or generator function used in the second-pass merge to resolve variable conflicts
     */
    variables?: PresetContent<Variables>;
    /**
     * plain object or generator function used in the second-pass merge to resolve script conflicts
     */
    scripts?: PresetContent<Scripts>;

    /** adoption configuration, including scripts and tools resolved in the second pass */
    setup?: PresetSetup;

    /** asset content, allowing for modifications in the second-pass merge */
    assets?: PresetObject<PresetAssets>;
  };
}

/** defines package configuration applied only by `presetter use` */
export interface PresetSetup {
  /**
   * package.json commands merged across presets
   * keeps `{variable}` placeholders literal in objects and generator results; file templates substitute them
   */
  scripts?: PresetContent<Scripts>;
  /** runtime packages with semver ranges, tags, or npm: alias specifications; skips names in any dependency section */
  dependencies?: PresetContent<Record<string, string>>;
  /** development tools with semver ranges, tags, or npm: alias specifications; skips existing runtime or development entries and preserves peers */
  devDependencies?: PresetContent<Record<string, string>>;
  /** peer requirements with semver ranges, tags, or npm: alias specifications; skips existing peers or runtime entries and adds peers directly beside development entries */
  peerDependencies?: PresetContent<Record<string, string>>;
}
