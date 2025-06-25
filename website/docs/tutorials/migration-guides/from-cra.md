---
sidebar_position: 2
title: Migrating from Create React App
description: Complete guide to migrating Create React App projects to Presetter with modern tooling
---

# Migrating from Create React App 🎯

Transform your Create React App (CRA) project to use Presetter's modern, flexible tooling while maintaining all functionality. This migration unlocks full control over your build configuration and development experience.

## Why Migrate from CRA?

### ❌ CRA Limitations
- **Limited configuration control** - No access to Webpack config without ejecting
- **Outdated tooling** - Slower builds with older Webpack versions
- **Bundle size overhead** - Includes unnecessary polyfills and code
- **Development constraints** - Restricted customization options

### ✅ Presetter Benefits
- **Full configuration access** - Customize any aspect of the build
- **Modern tooling** - Vite, ESBuild, and latest TypeScript
- **Better performance** - Faster builds and Hot Module Replacement
- **Flexible architecture** - Easy to extend and modify

## Prerequisites

- Existing Create React App project
- Node.js 18+ and pnpm installed
- Git repository (for backup)

## Migration Steps

### Step 1: Analyze Your CRA Project

First, understand what you're working with:

```bash
# Check CRA version
npm list react-scripts

# Review your package.json
cat package.json | jq '.dependencies, .devDependencies, .scripts'

# Identify custom configurations
ls -la | grep -E "\.(json|js|ts)$"
```

Common CRA project structure:
```
my-cra-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   └── components/
├── package.json
└── README.md
```

### Step 2: Backup Your Project

Create a safety net before making changes:

```bash
# Create backup branch
git checkout -b backup-before-presetter
git add .
git commit -m "Backup before migrating from CRA to Presetter"

# Return to main branch for migration
git checkout main
git checkout -b migrate-to-presetter
```

### Step 3: Remove CRA Dependencies

Remove Create React App dependencies:

```bash
# Remove react-scripts and related packages
pnpm remove react-scripts

# Remove testing dependencies (we'll add them back)
pnpm remove @testing-library/jest-dom @testing-library/react @testing-library/user-event

# Remove type definitions that Presetter will manage
pnpm remove @types/jest @types/node @types/react @types/react-dom
```

### Step 4: Install Presetter

Add Presetter and the React preset:

```bash
# Install Presetter and React preset
pnpm add -D presetter presetter-preset-react

# Bootstrap the configuration
presetter bootstrap
```

### Step 5: Configure Presetter

Create your Presetter configuration:

```typescript title="presetter.config.ts"
import presetReact from 'presetter-preset-react';

export default presetReact({
  variables: {
    // Match your CRA setup
    source: 'src',
    output: 'build',        // CRA builds to 'build' directory
    port: 3000,             // Default CRA port
    
    // Public directory configuration
    publicDir: 'public',
    
    // React configuration
    reactVersion: '^18.0.0',
    jsxRuntime: 'automatic'  // Modern JSX transform
  },
  
  assets: {
    // Customize Vite config for CRA compatibility
    'vite.config.ts': (current) => ({
      ...current,
      build: {
        ...current?.build,
        outDir: 'build',      // Match CRA build directory
        emptyOutDir: true
      },
      server: {
        ...current?.server,
        port: 3000,
        open: true            // Auto-open browser like CRA
      },
      
      // Environment variable compatibility
      define: {
        // CRA-style environment variables
        'process.env.NODE_ENV': '"development"'
      }
    }),
    
    // Update package.json scripts to match CRA commands
    'package.json': (current) => ({
      ...current,
      scripts: {
        ...current?.scripts,
        'start': 'run dev',     // Match CRA's 'start' command
        'build': 'run build',
        'test': 'run test',
        'eject': undefined      // Remove CRA's eject command
      }
    })
  }
});
```

### Step 6: Handle Public Directory

CRA projects use a `public` directory. Ensure Vite handles it correctly:

```html title="public/index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using Create React App" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!-- Vite will inject the module script automatically -->
  </body>
</html>
```

### Step 7: Update Source Files

Update your main entry point for Vite compatibility:

```typescript title="src/main.tsx"
// Rename index.tsx to main.tsx (Vite convention) or update vite.config.ts
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

If you prefer to keep `index.tsx`, update Vite config:

```typescript title="vite.config.ts (if keeping index.tsx)"
export default defineConfig({
  build: {
    rollupOptions: {
      input: './src/index.tsx'  // Specify custom entry point
    }
  }
});
```

### Step 8: Handle Environment Variables

CRA uses `REACT_APP_` prefixed environment variables. Configure Vite to match:

```typescript title="vite.config.ts"
export default defineConfig({
  // Make REACT_APP_ variables available
  envPrefix: ['REACT_APP_', 'VITE_'],
  
  define: {
    // Maintain compatibility with process.env usage
    'process.env': 'import.meta.env'
  }
});
```

Update environment variable usage in your code:

```typescript title="src/config.ts"
// Before (CRA style)
const apiUrl = process.env.REACT_APP_API_URL;

// After (Vite style) - preferred
const apiUrl = import.meta.env.REACT_APP_API_URL;

// Or create a compatibility layer
const env = import.meta.env;
const config = {
  apiUrl: env.REACT_APP_API_URL || 'http://localhost:3001',
  isDevelopment: env.DEV,
  isProduction: env.PROD
};

export default config;
```

### Step 9: Update Testing Setup

CRA included Jest and React Testing Library. Add them back:

```bash
# Add testing dependencies
pnpm add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
pnpm add -D @vitejs/plugin-react jsdom
```

Configure Vitest (Vite's test runner):

```typescript title="vitest.config.ts"
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts']
  }
});
```

```typescript title="src/test/setup.ts"
import '@testing-library/jest-dom';

// Global test setup
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
```

### Step 10: Handle CSS and Assets

CRA supported CSS imports directly. Vite does too, but with some differences:

```typescript title="src/App.tsx"
// CSS imports work the same way
import './App.css';

// For CSS modules (if you used them)
import styles from './App.module.css';

// SVG imports need updating
// Before (CRA):
import logo from './logo.svg';

// After (Vite):
import logo from './logo.svg?react'; // For React component
// or
import logoUrl from './logo.svg';    // For URL string
```

### Step 11: Update Package Scripts

Your new `package.json` scripts after migration:

```json title="package.json"
{
  "scripts": {
    "start": "run dev",           // Start development server
    "build": "run build",         // Build for production
    "test": "run test",           // Run tests
    "preview": "run preview",     // Preview production build
    "lint": "run lint",           // Lint code
    "typecheck": "run typecheck", // Type checking
    "format": "run format"        // Format code
  }
}
```

### Step 12: Test the Migration

Verify everything works correctly:

```bash
# 1. Install dependencies
pnpm install

# 2. Type checking
pnpm run typecheck

# 3. Linting
pnpm run lint

# 4. Start development server
pnpm start
# Should open browser to http://localhost:3000

# 5. Run tests
pnpm test

# 6. Build for production
pnpm run build

# 7. Preview production build
pnpm run preview
```

## Common Migration Issues

### Issue 1: Import Path Errors

**Problem:** Absolute imports stop working
**Solution:** Configure path mapping in `tsconfig.json`:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "@components/*": ["components/*"]
    }
  }
}
```

### Issue 2: Environment Variables Not Working

**Problem:** `process.env.REACT_APP_*` variables are undefined
**Solution:** Use Vite's environment variable system:

```typescript title="src/env.d.ts"
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_API_URL: string;
  readonly REACT_APP_VERSION: string;
  // Add other env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

### Issue 3: CSS Module Typing Issues

**Problem:** TypeScript errors with CSS modules
**Solution:** Add CSS module type definitions:

```typescript title="src/types/css-modules.d.ts"
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
```

### Issue 4: Build Output Differences

**Problem:** Build output structure differs from CRA
**Solution:** Customize Vite build configuration:

```typescript title="vite.config.ts"
export default defineConfig({
  build: {
    outDir: 'build',
    assetsDir: 'static',  // Match CRA's static folder structure
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/[name].[hash].js',
        chunkFileNames: 'static/js/[name].[hash].js',
        assetFileNames: 'static/[ext]/[name].[hash].[ext]'
      }
    }
  }
});
```

## Performance Improvements

After migration, you'll see significant improvements:

### Build Performance
```bash
# Before (CRA)
npm run build
# ⏱️  ~45-60 seconds

# After (Presetter + Vite)
pnpm run build
# ⏱️  ~5-15 seconds
```

### Development Server
```bash
# Before (CRA)
npm start
# ⏱️  ~15-30 seconds to start

# After (Presetter + Vite)
pnpm start
# ⏱️  ~1-3 seconds to start
```

### Hot Module Replacement
- **CRA**: Full page reload on most changes
- **Vite**: Instant updates preserving component state

## Advanced Customizations

### Adding Storybook Support

```bash
pnpm add -D @storybook/react-vite @storybook/addon-essentials
```

```typescript title=".storybook/main.ts"
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
};

export default config;
```

### Adding PWA Support

```bash
pnpm add -D vite-plugin-pwa
```

```typescript title="vite.config.ts"
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
});
```

## Migration Checklist

### ✅ Pre-Migration
- [ ] Backup project in Git
- [ ] Document current CRA version
- [ ] Test all functionality works
- [ ] Note any custom configurations

### ✅ During Migration
- [ ] Remove react-scripts
- [ ] Install Presetter React preset
- [ ] Configure presetter.config.ts
- [ ] Update HTML entry point
- [ ] Handle environment variables
- [ ] Update imports and assets

### ✅ Post-Migration
- [ ] All pages render correctly
- [ ] Development server starts quickly
- [ ] Hot reload works properly
- [ ] Tests pass
- [ ] Production build completes
- [ ] Build output serves correctly
- [ ] Environment variables work
- [ ] CSS/assets load properly

### ✅ Optimization
- [ ] Remove unused dependencies
- [ ] Configure build optimizations
- [ ] Set up CI/CD with new scripts
- [ ] Update documentation
- [ ] Train team on new workflow

## Next Steps

After successful migration:

1. **Explore Advanced Features**: Custom presets, additional tooling
2. **Performance Optimization**: Bundle analysis, lazy loading
3. **Team Training**: Share new development workflow
4. **CI/CD Updates**: Update deployment scripts for new build process

---

**Migration Time:** 2-4 hours  
**Difficulty:** Intermediate  
**Prerequisites:** Existing CRA project, basic React knowledge