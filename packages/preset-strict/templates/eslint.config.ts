import presetConfig from 'presetter-preset-strict/eslint.config';

export default [
  ...presetConfig,
  {
    ignores: ['{test}/**', 'types/**', 'generated/**', '{output}/**'],
  },
];
