import esm from '@presetter/preset-esm';
import node from '@presetter/preset-node';

import { preset } from 'presetter';

import { name } from './package.json' with { type: 'json' };

export default preset(name, {
  extends: [esm, node],
});
