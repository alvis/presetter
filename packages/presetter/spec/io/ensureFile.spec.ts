import { mkdirSync, writeFileSync } from 'node:fs';

import { describe, expect, it, vi } from 'vitest';

import { ensureFile } from '#io';

vi.mock('node:fs', () => ({
  mkdirSync: vi.fn(),
  writeFileSync: vi.fn(),
}));

describe('fn:ensureFile', () => {
  it('should create a file with the given content', () => {
    ensureFile('/path/to/file.txt', 'file content');

    expect(mkdirSync).toHaveBeenCalledWith('/path/to', { recursive: true });
    expect(writeFileSync).toHaveBeenCalledWith(
      '/path/to/file.txt',
      'file content',
    );
  });

  it('should create a file with buffer content', () => {
    const bufferContent = Buffer.from('buffer content');
    ensureFile('/path/to/file.txt', bufferContent);

    expect(mkdirSync).toHaveBeenCalledWith('/path/to', { recursive: true });
    expect(writeFileSync).toHaveBeenCalledWith(
      '/path/to/file.txt',
      bufferContent,
    );
  });
});
