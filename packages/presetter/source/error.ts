/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Helpers for handling errors
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

/**
 * prepend a rejected error message with a better explanation
 * @param promise a promise to be resolved
 * @param message a custom message to be prepended to any rejected message
 * @returns wrapped error
 */
export async function wrap<T>(
  promise: Promise<T>,
  message: string,
): Promise<T> {
  try {
    return await promise;
  } catch (error) {
    if (error instanceof Error) {
      error.message = `${message}: ${error.message}`;
    }

    throw error;
  }
}
