declare module '@eslint-community/eslint-plugin-eslint-comments' {
  import type { Linter } from 'eslint';

  const plugin: {
    configs: {
      recommended: {
        rules: Linter.RulesRecord;
      };
    };
    rules: Linter.RulesRecord;
  };
  export default plugin;
}
