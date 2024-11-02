import presetConfig from 'presetter-preset-esm/eslint.config';

export default [
  ...presetConfig,
  {
    ignores: ['{test}/**', 'types/**', 'generated/**', '{output}/**'],
  },
];
