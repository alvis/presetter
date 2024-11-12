import type { Linter } from 'eslint';

export default declare as {
  configs: {
    recommended: {
      rules: Linter.RulesRecord;
    };
  };
  rules: Linter.RulesRecord;
};
