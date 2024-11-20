<div align="center">

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

🏄🏻 _A collection of opinionated configurations for a typescript project for presetter_

•   [Quick Start](#quick-start)   •   [Project Structure](#project-structure)   •   [Customization](#customization)   •   [Scripts](#script-template-summary)   •

[![npm](https://img.shields.io/npm/v/presetter-preset-strict?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![security](https://img.shields.io/snyk/vulnerabilities/github/alvis/presetter/packages/preset-strict/package.json.svg?style=flat-square)](https://snyk.io/test/github/alvis/presetter?targetFile=packages/preset-strict/package.json&style=flat-square)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter-preset-strict?style=flat-square)](https://libraries.io/npm/presetter-preset-strict)
[![license](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)

</div>

**presetter-preset-strict** is an opinionated preset with stricter rules on eslint and vitest. It's designed to help you get started with a typescript project in a fraction of time you usually take via [**presetter**](https://github.com/alvis/presetter).

To work with presetter-preset-strict, you'll need another preset like [`presetter-preset-esm`](https://github.com/alvis/presetter/blob/master/packages/preset-esm) for ESM support and other basic toolings.

You can check out the [additional rules here](https://github.com/alvis/presetter/tree/master/packages/preset-strict/source).

In addition to a set of opinionated configuration files, it also provides a number of essential lifecycle and helper commands.

## Quick Start

[**FULL DOCUMENTATION IS AVAILABLE HERE**](https://github.com/alvis/presetter/blob/master/README.md)

### 1. Bootstrap your project with presetter-preset-strict

On your project root, create a `presetter.config.ts` file with the following content:

```typescript
// presetter.config.ts

import { preset } from 'presetter';
import esm from 'presetter-preset-esm';
import strict from 'presetter-preset-strict';

export default preset('project name', {
  // NOTE
  // you may need an additional preset like presetter-preset-esm for ESM support and other basic toolings
  extends: [esm, strict],
  override: {
    // override the configuration here
  },
});
```

Then, install your project as usual with `npm install` or any package manager you prefer.

### 2. Develop and run life cycle scripts provided by the preset

At this point, all development packages specified in the preset are installed,
and now you can try to run some example life cycle scripts (e.g. run prepare).

![Demo](https://raw.githubusercontent.com/alvis/presetter/master/assets/demo.gif)

## Project Structure

After installation, your project file structure should resemble the following, or include more configuration files if you also installed other presets.

Implement your business logic under `source` and prepare tests under `spec`.

**TIPS** You can always change the source directory to other (e.g. src) by setting the `source` variable in `presetter.config.ts`. See the [customization](https://github.com/alvis/presetter/blob/master/packages/preset-essentials#customization) section below for more details.

```
(root)
 ├─ .git
 ├─ .husky
 ├─ .lintstagedrc.json
 ├─ .npmignore
 ├─ .prettierrc.json
 ├─ presetter.config.ts
 ├─ node_modules
 ├─ source
 │   ├─ <folders>
 │   ├─ index.ts
 │   ├─ (auxiliary).ts
 ├─ spec
 │   ├─ *.spec.ts
 ├─ package.json
 ├─ eslint.config.ts
 ├─ tsconfig.json
 ├─ tsconfig.build.json
 └─ vitest.config.ts
```

## Customization

By default, this preset exports a handy configuration for a typescript project.
You can further customize (either extending or replacing) the configuration by specifying the changes in the config file `presetter.config.ts`.

## Script Template Summary

- **`run build`**: Transpile source code from typescript and replace any mapped paths
- **`run clean`**: Clean up any previously transpiled code
- **`run develop -- <file path>`**: Create a service that run the specified file whenever the source has changed
- **`run test`**: Run all tests
- **`run watch`**: Rerun all tests whenever the source has change
- **`run coverage`**: Run all test with coverage report
- **`run release`**: Bump the version and automatically generate a change log
- **`run release -- --prerelease <tag>`**: Release with a prerelease tag
