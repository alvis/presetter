/* eslint max-lines-per-function: off */

import CodeBlock from '@theme/CodeBlock';

import { useState } from 'react';

import styles from './PresetterConfigGenerator.module.css';

import type React from 'react';

type ProjectType = 'library' | 'application' | 'monorepo';
type Framework = 'react' | 'node' | 'none';
type TestFramework = 'vitest' | 'none';
type PackageManager = 'npm' | 'yarn' | 'pnpm';

interface ConfigOptions {
  projectType: ProjectType;
  framework: Framework;
  strictMode: boolean;
  testFramework: TestFramework;
  packageManager: PackageManager;
}

const PresetterConfigGenerator: React.FC = () => {
  const [options, setOptions] = useState<ConfigOptions>({
    projectType: 'library',
    framework: 'none',
    strictMode: true,
    testFramework: 'vitest',
    packageManager: 'pnpm',
  });

  const generatePresetConfig = (): string => {
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

    const uniquePresets = [...new Set(presets)];
    const imports = uniquePresets
      .map((preset, index) => `import preset${index} from '${preset}';`)
      .join('\n');

    const presetCalls = uniquePresets
      .map((_, index) => `preset${index}`)
      .join(',\n    ');

    return `import { preset } from 'presetter';
${imports}

export default preset('my-project', {
  extends: [
    ${presetCalls},
  ],
});`;
  };

  const generatePackageJson = (): string => {
    const devDependencies = ['presetter'];

    if (options.projectType === 'monorepo') {
      devDependencies.push('@presetter/preset-monorepo');
    } else if (options.projectType === 'library') {
      devDependencies.push('@presetter/preset-esm');
    } else {
      devDependencies.push('@presetter/preset-essentials');
    }

    if (options.framework === 'react') {
      devDependencies.push('@presetter/preset-react');
    } else if (options.framework === 'node') {
      devDependencies.push('@presetter/preset-node');
    }

    if (options.strictMode) {
      devDependencies.push('@presetter/preset-strict');
    }

    const scripts: Record<string, string> = {
      bootstrap: 'presetter bootstrap',
      build: 'run build',
      clean: 'run clean',
      typecheck: 'run typecheck --',
      lint: 'run lint --',
      format: 'run format --',
    };

    if (options.testFramework !== 'none') {
      scripts.test = 'run test --';
    }

    return JSON.stringify(
      {
        devDependencies: devDependencies.reduce<Record<string, string>>(
          (acc, dep) => {
            acc[dep] = '^8.3.0';

            return acc;
          },
          {},
        ),
        scripts,
      },
      null,
      2,
    );
  };

  const generateInstallCommand = (): string => {
    const presets = ['presetter'];

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

    const uniquePresets = [...new Set(presets)].join(' ');

    if (options.packageManager === 'npm') {
      return `npm install --save-dev ${uniquePresets}`;
    }

    if (options.packageManager === 'yarn') {
      return `yarn add --dev ${uniquePresets}`;
    }

    return `pnpm add -D ${uniquePresets}`;
  };

  return (
    <div className={styles.container}>
      <h3>Presetter Configuration Generator</h3>
      <p>
        Configure your project settings to generate the perfect Presetter setup:
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
          <label className={styles.label} htmlFor="config-test-framework">
            Test Framework:
          </label>
          <select
            className={styles.select}
            id="config-test-framework"
            value={options.testFramework}
            onChange={(event) =>
              setOptions((prev) => ({
                ...prev,
                testFramework: event.target.value as TestFramework,
              }))
            }>
            <option value="vitest">Vitest</option>
            <option value="none">None</option>
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
                packageManager: event.target.value as PackageManager,
              }))
            }>
            <option value="pnpm">pnpm</option>
            <option value="npm">npm</option>
            <option value="yarn">yarn</option>
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
        <CodeBlock language="bash">{generateInstallCommand()}</CodeBlock>

        <h4>presetter.config.ts</h4>
        <CodeBlock language="typescript">{generatePresetConfig()}</CodeBlock>

        <h4>package.json (partial)</h4>
        <CodeBlock language="json">{generatePackageJson()}</CodeBlock>

        <h4>Bootstrap Command</h4>
        <CodeBlock language="bash">presetter bootstrap</CodeBlock>
      </div>

      <div className={styles.nextSteps}>
        <strong>Next Steps:</strong>
        <ol className={styles.nextStepsList}>
          <li>Run the installation command above</li>
          <li>Create the presetter.config.ts file</li>
          <li>
            Run <code>presetter bootstrap</code>
          </li>
          <li>Start developing with your configured tooling!</li>
        </ol>
      </div>
    </div>
  );
};

export default PresetterConfigGenerator;
