import type { Linter } from 'eslint';

export default declare as {
  recommended: {
    plugins: Linter.PluginsRecord;
    rules: Linter.RulesRecord;
  };
};
