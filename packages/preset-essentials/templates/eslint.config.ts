import presetConfig from 'presetter-preset-essentials/eslint.config';

export default [
  ...presetConfig,
  {
    ignores: ['{test}/**', 'types/**', 'generated/**', '{output}/**'],
  },
];
