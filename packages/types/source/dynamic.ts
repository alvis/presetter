/* v8 ignore start */

import type { PresetAsset } from './asset';
import type { Generator } from './generator';

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

/** a helper type for finding the required fields for a generator */
export type RequiredResolution<
  F extends DynamicAssetField = DynamicAssetField,
> = PresetAsset[F] extends infer R
  ? R extends Generator<any, infer K>
    ? K
    : never
  : never;
