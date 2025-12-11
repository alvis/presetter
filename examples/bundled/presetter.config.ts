import { preset } from 'presetter';
import esm from 'presetter-preset-esm';
import rollup from 'presetter-preset-rollup';
import strict from 'presetter-preset-strict';

import { name } from './package.json' with { type: 'json' };

export default preset(name, {
  extends: [esm, strict, rollup],
});
