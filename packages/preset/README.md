# presetter-preset

> 🏄🏻 A collection of opinionated configurations for a nodejs project in typescript via presetter

[![npm](https://img.shields.io/npm/v/presetter-preset?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/workflow/status/alvis/presetter/continuous%20integration?style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![security](https://img.shields.io/snyk/vulnerabilities/github/alvis/presetter/packages/preset/package.json.svg?style=flat-square)](https://snyk.io/test/github/alvis/presetter?targetFile=packages/preset/package.json&style=flat-square)
[![dependencies](https://img.shields.io/david/alvis/presetter?path=packages/preset&style=flat-square)](https://david-dm.org/alvis/presetter?path=packages/preset)
[![license](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)

In addition to a set of opinionated configuration files, it also provides a number of essential lifecycle and helper commands.

## Quick Start

[**FULL DOCUMENTATION IS AVAILABLE HERE**](https://github.com/alvis/presetter/blob/master/README.md)

1. Bootstrap your project with a preset (e.g. presetter-preset)

```shell
$ npx presetter use <preset package name>
```

That's. One command and you're set.

2. Develop and run life cycle scripts provided by the preset

At this point, all development packages specified in the preset are installed,
and now you can try to run some example life cycle scripts (e.g. run prepare).

![Demo](https://raw.githubusercontent.com/alvis/presetter/master/demo.gif)

## Project Structure

After installing this preset, your project file structure should look like the following.

Implement your business logic under `source` and prepare tests under `spec`.

```
(root)
 ├─ .babelrc
 ├─ .eslintrc.yaml
 ├─ .git
 ├─ .gitignore
 ├─ .jestrc
 ├─ .npmignore
 ├─ .prettierrc
 ├─ node_modules
 ├─ source
 │   ├─ <folders>
 │   ├─ index.ts
 │   ├─ (auxillary).ts
 ├─ spec
 │   ├─ *.spec.ts
 ├─ package.json
 ├─ tsconfig.json
 └─ tsconfig.build.json
```

## Customisation

By default, this preset exports a handy configuration set for a nodejs project.
But you can further customise (either extending or replacing) the configuration by specifying the change in the project's `.presetterrc`.

These settings are available in the `config` field in `.presetterrc`. For directories, the setting is specified in the `directory` field, while configuration for other tools like babel and eslint are available in corresponding fields.

The structure of `.presetterrc` must be the following:

```ts
interface PresetterRC {
  /** name of the preset e.g. presetter-preset */
  name: string;
  /** additional configuration passed to the preset for generating the configuration files */
  config?: {
    /** configuration to be merged with .babelrc */
    babel?: Record<string, unknown>;
    /** configuration to be merged with .eslintrc */
    eslint?: Record<string, unknown>;
    /** configuration to be merged with .jestrc */
    jest?: Record<string, unknown>;
    /** patterns to be added to .gitignore */
    gitignore?: string[];
    /** patterns to be added to .npmignore */
    npmignore?: string[];
    /** configuration to be merged with .presetterrc */
    prettier?: Record<string, unknown>;
    /** configuration to be merged with tsconfig.json */
    tsconfig?: Record<string, unknown>;
    /** relative path to root directories for different file types */
    directory?: {
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
