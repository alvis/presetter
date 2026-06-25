export type PresetCategory =
  | 'foundation'
  | 'runtimes'
  | 'module-systems'
  | 'frameworks'
  | 'bundling'
  | 'quality';

export interface Preset {
  id: string;
  name: string;
  description: string;
  category: PresetCategory;
  features: string[];
  dependencies: string[];
  useCases: string[];
  packageName: string;
  size: 'small' | 'medium' | 'large';
  complexity: 'beginner' | 'intermediate' | 'advanced';
}

export const presetCategoryLabels: Record<PresetCategory, string> = {
  'foundation': 'Foundation',
  'runtimes': 'Runtime',
  'frameworks': 'Framework',
  'module-systems': 'Modules',
  'bundling': 'Bundling',
  'quality': 'Quality',
};

export const presets: Preset[] = [
  {
    id: 'essentials',
    name: 'Essentials',
    description: 'Core TypeScript development tools and configurations',
    category: 'foundation',
    features: ['TypeScript', 'ESLint', 'Prettier', 'Vitest', 'Basic build'],
    dependencies: [],
    useCases: [
      'New TypeScript projects',
      'Foundation for other presets',
      'Learning Presetter',
    ],
    packageName: '@presetter/preset-essentials',
    size: 'medium',
    complexity: 'beginner',
  },
  {
    id: 'react',
    name: 'React',
    description: 'React and TSX-focused TypeScript tooling',
    category: 'frameworks',
    features: ['React', 'TypeScript', 'Vitest', 'ESLint'],
    dependencies: [],
    useCases: [
      'React applications',
      'Component libraries',
      'Single-page applications',
    ],
    packageName: '@presetter/preset-react',
    size: 'large',
    complexity: 'intermediate',
  },
  {
    id: 'web',
    name: 'Web',
    description:
      'Browser globals, DOM typings, TailwindCSS linting, and static asset typings',
    category: 'frameworks',
    features: [
      'TailwindCSS linting',
      'Browser TypeScript',
      'Image module types',
      'Style module types',
    ],
    dependencies: [],
    useCases: ['Component libraries', 'Design systems', 'Web applications'],
    packageName: '@presetter/preset-web',
    size: 'large',
    complexity: 'intermediate',
  },
  {
    id: 'cjs',
    name: 'CommonJS',
    description:
      'CommonJS module configuration for Node.js and legacy compatibility',
    category: 'module-systems',
    features: [
      'CommonJS output',
      'Node.js compatibility',
      'Legacy support',
      'TypeScript',
    ],
    dependencies: ['essentials'],
    useCases: [
      'Node.js packages',
      'Legacy compatibility',
      'CommonJS consumers',
    ],
    packageName: '@presetter/preset-cjs',
    size: 'small',
    complexity: 'beginner',
  },
  {
    id: 'esm',
    name: 'ES Modules',
    description:
      'Modern ES module library configuration with dual package support',
    category: 'module-systems',
    features: [
      'Rollup',
      'ES modules',
      'CJS fallback',
      'Tree shaking',
      'Type declarations',
    ],
    dependencies: ['essentials'],
    useCases: [
      'NPM libraries',
      'ES module packages',
      'Tree-shakeable libraries',
    ],
    packageName: '@presetter/preset-esm',
    size: 'medium',
    complexity: 'intermediate',
  },
  {
    id: 'hybrid',
    name: 'Hybrid Modules',
    description: 'Dual CJS/ESM package support for maximum compatibility',
    category: 'module-systems',
    features: [
      'Dual build',
      'CJS support',
      'ES modules',
      'Conditional exports',
    ],
    dependencies: ['essentials'],
    useCases: [
      'Libraries needing broad compatibility',
      'Migration from CJS',
      'Enterprise packages',
    ],
    packageName: '@presetter/preset-hybrid',
    size: 'large',
    complexity: 'advanced',
  },
  {
    id: 'rollup',
    name: 'Rollup',
    description: 'Library bundling for production-ready package distribution',
    category: 'bundling',
    features: [
      'Rollup 4',
      'Dual output',
      'Asset support',
      'Bundle optimization',
    ],
    dependencies: ['essentials'],
    useCases: [
      'TypeScript libraries',
      'Package distribution',
      'Build optimization',
    ],
    packageName: '@presetter/preset-rollup',
    size: 'medium',
    complexity: 'intermediate',
  },
  {
    id: 'monorepo',
    name: 'Monorepo',
    description: 'Multi-package workspace management and shared configurations',
    category: 'quality',
    features: [
      'Workspace management',
      'Shared configs',
      'Cross-package builds',
      'Dependency management',
    ],
    dependencies: ['essentials'],
    useCases: [
      'Multi-package projects',
      'Shared libraries',
      'Enterprise monorepos',
    ],
    packageName: '@presetter/preset-monorepo',
    size: 'large',
    complexity: 'advanced',
  },
  {
    id: 'strict',
    name: 'Strict Mode',
    description:
      'Enhanced code quality with stricter TypeScript and ESLint rules',
    category: 'quality',
    features: [
      'Strict TypeScript',
      'Enhanced ESLint',
      'Import sorting',
      'Unused code detection',
    ],
    dependencies: [],
    useCases: [
      'High-quality codebases',
      'Team standards',
      'Production applications',
    ],
    packageName: '@presetter/preset-strict',
    size: 'small',
    complexity: 'intermediate',
  },
  {
    id: 'node',
    name: 'Node.js',
    description: 'Standalone Node-tuned TypeScript configuration',
    category: 'runtimes',
    features: ['Node ambient types', 'TypeScript config'],
    dependencies: [],
    useCases: ['Node.js services', 'CLIs on npm', 'Server-side libraries'],
    packageName: '@presetter/preset-node',
    size: 'small',
    complexity: 'beginner',
  },
  {
    id: 'bun',
    name: 'Bun',
    description:
      'Standalone Bun preset with bun build scripts and Bun ambient types',
    category: 'runtimes',
    features: [
      'Bun ambient types',
      'bun build scripts',
      'Standalone preset',
      'Bytecode compile',
    ],
    dependencies: [],
    useCases: ['Bun HTTP services', 'Bun CLIs', 'Edge workloads'],
    packageName: '@presetter/preset-bun',
    size: 'small',
    complexity: 'intermediate',
  },
  {
    id: 'storybook',
    name: 'Storybook',
    description:
      'Standalone Storybook configuration with a11y and Vitest browser testing',
    category: 'frameworks',
    features: [
      'Storybook config',
      'a11y addon',
      'Vitest browser project',
      'ESLint story rules',
      'Playwright runner',
    ],
    dependencies: [],
    useCases: [
      'Component documentation',
      'UI workshops',
      'Story-driven testing',
    ],
    packageName: '@presetter/preset-storybook',
    size: 'medium',
    complexity: 'intermediate',
  },
];
