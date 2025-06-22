import { describe, expect, it, vi } from 'vitest';

import { resolveNodeContent } from '#preset/resolution/content';
import { resolveVariables } from '#preset/resolution/variable';

import { context } from './fixture';

import type { PresetNode } from 'presetter-types';

vi.mock('#preset/resolution/content', { spy: true });

describe('fn:resolveVariables', () => {
  it('should resolve initial variables', async () => {
    const node = {
      definition: {
        id: 'test-preset',
        variables: { key: 'value' },
      },
      nodes: [],
    } satisfies PresetNode;

    const result = await resolveVariables(node, context);
    const expected = { key: 'value' };

    expect(result).toEqual(expected);
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'VARIABLES',
      node,
      context,
      select: expect.any(Function),
    });
  });

  it('should resolve final variables with overrides', async () => {
    const node = {
      definition: {
        id: 'test-preset',
        variables: { key: 'initialValue' },
        override: { variables: { key: 'finalValue' } },
      },
      nodes: [],
    } satisfies PresetNode;

    const result = await resolveVariables(node, context);
    const expected = { key: 'finalValue' };

    expect(result).toEqual(expected);
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'VARIABLES',
      node,
      context,
      select: expect.any(Function),
    });
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'VARIABLES',
      node,
      context,
      initial: { key: 'initialValue' },
      select: expect.any(Function),
    });
  });

  it('should resolve an empty object when no variables are defined', async () => {
    const node = {
      definition: { id: 'test-preset' },
      nodes: [],
    } satisfies PresetNode;

    const result = await resolveVariables(node, context);
    const expected = {};

    expect(result).toEqual(expected);
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'VARIABLES',
      node,
      context,
      select: expect.any(Function),
    });
  });

  it('handle missing initial variables', async () => {
    const node = {
      definition: { id: 'parent' },
      nodes: [
        {
          definition: {
            id: 'child',
            override: { variables: { key: 'value' } },
          },
          nodes: [],
        },
      ],
    } satisfies PresetNode;

    const result = await resolveVariables(node, context);
    const expected = { key: 'value' };

    expect(result).toEqual(expected);
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'VARIABLES',
      node,
      context,
      select: expect.any(Function),
    });
  });
});
