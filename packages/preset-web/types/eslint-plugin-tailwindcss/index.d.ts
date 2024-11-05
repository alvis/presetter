import type { ESLint, Linter } from 'eslint';

export default declare as ESLint.Plugin & {
  configs: {
    'flat/recommended': [
      {
        plugins: Linter.PluginsRecord;
        languageOptions: Linter.LanguageOptions;
      },
      {
        rules: Linter.RulesRecord;
      },
    ];
    'recommended': {
      plugins: string[];
      languageOptions: Linter.LanguageOptions;
      rules: Linter.RulesRecord;
    };
  };
  rules: Linter.RulesRecord;
};
