import { info } from 'node:console';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createInterface } from 'node:readline';

import { preset } from '@presetter/types';
import { createJiti } from 'jiti';

import { resolveProjectContext } from '../context';

import { bootstrap } from './bootstrap';
import { resolveBuilds } from './builds';
import { CONFIG_EXTENSIONS } from './config/search';
import { installPackages } from './install';
import { writePackageJson } from './manifest';
import { resolvePreset } from './resolution/preset';
import { resolveSetup } from './resolution/setup';

import type {
  Preset,
  PresetNode,
  ProjectContext,
  Scripts,
} from '@presetter/types';
import type { PackageJson } from 'type-fest';

import type { InstallResult, SetupPackages } from './install';

/** supported package managers for preset adoption */
export type PackageManager = 'npm' | 'pnpm' | 'bun';

/** options for adopting presets in a project */
export interface UseOptions {
  /** directory to search upward from for package.json */
  cwd?: string;
  /** fallback manager when package metadata and lockfiles are inconclusive */
  packageManager?: PackageManager;
  /** whether to replace dependencies the project declares with another specification */
  force?: boolean;
}

/** package manager selected by project metadata or a root lockfile */
interface DetectedPackageManager {
  /** supported installer selected by the project */
  manager: PackageManager;
  /** manifest field or lockfile that established the selection */
  source: string;
}

const LOCKFILES = {
  npm: ['package-lock.json', 'npm-shrinkwrap.json'],
  pnpm: ['pnpm-lock.yaml'],
  bun: ['bun.lock', 'bun.lockb'],
} satisfies Record<PackageManager, string[]>;

/**
 * installs presets and configures the nearest package as a Presetter project
 * @param presets package names with optional version ranges or tags
 * @param options target directory and package manager selection
 */
export async function use(
  presets: string[],
  options: UseOptions = {},
): Promise<void> {
  const { projectRoot, packageJson } = await resolveProjectContext(options.cwd);
  const { config, names, devDependencies } = createConfig(presets);
  const configPath = join(projectRoot, 'presetter.config.ts');

  await checkExistingConfigs(projectRoot, config);

  const flag = options.packageManager;
  const manager = await detectPackageManager(projectRoot, packageJson, flag);
  const manifestPath = join(projectRoot, 'package.json');
  const original = await readFile(manifestPath, 'utf8');

  const { readAnswer, close } = createAnswerReader();
  const installOptions = {
    cwd: projectRoot,
    force: options.force,
    readAnswer,
  };
  const install = async (
    packages: SetupPackages,
    previous?: InstallResult,
  ): Promise<InstallResult> => {
    const result = await installPackages(manager, packages, {
      ...installOptions,
      skipBuilds: previous?.build === false,
    });

    return {
      build: result.build,
      installed: result.installed || !!previous?.installed,
    };
  };
  try {
    const presetsResult = await install({ devDependencies });

    await writeFile(configPath, config);

    const context = await resolveProjectContext(projectRoot);
    const node = await resolveInstalledPresets(context, names);
    const declared = await resolveSetup(node, context);
    const setupResult = await install(declared, presetsResult);

    await writeSetupScripts(manifestPath, declared.scripts, original);

    const build =
      setupResult.build &&
      (setupResult.installed || (await resolveBuilds(manager, installOptions)));
    if (build) {
      await bootstrap(projectRoot);
    }
  } finally {
    await close();
  }
}

/**
 * resolves the written configuration's preset graph from the installed presets
 * @param context the target project context
 * @param names the preset packages the configuration extends
 * @returns the preset graph declaring the setup
 */
async function resolveInstalledPresets(
  context: ProjectContext,
  names: string[],
): Promise<PresetNode> {
  // NOTE: presetter.config.ts is not loaded here, because its resolution is cached and npm can relocate presets during the setup install
  const jiti = createJiti(join(context.projectRoot, 'package.json'), {
    moduleCache: false,
  });
  const presets = await Promise.all(
    [...new Set(names)].map(async (name) =>
      jiti.import<Preset>(name, { default: true }),
    ),
  );

  return resolvePreset(
    preset('presetter.config', { extends: presets }),
    context,
  );
}

/**
 * checks every loader-supported config before adopting a preset stack
 * @param projectRoot the target project directory
 * @param config the requested TypeScript configuration source
 * @throws {Error} when any config differs or uses an extension other than `.ts`
 */
async function checkExistingConfigs(
  projectRoot: string,
  config: string,
): Promise<void> {
  for (const extension of CONFIG_EXTENSIONS) {
    const filename = `presetter.config${extension}`;
    const path = join(projectRoot, filename);
    if (
      existsSync(path) &&
      (extension !== '.ts' || (await readFile(path, 'utf8')) !== config)
    ) {
      throw new Error(
        `${filename} at ${projectRoot} differs from the requested configuration; keep it and use bootstrap, or move it before running use`,
      );
    }
  }
}

/**
 * reads approval answers from the terminal, or line by line from piped input
 * @returns the answer reader and a release for piped input
 */
function createAnswerReader(): {
  readAnswer: () => Promise<string>;
  close: () => Promise<void>;
} {
  const answers = readAnswers();

  return {
    readAnswer: async () => {
      if (process.stdin.isTTY) {
        return readTerminalAnswer();
      }
      const { value } = await answers.next();

      return value ?? '';
    },
    close: async () => {
      await answers.return();
    },
  };
}

/**
 * reads one terminal answer and releases stdin before installation resumes
 * @returns the answer, or an empty string at EOF
 */
async function readTerminalAnswer(): Promise<string> {
  const input = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  try {
    const { value } = await input[Symbol.asyncIterator]().next();

    return value ?? '';
  } finally {
    input.close();
  }
}

/**
 * buffers piped lines across sequential prompts and closes input on completion
 * @yields {string} answers in input order
 */
async function* readAnswers(): AsyncGenerator<string, void> {
  const input = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  try {
    for await (const line of input) {
      yield line;
    }
  } finally {
    input.close();
  }
}

/**
 * writes setup scripts while retaining dependency updates and manifest formatting
 * @param manifestPath the target package.json
 * @param declared resolved script declarations
 * @param original original content providing indentation and newline preferences
 */
async function writeSetupScripts(
  manifestPath: string,
  declared: Scripts,
  original: string,
): Promise<void> {
  const manifest = JSON.parse(
    await readFile(manifestPath, 'utf8'),
  ) as PackageJson;
  const scripts = mergeSetupScripts(manifest.scripts ?? {}, declared);
  manifest.scripts = scripts;
  await writePackageJson(manifestPath, manifest, original);
}

/**
 * creates a deterministic project config from registry package specifications
 * @param presets package names with optional versions
 * @returns the configuration source and its preset package names
 */
function createConfig(presets: string[]): {
  config: string;
  names: string[];
  devDependencies: Record<string, string>;
} {
  if (presets.length === 0) {
    throw new Error('use requires at least one preset package');
  }

  const names = presets.map((specification) => {
    const match = /^((@[a-z0-9._-]+\/)?[a-z0-9][a-z0-9._-]*)(?:@.+)?$/.exec(
      specification,
    );

    if (!match) {
      throw new Error(
        `unsupported preset ${specification}; use a package name or name@range`,
      );
    }

    return match[1]!;
  });
  const uniqueNames = [...new Set(names)];
  const imports = uniqueNames
    .map((name, index) => `import preset${index} from '${name}';`)
    .join('\n');
  const references = uniqueNames.map((_, index) => `preset${index}`).join(', ');

  const config = `${imports}

import { preset } from 'presetter';

import { name } from './package.json' with { type: 'json' };

export default preset(name, {
  extends: [${references}],
});
`;

  const devDependencies = Object.fromEntries([
    ['presetter', ''],
    ...uniqueNames.map((name) => [
      name,
      presets[names.indexOf(name)]!.slice(name.length + 1),
    ]),
  ]);

  return { config, names, devDependencies };
}

/**
 * resolves a manager from the project, a fallback flag, or a terminal choice
 * @param root the project root
 * @param json the package manifest
 * @param fallback the explicit manager to use when detection is inconclusive
 * @returns the selected package manager
 */
async function detectPackageManager(
  root: string,
  json: PackageJson,
  fallback?: PackageManager,
): Promise<PackageManager> {
  const detected = detectProjectPackageManager(root, json);
  if (detected) {
    if (fallback && fallback !== detected.manager) {
      info(
        `Using ${detected.manager} from ${detected.source}; --package-manager=${fallback} was ignored`,
      );
    }

    return detected.manager;
  }

  return fallback ?? promptPackageManager(root);
}

/**
 * selects a manager from package metadata or unambiguous root lockfiles
 * @param root directory containing the manifest and lockfiles
 * @param json the package manifest
 * @returns the detected package manager and source, or undefined if inconclusive
 */
function detectProjectPackageManager(
  root: string,
  json: PackageJson,
): DetectedPackageManager | undefined {
  if (json.packageManager) {
    const manager = json.packageManager.split('@', 1)[0]!;

    if (Object.hasOwn(LOCKFILES, manager)) {
      return { manager: manager as PackageManager, source: 'packageManager' };
    }

    throw new Error(
      `unsupported packageManager ${json.packageManager} in package.json; set it to npm, pnpm or bun, or remove it`,
    );
  }

  const managers = (Object.keys(LOCKFILES) as PackageManager[]).flatMap(
    (manager) => {
      const source = LOCKFILES[manager].find((file) =>
        existsSync(join(root, file)),
      );

      return source ? { manager, source } : [];
    },
  );

  return managers.length === 1 ? managers[0] : undefined;
}

/**
 * asks terminal users to select a manager when project detection is inconclusive
 * @param root the project root to include in the failure message
 * @returns the selected package manager
 */
async function promptPackageManager(root: string): Promise<PackageManager> {
  while (process.stdin.isTTY) {
    info('Choose a package manager (npm, pnpm or bun):');
    const line = await readTerminalAnswer();
    const answer = line.trim();

    if (!answer) {
      break;
    }
    if (Object.hasOwn(LOCKFILES, answer)) {
      return answer as PackageManager;
    }
  }

  throw new Error(
    `cannot detect package manager at ${root}; specify --package-manager=npm|pnpm|bun`,
  );
}

/**
 * adds missing setup scripts while preserving existing commands
 * @param existing the project's current scripts
 * @param declared the resolved preset script declarations
 * @returns the scripts to write to package.json
 */
function mergeSetupScripts(
  existing: PackageJson.Scripts,
  declared: Scripts,
): PackageJson.Scripts {
  const scripts = { ...existing };

  for (const [name, command] of Object.entries(declared)) {
    if (!Object.hasOwn(existing, name)) {
      scripts[name] = command;
      info(`Adding script ${name}`);
    } else if (existing[name] === command) {
      info(`Keeping script ${name}: already configured`);
    } else {
      info(`Skipping script ${name}: keeping the existing command`);
    }
  }

  return scripts;
}
