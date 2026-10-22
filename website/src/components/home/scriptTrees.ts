// NOTE:
// simplified views of the script templates in presets/essentials/templates/scripts.yaml
// and presets/esm/overrides/scripts.yaml; task names and commands match, long flag lists are shortened

/** where a resolved task is defined */
export type ScriptOrigin = 'essentials' | 'esm' | 'local';

/** a task in the resolved script tree */
export interface ScriptNode {
  /** nesting depth below the requested script */
  depth: number;
  /** task name as written in the preset */
  name: string;
  /** command the task runs */
  command: string;
  /** where the task is defined */
  origin: ScriptOrigin;
}

/** a script listed in the example package.json */
export interface PackageScript {
  /** script name in package.json */
  name: string;
  /** one-liner that hands the script to presetter run */
  command: string;
}

export const originLabels: Record<ScriptOrigin, string> = {
  essentials: 'preset-essentials',
  esm: 'preset-esm',
  local: 'package.json',
};

export const packageScripts: readonly PackageScript[] = [
  { name: 'build', command: 'run build' },
  { name: 'lint', command: 'run lint --' },
  { name: 'prepare', command: 'run prepare' },
  { name: 'prepublishOnly', command: 'run prepublishOnly' },
  { name: 'release', command: 'run release --' },
  { name: 'test', command: 'run test --' },
  { name: 'test:coverage', command: 'run test:coverage --' },
  { name: 'test:watch', command: 'run test:watch --' },
];

/** the script that replaces the preset test task when overridden locally */
export const LOCAL_TEST_COMMAND = 'vitest run';

/**
 * builds a tree node
 * @param depth nesting depth below the requested script
 * @param name task name
 * @param command task command
 * @param origin where the task is defined
 * @returns the tree node
 */
function node(
  depth: number,
  name: string,
  command: string,
  origin: ScriptOrigin = 'essentials',
): ScriptNode {
  return { depth, name, command, origin };
}

const BUILD = 'run-s clean build:artifact build:typescript';
const CLEAN = 'run-s clean:**';
const TEST = 'run-s "test:vitest -- {@}" --';
const TEST_VITEST = 'vitest --passWithNoTests --configLoader runner';

export const scriptTrees: Record<string, readonly ScriptNode[]> = {
  'build': [
    node(0, 'build', BUILD),
    node(1, 'clean', CLEAN),
    node(2, 'clean:lib', `zx --eval "fs.remove('{output}')"`),
    node(2, 'clean:coverage', `zx --eval "fs.remove('coverage')"`),
    node(2, 'clean:tsc', `zx --eval "fs.remove('tsconfig.build.tsbuildinfo')"`),
    node(1, 'build:artifact', 'run-s build:artifact:*'),
    node(2, 'build:artifact:package', `zx --eval "fs.ensureDir('{output}')"`),
    node(
      1,
      'build:typescript',
      'run-s build:typescript:tsc build:typescript:alias build:typescript:mjs:fix',
      'esm',
    ),
    node(2, 'build:typescript:tsc', 'tsc -p tsconfig.build.json'),
    node(2, 'build:typescript:alias', 'run-s build:typescript:alias:*'),
    node(
      2,
      'build:typescript:mjs:fix',
      'tsc-esm-fix --sourceMap --target {output}',
      'esm',
    ),
  ],
  'lint': [
    node(0, 'lint', 'run-s "lint:* -- {@:{source} {test}}" --'),
    node(
      1,
      'lint:prettier',
      'prettier --write --no-error-on-unmatched-pattern',
    ),
    node(
      1,
      'lint:eslint',
      'eslint --fix --format stylish --no-error-on-unmatched-pattern --cache',
    ),
    node(
      1,
      'lint:fixme',
      "leasot --ignore '**/node_modules' --skip-unsupported --exit-nicely",
    ),
  ],
  'prepare': [
    node(0, 'prepare', 'run-s setup'),
    node(1, 'setup', 'run-p setup:*'),
    node(2, 'setup:husky', 'husky || true'),
    node(2, 'setup:presetter', 'presetter bootstrap'),
  ],
  'prepublishOnly': [
    node(0, 'prepublishOnly', 'run-s clean build'),
    node(1, 'clean', CLEAN),
    node(1, 'build', BUILD),
  ],
  'release': [
    node(0, 'release', 'run-s release:changelog release:commit'),
    node(
      1,
      'release:changelog',
      'git-cliff --bumped-version … --output CHANGELOG.md',
    ),
    node(
      1,
      'release:commit',
      'git commit -m "chore(release): publish v$V" && git tag "v$V"',
    ),
  ],
  'test': [node(0, 'test', TEST), node(1, 'test:vitest', TEST_VITEST)],
  'test:coverage': [
    node(
      0,
      'test:coverage',
      'run-s "test -- --project=UNIT --coverage {@}" --',
    ),
    node(1, 'test', TEST),
    node(2, 'test:vitest', TEST_VITEST),
  ],
  'test:watch': [
    node(0, 'test:watch', 'run-s "test -- --project=UNIT --watch {@}" --'),
    node(1, 'test', TEST),
    node(2, 'test:vitest', TEST_VITEST),
  ],
};

export const localTestTree: readonly ScriptNode[] = [
  node(0, 'test', LOCAL_TEST_COMMAND, 'local'),
];

export const scriptNotes: Record<string, string> = {
  'build':
    'preset-esm replaces build:typescript from preset-essentials. Every other step is inherited as-is.',
  'lint':
    '{source} and {test} are filled from the preset variables, so each repo lints its own folders.',
  'prepare':
    'Runs on install, so every fresh clone sets up Husky and bootstraps its config files.',
  'prepublishOnly':
    'A clean build before every publish, without a line of it living in the repo.',
  'release':
    'Version bump, changelog, commit, and tag, generated with git-cliff from your commit history.',
  'test':
    'Arguments after -- reach vitest through {@}: npm test -- --reporter dot',
  'test:coverage':
    'Reuses the test task and adds --coverage. Change test in the preset and both follow.',
  'test:watch':
    'Reuses the test task and adds --watch. Change test in the preset and both follow.',
};

export const LOCAL_TEST_NOTE =
  'package.json now defines test itself, and local scripts take priority over the preset.';
