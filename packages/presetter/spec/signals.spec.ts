import { setImmediate } from 'node:timers/promises';

import { describe, expect, it, onTestFinished, vi } from 'vitest';

import { InterruptedError } from '#interrupted';
import { trapSignals } from '#signals';

import type { Mock } from 'vitest';

import type { ScriptProcess } from '#script';

/**
 * create a running script
 * @param exit settles when the script exits
 * @returns the script, which records the signals it is sent
 */
function createScript(
  exit: Promise<void> = Promise.resolve(),
): ScriptProcess & { kill: Mock } {
  return Object.assign(exit, { kill: vi.fn(() => true) });
}

/**
 * create the error a script rejects with once it has exited
 * @param status the exit code of the script, or the signal that killed it
 * @returns an error shaped like the one a failed script rejects with
 */
function createScriptError(status: number | NodeJS.Signals): Error {
  return Object.assign(new Error('command failed'), {
    exitCode: typeof status === 'number' ? status : undefined,
    signal: typeof status === 'string' ? status : undefined,
  });
}

describe('fn:trapSignals', () => {
  describe('mt:guard', () => {
    it('should run the script when no signal has arrived', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());
      const start = vi.fn(() => createScript());
      const onSkip = vi.fn();

      await trap.guard(start, onSkip);

      expect(start).toHaveBeenCalledTimes(1);
      expect(onSkip).not.toHaveBeenCalled();
    });

    it('should keep the script from starting once a signal has arrived', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());
      const start = vi.fn(() => createScript());
      const onSkip = vi.fn();

      process.emit('SIGINT');

      await trap.guard(start, onSkip);

      expect(start).not.toHaveBeenCalled();
      expect(onSkip).toHaveBeenCalledTimes(1);
    });

    it('should reject as the script does', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());

      await expect(
        trap.guard(
          () => createScript(Promise.reject(new Error('script failed'))),
          vi.fn(),
        ),
      ).rejects.toEqual(new Error('script failed'));
    });
  });

  describe('mt:supervise', () => {
    it('should resolve when the run completes without a signal', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());

      await expect(trap.supervise(Promise.resolve())).resolves.toBeUndefined();
    });

    it('should rethrow the failure of a run without a signal as it is', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());
      const failure = createScriptError(2);

      await expect(trap.supervise(Promise.reject(failure))).rejects.toBe(
        failure,
      );
    });

    it('should resolve when a signal arrives yet every script completes', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());

      process.emit('SIGINT');

      await expect(trap.supervise(Promise.resolve())).resolves.toBeUndefined();
    });

    it('should exit with the status of a script stopped by a signal', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());
      const failure = createScriptError(130);

      process.emit('SIGINT');

      await expect(trap.supervise(Promise.reject(failure))).rejects.toEqual(
        new InterruptedError('SIGINT', 130, { cause: failure }),
      );
    });

    it('should exit with 128 plus the signal number when a signal killed the script', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());
      const failure = createScriptError('SIGTERM');

      process.emit('SIGHUP');

      await expect(trap.supervise(Promise.reject(failure))).rejects.toEqual(
        new InterruptedError('SIGHUP', 143, { cause: failure }),
      );
    });

    it('should exit with 128 plus the signal number when a signal sent to the script alone killed it', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());
      const failure = createScriptError('SIGKILL');

      await expect(trap.supervise(Promise.reject(failure))).rejects.toEqual(
        new InterruptedError('SIGKILL', 137, { cause: failure }),
      );
    });

    it('should exit with 128 plus the signal number when the signal kept a script from starting', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());

      process.emit('SIGTERM');
      await trap.guard(() => createScript(), vi.fn());

      await expect(trap.supervise(Promise.resolve())).rejects.toEqual(
        new InterruptedError('SIGTERM', 143),
      );
    });

    it('should report the first of the signals received', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());

      process.emit('SIGINT');
      process.emit('SIGTERM');
      await trap.guard(() => createScript(), vi.fn());

      await expect(trap.supervise(Promise.resolve())).rejects.toEqual(
        new InterruptedError('SIGINT', 130),
      );
    });

    it('should rethrow a failure that is not the exit of a script', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());
      const failure = Object.assign(new Error('spawn sh ENOENT'), {
        code: 'ENOENT',
      });

      process.emit('SIGINT');

      await expect(trap.supervise(Promise.reject(failure))).rejects.toBe(
        failure,
      );
    });

    it('should wait for the other running scripts after one has failed', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());
      const slow = Promise.withResolvers<void>();
      const events: string[] = [];

      const running = trap.guard(() => createScript(slow.promise), vi.fn());

      process.emit('SIGINT');
      const supervised = trap
        .supervise(Promise.reject(createScriptError(130)))
        .catch(() => {
          events.push('run settled');
        });

      await setImmediate();
      events.push('script exited');
      slow.resolve();
      await Promise.all([running, supervised]);

      expect(events).toEqual(['script exited', 'run settled']);
    });
  });

  describe('op:relay', () => {
    it('should pass every signal to the running scripts', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());
      const slow = Promise.withResolvers<void>();
      const script = createScript(slow.promise);

      const running = trap.guard(() => script, vi.fn());

      process.emit('SIGINT');
      process.emit('SIGTERM');
      process.emit('SIGHUP');
      slow.resolve();
      await running;

      expect(script.kill.mock.calls).toEqual([
        ['SIGINT'],
        ['SIGTERM'],
        ['SIGHUP'],
      ]);
    });

    it('should leave a script that has exited alone', async () => {
      const trap = trapSignals();
      onTestFinished(() => trap.release());
      const script = createScript();

      await trap.guard(() => script, vi.fn());
      process.emit('SIGINT');

      expect(script.kill).not.toHaveBeenCalled();
    });
  });

  describe('mt:release', () => {
    it('should stop listening to the signals', () => {
      const listening = process.listenerCount('SIGHUP');
      const trap = trapSignals();

      trap.release();

      expect(process.listenerCount('SIGHUP')).toBe(listening);
    });
  });
});
