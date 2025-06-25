---
sidebar_position: 1
title: Introduction
---

# Introduction to Presetter

## Stop the Configuration Chaos

Every TypeScript project starts the same way: hours of copying config files, installing dev dependencies, and hoping everything works together. Then comes the real nightmare - keeping all those configs synchronized across multiple projects.

**Presetter changes everything.**

## What is Presetter?

Presetter is a configuration management system that sets up your entire TypeScript development environment with a single command. Instead of maintaining dozens of configuration files, you maintain one preset choice.

### Key Concepts

- **Presets**: Bundles of configurations, dependencies, and scripts
- **Assets**: Configuration files generated from templates
- **Context**: Smart configuration based on project structure
- **Scripts**: Unified task execution across projects

## The Presetter Difference

### Traditional Approach 😩
```bash
npm install --save-dev typescript eslint prettier vitest @types/node ...
# Copy .eslintrc.js from another project
# Copy tsconfig.json from another project
# Copy vitest.config.ts from another project
# Fix version conflicts
# Debug why it doesn't work
```

### The Presetter Way ✨
```bash
npx presetter use presetter-preset-esm
# Done. Everything configured and working.
```

## Next Steps

- Getting Started - Set up your first project
- Core Concepts - Understand how Presetter works
- Installation Guide - Detailed setup instructions