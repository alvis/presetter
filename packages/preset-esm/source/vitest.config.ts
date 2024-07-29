import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: { target: 'es2022' }, // required for using `using` statement
  plugins: [tsconfigPaths()],
  test: {
    watch: false,
    // auto clear mocks and stubs
    clearMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
    coverage: {
      all: true,
      clean: true,
      ignoreEmptyLines: true,
      include: ['**/source/**'],
      provider: 'v8',
      reporter: ['text', 'html', 'clover', 'json', 'lcov'],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  },
});
