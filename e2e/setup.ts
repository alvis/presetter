import { mkdir, rm } from 'node:fs/promises';

import { packages, TEMP_DIR } from './src/config';
import { publishAllPackages } from './src/helpers/publish';
import { startVerdaccio } from './src/helpers/verdaccio';
import { log } from './src/log';

export default async (): Promise<() => Promise<void>> => {
  log(`cleaning up previous temp folder at ${TEMP_DIR}...`);
  await rm(TEMP_DIR, { recursive: true, force: true });

  log(`setting up temporary folder at ${TEMP_DIR}...`);
  await mkdir(TEMP_DIR, { recursive: true });

  /** Verdaccio instance for cleanup during teardown */
  const verdaccio = await startVerdaccio();

  log('publishing packages to local registry...');
  await publishAllPackages(verdaccio.url);
  log(`published ${packages.length.toString()} packages`);

  /** tears down e2e test environment and stops Verdaccio */
  return async () => {
    log('cleaning up...');

    await verdaccio.stop();

    if (!process.env.DEBUG) {
      // NOTE: preserve folder in debug mode
      await rm(TEMP_DIR, { recursive: true, force: true });
    } else {
      log(`test projects preserved under ${TEMP_DIR}`);
    }
  };
};
