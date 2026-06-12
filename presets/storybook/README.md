# @presetter/preset-storybook

Storybook configuration as a standalone Presetter preset.

```typescript
import { preset } from 'presetter';
import next from '@presetter/preset-next';
import storybook from '@presetter/preset-storybook';

export default preset('app', {
  extends: [next, storybook],
});
```

The preset generates `.storybook/main.ts`, `.storybook/preview.ts`, Storybook scripts, Storybook ESLint rules, and the `storybook` Vitest browser project.
