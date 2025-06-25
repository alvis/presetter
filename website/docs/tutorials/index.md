---
sidebar_position: 1
title: Tutorials
---

import ConfigGenerator from '@site/src/components/interactive/ConfigGenerator';
import CommandHelper from '@site/src/components/interactive/CommandHelper';

# Tutorials 📚

Learn Presetter through practical, hands-on guides. Each tutorial walks you through real-world scenarios with complete examples and interactive tools.

<ConfigGenerator />

## Getting Started Tutorials

### 🚀 [New Project Setup](./new-project.md)
**Time:** 3-5 minutes | **Level:** Beginner

Complete walkthrough for starting a new TypeScript project with Presetter from scratch. Perfect for developers new to Presetter who want to get up and running quickly.

**What you'll learn:**
- Installing and configuring Presetter
- Understanding preset selection
- Setting up your development workflow
- Testing and building your project

### 🔄 [Migrating Existing Projects](./existing-project.md)
**Time:** 15-30 minutes | **Level:** Intermediate

Step-by-step guide to convert existing projects to use Presetter configurations while preserving your custom settings and maintaining compatibility.

**What you'll learn:**
- Assessment and backup strategies
- Configuration migration patterns
- Handling dependencies and scripts
- Troubleshooting common issues

## Project Type Tutorials

### 🏢 [Monorepo Setup](./monorepo-setup.md)
**Time:** 30-45 minutes | **Level:** Advanced

Configure a multi-package workspace with shared Presetter configurations. Learn to manage complex projects with multiple packages and cross-dependencies.

**What you'll learn:**
- Workspace configuration with pnpm
- Shared vs. package-specific configurations
- Build orchestration and dependency management
- Cross-package development workflows

### 🎨 [Creating Custom Presets](./custom-presets.md)
**Time:** 2-4 hours | **Level:** Advanced

Build your own Presetter presets for team-specific requirements. Create reusable configurations that encapsulate your organization's standards and best practices.

**What you'll learn:**
- Preset architecture and design patterns
- Configuration factories and templating
- Testing and publishing presets
- Advanced features and conditional logic

## Migration Guides

### 🎯 [From Create React App](./migration-guides/from-cra.md)
**Time:** 2-4 hours | **Level:** Intermediate

Transform your Create React App project to use Presetter's modern, flexible tooling. Unlock full configuration control and significantly improve build performance.

**Benefits:**
- ✅ 5-10x faster builds with Vite
- ✅ Full TypeScript strict mode
- ✅ Modern development server with HMR
- ✅ Complete configuration control

### 📦 [Migration Guide Overview](./migration-guides/)
Comprehensive guides for migrating from various tools and setups:
- **Create React App** → Modern Vite + Presetter setup
- **Vite** → Enhanced tooling with Presetter ecosystem
- **Manual configurations** → Managed Presetter workflow

<CommandHelper />

## Interactive Learning Tools

### 🔧 Configuration Generator
Use the interactive tool above to generate custom Presetter configurations based on your project requirements. Perfect for understanding which presets you need.

### ⚡ Command Helper
The command helper tool shows you the exact Presetter commands for different scenarios, with examples and explanations.

## Tutorial Progression Paths

### 🎯 **Beginner Path** (30 minutes)
1. [New Project Setup](./new-project.md) - Get familiar with Presetter basics
2. Try the Configuration Generator - Understand preset options
3. Practice with the Command Helper - Learn CLI usage

### 🚀 **Intermediate Path** (2-3 hours)
1. [Existing Project Migration](./existing-project.md) - Apply to real projects
2. [Migration Guides](./migration-guides/) - Framework-specific scenarios
3. Advanced configuration customization

### 🎨 **Advanced Path** (4-6 hours)
1. [Monorepo Setup](./monorepo-setup.md) - Complex project management
2. [Custom Preset Creation](./custom-presets.md) - Build team standards
3. Advanced patterns and optimization

## Real-World Examples

### Quick Start Examples
```bash
# React Application
pnpm add -D presetter presetter-preset-react
presetter bootstrap

# TypeScript Library
pnpm add -D presetter presetter-preset-essentials presetter-preset-esm
presetter bootstrap

# Monorepo Workspace
pnpm add -D presetter presetter-preset-monorepo
presetter bootstrap
```

### Common Use Cases

#### 🌐 **Web Applications**
- React/Vue single-page applications
- Static site generators
- Progressive web apps

#### 📚 **Libraries & Packages**
- NPM packages with TypeScript
- Component libraries
- Utility libraries with dual module support

#### 🏢 **Enterprise Projects**
- Multi-package monorepos
- Shared configuration standards
- Team development workflows

## Getting Help

### 🆘 Stuck? Get Support
- **[GitHub Issues](https://github.com/alvis/presetter/issues)** - Bug reports and feature requests
- **[GitHub Discussions](https://github.com/alvis/presetter/discussions)** - Community help and questions
- **[API Documentation](../api/)** - TypeScript API reference

### 📖 Additional Resources
- [Configuration Reference](../presets/) - All available presets
- [CLI Reference](../cli-reference/) - Complete command documentation
- [Best Practices](../advanced/) - Tips and optimization guides

### 🤝 Community Examples
- [Example Projects](https://github.com/alvis/presetter/tree/master/examples)
- [Real-world usage patterns](https://github.com/alvis/presetter/discussions/categories/show-and-tell)
- [Community presets and configurations](https://github.com/topics/presetter-preset)

---

**Ready to start?** Choose a tutorial that matches your experience level and project needs. Each guide includes working examples, troubleshooting tips, and next steps to help you succeed with Presetter.