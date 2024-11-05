import { describe, expect, it } from 'vitest';

import { loadDynamicMap } from '#resolution';

import type { ResolvedPresetContext } from 'presetter-types';

describe('fn:loadDynamicMap', () => {
  const context: ResolvedPresetContext = {
    target: { name: 'name', root: 'root', package: {} },
    custom: {
      preset: 'preset',
      config: {},
      noSymlinks: [],
      variable: { key: 'value' },
    },
  };

  it('pass on map if no generator is supplied', async () => {
    expect(
      await loadDynamicMap({ template: { form: 'literal' } }, context),
    ).toMatchObject({ template: { form: 'literal' } });
  });

  it('compute a field via a generator', async () => {
    expect(
      await loadDynamicMap(
        { template: () => ({ form: 'field generator' }) },
        context,
      ),
    ).toMatchObject({ template: { form: 'field generator' } });
  });

  it('compute map via generators', async () => {
    expect(
      await loadDynamicMap(
        () => ({
          template: () => ({ form: 'map generator' }),
        }),
        context,
      ),
    ).toMatchObject({ template: { form: 'map generator' } });
  });
});
