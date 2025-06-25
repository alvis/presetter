---
sidebar_position: 5
title: Creating Custom Presets
description: Build your own Presetter presets for team-specific requirements and reusable configurations
---

# Creating Custom Presets 🎨

Learn how to build custom Presetter presets that encapsulate your team's standards, tool configurations, and best practices. Perfect for organizations that want to standardize development environments across projects.

## Why Create Custom Presets?

Custom presets help you:
- **Standardize**: Consistent tooling across all team projects
- **Encapsulate**: Team-specific ESLint rules, build configurations, and workflows
- **Evolve**: Update all projects by updating a single preset package
- **Scale**: Easily onboard new projects and team members

## Preset Anatomy

A Presetter preset is essentially a package that exports configuration functions:

```typescript
// Basic preset structure
export default function myPreset(options = {}) {
  return {
    variables: { /* template variables */ },
    assets: { /* configuration files */ }
  };
}
```

## Step 1: Create Preset Package

Initialize your custom preset:

```bash
mkdir presetter-preset-myteam
cd presetter-preset-myteam
pnpm init
```

Set up the basic package structure:

```json title="package.json"
{
  "name": "@myteam/presetter-preset-myteam",
  "version": "1.0.0",
  "description": "My team's Presetter preset with standardized configurations",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "exports": {
    ".": {
      "import": "./lib/index.js",
      "require": "./lib/index.js",
      "types": "./lib/index.d.ts"
    }
  },
  "files": ["lib/", "templates/"],
  "keywords": ["presetter", "preset", "typescript", "eslint"],
  "peerDependencies": {
    "presetter": "^8.0.0"
  },
  "devDependencies": {
    "presetter": "^8.0.0",
    "presetter-preset-essentials": "^8.0.0",
    "typescript": "^5.0.0"
  }
}
```

## Step 2: Design Your Preset Architecture

Plan your preset's capabilities:

```typescript title="src/index.ts"
import type { PresetGenerator, ProjectContext } from 'presetter-types';

export interface MyTeamPresetOptions {
  // Project type configuration
  projectType?: 'library' | 'application' | 'service';
  
  // Framework integrations
  framework?: 'react' | 'vue' | 'node' | 'none';
  
  // Quality settings
  strictMode?: boolean;
  testFramework?: 'jest' | 'vitest' | 'none';
  
  // Build configuration
  bundler?: 'rollup' | 'webpack' | 'vite' | 'none';
  
  // Team standards
  codeStyle?: 'standard' | 'airbnb' | 'custom';
}

const myTeamPreset: PresetGenerator<MyTeamPresetOptions> = (
  context: ProjectContext,
  options: MyTeamPresetOptions = {}
) => {
  const {
    projectType = 'library',
    framework = 'none',
    strictMode = true,
    testFramework = 'jest',
    bundler = 'rollup',
    codeStyle = 'standard'
  } = options;

  return {
    variables: createVariables(context, options),
    assets: createAssets(context, options)
  };
};

export default myTeamPreset;
```

## Step 3: Implement Core Configuration

### Variables System

```typescript title="src/variables.ts"
import type { ProjectContext } from 'presetter-types';
import type { MyTeamPresetOptions } from './index.js';

export function createVariables(
  context: ProjectContext,
  options: MyTeamPresetOptions
) {
  const { projectType, framework } = options;
  
  return {
    // Source and output directories
    source: 'src',
    output: projectType === 'library' ? 'lib' : 'dist',
    
    // Node and TypeScript versions
    nodeVersion: '18',
    typescriptVersion: '^5.0.0',
    
    // Build configuration
    target: projectType === 'library' ? 'ES2020' : 'ES2022',
    module: projectType === 'library' ? 'ESNext' : 'CommonJS',
    
    // Framework-specific variables
    ...(framework === 'react' && {
      reactVersion: '^18.0.0',
      jsxRuntime: 'automatic'
    }),
    
    // Team-specific variables
    organizationName: '@myteam',
    licenseType: 'MIT',
    authorName: 'My Team',
    authorEmail: 'dev@myteam.com'
  };
}
```

### Asset Configuration

```typescript title="src/assets.ts"
import type { ProjectContext, PresetAssets } from 'presetter-types';
import type { MyTeamPresetOptions } from './index.js';

export function createAssets(
  context: ProjectContext,
  options: MyTeamPresetOptions
): PresetAssets {
  const { projectType, framework, strictMode, testFramework, bundler } = options;
  
  return {
    // TypeScript configuration
    'tsconfig.json': createTypeScriptConfig(projectType, strictMode),
    
    // ESLint configuration
    '.eslintrc.json': createESLintConfig(framework, strictMode),
    
    // Prettier configuration
    'prettier.config.js': createPrettierConfig(),
    
    // Package.json scripts
    'package.json': (current) => ({
      ...current,
      scripts: {
        ...current?.scripts,
        ...createPackageScripts(projectType, testFramework, bundler)
      }
    }),
    
    // Conditional configurations
    ...(testFramework === 'jest' && {
      'jest.config.ts': createJestConfig(framework)
    }),
    
    ...(bundler === 'rollup' && {
      'rollup.config.ts': createRollupConfig(projectType)
    }),
    
    // Team-specific files
    '.gitignore': createGitIgnore(projectType),
    '.github/workflows/ci.yml': createCIWorkflow(),
    'README.md': createReadmeTemplate(context)
  };
}
```

## Step 4: Implement Configuration Factories

### TypeScript Configuration

```typescript title="src/configs/typescript.ts"
export function createTypeScriptConfig(
  projectType: string,
  strictMode: boolean
) {
  const baseConfig = {
    compilerOptions: {
      target: projectType === 'library' ? 'ES2020' : 'ES2022',
      lib: ['ES2022'],
      module: 'ESNext',
      moduleResolution: 'node',
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      skipLibCheck: true,
      
      // Output configuration
      outDir: projectType === 'library' ? 'lib' : 'dist',
      rootDir: 'src',
      declaration: projectType === 'library',
      declarationMap: projectType === 'library',
      
      // Strict mode configuration
      strict: strictMode,
      noImplicitAny: strictMode,
      noImplicitReturns: strictMode,
      noUnusedLocals: strictMode,
      noUnusedParameters: strictMode
    },
    include: ['src/**/*'],
    exclude: ['node_modules', 'dist', 'lib', '**/*.test.*']
  };

  // Library-specific configurations
  if (projectType === 'library') {
    baseConfig.compilerOptions = {
      ...baseConfig.compilerOptions,
      declarationDir: 'lib',
      sourceMap: true
    };
  }

  return baseConfig;
}
```

### ESLint Configuration

```typescript title="src/configs/eslint.ts"
export function createESLintConfig(framework: string, strictMode: boolean) {
  const baseConfig = {
    extends: [
      '@typescript-eslint/recommended',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      // Team standards
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': strictMode ? 'error' : 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn'
    }
  };

  // Framework-specific rules
  if (framework === 'react') {
    baseConfig.extends.push('plugin:react/recommended', 'plugin:react-hooks/recommended');
    baseConfig.plugins.push('react', 'react-hooks');
    baseConfig.rules = {
      ...baseConfig.rules,
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    };
  }

  return baseConfig;
}
```

### Package Scripts

```typescript title="src/configs/scripts.ts"
export function createPackageScripts(
  projectType: string,
  testFramework: string,
  bundler: string
) {
  const baseScripts = {
    'build': 'run build',
    'clean': 'run clean',
    'typecheck': 'run typecheck',
    'lint': 'run lint',
    'format': 'run format'
  };

  // Add test scripts
  if (testFramework !== 'none') {
    baseScripts['test'] = 'run test';
    baseScripts['test:watch'] = 'run test --watch';
    baseScripts['test:coverage'] = 'run test --coverage';
  }

  // Project-specific scripts
  if (projectType === 'application') {
    baseScripts['dev'] = 'run dev';
    baseScripts['preview'] = 'run preview';
  }

  if (projectType === 'library') {
    baseScripts['prepublishOnly'] = 'pnpm run build';
  }

  return baseScripts;
}
```

## Step 5: Add Template Files

Create reusable template files:

```markdown title="templates/README.md"
# {{{name}}}

{{{description}}}

## Installation

\`\`\`bash
pnpm add {{name}}
\`\`\`

## Usage

<!-- Add usage examples here -->

## Development

This project uses [Presetter](https://github.com/alvis/presetter) for development tooling.

\`\`\`bash
# Install dependencies
pnpm install

# Development mode
pnpm run dev

# Build
pnpm run build

# Test
pnpm run test
\`\`\`

## Contributing

1. Follow the existing code style
2. Add tests for new features
3. Ensure all tests pass
4. Update documentation

## License

{{{license}}}
```

```yaml title="templates/.github/workflows/ci.yml"
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [18, 20]
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'pnpm'
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Type check
        run: pnpm run typecheck
      
      - name: Lint
        run: pnpm run lint
      
      - name: Test
        run: pnpm run test
      
      - name: Build
        run: pnpm run build
```

## Step 6: Add Advanced Features

### Conditional Configuration

```typescript title="src/features/conditional.ts"
import type { ProjectContext, PresetContent } from 'presetter-types';

export function createConditionalAssets(context: ProjectContext) {
  const assets: Record<string, PresetContent> = {};
  
  // Only add Dockerfile for applications
  if (context.packageJson?.scripts?.start) {
    assets['Dockerfile'] = createDockerfile();
  }
  
  // Add GitHub templates for public repositories
  if (!context.packageJson?.private) {
    assets['.github/ISSUE_TEMPLATE/bug_report.md'] = createBugReportTemplate();
    assets['.github/ISSUE_TEMPLATE/feature_request.md'] = createFeatureRequestTemplate();
  }
  
  // Add Storybook config for React projects
  if (context.packageJson?.dependencies?.react) {
    assets['.storybook/main.ts'] = createStorybookConfig();
  }
  
  return assets;
}
```

### Variable Interpolation

```typescript title="src/features/templating.ts"
export function interpolateTemplate(
  template: string,
  variables: Record<string, any>
): string {
  return template.replace(/{{{(\w+)}}}/g, (match, key) => {
    return variables[key] || match;
  });
}

export function createReadmeTemplate(context: ProjectContext) {
  return (current: string | undefined, { variables }) => {
    const template = readFileSync(
      new URL('../templates/README.md', import.meta.url),
      'utf-8'
    );
    
    return interpolateTemplate(template, {
      name: context.packageJson?.name || 'my-project',
      description: context.packageJson?.description || 'A project built with Presetter',
      license: context.packageJson?.license || 'MIT',
      ...variables
    });
  };
}
```

## Step 7: Testing Your Preset

### Unit Tests

```typescript title="src/__tests__/preset.test.ts"
import { describe, expect, test } from 'vitest';
import myTeamPreset from '../index.js';

describe('myTeamPreset', () => {
  test('should generate basic configuration', () => {
    const context = {
      packageJson: { name: 'test-project' },
      isRepoRoot: true,
      relativeRepoRoot: '.'
    };
    
    const result = myTeamPreset(context);
    
    expect(result.variables).toMatchObject({
      source: 'src',
      output: 'lib',
      nodeVersion: '18'
    });
    
    expect(result.assets).toHaveProperty('tsconfig.json');
    expect(result.assets).toHaveProperty('.eslintrc.json');
  });
  
  test('should support React framework', () => {
    const context = {
      packageJson: { name: 'test-react-app' },
      isRepoRoot: true,
      relativeRepoRoot: '.'
    };
    
    const result = myTeamPreset(context, { framework: 'react' });
    
    expect(result.variables).toHaveProperty('reactVersion');
    expect(result.variables).toHaveProperty('jsxRuntime');
  });
});
```

### Integration Tests

```typescript title="src/__tests__/integration.test.ts"
import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { mkdtemp, rm } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';
import { execSync } from 'child_process';

describe('preset integration', () => {
  let tempDir: string;
  
  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'preset-test-'));
  });
  
  afterEach(async () => {
    await rm(tempDir, { recursive: true });
  });
  
  test('should bootstrap a working project', () => {
    // Create a test project
    execSync('pnpm init', { cwd: tempDir });
    execSync(`pnpm add -D ${process.cwd()}`, { cwd: tempDir });
    
    // Bootstrap with preset
    execSync('presetter bootstrap', { cwd: tempDir });
    
    // Verify files exist
    const files = ['tsconfig.json', '.eslintrc.json', 'prettier.config.js'];
    files.forEach(file => {
      expect(() => {
        execSync(`test -f ${file}`, { cwd: tempDir });
      }).not.toThrow();
    });
  });
});
```

## Step 8: Publishing and Distribution

### Build Configuration

```typescript title="presetter.config.ts"
import presetEsm from 'presetter-preset-esm';

export default presetEsm({
  variables: {
    source: 'src',
    output: 'lib'
  }
});
```

### Prepare for Publishing

```json title="package.json"
{
  "scripts": {
    "build": "run build",
    "test": "run test",
    "prepublishOnly": "pnpm run build && pnpm run test"
  },
  "publishConfig": {
    "access": "public"
  }
}
```

### Publish to npm

```bash
# Build and test
pnpm run build
pnpm run test

# Publish
pnpm publish
```

## Step 9: Using Your Custom Preset

### In a New Project

```bash
pnpm add -D @myteam/presetter-preset-myteam
presetter bootstrap
```

### Configuration

```typescript title="presetter.config.ts"
import myTeamPreset from '@myteam/presetter-preset-myteam';

export default myTeamPreset({
  projectType: 'library',
  framework: 'react',
  strictMode: true,
  testFramework: 'jest'
});
```

## Advanced Patterns

### Composing Multiple Presets

```typescript title="src/index.ts"
import presetEssentials from 'presetter-preset-essentials';
import presetReact from 'presetter-preset-react';

export default function myTeamPreset(options = {}) {
  const basePresets = [
    presetEssentials,
    ...(options.framework === 'react' ? [presetReact] : [])
  ];
  
  return {
    // Merge base presets
    ...mergePresets(basePresets),
    
    // Add team-specific overrides
    assets: {
      '.eslintrc.json': (current) => ({
        ...current,
        rules: {
          ...current?.rules,
          // Team-specific rules
          'no-console': 'error'
        }
      })
    }
  };
}
```

### Plugin System

```typescript title="src/plugins/index.ts"
export interface PresetPlugin {
  name: string;
  apply(config: any, options: any): any;
}

export function applyPlugins(
  config: any,
  plugins: PresetPlugin[],
  options: any
) {
  return plugins.reduce((acc, plugin) => {
    return plugin.apply(acc, options);
  }, config);
}
```

## Best Practices

### 1. **Versioning Strategy**
- Use semantic versioning
- Document breaking changes
- Provide migration guides

### 2. **Configuration Philosophy**
- Prefer convention over configuration
- Provide sensible defaults
- Allow overrides when needed

### 3. **Documentation**
- Document all options
- Provide usage examples
- Maintain a changelog

### 4. **Testing**
- Unit test configuration generation
- Integration test with real projects
- Test across different Node.js versions

## Troubleshooting

### Issue: Asset Conflicts
**Problem:** Multiple presets define the same file
**Solution:** Use merge strategies:

```typescript
assets: {
  '.eslintrc.json': (current, context) => {
    const base = current || {};
    return deepMerge(base, myConfig);
  }
}
```

### Issue: Variable Resolution
**Problem:** Variables not interpolating correctly
**Solution:** Ensure proper template syntax:

```typescript
// Use triple braces for variable interpolation
'README.md': 'Project: {{{name}}}'
```

---

**Development Time:** 2-4 hours  
**Difficulty:** Advanced  
**Prerequisites:** TypeScript, Presetter concepts, npm publishing