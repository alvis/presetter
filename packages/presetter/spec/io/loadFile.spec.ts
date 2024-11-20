import { existsSync, readFileSync } from 'node:fs';

import { describe, expect, it, vi } from 'vitest';

import { loadFile } from '#io';

vi.mock('node:fs', () => ({
  existsSync: vi.fn(),
  readFileSync: vi.fn(),
}));

describe('fn:loadFile', () => {
  it('should load a json file', () => {
    vi.mocked(existsSync).mockReturnValue(true);
    vi.mocked(readFileSync).mockReturnValue(Buffer.from('{ "json": true }'));

    const result = loadFile('/path/to/config.json');
    const expected = { json: true };

    expect(result).toEqual(expected);
  });

  it('should load a yaml file', () => {
    vi.mocked(existsSync).mockReturnValue(true);
    vi.mocked(readFileSync).mockReturnValue(Buffer.from('yaml: true'));

    const result = loadFile('/path/to/config.yaml');
    const expected = { yaml: true };

    expect(result).toEqual(expected);
  });

  it('should load an ignore file', () => {
    vi.mocked(existsSync).mockReturnValue(true);
    vi.mocked(readFileSync).mockReturnValue(
      Buffer.from('line1\nline2\n#comment\nline3'),
    );

    const result = loadFile('/path/to/file.ignore');
    const expected = ['line1', 'line2', 'line3'];

    expect(result).toEqual(expected);
  });

  it('should load an arbitrary file', () => {
    const buffer = Buffer.from('file content');

    vi.mocked(existsSync).mockReturnValue(true);
    vi.mocked(readFileSync).mockReturnValue(buffer);

    const result = loadFile('/path/to/file.txt');
    const expected = buffer;

    expect(result).toEqual(expected);
  });

  it('should throw an error if the file does not exist', () => {
    vi.mocked(existsSync).mockReturnValue(false);

    expect(() => loadFile('/path/to/missing.file')).toThrow(
      'file not found: /path/to/missing.file',
    );
  });
});
