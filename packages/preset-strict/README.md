# 🚀 presetter-preset-strict

![Logo](https://github.com/alvis/presetter/raw/master/assets/logo.svg)

<div align="center">

[![npm](https://img.shields.io/npm/v/presetter-preset-strict?style=flat-square)](https://github.com/alvis/presetter/releases)
[![build](https://img.shields.io/github/actions/workflow/status/alvis/presetter/test.yaml?branch=master&style=flat-square)](https://github.com/alvis/presetter/actions)
[![maintainability](https://img.shields.io/codeclimate/maintainability/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/maintainability)
[![coverage](https://img.shields.io/codeclimate/coverage/alvis/presetter?style=flat-square)](https://codeclimate.com/github/alvis/presetter/test_coverage)
[![vulnerabilities](https://img.shields.io/sonar/vulnerabilities/presetter/master?server=https%3A%2F%2Fsonarcloud.io&style=flat-square)](https://sonarcloud.io/summary/new_code?id=presetter)
[![dependencies](https://img.shields.io/librariesio/release/npm/presetter-preset-strict?style=flat-square)](https://libraries.io/npm/presetter-preset-strict)

Production-grade TypeScript — security hardened, 100% coverage, zero warnings

•   [Usage](#-usage)   •   [Configuration](#-configuration-details)   •   [Comparison](#-comparison)   •   [FAQ](#-faq)   •

</div>

---

**This is a configuration extension that works with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter), the configuration management tool.**

## ⚡ TL;DR / Quick Start

```bash
# Install strict preset alongside a base preset
npm i -D presetter presetter-preset-esm presetter-preset-strict

# Create presetter.config.ts
cat > presetter.config.ts << 'EOF'
import { preset } from 'presetter';
import esm from 'presetter-preset-esm';
import strict from 'presetter-preset-strict';

export default preset('my-project', {
  extends: [esm, strict],
});
EOF

# Bootstrap your project
npx presetter bootstrap
```

Your project now enforces **production-grade code quality** — stricter linting, 100% test coverage, security hardening, zero warnings allowed!

---

## ✨ Production-Grade Code Quality

### Need bulletproof code standards?

Modern TypeScript development often settles for "good enough" — basic linting rules, partial test coverage, and relaxed quality standards. This works for prototypes, but production applications need **uncompromising quality**.

**What if your tooling enforced the same standards as your code reviews?**

### The production code quality challenge

| Quality Aspect               | Standard Preset        | With preset-strict            |
| ---------------------------- | ---------------------- | ----------------------------- |
| **Code Complexity**          | ⚠️ No limits enforced  | ✅ Cognitive complexity ≤15   |
| **Test Coverage**            | ⚠️ Partial coverage OK | ✅ 100% coverage required     |
| **Security Vulnerabilities** | ❌ Manual detection    | ✅ Automated secret detection |
| **Linting Standards**        | ⚠️ Warnings allowed    | ✅ Zero warnings policy       |
| **Function Size**            | ❌ No limits           | ✅ Max 60 lines per function  |
| **File Organization**        | ❌ No limits           | ✅ Max 300 lines per file     |

### What you get instead

**presetter-preset-strict is a configuration extension that adds production-grade code quality enforcement to any base preset.**

When used with [Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter) (the configuration management tool), this preset extends your chosen base preset (essentials, esm, cjs, etc.) with uncompromising quality standards, security hardening, and strict testing requirements.

- 🛡️ **Security Hardened**: Automatic detection of secrets, hardcoded credentials, insecure protocols
- 📊 **100% Coverage**: Mandatory complete test coverage across all metrics
- 🎯 **Complexity Control**: Cognitive complexity limits, function/file size enforcement
- ⚠️ **Zero Warnings**: Production code must pass all quality checks
- 🔒 **Production Ready**: Enterprise-grade standards for maintainability and reliability
- 🚀 **Additive Enhancement**: Works with any base preset without replacement

---

## 🎯 Uncompromising Quality Without Compromise

### The production code quality setup problem

Implementing strict code quality standards manually is complex and inconsistent:

- **Security scanning**: Need to integrate secret detection, vulnerability scanning
- **Coverage enforcement**: Setting up 100% coverage with proper exclusions
- **Complexity limits**: Configuring cognitive complexity, function size limits
- **Zero-warning policies**: Ensuring all code passes strict linting standards
- **Team consistency**: Making sure everyone follows the same strict standards

**Getting it right requires expertise in security best practices, code quality metrics, and advanced linting configurations.**

### From relaxed standards to production excellence

```diff
# Before: Standard development setup
my-project/
├── eslint.config.ts            ← Basic linting rules, warnings allowed
├── vitest.config.ts            ← Partial coverage acceptable
├── src/
│   ├── utils.ts                ← No complexity limits
│   └── api.ts                  ← Hardcoded API keys undetected
└── spec/
-   └── utils.spec.ts           ← 70% coverage "good enough"

# After: Extended with strict quality enforcement
my-project/
+├── presetter.config.ts        ← Base preset + strict extension
├── eslint.config.ts            ← Enhanced with security, complexity rules
├── vitest.config.ts            ← 100% coverage requirement
├── src/
│   ├── utils.ts                ← Complexity ≤15, max 60 lines per function
│   └── api.ts                  ← API keys flagged as security violation
└── spec/
+   └── utils.spec.ts           ← 100% coverage enforced, all cases tested
```

### How strict quality enforcement works

1. **Enhanced ESLint Rules** — Adds SonarJS, security plugins, complexity limits, zero-warning policy
2. **Security Hardening** — Automatic detection of secrets, hardcoded credentials, insecure protocols
3. **Coverage Enforcement** — V8-powered 100% coverage requirement across branches, functions, lines, statements
4. **Complexity Control** — Cognitive complexity ≤15, max 60 lines per function, max 300 lines per file

### Why this solves the real problem

- **Automated quality gates**: No human oversight needed for basic quality standards
- **Security by default**: Prevents common vulnerabilities from reaching production
- **Consistent standards**: Same strict rules applied across entire team and codebase
- **Production confidence**: Code that passes strict preset is genuinely production-ready
- **Incremental adoption**: Add to existing projects without breaking changes

---

## 🔍 Understanding Presetter vs This Extension

**Important distinction:**

| Component                                                                          | Role                          | What it does                                                                     |
| ---------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------- |
| **[Presetter](https://github.com/alvis/presetter/blob/master/packages/presetter)** | Configuration management tool | CLI that processes presets, generates config files, executes scripts             |
| **Base Preset**                                                                    | Core development template     | Provides TypeScript, testing, building capabilities (essentials, esm, cjs, etc.) |
| **presetter-preset-strict**                                                        | Quality enforcement extension | Adds production-grade linting, security, coverage requirements                   |

**Think of it like:**

- **Presetter** = The engine that builds houses
- **Base preset** = The blueprint for a functional house
- **This extension** = The safety inspections, security systems, and quality certifications

This preset **extends** any base preset with strict quality enforcement. For advanced usage, customization, and troubleshooting, **[visit the main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter)**.

---

## 🚀 Usage

### 🟢 Basic Production-Grade Setup

#### Step 1: Install Extension with Base Preset

```jsonc
// package.json
{
  "scripts": {
    "build": "run build",
    "test": "run test",
    "lint": "run lint",
  },
  "devDependencies": {
    "presetter": "latest",
    "presetter-preset-esm": "latest",
    "presetter-preset-strict": "latest",
  },
}
```

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import esm from 'presetter-preset-esm';
import strict from 'presetter-preset-strict';

export default preset('my-production-app', {
  extends: [esm, strict], // Base preset + strict enforcement
});
```

#### Step 2: Bootstrap & Develop

```bash
npm install
# Strict quality configuration generated automatically
# Code must pass security, complexity, and coverage requirements!
```

That's it! Your development workflow now enforces production-grade standards automatically.

---

### 🧑‍🔬 Advanced Usage: Custom Quality Standards

```typescript
// presetter.config.ts
import { preset } from 'presetter';
import esm from 'presetter-preset-esm';
import strict from 'presetter-preset-strict';

export default preset('enterprise-app', {
  extends: [esm, strict],
  override: {
    variables: {
      COGNITIVE_COMPLEXITY: 10, // Even stricter complexity
    },
    assets: {
      'eslint.config.ts': {
        rules: {
          'max-lines': ['error', { max: 200 }], // Smaller files
          'max-lines-per-function': ['error', { max: 40 }], // Smaller functions
        },
      },
      'vitest.config.ts': {
        test: {
          coverage: {
            thresholds: {
              // Even stricter coverage if needed
              branches: 100,
              functions: 100,
              lines: 100,
              statements: 100,
            },
          },
        },
      },
    },
  },
});
```

> **Need more customization options?** Check the [main Presetter documentation](https://github.com/alvis/presetter/blob/master/packages/presetter) for complete guides on overrides, extensions, and advanced configurations.

---

## 📖 API Reference

### Core Strict Quality Extension

This preset extends any base preset with production-grade quality enforcement:

| Enhancement               | Purpose                  | Strict Features                                         |
| ------------------------- | ------------------------ | ------------------------------------------------------- |
| **ESLint Rules**          | Code quality             | Complexity limits, security detection, zero warnings    |
| **Coverage Requirements** | Test quality             | 100% coverage across all metrics with V8 provider       |
| **Security Scanning**     | Vulnerability prevention | Secret detection, insecure protocol flagging            |
| **File Organization**     | Maintainability          | Function/file size limits, cognitive complexity control |

### Enhanced Linting Rules

#### Security-Focused Rules

```typescript
'no-secrets/no-secrets': 'error', // Detects API keys, passwords, tokens
'sonarjs/no-hardcoded-credentials': 'error', // Prevents credential hardcoding
'sonarjs/no-hardcoded-ip': 'error', // Flags hardcoded IP addresses
```

#### Complexity Control Rules

```typescript
'complexity': ['warn', { variant: 'modified' }], // Cyclomatic complexity
'sonarjs/cognitive-complexity': ['warn', 15], // Cognitive complexity ≤15
'max-lines': ['warn', { max: 300 }], // Max 300 lines per file
'max-lines-per-function': ['warn', { max: 60 }], // Max 60 lines per function
```

#### Zero-Warning Policy

```bash
eslint --max-warnings 0  # No warnings allowed in production code
```

### Coverage Requirements

```typescript
// Generated vitest.config.ts
coverage: {
  provider: 'v8', // More accurate coverage
  thresholds: {
    branches: 100,    // 100% branch coverage
    functions: 100,   // 100% function coverage
    lines: 100,       // 100% line coverage
    statements: 100,  // 100% statement coverage
  },
}
```

### Configuration Variables

Inherited from base preset with strict-specific additions:

| Variable               | Default   | Description                               |
| ---------------------- | --------- | ----------------------------------------- |
| `COGNITIVE_COMPLEXITY` | `15`      | Maximum cognitive complexity per function |
| Base preset variables  | Inherited | All variables from chosen base preset     |

---

## 🔧 Configuration Details

### Enhanced ESLint Configuration

#### Core Plugins Added

- **eslint-plugin-no-secrets**: Detects hardcoded secrets and credentials
- **eslint-plugin-sonarjs**: Implements SonarJS code quality rules
- **sort-package-json**: Ensures consistent package.json formatting

#### Security Detection Patterns

```typescript
// Custom delimiters for secret detection
additionalDelimiters: [
  // Camel case: getUserName → get, User, Name
  // URLs: api.example.com → api, example, com
  // Key-value: API_KEY=secret → API, KEY, secret
];
```

#### Test File Accommodations

```typescript
// Relaxed rules for test files
files: ['**/*.{spec,test}.*'],
rules: {
  'no-secrets/no-secrets': 'off', // Allow test fixtures
  'sonarjs/no-hardcoded-ip': 'off', // Allow test IPs
  'sonarjs/no-hardcoded-credentials': 'off', // Allow test credentials
}
```

### Strict Coverage Configuration

```typescript
// vitest.config.ts overrides
coverage: {
  provider: 'v8',           // More accurate than c8
  exclude: [
    'coverage/**',          // Coverage reports
    'dist/**',             // Build outputs
    '**/*.d.ts',           // Type definitions
    '**/node_modules/**',  // Dependencies
  ],
  thresholds: {
    branches: 100,         // Every branch tested
    functions: 100,        // Every function tested
    lines: 100,            // Every line executed
    statements: 100,       // Every statement covered
  },
}
```

---

## 🏎️ Performance

| Metric                   | Standard Preset  | With preset-strict        |
| ------------------------ | ---------------- | ------------------------- |
| Linting time             | Fast             | **Moderate (more rules)** |
| Test coverage            | Partial          | **Complete (100%)**       |
| Build reliability        | Variable         | **Guaranteed quality**    |
| Security vulnerabilities | Manual detection | **Automated prevention**  |
| Code maintainability     | Inconsistent     | **Enforced standards**    |

---

## 🌐 Compatibility

| Environment  | Support                                 |
| ------------ | --------------------------------------- |
| Base Presets | Works with essentials, esm, cjs, hybrid |
| Node.js      | ≥ 18 (for V8 coverage provider)         |
| TypeScript   | ≥ 5.0                                   |
| Testing      | Vitest-based projects                   |

### Works With All Base Presets

- [`presetter-preset-essentials`](../preset-essentials) + strict enforcement
- [`presetter-preset-esm`](../preset-esm) + strict enforcement
- [`presetter-preset-cjs`](../preset-cjs) + strict enforcement
- [`presetter-preset-hybrid`](../preset-hybrid) + strict enforcement

### Can Be Combined With

- [`presetter-preset-web`](../preset-web) - Web development + strict quality
- [`presetter-preset-react`](../preset-react) - React development + strict quality

---

## 🆚 Comparison

| Feature                  | Standard Presets | With preset-strict |
| ------------------------ | ---------------- | ------------------ |
| **Linting Severity**     | Warnings allowed | ✅ Zero warnings   |
| **Test Coverage**        | Partial OK       | ✅ 100% required   |
| **Security Scanning**    | Manual           | ✅ Automated       |
| **Complexity Control**   | None             | ✅ Enforced limits |
| **Production Readiness** | Variable         | ✅ Guaranteed      |
| **Development Speed**    | Fast             | ⚠️ Quality-gated   |

### When to Use

✅ **Use preset-strict when:**

- Building production applications or critical libraries
- Working in regulated industries (healthcare, finance, security)
- Need to enforce team coding standards automatically
- Quality and security are more important than development speed
- Want to catch issues before code review

❌ **Consider alternatives when:**

- Rapid prototyping or early-stage development
- Team is learning TypeScript and needs gradual adoption
- Development speed is more critical than code quality
- Working on throwaway or experimental code

---

## 🛠️ Troubleshooting

> **General Presetter issues?** See the [main troubleshooting guide](https://github.com/alvis/presetter/blob/master/README.md#troubleshooting) for common Presetter problems and solutions.

### Strict Quality Specific Issues

| Issue                                | Symptoms                              | Solution                                                                |
| ------------------------------------ | ------------------------------------- | ----------------------------------------------------------------------- |
| **Secret detection false positives** | Valid code flagged as secrets         | Add patterns to `additionalDelimiters` in ESLint config                 |
| **Coverage falling short**           | Tests fail coverage thresholds        | Write tests for uncovered branches/functions, or exclude specific files |
| **Complexity violations**            | Functions exceed cognitive complexity | Refactor large functions into smaller, focused units                    |
| **Zero warnings policy fails**       | Build fails on linting warnings       | Fix all warnings or adjust specific rules in override                   |

> **Need help with Presetter CLI commands?** Check the [CLI reference](https://github.com/alvis/presetter/blob/master/README.md#cli-reference) in the main documentation.

---

## ❓ FAQ

> **General Presetter questions?** Check the [main FAQ](https://github.com/alvis/presetter/blob/master/README.md#faq) for general usage, configuration, and customization questions.

### Strict Quality Specific FAQs

#### Do I need a base preset?

Yes! preset-strict is an **extension preset** that adds quality enforcement to base functionality:

```typescript
// ❌ Wrong - strict alone doesn't provide TypeScript tooling
extends: [strict]

// ✅ Correct - base preset + strict enforcement
extends: [esm, strict]
```

#### What if 100% coverage is too strict?

You can adjust coverage thresholds in your config:

```typescript
override: {
  assets: {
    'vitest.config.ts': {
      test: {
        coverage: {
          thresholds: {
            branches: 95,    // Slightly relaxed
            functions: 100,  // Keep function coverage
            lines: 98,       // Allow some uncovered lines
            statements: 100, // Keep statement coverage
          },
        },
      },
    },
  },
}
```

#### How do I handle secret detection false positives?

Configure custom delimiters or disable for specific patterns:

```typescript
// In ESLint override
'no-secrets/no-secrets': ['error', {
  additionalRegexes: {
    'Custom Pattern': /custom-pattern-to-exclude/g,
  },
}]
```

#### Can I use this with existing projects?

Yes! Add incrementally:

1. Install alongside existing preset
2. Fix linting violations gradually
3. Improve test coverage to reach 100%
4. Address complexity violations through refactoring

#### Why cognitive complexity instead of cyclomatic?

Cognitive complexity better reflects actual code difficulty for humans:

- Accounts for nesting depth
- Considers control flow complexity
- More accurate predictor of bugs and maintenance cost

---

## 🤝 Contributing

We'd love your ideas and contributions!
Submit issues or suggestions via [GitHub Issues](https://github.com/alvis/presetter/issues).
See the [Contribution Guide](https://github.com/alvis/presetter/blob/master/CONTRIBUTING.md) for more details.

---

## 📄 License

Released under the [MIT License](https://github.com/alvis/presetter/blob/master/LICENSE).
© 2020, [Alvis Tang](https://github.com/alvis).

[![License](https://img.shields.io/github/license/alvis/presetter.svg?style=flat-square)](https://github.com/alvis/presetter/blob/master/LICENSE)
