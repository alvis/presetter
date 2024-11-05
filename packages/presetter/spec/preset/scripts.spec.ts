import { describe, expect, it } from 'vitest';

import { mockContext, mockIO, mockModuleResolution } from './mock';

mockContext();
mockModuleResolution();
mockIO();

const { getScripts } = await import('#preset/scripts');

describe('fn:getScripts', () => {
  it('return the scripts of the given preset', async () => {
    expect(await getScripts()).toEqual({
      task: 'command_from_symlink',
    });
  });
});
