import { describe, expect, it } from 'vitest';

import { extractPresetRoots } from '#preset/resolution/roots';

import type { PresetNode } from 'presetter-types';

describe('fn:extractPresetRoots', () => {
  it('should return empty array for node without root and no children', () => {
    const node: PresetNode = {
      definition: { id: 'test' },
      nodes: [],
    };

    const result = extractPresetRoots(node);

    expect(result).toEqual([]);
  });

  it('should return root for single node with root', () => {
    const node: PresetNode = {
      definition: { id: 'test', root: '/path/to/preset' },
      nodes: [],
    };

    const result = extractPresetRoots(node);

    expect(result).toEqual(['/path/to/preset']);
  });

  it('should return empty array for single node without root', () => {
    const node: PresetNode = {
      definition: { id: 'test' },
      nodes: [],
    };

    const result = extractPresetRoots(node);

    expect(result).toEqual([]);
  });

  it('should collect roots in priority order from nested tree', () => {
    // parent -> child -> grandchild hierarchy
    const node: PresetNode = {
      definition: { id: 'parent', root: '/parent/root' },
      nodes: [
        {
          definition: { id: 'child', root: '/child/root' },
          nodes: [
            {
              definition: { id: 'grandchild', root: '/grandchild/root' },
              nodes: [],
            },
          ],
        },
      ],
    };

    const result = extractPresetRoots(node);

    // closest to consumer first (parent), then child, then grandchild
    expect(result).toEqual(['/parent/root', '/child/root', '/grandchild/root']);
  });

  it('should return only roots that exist in mixed tree', () => {
    const node: PresetNode = {
      definition: { id: 'parent', root: '/parent/root' },
      nodes: [
        {
          definition: { id: 'child-no-root' },
          nodes: [
            {
              definition: { id: 'grandchild', root: '/grandchild/root' },
              nodes: [],
            },
          ],
        },
        {
          definition: { id: 'sibling', root: '/sibling/root' },
          nodes: [],
        },
      ],
    };

    const result = extractPresetRoots(node);

    expect(result).toEqual([
      '/parent/root',
      '/grandchild/root',
      '/sibling/root',
    ]);
  });

  it('should deduplicate roots while preserving first occurrence', () => {
    const node: PresetNode = {
      definition: { id: 'parent', root: '/shared/root' },
      nodes: [
        {
          definition: { id: 'child1', root: '/child1/root' },
          nodes: [],
        },
        {
          // duplicate root should be filtered out
          definition: { id: 'child2', root: '/shared/root' },
          nodes: [],
        },
        {
          definition: { id: 'child3', root: '/child3/root' },
          nodes: [],
        },
      ],
    };

    const result = extractPresetRoots(node);

    // /shared/root appears only once (first occurrence from parent)
    expect(result).toEqual(['/shared/root', '/child1/root', '/child3/root']);
  });

  it('should preserve first occurrence when deduplicating', () => {
    // test that when duplicate appears later, the earlier one is kept
    const node: PresetNode = {
      definition: { id: 'parent', root: '/first' },
      nodes: [
        {
          definition: { id: 'child', root: '/second' },
          nodes: [
            {
              // duplicate of parent root should not appear
              definition: { id: 'grandchild', root: '/first' },
              nodes: [],
            },
          ],
        },
      ],
    };

    const result = extractPresetRoots(node);

    // /first appears at position 0 (from parent), not position 2 (from grandchild)
    expect(result).toEqual(['/first', '/second']);
    expect(result[0]).toBe('/first');
  });
});
