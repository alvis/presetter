---
sidebar_position: 6
title: Configuration
---

# Configuration Guide

Learn how to customize Presetter to fit your exact needs through the `presetter.config.ts` file.

## Configuration File Structure

The `presetter.config.ts` file is the heart of your Presetter setup:

```typescript
// presetter.config.ts
import { preset } from 'presetter-types';
import esm from 'presetter-preset-esm';

export default preset('my-project', {
  extends: [esm],           // Inherit from other presets
  variables: {              // Define context variables
    source: 'src',
    output: 'dist'
  },
  scripts: {               // Define npm scripts
    start: 'node dist/index.js'
  },
  assets: {                // Define configuration files
    'tsconfig.json': {
      // TypeScript configuration
    }
  },
  override: {              // Override inherited configurations
    // Applied after everything else
  }
});
```

## Basic Configuration Patterns

### 1. Simple Preset Usage

Use a preset as-is without any customization:

```typescript
// presetter.config.ts
export { default } from 'presetter-preset-esm';
```

### 2. Light Customization

Extend a preset with minor modifications:

```typescript
import esm from 'presetter-preset-esm';
import { preset } from 'presetter-types';

export default preset('my-app', {
  extends: [esm],
  variables: {
    source: 'lib',          // Change from default 'src'
    target: 'ES2022'        // Update TypeScript target
  },
  scripts: {
    start: 'node dist/app.js'  // Add custom start script
  }
});
```

### 3. Multiple Preset Composition

Combine multiple presets for complex setups:

```typescript
import base from 'presetter-preset-essentials';
import react from 'presetter-preset-react';
import { preset } from 'presetter-types';

export default preset('full-stack-react', {
  extends: [base, react],
  // Each preset contributes its configurations
});
```

## Variables Configuration

**Variables** provide dynamic values to your configurations:

### Common Variables

```typescript
variables: {
  // Directories
  source: 'src',              // Source code directory
  output: 'dist',             // Build output directory
  test: 'tests',              // Test directory
  
  // Build settings
  target: 'ES2022',           // TypeScript/Babel target
  module: 'ESNext',           // Module system
  
  // Project info
  name: 'my-awesome-app',     // Project name
  description: 'An awesome app'
}
```

### Dynamic Variables

Use functions for context-aware variables:

```typescript
variables: {
  // Read from package.json
  name: (context) => context.package.name,
  
  // Environment-based
  nodeVersion: process.version,
  
  // Computed values
  testPattern: (context) => `${context.variables.source}/**/*.test.ts`
}
```

### Variable Usage in Assets

Reference variables in configuration files:

```typescript
assets: {
  'tsconfig.json': {
    compilerOptions: {
      outDir: '{output}',       // Becomes: "dist"
      rootDir: '{source}',      // Becomes: "src"
      target: '{target}'        // Becomes: "ES2022"
    },
    include: ['{source}/**/*']
  }
}
```

## Scripts Configuration

**Scripts** define the npm/pnpm/yarn commands available in your project:

### Basic Scripts

```typescript
scripts: {
  // Build commands
  build: 'tsc',
  'build:watch': 'tsc --watch',
  
  // Testing
  test: 'vitest',
  'test:watch': 'vitest --watch',
  'test:ui': 'vitest --ui',
  coverage: 'vitest --coverage',
  
  // Linting
  lint: 'eslint {source}/**/*.ts',
  'lint:fix': 'eslint {source}/**/*.ts --fix',
  
  // Formatting
  format: 'prettier --write {source}/**/*.ts',
  'format:check': 'prettier --check {source}/**/*.ts'
}
```

### Script Composition

Combine multiple commands:

```typescript
scripts: {
  // Sequential execution
  ci: 'npm run lint && npm run test && npm run build',
  
  // Parallel execution (with npm-run-all)
  'dev:all': 'run-p dev:server dev:client',
  
  // Conditional scripts
  precommit: 'lint-staged',
  prepublishOnly: 'npm run ci'
}
```

### Script Merging

Local package.json scripts take priority over preset scripts:

```typescript
// Preset scripts
scripts: {
  build: 'tsc',
  test: 'vitest'
}

// Your package.json
{
  "scripts": {
    "build": "vite build",  // Overrides preset
    "dev": "vite dev"       // Adds to preset
  }
}

// Result: build uses Vite, test uses Vitest, dev available
```

## Assets Configuration

**Assets** are configuration files generated in your project:

### JSON Configuration Files

```typescript
assets: {
  'tsconfig.json': {
    compilerOptions: {
      target: '{target}',
      module: '{module}',
      outDir: '{output}',
      rootDir: '{source}',
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true
    },
    include: ['{source}/**/*'],
    exclude: ['node_modules', '{output}']
  }
}
```

### Array-Based Files

Great for .gitignore, .eslintignore, etc.:

```typescript
assets: {
  '.gitignore': [
    'node_modules',
    '{output}',
    '*.log',
    '.env.local',
    'coverage',
    '.nyc_output'
  ],
  
  '.eslintignore': [
    '{output}',
    'node_modules',
    '*.d.ts'
  ]
}
```

### Template-Based Files

Generate complex configuration files:

```typescript
assets: {
  'vite.config.ts': `
import { defineConfig } from 'vite';

export default defineConfig({
  root: '{source}',
  build: {
    outDir: '../{output}',
    target: '{target}'
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
});
  `.trim()
}
```

### Function-Generated Assets

For complex, dynamic configurations:

```typescript
assets: {
  'eslint.config.ts': (current, { variables, context }) => {
    const config = {
      ...current,
      languageOptions: {
        parserOptions: {
          ecmaVersion: variables.target === 'ES2022' ? 2022 : 2020
        }
      }
    };
    
    // Add React rules if React is detected
    if (context.package.dependencies?.react) {
      config.plugins = {
        ...config.plugins,
        react: require('eslint-plugin-react')
      };
    }
    
    return config;
  }
}
```

## Override System

The **override** field allows you to customize inherited configurations:

### Variable Overrides

```typescript
override: {
  variables: {
    // Override inherited variables
    source: 'lib',            // Change from 'src'
    target: 'ES2023',         // Update target
    
    // Add new variables
    customPath: 'custom/path'
  }
}
```

### Script Overrides

```typescript
override: {
  scripts: {
    // Replace inherited script
    build: 'rollup -c',
    
    // Add new scripts
    deploy: 'npm run build && gh-pages -d dist'
  }
}
```

### Asset Overrides

#### Deep Merging

```typescript
override: {
  assets: {
    'tsconfig.json': {
      compilerOptions: {
        // Merged with existing compilerOptions
        strict: false,          // Override inherited setting
        noImplicitAny: true     // Add new setting
      }
    }
  }
}
```

#### Function-Based Overrides

```typescript
override: {
  assets: {
    'eslint.config.ts': (current, { variables }) => ({
      ...current,
      rules: {
        ...current.rules,
        // Add custom rules
        'no-console': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' }
        ]
      }
    })
  }
}
```

#### Removing Assets

Set assets to `null` to prevent their generation:

```typescript
override: {
  assets: {
    '.prettierrc': null,      // Don't generate Prettier config
    'vitest.config.ts': null  // Don't generate Vitest config
  }
}
```

## Advanced Configuration Patterns

### Context-Aware Configuration

Make configurations responsive to project context:

```typescript
export default preset('adaptive', (context) => {
  const isMonorepo = context.package.workspaces !== undefined;
  const hasReact = context.package.dependencies?.react;
  const isLibrary = context.package.main !== undefined;
  
  return {
    variables: {
      target: isLibrary ? 'ES2018' : 'ES2022',
      format: isLibrary ? 'cjs' : 'esm'
    },
    
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          composite: isMonorepo,
          jsx: hasReact ? 'react-jsx' : undefined,
          declaration: isLibrary
        }
      }
    }
  };
});
```

### Environment-Based Configuration

```typescript
export default preset('env-aware', {
  variables: {
    isDev: process.env.NODE_ENV === 'development',
    isProd: process.env.NODE_ENV === 'production'
  },
  
  override: {
    assets: {
      'vite.config.ts': (current, { variables }) => ({
        ...current,
        build: {
          ...current.build,
          minify: variables.isProd,
          sourcemap: variables.isDev
        }
      })
    }
  }
});
```

### Conditional Asset Generation

```typescript
assets: {
  // Only generate Storybook config if Storybook is installed
  '.storybook/main.ts': (current, { context }) => {
    if (!context.package.devDependencies?.['@storybook/react']) {
      return null;  // Don't generate this file
    }
    
    return {
      stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
      addons: ['@storybook/addon-essentials']
    };
  }
}
```

## Best Practices

### 1. Start Simple
Begin with a basic preset and add customizations incrementally:

```typescript
// Start here
export { default } from 'presetter-preset-esm';

// Then customize
import esm from 'presetter-preset-esm';
export default preset('my-project', {
  extends: [esm],
  variables: { source: 'lib' }
});
```

### 2. Use Variables for Consistency
Define paths and settings once:

```typescript
variables: {
  source: 'src',
  output: 'dist',
  test: 'test'
},

assets: {
  'tsconfig.json': {
    compilerOptions: {
      rootDir: '{source}',
      outDir: '{output}'
    }
  },
  'vitest.config.ts': {
    test: {
      include: ['{test}/**/*.test.ts']
    }
  }
}
```

### 3. Prefer Override for Customizations
Use the override field for modifications:

```typescript
// Good: Override ensures changes are applied last
override: {
  assets: {
    'eslint.config.ts': (current) => ({
      ...current,
      rules: { ...current.rules, 'no-console': 'warn' }
    })
  }
}

// Avoid: Direct asset modification may be overridden
assets: {
  'eslint.config.ts': { rules: { 'no-console': 'warn' } }
}
```

### 4. Document Your Configuration
Add comments to explain custom configurations:

```typescript
export default preset('my-project', {
  extends: [esm],
  
  variables: {
    // Use 'lib' instead of 'src' to match legacy structure
    source: 'lib'
  },
  
  override: {
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          // Allow importing JSON files for configuration
          resolveJsonModule: true
        }
      }
    }
  }
});
```

## Troubleshooting Configuration

### Debug Configuration Resolution

Use the Presetter CLI to inspect resolved configurations:

```bash
# View resolved variables
npx presetter list variables

# View resolved scripts
npx presetter list scripts

# View generated assets
npx presetter list assets
```

### Common Issues

**Variables not being substituted**:
```typescript
// Wrong: Missing braces
'rootDir': 'source'

// Correct: Use braces for variable substitution
'rootDir': '{source}'
```

**Assets not being generated**:
```typescript
// Check if asset is set to null in override
override: {
  assets: {
    'tsconfig.json': null  // This prevents generation
  }
}
```

**Script conflicts**:
Local package.json scripts always take priority over preset scripts.

## Next Steps

- 🚀 **Apply your knowledge**: Try [Tutorials](/docs/tutorials)
- 📚 **Explore presets**: Browse [Preset Ecosystem](/docs/presets)  
- 🔧 **Reference**: Check [CLI Reference](/docs/cli-reference)
- 🎨 **Create presets**: See [Tutorials](/docs/tutorials) for custom preset guides