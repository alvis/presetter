import esm from 'presetter-preset-esm';
import strict from 'presetter-preset-strict';

import type { Preset, PresetAsset } from 'presetter';

export default (context: ProjectContext): PresetAsset =>
  ({
    name: 'optional-name',
    extends: [strict, esm],
    template: {
      'eslint.config.ts': (configs) => [...configs],
    },
  }) satisfies Preset;
