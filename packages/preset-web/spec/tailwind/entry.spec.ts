import { resolve } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { locateTailwindEntryFile } from '#tailwind/entry';

import { posix } from '../path';

vi.mock('node:fs/promises', () => ({
  readFile: vi.fn(async (path: string) => {
    switch (posix(path)) {
      // files containing tailwindcss import
      case '/test/file.css':
        return '// some comments\n@import  "tailwindcss";\n// some other comments';
      case '/test/dir/index.css':
      case '/test/dir-priority/main.css':
      case '/test/project/src/index.css':
      case '/test/project-root/tailwind.css':
        return '@import "tailwindcss";';

      // files with other imports
      case '/test/file-no-tailwind.css':
        return '@import "some-other-library";';

      // files with regular CSS (no tailwind)
      case '/test/dir/styles.css':
      case '/test/dir/other.css':
      case '/test/dir-no-tailwind/index.css':
      case '/test/dir-no-tailwind/styles.css':
        return '.class { color: red; }';

      // files that cause errors during processing
      case '/test/error/src/main.css':
        throw new Error('permission denied');

      // non-existent files
      case '/test/nonexistent.css':
        throw new Error('file not found');

      default:
        return '.class { color: red; }';
    }
  }),
  readdir: vi.fn(async (path: string) => {
    switch (posix(path)) {
      // directories with CSS files
      case '/test/dir':
        return ['index.css', 'styles.css', 'other.css'];
      case '/test/dir-priority':
        return ['app.css', 'main.css', 'styles.css'];
      case '/test/dir-no-tailwind':
        return ['index.css', 'styles.css'];
      case '/test/project/src':
        return ['index.css'];
      case '/test/project-root':
        return ['tailwind.css'];
      case '/test/error/src':
        return ['main.css'];

      // directories with non-CSS files
      case '/test/dir-no-css':
        return ['index.js', 'styles.txt'];

      // non-existent directories (all throw the same error)
      case '/nonexistent/dir':
      case '/nonexistent/project':
      case '/test/project/.storybook':
      case '/test/project/source':
      case '/test/project-root/.storybook':
      case '/test/project-root/source':
      case '/test/project-root/src':
      case '/test/project-root/app':
      case '/test/project-root/styles':
      case '/test/project-root/assets':
      case '/test/project-root/public':
      case '/test/project-root/static':
        throw new Error('directory not found');

      default:
        throw new Error(`missing readdir mock for ${path}`);
    }
  }),
}));

describe('fn:locateTailwindEntryFile', () => {
  it('should find tailwind entry file in source directories', async () => {
    const expected = resolve('/test/project/src/index.css');

    const result = await locateTailwindEntryFile('/test/project');

    expect(result).toBe(expected);
  });

  it('should search in root directory when not found in source directories', async () => {
    const expected = resolve('/test/project-root/tailwind.css');

    const result = await locateTailwindEntryFile('/test/project-root');

    expect(result).toBe(expected);
  });

  it('should return undefined when no tailwind entry file is found', async () => {
    const expected = undefined;

    const result = await locateTailwindEntryFile('/test/project-not-found');

    expect(result).toBe(expected);
  });

  it('should find tailwind entry file with direct import', async () => {
    const expected = resolve('/test/dir/index.css');

    const result = await locateTailwindEntryFile('/test/dir');

    expect(result).toBe(expected);
  });

  it('should prioritize common style files over other CSS files', async () => {
    const expected = resolve('/test/dir-priority/main.css');

    const result = await locateTailwindEntryFile('/test/dir-priority');

    expect(result).toBe(expected);
  });

  it('should return undefined when directory cannot be read', async () => {
    const expected = undefined;

    const result = await locateTailwindEntryFile('/nonexistent/dir');

    expect(result).toBe(expected);
  });

  it('should return undefined when directory contains no CSS files', async () => {
    const expected = undefined;

    const result = await locateTailwindEntryFile('/test/dir-no-css');

    expect(result).toBe(expected);
  });

  it('should handle file read errors gracefully', async () => {
    const expected = undefined;

    const result = await locateTailwindEntryFile('/test/error');

    expect(result).toBe(expected);
  });
});
