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

**presetter-preset-react** is an extension of [**presetter-preset-web**](https://github.com/alvis/presetter) with additional tools to help you to develop a React project with ease via [**presetter**](https://github.com/alvis/presetter).

- ✨ TSX support
- 📝 Recommended rules from eslint-plugin-react

## Quick Start

[**FULL DOCUMENTATION IS AVAILABLE HERE**](https://github.com/alvis/presetter/blob/master/README.md)

### 1. Bootstrap your project with presetter-preset-react

On your project root, create a `presetter.config.ts` file with the following content:

```typescript
// presetter.config.ts

import { preset } from 'presetter';
import esm from 'presetter-preset-esm';
import react from 'presetter-preset-react';

export default preset('project name', {
  // NOTE
  // you don't need to extends presetter-preset-web presets here since they are already included in the react preset
  // however, you may need an additional preset like presetter-preset-esm for ESM support and other basic toolings
  extends: [esm, react],
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
The `.d.ts` files are handy type definitions for you to import `.css` or image files in typescript.

**NOTE** You will notice there's no additional configuration file on your root folder like other presets such as [`presetter-preset-esm`](https://github.com/alvis/presetter/blob/master/packages/preset-esm).
It's because `presetter-preset-react` extends `presetter-preset-web` which is a bundle only preset, meaning it only helps you to install the development packages specified in this preset only.

**TIPS** You can always change the source directory to other (e.g. src) by setting the `src` variable in `presetter.config.ts`. See the [customization](https://github.com/alvis/presetter/blob/master/packages/preset-essentials#customization) section below for more details.

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
 ├─ types
 │   ├─ image.d.ts
 │   ├─ style.d.ts
 │   ├─ (type).d.ts
 ├─ eslint.config.ts
 ├─ package.json
 └─ tsconfig.json
```

## Customization

By default, this preset exports a handy configuration set for a React project written in typescript.

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
