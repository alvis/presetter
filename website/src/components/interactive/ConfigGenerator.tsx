import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface ConfigOptions {
  projectType: 'library' | 'application' | 'monorepo';
  framework: 'react' | 'vue' | 'node' | 'none';
  strictMode: boolean;
  testFramework: 'jest' | 'vitest' | 'none';
  bundler: 'rollup' | 'webpack' | 'vite' | 'none';
  packageManager: 'npm' | 'yarn' | 'pnpm';
}

const ConfigGenerator: React.FC = () => {
  const [options, setOptions] = useState<ConfigOptions>({
    projectType: 'library',
    framework: 'none',
    strictMode: true,
    testFramework: 'jest',
    bundler: 'rollup',
    packageManager: 'pnpm'
  });

  const generatePresetConfig = (): string => {
    const presets: string[] = [];
    
    // Base preset
    presets.push('presetter-preset-essentials');
    
    // Framework-specific presets
    if (options.framework === 'react') {
      presets.push('presetter-preset-react');
    }
    
    // Project type presets
    if (options.projectType === 'library') {
      presets.push('presetter-preset-esm');
    } else if (options.projectType === 'monorepo') {
      presets.push('presetter-preset-monorepo');
    }
    
    // Strict mode
    if (options.strictMode) {
      presets.push('presetter-preset-strict');
    }

    const imports = presets.map((preset, index) => 
      `import preset${index} from '${preset}';`
    ).join('\n');

    const presetCalls = presets.map((_, index) => `preset${index}`).join(',\n  ');

    return `${imports}

export default [
  ${presetCalls}
];`;
  };

  const generatePackageJson = (): string => {
    const devDependencies = [
      'presetter',
      'presetter-preset-essentials'
    ];

    if (options.framework === 'react') {
      devDependencies.push('presetter-preset-react');
    }
    
    if (options.projectType === 'library') {
      devDependencies.push('presetter-preset-esm');
    } else if (options.projectType === 'monorepo') {
      devDependencies.push('presetter-preset-monorepo');
    }
    
    if (options.strictMode) {
      devDependencies.push('presetter-preset-strict');
    }

    const scripts = {
      build: 'run build',
      clean: 'run clean',
      typecheck: 'run typecheck',
      lint: 'run lint',
      format: 'run format'
    };

    if (options.testFramework !== 'none') {
      scripts['test'] = 'run test';
    }

    if (options.projectType === 'application') {
      scripts['dev'] = 'run dev';
      scripts['preview'] = 'run preview';
    }

    return JSON.stringify({
      devDependencies: devDependencies.reduce((acc, dep) => {
        acc[dep] = '^8.0.0';
        return acc;
      }, {} as Record<string, string>),
      scripts
    }, null, 2);
  };

  const generateInstallCommand = (): string => {
    const presets = ['presetter', 'presetter-preset-essentials'];
    
    if (options.framework === 'react') {
      presets.push('presetter-preset-react');
    }
    
    if (options.projectType === 'library') {
      presets.push('presetter-preset-esm');
    } else if (options.projectType === 'monorepo') {
      presets.push('presetter-preset-monorepo');
    }
    
    if (options.strictMode) {
      presets.push('presetter-preset-strict');
    }

    return `${options.packageManager} add -D ${presets.join(' ')}`;
  };

  return (
    <div style={{ 
      border: '1px solid var(--ifm-color-emphasis-300)', 
      borderRadius: '8px', 
      padding: '20px', 
      margin: '20px 0',
      backgroundColor: 'var(--ifm-background-color)'
    }}>
      <h3>🔧 Presetter Configuration Generator</h3>
      <p>Configure your project settings to generate the perfect Presetter setup:</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Project Type:
          </label>
          <select 
            value={options.projectType}
            onChange={(e) => setOptions(prev => ({ ...prev, projectType: e.target.value as any }))}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
          >
            <option value="library">Library</option>
            <option value="application">Application</option>
            <option value="monorepo">Monorepo</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Framework:
          </label>
          <select 
            value={options.framework}
            onChange={(e) => setOptions(prev => ({ ...prev, framework: e.target.value as any }))}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
          >
            <option value="none">None</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="node">Node.js</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Test Framework:
          </label>
          <select 
            value={options.testFramework}
            onChange={(e) => setOptions(prev => ({ ...prev, testFramework: e.target.value as any }))}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
          >
            <option value="jest">Jest</option>
            <option value="vitest">Vitest</option>
            <option value="none">None</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Package Manager:
          </label>
          <select 
            value={options.packageManager}
            onChange={(e) => setOptions(prev => ({ ...prev, packageManager: e.target.value as any }))}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
          >
            <option value="pnpm">pnpm</option>
            <option value="npm">npm</option>
            <option value="yarn">yarn</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={options.strictMode}
            onChange={(e) => setOptions(prev => ({ ...prev, strictMode: e.target.checked }))}
          />
          <span style={{ fontWeight: 'bold' }}>Enable Strict Mode</span>
          <span style={{ fontSize: '14px', color: 'var(--ifm-color-emphasis-600)' }}>
            (Stricter TypeScript and ESLint rules)
          </span>
        </label>
      </div>

      <div style={{ marginTop: '24px' }}>
        <h4>📦 Installation Command</h4>
        <CodeBlock language="bash">
          {generateInstallCommand()}
        </CodeBlock>

        <h4>⚙️ presetter.config.ts</h4>
        <CodeBlock language="typescript">
          {generatePresetConfig()}
        </CodeBlock>

        <h4>📋 package.json (partial)</h4>
        <CodeBlock language="json">
          {generatePackageJson()}
        </CodeBlock>

        <h4>🚀 Bootstrap Command</h4>
        <CodeBlock language="bash">
          presetter bootstrap
        </CodeBlock>
      </div>

      <div style={{ 
        marginTop: '20px', 
        padding: '16px', 
        backgroundColor: 'var(--ifm-color-primary-lightest)', 
        borderRadius: '6px',
        border: '1px solid var(--ifm-color-primary-light)'
      }}>
        <strong>💡 Next Steps:</strong>
        <ol style={{ margin: '8px 0', paddingLeft: '20px' }}>
          <li>Run the installation command above</li>
          <li>Create the presetter.config.ts file</li>
          <li>Run <code>presetter bootstrap</code></li>
          <li>Start developing with your configured tooling!</li>
        </ol>
      </div>
    </div>
  );
};

export default ConfigGenerator;