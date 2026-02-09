import { preset } from 'presetter';
import bun from '@presetter/preset-bun';
import esm from '@presetter/preset-esm';

import { name } from './package.json' with { type: 'json' };

export default preset(name, {
  extends: [esm, bun],
});
