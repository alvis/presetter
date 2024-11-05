/* v8 ignore start */

import type { Config } from './config';
import type {
  ConfigMap,
  ConfigMapGenerator,
  Generator,
  TemplateMap,
  TemplateMapGenerator,
} from './generator';
import type { IgnorePath, IgnoreRule } from './ignore';
import type { Template } from './template';

/** expected return from the configuration function from the preset */
export interface PresetAsset {
  /** list of presets to extend from */
  extends?: string[];
  /** mapping of files to be generated to its configuration template files (key: file path relative to the target project's root, value: template path) */
  template?: TemplateMap | TemplateMapGenerator;
  /** list of templates that should not be created as symlinks */
  noSymlinks?: string[] | Generator<string[], 'variable'>;
  /** path to the scripts template */
  scripts?: Record<string, string> | string;
  /** variables to be substituted in templates */
  variable?: Record<string, string>;
  /** supplementary configuration applied to .presetterrc for enriching other presets */
  supplementaryConfig?: ConfigMap | ConfigMapGenerator;
  /** a list of files not to be linked or fields to be ignores */
  supplementaryIgnores?: IgnoreRule[] | IgnoreRulesGenerator;
  /** path to the scripts template to be applied at end of preset merging */
  supplementaryScripts?: Record<string, string> | string;
}

/** an auxiliary type for representing a dynamic ignore rules generator */
export type IgnoreRulesGenerator = Generator<IgnoreRule[], 'variable'>;

/** realized PresetAsset that doesn't need any further processing */
export interface ResolvedPresetAsset extends Omit<PresetAsset, 'extends'> {
  /** mapping of files to be generated to its configuration template files (key: file path relative to the target project's root, value: content to be written to file) */
  template?: Record<string, Template>;
  /** list of templates that should not be created as symlinks */
  noSymlinks?: string[];
  /** path to the scripts template */
  scripts?: Record<string, string>;
  /** variables to be substituted in templates */
  variable?: Record<string, string>;
  /** supplementary configuration applied to .presetterrc for enriching other presets */
  supplementaryConfig?: Record<string, Config>;
  /** a list of files not to be linked or fields to be ignores */
  supplementaryIgnores?: Array<string | Record<string, IgnorePath>>;
  /** path to the scripts template to be applied at end of preset merging */
  supplementaryScripts?: Record<string, string>;
}
