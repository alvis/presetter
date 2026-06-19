import { classnames } from '#classnames';

import { ServiceChip } from './ServiceChip';

import type { FC } from 'react';

/** props accepted by the {@link ServiceTicker} component */
export type ServiceTickerProps = {
  /** service labels rendered as individual chips */
  readonly services: readonly string[];
};

/**
 * renders the horizontal strip of service chips beneath the hero
 *
 * a centered, wrap-friendly row of chips on a soft paper-veil background
 * each entry is rendered through {@link ServiceChip}
 * @param props props that configure the rendered ticker
 * @param props.services service labels rendered as individual chips
 * @returns the rendered service ticker section
 */
export const ServiceTicker: FC<ServiceTickerProps> = ({ services }) => {
  return (
    <section
      aria-label="ACME services"
      className={classnames(
        'flex flex-wrap justify-center gap-2',
        'w-full max-w-[980px] mx-auto mt-8 p-3 rounded-lg',
        'bg-surface-on-paper-veil',
      )}>
      {services.map((service) => (
        <ServiceChip key={service}>{service}</ServiceChip>
      ))}
    </section>
  );
};
