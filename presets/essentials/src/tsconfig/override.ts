import { asset } from '@presetter/types';

import type { TsConfigJson } from 'type-fest';

const TYPES_SCOPE = '@types/';

export default asset<TsConfigJson>((current, { packageJson }) => {
  // NOTE: TypeScript 6 and later load no ambient type packages unless `types` lists them
  const types = Object.keys(packageJson.devDependencies ?? {})
    .filter((name) => name.startsWith(TYPES_SCOPE))
    .map((name) => name.slice(TYPES_SCOPE.length));

  return types.length > 0
    ? {
        ...current,
        compilerOptions: {
          ...current?.compilerOptions,
          types: [
            ...new Set([...(current?.compilerOptions?.types ?? []), ...types]),
          ],
        },
      }
    : current;
});
