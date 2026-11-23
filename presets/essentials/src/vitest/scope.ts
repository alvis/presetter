import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { PROVIDE_KEY } from './provide';

/**
 * location of the runner that generated wrappers import, a sibling with this module's extension;
 * it is addressed rather than imported, as the runner loads Vitest's runtime, which fails outside a Vitest run
 */
const RUNNER_URL = new URL(
  `runner${extname(fileURLToPath(import.meta.url))}`,
  import.meta.url,
).href;

/** where generated wrappers live, relative to the working directory */
const CACHE_SEGMENTS = ['node_modules', '.cache', 'presetter', 'vitest'];

/** length of the content hash in a wrapper name, in characters */
const HASH_CHARACTERS = 16;

/**
 * scopes a global setup file to the specs that match any of the globs, so the
 * file is only imported, and its setup and teardown only run, when a selected
 * spec matches, or when no file filter narrows the run
 * @param globs patterns relative to the directory of `vitest.config.ts`, in POSIX form
 * @param file module path, relative to the directory of `vitest.config.ts` unless absolute
 * @returns absolute path of a generated module to list in `globalSetup`
 */
export function scopeGlobalSetup(globs: string[], file: string): string {
  return emitWrapper(
    'global-setup',
    `import { runGlobalSetup } from ${JSON.stringify(RUNNER_URL)};

export default (project) =>
  runGlobalSetup(project, ${JSON.stringify({ globs, file })}, ${JSON.stringify(PROVIDE_KEY)});
`,
  );
}

/**
 * scopes a setup file to the specs that match any of the globs, so the file is
 * only imported before a spec that matches
 * @param globs patterns relative to the directory of `vitest.config.ts`, in POSIX form
 * @param file module path, relative to the directory of `vitest.config.ts` unless absolute
 * @returns absolute path of a generated module to list in `setupFiles`
 */
export function scopeSetup(globs: string[], file: string): string {
  return emitWrapper(
    'setup',
    `import { runSetupFile } from ${JSON.stringify(RUNNER_URL)};

await runSetupFile(${JSON.stringify({ globs, file })}, ${JSON.stringify(PROVIDE_KEY)});
`,
  );
}

/**
 * writes a wrapper named after the hash of its content, unless it already exists
 * @param kind prefix telling which Vitest hook loads the wrapper
 * @param source content of the wrapper module
 * @returns absolute path of the wrapper
 */
function emitWrapper(kind: string, source: string): string {
  const directory = join(process.cwd(), ...CACHE_SEGMENTS);
  const hash = createHash('sha256')
    .update(source)
    .digest('hex')
    .slice(0, HASH_CHARACTERS);
  const wrapper = join(directory, `${kind}-${hash}.mjs`);

  // the name holds the hash of the content, so an existing file is already current
  if (!existsSync(wrapper)) {
    const temporary = `${wrapper}.${process.pid}.tmp`;

    mkdirSync(directory, { recursive: true });
    // rename is atomic, so a reader never sees a half-written wrapper
    writeFileSync(temporary, source);

    try {
      renameSync(temporary, wrapper);
    } catch (error) {
      rmSync(temporary, { force: true });

      // another process may have put the same content in place first, and Windows refuses to replace a file in use
      if (!existsSync(wrapper)) {
        throw error;
      }
    }
  }

  return wrapper;
}
