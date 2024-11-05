import presetConfig from 'presetter-preset-web/eslint.config';

export default [
  ...presetConfig,
  {
    ignores: ['{test}/**', 'types/**', 'generated/**', '{output}/**'],
  },
];
