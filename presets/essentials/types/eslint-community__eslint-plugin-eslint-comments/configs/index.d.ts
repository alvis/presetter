declare module '@eslint-community/eslint-plugin-eslint-comments/configs' {
  import type { Linter } from 'eslint';

  const configs: {
    recommended: {
      plugins: Linter.PluginsRecord;
      rules: Linter.RulesRecord;
    };
  };
  export default configs;
}
