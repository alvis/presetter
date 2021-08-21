/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Definitions for @npmcli/config
 * @see       https://github.com/npm/config
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

export default class Config {
  constructor(options: {
    definitions: Record<string, unknown>;
    npmPath: string;
  });

  public get(key: string): string;
  public load(): Promise<void>;
}
