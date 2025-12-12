/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Verdaccio local registry lifecycle management
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2024 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { mkdir } from 'node:fs/promises';

import { runServer, Config } from 'verdaccio';

import { VERDACCIO_PORT, VERDACCIO_STORAGE_DIR } from '../config';
import { log } from '../log';

import type { Server } from 'node:http';

/** timeout for graceful process shutdown before force kill (5 seconds) */
const GRACEFUL_SHUTDOWN_TIMEOUT = 5_000;

/** timeout for server to start listening (5 seconds) */
const LISTEN_TIMEOUT = 5_000;

/** result from starting Verdaccio */
export interface VerdaccioInstance {
  /** the registry URL for publishing and installing packages */
  readonly url: string;
  /** function to stop the Verdaccio server */
  readonly stop: () => Promise<void>;
}

/** Verdaccio configuration for local E2E testing */
const VERDACCIO_CONFIG = new Config({
  config_path: 'memory',
  storage: VERDACCIO_STORAGE_DIR,
  uplinks: {
    npmjs: {
      url: 'https://registry.npmjs.org/',
    },
  },
  packages: {
    'presetter*': {
      access: ['$all'],
      publish: ['$all'],
    },
    '**': {
      access: ['$all'],
      proxy: 'npmjs',
    },
  },
  log: { level: 'warn' },
  security: { web: { sign: {}, verify: {} }, api: { legacy: true } },
});

/**
 * registers signal handlers to ensure graceful shutdown
 * @param stop the cleanup function to call on termination signals
 */
function registerSignalHandlers(stop: () => Promise<void>): void {
  const signalHandler = (): void => {
    void stop().then(() => process.exit(0));
  };

  process.on('SIGINT', signalHandler);
  process.on('SIGTERM', signalHandler);
}

/**
 * starts a local Verdaccio registry server
 * @returns registry URL and stop function
 */
export async function startVerdaccio(): Promise<VerdaccioInstance> {
  const url = `http://localhost:${VERDACCIO_PORT.toString()}`;

  await mkdir(VERDACCIO_STORAGE_DIR, { recursive: true });

  log(`starting verdaccio on port ${VERDACCIO_PORT.toString()}...`);

  const app = (await runServer(VERDACCIO_CONFIG)) as Server;
  const server = app.listen(VERDACCIO_PORT);

  await new Promise<void>((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(
        new Error(
          `Verdaccio failed to start listening within ${LISTEN_TIMEOUT.toString()}ms`,
        ),
      );
    }, LISTEN_TIMEOUT);

    server.once('listening', () => {
      clearTimeout(timeoutId);
      log(`server socket bound to port ${VERDACCIO_PORT.toString()}`);
      resolve();
    });
    server.once('error', (err: Error) => {
      clearTimeout(timeoutId);
      log(`server error during startup: ${err.message}`);
      reject(err);
    });
  });

  const stop = async (): Promise<void> => {
    await new Promise<void>((resolve) => {
      const timeoutId = setTimeout(() => {
        server.closeAllConnections();
        resolve();
      }, GRACEFUL_SHUTDOWN_TIMEOUT);

      server.close(() => {
        clearTimeout(timeoutId);
        resolve();
      });

      server.closeAllConnections();
    });

    log('verdaccio stopped');
  };

  registerSignalHandlers(stop);

  log(`verdaccio ready at ${url}`);

  return { url, stop };
}
