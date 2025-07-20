import { resolve } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { locateTailwindEntryFile } from '#tailwind/entry';

import { posix } from '../path';

// mock file contents
const mockFileContents: Record<string, string> = {
  // files containing tailwindcss import
  '/test/file.css':
    '// some comments\n@import  "tailwindcss";\n// some other comments',
  '/test/dir/index.css': '@import "tailwindcss";',
  '/test/dir-priority/main.css': '@import "tailwindcss";',
  '/test/project/src/index.css': '@import "tailwindcss";',
  '/test/project-root/tailwind.css': '@import "tailwindcss";',

  // files with other imports
  '/test/file-no-tailwind.css': '@import "some-other-library";',

  // files with regular CSS (no tailwind)
  '/test/dir/styles.css': '.class { color: red; }',
  '/test/dir/other.css': '.class { color: red; }',
  '/test/dir-no-tailwind/index.css': '.class { color: red; }',
  '/test/dir-no-tailwind/styles.css': '.class { color: red; }',

  // recursive import test files
  '/test/recursive/src/main.css':
    '@import "./base.css";\n.main { color: blue; }',
  '/test/recursive/src/base.css':
    '@import "tailwindcss";\n.base { margin: 0; }',
  '/test/recursive/deep/src/entry.css':
    '@import "./level1.css";\n.entry { padding: 10px; }',
  '/test/recursive/deep/src/level1.css':
    '@import "./level2.css";\n.level1 { font-size: 14px; }',
  '/test/recursive/deep/src/level2.css':
    '@import "tailwindcss";\n.level2 { color: green; }',
  '/test/recursive/no-tailwind/src/main.css':
    '@import "./other.css";\n.main { color: red; }',
  '/test/recursive/no-tailwind/src/other.css':
    '@import "./another.css";\n.other { background: white; }',
  '/test/recursive/no-tailwind/src/another.css':
    '.another { border: 1px solid black; }',
  '/test/recursive/with-url/src/main.css':
    '@import "https://fonts.googleapis.com/css2?family=Inter";\n@import "./local.css";',
  '/test/recursive/with-url/src/local.css':
    '@import "tailwindcss";\n.local { font-family: Inter; }',
  '/test/recursive/circular/src/a.css':
    '@import "./b.css";\n.a { color: red; }',
  '/test/recursive/circular/src/b.css':
    '@import "./a.css";\n.b { color: blue; }',
  '/test/recursive/missing-import/src/missing-import.css':
    '@import "./nonexistent.css";\n.main { color: black; }',

  // module import test files
  '/test/module-import/src/main.css':
    '@import "@theriety/web/base.css";\n.main { color: purple; }',
  '/fake/node_modules/@theriety/web/base.css':
    '@import "tailwindcss";\n.base { margin: 0; }',
  '/test/module-import-nested/src/entry.css':
    '@import "@acme/design-system/styles.css";\n.entry { padding: 5px; }',
  '/fake/node_modules/@acme/design-system/styles.css':
    '@import "./components.css";\n.styles { background: white; }',
  '/fake/node_modules/@acme/design-system/components.css':
    '@import "tailwindcss";\n.components { border: 1px solid; }',
  '/test/module-import-no-tailwind/src/main.css':
    '@import "@external/lib/theme.css";\n.main { color: black; }',
  '/fake/node_modules/@external/lib/theme.css': '.theme { font-size: 16px; }',
  '/test/module-import-mixed/src/app.css':
    '@import "./local.css";\n@import "@pkg/styles/base.css";\n.app { display: flex; }',
  '/test/module-import-mixed/src/local.css':
    '@import "@pkg/styles/base.css";\n.local { margin: 10px; }',
  '/fake/node_modules/@pkg/styles/base.css':
    '@import "tailwindcss";\n.base { padding: 0; }',
  '/test/module-import-error/src/main.css':
    '@import "@unresolvable/module";\n.main { color: red; }',
  '/test/module-import-error/src/fallback.css':
    '@import "tailwindcss";\n.fallback { color: blue; }',
  '/test/bare-module-import/src/main.css':
    '@import "some-css-library";\\n.main { color: orange; }',
  '/fake/node_modules/some-css-library/index.css':
    '@import "tailwindcss";\\n.library { font-weight: bold; }',
};

// mock directory contents
const directoryContents: Record<string, string[]> = {
  '/test/dir': ['index.css', 'styles.css', 'other.css'],
  '/test/dir-priority': ['app.css', 'main.css', 'styles.css'],
  '/test/dir-no-tailwind': ['index.css', 'styles.css'],
  '/test/project/src': ['index.css'],
  '/test/project-root': ['tailwind.css'],
  '/test/recursive/src': ['main.css'],
  '/test/recursive/deep/src': ['entry.css'],
  '/test/recursive/no-tailwind/src': ['main.css'],
  '/test/recursive/with-url/src': ['main.css'],
  '/test/recursive/circular/src': ['a.css'],
  '/test/recursive/missing-import/src': ['missing-import.css'],
  '/test/error/src': ['main.css'],
  '/test/module-import/src': ['main.css'],
  '/test/module-import-nested/src': ['entry.css'],
  '/test/module-import-no-tailwind/src': ['main.css'],
  '/test/module-import-mixed/src': ['app.css'],
  '/test/module-import-error/src': ['main.css', 'fallback.css'],
  '/test/bare-module-import/src': ['main.css'],
  '/test/dir-no-css': ['index.js', 'styles.txt'],
};

const errorFiles = new Set([
  '/test/error/src/main.css',
  '/test/nonexistent.css',
  '/test/recursive/nonexistent.css',
]);

// mock module resolutions
const moduleResolutions: Record<string, string> = {
  '@theriety/web/base.css': 'file:///fake/node_modules/@theriety/web/base.css',
  '@acme/design-system/styles.css':
    'file:///fake/node_modules/@acme/design-system/styles.css',
  '@external/lib/theme.css':
    'file:///fake/node_modules/@external/lib/theme.css',
  '@pkg/styles/base.css': 'file:///fake/node_modules/@pkg/styles/base.css',
  'some-css-library': 'file:///fake/node_modules/some-css-library/index.css',
};

vi.mock('node:fs/promises', () => ({
  readFile: vi.fn(async (path: string) => {
    const normalizedPath = posix(path);

    if (errorFiles.has(normalizedPath)) {
      throw new Error(
        normalizedPath === '/test/error/src/main.css'
          ? 'permission denied'
          : 'file not found',
      );
    }

    return mockFileContents[normalizedPath] || '.class { color: red; }';
  }),
  readdir: vi.fn(async (path: string) => {
    const normalizedPath = posix(path);

    if (normalizedPath in directoryContents) {
      return directoryContents[normalizedPath];
    }

    // generate non-existent directory paths
    const testPaths = [
      'recursive',
      'recursive/deep',
      'recursive/no-tailwind',
      'recursive/with-url',
      'recursive/circular',
      'recursive/missing-import',
      'module-import',
      'module-import-nested',
      'module-import-no-tailwind',
      'module-import-mixed',
      'module-import-error',
      'bare-module-import',
      'project',
      'project-root',
    ];
    const subDirs = [
      '.storybook',
      'source',
      'src',
      'app',
      'styles',
      'assets',
      'public',
      'static',
    ];

    const isNonExistentDir = testPaths.some((testPath) => {
      return subDirs.some(
        (subDir) =>
          normalizedPath === `/test/${testPath}/${subDir}` ||
          normalizedPath === `/nonexistent/dir` ||
          normalizedPath === `/nonexistent/project`,
      );
    });

    if (isNonExistentDir) {
      throw new Error('directory not found');
    }

    throw new Error(`missing readdir mock for ${path}`);
  }),
}));

vi.mock('#module', () => ({
  resolveModule: vi.fn((specifier: string, _parent?: string | URL) => {
    if (specifier === '@unresolvable/module') {
      throw new Error(`Cannot resolve module "${specifier}"`);
    }

    if (moduleResolutions[specifier]) {
      return moduleResolutions[specifier];
    }

    throw new Error(`Cannot resolve module "${specifier}"`);
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

  it('should detect tailwind import through module imports', async () => {
    const expected = resolve('/test/module-import/src/main.css');

    const result = await locateTailwindEntryFile('/test/module-import');

    expect(result).toBe(expected);
  });

  it('should detect tailwind import through nested module imports', async () => {
    const expected = resolve('/test/module-import-nested/src/entry.css');

    const result = await locateTailwindEntryFile('/test/module-import-nested');

    expect(result).toBe(expected);
  });

  it('should return undefined when module imports do not contain tailwind', async () => {
    const expected = undefined;

    const result = await locateTailwindEntryFile(
      '/test/module-import-no-tailwind',
    );

    expect(result).toBe(expected);
  });

  it('should detect tailwind import through mixed local and module imports', async () => {
    const expected = resolve('/test/module-import-mixed/src/app.css');

    const result = await locateTailwindEntryFile('/test/module-import-mixed');

    expect(result).toBe(expected);
  });

  it('should skip unresolvable module imports and continue to find tailwind', async () => {
    const expected = resolve('/test/module-import-error/src/fallback.css');

    const result = await locateTailwindEntryFile('/test/module-import-error');

    expect(result).toBe(expected);
  });

  it('should detect tailwind import through bare module imports (no @ or ./ prefix)', async () => {
    const expected = resolve('/test/bare-module-import/src/main.css');

    const result = await locateTailwindEntryFile('/test/bare-module-import');

    expect(result).toBe(expected);
  });
});
