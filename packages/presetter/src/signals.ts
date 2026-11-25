import { constants } from 'node:os';

import { InterruptedError } from './interrupted';

import type { ScriptProcess } from './script';

/** signals sent by a terminal, a CI runner or a process supervisor to stop a command */
const RELAYED_SIGNALS = ['SIGINT', 'SIGTERM', 'SIGHUP'] as const;

/** the exit status of a command killed by a signal is conventionally 128 plus the signal number */
const SIGNAL_EXIT_BASE = 128;

/**
 * keeps a run alive when it receives a signal, so that the scripts it runs can wind down
 *
 * Without a trap the first signal terminates the run at once and leaves the scripts behind.
 * With one, every signal reaches the running scripts, no further script starts, and the run
 * ends only when the scripts have exited.
 */
export interface SignalTrap {
  /**
   * run a script, unless a signal has arrived, in which case it never starts
   * @param start starts the script
   * @param onSkip tells that the script was kept from starting
   * @returns a promise settling together with the script
   */
  guard(start: () => ScriptProcess, onSkip: () => void): Promise<void>;

  /**
   * wait for a run to end and translate its outcome if a signal has interrupted it
   * @param execution the run to supervise
   * @returns a promise resolving as the run does
   * @throws {InterruptedError} if a signal interrupted the run or killed a script, and a script failed or was kept from starting
   * @throws {unknown} the failure of the run, if no signal interrupted it or it is not the exit of a script
   */
  supervise(execution: Promise<unknown>): Promise<void>;

  /** stop listening to the signals */
  release(): void;
}

/**
 * start listening to the signals that stop a command
 * @returns a trap to run the scripts under
 */
export function trapSignals(): SignalTrap {
  const running = new Set<ScriptProcess>();
  const state: { received?: NodeJS.Signals; skipped: boolean } = {
    skipped: false,
  };

  const listeners = RELAYED_SIGNALS.map((signal) => {
    const listener = (): void => {
      state.received ??= signal;

      // NOTE: a signal a terminal sends to its whole process group reaches a script twice,
      //       directly and through here, which a script must tolerate anyway
      for (const script of running) {
        script.kill(signal);
      }
    };

    process.on(signal, listener);

    return { signal, listener };
  });

  return {
    /**
     * run a script, unless a signal has arrived, in which case it never starts
     * @param start starts the script
     * @param onSkip tells that the script was kept from starting
     * @returns a promise settling together with the script
     */
    async guard(start, onSkip) {
      if (state.received) {
        state.skipped = true;
        onSkip();

        return;
      }

      const script = start();

      running.add(script);

      try {
        await script;
      } finally {
        running.delete(script);
      }
    },

    /**
     * wait for a run to end and translate its outcome if a signal has interrupted it
     * @param execution the run to supervise
     * @returns a promise resolving as the run does
     * @throws {InterruptedError} if a signal interrupted the run or killed a script, and a script failed or was kept from starting
     * @throws {unknown} the failure of the run, if no signal interrupted it or it is not the exit of a script
     */
    async supervise(execution) {
      const failure = await execution
        .then(() => undefined)
        .catch((error: unknown) => ({ error }));

      if (state.received) {
        // NOTE: a concurrent run settles on the first failure, while its other scripts are still winding down
        await Promise.allSettled(running);
      }

      // NOTE: a script killed by a signal sent to it alone ends the run as if presetter had received that signal
      const interruption = state.received ?? readKillingSignal(failure);

      if (interruption) {
        const exitCode = resolveExitCode(interruption, state.skipped, failure);

        if (exitCode !== undefined) {
          throw new InterruptedError(
            interruption,
            exitCode,
            failure && { cause: failure.error },
          );
        }
      }

      if (failure) {
        throw failure.error;
      }
    },

    /** stop listening to the signals */
    release() {
      for (const { signal, listener } of listeners) {
        process.off(signal, listener);
      }
    },
  };
}

/**
 * read the signal that killed the script a run failed with
 * @param failure the failure of the run, if any
 * @param failure.error what the run failed with
 * @returns the signal, or undefined if the run did not fail through a script killed by a known signal
 */
function readKillingSignal(failure?: {
  error: unknown;
}): NodeJS.Signals | undefined {
  const { signal } = (failure?.error ?? {}) as { signal?: unknown };

  return toExitCode(signal) === undefined
    ? undefined
    : (signal as NodeJS.Signals);
}

/**
 * decide the exit status of an interrupted run
 * @param received the first signal received, or the one that killed the script
 * @param skipped whether a script was kept from starting
 * @param failure the failure of the run, if any
 * @param failure.error what the run failed with
 * @returns the exit status, or undefined if the run neither failed through a script nor skipped any
 */
function resolveExitCode(
  received: NodeJS.Signals,
  skipped: boolean,
  failure?: { error: unknown },
): number | undefined {
  if (!failure) {
    return skipped ? toExitCode(received) : undefined;
  }

  // NOTE: a script reports its exit status as `exitCode`, or the signal that killed it as `signal`
  const { exitCode, signal } = failure.error as {
    exitCode?: unknown;
    signal?: unknown;
  };

  return typeof exitCode === 'number' ? exitCode : toExitCode(signal);
}

/**
 * convert a signal to the exit status of a process killed by it
 * @param signal the signal, if it is one
 * @returns the conventional exit status, or undefined if the value is not a known signal
 */
function toExitCode(signal: unknown): number | undefined {
  const signalNumber = constants.signals[signal as NodeJS.Signals] as
    | number
    | undefined;

  return signalNumber === undefined
    ? undefined
    : SIGNAL_EXIT_BASE + signalNumber;
}
