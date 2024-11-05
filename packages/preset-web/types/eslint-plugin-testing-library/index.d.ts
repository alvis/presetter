import type { ESLint, Linter } from 'eslint';

export default declare as ESLint.Plugin & {
  configs: {
    'flat/dom': {
      plugins: Linter.PluginsRecord;
      rules: Linter.RulesRecord;
    };
    'flat/react': {
      plugins: Linter.PluginsRecord;
      rules: Linter.RulesRecord;
    };
    'dom': {
      plugins: string[];
      rules: Linter.RulesRecord;
    };
    'react': {
      plugins: string[];
      rules: Linter.RulesRecord;
    };
  };
  rules: Linter.RulesRecord;
};
