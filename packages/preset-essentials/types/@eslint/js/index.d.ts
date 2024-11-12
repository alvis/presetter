import type { Linter } from 'eslint';

export default declare as {
  configs: {
    all: {
      rules: Linter.RulesRecord;
    };
    recommended: {
      rules: Linter.RulesRecord;
    };
  };
  rules: Linter.RulesRecord;
};
