import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { resolveSetup } from '#preset/resolution/setup';

import { context } from './fixture';

import type { PresetNode } from '@presetter/types';

describe('fn:resolveSetup', () => {
  it('should merge inherited declarations and apply overrides after the initial pass', async () => {
    const node: PresetNode = {
      definition: {
        id: 'project',
        setup: { scripts: { build: 'local build' } },
      },
      nodes: [
        {
          definition: {
            id: 'base',
            setup: { scripts: { build: 'run build', lint: 'run lint --' } },
            override: { setup: { scripts: { build: 'final build' } } },
          },
          nodes: [],
        },
        {
          definition: {
            id: 'extra',
            setup: { scripts: { test: 'run test --' } },
          },
          nodes: [],
        },
      ],
    } satisfies PresetNode;

    expect(await resolveSetup(node, context)).toEqual({
      scripts: {
        build: 'final build',
        lint: 'run lint --',
        test: 'run test --',
      },
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });
  });

  it('should resolve generators with the current content, variables and project context', async () => {
    const node = {
      definition: {
        id: 'dynamic',
        variables: { task: 'lint' },
        setup: { scripts: { build: 'run build', inline: 'echo {task}' } },
        override: {
          setup: {
            scripts: (current, { variables, packageJson }) => ({
              ...current,
              [variables.task!]: `echo ${packageJson.name}`,
              literal: 'echo {task}',
            }),
          },
        },
      },
      nodes: [],
    } satisfies PresetNode;

    expect(await resolveSetup(node, context)).toEqual({
      scripts: {
        build: 'run build',
        lint: 'echo test-preset',
        literal: 'echo {task}',
        inline: 'echo {task}',
      },
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });
  });

  it('should substitute variables in file-backed setup templates', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'presetter-setup-'));
    const file = join(directory, 'scripts.yaml');
    try {
      await writeFile(file, 'build: echo {task}\n');
      const node = {
        definition: {
          id: 'file-setup',
          variables: { task: 'compile' },
          setup: { scripts: file },
        },
        nodes: [],
      } satisfies PresetNode;

      expect(await resolveSetup(node, context)).toEqual({
        scripts: { build: 'echo compile' },
        dependencies: {},
        devDependencies: {},
        peerDependencies: {},
      });
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });

  it('should return no scripts when setup is absent', async () => {
    expect(
      await resolveSetup({ definition: { id: 'empty' }, nodes: [] }, context),
    ).toEqual({
      scripts: {},
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });
  });

  it('should allow an override to remove all setup scripts', async () => {
    expect(
      await resolveSetup(
        {
          definition: {
            id: 'empty',
            setup: { scripts: { build: 'run build' } },
            override: { setup: { scripts: null } },
          },
          nodes: [],
        },
        context,
      ),
    ).toEqual({
      scripts: {},
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });
  });

  it.each(['dependencies', 'devDependencies', 'peerDependencies'] as const)(
    'should resolve %s across extends before applying overrides',
    async (field) => {
      const node = {
        definition: {
          id: 'project',
          setup: {
            scripts: { build: 'local build' },
            [field]: { typescript: '^6.0.0' },
          },
        },
        nodes: [
          {
            definition: {
              id: 'base',
              setup: {
                scripts: { lint: 'run lint --' },
                [field]: {
                  'typescript': '^5.9.0',
                  '@types/node': '^24.0.0',
                },
              },
              override: {
                setup: {
                  scripts: { build: 'final build' },
                  [field]: { typescript: '^6.0.0' },
                },
              },
            },
            nodes: [],
          },
        ],
      } satisfies PresetNode;

      expect(await resolveSetup(node, context)).toEqual({
        scripts: { build: 'final build', lint: 'run lint --' },
        dependencies: {},
        devDependencies: {},
        peerDependencies: {},
        [field]: {
          'typescript': '^6.0.0',
          '@types/node': '^24.0.0',
        },
      });
    },
  );

  it.each(['dependencies', 'devDependencies', 'peerDependencies'] as const)(
    'should resolve generated %s with the current map and project context',
    async (field) => {
      const node = {
        definition: {
          id: 'dynamic',
          setup: {
            [field]: { typescript: '^6.0.0' },
          },
          override: {
            setup: {
              [field]: (current, { packageJson }) => ({
                ...current,
                '@types/node': `^${packageJson.name!.length}.0.0`,
              }),
            },
          },
        },
        nodes: [],
      } satisfies PresetNode;

      const setup = await resolveSetup(node, context);
      expect(setup[field]).toEqual({
        'typescript': '^6.0.0',
        '@types/node': '^11.0.0',
      });
    },
  );

  it.each(['dependencies', 'devDependencies', 'peerDependencies'] as const)(
    'should return empty maps when setup is absent or an override removes %s',
    async (field) => {
      expect(
        await resolveSetup({ definition: { id: 'empty' }, nodes: [] }, context),
      ).toEqual({
        scripts: {},
        dependencies: {},
        devDependencies: {},
        peerDependencies: {},
      });
      expect(
        await resolveSetup(
          {
            definition: {
              id: 'removed',
              setup: { [field]: { typescript: '^6.0.0' } },
              override: { setup: { [field]: null } },
            },
            nodes: [],
          },
          context,
        ),
      ).toEqual({
        scripts: {},
        dependencies: {},
        devDependencies: {},
        peerDependencies: {},
      });
    },
  );
});
