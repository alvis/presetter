/* v8 ignore start */

import type { PackageJson, SetRequired } from 'type-fest';

import type { PresetterConfig } from './rc';

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
