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
