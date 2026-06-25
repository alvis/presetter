/* eslint better-tailwindcss/no-unknown-classes: off, max-lines-per-function: off, @typescript-eslint/no-magic-numbers: off */

import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';

import { useEffect, useMemo, useState } from 'react';

import { presetCategoryLabels, presets } from './presetData';
import styles from './PresetExplorer.module.css';

import type React from 'react';

import type { PresetCategory } from './presetData';

const presetsById = new Map(presets.map((preset) => [preset.id, preset]));

const TSCONFIG_JSON_EXAMPLE_WRAPPER = [
  `import { resolve } from 'presetter';`,
  '',
  `const assets = await resolve(import.meta.url);`,
  '',
  `export default assets.default;`,
].join('\n');

type CustomizationState = {
  packageName: string;
  sourceDir: string;
  outputDir: string;
  testDir: string;
  generatedDir: string;
  typesDir: string;
  target: string;
  appPath: string;
  packagePath: string;
};

type PreviewFile = {
  path: string;
  sourcePath: string;
  label: string;
  kind: string;
  language: string;
  content: string;
};

type FileTreeRow =
  | {
      id: string;
      type: 'folder';
      depth: number;
      label: string;
    }
  | {
      file: PreviewFile;
      id: string;
      type: 'file';
      depth: number;
      label: string;
    };

type AssetContent = Record<string, unknown> | string | string[] | null;

type PreviewAsset = {
  kind: string;
  language: string;
  content: Exclude<AssetContent, null>;
};

const defaultCustomizationState: CustomizationState = {
  packageName: '@acme/presetter-demo',
  sourceDir: 'src',
  outputDir: 'lib',
  testDir: 'spec',
  generatedDir: 'generated',
  typesDir: 'types',
  target: 'ES2022',
  appPath: 'apps/web',
  packagePath: 'packages/ui',
};

const ROOT_PRESET_EXTENDS: Record<string, string[]> = {
  cjs: ['essentials'],
  esm: ['essentials'],
  hybrid: ['essentials'],
  monorepo: ['essentials', 'strict'],
};

const TS_WRAPPER_ASSETS = new Set([
  'eslint.config.ts',
  'rollup.config.ts',
  'vitest.config.ts',
  '.storybook/main.ts',
]);

/**
 * Resolves selected presets into dependency-safe display order.
 * @param selectedPresetIds Preset identifiers selected by the user.
 * @returns Selected presets with dependencies included first.
 */
function resolvePresetSelection(selectedPresetIds: string[]): string[] {
  const resolvedSelection = new Set<string>();

  const visit = (presetId: string): void => {
    const preset = presetsById.get(presetId);

    if (!preset || resolvedSelection.has(presetId)) {
      return;
    }

    preset.dependencies.forEach(visit);
    resolvedSelection.add(presetId);
  };

  selectedPresetIds.forEach(visit);

  return presets
    .filter((preset) => resolvedSelection.has(preset.id))
    .map((preset) => preset.id);
}

/**
 * Builds reverse dependency labels for selected presets.
 * @param selectedPresetIds Preset identifiers included in the resolved stack.
 * @returns Dependency usage grouped by preset id.
 */
function getRequiredBySelection(
  selectedPresetIds: string[],
): Map<string, string[]> {
  const requiredBy = new Map<string, string[]>();

  selectedPresetIds.forEach((presetId) => {
    const preset = presetsById.get(presetId);

    preset?.dependencies.forEach((dependencyId) => {
      const dependencyUsers = requiredBy.get(dependencyId) ?? [];
      dependencyUsers.push(preset.name);
      requiredBy.set(dependencyId, dependencyUsers);
    });
  });

  return requiredBy;
}

/**
 * Normalizes path parts for POSIX-style generated examples.
 * @param parts Path segments to join.
 * @returns Path parts joined with POSIX separators.
 */
function toPosixPath(...parts: string[]): string {
  return parts
    .filter(Boolean)
    .join('/')
    .replace(/\/+/g, '/')
    .replace(/^\.\//, '');
}

/**
 * Computes the relative root config import for a workspace file.
 * @param workspacePath Package or app workspace path.
 * @returns Relative import path from a workspace to the root config.
 */
function getRootConfigImportPath(workspacePath: string): string {
  const depth = workspacePath.split('/').filter(Boolean).length;

  return `${'../'.repeat(Math.max(depth, 1))}presetter.config`;
}

/**
 * Extracts the workspace suffix used in generated project ids.
 * @param workspacePath Package or app workspace path.
 * @returns Final path segment for display and generated ids.
 */
function getWorkspaceSuffix(workspacePath: string): string {
  const segments = workspacePath.split('/').filter(Boolean);

  return segments[segments.length - 1] ?? 'workspace';
}

/**
 * Maps customization state into Presetter variable names.
 * @param values Current explorer customization state.
 * @returns Presetter variable values for generated examples.
 */
function buildVariables(values: CustomizationState): Record<string, string> {
  return {
    source: values.sourceDir,
    output: values.outputDir,
    test: values.testDir,
    generated: values.generatedDir,
    types: values.typesDir,
    target: values.target,
  };
}

/**
 * Formats import statements for the selected preset packages.
 * @param presetIds Preset identifiers to import.
 * @returns Import statements for selected presets.
 */
function buildPresetImports(presetIds: string[]): string {
  return presetIds
    .map((presetId) => {
      const preset = presetsById.get(presetId);

      return preset ? `import ${presetId} from '${preset.packageName}';` : null;
    })
    .filter(Boolean)
    .join('\n');
}

/**
 * Formats the Presetter variables object body.
 * @param values Current explorer customization state.
 * @returns Formatted variable block for generated config.
 */
function buildVariablesBlock(values: CustomizationState): string {
  return Object.entries(buildVariables(values))
    .map(([key, value]) => `    ${key}: '${value}',`)
    .join('\n');
}

/**
 * Builds a single-project Presetter config preview.
 * @param projectId Package name or project identifier for the config.
 * @param presetIds Preset identifiers included in the config.
 * @param values Current explorer customization state.
 * @returns Generated standalone project config.
 */
function buildProjectConfig(
  projectId: string,
  presetIds: string[],
  values: CustomizationState,
): string {
  if (presetIds.length === 0) {
    return '// No presets selected';
  }

  const imports = buildPresetImports(presetIds);

  return [
    `import { preset } from 'presetter';`,
    imports,
    '',
    `export default preset('${projectId}', {`,
    `  extends: [${presetIds.join(', ')}],`,
    `  variables: {`,
    buildVariablesBlock(values),
    `  },`,
    `});`,
  ].join('\n');
}

/**
 * Builds a workspace Presetter config preview.
 * @param projectId Package name or project identifier for the config.
 * @param workspacePath Workspace path for the generated config.
 * @param presetIds Preset identifiers included in the workspace config.
 * @param values Current explorer customization state.
 * @returns Generated workspace config, or null when no presets are selected.
 */
function buildWorkspaceConfig(
  projectId: string,
  workspacePath: string,
  presetIds: string[],
  values: CustomizationState,
): string | null {
  if (presetIds.length === 0) {
    return null;
  }

  const imports = buildPresetImports(presetIds);

  return [
    `import { preset } from 'presetter';`,
    `import root from '${getRootConfigImportPath(workspacePath)}';`,
    imports,
    '',
    `export default preset('${projectId}/${getWorkspaceSuffix(workspacePath)}', {`,
    `  extends: [root, ${presetIds.join(', ')}],`,
    `  variables: {`,
    buildVariablesBlock(values),
    `  },`,
    `});`,
  ].join('\n');
}

/**
 * Expands selected presets with real preset extends used by asset resolution.
 * @param presetIds Selected preset identifiers.
 * @returns Presets in dependency-first resolution order.
 */
function expandAssetPresetOrder(presetIds: string[]): string[] {
  const ordered = new Set<string>();

  const visit = (presetId: string): void => {
    ROOT_PRESET_EXTENDS[presetId]?.forEach(visit);
    ordered.add(presetId);
  };

  presetIds.forEach(visit);

  return [...ordered];
}

/**
 * Builds the base TypeScript config JSON preview.
 * @param values Current explorer customization state.
 * @returns Base TypeScript config preview.
 */
function buildBaseTsconfigPreview(values: CustomizationState): string {
  return JSON.stringify(
    {
      compilerOptions: {
        outDir: values.outputDir,
        module: 'ESNext',
        target: values.target,
        declaration: true,
        declarationMap: true,
        incremental: true,
        inlineSourceMap: true,
        noEmit: true,
        moduleResolution: 'bundler',
        rootDir: '.',
        typeRoots: [
          values.typesDir,
          'node_modules/@types',
          './node_modules/@types',
        ],
        lib: [values.target],
      },
      include: [
        '.*/**/*.ts',
        '.*/**/*.mts',
        '.*/**/*.cts',
        '**/*.ts',
        '**/*.mts',
        '**/*.cts',
      ],
      exclude: ['**/node_modules', values.outputDir],
    },
    null,
    2,
  );
}

/**
 * Builds the React TypeScript config JSON preview.
 * @param values Current explorer customization state.
 * @returns React TypeScript config preview.
 */
function buildReactTsconfigPreview(values: CustomizationState): string {
  return JSON.stringify(
    {
      compilerOptions: {
        outDir: values.outputDir,
        module: 'ESNext',
        target: 'ESNext',
        declaration: true,
        inlineSourceMap: true,
        jsx: 'react-jsx',
        moduleResolution: 'bundler',
        lib: ['ES2020', 'ESNext', 'DOM', 'DOM.Iterable'],
      },
      include: ['.*/**/*.ts', '.*/**/*.tsx', '**/*.ts', '**/*.tsx'],
      exclude: ['**/node_modules'],
    },
    null,
    2,
  );
}

/**
 * Builds the monorepo root TypeScript config JSON preview.
 * @param values Current explorer customization state.
 * @returns Monorepo root TypeScript config preview.
 */
function buildMonorepoRootTsconfigPreview(values: CustomizationState): string {
  return JSON.stringify(
    {
      include: ['**/*.ts'],
      references: [],
      compilerOptions: {
        module: 'ESNext',
        target: values.target,
        moduleResolution: 'bundler',
      },
    },
    null,
    2,
  );
}

/**
 * Substitutes Presetter-style template variables in preview strings.
 * @param value String with `{variable}` tokens.
 * @param values Current explorer customization state.
 * @returns String with local preview variables applied.
 */
function substituteVariables(
  value: string,
  values: CustomizationState,
): string {
  return value
    .replaceAll('{root}', '.')
    .replaceAll('{generated}', values.generatedDir)
    .replaceAll('{source}', values.sourceDir)
    .replaceAll('{types}', values.typesDir)
    .replaceAll('{output}', values.outputDir)
    .replaceAll('{test}', values.testDir)
    .replaceAll('{target}', values.target);
}

/**
 * Applies variable substitution recursively to preview JSON content.
 * @param value JSON-like preview value.
 * @param values Current explorer customization state.
 * @returns JSON-like preview value with substituted strings.
 */
function applyVariables(value: unknown, values: CustomizationState): unknown {
  if (typeof value === 'string') {
    return substituteVariables(value, values);
  }

  if (Array.isArray(value)) {
    return value.map((item) => applyVariables(item, values));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        applyVariables(item, values),
      ]),
    );
  }

  return value;
}

/**
 * Deep-merges preview content using the same relevant rules as Presetter assets.
 * @param current Existing asset content.
 * @param next Asset content or override.
 * @returns Merged preview content; null means the asset is removed.
 */
function mergeAssetContent(
  current: AssetContent | undefined,
  next: AssetContent,
): AssetContent | undefined {
  if (next === null) {
    return null;
  }

  if (next === undefined) {
    return current;
  }

  if (Array.isArray(current) && Array.isArray(next)) {
    return [...new Set([...current, ...next])];
  }

  if (
    current &&
    next &&
    !Array.isArray(current) &&
    !Array.isArray(next) &&
    typeof current === 'object' &&
    typeof next === 'object'
  ) {
    const merged = { ...current };

    Object.entries(next).forEach(([key, value]) => {
      merged[key] = mergeAssetContent(
        merged[key] as AssetContent | undefined,
        value as AssetContent,
      );
    });

    return merged;
  }

  return next;
}

/**
 * Adds, overrides, or removes an asset in the preview map.
 * @param assets Mutable preview asset map.
 * @param path Asset destination path.
 * @param kind Reader-facing asset kind.
 * @param language Code block language.
 * @param content Asset content; null removes the asset.
 */
function setPreviewAsset(
  assets: Map<string, PreviewAsset>,
  path: string,
  kind: string,
  language: string,
  content: AssetContent,
): void {
  const current = assets.get(path);
  const merged = mergeAssetContent(current?.content, content);

  if (merged === null) {
    assets.delete(path);

    return;
  }

  if (merged === undefined) {
    return;
  }

  assets.set(path, {
    kind: current?.kind ?? kind,
    language: current?.language ?? language,
    content: merged,
  });
}

/**
 * Serializes preview asset content for display.
 * @param path Asset destination path.
 * @param asset Resolved preview asset.
 * @param values Current explorer customization state.
 * @returns Code block text.
 */
function serializePreviewAsset(
  path: string,
  asset: PreviewAsset,
  values: CustomizationState,
): string {
  if (TS_WRAPPER_ASSETS.has(path)) {
    return TSCONFIG_JSON_EXAMPLE_WRAPPER;
  }

  const content = applyVariables(asset.content, values);

  if (Array.isArray(content)) {
    return content.map((item) => String(item)).join('\n');
  }

  if (typeof content === 'string') {
    return content;
  }

  return JSON.stringify(content, null, 2);
}

/**
 * Applies one preset's asset definitions and overrides to the preview map.
 * @param assets Mutable preview asset map.
 * @param presetId Preset identifier.
 * @param values Current explorer customization state.
 * @param root0 Options for root/workspace context.
 * @param root0.isRepoRoot Whether repo-root-only assets apply.
 */
function applyPresetAssets(
  assets: Map<string, PreviewAsset>,
  presetId: string,
  values: CustomizationState,
  { isRepoRoot }: { isRepoRoot: boolean },
): void {
  switch (presetId) {
    case 'essentials':
      if (isRepoRoot) {
        setPreviewAsset(
          assets,
          '.husky/pre-commit',
          'hook',
          'bash',
          'npx lint-staged --concurrent=false',
        );
        setPreviewAsset(
          assets,
          '.husky/pre-push',
          'hook',
          'bash',
          'npm run test:coverage',
        );
        setPreviewAsset(
          assets,
          'cliff.yaml',
          'release asset',
          'yaml',
          'tag_pattern: v[0-9].*',
        );
      }

      setPreviewAsset(assets, '.gitignore', 'text asset', 'text', [
        '/.husky',
        '/.gitignore',
        '/.lintstagedrc.json',
        '/.npmignore',
        '/.prettierrc.json',
        '/cliff.yaml',
        '/eslint.config.ts',
        '/tsconfig.json',
        '/tsconfig.build.json',
        '/vitest.config.ts',
        'node_modules',
        '/{output}',
        '/{generated}',
        '/coverage',
        '*.lcov',
        'report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json',
        '/log',
        '/logs',
        '*.log',
        '*-debug.log*',
        '.*-debug.log*',
        '.DS_Store',
        '.cache',
        '.eslintcache',
        '.npm',
        '.pnpm*',
        '*.tsbuildinfo',
        '.env*',
        '!.env*.example',
      ]);
      setPreviewAsset(assets, '.lintstagedrc.json', 'JSON asset', 'json', {
        '{source}/**/*.[tj]s': ['presetter run stage --'],
        'package.json': ['sort-package-json'],
      });
      setPreviewAsset(assets, '.npmignore', 'publish asset', 'text', [
        '*',
        '!/bin/**',
        '!/{types}/**',
        '!/{output}/**',
        '!/{generated}/**',
      ]);
      setPreviewAsset(assets, '.prettierrc.json', 'JSON asset', 'json', {
        bracketSpacing: true,
        bracketSameLine: true,
        quoteProps: 'consistent',
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      });
      setPreviewAsset(
        assets,
        'eslint.config.ts',
        'generated .ts wrapper',
        'typescript',
        {},
      );
      setPreviewAsset(
        assets,
        'tsconfig.json',
        'JSON asset',
        'json',
        JSON.parse(buildBaseTsconfigPreview(values)) as Record<string, unknown>,
      );
      setPreviewAsset(assets, 'tsconfig.build.json', 'JSON asset', 'json', {
        extends: './tsconfig.json',
        compilerOptions: {
          noEmit: false,
        },
      });
      setPreviewAsset(
        assets,
        'vitest.config.ts',
        'generated .ts wrapper',
        'typescript',
        {},
      );
      break;
    case 'react':
      if (assets.has('.lintstagedrc.json')) {
        setPreviewAsset(assets, '.lintstagedrc.json', 'JSON asset', 'json', {
          '{source}/**/*.[tj]sx': ['presetter run stage --'],
        });
      }
      setPreviewAsset(
        assets,
        'eslint.config.ts',
        'generated .ts wrapper',
        'typescript',
        {},
      );
      setPreviewAsset(
        assets,
        'tsconfig.json',
        'JSON asset',
        'json',
        JSON.parse(buildReactTsconfigPreview(values)) as Record<
          string,
          unknown
        >,
      );
      setPreviewAsset(assets, 'tsconfig.build.json', 'JSON asset', 'json', {
        extends: './tsconfig.json',
        exclude: ['**/*.stories.ts', '**/*.stories.tsx'],
      });
      setPreviewAsset(
        assets,
        'vitest.config.ts',
        'generated .ts wrapper',
        'typescript',
        {},
      );
      break;
    case 'web':
      setPreviewAsset(assets, '.gitignore', 'text asset', 'text', [
        `/{types}/image.d.ts`,
        `/{types}/style.d.ts`,
      ]);
      setPreviewAsset(
        assets,
        'eslint.config.ts',
        'generated .ts wrapper',
        'typescript',
        {},
      );
      setPreviewAsset(
        assets,
        `${values.typesDir}/image.d.ts`,
        'type asset',
        'typescript',
        `declare module '*.png';\ndeclare module '*.jpg';\ndeclare module '*.svg';`,
      );
      setPreviewAsset(
        assets,
        `${values.typesDir}/style.d.ts`,
        'type asset',
        'typescript',
        `declare module '*.css';\ndeclare module '*.scss';\ndeclare module '*.module.css';`,
      );
      if (assets.has('tsconfig.json')) {
        setPreviewAsset(assets, 'tsconfig.json', 'JSON asset', 'json', {
          compilerOptions: {
            lib: ['DOM', 'DOM.Iterable', 'ESNext'],
          },
        });
      }
      break;
    case 'cjs':
      setPreviewAsset(assets, 'tsconfig.json', 'JSON asset', 'json', {
        compilerOptions: {
          module: 'commonjs',
          target: 'ES2017',
        },
      });
      break;
    case 'esm':
      setPreviewAsset(assets, 'tsconfig.json', 'JSON asset', 'json', {
        compilerOptions: {
          module: 'ESNext',
          target: '{target}',
        },
      });
      break;
    case 'hybrid':
      setPreviewAsset(assets, 'tsconfig.cjs.json', 'hybrid asset', 'json', {
        extends: './tsconfig.build',
        compilerOptions: {
          module: 'commonjs',
          target: 'ES2017',
        },
      });
      setPreviewAsset(assets, 'tsconfig.mjs.json', 'hybrid asset', 'json', {
        extends: './tsconfig.build',
        compilerOptions: {
          module: 'ESNext',
          target: '{target}',
        },
      });
      setPreviewAsset(assets, '.gitignore', 'text asset', 'text', [
        'tsconfig.cjs.json',
        'tsconfig.mjs.json',
      ]);
      break;
    case 'rollup':
      setPreviewAsset(
        assets,
        'rollup.config.ts',
        'generated .ts wrapper',
        'typescript',
        {},
      );
      setPreviewAsset(assets, '.gitignore', 'text asset', 'text', [
        '/rollup.config.ts',
      ]);
      break;
    case 'monorepo':
      setPreviewAsset(assets, '.lintstagedrc.json', 'JSON asset', 'json', null);
      setPreviewAsset(assets, '.npmignore', 'publish asset', 'text', null);
      setPreviewAsset(
        assets,
        'eslint.config.ts',
        'generated .ts wrapper',
        'typescript',
        {},
      );
      setPreviewAsset(
        assets,
        'tsconfig.json',
        'JSON asset',
        'json',
        JSON.parse(buildMonorepoRootTsconfigPreview(values)) as Record<
          string,
          unknown
        >,
      );
      setPreviewAsset(
        assets,
        'tsconfig.build.json',
        'JSON asset',
        'json',
        null,
      );
      setPreviewAsset(
        assets,
        'vitest.config.ts',
        'generated .ts wrapper',
        'typescript',
        {},
      );
      break;
    case 'strict':
      setPreviewAsset(
        assets,
        'eslint.config.ts',
        'generated .ts wrapper',
        'typescript',
        {},
      );
      if (assets.has('vitest.config.ts')) {
        setPreviewAsset(
          assets,
          'vitest.config.ts',
          'generated .ts wrapper',
          'typescript',
          {},
        );
      }
      break;
    case 'node':
      if (assets.has('tsconfig.json')) {
        setPreviewAsset(assets, 'tsconfig.json', 'JSON asset', 'json', {
          compilerOptions: {
            types: ['node'],
          },
        });
      }
      break;
    case 'bun':
      if (assets.has('tsconfig.json')) {
        setPreviewAsset(assets, 'tsconfig.json', 'JSON asset', 'json', {
          compilerOptions: {
            types: ['bun'],
          },
        });
      }
      break;
    case 'storybook':
      setPreviewAsset(assets, '.gitignore', 'text asset', 'text', [
        '.storybook/main.ts',
      ]);
      setPreviewAsset(
        assets,
        '.storybook/main.ts',
        'generated .ts wrapper',
        'typescript',
        {},
      );
      if (assets.has('eslint.config.ts')) {
        setPreviewAsset(
          assets,
          'eslint.config.ts',
          'generated .ts wrapper',
          'typescript',
          {},
        );
      }
      if (assets.has('vitest.config.ts')) {
        setPreviewAsset(
          assets,
          'vitest.config.ts',
          'generated .ts wrapper',
          'typescript',
          {},
        );
      }
      break;
    default:
      break;
  }
}

/**
 * Builds resolved preview files from selected presets.
 * @param presetIds Selected preset identifiers.
 * @param values Current explorer customization state.
 * @param root0 Options for root/workspace context.
 * @param root0.isRepoRoot Whether repo-root-only assets apply.
 * @param root0.workspacePath Optional workspace path prefix.
 * @returns Resolved preview files.
 */
function buildPreviewFiles(
  presetIds: string[],
  values: CustomizationState,
  {
    isRepoRoot,
    workspacePath,
  }: {
    isRepoRoot: boolean;
    workspacePath?: string;
  },
): PreviewFile[] {
  const assets = new Map<string, PreviewAsset>();

  expandAssetPresetOrder(presetIds).forEach((presetId) =>
    applyPresetAssets(assets, presetId, values, { isRepoRoot }),
  );

  return [...assets.entries()].map(([sourcePath, asset]) => {
    const path = workspacePath
      ? toPosixPath(workspacePath, sourcePath)
      : sourcePath;
    const label = sourcePath.split('/').pop() ?? sourcePath;

    return {
      path,
      sourcePath,
      label,
      kind: asset.kind,
      language: asset.language,
      content: serializePreviewAsset(sourcePath, asset, values),
    };
  });
}

/**
 * Converts preview file paths into folder and file rows.
 * @param files Preview files.
 * @returns Rows for the selectable file tree.
 */
function buildFileTreeRows(files: PreviewFile[]): FileTreeRow[] {
  const rows: FileTreeRow[] = [];
  const seenFolders = new Set<string>();

  files.forEach((file) => {
    const segments = file.path.split('/');
    let folderPath = '';

    segments.slice(0, -1).forEach((segment, index) => {
      folderPath = toPosixPath(folderPath, segment);

      if (!seenFolders.has(folderPath)) {
        seenFolders.add(folderPath);
        rows.push({
          id: `folder:${folderPath}`,
          type: 'folder',
          depth: index,
          label: segment,
        });
      }
    });

    rows.push({
      id: `file:${file.path}`,
      type: 'file',
      depth: Math.max(segments.length - 1, 0),
      label: file.label,
      file,
    });
  });

  return rows;
}

const PresetExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all');
  const [selectedPresets, setSelectedPresets] = useState<string[]>([
    'essentials',
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [customization, setCustomization] = useState<CustomizationState>(
    defaultCustomizationState,
  );
  const [selectedPreviewPath, setSelectedPreviewPath] =
    useState('tsconfig.json');

  const resolvedSelectedPresets = useMemo(
    () => resolvePresetSelection(selectedPresets),
    [selectedPresets],
  );

  const requiredBySelection = useMemo(
    () => getRequiredBySelection(resolvedSelectedPresets),
    [resolvedSelectedPresets],
  );

  const categories = useMemo(() => {
    const availableCategories = Array.from(
      new Set(presets.map((preset) => preset.category)),
    );

    return [
      { id: 'all', label: 'All Categories' },
      ...availableCategories.map((categoryId) => ({
        id: categoryId,
        label: presetCategoryLabels[categoryId],
      })),
    ];
  }, []);

  const complexityLevels = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
  ];

  const filteredPresets = useMemo(() => {
    return presets.filter((preset) => {
      const matchesCategory =
        selectedCategory === 'all' || preset.category === selectedCategory;
      const matchesComplexity =
        selectedComplexity === 'all' ||
        preset.complexity === selectedComplexity;
      const matchesSearch =
        searchTerm === '' ||
        preset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        preset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        preset.features.some((feature) =>
          feature.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      return matchesCategory && matchesComplexity && matchesSearch;
    });
  }, [searchTerm, selectedCategory, selectedComplexity]);

  const generateInstallCommand = (): string => {
    const selectedPresetObjects = presets.filter((preset) =>
      resolvedSelectedPresets.includes(preset.id),
    );

    return `pnpm add -D ${['presetter', ...selectedPresetObjects.map((preset) => preset.packageName)].join(' ')}`;
  };

  const hasReact = resolvedSelectedPresets.includes('react');
  const hasMonorepo = resolvedSelectedPresets.includes('monorepo');
  const hasRollup = resolvedSelectedPresets.includes('rollup');
  const workspacePath = hasReact
    ? customization.appPath
    : customization.packagePath;
  const workspacePresetIds = resolvedSelectedPresets.filter(
    (presetId) =>
      !['essentials', 'monorepo', 'strict', 'esm'].includes(presetId),
  );
  const hasWorkspaceExample = hasMonorepo && workspacePresetIds.length > 0;

  const rootPresetConfig = useMemo(() => {
    if (hasMonorepo) {
      return buildProjectConfig(
        customization.packageName,
        ['monorepo'],
        customization,
      );
    }

    return buildProjectConfig(
      customization.packageName,
      resolvedSelectedPresets,
      customization,
    );
  }, [customization, hasMonorepo, resolvedSelectedPresets]);

  const workspacePresetConfig = useMemo(() => {
    if (!hasWorkspaceExample) {
      return null;
    }

    return buildWorkspaceConfig(
      customization.packageName,
      workspacePath,
      workspacePresetIds,
      customization,
    );
  }, [customization, hasWorkspaceExample, workspacePath, workspacePresetIds]);

  const rootPreviewPresetIds = useMemo(
    () => (hasMonorepo ? ['monorepo'] : resolvedSelectedPresets),
    [hasMonorepo, resolvedSelectedPresets],
  );

  const workspacePreviewPresetIds = useMemo(() => {
    if (!hasWorkspaceExample) {
      return [];
    }

    return ['essentials', 'strict', 'esm', ...workspacePresetIds];
  }, [hasWorkspaceExample, workspacePresetIds]);

  const previewFiles = useMemo(() => {
    const rootFiles = buildPreviewFiles(rootPreviewPresetIds, customization, {
      isRepoRoot: true,
    });
    const workspaceFiles = buildPreviewFiles(
      workspacePreviewPresetIds,
      customization,
      {
        isRepoRoot: false,
        workspacePath,
      },
    );

    return [...rootFiles, ...workspaceFiles];
  }, [
    customization,
    rootPreviewPresetIds,
    workspacePreviewPresetIds,
    workspacePath,
  ]);

  const fileTreeRows = useMemo(
    () => buildFileTreeRows(previewFiles),
    [previewFiles],
  );

  const defaultPreviewPath =
    previewFiles.find((file) => file.sourcePath === 'tsconfig.json')?.path ??
    previewFiles[0]?.path;
  const selectedPreview =
    previewFiles.find((file) => file.path === selectedPreviewPath) ??
    previewFiles.find((file) => file.path === defaultPreviewPath) ??
    previewFiles[0];

  useEffect(() => {
    if (
      defaultPreviewPath &&
      !previewFiles.some((file) => file.path === selectedPreviewPath)
    ) {
      setSelectedPreviewPath(defaultPreviewPath);
    }
  }, [defaultPreviewPath, previewFiles, selectedPreviewPath]);

  const previewHighlights = useMemo(() => {
    const highlights = [
      `Bootstrap writes asset files only. It does not create package.json or src entry files.`,
      `Generated .ts configs are thin wrappers around resolve(import.meta.url); the resolved asset content comes from the preset source.`,
    ];

    if (hasRollup) {
      highlights.push(
        `preset-rollup resolves ${customization.sourceDir}/index.ts into ${customization.outputDir}/index.js and ${customization.outputDir}/index.mjs.`,
      );
    }

    if (hasReact) {
      highlights.push(
        `preset-react narrows Vitest coverage to ${customization.sourceDir}/**/*.tsx while keeping the generated file itself as a dynamic .ts wrapper.`,
      );
    } else {
      highlights.push(
        `preset-essentials uses ${customization.sourceDir} for Vitest coverage and ignores ${customization.outputDir} in generated JSON/text assets.`,
      );
    }

    if (hasMonorepo) {
      highlights.push(
        `At repo root, preset-monorepo nulls inherited .lintstagedrc.json, .npmignore, and tsconfig.build.json.`,
      );
    }

    return highlights;
  }, [customization, hasMonorepo, hasReact, hasRollup]);

  const togglePreset = (presetId: string): void => {
    setSelectedPresets((previousSelection) => {
      const normalizedSelection = resolvePresetSelection(previousSelection);
      const requiredBy = getRequiredBySelection(normalizedSelection);

      if (normalizedSelection.includes(presetId)) {
        if (requiredBy.has(presetId)) {
          return normalizedSelection;
        }

        return resolvePresetSelection(
          normalizedSelection.filter((id) => id !== presetId),
        );
      }

      return resolvePresetSelection([...normalizedSelection, presetId]);
    });
  };

  const getCategoryLabel = (category: string): string => {
    return category in presetCategoryLabels
      ? presetCategoryLabels[category as PresetCategory]
      : 'Preset';
  };

  const getComplexityClassName = (complexity: string): string => {
    switch (complexity) {
      case 'beginner':
        return styles.beginner ?? '';
      case 'intermediate':
        return styles.intermediate ?? '';
      case 'advanced':
        return styles.advanced ?? '';
      default:
        return styles.beginner ?? '';
    }
  };

  const getSizeLabel = (size: string): string => {
    switch (size) {
      case 'small':
        return 'Compact';
      case 'medium':
        return 'Balanced';
      case 'large':
        return 'Comprehensive';
      default:
        return 'Compact';
    }
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedComplexity !== 'all' ||
    searchTerm !== '';

  const handleClearFilters = (): void => {
    setSelectedCategory('all');
    setSelectedComplexity('all');
    setSearchTerm('');
  };

  return (
    <div className={styles.shell}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Interactive builder</p>
          <h3 className={styles.title}>Preset Explorer</h3>
          <p className={styles.description}>
            Compare presets, narrow the options, and generate a starter
            configuration with a clearer view of the tradeoffs.
          </p>
        </div>
        <div className={styles.selectionBadge}>
          {resolvedSelectedPresets.length} selected
        </div>
      </div>

      <div className={styles.controls}>
        <label className={styles.field}>
          <span>Search</span>
          <input
            className={styles.input}
            placeholder="Search presets..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span>Category</span>
          <select
            className={styles.select}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span>Complexity</span>
          <select
            className={styles.select}
            value={selectedComplexity}
            onChange={(e) => setSelectedComplexity(e.target.value)}>
            {complexityLevels.map((level) => (
              <option key={level.id} value={level.id}>
                {level.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.grid}>
        {filteredPresets.map((preset) => {
          const selected = resolvedSelectedPresets.includes(preset.id);
          const requiredBy = requiredBySelection.get(preset.id) ?? [];
          const lockedInStack = selected && requiredBy.length > 0;

          return (
            <button
              aria-disabled={lockedInStack}
              aria-pressed={selected}
              className={clsx(
                styles.card,
                selected && styles.cardSelected,
                lockedInStack && styles.cardLocked,
              )}
              key={preset.id}
              type="button"
              onClick={() => togglePreset(preset.id)}>
              <div className={styles.cardTop}>
                <span className={styles.categoryBadge}>
                  {getCategoryLabel(preset.category)}
                </span>
                <span
                  className={clsx(
                    styles.complexityBadge,
                    getComplexityClassName(preset.complexity),
                  )}>
                  {preset.complexity}
                </span>
              </div>

              <div className={styles.cardTitleRow}>
                <h4 className={styles.cardTitle}>{preset.name}</h4>
                <span className={styles.sizeBadge}>
                  {getSizeLabel(preset.size)}
                </span>
              </div>

              <p className={styles.cardDescription}>{preset.description}</p>

              <div className={styles.featureList}>
                {preset.features.slice(0, 4).map((feature) => (
                  <span className={styles.featureChip} key={feature}>
                    {feature}
                  </span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.dependencyText}>
                  {lockedInStack
                    ? `Required by ${requiredBy.join(', ')}`
                    : preset.dependencies.length > 0
                      ? `Requires ${preset.dependencies
                          .map(
                            (dependencyId) =>
                              presetsById.get(dependencyId)?.name ??
                              dependencyId,
                          )
                          .join(', ')}`
                      : 'No dependencies'}
                </span>
                <span
                  className={clsx(
                    styles.selectionState,
                    selected && styles.selectionStateActive,
                    lockedInStack && styles.selectionStateLocked,
                  )}>
                  {selected
                    ? lockedInStack
                      ? 'Locked in stack'
                      : 'Selected preset'
                    : 'Select preset'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {filteredPresets.length === 0 && (
        <div className={styles.emptyState} role="status">
          <span aria-hidden="true" className={styles.emptyStateIcon}>
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </span>
          <h4 className={styles.emptyStateTitle}>
            No presets match your filters
          </h4>
          <p className={styles.emptyStateBody}>
            Try widening the category, lowering the complexity, or clearing the
            search text to see more options.
          </p>
          {hasActiveFilters && (
            <button
              className={clsx(
                'button button--secondary',
                styles.emptyStateAction,
              )}
              type="button"
              onClick={handleClearFilters}>
              Clear filters
            </button>
          )}
        </div>
      )}

      {resolvedSelectedPresets.length > 0 && (
        <div className={styles.results}>
          <div className={styles.summaryBlock}>
            <h4 className={styles.resultTitle}>Your configuration</h4>
            <div className={styles.selectedPresetList}>
              {resolvedSelectedPresets.map((presetId) => (
                <span className={styles.selectedChip} key={presetId}>
                  {presetsById.get(presetId)?.name ?? presetId}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.outputBlock}>
            <h5 className={styles.outputHeading}>Installation command</h5>
            <CodeBlock language="bash">{generateInstallCommand()}</CodeBlock>
          </div>

          <div className={styles.outputBlock}>
            <h5 className={styles.outputHeading}>
              {hasMonorepo ? 'Root presetter.config.ts' : 'presetter.config.ts'}
            </h5>
            <CodeBlock language="typescript">{rootPresetConfig}</CodeBlock>
          </div>

          {workspacePresetConfig && (
            <div className={styles.outputBlock}>
              <h5 className={styles.outputHeading}>
                {toPosixPath(workspacePath, 'presetter.config.ts')}
              </h5>
              <CodeBlock language="typescript">
                {workspacePresetConfig}
              </CodeBlock>
            </div>
          )}

          <div className={styles.outputBlock}>
            <h5 className={styles.outputHeading}>Bootstrap</h5>
            <CodeBlock language="bash">presetter bootstrap</CodeBlock>
          </div>

          <div className={clsx(styles.outputBlock, styles.customizationBlock)}>
            <div className={styles.customizationHeader}>
              <div>
                <h5 className={styles.outputHeading}>
                  Customize the template output
                </h5>
                <p className={styles.customizationDescription}>
                  Change the substitution variables that feed preset assets,
                  then inspect the config files Presetter actually bootstraps.
                  It does not generate application source files or create a new
                  package manifest.
                </p>
              </div>
              <span className={styles.hintChip}>Grounded in preset code</span>
            </div>

            <div className={styles.customizationGrid}>
              <label className={styles.field}>
                <span>Project id</span>
                <input
                  className={styles.input}
                  type="text"
                  value={customization.packageName}
                  onChange={(e) =>
                    setCustomization((previous) => ({
                      ...previous,
                      packageName: e.target.value,
                    }))
                  }
                />
              </label>

              <label className={styles.field}>
                <span>Source directory</span>
                <input
                  className={styles.input}
                  type="text"
                  value={customization.sourceDir}
                  onChange={(e) =>
                    setCustomization((previous) => ({
                      ...previous,
                      sourceDir: e.target.value,
                    }))
                  }
                />
              </label>

              <label className={styles.field}>
                <span>Output directory</span>
                <input
                  className={styles.input}
                  type="text"
                  value={customization.outputDir}
                  onChange={(e) =>
                    setCustomization((previous) => ({
                      ...previous,
                      outputDir: e.target.value,
                    }))
                  }
                />
              </label>

              <label className={styles.field}>
                <span>Test directory</span>
                <input
                  className={styles.input}
                  type="text"
                  value={customization.testDir}
                  onChange={(e) =>
                    setCustomization((previous) => ({
                      ...previous,
                      testDir: e.target.value,
                    }))
                  }
                />
              </label>

              <label className={styles.field}>
                <span>Types directory</span>
                <input
                  className={styles.input}
                  type="text"
                  value={customization.typesDir}
                  onChange={(e) =>
                    setCustomization((previous) => ({
                      ...previous,
                      typesDir: e.target.value,
                    }))
                  }
                />
              </label>

              <label className={styles.field}>
                <span>Generated directory</span>
                <input
                  className={styles.input}
                  type="text"
                  value={customization.generatedDir}
                  onChange={(e) =>
                    setCustomization((previous) => ({
                      ...previous,
                      generatedDir: e.target.value,
                    }))
                  }
                />
              </label>

              <label className={styles.field}>
                <span>TypeScript target</span>
                <input
                  className={styles.input}
                  type="text"
                  value={customization.target}
                  onChange={(e) =>
                    setCustomization((previous) => ({
                      ...previous,
                      target: e.target.value,
                    }))
                  }
                />
              </label>

              {hasMonorepo && (
                <>
                  <label className={styles.field}>
                    <span>App workspace</span>
                    <input
                      className={styles.input}
                      type="text"
                      value={customization.appPath}
                      onChange={(e) =>
                        setCustomization((previous) => ({
                          ...previous,
                          appPath: e.target.value,
                        }))
                      }
                    />
                  </label>

                  <label className={styles.field}>
                    <span>Package workspace</span>
                    <input
                      className={styles.input}
                      type="text"
                      value={customization.packagePath}
                      onChange={(e) =>
                        setCustomization((previous) => ({
                          ...previous,
                          packagePath: e.target.value,
                        }))
                      }
                    />
                  </label>
                </>
              )}
            </div>
          </div>

          <div
            className={clsx(styles.outputBlock, styles.generatedPreviewBlock)}>
            <div className={styles.previewHeader}>
              <div>
                <h5 className={styles.outputHeading}>
                  Bootstrapped asset preview
                </h5>
                <p className={styles.customizationDescription}>
                  These are example files Presetter would write from the current
                  stack. JSON and text assets get serialized content; generated
                  `.ts` configs are runtime wrappers that resolve the preset
                  asset on demand.
                </p>
              </div>
              <div className={styles.tagRow}>
                <span className={styles.hintChip}>
                  {customization.sourceDir}
                </span>
                <span className={styles.hintChip}>
                  {customization.outputDir}
                </span>
                <span className={styles.hintChip}>{customization.target}</span>
              </div>
            </div>

            <div className={styles.assetBrowser}>
              <div className={styles.fileTreePanel}>
                <div className={styles.fileTreeHeader}>
                  <p className={styles.previewPanelTitle}>Generated files</p>
                  <span className={styles.hintChip}>
                    {previewFiles.length} assets
                  </span>
                </div>
                <div className={styles.fileTree} role="tree">
                  {fileTreeRows.length === 0 && (
                    <div className={styles.fileTreeEmpty}>
                      This preset does not bootstrap files on its own.
                    </div>
                  )}
                  {fileTreeRows.map((row) =>
                    row.type === 'folder' ? (
                      <div
                        aria-expanded="true"
                        className={styles.fileTreeFolder}
                        key={row.id}
                        role="treeitem"
                        style={{ '--depth': row.depth } as React.CSSProperties}>
                        <span aria-hidden="true">▾</span>
                        <span>{row.label}</span>
                      </div>
                    ) : (
                      <button
                        aria-current={
                          selectedPreview?.path === row.file.path
                            ? 'true'
                            : undefined
                        }
                        className={clsx(
                          styles.fileTreeFile,
                          selectedPreview?.path === row.file.path &&
                            styles.fileTreeFileActive,
                        )}
                        key={row.id}
                        role="treeitem"
                        style={{ '--depth': row.depth } as React.CSSProperties}
                        type="button"
                        onClick={() => setSelectedPreviewPath(row.file.path)}>
                        <span aria-hidden="true">◦</span>
                        <span>{row.label}</span>
                      </button>
                    ),
                  )}
                </div>
              </div>

              {selectedPreview && (
                <div className={styles.filePreviewPanel}>
                  <div className={styles.previewPanelHeader}>
                    <div>
                      <p className={styles.previewPanelTitle}>
                        {selectedPreview.path}
                      </p>
                      <p className={styles.filePreviewMeta}>
                        Click a generated file to inspect the asset content.
                      </p>
                    </div>
                    <span className={styles.hintChip}>
                      {selectedPreview.kind}
                    </span>
                  </div>
                  <CodeBlock language={selectedPreview.language}>
                    {selectedPreview.content}
                  </CodeBlock>
                </div>
              )}
            </div>

            <div className={styles.previewOutput}>
              <p className={styles.previewNoteTitle}>
                What changes with your variables
              </p>
              <ul className={styles.noteList}>
                {previewHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className={styles.note}>
        <p className={styles.noteTitle}>Selection guidance</p>
        <ul className={styles.noteList}>
          <li>
            Start with <strong>essentials</strong> for any TypeScript project.
          </li>
          <li>
            Add <strong>react</strong> for React applications and component
            systems.
          </li>
          <li>
            Use <strong>esm</strong> or <strong>hybrid</strong> when packaging
            libraries.
          </li>
          <li>
            Bring in <strong>strict</strong> when you want harder quality
            guardrails.
          </li>
          <li>
            Choose <strong>monorepo</strong> when the workspace itself becomes
            the product.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PresetExplorer;
