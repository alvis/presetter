---
sidebar_position: 1
title: presetter-preset-web
---

# presetter-preset-web

**Enhanced in v8.0.3** - Comprehensive modern web development environment with TailwindCSS 4 modular imports, Storybook 9 integration, and professional component development tools. Latest updates include improved import resolution and enhanced CSS loading for Storybook.

## Purpose

This preset transforms any base Presetter preset into a complete modern web development platform, featuring:

- 🎨 **TailwindCSS 4** with intelligent auto-discovery
- 📖 **Storybook 9** visual component development
- ♿ **Accessibility testing** with automated a11y checks
- 🎯 **Browser-optimized** TypeScript configurations
- 🔧 **Zero configuration** - works out of the box

## Key Features

### 🆕 Storybook 9 Integration (New in v8.0.0!)

Professional component development environment with:

- **Visual component playground** for interactive development
- **Accessibility testing** with `@storybook/addon-a11y`
- **Vitest integration** via `@storybook/addon-vitest`
- **Pseudo-state testing** (hover, focus, active) with `storybook-addon-pseudo-states`
- **Automatic test generation** with `storybook-addon-test-codegen`

### 🎨 TailwindCSS 4 Support

Advanced utility-first CSS framework integration:

- **Modular import resolution** - follows ESM standards for TailwindCSS imports (v8.0.2+)
- **Recursive import detection** - intelligently discovers TailwindCSS usage across files (v8.0.2+)
- **Intelligent entry point detection** - automatically finds CSS files
- **Configuration auto-discovery** - locates tailwind.config files
- **Enhanced linting** with conflict detection and named rules (v8.0.2+)
- **Prettier formatting** with class ordering
- **PostCSS pipeline** with autoprefixer

### 🌐 Browser-Optimized Development

Enhanced TypeScript and tooling for web development:

- **DOM APIs** - Full browser API support
- **Modern JavaScript** - ESNext features enabled
- **Browser globals** - Configured ESLint environment
- **Web-specific linting** - Storybook and TailwindCSS rules

## Installation

### Basic Setup

```bash
# Install web preset with a base preset
npm install --save-dev presetter presetter-preset-essentials presetter-preset-web
```

### Package Manager Support

```bash
# npm
npm install --save-dev presetter presetter-preset-essentials presetter-preset-web

# pnpm
pnpm add -D presetter presetter-preset-essentials presetter-preset-web

# yarn
yarn add --dev presetter presetter-preset-essentials presetter-preset-web
```

## Configuration

### Basic Setup (Extension Pattern)

The web preset is designed to **extend** base presets, not replace them:

```typescript title="presetter.config.ts"
// ✅ Correct - extend base preset with web features
import essentials from 'presetter-preset-essentials';
import web from 'presetter-preset-web';

export default [essentials, web];
```

```typescript title="presetter.config.ts (Alternative)"
// ✅ Also correct - using preset function
import { preset } from 'presetter';

export default preset('presetter-preset-essentials', 'presetter-preset-web');
```

### Advanced Customization

```typescript title="presetter.config.ts"
import essentials from 'presetter-preset-essentials';
import web from 'presetter-preset-web';

export default [
  essentials,
  web,
  {
    // Override TailwindCSS configuration
    override: {
      'tailwind.config.ts': {
        theme: {
          extend: {
            colors: {
              brand: '#your-brand-color',
            },
          },
        },
      },
      // Customize Storybook addons
      '.storybook/main.ts': {
        addons: [
          '@storybook/addon-a11y',
          '@storybook/addon-vitest',
          'storybook-addon-pseudo-states',
          // Add custom addons
          '@storybook/addon-docs',
        ],
      },
    },
  },
];
```

## Generated Files & Configurations

### Core Configuration Files

#### `.prettierrc.json`
```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindConfig": "./tailwind.config.ts",
  "tailwindFunctions": ["clsx", "cn", "tw"]
}
```

#### `eslint.config.ts` (Enhanced)
```typescript
// Extended with web-specific rules
export default [
  // ... base ESLint config
  {
    languageOptions: {
      globals: {
        ...browser,  // Browser globals enabled
      },
    },
    plugins: {
      'better-tailwindcss': betterTailwindcss,
      'storybook': storybook,
    },
    rules: {
      // TailwindCSS linting
      'better-tailwindcss/no-custom-classname': 'error',
      'better-tailwindcss/no-contradicting-classname': 'error',
      
      // Storybook development rules
      'storybook/no-stories-of': 'error',
      'storybook/no-title-property-in-meta': 'error',
    },
  },
];
```

#### `tsconfig.json` (Enhanced)
```json
{
  "compilerOptions": {
    "lib": [
      "DOM",          // Browser APIs
      "DOM.Iterable", // DOM iteration
      "ESNext"        // Modern JavaScript
    ],
    "types": [
      "vitest/globals"
    ]
  }
}
```

### Storybook Configuration

#### `.storybook/main.ts` (Auto-generated)
```typescript
export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',           // Accessibility testing
    '@storybook/addon-vitest',         // Vitest integration
    'storybook-addon-pseudo-states',   // Pseudo-state testing
    'storybook-addon-test-codegen',    // Test generation
  ],
  framework: {
    name: '@storybook/web-vite',
    options: {},
  },
};
```

## Intelligent Auto-Discovery

### TailwindCSS Entry Point Detection

The preset automatically finds your main CSS file by scanning:

```typescript
// Scanned directories (in order of priority)
['source', 'src', 'app', 'styles', 'assets', 'public', 'static']

// Common CSS filenames checked
['globals.css', 'global.css', 'index.css', 'main.css', 'styles.css']

// Content scanning for TailwindCSS imports
/@import\s+["']tailwindcss/
```

### Configuration File Discovery

Automatically locates:
- `tailwind.config.{ts,js,mjs,cjs}`
- `.storybook/` directory
- PostCSS configuration files

No manual configuration required for standard project structures!

## Usage Examples

### Development Workflow

```bash
# Start development with Storybook
npm run storybook

# Build Storybook for production
npm run build-storybook

# Standard development workflow
npm run dev          # Start dev server
npm run build        # Build for production
npm run test         # Run tests
npm run lint         # Lint with web rules
npm run format       # Format with TailwindCSS ordering
```

### Component Development

```typescript title="src/components/Button/Button.stories.ts"
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Accessibility testing enabled
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
    // Pseudo-state testing
    pseudo: {
      hover: ['&:hover'],
      focus: ['&:focus'],
      active: ['&:active'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};
```

### TailwindCSS Integration

```css title="src/styles/globals.css"
@import "tailwindcss";

/* Custom styles that work with TailwindCSS */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
}
```

```typescript title="src/components/Card.tsx"
import { clsx } from 'clsx';

interface CardProps {
  variant?: 'default' | 'highlighted';
  children: React.ReactNode;
}

export function Card({ variant = 'default', children }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-lg border p-6',
        {
          'bg-white border-gray-200': variant === 'default',
          'bg-blue-50 border-blue-200': variant === 'highlighted',
        }
      )}
    >
      {children}
    </div>
  );
}
```

## Testing Integration

### Vitest + Storybook

```typescript title="src/components/Button/Button.test.ts"
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';

// Auto-generated from Storybook stories
const { Default, Disabled } = composeStories(stories);

describe('Button Component', () => {
  it('renders default button correctly', () => {
    render(<Default />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Accessibility Testing

Automatic accessibility testing in Storybook:

1. **Visual indicators** for accessibility violations
2. **Automated checks** for color contrast, keyboard navigation
3. **WCAG compliance** reporting
4. **Integration with CI/CD** for accessibility regression testing

## Best Practices

### Project Structure

```
my-web-project/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.ts    # Storybook stories
│   │   │   └── Button.test.ts       # Vitest tests
│   │   └── Card/
│   ├── styles/
│   │   └── globals.css             # TailwindCSS entry point
│   └── utils/
├── .storybook/                     # Generated Storybook config
├── tailwind.config.ts              # TailwindCSS configuration
├── presetter.config.ts
└── package.json
```

### TailwindCSS Organization

```typescript title="tailwind.config.ts"
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
};
```

### Component Development Workflow

1. **Create component** with TypeScript
2. **Write Storybook stories** for visual development
3. **Add accessibility testing** via Storybook addons
4. **Generate tests** from stories using test-codegen
5. **Verify styling** with TailwindCSS utilities
6. **Test pseudo-states** (hover, focus, active) in Storybook

## Troubleshooting

### Issue: TailwindCSS not detected

**Problem:** TailwindCSS classes not being processed

**Solution:** Ensure entry point is discoverable:
```css title="src/styles/globals.css"
@import "tailwindcss";
```

### Issue: Storybook not starting

**Problem:** Storybook configuration conflicts or CSS loading issues

**Solution:** Re-run bootstrap to regenerate configs:
```bash
npx presetter bootstrap
```

**Note:** v8.0.3+ includes fixes for Storybook CSS loading issues, especially with relative import resolution.

### Issue: Accessibility violations

**Problem:** Components failing a11y checks

**Solution:** Use Storybook's accessibility panel:
1. Open Storybook
2. Navigate to failing component
3. Check "Accessibility" tab
4. Fix highlighted violations

### Issue: Prettier not formatting TailwindCSS

**Problem:** Class order not being sorted

**Solution:** Verify Prettier configuration:
```json title=".prettierrc.json"
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Variables

Inherits variables from base preset and adds:

| Variable | Default | Description |
|----------|---------|-------------|
| `storybook` | `".storybook"` | Storybook configuration directory |
| `stories` | `"stories"` | Stories directory (if separate) |
| `assets` | `"assets"` | Static assets directory |
| `public` | `"public"` | Public assets directory |

## Migration to v8

### From v7

The main change is enhanced Storybook integration:

```bash
# Update to v8
npm install --save-dev presetter-preset-web@^8.0.0

# Re-bootstrap to get new Storybook configs
npx presetter bootstrap

# New Storybook scripts available
npm run storybook
npm run build-storybook
```

### New Features Available

- Professional Storybook 9 setup with addons
- Enhanced accessibility testing
- Vitest integration in Storybook
- Pseudo-state testing capabilities
- Automatic test generation from stories

## Next Steps

- **Component development**: Start building with Storybook
- **Accessibility testing**: Use built-in a11y checks
- **Visual regression testing**: Consider Chromatic integration
- **Design system**: Build comprehensive component libraries
- **Performance**: Monitor bundle sizes with modern web optimizations

---

The preset-web in v8.0.0 represents a complete modern web development platform, perfect for teams building component libraries, design systems, or any web application requiring professional visual development tools.