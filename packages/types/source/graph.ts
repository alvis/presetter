/* v8 ignore start */

import type { PresetAsset } from './asset';

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
