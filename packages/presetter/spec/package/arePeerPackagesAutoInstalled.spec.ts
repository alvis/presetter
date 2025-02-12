import { describe, expect, it } from 'vitest';

import { arePeerPackagesAutoInstalled } from '#package';

describe('fn:arePeerPackagesAutoInstalled', () => {
  it('return false for unknown npm agent', () => {
    process.env.npm_config_user_agent = 'pnpm/1.0.0 node/v15.0.0 darwin x64';

    expect(arePeerPackagesAutoInstalled()).toEqual(true);
  });

  it('return false for npm before v7', () => {
    process.env.npm_config_user_agent = 'npm/6.0.0 node/v15.0.0 darwin x64';

    expect(arePeerPackagesAutoInstalled()).toEqual(false);
  });

  it('return true for npm v7', () => {
    process.env.npm_config_user_agent = 'npm/7.0.0 node/v15.0.0 darwin x64';

    expect(arePeerPackagesAutoInstalled()).toEqual(true);
  });

  it('return true for npm v7+', () => {
    process.env.npm_config_user_agent = 'npm/10.0.0 node/v15.0.0 darwin x64';

    expect(arePeerPackagesAutoInstalled()).toEqual(true);
  });
});
