import Link from 'next/link';

import type { FC } from 'react';

/**
 * renders the ACME brand lockup as a home link
 *
 * pairs a circular black "A" mark with the "ACME Inc" wordmark and links
 * to the site root; the lockup is a single inline-flex row that respects
 * the minimum 44px hit-target shared across pressable elements
 * @returns the rendered brand link
 */
export const BrandLockup: FC = () => {
  return (
    <Link
      aria-label="ACME Inc home"
      className={
        'inline-flex items-center justify-center min-h-11 gap-3 ' +
        'p-0 font-black leading-none whitespace-nowrap'
      }
      href="/">
      <span
        className={
          'grid place-items-center ' +
          'w-[34px] h-[34px] rounded-full ' +
          'bg-ink text-paper font-display text-xl font-black ' +
          'max-[620px]:w-[30px] max-[620px]:h-[30px]'
        }>
        A
      </span>
      <span>ACME Inc</span>
    </Link>
  );
};
