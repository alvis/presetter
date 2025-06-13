/* v8 ignore start */

import type { PresetDefinition } from './preset';

/**
 * represents a graph of dependencies for all preset assets
 */
export type PresetGraph = PresetNode[];

/**
 * represents a node within the preset dependency graph
 */
export interface PresetNode {
  /** the resolved definition provided by this preset */
  definition: PresetDefinition;

  /** list of asset nodes derived from extended or inherited presets */
  nodes: PresetGraph;
}
