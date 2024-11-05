/* v8 ignore start */

import type { Path } from './auxiliary';
import type { Config } from './config';
import type { ResolvedPresetContext } from './context';
import type { PresetterConfig } from './rc';
import type { Template } from './template';

/** a dynamic content generator */
export type Generator<
  R,
  K extends keyof PresetterConfig = 'config' | 'noSymlinks' | 'variable',
> = (args: ResolvedPresetContext<K>) => R | PromiseLike<R>;

/** an auxiliary type for representing a dynamic config generator */
export type ConfigGenerator = Generator<Config>;
/** an auxiliary type for representing a map containing multiple configs */
export type ConfigMap = Record<string, Path | Config | ConfigGenerator>;
/** an auxiliary type for representing a dynamic config map generator */
export type ConfigMapGenerator = Generator<ConfigMap, 'variable'>;

/** an auxiliary type for representing a dynamic template generator */
export type TemplateGenerator = Generator<Template>;
/** an auxiliary type for representing a collection of template (key: output path, value: template definition) */
export type TemplateMap = Record<string, Path | Template | TemplateGenerator>;
/** an auxiliary type for representing a dynamic template map generator */
export type TemplateMapGenerator = Generator<
  TemplateMap,
  'config' | 'noSymlinks' | 'variable'
>;
