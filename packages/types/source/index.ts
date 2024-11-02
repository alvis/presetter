/* v8 ignore start */

/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of types
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import type { JsonObject, PackageJson, SetRequired } from 'type-fest';

/** any values that are not a function, array or object */
export type Primitive = string | number | boolean | null | undefined;
/** array of non-function values */
export type PrimitiveArray = PrimitiveEntity[] | readonly PrimitiveEntity[];
/** object of non-function values */
export type PrimitiveObject = { [Key in string]: PrimitiveEntity };
/** any values that are not a function */
export type PrimitiveEntity = Primitive | PrimitiveObject | PrimitiveArray;

/** a graph representing the dependency of all preset assets */
export type PresetGraph = PresetNode[];

/** a node in the preset graph */
export interface PresetNode {
  /** the name of the preset */
  name: string;
  /** assets provided by the preset */
  asset: PresetAsset;
  /** list of assets from extended presets */
  nodes: PresetGraph;
}

/** data structure for .presetterrc */
export interface PresetterConfig {
  /** preset name */
  preset: string | string[];
  /** configuration for customization to be passed to the preset */
  config?: Record<string, JsonObject | string[]>;
  /** extra scripts available */
  scripts?: Record<string, string>;
  /** variables to be substituted in templates */
  variable?: Record<string, string>;
  /** a list of files not to be linked or fields to be ignores */
  ignores?: IgnoreRule[];
  /** list of templates that should not be created as symlinks */
  noSymlinks?: string[];
}

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

/** information about the targeted project */
export interface TargetContext {
  /** the package name defined in the targeted project's package.json */
  name: string;
  /** the root folder containing the targeted project's .presetterrc.json */
  root: string;
  /** normalized package.json from the targeted project's package.json */
  package: PackageJson;
}

/** input for a preset configurator */
export interface PresetContext {
  /** information about the targeted project */
  target: TargetContext;
  /** content of .presetterrc */
  custom: PresetterConfig;
}

/** resolved PresetContext with certain fields resolved and made available */
export type ResolvedPresetContext<
  F extends keyof PresetterConfig = 'config' | 'noSymlinks' | 'variable',
> = PresetContext & {
  custom: SetRequired<PresetContext['custom'], F>;
};

/** an auxiliary type for representing a file path */
type Path = string;
/** an auxiliary type for representing a template (either path to the template file or its content) */
export type Template = string | JsonObject;
/** an auxiliary type for representing a dynamic template generator */
export type TemplateGenerator = Generator<Template>;
/** an auxiliary type for representing a collection of template (key: output path, value: template definition) */
export type TemplateMap = Record<string, Path | Template | TemplateGenerator>;
/** an auxiliary type for representing a dynamic template map generator */
export type TemplateMapGenerator = Generator<
  TemplateMap,
  'config' | 'noSymlinks' | 'variable'
>;
/** an auxiliary type for representing a config */
export type Config = string[] | JsonObject;
/** an auxiliary type for representing a dynamic config generator */
export type ConfigGenerator = Generator<Config>;
/** an auxiliary type for representing a map containing multiple configs */
export type ConfigMap = Record<string, Path | Config | ConfigGenerator>;
/** an auxiliary type for representing a dynamic config map generator */
export type ConfigMapGenerator = Generator<ConfigMap, 'variable'>;
/** file name to be ignored or fields of config templates to be ignored */
export type IgnoreRule = string | number | Record<string, IgnorePath>;
/** field names of a config template to be ignored */
export type IgnorePath = string[] | number[] | { [key: string]: IgnorePath };
/** an auxiliary type for representing a dynamic ignore rules generator */
export type IgnoreRulesGenerator = Generator<IgnoreRule[], 'variable'>;

/** a dynamic content generator */
export type Generator<
  R,
  K extends keyof PresetterConfig = 'config' | 'noSymlinks' | 'variable',
> = (args: ResolvedPresetContext<K>) => PotentiallyPromise<R>;

/** all potential fields that can be a dynamic content */
export type DynamicAssetField = {
  [F in keyof PresetAsset]-?: Generator<any, never> extends PresetAsset[F]
    ? Record<string, any> extends PresetAsset[F]
      ? F
      : never
    : never;
}[keyof PresetAsset];

/** all potential dynamic content */
export type DynamicAsset<F extends DynamicAssetField> = Exclude<
  PresetAsset[F],
  undefined | Generator<any>
>[string] extends infer R
  ? R extends Generator<infer V>
    ? V
    : never
  : never;

/** a helper type for a potentially promise return */
export type PotentiallyPromise<T> = T | PromiseLike<T>;

/** a helper type for finding the required fields for a generator */
export type RequiredResolution<
  F extends DynamicAssetField = DynamicAssetField,
> = PresetAsset[F] extends infer R
  ? R extends Generator<any, infer K>
    ? K
    : never
  : never;
