import React, { useState, useMemo } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface Preset {
  id: string;
  name: string;
  description: string;
  category: 'foundation' | 'module-systems' | 'frameworks' | 'bundling' | 'quality';
  features: string[];
  dependencies: string[];
  useCases: string[];
  packageName: string;
  size: 'small' | 'medium' | 'large';
  complexity: 'beginner' | 'intermediate' | 'advanced';
}

const presets: Preset[] = [
  {
    id: 'essentials',
    name: 'Essentials',
    description: 'Core TypeScript development tools and configurations',
    category: 'foundation',
    features: ['TypeScript', 'ESLint', 'Prettier', 'Jest', 'Basic build'],
    dependencies: [],
    useCases: ['New TypeScript projects', 'Foundation for other presets', 'Learning Presetter'],
    packageName: 'presetter-preset-essentials',
    size: 'medium',
    complexity: 'beginner'
  },
  {
    id: 'react',
    name: 'React',
    description: 'Complete React development environment with modern tooling',
    category: 'frameworks',
    features: ['Vite', 'React', 'TypeScript', 'Vitest', 'React Testing Library', 'Storybook'],
    dependencies: ['essentials'],
    useCases: ['React applications', 'Component libraries', 'Single-page applications'],
    packageName: 'presetter-preset-react',
    size: 'large',
    complexity: 'intermediate'
  },
  {
    id: 'esm',
    name: 'ES Modules',
    description: 'Modern ES module library configuration with dual package support',
    category: 'module-systems',
    features: ['Rollup', 'ES modules', 'CJS fallback', 'Tree shaking', 'Type declarations'],
    dependencies: ['essentials'],
    useCases: ['NPM libraries', 'ES module packages', 'Tree-shakeable libraries'],
    packageName: 'presetter-preset-esm',
    size: 'medium',
    complexity: 'intermediate'
  },
  {
    id: 'hybrid',
    name: 'Hybrid Modules',
    description: 'Dual CJS/ESM package support for maximum compatibility',
    category: 'module-systems',
    features: ['Dual build', 'CJS support', 'ES modules', 'Conditional exports', 'Legacy compatibility'],
    dependencies: ['essentials'],
    useCases: ['Libraries needing broad compatibility', 'Migration from CJS', 'Enterprise packages'],
    packageName: 'presetter-preset-hybrid',
    size: 'large',
    complexity: 'advanced'
  },
  {
    id: 'monorepo',
    name: 'Monorepo',
    description: 'Multi-package workspace management and shared configurations',
    category: 'quality',
    features: ['Workspace management', 'Shared configs', 'Cross-package builds', 'Dependency management'],
    dependencies: ['essentials'],
    useCases: ['Multi-package projects', 'Shared libraries', 'Enterprise monorepos'],
    packageName: 'presetter-preset-monorepo',
    size: 'large',
    complexity: 'advanced'
  },
  {
    id: 'strict',
    name: 'Strict Mode',
    description: 'Enhanced code quality with stricter TypeScript and ESLint rules',
    category: 'quality',
    features: ['Strict TypeScript', 'Enhanced ESLint', 'Import sorting', 'Unused code detection'],
    dependencies: [],
    useCases: ['High-quality codebases', 'Team standards', 'Production applications'],
    packageName: 'presetter-preset-strict',
    size: 'small',
    complexity: 'intermediate'
  }
];

const PresetExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all');
  const [selectedPresets, setSelectedPresets] = useState<string[]>(['essentials']);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'foundation', label: 'Foundation' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'module-systems', label: 'Module Systems' },
    { id: 'bundling', label: 'Bundling' },
    { id: 'quality', label: 'Code Quality' }
  ];

  const complexityLevels = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' }
  ];

  const filteredPresets = useMemo(() => {
    return presets.filter(preset => {
      const matchesCategory = selectedCategory === 'all' || preset.category === selectedCategory;
      const matchesComplexity = selectedComplexity === 'all' || preset.complexity === selectedComplexity;
      const matchesSearch = searchTerm === '' || 
        preset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        preset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        preset.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesComplexity && matchesSearch;
    });
  }, [selectedCategory, selectedComplexity, searchTerm]);

  const generateInstallCommand = () => {
    const selectedPresetObjects = presets.filter(p => selectedPresets.includes(p.id));
    const packageNames = ['presetter', ...selectedPresetObjects.map(p => p.packageName)];
    return `pnpm add -D ${packageNames.join(' ')}`;
  };

  const generateConfig = () => {
    const selectedPresetObjects = presets.filter(p => selectedPresets.includes(p.id));
    
    if (selectedPresetObjects.length === 0) {
      return '// No presets selected';
    }

    if (selectedPresetObjects.length === 1) {
      const preset = selectedPresetObjects[0];
      return `import ${preset.id} from '${preset.packageName}';\n\nexport default ${preset.id}();`;
    }

    const imports = selectedPresetObjects.map(preset => 
      `import ${preset.id} from '${preset.packageName}';`
    ).join('\n');

    const presetCalls = selectedPresetObjects.map(preset => `${preset.id}()`).join(',\n  ');

    return `${imports}\n\nexport default [\n  ${presetCalls}\n];`;
  };

  const togglePreset = (presetId: string) => {
    setSelectedPresets(prev => {
      if (prev.includes(presetId)) {
        return prev.filter(id => id !== presetId);
      } else {
        return [...prev, presetId];
      }
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'foundation': return '🏗️';
      case 'frameworks': return '⚛️';
      case 'module-systems': return '📦';
      case 'bundling': return '🎁';
      case 'quality': return '✨';
      default: return '🔧';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'beginner': return '#10b981';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getSizeIndicator = (size: string) => {
    switch (size) {
      case 'small': return '●';
      case 'medium': return '●●';
      case 'large': return '●●●';
      default: return '●';
    }
  };

  return (
    <div style={{ 
      border: '1px solid var(--ifm-color-emphasis-300)', 
      borderRadius: '12px', 
      padding: '24px', 
      margin: '24px 0',
      backgroundColor: 'var(--ifm-background-color)'
    }}>
      <h3>🔍 Preset Explorer</h3>
      <p>Discover and compare Presetter presets to find the perfect combination for your project:</p>
      
      {/* Filters */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '16px', 
        marginBottom: '24px' 
      }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Search:
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search presets..."
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              borderRadius: '6px', 
              border: '1px solid var(--ifm-color-emphasis-300)',
              fontSize: '14px'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Category:
          </label>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              borderRadius: '6px', 
              border: '1px solid var(--ifm-color-emphasis-300)',
              fontSize: '14px'
            }}
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Complexity:
          </label>
          <select 
            value={selectedComplexity}
            onChange={(e) => setSelectedComplexity(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              borderRadius: '6px', 
              border: '1px solid var(--ifm-color-emphasis-300)',
              fontSize: '14px'
            }}
          >
            {complexityLevels.map(level => (
              <option key={level.id} value={level.id}>{level.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Preset Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '16px', 
        marginBottom: '24px' 
      }}>
        {filteredPresets.map(preset => (
          <div
            key={preset.id}
            onClick={() => togglePreset(preset.id)}
            style={{
              border: `2px solid ${selectedPresets.includes(preset.id) ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)'}`,
              borderRadius: '8px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              backgroundColor: selectedPresets.includes(preset.id) ? 'var(--ifm-color-primary-lightest)' : 'var(--ifm-background-surface-color)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '18px' }}>{getCategoryIcon(preset.category)}</span>
              <h4 style={{ margin: 0, flex: 1 }}>{preset.name}</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                <span style={{ color: getComplexityColor(preset.complexity) }}>
                  ●
                </span>
                <span>{preset.complexity}</span>
              </div>
            </div>
            
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: 'var(--ifm-color-emphasis-700)' }}>
              {preset.description}
            </p>
            
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Features:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {preset.features.slice(0, 3).map(feature => (
                  <span
                    key={feature}
                    style={{
                      background: 'var(--ifm-color-emphasis-200)',
                      color: 'var(--ifm-color-emphasis-800)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '11px'
                    }}
                  >
                    {feature}
                  </span>
                ))}
                {preset.features.length > 3 && (
                  <span style={{ fontSize: '11px', color: 'var(--ifm-color-emphasis-600)' }}>
                    +{preset.features.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
              <span style={{ color: 'var(--ifm-color-emphasis-600)' }}>
                Size: {getSizeIndicator(preset.size)}
              </span>
              <span style={{ 
                color: selectedPresets.includes(preset.id) ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-600)',
                fontWeight: selectedPresets.includes(preset.id) ? 'bold' : 'normal'
              }}>
                {selectedPresets.includes(preset.id) ? '✓ Selected' : 'Click to select'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredPresets.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '32px', 
          color: 'var(--ifm-color-emphasis-600)',
          fontStyle: 'italic'
        }}>
          No presets match your current filters. Try adjusting your search criteria.
        </div>
      )}

      {/* Selected Configuration */}
      {selectedPresets.length > 0 && (
        <div style={{ marginTop: '24px' }}>
          <h4>🎯 Your Configuration</h4>
          
          <div style={{ marginBottom: '16px' }}>
            <strong>Selected Presets:</strong> {selectedPresets.join(', ')}
          </div>

          <h5>📦 Installation Command</h5>
          <CodeBlock language="bash">
            {generateInstallCommand()}
          </CodeBlock>

          <h5>⚙️ presetter.config.ts</h5>
          <CodeBlock language="typescript">
            {generateConfig()}
          </CodeBlock>

          <h5>🚀 Bootstrap</h5>
          <CodeBlock language="bash">
            presetter bootstrap
          </CodeBlock>
        </div>
      )}

      <div style={{ 
        marginTop: '20px', 
        padding: '16px', 
        backgroundColor: 'var(--ifm-color-info-lightest)', 
        borderRadius: '6px',
        border: '1px solid var(--ifm-color-info-light)'
      }}>
        <strong>💡 Tips:</strong>
        <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
          <li>Start with <strong>essentials</strong> for any TypeScript project</li>
          <li>Add <strong>react</strong> for React applications</li>
          <li>Use <strong>esm</strong> for modern NPM libraries</li>
          <li>Include <strong>strict</strong> for enhanced code quality</li>
          <li>Consider <strong>monorepo</strong> for multi-package projects</li>
        </ul>
      </div>
    </div>
  );
};

export default PresetExplorer;