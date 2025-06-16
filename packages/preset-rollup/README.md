<div align="center">

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

🏄🏻 _A collection of opinionated configurations for a building a code bundle via rollup for presetter_

•   [Quick Start](#quick-start)   •   [Project Structure](#project-structure)   •   [Customization](#customization)   •   [Scripts](#script-template-summary)   •

[![npm](https://img.shields.io/npm/v/presetter-preset-rollup?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![security](https://img.shields.io/snyk/vulnerabilities/github/alvis/presetter/packages/preset-rollup/package.json.svg?style=flat-square)](https://snyk.io/test/github/alvis/presetter?targetFile=packages/preset-rollup/package.json&style=flat-square)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter-preset-rollup?style=flat-square)](https://libraries.io/npm/presetter-preset-rollup)
[![license](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)

</div>

## Features

**presetter-preset-rollup** is an opinionated preset for you to setup rollup in a fraction of time you usually take via [**presetter**](https://github.com/alvis/presetter).

- 🗞️ Rollup 4
- 2️⃣ Dual CJS and ESM modules export by default
- 🍄 Common rollup packages included as one single bundle
  - `@rollup/plugin-commonjs`
  - `@rollup/plugin-graphql`
  - `@rollup/plugin-image`
  - `@rollup/plugin-json`
  - `@rollup/plugin-typescript`
  - `@rollup/plugin-yaml`
  - `rollup` <~ of course including rollup itself
  - `rollup-plugin-postcss`
  - `rollup-plugin-tsconfig-paths`
  - `rollup-plugin-visualizer`

## Quick Start

To kickstart a library, set the following in your `package.json` and follow the guide below.

```json
{
  "main": "lib/index.js",
  "module": "lib/index.mjs",
  "types": "lib/index.d.ts",
  "exports": {
    "require": "./lib/index.js",
    "import": "./lib/index.mjs"
  },
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

### 1. Bootstrap your project with presetter-preset-rollup

On your project root, create a `presetter.config.ts` file with the following content:

```typescript
// presetter.config.ts

import { preset } from 'presetter';
import essentials from 'presetter-preset-essentials';
import rollup from 'presetter-preset-rollup';

export default preset('project name', {
  // NOTE
  // you may need an additional preset like presetter-preset-essentials for typescript support and other basic toolings
  extends: [essentials, rollup],
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

After installation, your project file structure should resemble the following or with more configuration files if you also installed other presets such as [`presetter-preset-esm`](https://github.com/alvis/presetter/blob/master/packages/preset-esm).

Implement your business logic under `src` and prepare tests under `spec`.

**TIPS** You can always change the source directory to other (e.g. src) by setting the `src` variable in `presetter.config.ts`. See the [customization](https://github.com/alvis/presetter/blob/master/packages/preset-rollup#customization) section below for more details.

```
(root)
 ├─ .git
 ├─ presetter.config.ts
 ├─ node_modules
 ├─ src
 │   ├─ <folders>
 │   ├─ index.ts
 │   ├─ (auxiliary).ts
 ├─ spec
 │   ├─ *.spec.ts
 ├─ package.json
 └─ rollup.config.ts
```

## Customization

By default, this preset exports a handy configuration for a typescript project.
You can further customize (either extending or replacing) the configuration by specifying the changes in the config file `presetter.config.ts`.

## Script Template Summary

- **`run build`**: Transpile source code from typescript and replace any mapped paths
- **`run clean`**: Clean up any previously transpiled code
- **`run develop -- <file path>`**: Create a service that run the specified file whenever the source has changed
- **`run test`**: Run all tests
- **`run test:unit`**: Run only unit tests
- **`run test:int`**: Run only integration tests
- **`run test:e2e`**: Run only end-to-end tests
- **`run watch`**: Rerun all tests whenever the source has change
- **`run coverage`**: Run all test with coverage report
- **`run release`**: Bump the version and automatically generate a change log
- **`run release -- --prerelease <tag>`**: Release with a prerelease tag
