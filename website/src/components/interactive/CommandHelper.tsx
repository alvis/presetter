import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface CommandOptions {
  command: 'bootstrap' | 'run' | 'run-s' | 'run-p';
  script?: string;
  pattern?: string;
  args?: string;
  packageManager: 'npm' | 'yarn' | 'pnpm';
}

const CommandHelper: React.FC = () => {
  const [options, setOptions] = useState<CommandOptions>({
    command: 'bootstrap',
    script: 'build',
    pattern: '',
    args: '',
    packageManager: 'pnpm'
  });

  const generateCommand = (): string => {
    const prefix = options.packageManager === 'npm' ? 'npx ' : 
                   options.packageManager === 'yarn' ? 'yarn ' : 'pnpm exec ';

    switch (options.command) {
      case 'bootstrap':
        return `${prefix}presetter bootstrap`;
        
      case 'run':
        const script = options.script || 'build';
        const args = options.args ? ` ${options.args}` : '';
        return `${prefix}presetter run ${script}${args}`;
        
      case 'run-s':
        const pattern = options.pattern || 'test:*';
        return `${prefix}presetter run-s ${pattern}`;
        
      case 'run-p':
        const parallelPattern = options.pattern || 'lint test';
        return `${prefix}presetter run-p ${parallelPattern}`;
        
      default:
        return '';
    }
  };

  const getCommandDescription = (): string => {
    switch (options.command) {
      case 'bootstrap':
        return 'Initialize Presetter configuration and generate all config files';
      case 'run':
        return 'Execute a single script defined in your preset';
      case 'run-s':
        return 'Run multiple scripts sequentially (in series)';
      case 'run-p':
        return 'Run multiple scripts in parallel';
      default:
        return '';
    }
  };

  const getExamples = (): string[] => {
    switch (options.command) {
      case 'bootstrap':
        return [
          'presetter bootstrap',
          'presetter bootstrap --force  # Overwrite existing files'
        ];
      case 'run':
        return [
          'presetter run build',
          'presetter run test -- --watch',
          'presetter run lint -- --fix',
          'presetter run typecheck'
        ];
      case 'run-s':
        return [
          'presetter run-s clean build',
          'presetter run-s test:* lint',
          'presetter run-s "build:*"'
        ];
      case 'run-p':
        return [
          'presetter run-p lint typecheck',
          'presetter run-p "test:*"',
          'presetter run-p watch:*'
        ];
      default:
        return [];
    }
  };

  return (
    <div style={{ 
      border: '1px solid var(--ifm-color-emphasis-300)', 
      borderRadius: '8px', 
      padding: '20px', 
      margin: '20px 0',
      backgroundColor: 'var(--ifm-background-color)'
    }}>
      <h3>⚡ Presetter Command Helper</h3>
      <p>Generate the right Presetter command for your needs:</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Command:
          </label>
          <select 
            value={options.command}
            onChange={(e) => setOptions(prev => ({ ...prev, command: e.target.value as any }))}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
          >
            <option value="bootstrap">bootstrap</option>
            <option value="run">run</option>
            <option value="run-s">run-s (sequential)</option>
            <option value="run-p">run-p (parallel)</option>
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

        {options.command === 'run' && (
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Script Name:
            </label>
            <input
              type="text"
              value={options.script}
              onChange={(e) => setOptions(prev => ({ ...prev, script: e.target.value }))}
              placeholder="build"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
            />
          </div>
        )}

        {(options.command === 'run-s' || options.command === 'run-p') && (
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Script Pattern:
            </label>
            <input
              type="text"
              value={options.pattern}
              onChange={(e) => setOptions(prev => ({ ...prev, pattern: e.target.value }))}
              placeholder={options.command === 'run-s' ? 'clean build' : 'lint typecheck'}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
            />
          </div>
        )}

        {options.command === 'run' && (
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Additional Args:
            </label>
            <input
              type="text"
              value={options.args}
              onChange={(e) => setOptions(prev => ({ ...prev, args: e.target.value }))}
              placeholder="--watch"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
            />
          </div>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>Description:</p>
        <p style={{ margin: '0', color: 'var(--ifm-color-emphasis-700)' }}>
          {getCommandDescription()}
        </p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4>🎯 Generated Command</h4>
        <CodeBlock language="bash">
          {generateCommand()}
        </CodeBlock>
      </div>

      <div>
        <h4>💡 More Examples</h4>
        {getExamples().map((example, index) => (
          <CodeBlock key={index} language="bash">
            {example}
          </CodeBlock>
        ))}
      </div>

      <div style={{ 
        marginTop: '20px', 
        padding: '16px', 
        backgroundColor: 'var(--ifm-color-secondary-lightest)', 
        borderRadius: '6px',
        border: '1px solid var(--ifm-color-secondary-light)'
      }}>
        <strong>📚 Command Reference:</strong>
        <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
          <li><strong>bootstrap</strong>: Set up initial configuration files</li>
          <li><strong>run</strong>: Execute a single script with optional arguments</li>
          <li><strong>run-s</strong>: Run scripts one after another (sequential)</li>
          <li><strong>run-p</strong>: Run scripts at the same time (parallel)</li>
        </ul>
      </div>
    </div>
  );
};

export default CommandHelper;