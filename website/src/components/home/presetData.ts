/** groups shown by the homepage preset picker, in display order */
export type PresetGroup =
  | 'foundation'
  | 'module-systems'
  | 'runtimes'
  | 'extensions'
  | 'frameworks';

export interface Preset {
  /** short id, also used as the import identifier in generated configs */
  id: string;
  /** npm package that ships the preset */
  packageName: string;
  /** picker group the preset is listed under */
  group: PresetGroup;
  /** one-line summary shown under the id */
  summary: string;
}

/** a heading in the preset picker */
export interface PresetGroupInfo {
  /** group the heading collects */
  id: PresetGroup;
  /** heading text */
  label: string;
}

export const presetGroups: readonly PresetGroupInfo[] = [
  { id: 'foundation', label: 'Foundation' },
  { id: 'module-systems', label: 'Module systems' },
  { id: 'runtimes', label: 'Runtimes' },
  { id: 'extensions', label: 'Extensions' },
  { id: 'frameworks', label: 'Frameworks' },
];

export const presets: readonly Preset[] = [
  {
    id: 'essentials',
    packageName: '@presetter/preset-essentials',
    group: 'foundation',
    summary: 'Complete TypeScript toolkit',
  },
  {
    id: 'monorepo',
    packageName: '@presetter/preset-monorepo',
    group: 'foundation',
    summary: 'Multi-package repositories',
  },
  {
    id: 'esm',
    packageName: '@presetter/preset-esm',
    group: 'module-systems',
    summary: 'ESM-first development',
  },
  {
    id: 'cjs',
    packageName: '@presetter/preset-cjs',
    group: 'module-systems',
    summary: 'CommonJS compatibility',
  },
  {
    id: 'hybrid',
    packageName: '@presetter/preset-hybrid',
    group: 'module-systems',
    summary: 'Dual CJS/ESM packages',
  },
  {
    id: 'node',
    packageName: '@presetter/preset-node',
    group: 'runtimes',
    summary: 'Node.js runtime types',
  },
  {
    id: 'bun',
    packageName: '@presetter/preset-bun',
    group: 'runtimes',
    summary: 'Bun runtime and build flow',
  },
  {
    id: 'strict',
    packageName: '@presetter/preset-strict',
    group: 'extensions',
    summary: 'Security + 100% coverage',
  },
  {
    id: 'web',
    packageName: '@presetter/preset-web',
    group: 'extensions',
    summary: 'Browser globals, Tailwind lint',
  },
  {
    id: 'react',
    packageName: '@presetter/preset-react',
    group: 'extensions',
    summary: 'React and TSX tooling',
  },
  {
    id: 'storybook',
    packageName: '@presetter/preset-storybook',
    group: 'extensions',
    summary: 'Storybook workflow',
  },
  {
    id: 'rollup',
    packageName: '@presetter/preset-rollup',
    group: 'extensions',
    summary: 'Library bundling',
  },
  {
    // NOTE: extends esm, node, strict, web and react
    id: 'next',
    packageName: '@presetter/preset-next',
    group: 'frameworks',
    summary: 'Next.js full-stack',
  },
];
