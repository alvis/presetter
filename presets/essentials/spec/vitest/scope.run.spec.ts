import { execFile } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { promisify } from 'node:util';

import { beforeAll, describe, expect, it, vi } from 'vitest';

import { PROVIDE_KEY } from '#vitest/provide';
import { scopeGlobalSetup, scopeSetup } from '#vitest/scope';

/** what a spec of the nested run saw of its own worker */
interface Seen {
  /** setup files imported before the spec, by their tags */
  imported: string[];
  /** value of the provided config directory key */
  provided: string | undefined;
}

/** what the nested Vitest run left behind */
interface Outcome {
  /** lines the global setups appended, in alphabetical order */
  global: string[];
  /** what each spec saw, keyed by the name of the spec */
  seen: Record<string, Seen>;
  /** the config directory, which the specs are expected to receive as provided */
  directory: string;
}

/** specs of the fixture, keyed by their path relative to the config directory */
const SPECS = {
  'spec/alpha/one.spec.mjs': 'one',
  'spec/plain/two.spec.mjs': 'two',
  'spec/beta/three.spec.mjs': 'three',
} as const;

/** command-line entry of the Vitest this package tests with */
const VITEST_CLI = join(
  dirname(createRequire(import.meta.url).resolve('vitest/package.json')),
  'vitest.mjs',
);

/** how long the nested run may take, as a cold start of Vitest is slow on some runners */
const FIXTURE_TIMEOUT = 60_000;

/** the outcome of the nested run, once it has finished */
const fixture: { outcome?: Outcome } = {};

// run the fixture once, and let each case read its own part of the outcome
beforeAll(async () => {
  fixture.outcome = await runFixture();
}, FIXTURE_TIMEOUT);

describe('fn:scopeGlobalSetup', () => {
  it('should run a scoped global setup only for the project that owns a matching spec', () => {
    const { global } = fixture.outcome!;

    expect(global).toEqual([
      'ALPHA:setup:alpha',
      'ALPHA:teardown:alpha',
      'BETA:setup:beta',
      'BETA:teardown:beta',
    ]);
  });
});

describe('fn:scopeSetup', () => {
  it('should import a scoped setup file only before the specs that match, and not before another project or an unscoped spec', () => {
    const { seen } = fixture.outcome!;

    expect(
      Object.fromEntries(
        Object.entries(seen).map(([name, { imported }]) => [name, imported]),
      ),
    ).toEqual({ one: ['alpha'], two: [], three: ['beta'] });
  });
});

describe('inline projects', () => {
  it('should hand the provided config directory to the specs of every inline project', () => {
    const { directory, seen } = fixture.outcome!;

    expect(
      Object.fromEntries(
        Object.entries(seen).map(([name, { provided }]) => [name, provided]),
      ),
    ).toEqual({ one: directory, two: directory, three: directory });
  });
});

/**
 * runs real Vitest on a throwaway fixture of two inline projects, which share the same scoped setups
 * @returns the markers that the scoped setups and the specs left behind
 */
async function runFixture(): Promise<Outcome> {
  // the temp dir is both the working directory, which holds the wrappers, and the Vitest root,
  // while the config directory sits below it, so a run that ignores the provided key finds nothing
  const root = realpathSync(mkdtempSync(join(tmpdir(), 'presetter-scope-')));
  const app = join(root, 'app');
  const markers = join(root, 'markers');
  const log = join(markers, 'global.log');

  // the wrappers go to the cache of the working directory, so point it at the fixture only while they are written
  const cwd = vi.spyOn(process, 'cwd').mockReturnValue(root);
  const globalSetups = [
    scopeGlobalSetup(['spec/alpha/**'], 'setup/global-alpha.mjs'),
    scopeGlobalSetup(['spec/beta/**'], 'setup/global-beta.mjs'),
  ];
  const setupFiles = [
    scopeSetup(['spec/alpha/**'], 'setup/each-alpha.mjs'),
    scopeSetup(['spec/beta/**'], 'setup/each-beta.mjs'),
  ];

  cwd.mockRestore();
  const project = (name: string, include: string[]): object => ({
    extends: true,
    test: { name, include, globalSetup: globalSetups, setupFiles },
  });
  const config = {
    test: {
      provide: { [PROVIDE_KEY]: app },
      projects: [
        project('ALPHA', ['app/spec/alpha/**', 'app/spec/plain/**']),
        project('BETA', ['app/spec/beta/**']),
      ],
    },
  };

  try {
    mkdirSync(markers);
    write(
      join(app, 'vitest.config.mjs'),
      `export default ${JSON.stringify(config)};`,
    );

    for (const tag of ['alpha', 'beta']) {
      write(
        join(app, `setup/global-${tag}.mjs`),
        `import { appendFileSync } from 'node:fs';

export default (project) => {
  appendFileSync(${JSON.stringify(log)}, \`\${project.name}:setup:${tag}\\n\`);

  return () =>
    appendFileSync(${JSON.stringify(log)}, \`\${project.name}:teardown:${tag}\\n\`);
};
`,
      );
      write(
        join(app, `setup/each-${tag}.mjs`),
        `(globalThis.imported ??= []).push(${JSON.stringify(tag)});\n`,
      );
    }

    for (const [path, name] of Object.entries(SPECS)) {
      write(
        join(app, path),
        `import { writeFileSync } from 'node:fs';

import { inject, test } from 'vitest';

test('records what its worker received', () => {
  writeFileSync(
    ${JSON.stringify(join(markers, `${name}.json`))},
    JSON.stringify({
      imported: globalThis.imported ?? [],
      provided: inject(${JSON.stringify(PROVIDE_KEY)}),
    }),
  );
});
`,
      );
    }

    // a child process keeps the nested run's coverage of the helpers out of this run's report
    await promisify(execFile)(
      process.execPath,
      [
        VITEST_CLI,
        'run',
        '--root',
        root,
        '--config',
        join(app, 'vitest.config.mjs'),
        '--coverage.enabled=false',
        '--typecheck.enabled=false',
      ],
      { cwd: root, env: outsideVitest(process.env) },
    );

    const missing = Object.values(SPECS).filter(
      (name) => !existsSync(join(markers, `${name}.json`)),
    );

    if (missing.length > 0) {
      throw new Error(`the fixture run skipped: ${missing.join(', ')}`);
    }

    return {
      global: existsSync(log)
        ? readFileSync(log, 'utf8').split('\n').filter(Boolean).sort()
        : [],
      seen: Object.fromEntries(
        Object.values(SPECS).map((name) => [
          name,
          JSON.parse(readFileSync(join(markers, `${name}.json`), 'utf8')),
        ]),
      ),
      directory: app,
    };
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

/**
 * drops the variables that tell a process it runs inside a Vitest worker
 * @param env environment of this worker
 * @returns an environment in which a nested Vitest starts afresh
 */
function outsideVitest(env: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([name]) => !/^(?:VITEST|NODE_V8_COVERAGE)/.test(name),
    ),
  );
}

/**
 * writes a fixture file, creating its directory
 * @param path absolute path of the file
 * @param content content of the file
 */
function write(path: string, content: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
}
