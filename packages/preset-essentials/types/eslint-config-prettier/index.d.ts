declare module 'eslint-config-prettier' {
  import type { Linter } from 'eslint';

  const config: {
    rules: Linter.RulesRecord;
  };
  export default config;
}
