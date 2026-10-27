/* eslint max-lines-per-function: off */

import CodeBlock from '@theme/CodeBlock';

import { useState } from 'react';

import { buildPresetConfig, buildUseCommand } from '../presetter-setup';

import styles from './PresetterConfigGenerator.module.css';

import type React from 'react';

import type { SetupPackageManager } from '../presetter-setup';

type ProjectType = 'library' | 'application' | 'monorepo';
type Framework = 'react' | 'node' | 'none';

interface ConfigOptions {
  projectType: ProjectType;
  framework: Framework;
  strictMode: boolean;
  packageManager: SetupPackageManager;
}

const PresetterConfigGenerator: React.FC = () => {
  const [options, setOptions] = useState<ConfigOptions>({
    projectType: 'library',
    framework: 'none',
    strictMode: true,
    packageManager: 'pnpm',
  });

  const selectedPresets = (): string[] => {
    const presets: string[] = [];

    if (options.projectType === 'monorepo') {
      presets.push('@presetter/preset-monorepo');
    } else if (options.projectType === 'library') {
      presets.push('@presetter/preset-esm');
    } else {
      presets.push('@presetter/preset-essentials');
    }

    if (options.framework === 'react') {
      presets.push('@presetter/preset-react');
    } else if (options.framework === 'node') {
      presets.push('@presetter/preset-node');
    }

    if (options.strictMode) {
      presets.push('@presetter/preset-strict');
    }

    return presets;
  };

  const presets = selectedPresets();

  return (
    <div className={styles.container}>
      <h3>Presetter Configuration Generator</h3>
      <p>
        Choose your preset stack. Run the command in a project with a
        package.json; use installs the packages, adds declared scripts, and
        bootstraps the configs.
      </p>

      <div className={styles.optionsGrid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="config-project-type">
            Project Type:
          </label>
          <select
            className={styles.select}
            id="config-project-type"
            value={options.projectType}
            onChange={(event) =>
              setOptions((prev) => ({
                ...prev,
                projectType: event.target.value as ProjectType,
              }))
            }>
            <option value="library">Library</option>
            <option value="application">Application</option>
            <option value="monorepo">Monorepo</option>
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="config-framework">
            Framework:
          </label>
          <select
            className={styles.select}
            id="config-framework"
            value={options.framework}
            onChange={(event) =>
              setOptions((prev) => ({
                ...prev,
                framework: event.target.value as Framework,
              }))
            }>
            <option value="none">None</option>
            <option value="react">React</option>
            <option value="node">Node.js</option>
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="config-package-manager">
            Package Manager:
          </label>
          <select
            className={styles.select}
            id="config-package-manager"
            value={options.packageManager}
            onChange={(event) =>
              setOptions((prev) => ({
                ...prev,
                packageManager: event.target.value as SetupPackageManager,
              }))
            }>
            <option value="pnpm">pnpm</option>
            <option value="npm">npm</option>
            <option value="bun">Bun</option>
          </select>
        </div>
      </div>

      <div className={styles.checkboxRow}>
        <label className={styles.checkboxLabel}>
          <input
            checked={options.strictMode}
            type="checkbox"
            onChange={(event) =>
              setOptions((prev) => ({
                ...prev,
                strictMode: event.target.checked,
              }))
            }
          />
          <span className={styles.checkboxText}>Enable Strict Mode</span>
          <span className={styles.checkboxHint}>
            (Stricter TypeScript and ESLint rules)
          </span>
        </label>
      </div>

      <div className={styles.output}>
        <h4>Installation Command</h4>
        <CodeBlock language="bash">
          {buildUseCommand(presets, options.packageManager)}
        </CodeBlock>

        <h4>presetter.config.ts</h4>
        <CodeBlock language="typescript">
          {buildPresetConfig(presets)}
        </CodeBlock>

        <p>
          The config above previews the file written by use. It also adds the
          presets’ declared dependencies, devDependencies, peerDependencies and
          package scripts. Essentials includes Vitest and the TypeScript 7 CLI
          alongside the TypeScript 6 API. Existing declarations and scripts are
          preserved; conflicting package specifications are reported.
        </p>
        <p>
          The package manager declared by your project or selected by its
          lockfile takes priority over the command’s fallback flag.
        </p>
      </div>

      <div className={styles.nextSteps}>
        <strong>Next Steps:</strong>
        <ol className={styles.nextStepsList}>
          <li>Run the installation command above</li>
          <li>Approve dependency builds if your package manager requests it</li>
          <li>
            Keep customizations in presetter.config.ts, then rerun bootstrap
          </li>
          <li>Start developing with your configured tooling!</li>
        </ol>
      </div>
    </div>
  );
};

export default PresetterConfigGenerator;
