import { describe, expect, it, vi } from 'vitest';

import { locateTailwindConfigFile } from '#tailwind/config';

const { readdir } = vi.hoisted(() => ({
  readdir: vi.fn(async (path: string) => {
    switch (path) {
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

vi.mock('node:fs/promises', () => ({
  readdir,
}));

describe('fn:locateTailwindConfigFile', () => {
  it('should find tailwind config file with various extensions', async () => {
    const expected = '/test/project-with-config/tailwind.config.js';

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
