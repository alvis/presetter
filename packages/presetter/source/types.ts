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

import type { PackageJson } from 'read-pkg-up';

/** input for a preset configurator */
export interface PresetContext {
  /** information about the targeted project */
  target: {
    /** the package name defined in the targeted project's package.json */
    name: string;
    /** the root folder containing the targeted project's .presetterrc.json */
    root: string;
    /** normalised package.json from the targeted project's package.json */
    package: PackageJson;
  };
  /** content of .presetterrc */
  custom: PresetterConfig;
}

/** an auxiliary type for representing a file path */
type Path = string;
/** an auxiliary type for representing a template (either path to the template file or its content) */
export type Template = string | Record<string, unknown>;
/** an auxiliary type for representing a collection of template (key: output path, value: template definition) */
export type TemplateMap = Record<string, Path>;

/** expected return from the configuration function from the preset */
export interface PresetAsset {
  /** mapping of files to be generated to its configuration template files (key: file path relative to the target project's root, value: template path) */
  template?: TemplateMap;
  /** list of templates that should not be created as symlinks */
  noSymlinks?: string[];
  /** path to the scripts template */
  scripts?: string;
  /** variables to be substituted in templates */
  variable?: Record<string, string>;
}

/** information about the targeted project */
export interface PresetTarget {
  /** the package name defined in the targeted project's package.json */
  name: string;
  /** the root folder containing the targeted project's .presetterrc.json */
  root: string;
}

/** data structure for .presetterrc */
export interface PresetterConfig {
  /** preset name */
  preset: string | string[];
  /** configuration for customisation to be passed to the preset */
  config?: Record<string, Record<string, unknown> | string[]>;
  /** extra scripts available */
  scripts?: Record<string, string>;
  /** variables to be substituted in templates */
  variable?: Record<string, string>;
  /** a list of files not to be linked or fields to be ignores */
  ignores?: IgnoreRule[];
  /** list of templates that should not be created as symlinks */
  noSymlinks?: string[];
}

/** file name to be ignored or fields of config templates to be ignored */
export type IgnoreRule = string | number | Record<string, IgnorePath>;

/** field names of a config template to be ignored */
export type IgnorePath = Array<string | number> | { [key: string]: IgnorePath };
