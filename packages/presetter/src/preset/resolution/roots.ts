import type { PresetNode } from 'presetter-types';

/**
 * recursively extracts all preset root paths from a preset node tree (pure function)
 *
 * Order: closest to consumer first, then child presets
 * Example: consumer -> preset-esm -> preset-essentials
 * Returns: [esm-root, essentials-root]
 *
 * This ensures the direct preset's binaries have highest PATH priority,
 * allowing more specific presets to override base preset binaries.
 * @param node the root preset node to traverse
 * @returns array of unique preset root paths, closest to consumer first
 */
export const extractPresetRoots = (node: PresetNode): readonly string[] => {
  const collectRoots = (current: PresetNode): readonly string[] => {
    // add THIS node's root first (closer to consumer, higher priority)
    const thisRoot = current.definition.root ? [current.definition.root] : [];
    // then collect extended preset roots (further from consumer, lower priority)
    const childRoots = current.nodes.flatMap(collectRoots);

    return [...thisRoot, ...childRoots];
  };

  // deduplicate while preserving priority order (first occurrence wins)
  return [...new Set(collectRoots(node))];
};
