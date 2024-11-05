import { describe, expect, it } from 'vitest';

import { getRollupParameter } from '#rollup';

import type { Config, ResolvedPresetContext } from 'presetter-types';

describe('fn:getRollupParameter', () => {
  const generateContext = (config?: Config): ResolvedPresetContext => ({
    target: { name: 'target', root: '/path/to/target', package: {} },
    custom: {
      preset: 'preset',
      config: config ? { rollup: config } : {},
      noSymlinks: [],
      variable: {},
    },
  });

  it('add plugins by importing from another config files', async () => {
    expect(
      getRollupParameter(
        generateContext({
          plugins: '@import config[plugins]',
        }),
      ),
    ).toEqual({
      rollupImport: `import * as import0 from 'config';`,
      rollupExport: 'export default {"plugins": import0.plugins}',
    });
  });

  it('add a plugin by adding the plugin in the object form, using the supplied options', async () => {
    expect(
      getRollupParameter(
        generateContext({
          plugins: { '@apply newPlugin': { name: 'newPlugin' } },
        }),
      ),
    ).toEqual({
      rollupImport: `import * as import0 from 'newPlugin';`,
      rollupExport:
        'export default {"plugins": [import0(...([{"name": "newPlugin"}] as const))]}',
    });
  });

  it('add a plugin by just the plugin name, using everything default', async () => {
    expect(
      getRollupParameter(
        generateContext({
          plugins: ['@apply newPlugin'],
        }),
      ),
    ).toEqual({
      rollupImport: `import * as import0 from 'newPlugin';`,
      rollupExport: 'export default {"plugins": [import0(...([] as const))]}',
    });
  });

  it('add a plugin by adding the plugin in the array form, using everything default', async () => {
    expect(
      getRollupParameter(
        generateContext({
          plugins: [['@apply newPlugin']],
        }),
      ),
    ).toEqual({
      rollupImport: `import * as import0 from 'newPlugin';`,
      rollupExport: 'export default {"plugins": [import0(...([] as const))]}',
    });
  });

  it('add a plugin by adding the plugin in the array form, using the supplied options', async () => {
    expect(
      getRollupParameter(
        generateContext({
          plugins: [['@apply newPlugin', { name: 'newPlugin' }]],
        }),
      ),
    ).toEqual({
      rollupImport: `import * as import0 from 'newPlugin';`,
      rollupExport:
        'export default {"plugins": [import0(...([{"name": "newPlugin"}] as const))]}',
    });
  });

  it('remove a plugin by setting the plugin config as null', async () => {
    expect(
      getRollupParameter(
        generateContext({
          plugins: {
            '@apply pluginWithOptions': null,
          },
        }),
      ),
    ).toEqual({
      rollupImport: ``,
      rollupExport: 'export default {"plugins": []}',
    });
  });

  it('add a plugin from a named import', async () => {
    expect(
      getRollupParameter(
        generateContext({
          plugins: {
            '@apply pluginWithOptions': null,
            '@apply pluginWithoutOptions': null,
            '@apply newPlugin[plugin]': { options: true },
          },
        }),
      ),
    ).toEqual({
      rollupImport: `import * as import0 from 'newPlugin';`,
      rollupExport:
        'export default {"plugins": [import0.plugin(...([{"options": true}] as const))]}',
    });
  });

  it('generate default parameters if no further config is given', async () => {
    expect(getRollupParameter(generateContext())).toEqual({
      rollupImport: ``,
      rollupExport: 'export default {}',
    });
  });

  it('generate config with extra options other than plugins', async () => {
    expect(
      getRollupParameter(
        generateContext({
          cache: null,
          extra: { options: true },
          external: ['import1', 'import2'],
        }),
      ),
    ).toEqual({
      rollupImport: ``,
      rollupExport:
        'export default {"cache": null, "extra": {"options": true}, "external": ["import1", "import2"]}',
    });
  });

  it('generate extra import statements for imports within plugin options', async () => {
    expect(
      getRollupParameter(
        generateContext({
          plugins: {
            '@apply pluginWithOptions': '@import another',
            '@apply pluginWithoutOptions': '@import another',
          },
        }),
      ),
    ).toEqual({
      rollupImport: `import * as import0 from 'another';\nimport * as import1 from 'pluginWithOptions';\nimport * as import2 from 'pluginWithoutOptions';`,
      rollupExport: `export default {"plugins": [import1(...([import0] as const)), import2(...([import0] as const))]}`,
    });

    expect(
      getRollupParameter(
        generateContext({
          plugins: [
            ['@apply pluginWithOptions', '@import another'],
            ['@apply pluginWithoutOptions', '@import another'],
          ],
        }),
      ),
    ).toEqual({
      rollupImport: `import * as import0 from 'another';\nimport * as import1 from 'pluginWithOptions';\nimport * as import2 from 'pluginWithoutOptions';`,
      rollupExport: `export default {"plugins": [import1(...([import0] as const)), import2(...([import0] as const))]}`,
    });
  });

  it('generate only one import statement per unique import', async () => {
    expect(
      getRollupParameter(
        generateContext({
          plugins: {
            '@apply pluginWithOptions': null,
            '@apply pluginWithoutOptions': null,
            '@apply plugin0': '@import another[export0]',
            '@apply plugin1': '@import another[export1]',
          },
        }),
      ),
    ).toEqual({
      rollupImport: `import * as import0 from 'another';\nimport * as import1 from 'plugin0';\nimport * as import2 from 'plugin1';`,
      rollupExport: `export default {"plugins": [import1(...([import0.export0] as const)), import2(...([import0.export1] as const))]}`,
    });
  });

  it('support nested plugin declaration', async () => {
    expect(
      getRollupParameter(
        generateContext({
          plugins: {
            '@apply pluginWithOptions': null,
            '@apply pluginWithoutOptions': null,
            '@apply plugin0': {
              plugins: { another: '@import options[export0]' },
            },
          },
        }),
      ),
    ).toEqual({
      rollupImport: `import * as import0 from 'options';\nimport * as import1 from 'plugin0';`,
      rollupExport: `export default {"plugins": [import1(...([{"plugins": [["another", import0.export0]]}] as const))]}`,
    });
  });
});
