/** Package managers supported by presetter use. */
export type SetupPackageManager = 'npm' | 'pnpm' | 'bun';

/**
 * builds an adoption command for a selected preset stack
 * @param presets preset package names in composition order
 * @param manager optional fallback when the project has no manager declaration or lockfile
 * @returns the command, or a prompt when the stack is empty
 */
export function buildUseCommand(
  presets: readonly string[],
  manager?: SetupPackageManager,
): string {
  if (presets.length === 0) {
    return '# pick at least one preset';
  }

  const launcher =
    manager === 'pnpm' ? 'pnpm dlx' : manager === 'bun' ? 'bunx' : 'npx';

  return `${launcher} presetter use ${presets.join(' ')}${manager ? ` --package-manager=${manager}` : ''}`;
}

/**
 * previews the config written by use for unversioned preset package names
 * @param presets preset package names in composition order
 * @returns the generated config source
 */
export function buildPresetConfig(presets: readonly string[]): string {
  if (presets.length === 0) {
    return '// pick at least one preset';
  }

  const imports = presets
    .map((name, index) => `import preset${index} from '${name}';`)
    .join('\n');
  const references = presets.map((_, index) => `preset${index}`).join(', ');

  return `${imports}

import { preset } from 'presetter';

import { name } from './package.json' with { type: 'json' };

export default preset(name, {
  extends: [${references}],
});
`;
}
