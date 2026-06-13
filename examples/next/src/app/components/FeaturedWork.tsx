import { SectionHeading } from '#components/primitives';

import { WorkItem } from './WorkItem';

import type { FC } from 'react';

import type { WorkItemProps } from './WorkItem';

/** props accepted by the {@link FeaturedWork} component */
export interface FeaturedWorkProps {
  /** project rows rendered inside the work list */
  readonly work: readonly WorkItemProps[];
}

/**
 * renders the "Selected work" section listing recent client projects
 *
 * composes the shared section heading with a vertical list of project rows
 * separated by hairline rules.
 * @param props props that configure the rendered section
 * @param props.work project rows rendered inside the work list
 * @returns the rendered featured-work section
 */
export const FeaturedWork: FC<FeaturedWorkProps> = ({ work }) => {
  return (
    <section
      aria-labelledby="work-title"
      className={
        'w-full max-w-[1120px] mx-auto ' +
        '[padding-block:clamp(var(--spacing)*16,8vw,var(--spacing)*24)] ' +
        'max-[620px]:[padding-block:calc(var(--spacing)*16)]'
      }
      id="work">
      <SectionHeading
        eyebrow="Selected work"
        title="Launch systems with measurable afterlife."
        titleId="work-title"
      />
      <div className="grid gap-2">
        {work.map((project) => (
          <WorkItem key={project.client} {...project} />
        ))}
      </div>
    </section>
  );
};
