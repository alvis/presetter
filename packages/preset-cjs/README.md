<div align="center">

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

🏄🏻 _A collection of opinionated configurations for a typescript project for presetter_

•   [Quick Start](#quick-start)   •   [Project Structure](#project-structure)   •   [Customization](#customization)   •   [Scripts](#script-template-summary)   •

[![npm](https://img.shields.io/npm/v/presetter-preset-cjs?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![security](https://img.shields.io/snyk/vulnerabilities/github/alvis/presetter/packages/preset-cjs/package.json.svg?style=flat-square)](https://snyk.io/test/github/alvis/presetter?targetFile=packages/preset-cjs/package.json&style=flat-square)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter-preset-cjs?style=flat-square)](https://libraries.io/npm/presetter-preset-cjs)
[![license](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)

</div>

**presetter-preset-cjs** is an opinionated extension of [**presetter-preset-essentials**](https://github.com/alvis/presetter/tree/master/packages/preset-essentials) but loaded with tools to help you to develop an common js application with ease. As the same as [**presetter-preset-esm**](https://github.com/alvis/presetter/tree/master/packages/preset-esm), it's designed to help you get started with a typescript project in a fraction of time you usually take via [**presetter**](https://github.com/alvis/presetter).

With `presetter-preset-cjs`, it provides everything bundled from presetter-preset-essentials, plus the ease of writing an commonjs application.

## Quick Start

To kickstart a CommonJS application, set the following in your `package.json` and follow the guide below.

```json
{
  "type": "commonjs",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "prepare": "run prepare",
    "build": "run build",
    "clean": "run clean",
    "test": "run test",
    "watch": "run watch",
    "coverage": "run coverage"
  }
}
```

[**FULL DOCUMENTATION IS AVAILABLE HERE**](https://github.com/alvis/presetter/blob/master/README.md)

### 1. Bootstrap your project with presetter-preset-cjs

On your project root, create a `presetter.config.ts` file with the following content:

```typescript
// presetter.config.ts
export { default } from 'presetter-preset-cjs';
```

or if customization is needed. For example, you can extend the configuration with more presets:

```typescript
// presetter.config.ts

import { preset } from 'presetter';
import cjs from 'presetter-preset-cjs';
import other from 'other-preset';

export default preset('project name', {
  extends: [cjs, other],
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

Implement your business logic under `src` and prepare tests under `spec`.

**TIPS** You can always change the source directory by setting the `source` variable in `presetter.config.ts`. See the [customization](https://github.com/alvis/presetter/blob/master/packages/preset-essentials#customization) section below for more details.

```plain
(root)
 ├─ .git
 ├─ .husky
 ├─ .lintstagedrc.json
 ├─ .npmignore
 ├─ .prettierrc.json
 ├─ presetter.config.ts
 ├─ node_modules
 ├─ src
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
- **`run test:unit`**: Run unit tests only (files matching *:UNIT pattern)
- **`run test:int`**: Run integration tests only (files matching *:INT pattern)
- **`run test:e2e`**: Run end-to-end tests only (files matching *:E2E pattern)
- **`run watch`**: Rerun unit tests whenever the source has changed
- **`run coverage`**: Run all tests with coverage report
- **`run release`**: Bump the version and automatically generate a change log
- **`run release -- --prerelease <tag>`**: Release with a prerelease tag
