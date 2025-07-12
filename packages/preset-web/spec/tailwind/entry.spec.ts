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

      // recursive import test files
      case '/test/recursive/src/main.css':
        return '@import "./base.css";\n.main { color: blue; }';
      case '/test/recursive/src/base.css':
        return '@import "tailwindcss";\n.base { margin: 0; }';

      case '/test/recursive/deep/src/entry.css':
        return '@import "./level1.css";\n.entry { padding: 10px; }';
      case '/test/recursive/deep/src/level1.css':
        return '@import "./level2.css";\n.level1 { font-size: 14px; }';
      case '/test/recursive/deep/src/level2.css':
        return '@import "tailwindcss";\n.level2 { color: green; }';

      case '/test/recursive/no-tailwind/src/main.css':
        return '@import "./other.css";\n.main { color: red; }';
      case '/test/recursive/no-tailwind/src/other.css':
        return '@import "./another.css";\n.other { background: white; }';
      case '/test/recursive/no-tailwind/src/another.css':
        return '.another { border: 1px solid black; }';

      case '/test/recursive/with-url/src/main.css':
        return '@import "https://fonts.googleapis.com/css2?family=Inter";\n@import "./local.css";';
      case '/test/recursive/with-url/src/local.css':
        return '@import "tailwindcss";\n.local { font-family: Inter; }';

      case '/test/recursive/circular/src/a.css':
        return '@import "./b.css";\n.a { color: red; }';
      case '/test/recursive/circular/src/b.css':
        return '@import "./a.css";\n.b { color: blue; }';

      case '/test/recursive/missing-import/src/missing-import.css':
        return '@import "./nonexistent.css";\n.main { color: black; }';

      // files that cause errors during processing
      case '/test/error/src/main.css':
        throw new Error('permission denied');

      // non-existent files
      case '/test/nonexistent.css':
      case '/test/recursive/nonexistent.css':
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
      case '/test/recursive/src':
        return ['main.css'];
      case '/test/recursive/deep/src':
        return ['entry.css'];
      case '/test/recursive/no-tailwind/src':
        return ['main.css'];
      case '/test/recursive/with-url/src':
        return ['main.css'];
      case '/test/recursive/circular/src':
        return ['a.css'];
      case '/test/recursive/missing-import/src':
        return ['missing-import.css'];
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
      case '/test/recursive/.storybook':
      case '/test/recursive/source':
      case '/test/recursive/app':
      case '/test/recursive/styles':
      case '/test/recursive/assets':
      case '/test/recursive/public':
      case '/test/recursive/static':
      case '/test/recursive/deep/.storybook':
      case '/test/recursive/deep/source':
      case '/test/recursive/deep/app':
      case '/test/recursive/deep/styles':
      case '/test/recursive/deep/assets':
      case '/test/recursive/deep/public':
      case '/test/recursive/deep/static':
      case '/test/recursive/no-tailwind/.storybook':
      case '/test/recursive/no-tailwind/source':
      case '/test/recursive/no-tailwind/app':
      case '/test/recursive/no-tailwind/styles':
      case '/test/recursive/no-tailwind/assets':
      case '/test/recursive/no-tailwind/public':
      case '/test/recursive/no-tailwind/static':
      case '/test/recursive/with-url/.storybook':
      case '/test/recursive/with-url/source':
      case '/test/recursive/with-url/app':
      case '/test/recursive/with-url/styles':
      case '/test/recursive/with-url/assets':
      case '/test/recursive/with-url/public':
      case '/test/recursive/with-url/static':
      case '/test/recursive/circular/.storybook':
      case '/test/recursive/circular/source':
      case '/test/recursive/circular/app':
      case '/test/recursive/circular/styles':
      case '/test/recursive/circular/assets':
      case '/test/recursive/circular/public':
      case '/test/recursive/circular/static':
      case '/test/recursive/missing-import/.storybook':
      case '/test/recursive/missing-import/source':
      case '/test/recursive/missing-import/app':
      case '/test/recursive/missing-import/styles':
      case '/test/recursive/missing-import/assets':
      case '/test/recursive/missing-import/public':
      case '/test/recursive/missing-import/static':
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

  it('should detect tailwind import through one level of local imports', async () => {
    const expected = resolve('/test/recursive/src/main.css');

    const result = await locateTailwindEntryFile('/test/recursive');

    expect(result).toBe(expected);
  });

  it('should detect tailwind import through multiple levels of local imports', async () => {
    const expected = resolve('/test/recursive/deep/src/entry.css');

    const result = await locateTailwindEntryFile('/test/recursive/deep');

    expect(result).toBe(expected);
  });

  it('should return undefined when recursive imports do not contain tailwind', async () => {
    const expected = undefined;

    const result = await locateTailwindEntryFile('/test/recursive/no-tailwind');

    expect(result).toBe(expected);
  });

  it('should skip URL imports and only follow local imports', async () => {
    const expected = resolve('/test/recursive/with-url/src/main.css');

    const result = await locateTailwindEntryFile('/test/recursive/with-url');

    expect(result).toBe(expected);
  });

  it('should handle circular imports without infinite loops', async () => {
    const expected = undefined;

    const result = await locateTailwindEntryFile('/test/recursive/circular');

    expect(result).toBe(expected);
  });

  it('should handle missing imported files gracefully', async () => {
    const expected = undefined;

    const result = await locateTailwindEntryFile(
      '/test/recursive/missing-import',
    );

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
