import esm from '@presetter/preset-esm';
import node from '@presetter/preset-node';
import rollup from '@presetter/preset-rollup';
import strict from '@presetter/preset-strict';

import { preset } from 'presetter';

import { name } from './package.json' with { type: 'json' };

export default preset(name, {
  extends: [esm, node, strict, rollup],
});
