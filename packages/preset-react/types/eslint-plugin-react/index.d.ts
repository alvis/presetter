import type { ESLint, Linter } from 'eslint';

export default declare as ESLint.Plugin & {
  configs: {
    'all': {
      plugins: Linter.PluginsRecord;
      languageOptions: Linter.LanguageOptions;
      rules: Linter.RulesRecord;
    };
    'jsx-runtime': {
      plugins: Linter.PluginsRecord;
      languageOptions: Linter.LanguageOptions;
      rules: Linter.RulesRecord;
    };
    'recommended': {
      plugins: Linter.PluginsRecord;
      languageOptions: Linter.LanguageOptions;
      rules: Linter.RulesRecord;
    };
    'flat': {
      'all': {
        plugins: Linter.PluginsRecord;
        languageOptions: Linter.LanguageOptions;
        rules: Linter.RulesRecord;
      };
      'jsx-runtime': {
        plugins: Linter.PluginsRecord;
        languageOptions: Linter.LanguageOptions;
        rules: Linter.RulesRecord;
      };
      'recommended': {
        plugins: Linter.PluginsRecord;
        languageOptions: Linter.LanguageOptions;
        rules: Linter.RulesRecord;
      };
    };
  };
  rules: Linter.RulesRecord;
};
