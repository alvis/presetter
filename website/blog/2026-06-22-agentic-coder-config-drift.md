---
slug: agentic-coder-config-drift
title: 'Agentic Coder Configs Are the New Config Drift'
authors: [alvis]
tags: [ai, monorepo, typescript]
---

AI coding agents are becoming part of the development environment. That means their setup is becoming part of the development environment too.

At first, that setup looks small: a `CLAUDE.md` here, an `AGENTS.md` there, maybe a few MCP servers, a review checklist, and one shared skill. Then the second repo needs the same thing. Then the monorepo needs a baseline, the web app needs extra frontend rules, the service needs migration safety rules, and the internal tools package needs a different set of allowed commands.

That is how agentic coder setup turns into config drift.

{/* truncate */}

## The Pain Is Not Just the First Setup

The first setup is annoying, but the recurring maintenance is what hurts.

Agentic coding configuration often spreads across files like:

- `CLAUDE.md` for Claude-oriented repository instructions
- `AGENTS.md` for agent-facing project rules
- `.mcp.json` or similar MCP server definitions
- `.claude/settings.json` for tool permissions, hooks, and local behavior
- `.codex/` or `.agents/` directories for shared instructions, skills, or workflows
- review playbooks, coding standards, and service-specific safety rules

Those files are not all the same kind of config. Some are prose. Some are JSON. Some describe tool access. Some describe behavior. Some are global enough to share across every repo, while others are only correct for one service.

That mix creates predictable failure modes:

- **Copy-paste drift**: every repo starts from a slightly different instruction file.
- **Half-applied updates**: the MCP server changed, but only three repos got the new command.
- **Invisible local exceptions**: a service-specific rule gets buried in a copied baseline.
- **Marketplace mismatch**: reusable agent bundles can help distribute skills or prompts, but they usually cannot know each repo's hooks, MCP access, command permissions, deployment constraints, or monorepo package shape.
- **Scary migrations**: updating an agent rule feels like a tiny migration across every repository.

This is the same class of problem as ESLint, Vitest, TypeScript, release scripts, and build config. The files are different. The maintenance problem is the same.

## What Presetter Changes

Presetter gives you a boring but powerful model:

1. Put the shared baseline in a preset.
2. Let each repo compose that preset in `presetter.config.ts`.
3. Generate the files the agent tools expect.
4. Keep repo-specific differences as explicit overrides.

That means your team can maintain agentic coder setup like any other versioned development standard.

The shared preset can own:

- default `CLAUDE.md` and `AGENTS.md` content
- approved MCP server definitions
- default hook wiring
- shared review, testing, and migration rules
- reusable agent skills or playbooks
- script aliases that bootstrap or validate the agent setup

The consuming repo can still own:

- service-specific operational warnings
- framework-specific rules
- local MCP entries
- stricter command permissions
- package-specific instructions inside a monorepo

The goal is not to make every repo identical. The goal is to make the shared parts intentional and the differences visible.

## A Preset for Agentic Coder Setup

Here is a minimal preset package that ships a team baseline.

```text title="@acme/preset-agentic-coder"
@acme/preset-agentic-coder/
├── package.json
├── src/
│   └── index.ts
└── templates/
    ├── agents/
    │   ├── AGENTS.md
    │   └── CLAUDE.md
    ├── mcp/base.json
    └── skills/review-playbook/SKILL.md
```

The package exports a Presetter preset:

```json title="package.json"
{
  "name": "@acme/preset-agentic-coder",
  "version": "1.0.0",
  "type": "module",
  "files": ["src/", "templates/"],
  "exports": {
    ".": {
      "import": "./src/index.ts",
      "types": "./src/index.ts"
    }
  },
  "peerDependencies": {
    "presetter": "^9.0.0"
  },
  "devDependencies": {
    "presetter": "^9.0.0",
    "typescript": "^6.0.0"
  }
}
```

And the preset defines the generated agent files:

```typescript title="src/index.ts"
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from 'presetter';

const DIR = dirname(fileURLToPath(import.meta.url));
const TEMPLATES = resolve(DIR, '..', 'templates');

type AgenticCoderOptions = {
  profile?: 'library' | 'service' | 'web';
  mcp?: {
    github?: boolean;
    database?: boolean;
  };
};

const profileNotes = {
  library: [
    '- Preserve public API compatibility unless the task explicitly requests a breaking change.',
    '- Prefer focused tests around exported behavior.',
  ],
  service: [
    '- Treat migrations, auth, billing, and background jobs as high-review areas.',
    '- Do not run destructive database commands without explicit maintainer approval.',
  ],
  web: [
    '- Check responsive behavior before calling UI work complete.',
    '- Keep accessibility and loading states visible in review notes.',
  ],
};

export default function agenticCoder(options: AgenticCoderOptions = {}) {
  const profile = options.profile ?? 'library';
  const mcp = {
    github: true,
    database: profile === 'service',
    ...options.mcp,
  };

  return preset('acme-agentic-coder', {
    variables: {
      agentProfile: profile,
    },
    scripts: {
      'agent:check': 'presetter bootstrap && git diff --check',
    },
    assets: {
      'CLAUDE.md': resolve(TEMPLATES, 'agents/CLAUDE.md'),
      'AGENTS.md': [
        '# Agent Instructions',
        '',
        'This repository uses the Acme agentic coder baseline.',
        '',
        '## Shared Rules',
        '- Read the repository instructions before editing.',
        '- Prefer small, reviewable changes.',
        '- Run the closest relevant verification before reporting completion.',
        '',
        '## Profile Rules',
        ...profileNotes[profile],
      ],
      '.mcp.json': {
        servers: {
          ...(mcp.github && {
            github: {
              command: 'npx',
              args: ['-y', '@modelcontextprotocol/server-github'],
            },
          }),
          ...(mcp.database && {
            database: {
              command: 'pnpm',
              args: ['exec', 'acme-mcp-database'],
            },
          }),
        },
      },
      '.claude/settings.json': {
        permissions: {
          allow: [
            'Bash(pnpm test)',
            'Bash(pnpm lint)',
            'Bash(pnpm typecheck)',
          ],
          deny: [
            'Bash(rm -rf *)',
            'Bash(git push --force)',
            'Bash(pnpm db:drop)',
          ],
        },
        hooks: {
          Stop: [
            {
              matcher: '*',
              hooks: [
                {
                  type: 'command',
                  command: 'pnpm agent:check',
                },
              ],
            },
          ],
        },
      },
      '.agents/skills/review-playbook/SKILL.md': resolve(
        TEMPLATES,
        'skills/review-playbook/SKILL.md',
      ),
    },
  });
}
```

This is deliberately plain. There is no hidden agent runtime. Presetter is just generating the files your tools already read.

The two Markdown examples above are both real generated files:

- `CLAUDE.md` points to a template file path. Presetter loads that file and writes its contents to the consuming project.
- `AGENTS.md` is an inline string array. Presetter serializes arrays by joining them with newlines, which makes this a normal Markdown file on disk.

## Use It in a Repo

A library can consume the baseline directly:

```typescript title="presetter.config.ts"
import esm from '@presetter/preset-esm';
import strict from '@presetter/preset-strict';
import { preset } from 'presetter';
import agenticCoder from '@acme/preset-agentic-coder';

export default preset('design-tokens', {
  extends: [
    esm,
    strict,
    agenticCoder({
      profile: 'library',
      mcp: {
        github: true,
        database: false,
      },
    }),
  ],
});
```

A service can use the same baseline with different MCP access and stricter local guidance:

```typescript title="presetter.config.ts"
import node from '@presetter/preset-node';
import strict from '@presetter/preset-strict';
import { preset } from 'presetter';
import agenticCoder from '@acme/preset-agentic-coder';

export default preset('payments-service', {
  extends: [
    node,
    strict,
    agenticCoder({
      profile: 'service',
      mcp: {
        github: true,
        database: true,
      },
    }),
  ],
  override: {
    assets: () => ({
      'AGENTS.md': [
        '# Agent Instructions',
        '',
        'This repository uses the Acme agentic coder baseline.',
        '',
        '## Service-Specific Rules',
        '- Treat `/migrations` as high-review code.',
        '- Do not change payment provider callbacks without adding integration coverage.',
        '- Ask before modifying production incident runbooks.',
      ],
    }),
  },
});
```

That local override is the important part. You still get a shared baseline, but the repo-specific risk is not hidden in a copied file.

## Why Not Just Use a Marketplace?

Marketplaces and shared skill catalogs are useful. They are good at distributing reusable capabilities: a review skill, a docs skill, a migration helper, or a framework-specific workflow.

But repo setup is more than reusable capability.

Your repo also needs to say:

- which MCP servers are available here
- which commands are allowed or denied here
- which hooks should run after agent work
- which files are dangerous in this codebase
- which monorepo package has React rules versus service rules
- which local instructions override the team default

Those are project configuration decisions. They need to live with the repo, be reviewed with the repo, and evolve with the repo.

There is also a security boundary here. Some agent systems intentionally do not let marketplace plugins ship repo hooks, MCP server access, or command permissions, because a marketplace package can change over time and those capabilities are too sensitive to inherit blindly.

Presetter gives you a different trust model. The agent config comes from a versioned preset package in your normal dependency graph. Your package manager lockfile fixes the exact preset version, code review can inspect the generated files, and updates land through the same dependency upgrade process as the rest of your toolchain.

Presetter does not replace a marketplace. It gives marketplace-style assets a maintainable, version-locked landing zone inside each project.

## The Operating Model

Treat the agentic coder preset like any other internal platform package:

- Version it.
- Review changes to it.
- Upgrade consuming repos intentionally.
- Keep generated files inspectable.
- Use overrides for real repo differences, not silent forks.

When the team changes a rule, you update one preset. When a repo needs a different rule, you put that difference in `presetter.config.ts`. When a new project starts, it composes the same baseline on day one.

That is the difference between a copied agent setup and a maintained one.

## The Payoff

Agentic coding tools are moving fast. The surrounding config will keep changing: new MCP servers, new hooks, new permissions, new review expectations, new repo-specific safety rules.

Without a system, every update becomes a scavenger hunt.

With Presetter, the setup becomes explicit:

- shared standards in a preset
- generated files for the tools
- local overrides where they belong
- one visible stack in `presetter.config.ts`

That is how you keep agentic coder configs from becoming the next configuration nightmare.
