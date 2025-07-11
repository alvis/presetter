import { resolve } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { locateTailwindConfigFile } from '#tailwind/config';

import { posix } from '../path';

vi.mock('node:fs/promises', () => ({
  readdir: vi.fn(async (path: string) => {
    switch (posix(path)) {
      // config file directories
      case '/test/project-with-config':
        return ['package.json', 'tailwind.config.js', 'other.config.js'];
      case '/test/project-no-config':
        return ['package.json', 'vite.config.js', 'other.config.js'];

      // non-existent directories
      case '/nonexistent/project':
        throw new Error('directory not found');

      default:
        throw new Error(`missing readdir mock for ${path}`);
    }
  }),
}));

describe('fn:locateTailwindConfigFile', () => {
  it('should find tailwind config file with various extensions', async () => {
    const expected = resolve('/test/project-with-config/tailwind.config.js');

    const result = await locateTailwindConfigFile('/test/project-with-config');

    expect(result).toBe(expected);
  });

  it('should return undefined when no tailwind config file is found', async () => {
    const expected = undefined;

    const result = await locateTailwindConfigFile('/test/project-no-config');

    expect(result).toBe(expected);
  });

  it('should return undefined when directory cannot be read', async () => {
    const expected = undefined;

    const result = await locateTailwindConfigFile('/nonexistent/project');

    expect(result).toBe(expected);
  });
});
