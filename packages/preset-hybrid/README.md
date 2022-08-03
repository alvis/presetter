<div align="center">

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

🏄🏻 _A collection of opinionated configurations for a typescript project for presetter_

•   [Quick Start](#quick-start)   •   [Project Structure](#project-structure)   •   [Customization](#customization)   •   [Scripts](#script-template-summary)   •

[![npm](https://img.shields.io/npm/v/presetter-preset-hybrid?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/workflow/status/alvis/presetter/code%20test?style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![security](https://img.shields.io/snyk/vulnerabilities/github/alvis/presetter/packages/preset-hybrid/package.json.svg?style=flat-square)](https://snyk.io/test/github/alvis/presetter?targetFile=packages/preset-hybrid/package.json&style=flat-square)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter-preset-hybrid?style=flat-square)](https://libraries.io/npm/presetter-preset-hybrid)
[![license](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)

</div>

**presetter-preset-hybrid** is an opinionated extension of [**presetter-preset-essentials**](https://github.com/alvis/presetter/tree/master/packages/preset-essentials) but aims to help you to create a dual CommonJS/ESM package without all the pains. As the same as presetter-preset-essentials, it's designed to help you get started with a typescript project in a fraction of time you usually take via [**presetter**](https://github.com/alvis/presetter).

With `presetter-preset-hybrid`, it provides everything bundled from presetter-preset-essentials, plus the ease of writing a hybrid CommonJS/ESM package.

## Features

- 🤩 Hybrid CommonJS `.js` and ESM `.mjs` exports

- 🔍 Searches and replaces `__dirname` and `__filename` refs with the `import.meta` equivalent

- 🥹 Forget about writing the [`.js`/`.ts` extension pain](https://github.com/microsoft/TypeScript/issues/37582) for each import

  With this preset, estensions are automatically added post tsc. i.e. `import {foo} from './foo'` → `import {foo} from './foo.js'`

## Quick Start

To kick start a hybrid CommonJS/ESM package, what you need is to set the following in your `package.json` and follow the guide below.

```json
{
  "main": "lib/index.js",
  "module": "lib/index.mjs",
  "types": "lib/index.d.ts",
  "exports": {
    ".": {
      "require": "./lib/index.js",
      "import": "./lib/index.mjs"
    },
    "./package.json": "./package.json"
  }
}
```

[**FULL DOCUMENTATION IS AVAILABLE HERE**](https://github.com/alvis/presetter/blob/master/README.md)

1. Bootstrap your project with presetter-preset-hybrid

```shell
npx presetter use presetter-preset-hybrid
```

That's. One command and you're set.

2. Develop and run life cycle scripts provided by the preset

At this point, all development packages specified in the preset are installed,
and now you can try to run some example life cycle scripts (e.g. run prepare).

![Demo](https://raw.githubusercontent.com/alvis/presetter/master/assets/demo.gif)

## Project Structure

After installation, your project file structure should resemble the following or with more configuration files if you also installed other presets such as [`presetter-preset-rollup`](https://github.com/alvis/presetter/blob/master/packages/preset-rollup).

Implement your business logic under `source` and prepare tests under `spec`.

**TIPS** You can always change the source directory to other (e.g. src) by setting the `source` variable in `.presetterrc.json`. See the [customization](https://github.com/alvis/presetter/blob/master/packages/preset-hybrid#customization) section below for more details.

```
(root)
 ├─ .eslintrc.json
 ├─ .git
 ├─ .husky
 ├─ .jestrc.json
 ├─ .lintstagedrc.json
 ├─ .npmignore
 ├─ .prettierrc.json
 ├─ .presetterrc.json
 ├─ node_modules
 ├─ source
 │   ├─ <folders>
 │   ├─ index.ts
 │   ├─ (auxiliary).ts
 ├─ spec
 │   ├─ *.spec.ts
 ├─ package.json
 ├─ tsconfig.json
 ├─ tsconfig.build.json
 ├─ tsconfig.cjs.json
 └─ tsconfig.mjs.json
```

## Customization

By default, this preset exports a handy configuration for rollup for a typescript project.
But you can further customize (either extending or replacing) the configuration by specifying the change in the config file (`.presetterrc` or `.presetterrc.json`).

These settings are available in the `config` field in the config file. For directories, the setting is specified in the `variable` field.

The structure of `.presetterrc` should follow the interface below:

```ts
interface PresetterRC {
  /** name of the preset e.g. presetter-preset-hybrid */
  name: string | string[];
  /** additional configuration passed to the preset for generating the configuration files */
  config?: {
    //  ┌─ configuration for other tools via other presets (e.g. presetter-preset-rollup)
    // ...

    /** configuration to be merged with .eslintrc */
    eslint?: Record<string, unknown>;
    /** configuration to be merged with .jestrc */
    jest?: Record<string, unknown>;
    /** configuration to be merged with .lintstagedrc */
    lintstaged?: Record<string, unknown>;
    /** patterns to be added to .npmignore */
    npmignore?: string[];
    /** configuration to be merged with .presetterrc */
    prettier?: Record<string, unknown>;
    /** configuration to be merged with tsconfig.json */
    tsconfig?: Record<string, unknown>;
    /** a list of config files not to be created */
    ignores?: string[];
  };
  /** relative path to root directories for different file types */
  variable?: {
    /** the directory containing the whole repository (default: .) */
    root?: string;
    /** the directory containing all source code (default: source) */
    source?: string;
    /** the directory containing all typing files (default: types) */
    types?: string;
    /** the directory containing all output tile (default: source) */
    output?: string;
    /** the directory containing all test files (default: spec) */
    test?: string;
  };
}
```

## Script Template Summary

- **`run build`**: Transpile source code from typescript and replace any mapped paths
- **`run clean`**: Clean up any previously transpiled code
- **`run develop -- <file path>`**: Create a service that run the specified file whenever the source has changed
- **`run test`**: Run all tests
- **`run watch`**: Rerun all tests whenever the source has change
- **`run coverage`**: Run all test with coverage report
- **`run release`**: Bump the version and automatically generate a change log
- **`run release -- --prerelease <tag>`**: Release with a prerelease tag