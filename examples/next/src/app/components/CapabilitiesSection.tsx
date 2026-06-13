import { SectionHeading } from '#components/primitives';

import { CapabilityCard } from './CapabilityCard';

import type { FC } from 'react';

import type { CapabilityCardProps } from './CapabilityCard';

/** props accepted by the {@link CapabilitiesSection} component */
export type CapabilitiesSectionProps = {
  /** capability cards rendered inside the grid */
  readonly capabilities: readonly CapabilityCardProps[];
};

/**
 * renders the "Services" capability cards section
 *
 * lays out the capabilities in an asymmetric 2-column grid (1.15fr/0.85fr)
 * that collapses to a single column below 900px. the first card receives
 * the `featured` treatment so it spans both rows on wide viewports
 * @param props props that configure the rendered section
 * @param props.capabilities capability cards rendered inside the grid
 * @returns the rendered capabilities section
 */
export const CapabilitiesSection: FC<CapabilitiesSectionProps> = ({
  capabilities,
}) => {
  return (
    <section
      aria-labelledby="services-title"
      className={
        'w-full max-w-[1120px] mx-auto ' +
        '[padding-block:clamp(var(--spacing)*16,8vw,var(--spacing)*24)] ' +
        'max-[620px]:[padding-block:calc(var(--spacing)*16)]'
      }
      id="services">
      <SectionHeading
        eyebrow="Services"
        title="One studio for the story, the shoot, and the sell."
        titleId="services-title"
      />
      <div
        className={
          'grid grid-cols-[1.15fr_0.85fr] gap-4 ' + 'max-[900px]:grid-cols-1'
        }>
        {capabilities.map((item, index) => (
          <CapabilityCard featured={index === 0} key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};
