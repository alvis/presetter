import { describe, expect, expectTypeOf, it } from 'vitest';

import { asset, preset } from '#index';

import type {
  Preset,
  PresetContent,
  PresetContentGenerator,
  PresetDefinition,
  PresetGenerator,
} from '#index';

describe('fn:preset', () => {
  it('should create a preset with an object definition', () => {
    const result = preset('preset-name', {});
    const expected = { id: 'preset-name' } satisfies PresetDefinition;

    expect(result).toEqual(expected);
    expectTypeOf(result).toMatchTypeOf<Preset>();
  });

  it('should create a preset with a generator function', () => {
    const generator = ((_context) => ({
      extends: [],
    })) satisfies PresetGenerator;
    const result = preset('preset-name', generator);

    expect(result).toEqual(generator);
    expect(typeof result).toBe('function');
    expectTypeOf(result).toMatchTypeOf<Preset>();
  });
});

describe('fn:asset', () => {
  it('should create an asset with a content object', () => {
    const content = { key: 'value' };
    const result = asset(content);

    expect(result).toEqual(content);
    expectTypeOf(result).toMatchTypeOf<PresetContent<typeof content>>();
  });

  it('should create an asset with a generator function', () => {
    const generator = (() => ({
      key: 'value',
    })) satisfies PresetContentGenerator<{ key: string }>;
    const result = asset(generator);

    expect(result).toEqual(generator);
    expectTypeOf(result).toMatchTypeOf<
      PresetContent<ReturnType<typeof generator>>
    >();
  });
});
