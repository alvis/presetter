<div align="center">

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

🏄🏻 _Setup build settings from a template, quick and right!_

•   [Quick Start](#quick-start)   •   [Usage](#usage)   •   [Customization](#customization)   •

[![npm](https://img.shields.io/npm/v/presetter?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/workflow/status/alvis/presetter/code%20test?style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![security](https://img.shields.io/snyk/vulnerabilities/github/alvis/presetter/packages/presetter/package.json.svg?style=flat-square)](https://snyk.io/test/github/alvis/presetter?targetFile=packages/presetter/package.json&style=flat-square)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter-presetter?style=flat-square)](https://libraries.io/npm/presetter-presetter)
[![license](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)

</div>

Sharing configurations for building tools across projects is painful. How many time you've copied configs for `babel`, `eslint`, `jest`, `typescript` or the life cycle scripts in `package.json`?
How many dev dependencies you have to install before you can kick start a project?

What's more, what if you want to update configs for all projects? :man_facepalming:

**Presetter is a utility for setting up building tools for your project from a template.** This means with just only two dev packages, namely this package and your favorite template preset, all essential development packages, such as typescript, eslint and jest, together with their configuration files provided by the preset, are automatically setup for you upon the project's initialization.

---

## Quick Start

[**FULL DOCUMENTATION IS AVAILABLE HERE**](https://github.com/alvis/presetter/blob/master/README.md)

1. Bootstrap your project with a preset (e.g. [presetter-preset-esm](https://github.com/alvis/presetter/tree/master/packages/preset-essentials))

```shell
npx presetter use <preset package name>
```

That's. One command and you're set.

2. Develop and run life cycle scripts provided by the preset

At this point, all development packages specified in the preset are installed,
and now you can try to run some example life cycle scripts (e.g. run prepare) provided by the template.

![Demo](https://raw.githubusercontent.com/alvis/presetter/master/assets/demo.gif)

---

## Usage

Presetter is shipped with a command line interface, which has 4 commands

```
⚙ presetter: your preset configurator

Commands:
  presetter use <preset>  adopt the specified preset to the project
  presetter bootstrap     apply the specified preset to the project
  presetter run           run a template script
  presetter unset         remove all artifacts created by the preset

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

### Adopting a Preset

**Note**: No matter which situation you're in below,
you don't need to bootstrap the preset as it's done automatically.

#### To a Fresh Project

To adopt a preset to an empty project, simple run `presetter use <preset>` on your project root.
By running this command, it will

- create a `.presetterrc` file under the root, detailing the preset setting,
- add a `presetter bootstrap` command to the prepublish life cycle script in your `package.json`, and
- bootstrap the preset at the end of the process.

#### To an Existing Project

To adopt a preset to an existing project with all the development and life cycle script setup,
follow the steps below:

1. Check if there's anything you want to keep your own version (e.g. eslintrc) instead of the one provided by the preset
2. Remove any unnecessary dev dependencies, .config files or life cycle scripts
3. Make sure `presetter bootstrap` will be executed in the post installation life cycle.
4. Add your preset via `presetter use <preset package name>`

### Bootstrapping Everything Provided by the Preset

A preset is merely a collection of configuration files and dependency declarations,
they have to be installed to the adopting project and it's what `presetter bootstrap` for.

You would have to run `presetter bootstrap` manually

- after running `npm install` and `presetter bootstrap` isn't set up in the prepublish life cycle, or
- [you installed a new packages via npm](https://github.com/alvis/presetter/blob/master/README.md#missing-dependent-development-packages-after-npm-install-package).

### Running a Life Cycle Script

You can combine you local life cycle script definition with the template provided by the preset.

Simple run `npx presetter run <task>` or an equivalent short cut `npx run <task>`,
or if you prefer to run the script in the conventional way,
you can set life cycle scripts in `package.json` to something like

```json
{
  "scripts": {
    "build": "run build",
    "coverage": "run coverage",
    "lint": "run lint",
    "prepare": "run prepare",
    "prepublishOnly": "run prepublishOnly",
    "release": "run release --",
    "test": "run test --",
    "watch": "run watch"
  }
}
```

When you run the command, presetter will combine the scripts,
place them into a temporary `package.json` and run the task via `npm run <task>` as usual.

_PROTIPS_: Install `presetter` globally via `npm install -g presetter` and you can ignore the need to call `npx` all the time.

---

## Customization

Presetter support customization in two ways.

#### Preset Customization

If your preset support customization, you can supply the customization parameter via the `config` field in `.presetterrc`.
e.g. For [presetter-preset-esm](https://github.com/alvis/presetter/tree/master/packages/preset-essentials), you can adding an expression to `.gitignore` with the following in `.presetterrc`:

```json
{
  "preset": "presetter-preset-esm",
  "config": {
    "gitignore": ["<pattern to ignore>"]
  }
}
```

#### Local Configuration

If you prefer your own local configuration than the one provided by the preset, just simply overwrite it.
Presetter always respects any local version which is not symlinked to the preset.
