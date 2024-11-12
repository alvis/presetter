import type { ESLint, Linter } from 'eslint';

export default declare as ESLint.Plugin & {
  configs: {
    recommended: {
      parserOptions: Linter.ParserOptions;
      plugins: string[];
      rules: Linter.RulesRecord;
    };
    typescript: {
      settings: Linter.LinterConfigSettings;
      rules: Linter.RulesRecord;
    };
  };
  flatConfigs: {
    recommended: {
      languageOptions: Linter.LanguageOptions;
      rules: Linter.RulesRecord;
    };
    typescript: {
      settings: Linter.LinterConfigSettings;
      rules: Linter.RulesRecord;
    };
  };
  rules: Linter.RulesRecord;
};
