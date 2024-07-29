import { describe, expect, it } from 'vitest';

import { resolveSupplementaryConfig } from '#content';

describe('fn:resolveSupplementaryConfig', () => {
  it('compute the final rules to overwrite those form the presets', async () => {
    expect(
      await resolveSupplementaryConfig({
        graph: [
          {
            name: 'preset1',
            asset: {
              supplementaryConfig: {
                config: { flag: true },
              },
            },
            nodes: [],
          },
          {
            name: 'preset2',
            asset: {
              supplementaryConfig: {
                config: { extra: true },
              },
            },
            nodes: [
              {
                name: 'preset3',
                asset: {
                  supplementaryConfig: {
                    config: { flag: false },
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
            config: {
              config: { extra: false },
            },
            variable: {},
          },
        },
      }),
    ).toEqual({ config: { flag: false, extra: false } });
  });
});
