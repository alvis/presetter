import type { FC, PropsWithChildren } from 'react';

/** props accepted by the {@link ServiceChip} component */
export type ServiceChipProps = PropsWithChildren;

/**
 * renders a single service pill inside the hero service strip
 *
 * a compact rounded badge that surfaces the studio's offering inside the
 * marketing service ticker uses the shared chip palette (paper-veil chip
 * background, moss eyebrow type) and widens horizontal padding to keep the
 * label legible inside the wrap-friendly hero strip
 * @param props props that configure the rendered chip
 * @param props.children label text rendered inside the chip
 * @returns the rendered chip span
 */
export const ServiceChip: FC<ServiceChipProps> = ({ children }) => {
  return (
    <span
      className={
        'inline-flex items-center min-h-8 rounded-full ' +
        'bg-chip-bg text-moss text-eyebrow font-bold ' +
        'px-4'
      }>
      {children}
    </span>
  );
};
