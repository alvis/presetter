<div align="center">

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

🏄🏻 _A collection of opinionated configurations for a React project in typescript for presetter_

•   [Quick Start](#quick-start)   •   [Project Structure](#project-structure)   •   [Customization](#customization)   •   [Scripts](#script-template-summary)   •

[![npm](https://img.shields.io/npm/v/presetter-preset-react?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![security](https://img.shields.io/snyk/vulnerabilities/github/alvis/presetter/packages/preset-react/package.json.svg?style=flat-square)](https://snyk.io/test/github/alvis/presetter?targetFile=packages/preset-react/package.json&style=flat-square)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter-preset-react?style=flat-square)](https://libraries.io/npm/presetter-preset-react)
[![license](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)

</div>

## Features

**presetter-preset-react** is an opinionated preset for you to setup a React project in a fraction of time you usually take via [**presetter**](https://github.com/alvis/presetter).

- ✨ TSX support
- 🧪 @testing-library/react
- 📝 Recommended rules from eslint-plugin-react

## Quick Start

[**FULL DOCUMENTATION IS AVAILABLE HERE**](https://github.com/alvis/presetter/blob/master/README.md)

1. Bootstrap your project with `presetter-preset-esm` & `presetter-preset-react`

```shell
npx presetter use presetter-preset presetter-preset-react
```

That's. One command and you're set.

2. Develop and run life cycle scripts provided by the preset

At this point, all development packages specified in the preset are installed,
and now you can try to run some example life cycle scripts (e.g. run prepare).

![Demo](https://raw.githubusercontent.com/alvis/presetter/master/assets/demo.gif)

## Project Structure

After installation, your project file structure should resemble the following or with more configuration files if you also installed other presets such as [`presetter-preset-esm`](https://github.com/alvis/presetter/blob/master/packages/preset-esm).

Implement your business logic under `source` and prepare tests under `spec`. The `.d.ts` files are handy type definitions for you to import `.css` or image files in typescript.

**TIPS** You can always change the source directory to other (e.g. src) by setting the `source` variable in `.presetterrc.json`. See the [customization](https://github.com/alvis/presetter/blob/master/packages/preset-react#customization) section below for more details.

```
(root)
 ├─ .eslintrc.json
 ├─ .git
 ├─ .presetterrc.json
 ├─ node_modules
 ├─ source
 │   ├─ <folders>
 │   ├─ index.ts
 │   ├─ (auxiliary).ts
 ├─ spec
 │   ├─ *.spec.ts
 ├─ types
 │   ├─ image.d.ts
 │   ├─ style.d.ts
 │   ├─ (type).d.ts
 ├─ package.json
 └─ tsconfig.json
```

## Customization

By default, this preset exports a handy configuration set for a React project written in typescript.
But you can further customize (either extending or replacing) the configuration by specifying the change in the config file (`.presetterrc` or `.presetterrc.json`).

These settings are available in the `config` field in the config file. For directories, the setting is specified in the `variable` field.

The structure of `.presetterrc` should follow the interface below:

```ts
interface PresetterRC {
  /** name(s) of the preset e.g. presetter-preset-react */
  name: string | string[];
  /** additional configuration passed to the preset for generating the configuration files */
  config?: {
    //  ┌─ configuration for other tools via other presets (e.g. presetter-preset-esm)
    // ...

    /** configuration to be merged with .eslintrc */
    eslint?: Record<string, unknown>;
    /** configuration to be merged with tsconfig.json */
    tsconfig?: Record<string, unknown>;
    /** variables to be substituted in templates */
    variable?: {
      /** the directory containing all source code (default: source) */
      source?: string;
      /** the directory containing all typing files (default: types) */
      types?: string;
      /** the directory containing all output tile (default: source) */
      output?: string;
    };
  };
}
```
