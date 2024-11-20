import { describe, expect, it, vi } from 'vitest';

import {
  listAssetNames,
  resolveAsset,
  resolveAssets,
} from '#preset/resolution/asset';
import { resolveNodeContent } from '#preset/resolution/content';

import type {
  PresetAssets,
  PresetContentContext,
  PresetNode,
  ResolvedPresetAsset,
} from 'presetter-types';

vi.mock('#preset/resolution/content', { spy: true });

const context = {
  root: '/',
  package: {},
  variables: {
    customAssetPath: 'path/to/custom/asset',
  },
} satisfies PresetContentContext;

describe('fn:listAssetNames', () => {
  it('should list all asset names in a preset node', () => {
    const node = {
      definition: {
        id: 'parent',
        assets: {
          asset1: {},
          asset2: {},
        },
        override: {
          assets: {
            'asset1': {},
            'non-existent-asset': {}, // excluded as there is noting to be overridden
          },
        },
      },
      nodes: [
        {
          definition: {
            id: 'child1',
            assets: ({ variables }: PresetContentContext) =>
              ({
                [variables.customAssetPath!]: {
                  foo: 'bar',
                } as ResolvedPresetAsset,
              }) as PresetAssets,
          },
          nodes: [],
        },
        {
          definition: {
            id: 'child2',
            assets: {
              asset3: {},
            },
          },
          nodes: [],
        },
      ],
    } satisfies PresetNode;

    const result = listAssetNames(node, context);
    const expected = ['asset1', 'asset2', 'path/to/custom/asset', 'asset3'];

    expect(result).toEqual(expected);
  });

  it('should handle nodes with no assets', () => {
    const node = {
      definition: { id: 'test-preset' },
      nodes: [],
    } satisfies PresetNode;

    const result = listAssetNames(node, context);
    const expected = [];

    expect(result).toEqual(expected);
  });
});

describe('fn:resolveAsset', () => {
  it('should resolve an asset with initial and final pass', async () => {
    const variables = { key: 'value' };
    const node = {
      definition: {
        id: 'test-preset',
        variables,
        assets: { path: { content: 'initial' } },
        override: {
          assets: { path: { content: 'final' } },
        },
      },
      nodes: [],
    } satisfies PresetNode;

    const result = await resolveAsset({
      name: 'path',
      node,
      context,
      variables,
    });
    const expected = { content: 'final' };

    expect(result).toEqual(expected);
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'path',
      node,
      context,
      variables,
      select: expect.any(Function),
    });
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'path',
      node,
      context,
      initial: { content: 'initial' },
      variables,
      select: expect.any(Function),
    });
  });

  it('should handle null and undefined assets', async () => {
    const variables = { key: 'value' };
    const node = { definition: { id: 'test-preset', variables }, nodes: [] };

    const result = await resolveAsset({
      name: '/missing/asset',
      node,
      context,
      variables,
    });
    const expected = undefined;

    expect(result).toEqual(expected);
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: '/missing/asset',
      node,
      context,
      variables,
      select: expect.any(Function),
    });
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: '/missing/asset',
      node,
      context,
      initial: undefined,
      variables,
      select: expect.any(Function),
    });
  });
});

describe('fn:resolveAssets', () => {
  it('should resolve all assets', async () => {
    const node = {
      definition: {
        id: 'parent',
        assets: {
          asset1: { key: 'value1' },
        },
      },
      nodes: [
        {
          definition: {
            id: 'child1',
            assets: {
              asset2: { key: 'value2' },
            },
          },
          nodes: [],
        },
        {
          definition: {
            id: 'child2',
          },
          nodes: [
            {
              definition: {
                id: 'grandchild',
                assets: {
                  asset3: { key: 'value3' },
                },
              },
              nodes: [],
            },
          ],
        },
      ],
    } satisfies PresetNode;

    const result = await resolveAssets(node, context);
    const expected = {
      asset1: { key: 'value1' },
      asset2: { key: 'value2' },
      asset3: { key: 'value3' },
    };

    expect(result).toEqual(expected);
  });
});
