import { describe, expect, it } from 'vitest';

import { InterruptedError } from '#interrupted';

describe('cl:InterruptedError', () => {
  it('should name the signal and carry the exit status and the failure of the script', () => {
    const cause = new Error('command failed');
    const error = new InterruptedError('SIGINT', 130, { cause });

    expect(error).toEqual(
      expect.objectContaining({
        name: 'InterruptedError',
        message: 'interrupted by SIGINT',
        exitCode: 130,
        cause,
      }),
    );
  });
});
