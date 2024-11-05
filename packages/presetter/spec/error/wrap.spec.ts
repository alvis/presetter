import { describe, expect, it, vi } from 'vitest';

import { wrap } from '#error';

describe('fn:wrap', () => {
  it('return what a promise resolves', async () => {
    const fn = vi.fn(async () => true);
    expect(await wrap(fn(), 'message')).toEqual(true);
  });

  it('prefix an additional message to a promise rejection', async () => {
    const fn = vi.fn(async () => {
      throw new Error('error');
    });
    await expect(wrap(fn(), 'better explanation')).rejects.toThrow(
      'better explanation: error',
    );
  });

  it('does not change anything if a promise rejection is not an error', async () => {
    const fn = vi.fn(async () => {
      throw 'message';
    });
    await expect(wrap(fn(), 'additional message')).rejects.toEqual('message');
  });
});
