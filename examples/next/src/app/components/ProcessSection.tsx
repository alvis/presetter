import { classnames } from '#classnames';
import { SectionHeading } from '#components/primitives';

import { ProcessStep } from './ProcessStep';

import type { FC } from 'react';

import type { ProcessStepProps } from './ProcessStep';

/** props accepted by the {@link ProcessSection} component */
export interface ProcessSectionProps {
  /** process step rows rendered inside the ordered list */
  readonly process: readonly ProcessStepProps[];
}

/**
 * renders the "Process" section with an ordered list of phases
 *
 * composes the shared section heading with a vertical list of phase rows,
 * preserving semantic ordering via `<ol>`.
 * @param props props that configure the rendered section
 * @param props.process process step rows rendered inside the ordered list
 * @returns the rendered process section
 */
export const ProcessSection: FC<ProcessSectionProps> = ({ process }) => {
  return (
    <section
      aria-labelledby="process-title"
      className={classnames(
        'w-full max-w-[1120px] mx-auto',
        '[padding-block:clamp(var(--spacing)*16,8vw,var(--spacing)*24)]',
        'max-[620px]:[padding-block:calc(var(--spacing)*16)]',
      )}
      id="process">
      <SectionHeading
        eyebrow="Process"
        title="A launch room that keeps decisions moving."
        titleId="process-title"
      />
      <ol className="grid gap-5 m-0 p-0 list-none">
        {process.map((step) => (
          <ProcessStep key={step.phase} {...step} />
        ))}
      </ol>
    </section>
  );
};
