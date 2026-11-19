import { describe, expect, it } from 'vitest';

import * as entry from '#vitest';
import { scopeGlobalSetup, scopeSetup } from '#vitest/scope';

describe('mod:vitest', () => {
  it('should expose only the setup scoping helpers', () => {
    expect({ ...entry }).toEqual({ scopeGlobalSetup, scopeSetup });
  });
});
