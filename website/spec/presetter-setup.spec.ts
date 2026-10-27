import assert from 'node:assert/strict';
import { test } from 'node:test';

import { buildPresetConfig, buildUseCommand } from '#presetter-setup';

void test('adoption commands launch use with the supported manager fallback', () => {
  const stack = ['@presetter/preset-esm', '@presetter/preset-react'];

  assert.equal(
    buildUseCommand(stack),
    'npx presetter use @presetter/preset-esm @presetter/preset-react',
  );
  assert.equal(
    buildUseCommand(stack, 'npm'),
    'npx presetter use @presetter/preset-esm @presetter/preset-react --package-manager=npm',
  );
  assert.equal(
    buildUseCommand(stack, 'pnpm'),
    'pnpm dlx presetter use @presetter/preset-esm @presetter/preset-react --package-manager=pnpm',
  );
  assert.equal(
    buildUseCommand(stack, 'bun'),
    'bunx presetter use @presetter/preset-esm @presetter/preset-react --package-manager=bun',
  );
});

void test('an empty picker does not suggest an invalid zero-preset use command', () => {
  assert.equal(buildUseCommand([]), '# pick at least one preset');
  assert.equal(buildPresetConfig([]), '// pick at least one preset');
});

void test('config previews preserve composition order and use the project package name', () => {
  const config = buildPresetConfig([
    '@presetter/preset-react',
    '@presetter/preset-esm',
  ]);

  assert.ok(
    config.indexOf("import preset0 from '@presetter/preset-react'") <
      config.indexOf("import preset1 from '@presetter/preset-esm'"),
  );
  assert.ok(
    config.includes(
      "import { name } from './package.json' with { type: 'json' };",
    ),
  );
  assert.ok(
    config.includes(
      'export default preset(name, {\n  extends: [preset0, preset1],',
    ),
  );
});
