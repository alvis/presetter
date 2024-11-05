import { describe, expect, it } from 'vitest';

import { serializeContent } from '#io';

describe('fn:serializeContent', () => {
  it('treat string as a string', () => {
    expect(serializeContent('/path/to/config.json', '{ "json": true }'));
  });

  it('convert an object to a json format', () => {
    expect(serializeContent('/path/to/config.json', { json: true })).toEqual(
      '{\n  "json": true\n}',
    );
  });

  it('convert an object to a yaml format', () => {
    expect(serializeContent('/path/to/config.yaml', { yaml: true })).toEqual(
      'yaml: true\n',
    );
  });
});
