import { describe, expect, it } from 'vitest';

import { getConfigKey } from '#resolution';

describe('fn:getConfigKey', () => {
  it('get config keys based on the filename', () => {
    expect(getConfigKey('.tsconfig.json')).toEqual('tsconfig');
    expect(getConfigKey('.npmignore')).toEqual('npmignore');
    expect(getConfigKey('rollup.config.ts')).toEqual('rollup');
  });
});
