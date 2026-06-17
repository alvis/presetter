import hybrid from '@presetter/preset-hybrid';
import node from '@presetter/preset-node';

import { preset } from 'presetter';

import { name } from './package.json' with { type: 'json' };

export default preset(name, {
  extends: [hybrid, node],
});
