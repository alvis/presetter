import { describe, expect, it, vi } from 'vitest';

import { loadFile } from '#io';
import { resolveContent, resolveNodeContent } from '#preset/resolution/content';

import type {
  PresetContentContext,
  PresetDefinition,
  PresetNode,
} from 'presetter-types';

vi.mock('#io', () => ({
  loadFile: vi.fn(),
}));

const context = {
  root: '/',
  package: {},
  variables: {},
} satisfies PresetContentContext;

describe('fn:resolveContent', () => {
  it('should resolve dynamic content from a function', async () => {
    const content = vi.fn().mockResolvedValue({ key: 'value' });

    const result = await resolveContent({ content, context });
    const expected = { key: 'value' };

    expect(result).toEqual(expected);
    expect(content).toHaveBeenCalledWith(undefined, {
      ...context,
      variables: {},
    });
  });

  it('should load content from a file', async () => {
    vi.mocked(loadFile).mockReturnValue({ key: 'value' });

    const result = await resolveContent({ content: '/path/to/file', context });
    const expected = { key: 'value' };

    expect(result).toEqual(expected);
    expect(loadFile).toHaveBeenCalledWith('/path/to/file', {});
  });

  it('should merge current content with resolved content', async () => {
    const result = await resolveContent({
      content: { key: 'value' },
      current: { existing: 'content' },
      context,
    });
    const expected = { existing: 'content', key: 'value' };

    expect(result).toEqual(expected);
  });

  it('should pass variables to content function', async () => {
    const content = vi.fn().mockResolvedValue({ key: 'value' });

    const variables = { key: 'value' };

    const result = await resolveContent({ content, context, variables });
    const expected = { key: 'value' };

    expect(result).toEqual(expected);
    expect(content).toHaveBeenCalledWith(undefined, {
      ...context,
      variables,
    });
  });

  it('should pass variables to file loader', async () => {
    vi.mocked(loadFile).mockReturnValue({ key: 'value' });

    const variables = { key: 'value' };

    const result = await resolveContent({
      content: '/path/to/file',
      context,
      variables,
    });
    const expected = { key: 'value' };

    expect(result).toEqual(expected);
    expect(loadFile).toHaveBeenCalledWith('/path/to/file', variables);
  });
});

describe('fn:resolveNodeContent', () => {
  it('should resolve content of a node within a preset', async () => {
    const node = {
      definition: {
        id: 'test-preset',
        assets: {
          '/path/to/file': { key: 'value' },
        },
      },
      nodes: [],
    } satisfies PresetNode;
    const select = (definition: PresetDefinition) =>
      definition.assets?.['/path/to/file'];

    const result = await resolveNodeContent({
      name: '/path/to/file',
      node,
      context,
      select,
    });
    const expected = { key: 'value' };

    expect(result).toEqual(expected);
  });

  it('should merge content from nested nodes', async () => {
    const node = {
      definition: {
        id: 'parent',
        assets: { '/path/to/file': { foo: 'foo' } },
      },
      nodes: [
        {
          definition: {
            id: 'child1',
            assets: { '/path/to/file': { source: 'child1' } },
          },
          nodes: [
            {
              definition: {
                id: 'grandchild',
                assets: { '/path/to/file': { bar: 'bar' } },
              },
              nodes: [],
            },
          ],
        },
        {
          definition: {
            id: 'child2',
            assets: { '/path/to/file': { source: 'child2' } },
          },
          nodes: [],
        },
      ],
    } satisfies PresetNode;
    const select = (definition: PresetDefinition) =>
      definition.assets?.['/path/to/file'];

    const result = await resolveNodeContent({
      name: '/path/to/file',
      node,
      context,
      select,
    });
    const expected = { foo: 'foo', source: 'child2', bar: 'bar' };

    expect(result).toEqual(expected);
  });
});
