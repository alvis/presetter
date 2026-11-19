/** key under which the template provides the directory of `vitest.config.ts` */
export const PROVIDE_KEY = 'presetter:config-directory';

declare module 'vitest' {
  interface ProvidedContext {
    /** directory of the project's `vitest.config.ts`, provided by the essentials template */
    [PROVIDE_KEY]?: string;
  }
}
