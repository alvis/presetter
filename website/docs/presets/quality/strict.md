---
sidebar_position: 1
title: presetter-preset-strict
---

# presetter-preset-strict

Additional linting rules and quality enforcement for production-grade code.

## Purpose

This preset adds stricter linting rules and quality checks to any base preset.

## Installation

```bash
npm install --save-dev presetter presetter-preset-strict
```

## Usage

```typescript
// presetter.config.ts
import { preset } from 'presetter-types';
import esm from 'presetter-preset-esm';
import strict from 'presetter-preset-strict';

export default preset('strict-project', {
  extends: [esm, strict]
});
```