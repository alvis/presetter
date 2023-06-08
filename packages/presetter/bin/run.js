#!/usr/bin/env node

import 'source-map-support/register.js';

process.argv = [...process.argv.slice(0, 2), 'run', ...process.argv.slice(2)];
await import('../lib/executable/index.js');
