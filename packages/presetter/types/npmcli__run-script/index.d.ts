declare module '@npmcli/run-script' {
  import type { PackageJson } from 'type-fest';

  export default function runScript<
    T extends 'inherit' | 'pipe' = 'inherit',
    S extends boolean = true,
  >(options: {
    event: string;
    args: string[];
    pkg: PackageJson;
    env?: Record<string, string>;
    path?: string;
    stdio?: T;
    stdioString?: S;
  }): Promise<{
    cmd: string;
    args: string[];
    code: number;
    signal: number | null;
    // NOTE: stdout and stderr are strings when stdioString is true, otherwise they are Buffers
    stdout: T extends 'inherit' ? null : S extends true ? string : Buffer;
    stderr: T extends 'inherit' ? null : S extends true ? string : Buffer;
    event: string;
    script: string;
    pkgid?: string;
    path: string;
  }>;
}
