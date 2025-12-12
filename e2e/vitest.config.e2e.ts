import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    watch: false,
    // auto reset mocks and stubs
    mockReset: true,
    unstubEnvs: true,
    unstubGlobals: true,
    include: ['*.spec.e2e.ts'],
    testTimeout: 60000,
    hookTimeout: 60000,
    globalSetup: 'setup.ts',
  },
});
