import esm from '@presetter/preset-esm';
import react from '@presetter/preset-react';
import web from '@presetter/preset-web';
import { preset } from 'presetter';

export default preset('presetter-website', {
  extends: [esm, web, react],
  variables: {
    output: 'build',
  },
  assets: {
    '.gitignore': ['lighthouserc.json'],
    'lighthouserc.json': {
      ci: {
        collect: {
          staticDistDir: './build',
          numberOfRuns: 1,
          url: [
            'http://localhost/',
            'http://localhost/docs/',
            'http://localhost/docs/tutorials/',
            'http://localhost/docs/api/',
            'http://localhost/docs/presets/',
          ],
        },
        assert: {
          assertions: {
            'categories:performance': ['warn', { minScore: 0.9 }],
            'categories:accessibility': ['error', { minScore: 0.9 }],
            'categories:best-practices': ['warn', { minScore: 0.9 }],
            'categories:seo': ['error', { minScore: 0.9 }],
          },
        },
      },
    },
  },
  override: {
    assets: {
      '.gitignore': ['/.docusaurus'],
      '.lintstagedrc.json': null,
      '.npmignore': null,
      '.prettierrc.json': null,
      'types/image.d.ts': null,
      'types/style.d.ts': null,
      'tsconfig.build.json': null,
      'tsconfig.json': {
        extends: ['@docusaurus/tsconfig'],
        exclude: ['.docusaurus'],
        compilerOptions: {
          ignoreDeprecations: '6.0',
        },
      },
      'vitest.config.ts': null,
    },
  },
});
