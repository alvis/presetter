import { classnames } from '#classnames';
import { SectionHeading } from '#components/primitives';

import { PricePlanCard } from './PricePlanCard';

import type { FC } from 'react';

import type { PricePlanCardProps } from './PricePlanCard';

/** props accepted by the {@link PricingSection} component */
export interface PricingSectionProps {
  /** plan cards rendered inside the pricing grid */
  readonly pricing: readonly PricePlanCardProps[];
}

/**
 * renders the "Packages" pricing section
 *
 * lays out the plan cards in a three-up grid that collapses to a single
 * column below 900px.
 * @param props props that configure the rendered section
 * @param props.pricing plan cards rendered inside the pricing grid
 * @returns the rendered pricing section
 */
export const PricingSection: FC<PricingSectionProps> = ({ pricing }) => {
  return (
    <section
      aria-labelledby="pricing-title"
      className={classnames(
        'w-full max-w-[1120px] mx-auto',
        '[padding-block:clamp(var(--spacing)*16,8vw,var(--spacing)*24)]',
        'max-[620px]:[padding-block:calc(var(--spacing)*16)]',
      )}
      id="pricing">
      <SectionHeading
        eyebrow="Packages"
        title="Clear scopes for teams with launch dates."
        titleId="pricing-title"
      />
      <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
        {pricing.map((plan) => (
          <PricePlanCard key={plan.name} {...plan} />
        ))}
      </div>
    </section>
  );
};
