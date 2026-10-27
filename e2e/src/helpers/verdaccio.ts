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
import { join } from 'node:path';

import { runServer, Config } from 'verdaccio';

import {
  VERDACCIO_PORT,
  VERDACCIO_STORAGE_DIR,
  VERDACCIO_USER,
} from '../config';
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
  /** bearer token of the registered test user for authenticating with the registry */
  readonly token: string;
  /** function to stop the Verdaccio server */
  readonly stop: () => Promise<void>;
}

/** Verdaccio configuration for local E2E testing */
const VERDACCIO_CONFIG = new Config({
  config_path: 'memory',
  storage: VERDACCIO_STORAGE_DIR,
  auth: {
    htpasswd: { file: join(VERDACCIO_STORAGE_DIR, 'htpasswd') },
  },
  uplinks: {
    npmjs: {
      url: 'https://registry.npmjs.org/',
      // NOTE: verdaccio 7 marks the uplink dead after one timed out request and then answers 404 for every package it has not cached, so a slow network must neither time out early nor mark the uplink dead
      timeout: '120s',
      max_fails: 1000,
    },
  },
  packages: {
    '@presetter/*': {
      access: ['$all'],
      publish: ['$all'],
    },
    'presetter': {
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

  // NOTE: stop the server if registration fails, otherwise it keeps the process alive
  const token = await registerTestUser(url).catch(
    async (exception: unknown) => {
      await stop();

      throw exception;
    },
  );

  registerSignalHandlers(stop);

  log(`verdaccio ready at ${url}`);

  return { url, token, stop };
}

/**
 * registers the test user on the registry
 * @param registry registry URL
 * @returns bearer token of the registered user
 */
async function registerTestUser(registry: string): Promise<string> {
  const response = await fetch(
    `${registry}/-/user/org.couchdb.user:${VERDACCIO_USER.name}`,
    {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(VERDACCIO_USER),
    },
  );

  if (!response.ok) {
    throw new Error(
      `failed to register the test user: ${response.status.toString()} ${await response.text()}`,
    );
  }

  const body: unknown = await response.json();
  if (
    typeof body !== 'object' ||
    body === null ||
    !('token' in body) ||
    typeof body.token !== 'string'
  ) {
    throw new Error('registry did not return a token for the test user');
  }

  return body.token;
}
