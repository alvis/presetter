import { delimiter, resolve } from 'node:path';

import { execa } from 'execa';
import { describe, expect, it, vi } from 'vitest';

import { startScript } from '#script';
import { composeShellCommand } from '#shell';

vi.mock('execa', () => ({
  // NOTE: a stand-in for the running script, compared by identity
  execa: vi.fn(() => ({})),
}));

vi.mock('#shell', () => ({
  composeShellCommand: vi.fn(() => ({
    shell: 'sh',
    args: ['-c', 'vitest --run'],
    windowsVerbatimArguments: false,
  })),
}));

const cwd = resolve('/project/package');

/** start the script used by every test */
function start(): void {
  void startScript({
    event: 'test',
    command: 'vitest',
    args: ['--run'],
    cwd,
    paths: ['/preset/bin'],
  });
}

/**
 * read the variables the script was spawned with on top of those of presetter
 * @returns the variables set for the script
 */
function getSpawnedEnvironment(): Record<string, string> {
  const [, , options] = vi.mocked(execa).mock.calls[0]! as unknown as [
    string,
    string[],
    { env: Record<string, string> },
  ];

  return options.env;
}

describe('fn:startScript', () => {
  it('should spawn the shell the script needs in the project root with inherited stdio', () => {
    start();

    // NOTE: the shell is chosen from presetter's own environment, such as ComSpec, with the script's variables on top
    expect(composeShellCommand).toHaveBeenCalledWith({
      command: 'vitest',
      args: ['--run'],
      env: { ...process.env, ...getSpawnedEnvironment() },
      platform: process.platform,
    });
    expect(execa).toHaveBeenCalledWith('sh', ['-c', 'vitest --run'], {
      cwd,
      env: expect.any(Object),
      stdio: 'inherit',
      windowsVerbatimArguments: false,
      windowsHide: false,
      forceKillAfterDelay: false,
      cleanup: false,
    });
  });

  it('should return the running script', () => {
    const script = startScript({
      event: 'test',
      command: 'vitest',
      args: [],
      cwd,
      paths: [],
    });

    expect(script).toBe(vi.mocked(execa).mock.results[0]!.value);
  });

  it('should give the script the npm lifecycle variables', () => {
    start();

    expect(getSpawnedEnvironment()).toEqual(
      expect.objectContaining({
        npm_lifecycle_event: 'test',
        npm_lifecycle_script: 'vitest',
        npm_package_json: resolve(cwd, 'package.json'),
      }),
    );
  });

  it('should search the binaries of the project, its parents and its presets before PATH', () => {
    vi.stubEnv('PATH', ['/usr/bin', '/bin'].join(delimiter));

    start();

    expect(getSpawnedEnvironment().PATH).toEqual(
      [
        resolve(cwd, 'node_modules', '.bin'),
        resolve(cwd, '..', 'node_modules', '.bin'),
        resolve(cwd, '..', '..', 'node_modules', '.bin'),
        '/preset/bin',
        '/usr/bin',
        '/bin',
      ].join(delimiter),
    );
  });

  it('should keep a search path without PATH to presets and the project', () => {
    vi.stubEnv('PATH', undefined);

    start();

    expect(getSpawnedEnvironment().PATH).toEqual(
      [
        resolve(cwd, 'node_modules', '.bin'),
        resolve(cwd, '..', 'node_modules', '.bin'),
        resolve(cwd, '..', '..', 'node_modules', '.bin'),
        '/preset/bin',
      ].join(delimiter),
    );
  });
});
