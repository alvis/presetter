import { describe, expect, it } from 'vitest';

import { buildEsmFile, serialize } from '#serialization';

describe('buildEsmFile', () => {
  it('should generate ES module content with named and default exports', () => {
    const exportList = ['default', 'namedExport'];

    const result = buildEsmFile(exportList);

    const expectedOutput = [
      `import { resolve } from 'presetter';`,
      '',
      `const assets = await resolve(import.meta.url);`,
      '',
      `export default assets.default;`,
      `export const namedExport = assets.namedExport;`,
    ].join('\n');

    expect(result).toEqual(expectedOutput);
  });

  it('should generate ES module content with only default export', () => {
    const exportList = ['default'];

    const result = buildEsmFile(exportList);

    const expectedOutput = [
      `import { resolve } from 'presetter';`,
      '',
      `const assets = await resolve(import.meta.url);`,
      '',
      `export default assets.default;`,
    ].join('\n');

    expect(result).toEqual(expectedOutput);
  });

  it('should generate ES module content with only named exports', () => {
    const exportList = ['namedExport'];

    const result = buildEsmFile(exportList);

    const expectedOutput = [
      `import { resolve } from 'presetter';`,
      '',
      `const assets = await resolve(import.meta.url);`,
      '',
      `export const namedExport = assets.namedExport;`,
    ].join('\n');

    expect(result).toEqual(expectedOutput);
  });
});

describe('fn:serialize', () => {
  it('should return Buffer content as is', () => {
    const content = Buffer.from('buffer content');
    const result = serialize('/path/to/file.bin', content);
    expect(result).toEqual(content);
  });

  it('should convert an object to JSON format', () => {
    const content = { json: true };
    const result = serialize('/path/to/config.json', content);
    const expected = JSON.stringify(content, null, 2);
    expect(result).toEqual(expected);
  });

  it('should convert an object to YAML format', () => {
    const content = { yaml: true };
    const result = serialize('/path/to/config.yaml', content);
    const expected = 'yaml: true\n';
    expect(result).toEqual(expected);
  });

  it('should generate dynamic ES module content', () => {
    const content = { default: 'defaultExport', named: 'namedExport' };
    const result = serialize('/path/to/module.js', content);
    const expected = [
      `import { resolve } from 'presetter';`,
      '',
      `const assets = await resolve(import.meta.url);`,
      '',
      `export default assets.default;`,
      `export const named = assets.named;`,
    ].join('\n');
    expect(result).toEqual(expected);
  });

  it('should join array content with newlines', () => {
    const content = ['line1', 'line2', 'line3'];
    const result = serialize('/path/to/.gitignore', content);
    const expected = content.join('\n');
    expect(result).toEqual(expected);
  });

  it('should convert an object to JSON format for non-.json extensions', () => {
    const content = { json: true };
    const result = serialize('/path/to/.prettierrc', content);
    const expected = JSON.stringify(content, null, 2);
    expect(result).toEqual(expected);
  });
});
