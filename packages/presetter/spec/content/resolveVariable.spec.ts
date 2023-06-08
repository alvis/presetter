import { resolveVariable } from '#content';

describe('fn:resolveVariable', () => {
  it('compute the final variables', () => {
    expect(
      resolveVariable({
        graph: [
          {
            name: 'preset1',
            asset: {
              variable: {
                a: 'a',
              },
            },
            nodes: [],
          },
          {
            name: 'preset2',
            asset: {
              variable: {
                b: 'b',
              },
            },
            nodes: [
              {
                name: 'preset3',
                asset: {
                  variable: {
                    b: 'other',
                  },
                },
                nodes: [],
              },
            ],
          },
        ],
        config: { preset: 'preset', variable: { c: 'c' } },
      }),
    ).toEqual({ a: 'a', b: 'b', c: 'c' });
  });
});
