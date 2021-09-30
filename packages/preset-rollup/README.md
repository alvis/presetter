<div align="center">

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

🏄🏻 _A collection of opinionated configurations for a building a code bundle via rollup for presetter_

•   [Quick Start](#quick-start)   •   [Project Structure](#project-structure)   •   [Customisation](#customisation)   •   [Scripts](#script-template-summary)   •

[![npm](https://img.shields.io/npm/v/presetter-preset-rollup?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/workflow/status/alvis/presetter/code%20test?style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![security](https://img.shields.io/snyk/vulnerabilities/github/alvis/presetter/packages/preset-rollup/package.json.svg?style=flat-square)](https://snyk.io/test/github/alvis/presetter?targetFile=packages/preset-rollup/package.json&style=flat-square)
[![dependencies](https://img.shields.io/david/alvis/presetter?path=packages/preset-rollup&style=flat-square)](https://david-dm.org/alvis/presetter?path=packages/preset-rollup)
[![license](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)

</div>

## Features

**presetter-preset-rollup** is an opinionated preset for you to setup rollup in a fraction of time you usually take via [**presetter**](https://github.com/alvis/presetter).

- 🗞️ Rollup 2
- 2️⃣ Dual CJS and ESM modules export by default
- 🍄 Common rollup packages included as one single bundle
  - `@rollup/plugin-commonjs`
  - `@rollup/plugin-graphql`
  - `@rollup/plugin-image`
  - `@rollup/plugin-json`
  - `@rollup/plugin-yaml`
  - `rollup` <~ of course including rollup itself
  - `rollup-plugin-postcss`
  - `rollup-plugin-ts`
  - `rollup-plugin-tsconfig-paths`
  - `rollup-plugin-visualizer`

## Quick Start

[**FULL DOCUMENTATION IS AVAILABLE HERE**](https://github.com/alvis/presetter/blob/master/README.md)

1. Bootstrap your project with `presetter-preset-essentials` & `presetter-preset-rollup`

```shell
npx presetter use presetter-preset presetter-preset-rollup
```

That's. One command and you're set.

After bootstrapping, you would see a lot of configuration files generated, including a `rollup.config.ts` that has all plugins configured properly for you.

2. Develop and run life cycle scripts provided by the preset

At this point, all development packages specified in the preset are installed,
and now you can try to run some example life cycle scripts (e.g. run prepare).

![Demo](https://raw.githubusercontent.com/alvis/presetter/master/assets/demo.gif)

**IMPORTANT**
For NodeJS to import the correct export, remember to specify the following in your project's package.json too!

```json
{
  "main": "lib/index.js",
  "module": "lib/index.mjs",
  "types": "lib/index.d.ts",
  "exports": {
    "require": "./lib/index.js",
    "import": "./lib/index.mjs"
  }
}
```

## Project Structure

After installation, your project file structure should resemble the following or with more configuration files if you also installed other presets such as [`presetter-preset-essentials`](https://github.com/alvis/presetter/blob/master/packages/preset-essentials).

Implement your business logic under `source` and prepare tests under `spec`.

**TIPS** You can always change the source directory to other (e.g. src) by setting the `source` variable in `.presetterrc.json`. See the [customisation](https://github.com/alvis/presetter/blob/master/packages/preset-rollup#customisation) section below for more details.

```
(root)
 ├─ .git
 ├─ .preseterrc.json
 ├─ node_modules
 ├─ source
 │   ├─ <folders>
 │   ├─ index.ts
 │   ├─ (auxiliary).ts
 ├─ spec
 │   ├─ *.spec.ts
 ├─ package.json
 └─ rollup.config.ts
```

## Customisation

By default, this preset exports a handy configuration for rollup for a typescript project.
But you can further customise (either extending or replacing) the configuration by specifying the change in the config file (`.presetterrc` or `.presetterrc.json`).

These settings are available in the `config` field in the config file. For directories, the setting is specified in the `variable` field.

The structure of `.presetterrc` should follow the interface below:

```ts
interface PresetterRC {
  /** name(s) of the preset e.g. presetter-preset-rollup */
  name: string | string[];
  /** additional configuration passed to the preset for generating the configuration files */
  config?: {
    //  ┌─ configuration for other tools via other presets (e.g. presetter-preset-essentials)
    // ...

    /** additional configuration for rollup */
    rollup?: {
      //  ┌─ any configuration supported by rollup, see https://rollupjs.org/guide/en/#configuration-files
      // ...

      /** list of plugin and its options */
      plugins?:
        | NormalisedRollupConfig['plugins']
        | Array<
            | string
            | [name: string]
            | [
                name: string,
                options:
                  | Record<string, unknown>
                  | `@apply ${string}`
                  | `@import ${string}`
                  | null,
              ]
          >;
    };
  };
  /** variables to be substituted in templates */
  variable?: {
    /** the directory containing all source code (default: source) */
    source?: string;
    /** the directory containing all output tile (default: source) */
    output?: string;
  };
}
```

For generating `rollup.config.ts`, this preset also support the `@apply` and `@import` directives such that you can also import configuration from other packages or ts/js files.

The usage of the directives is simple. In any part of the configuration for rollup, you can simply put
`@apply package_name` or `@import package_name` and the preset will automatically replace the content with an imported variable. For example:

```json
{
  "rollup": {
    "plugins": [
      [
        "@apply rollup-plugin-postcss[default]",
        { "plugins": "@import ./postcss.config[default.plugins]" }
      ]
    ]
  }
}
```

will create a `rollup.config.ts` file with the following content:

```ts
import * as import0 from 'rollup-plugin-postcss';
import * as import1 from './postcss.config';

export default {
  plugins: [import0.default(...[{ plugins: import1.default.plugins }])],
};
```

The syntax for both the directives is quite similar.
Use `@apply` in a situation that you have to invoke a function from an imported package,
such as `rollup-plugin-postcss` in the above example.
You can also specify the arguments for the invoked function in the form of `["@apply package", options]`

For `@import`, use it if you want to import value from another package or ts/js file.
For example, `@import ./postcss.config[default.plugins]` would allow you to refer `default.plugins` from `./postcss.config` in the above example.

In addition to the directives, to specify the plugins for rollup, you can write it in three ways similar to babel.

1. A object with plugin name as the key and its options as its value e.g. `{'@apply @rollup/plugin-typescript[default]': {options}}`
2. Name of a plugin in an array e.g. `['@apply @rollup/plugin-typescript[default]']`
3. Doublet of `[plugin name, options]` in an array e.g. `[['@apply @rollup/plugin-typescript[default]', {options}]]`

## Script Template Summary

- **`run build`**: Bundle your code via rollup
- **`run develop`**: Continuous code build and watch
