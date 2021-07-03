# ![Logo](logo.svg)

<div align="center">

_Setup build settings from a template, quick and right!_

•   [Quick Start](#quick-start)   •   [Concept](#concept)   •   [Known Limitations](#known-limitations)   •   [FAQ](#faq)   •   [About](#about)   •

</div>

Sharing configurations for building tools across projects is painful. How many time you've copied configs for `babel`, `eslint`, `jest`, `typescript` or the life cycle scripts in `package.json`?
How many dev dependencies you have to install before you can kick start a project?

What's more, what if you want to update configs for all projects? :man_facepalming:

**Presetter is a utility for setting up building tools for your project from a template.** This means with just only two dev packages, namely this package and your favourite template preset, all essential development packages, such as typescript, eslint and jest, together with their configuration files provided by the preset, are automatically setup for you upon the project's initialisation.

## Quick Start

1. Bootstrap your project with a preset (e.g. presetter-preset)

```shell
npx presetter use <preset package name>
```

That's. One command and you're set.

2. Develop and run life cycle scripts provided by the preset

At this point, all development packages specified in the preset are installed,
and now you can try to run some example life cycle scripts provided by the preset (e.g. try `npx run test`).

![Demo](demo.gif)

## Concept

The concept comprises two part: [presetter](packages/presetter) (this package) and a [preset](packages/preset) (which can be provided by yourself).

### presetter

Presetter is a utility for two tasks:

1. setting up a development environment for a project by
   - installing development dependencies specified in the preset without polluting package.json
   - symlinking configuration files (e.g. `.babelrc`) from the preset module to the project root
2. merging life-cycle scripts from the template and the local version in package.json

[SEE HERE FOR THE CLI USAGE](packages/presetter#usage)

#### Life-Cycle Scripts

When you run `presetter run <task>` (or its alias `run <task>`), presetter will perform the following:

1. Combine the local scripts and those provided by the preset
2. Backup `package.json` as `~package.json` 
3. Place the combined script into a temporary `package.json` 
4. Run the task via `npm run <task>` as usual
5. Restore the original `package.json` after running the task

_PROTIPS_:
Local scripts always have a higher priority than the template scripts.
So you can always customise the life cycle script by putting your own version into `package.json`.

Upon running a life-cycle script involving the `run <task>` command in `package.json`, presetter will automatically resolve the task according to the template, so that you can always use the conventional `npm run <task>` as usual.

For example, with the following template and local `package.json`,
presetter will generate a `package.json` with the content below before running the script.

**Template**
```json
{
  "scripts": {
    "build": "tsc",
    "prepare": "npm run lint && npm run build",
    "lint": "eslint **/*.ts",
    "test": "jest"
  }
}
```

**Local package.json**
```json
{
  "scripts": {
    "build": "run build",
    "lint": "eslint --fix **/*.ts",
    "coverage": "run test -- --coverage"
  }
}
```

**Output**
```json
{
  "scripts": {
    "build": "tsc",
    "prepare": "npm run lint && npm run build",
    "lint": "eslint --fix **/*.ts",
    "test": "jest",
    "coverage": "jest --coverage"
  }
}
```

### preset

A preset is a collection of configuration to be shared.
An example can be found in the [demo preset](/packages/preset) which is also used for developing presetter.

A preset contains three parts:

1. A set of development packages declared as `peerDependencies` in the `package.json`:
   For a project adopting a preset, during its installation these packages will be installed by presetter automatically without making changes to the project's package.json.
2. A set of configuration files:
   These configuration files are to be symlinked to the adopting project's root.
3. A set of life cycle script template:
   These scripts provide the base where the `presetter run` command will use for merging.

For 1, the set of development packages to be installed is exported via `package.json`.
For 2 & 3, the configuration is exported via the default function in the preset package ([example](/packages/preset/source/index.ts)).

#### Config Extension

To overwrite part of the preset configuration (e.g. add a rule to the eslint config file template),
you can specify the new configuration under the `config` parameter in the configuration file (`.presetterrc` or `.presetterrc.json`).

During installation and life cycle script execution,
the content of this parameter will be passed to the configurator function provided by the preset package.
With this parameter, the preset can dynamically export customised config files and life cycle scripts.
You can [checkout the example preset to see how it work](/packages/preset/source/index.ts).

## Known Limitations

#### Missing dependent development packages after `npm install <package>`

In npm v5 & v6, any subsequent `npm install <package>` command will cause the installed development packages to be removed after installation.
This is due to a side effect of the introduction of `package-lock.json` in npm v5,
where the npm dedupe process begins to remove any packages not recorded in `package-lock.json` after package installation.

Since the development packages are only declared as peer dependencies in the preset package, it's not recorded in `package-lock.json` and therefore the problem.

Currently, there are two solutions

1. Run `presetter bootstrap` manually after each additional package installation.
   This will make sure any missing dependencies will be installed again.
2. Use `yarn` to install additional packages as it won't remove any packages during the process.

This problem, fortunately, ~~should soon~~ has now become a history when [npm v7](https://blog.npmjs.org/post/186983646370/npm-cli-roadmap-summer-2019) was released.
The [auto peer dependencies installation](https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli/) feature will now resolve this issue for good.

## FAQ

#### Life cycle scripts are broken 

It may be the case when a life cycle script crashed, resulting in `package.json` not be restored to its original version.
To fix the issue, you can simply replace the temporary `package.json` by its original at `~package.json`.

## About

This project originated from my personal pain on maintaining a number of projects with fairly similar structure, having exactly the same build and test procedures, same `.babelrc`, `tsconfig.json` etc.
Every time when I setup a new project, I have to copy and setup the following **32** development dependencies!!!

1. @babel/cli
2. @babel/core
3. @babel/plugin-proposal-class-properties
4. @babel/plugin-proposal-decorators
5. @babel/plugin-proposal-nullish-coalescing-operator
6. @babel/plugin-proposal-object-rest-spread
7. @babel/plugin-proposal-optional-chaining
8. @babel/preset-env
9. @babel/preset-typescript
10. @types/jest
11. @types/node
12. @typescript-eslint/eslint-plugin
13. @typescript-eslint/parser
14. eslint
15. eslint-config-prettier
16. eslint-plugin-eslint-comments
17. eslint-plugin-header
18. eslint-plugin-jsdoc
19. eslint-plugin-no-secrets
20. ~~eslint-plugin-sonarjs~~ ([disabled due to its incompatibility with eslint v7](https://github.com/SonarSource/eslint-plugin-sonarjs/issues/162))
21. jest
22. leasot
23. npm-run-all
24. prettier
25. shx
26. standard-version
27. ts-jest
28. ts-node
29. ts-node-dev
30. tsconfig-paths
31. tscpaths
32. typescript

So, I imagine, if it is possible to reduce all these 3x packages into 1?
I tried to look for a solution but no luck.
Therefore, I make this tool and make it available to everyone who has a similar problem as me.

### Philosophy

Every design has a design philosophy and here are those for presetter:
- Presetter should do one and only one job, which is providing building tools for the adopting project.
- A preset should be made flexible enough to adapt to different project need while maintaining the reusability.
- For the adopting project, updating only the preset version should be the only thing you need to do for updating the build dev dependencies and configuration files.
- Any changes to the local config should be preserved, even during a preset update.

### Related Projects

Let me know if you find any similar projects.
It would be nice to be included here.

### Contributing

Any new ideas? or got a bug? We definitely would love to have your contribution!

If you have any suggestion or issue, feel free to let the community know via [issues](../../issues).

Further, read the [contribution guide](CONTRIBUTING.md) for the detail of the code structure and useful commands etc.

### License

Copyright © 2020, [Alvis Tang](https://github.com/alvis). Released under the [MIT License](LICENSE).

[![license](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)
