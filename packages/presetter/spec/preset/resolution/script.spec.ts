import { describe, expect, it, vi } from 'vitest';

import { resolveNodeContent } from '#preset/resolution/content';
import { resolveScripts } from '#preset/resolution/script';

import type { PresetNode, ProjectContext } from 'presetter-types';

vi.mock('#preset/resolution/content', { spy: true });

const context = {
  isRepoRoot: false,
  repoRoot: '/path/to/project',
  projectRoot: '/path/to/project',
  packageJson: {},
} satisfies ProjectContext;

describe('fn:resolveScripts', () => {
  it('should resolve scripts with initial and final pass', async () => {
    const node = {
      definition: {
        id: 'test-preset',
        scripts: { script: 'echo "initial"' },
        override: {
          scripts: { script: 'echo "final"' },
        },
      },
      nodes: [],
    } satisfies PresetNode;

    const result = await resolveScripts(node, context);
    const expected = { script: 'echo "final"' };

    expect(result).toEqual(expected);
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'SCRIPTS',
      node,
      context,
      variables: {},
      select: expect.any(Function),
    });
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'SCRIPTS',
      node,
      context,
      initial: { script: 'echo "initial"' },
      variables: {},
      select: expect.any(Function),
    });
  });

  it('should resolve scripts with variables', async () => {
    const node = {
      definition: {
        id: 'test-preset',
        scripts: { script: 'echo "initial"' },
        override: {
          scripts: { script: 'echo "{var}"' },
          variables: { var: 'final' },
        },
      },
      nodes: [],
    } satisfies PresetNode;

    const result = await resolveScripts(node, context);
    const expected = { script: 'echo "final"' };

    expect(result).toEqual(expected);
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'SCRIPTS',
      node,
      context,
      variables: { var: 'final' },
      select: expect.any(Function),
    });
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'SCRIPTS',
      node,
      context,
      initial: { script: 'echo "initial"' },
      variables: { var: 'final' },
      select: expect.any(Function),
    });
  });

  it('should handle empty scripts', async () => {
    const node = {
      definition: { id: 'test-preset' },
      nodes: [],
    } satisfies PresetNode;

    const result = await resolveScripts(node, context);
    const expected = {};

    expect(result).toEqual(expected);
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'SCRIPTS',
      node,
      context,
      variables: {},
      select: expect.any(Function),
    });
    expect(resolveNodeContent).toHaveBeenCalledWith({
      name: 'SCRIPTS',
      node,
      context,
      initial: undefined,
      variables: {},
      select: expect.any(Function),
    });
  });
});
