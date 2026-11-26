/** thrown when a signal has stopped a run, carrying the status the process should exit with */
export class InterruptedError extends Error {
  /** the status to exit with: the one of the script, or 128 plus the number of the signal */
  public readonly exitCode: number;

  /**
   * create an error describing an interrupted run
   * @param signal the first signal received, which the message names
   * @param exitCode the exit status of the script, or 128 plus the number of the signal
   * @param options extra information about what stopped the run
   * @param options.cause the failure of the script, if a script failed
   */
  constructor(
    signal: NodeJS.Signals,
    exitCode: number,
    options?: { cause: unknown },
  ) {
    super(`interrupted by ${signal}`, options);
    this.name = 'InterruptedError';
    this.exitCode = exitCode;
  }
}
