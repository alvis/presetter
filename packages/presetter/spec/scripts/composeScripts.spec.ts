import { describe, expect, it, vi } from 'vitest';

import { composeScripts } from '#scripts';

import type { Script } from '#scripts';

vi.mock('yargs', async (importActual) => {
  const { default: yargs } = await importActual<typeof import('yargs')>();

  return {
    default: {
      parse: vi.fn((path: string) =>
        path
          ? yargs().parse(path)
          : {
              // mimic the current runner
              $0: 'run',
            },
      ),
    },
  };
});

/**
 * a helper function for generating tests on translation
 * @param description description of the test
 * @param detail input and expected output
 * @param detail.template script definitions from scripts.yaml
 * @param detail.target script definitions from target project's package.json
 * @param detail.result expected output, or an error
 */
function should(
  description: string,
  detail: {
    /** script definitions from scripts.yaml */
    template: Script;
    /** script definitions from target project's package.json */
    target: Script;
    /** expected output, or an error */
    result: Script | Error;
  },
): void {
  const { template, target, result } = detail;

  it(`should ${description}`, () => {
    const compute = () =>
      composeScripts({
        template,
        target,
      });

    if (result instanceof Error) {
      expect(compute).toThrow(result);
    } else {
      expect(compute()).toEqual(result);
    }
  });
}

describe('fn:composeScript', () => {
  describe('detect definition error', () => {
    should('warn an non-existent task', {
      template: {
        build: 'builder',
      },
      target: {
        'no-such-task': 'run no-such-task',
      },
      result: new Error(
        '"no-such-task" cannot be resolved in "run no-such-task"',
      ),
    });

    should('warn a syntax error in the task definition', {
      template: {
        build: 'builder',
      },
      target: {
        invalid: 'invalid shell script with a hanging quote"',
      },
      result: new Error(
        'failed to parse command: invalid shell script with a hanging quote"',
      ),
    });
  });

  describe('simple task resolution', () => {
    should('resolve a self-referenced task into its full form', {
      template: {
        build: 'builder',
      },
      target: {
        build: 'run build',
      },
      result: {
        build: 'builder',
      },
    });

    should('resolve any task into its full form', {
      template: {
        'build': 'builder',
        'other:task': 'other',
      },
      target: {
        // refer itself to another task definition
        build: 'run other:task',
      },
      result: {
        'build': 'other',
        'other:task': 'other',
      },
    });

    should('allow task customization at target', {
      template: {
        'build': 'run-s build:*',
        'build:typescript': 'tsc',
      },
      target: {
        // replace the template with this command
        build: 'builder',
      },
      result: {
        'build': 'builder',
        'build:typescript': 'tsc',
      },
    });

    should('attach arguments', {
      template: {
        self: 'self --arg-template',
        other: 'other --arg-template',
      },
      target: {
        // replace itself with additional arguments
        self: 'run self -- --arg-package --extra=value custom',
        other: 'run other -- --arg-package',
      },
      result: {
        self: 'self --arg-template --arg-package --extra=value custom',
        other: 'other --arg-template --arg-package',
      },
    });

    should('attach arguments to any destination task', {
      template: {
        other: 'other',
      },
      target: {
        // customize the destination task
        build: 'run other -- --arg1 --arg2',
      },
      result: {
        build: 'other --arg1 --arg2',
        other: 'other',
      },
    });

    should('run additional customized scripts', {
      template: {
        'build': 'run-s build:*',
        'build:typescript': 'tsc',
      },
      target: {
        'build': 'run build',
        // add this to the flow
        'build:custom': 'custom',
      },
      result: {
        'build': 'run-s build:*',
        'build:custom': 'custom',
        'build:typescript': 'tsc',
      },
    });
  });

  describe('task resolution with multiple tasks', () => {
    should('resolve multiple tasks', {
      template: {
        build: 'builder',
        lint: 'linter',
      },
      target: {
        build: 'run build lint',
      },
      result: {
        build: 'builder && linter',
        lint: 'linter',
      },
    });

    should('resolve a task definition even with additional spacing', {
      template: {
        build: 'builder',
        lint: 'linter',
      },
      target: {
        build: 'run build     lint',
      },
      result: {
        build: 'builder && linter',
        lint: 'linter',
      },
    });

    should('resolve multiple tasks with customized flow', {
      template: {
        'build': 'run-s build:*',
        'build:typescript': 'tsc',
      },
      target: {
        'build': 'run lint build',
        'build:custom': 'custom',
        'lint': 'run-s lint:*',
        'lint:typescript': 'eslint',
      },
      result: {
        'build': 'run-s lint:* && run-s build:*',
        'build:custom': 'custom',
        'build:typescript': 'tsc',
        'lint': 'run-s lint:*',
        'lint:typescript': 'eslint',
      },
    });

    should('attach arguments to each tasks', {
      template: {
        build: 'builder --arg',
        lint: 'linter --arg',
      },
      target: {
        build: 'run lint build -- --arg1 --arg2',
      },
      result: {
        build: 'linter --arg --arg1 --arg2 && builder --arg --arg1 --arg2',
        lint: 'linter --arg',
      },
    });
  });

  describe('task resolution with additional commands', () => {
    should('resolve a task with an additional command', {
      template: {
        'build': 'run-s build:*',
        'build:task': 'task',
      },
      target: {
        build: 'run build && other --arg',
      },
      result: {
        'build': '(run-s build:*) && other --arg',
        'build:task': 'task',
      },
    });

    should('resolve a task with the runner not the first command', {
      template: {
        build: 'builder',
        lint: 'linter',
      },
      target: {
        build: 'other && run build',
      },
      result: {
        build: 'other && (builder)',
        lint: 'linter',
      },
    });

    should('ignore non task definitions', {
      template: {
        build: 'builder',
      },
      target: {
        build: 'echo run build',
      },
      result: {
        build: 'echo run build',
      },
    });

    should('resolve a task with the runner in the middle of other commands', {
      template: {
        build: 'builder',
      },
      target: {
        build: 'command1 && run build && command2',
      },
      result: {
        build: 'command1 && (builder) && command2',
      },
    });

    should('resolve a task with the runner in a complicated logic', {
      template: {
        build: 'builder',
      },
      target: {
        build: '(command1 && run build) || command2',
      },
      result: {
        build: '(command1 && (builder)) || command2',
      },
    });

    should('resolve multiple tasks with an additional command', {
      template: {
        build: 'builder',
        lint: 'linter',
      },
      target: {
        build: 'other --arg && run build lint',
      },
      result: {
        build: 'other --arg && (builder && linter)',
        lint: 'linter',
      },
    });
  });
});
