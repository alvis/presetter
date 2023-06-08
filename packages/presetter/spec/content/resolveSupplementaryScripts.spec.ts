import { resolveSupplementaryScripts } from '#content';

describe('fn:resolveSupplementaryScripts', () => {
  it('compute the final scripts to overwrite those form the presets', async () => {
    expect(
      await resolveSupplementaryScripts({
        graph: [
          {
            name: 'preset1',
            asset: {
              supplementaryScripts: {
                task1: 'replaced',
              },
            },
            nodes: [],
          },
          {
            name: 'preset2',
            asset: {
              supplementaryScripts: {
                task1: 'command1',
              },
            },
            nodes: [
              {
                name: 'preset3',
                asset: {
                  supplementaryScripts: {
                    task2: 'command2',
                  },
                },
                nodes: [],
              },
            ],
          },
        ],
        context: {
          target: {
            name: 'client',
            root: '/project',
            package: {},
          },
          custom: {
            preset: 'preset',
            scripts: {
              task3: 'command3',
            },
            variable: {},
          },
        },
      }),
    ).toEqual({ task1: 'command1', task2: 'command2', task3: 'command3' });
  });
});
