---
sidebar_position: 1
title: Migration Guides
description: Comprehensive guides for migrating from other tools and configurations to Presetter
---

# Migration Guides 🚀

Migrate your existing projects to Presetter with confidence. These guides provide step-by-step instructions for common migration scenarios.

## Version Migrations

### 🆙 From Presetter v8 to v9

Upgrade your existing Presetter v8 projects to v9's scoped namespace, TypeScript 6 baseline, git-cliff release flow, and standardized scripts.

**Benefits:**

- ✅ Scoped `@presetter/*` packages for a cleaner namespace
- ✅ TypeScript 6 with an ES2024 default target and `noUncheckedIndexedAccess`
- ✅ New `node`, `bun`, and `storybook` presets
- ✅ lint-staged pre-commit + pre-push hooks and git-cliff changelogs
- ✅ Provenance publishing and active-LTS CI coverage

[**Start v8→v9 Migration →**](./v8-to-v9.md)

### 🆙 From Presetter v7 to v8

Upgrade your existing Presetter v7 projects to take advantage of v8's new features and improvements.

**Benefits:**

- ✅ npm 7+ automatic peer dependency handling
- ✅ New monorepo preset for better workspace management
- ✅ Enhanced testing organization and project naming
- ✅ Standalone Storybook preset for web projects

[**Start v7→v8 Migration →**](./v7-to-v8.md)

## Popular Tool Migrations

### 🎯 From Create React App

Transform your Create React App project to use Presetter's flexible configuration system.

**Benefits:**

- ✅ Full control over build configuration
- ✅ Modern tooling (Vite, ESBuild)
- ✅ TypeScript strict mode support
- ✅ Enhanced developer experience

[**Start CRA Migration →**](./from-cra.md)

### ⚡ From Vite

Enhance your Vite setup with Presetter's comprehensive tooling ecosystem.

**Benefits:**

- ✅ Integrated ESLint, Prettier, and TypeScript
- ✅ Standardized project structure
- ✅ Advanced build optimizations
- ✅ Team configuration consistency

**Coming Soon:** Detailed Vite migration guide

### 🔧 From Manual Configuration

Replace complex manual setups with Presetter's managed configurations.

**Benefits:**

- ✅ Eliminate configuration maintenance
- ✅ Automatic tool updates
- ✅ Consistent settings across projects
- ✅ Reduced boilerplate

**Coming Soon:** Manual configuration migration guide

## Framework-Specific Migrations

### ⚛️ React Projects

- From Create React App
- From custom Webpack setups
- From Parcel configurations
- From Snowpack projects

### 📚 Library Projects

- From Rollup configurations
- From custom TypeScript builds
- From np/semantic-release setups

### 🏢 Monorepo Projects

- From Lerna setups
- From Nx workspaces
- From Rush configurations

## Configuration Migrations

### 📋 ESLint Configurations

Migrate from various ESLint setups:

- ESLint configs (Airbnb, Standard, etc.)
- TSLint to ESLint
- Custom rule sets

### 🎨 Prettier Setups

Consolidate formatting configurations:

- Standalone Prettier configs
- Editor-specific formatting
- Team style guides

### 🔧 Build Tool Migrations

Modernize your build process:

- Webpack to Vite
- Babel to SWC/ESBuild
- Custom build scripts

## Migration Timeline

### Quick Migration (1-2 hours)

- Simple React applications
- Basic TypeScript libraries
- Single-package projects

### Standard Migration (2-4 hours)

- Complex applications with custom configs
- Multi-framework projects
- Projects with extensive build customization

### Complex Migration (4-8 hours)

- Large monorepos
- Legacy projects with technical debt
- Highly customized tooling setups

## Pre-Migration Checklist

Before starting any migration:

### 🔍 **Audit Current Setup**

- [ ] List all configuration files
- [ ] Document custom build steps
- [ ] Identify critical dependencies
- [ ] Note any special requirements

### 💾 **Backup Everything**

- [ ] Create Git branch for migration
- [ ] Document current package.json scripts
- [ ] Save existing configuration files
- [ ] Test current build/deploy process

### 🎯 **Choose Migration Strategy**

- [ ] **Clean slate**: Replace all configurations
- [ ] **Gradual**: Migrate tools one by one
- [ ] **Hybrid**: Keep some custom configs

### 🧪 **Prepare Testing**

- [ ] Ensure all tests pass before migration
- [ ] Document expected build outputs
- [ ] Verify development server works
- [ ] Test production builds

## Common Migration Patterns

### Pattern 1: Direct Replacement

Replace existing tooling entirely with Presetter equivalents.

**Best for:**

- Simple projects
- Standard configurations
- Teams wanting full standardization

### Pattern 2: Gradual Integration

Migrate one tool at a time while keeping others.

**Best for:**

- Complex projects
- Risk-averse teams
- Projects with unusual requirements

### Pattern 3: Hybrid Approach

Use Presetter for most things, custom configs for edge cases.

**Best for:**

- Projects with unique requirements
- Teams with existing expertise
- Legacy constraints

## Migration Support

### 🆘 Get Help

- [GitHub Issues](https://github.com/alvis/presetter/issues) - Bug reports and questions
- [GitHub Discussions](https://github.com/alvis/presetter/discussions) - Community support
- [Examples Repository](https://github.com/alvis/presetter/tree/main/examples) - Real-world examples

### 📚 Additional Resources

- [API Documentation](../../api/) - TypeScript API reference
- [Advanced Topics](../../advanced/) - Best practices and optimization
- [CLI Reference](../../cli-reference/) - Complete command documentation

### 🤝 Community Examples

Share your migration story:

- Contribute example migrations
- Document challenges and solutions
- Help others with similar setups

---

Ready to start your migration? Choose the guide that best matches your current setup and begin transforming your development experience with Presetter.
