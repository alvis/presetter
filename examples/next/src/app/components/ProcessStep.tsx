import { classnames } from '#classnames';

import type { FC } from 'react';

/** props accepted by the {@link ProcessStep} component */
export interface ProcessStepProps {
  /** descriptive body paragraph rendered beneath the title */
  readonly body: string;
  /** giant phase numeral (e.g. `"01"`) rendered on the left */
  readonly phase: string;
  /** step title rendered as the H3 heading */
  readonly title: string;
}

/**
 * renders a single phase row inside the process section list
 *
 * uses a 2-column grid (large numeral plus copy column) on wide viewports
 * and stacks vertically below 620px. the `even:ml-auto` rule recreates the
 * zig-zag layout where even items shift to the right.
 * @param props props that configure the rendered step
 * @param props.body descriptive body paragraph rendered beneath the title
 * @param props.phase giant phase numeral (e.g. `"01"`) rendered on the left
 * @param props.title step title rendered as the H3 heading
 * @returns the rendered process step
 */
export const ProcessStep: FC<ProcessStepProps> = ({ body, phase, title }) => {
  return (
    <li
      className={classnames(
        'grid grid-cols-[96px_1fr] gap-6 w-full max-w-[860px]',
        'py-6 border-t border-line',
        'even:ml-auto',
        'max-[620px]:grid-cols-1 max-[620px]:gap-3',
        'max-[620px]:even:ml-0',
      )}>
      <span
        className={classnames(
          'text-coral font-display font-black leading-none',
          'text-5xl',
        )}>
        {phase}
      </span>
      <div>
        <h3 className="mb-2 text-ink text-3xl leading-[1.2]">{title}</h3>
        <p
          className={
            'mb-0 text-ink-soft text-base leading-[1.58] [text-wrap:pretty]'
          }>
          {body}
        </p>
      </div>
    </li>
  );
};
