<div align="center">

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

🏄🏻 _A collection of opinionated configurations for a web project in typescript for presetter_

•   [Quick Start](#quick-start)   •   [Project Structure](#project-structure)   •   [Customization](#customization)   •   [Scripts](#script-template-summary)   •

[![npm](https://img.shields.io/npm/v/presetter-preset-web?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/workflow/status/alvis/presetter/code%20test?style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![security](https://img.shields.io/snyk/vulnerabilities/github/alvis/presetter/packages/preset-web/package.json.svg?style=flat-square)](https://snyk.io/test/github/alvis/presetter?targetFile=packages/preset-web/package.json&style=flat-square)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter-preset-web?style=flat-square)](https://libraries.io/npm/presetter-preset-web)
[![license](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)

</div>

## Features

**presetter-preset-web** is an opinionated preset for you to setup some common tools for a web project in a fraction of time you usually take via [**presetter**](https://github.com/alvis/presetter)

- 🕸️ GraphQL 15
- 💄 PostCSS 8
- 💨 TailwindCSS 2

## Quick Start

[**FULL DOCUMENTATION IS AVAILABLE HERE**](https://github.com/alvis/presetter/blob/master/README.md)

1. Bootstrap your project with `presetter-preset-esm` & `presetter-preset-web`

```shell
npx presetter use presetter-preset presetter-preset-web
```

That's. One command and you're set.

2. Develop and run life cycle scripts provided by the preset

At this point, all development packages specified in the preset are installed,
and now you can try to run some example life cycle scripts (e.g. run prepare).

![Demo](https://raw.githubusercontent.com/alvis/presetter/master/assets/demo.gif)

## Project Structure

After installation, your project file structure should resemble the following or with more configuration files if you also installed other presets such as [`presetter-preset-esm`](https://github.com/alvis/presetter/blob/master/packages/preset-essentials).

**NOTE** You will notice there's no additional configuration file on your root folder like other presets such as [`presetter-preset-esm`](https://github.com/alvis/presetter/blob/master/packages/preset-essentials).
It's because `presetter-preset-web` is a bundle only preset, meaning it only helps you to install the development packages specified in this preset only.

```
(root)
 ├─ .git
 ├─ .presetterrc.json
 ├─ node_modules
 └─ package.json
```

## Customization

As a bundle only preset, it offers no further customization.

However, you are still required to specify the preset name in `.presetterrc` or `.presetterrc.json` as the interface below.

**NOTE**: You may want to use other presets together with `presetter-preset-web` to setup your project, specify the presets in `.presetterrc` or `.presetterrc.json` as well and checkout their available customization.

```ts
interface PresetterRC {
  /** name(s) of the preset e.g. "presetter-preset-web" or ["presetter-preset-esm", "presetter-preset-web", "presetter-preset-react"] */
  name: string | string[];
}
```
