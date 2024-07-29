import { describe, expectTypeOf, it } from 'vitest';

import type {
  Config,
  DynamicAsset,
  DynamicAssetField,
  RequiredResolution,
  Template,
} from '#index';

describe('ty:DynamicAssetField', () => {
  it('should resolve the dynamic asset field', async () => {
    type Expected = 'template' | 'supplementaryConfig';

    type Result = DynamicAssetField;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });
});

describe('ty:DynamicAsset', () => {
  it('should resolve the final output of a dynamic supplementaryConfig asset', async () => {
    type Expected = Config;

    type Result = DynamicAsset<'supplementaryConfig'>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it('should resolve the final output of a dynamic template asset', async () => {
    type Expected = Template;

    type Result = DynamicAsset<'template'>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });
});

describe('ty:RequiredResolution', () => {
  it('should resolve the required fields for generating a supplementaryConfig asset', async () => {
    type Expected = 'variable';

    type Result = RequiredResolution<'supplementaryConfig'>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });

  it('should resolve the required fields for generating a dynamic template asset', async () => {
    type Expected = 'config' | 'noSymlinks' | 'variable';

    type Result = RequiredResolution<'template'>;

    expectTypeOf<Result>().toEqualTypeOf<Expected>();
  });
});
