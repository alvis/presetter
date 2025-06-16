# ![Logo](assets/logo.svg)

<div align="center">

_Set up your build configurations from templates—quickly and accurately!_

•   [Quick Start](#quick-start)   •   [Concept](#concept)   •   [FAQ](#faq)   •   [About](#about)   •

</div>

Managing shared build configurations across projects can be tedious. How often have you copied over settings for `babel`, `eslint`, `vitest`, `typescript`, or the scripts in `package.json`?  
How many dependencies did you have to install before you could even start a new project?

And when it’s time to update those configurations across multiple projects... 😩

**Presetter simplifies this process by setting up development tools from a template.**  
With just two packages - Presetter and your preferred preset — all your essential development tools (e.g., TypeScript, ESLint, Vitest) and their configurations are set up automatically during initialization.

![Before and After](assets/before-and-after.jpg)

---

## Quick Start

### 1. **Add Presetter and a preset to your project**

Choose a preset, such as [presetter-preset-esm](packages/preset-esm), and add it along with Presetter to your `devDependencies`. Additionally, define a `bootstrap` script in your `package.json` to initialize the preset.

```json
{
  "scripts": {
    "bootstrap": "presetter bootstrap"
  },
  "devDependencies": {
    "presetter": "<version>",
    "presetter-preset-esm": "<version>"
  }
}
```

### 2. **Create a preset configuration file**

Create a `presetter.config.ts` file in the same directory as your `package.json` to specify the preset:

#### Basic Example

```typescript
// presetter.config.ts

// use a preset as is

// replace `presetter-preset-esm` with your desired preset
export { default } from 'presetter-preset-esm';
```

#### With Customization

```typescript
// presetter.config.ts

// use a preset with customization

import esm from 'presetter-preset-esm';
import { preset } from 'presetter';

export default preset('<customization name>', {
  extends: [esm], // extend your chosen preset
  assets: {
    'eslint.config.ts': {
      default: [
        {
          rules: {
            // custom rules to override the preset
          },
        },
      ],
    },
  },
});
```

> _Note:_ Yes, `presetter.config.ts` itself functions as a preset!

### 3. **Install dependencies**

Run your package manager's installation command (e.g., `npm install`) to install all necessary dependencies.

After installation, all required configuration files will be automatically generated, enabling you to start development immediately.

### 4. **Start developing**

You're all set! Use the lifecycle scripts provided by the preset to begin your development workflow. For instance, try running:

```shell
npx run test
```

![Demo](assets/demo.gif)

---

## Concept

Presetter revolves around two main components: [**presetter**](packages/presetter) (the utility) and a **preset**. You can even [create your own custom preset](#how-to-create-a-preset).

---

### **presetter**

Presetter handles two core tasks:

1. **Setting up your development environment:**

   - Installs development dependencies defined by the preset without modifying your `package.json`.
   - Generates configuration files (e.g., `.babelrc`) in your project root based on the preset.

2. **Merging lifecycle scripts:**

   - Combines lifecycle scripts from the preset with your local `package.json`.

[Learn more about CLI usage](packages/presetter#usage).

#### **Lifecycle Scripts**

When you run `presetter run <task>` (or its alias `run <task>`), Presetter:

1. Merges lifecycle scripts from the preset with your local `package.json`.
2. Executes the task using `@npmcli/run-script`.

_Pro Tip:_ Your local scripts always take priority over preset scripts, so you retain full control over customizations.

**Example:** Given the following preset and local `package.json` files:

**Preset**

```json
{
  "scripts": {
    "build": "tsc",
    "prepare": "npm run lint && npm run build",
    "lint": "eslint *_/_.ts",
    "test": "vitest"
  }
}
```

**Local `package.json`**

```json
{
  "scripts": {
    "build": "run build",
    "lint": "eslint --fix *_/_.ts",
    "coverage": "run test -- --coverage"
  }
}
```

**Resulting `package.json` during execution**

```json
{
  "scripts": {
    "build": "tsc",
    "prepare": "npm run lint && npm run build",
    "lint": "eslint --fix *_/_.ts",
    "test": "vitest",
    "coverage": "vitest --coverage"
  }
}
```

---

### **preset**

A preset is a reusable bundle of configurations and dependencies. For example, see [presetter-preset-esm](/packages/preset-esm).

A preset typically includes:

1. **Development dependencies:** Defined as `peerDependencies` and installed automatically by Presetter.
2. **Configuration files:** Hardlinked or symlinked to your project root.
3. **Lifecycle scripts:** Templates that integrate seamlessly with your local scripts.

Presets are highly customizable. Use the `override` field in `presetter.config.ts` to adjust configurations dynamically during installation and execution.  
[Check out an example preset](#how-to-create-a-preset) for more details.

---

## FAQ

### How to Create a Preset?

Creating a preset is straightforward. You write a preset to configure your project, or you can either export a preset as a npm package to share with your team. Follow these steps to write an npm package that exports a default function with the required signature:

Creating a preset is straightforward. You can write a preset to configure your project or export it as an npm package to share with your team. Follow these steps to write a preset file that exports a default function with the required signature:

```typescript
// either presetter.config.ts for configuring your project or the entry file (e.g. index.ts) for exporting as a npm package

import { preset } from 'presetter';

export default preset('preset-name', (context) => {
  return {
    extends: [
      // define any presets to extend here
    ],
    variables: {
      // define your variables here
    },
    scripts: {
      // define your scripts here
    },
    assets: {
      // define your assets here
    },
    override: {
      // define any overrides here
      variables: {
        // override variables here
      },
      scripts: {
        // override scripts here
      },
      assets: {
        // override assets here
      },
    },
  };
});
```

Alternatively, you can export a configuration object if the preset does not require dynamic generation. This approach is more performant for most presets:

```typescript
// either presetter.config.ts for configuring your project or the entry file (e.g. index.ts) for exporting as an npm package

import { preset } from 'presetter';

export default preset('preset-name', {
  extends: [
    // define any presets to extend here
  ],
  variables: {
    // define your variables here
  },
  scripts: {
    // define your scripts here
  },
  assets: {
    // define your assets here
  },
  override: {
    // define any overrides here
  },
});
```

#### Example Preset

Here is an example of a simple preset:

```typescript
import { preset } from 'presetter-types';

export default preset('my-preset', (context) => {
  return {
    variables: {
      root: '.',
      source: 'src',
      output: 'dist',
    },
    scripts: {
      build: 'tsc',
      test: 'vitest',
    },
    assets: {
      'tsconfig.json': {
        compilerOptions: {
          target: 'ES2020',
          module: 'commonjs',
          outDir: 'dist',
          rootDir: 'src',
        },
      },
      '.gitignore': ['node_modules', 'dist'],
    },
    override: {
      assets: {
        'tsconfig.json': (current, { variables }) => ({
          ...current,
          include: [`${variables.source}/**/*`],
        }),
      },
    },
  };
});
```

### How to Configure Presetter for Monorepos?

To create a preset for a monorepo, define a preset that sets up the configurations for the monorepo. Individual projects within the monorepo can then extend this preset to meet their specific needs. Here is an example of a monorepo preset:

```typescript
import { preset } from 'presetter';

export default preset('monorepo', (context) => {
  return context.root === import.meta.dirname ? {
    // configurations for the monorepo
    ...
  }: {
    // configurations for any child projects without a presetter.config.ts
    ...
  }
});
```

In individual projects, you can extend the monorepo preset and override configurations as needed. Presetter will always look for the nearest presetter.config.ts file in the parent directories. If it does not find one, it will use the configurations defined in the monorepo preset.

```typescript
// /monorepo/path/to/project/presetter.config.ts
import { preset } from 'presetter';

import monorepo from '../path/to/root/presetter.config.ts';

export default preset('project', {
  extends: [monorepo], // extend the monorepo preset
  override: {
    // override configurations here
  },
});
```

### How to Ignore Files?

To ignore files provided by a preset, you can override the relevant asset with `null` in the override field. For example, to ignore the `.gitignore` file provided by a preset, here is how you can override it:

```typescript
// presetter.config.ts
import { preset } from 'presetter';

import esm from 'presetter-preset-esm';

export default preset('project name', {
  extends: [esm],
  override: {
    assets: {
      '.gitignore': null,
    },
  },
});
```

### How to Merge a Preset with Another Preset?

To merge a preset with another preset, you can extend the preset in the `extends` field of the preset configuration. For example, to merge the `presetter-preset-esm` preset with another preset, here is how you can extend it:

```typescript
// presetter.config.ts
import { preset } from 'presetter';

import esm from 'presetter-preset-esm';
import other from 'other-preset';

export default preset('project name', {
  extends: [esm, other],
  override: {
    // override the configuration here
  },
});
```

### What is the difference between `variables`, `scripts`, `assets` and those in `override`?

The `variables`, `scripts`, and `assets` fields in the preset configuration object define the initial resolution. The `override` field, on the other hand, is used to customize or override the initial resolution.

- **Initial Resolution**: The `variables`, `scripts`, and `assets` fields are used to set up the initial configuration.
- **Override**: The `override` field is applied after the initial resolution, allowing you to customize the configuration provided by the preset. This is useful when you need to make adjustments based on the fully resolved configuration.

If you only need to provide additional configurations, you can define them directly in the preset configuration object. However, be aware that these configurations may be overridden by other presets if the user extends multiple presets. Using the `override` field ensures that your customizations are applied last and are not overridden by other presets.

### How to Customize a Configuration Provided by a Preset?

There are two approaches to customize a configuration (either `assets` or `scripts`) provided by a preset:

1. **Generate the content via a function**: If you provide a function as the value for a configuration file, the function will receive the current content of the file and the variables defined in the preset configuration. You can then return the updated content based on the current content and variables. The content returned by the function will be used as the final content of the configuration file without being merged with the current content.

1. **Provide additional object for merging**: If you want to add additional configurations to the preset, you can provide the additions either in the `assets` or in the `override.assets` field. These additional configurations will be deep merged with the preset configuration.

For example, to add additional files to the `.gitignore` file provided by a preset, you can provide the additional files in the .gitignore of either the `assets` or `override.assets` field:

```typescript
// presetter.config.ts
import { preset } from 'presetter';

import esm from 'presetter-preset-esm';

export default preset('project name', {
  extends: [esm],
  assets: {
    '.gitignore': ['additional-file'],
  },
});
```

To add additional rules to the ESLint configuration provided by a preset, you can provide the additional rules like this:

```typescript
// presetter.config.ts
import { preset } from 'presetter';

import esm from 'presetter-preset-esm';

export default preset('project name', {
  extends: [esm],
  assets: {
    'eslint.config.ts': {
      default: [
        {
          rules: {
            'additional-rule': 'error',
          },
        },
      ],
    },
  },
});
```

Note that for ESLint configuration, if you want to add additional rules with file filters, it is recommended to use the `override` field to ensure that the additional rules are applied last. Otherwise, the additional rules may be overridden by other extended presets.

---

## Demo Presets

Explore these example presets to see **Presetter** in action:

| Preset                                                     | Description                                                                                                              |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [presetter-preset-essentials](/packages/preset-essentials) | A foundational preset for modern ESM projects, bundling tools like ESLint and Vitest, with best-practice configurations. |
| [presetter-preset-esm](/packages/preset-esm)               | Builds on `essentials`, adding tools optimized for ESM projects.                                                         |
| [presetter-preset-cjs](/packages/preset-cjs)               | Extends `essentials` with configurations tailored for CommonJS projects.                                                 |
| [presetter-preset-hybrid](/packages/preset-hybrid)         | Aimed at creating dual CommonJS/ESM packages with minimal hassle.                                                        |
| [presetter-preset-react](/packages/preset-react)           | An opinionated preset optimized for React development.                                                                   |
| [presetter-preset-rollup](/packages/preset-rollup)         | An opinionated preset optimized for Rollup development.                                                                  |
| [presetter-preset-strict](/packages/preset-strict)         | Extends `presetter-preset-esm` with strict linting rules, optimized for performance.                                     |
| [presetter-preset-web](/packages/preset-web)               | Extends `presetter-preset-esm` with Storybook v9, TailwindCSS v4, GraphQL, and PostCSS.                                 |

---

## About

This project was born out of frustration with maintaining identical configurations across multiple projects. Every new project required copying numerous files and installing dozens of dependencies.

With Presetter, I consolidated **40 development dependencies** into just **1 preset**, simplifying project setup and maintenance.
Let it save you time, too!

### Philosophy

- Presetter focuses solely on providing build tools for your project.
- Presets are flexible yet reusable.
- Updating a preset version is all you need to refresh your tools and configs.
- Local changes are always preserved.

---

### Contributing

We’d love your ideas and contributions!
Submit issues or suggestions via [GitHub Issues](../../issues).
See the [Contribution Guide](CONTRIBUTING.md) for more details.

---

### License

Released under the [MIT License](LICENSE).
© 2020, [Alvis Tang](https://github.com/alvis).

[![License](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](LICENSE)
