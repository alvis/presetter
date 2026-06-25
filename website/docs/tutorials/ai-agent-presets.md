---
sidebar_position: 6
title: Sharing Coding Agent Setup Across Repos
description: Use custom Presetter presets to share coding-agent instructions, plugins, skills, and MCP configuration across repositories
---

# Sharing Coding Agent Setup Across Repos

If your team uses coding agents across multiple repositories, the setup tends to drift quickly.

One repo gets the latest `CLAUDE.md`. Another repo has the right MCP servers but outdated plugins. A third repo has copied skills and agent instructions that no longer match the team standard.

Presetter can solve that the same way it solves other configuration sprawl: put the shared setup in **your own preset**, extend that preset in each repo, and let Presetter generate the files consistently.

## Why This Hurts Today

Shared coding-agent setup usually lives in several places at once:

- Repo-level instruction files such as `CLAUDE.md`
- Agent configuration files
- Plugin definitions
- Skills directories or generated skill files
- MCP configuration files

That creates a few common problems:

- **Copy-paste drift**: every repo starts with a slightly different version
- **Painful updates**: changing one team rule means editing many repositories
- **Weak visibility**: nobody is sure which repo has the current standard
- **Unclear ownership**: local overrides and team defaults get mixed together

With Presetter, you can encode the shared baseline once and version it like any other preset.

## What Presetter Manages Here

This pattern works well for any coding-agent setup you want to keep aligned across repositories, including:

- `CLAUDE.md`-style instruction files
- Coding-agent configuration files
- Plugin manifests or plugin lists
- Shared skills and skill bundles
- MCP configuration files and server definitions

The important point is that **you own the preset**. Presetter is not introducing a special AI-agent feature surface here. It is giving you a clean way to generate and distribute the files you already want to standardize.

## The Pattern

The workflow is straightforward:

1. Create your own preset package for organization-wide coding-agent standards.
2. Define the agent-related files as preset assets.
3. Publish or share that preset package internally.
4. Extend that preset from each repo that should inherit the baseline.
5. Override locally only when a repo genuinely needs something different.

That gives you one maintained source of truth instead of repeated copies.

## Example Preset Package

Start with a custom preset package:

```bash
mkdir @presetter/preset-agents
cd @presetter/preset-agents
pnpm init
```

Example `package.json`:

```json title="package.json"
{
  "name": "@acme/preset-agents",
  "version": "1.0.0",
  "description": "Shared coding-agent setup for Acme repositories",
  "type": "module",
  "files": ["src/", "templates/"],
  "exports": {
    ".": {
      "import": "./src/index.ts",
      "types": "./src/index.ts"
    }
  },
  "peerDependencies": {
    "presetter": "^8.3.0"
  },
  "devDependencies": {
    "presetter": "^8.3.0",
    "typescript": "^5.0.0"
  }
}
```

Example preset entry:

```typescript title="src/index.ts"
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from 'presetter';

const DIR = dirname(fileURLToPath(import.meta.url));
const TEMPLATES = resolve(DIR, '..', 'templates');

export default preset('acme-agent-standards', {
  assets: {
    'CLAUDE.md': [
      '# AI Agent Instructions',
      '',
      'This repository follows the Acme coding-agent baseline.',
      'See ./.rules/00-index.md for the full instruction set.',
    ],
    '.codex/plugins/marketplace.json': {
      plugins: ['GitHub', 'Notion', 'Vercel'],
    },
    '.mcp.json': {
      servers: {
        github: {
          command: 'npx',
          args: ['-y', '@modelcontextprotocol/server-github'],
        },
        notion: {
          command: 'npx',
          args: ['-y', '@modelcontextprotocol/server-notion'],
        },
      },
    },
    '.agents/skills/shared-agent-playbook/SKILL.md': [
      '# Shared Agent Playbook',
      '',
      'Use this skill for organization-wide coding conventions and review expectations.',
    ],
  },
});
```

This example is intentionally simple. The key idea is that your preset owns the shared baseline files.

## Inline Assets and Template Files

Presetter supports both **inline config** and **file-path assets** in the same preset.

That matters for coding-agent setup because some files are small and structured, while others are easier to keep as standalone templates:

- Use **inline assets** for short instructions, small JSON objects, or small lists.
- Use **file paths** for long prompt files, skill documents, modular MCP templates, or any config you want to keep in its own file.
- Mix both in one preset so the baseline stays readable without forcing everything into one big source file.

Example package structure:

```text
@presetter/preset-agents/
├── src/
│   └── index.ts
└── templates/
    ├── mcp/base.json
    └── skills/review-playbook/SKILL.md
```

Example mixed asset setup:

```typescript title="src/index.ts"
import { preset } from 'presetter';

export default preset('acme-agent-standards', {
  assets: {
    'CLAUDE.md': [
      '# AI Agent Instructions',
      '',
      'This repository follows the Acme coding-agent baseline.',
      'Escalate risky infra changes before applying them.',
    ],
    '.codex/plugins/marketplace.json': {
      plugins: ['GitHub', 'Notion', 'Vercel'],
    },
    '.mcp.json': resolve(TEMPLATES, 'mcp/base.json'),
    '.agents/skills/review-playbook/SKILL.md': resolve(
      TEMPLATES,
      'skills/review-playbook/SKILL.md',
    ),
  },
});
```

This pattern keeps the preset modular:

- short config stays easy to scan inline
- large templates stay in their own files
- teams can evolve shared agent docs and skills without turning `src/index.ts` into a giant blob

## Example Consumer Repo

In a consuming repository, extend the shared preset:

```typescript title="presetter.config.ts"
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';
import acmeAgents from '@acme/preset-agents';

export default preset('payments-service', {
  extends: [essentials, acmeAgents],
});
```

Now the repo gets both:

- the normal project tooling baseline
- the shared coding-agent baseline

If a specific repo needs one local change, override just that file in the repo-level preset:

```typescript title="presetter.config.ts"
import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';
import acmeAgents from '@acme/preset-agents';

export default preset('payments-service', {
  extends: [essentials, acmeAgents],
  override: {
    assets: () => ({
      'CLAUDE.md': [
        '# AI Agent Instructions',
        '',
        'This repository follows the Acme coding-agent baseline.',
        'Additional repo-specific guidance:',
        '- Treat `/migrations` as high-review code.',
      ],
    }),
  },
});
```

## What to Keep Shared vs Local

Good candidates for the shared preset:

- default coding-agent instructions
- approved plugin set
- standard MCP servers
- shared skills
- organization-wide workflow rules

Good candidates for repo-local override:

- service-specific operational constraints
- deployment or infra caveats
- sensitive or experimental MCP entries
- repo-specific review rules

Keep the shared preset opinionated, but not so rigid that every repo has to fight it.

## Operating Model

Treat the coding-agent preset like any other internal standard:

- **Version it**: update the preset package when the baseline changes
- **Roll it out intentionally**: upgrade consuming repos when they are ready
- **Keep defaults shared**: only override locally when there is a real repo-specific reason
- **Review generated files**: the point is explicit, inspectable configuration, not hidden magic

This gives teams a clean balance:

- one shared baseline
- local escape hatches when needed
- less copy-paste drift across repositories

## Where to Go Next

If you have not created a custom preset before, read [Creating Custom Presets](./custom-presets.md) first or alongside this guide.

That tutorial covers the broader preset-authoring model. This page shows one practical use case: sharing coding-agent setup across repositories without copying the same files repo by repo.
