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

  /** substitution variables used within the preset */
  variables?: PresetContent<Variables>;

  /** additional scripts to be executed within the preset */
  scripts?: PresetContent<Scripts>;

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

    /** asset content, allowing for modifications in the second-pass merge */
    assets?: PresetObject<PresetAssets>;
  };
}
