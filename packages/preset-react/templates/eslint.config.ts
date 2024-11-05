import presetConfig from 'presetter-preset-react/eslint.config';

export default [
  ...presetConfig,
  {
    ignores: ['{test}/**', 'types/**', 'generated/**', '{output}/**'],
  },
];
