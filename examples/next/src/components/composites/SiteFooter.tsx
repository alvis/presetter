import { classnames } from '#classnames';
import { BrandLockup } from '#components/primitives';

import type { FC } from 'react';

/** item shown in either the footer navigation column or the legal-link row */
interface FooterNavItem {
  /** anchor target, e.g. `#work` */
  readonly href: string;
  /** visible link label */
  readonly label: string;
}

/** primary footer navigation items (mirrors the top-nav sections) */
const FOOTER_NAV_ITEMS: readonly FooterNavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const;

/** legal links shown in the small row below the footer divider */
const FOOTER_LEGAL_ITEMS: readonly FooterNavItem[] = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
] as const;

/**
 * renders the footer navigation column recapping the marketing sections
 * @returns the rendered footer navigation
 */
const FooterNav: FC = () => {
  return (
    <nav aria-label="Footer navigation">
      <h2
        className={classnames(
          'absolute w-px h-px -m-px p-0 overflow-hidden border-0',
          '[clip:rect(0_0_0_0)] [clip-path:inset(50%)] whitespace-nowrap',
        )}>
        Site sections
      </h2>
      <ul
        className={classnames(
          'flex flex-col gap-1 m-0 p-0 list-none',
          'max-[720px]:items-center',
        )}>
        {FOOTER_NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              className={classnames(
                'inline-flex items-center min-h-11 py-2',
                'text-ink font-bold leading-[1.5] no-underline',
                'hover:underline hover:underline-offset-[5px]',
                'hover:decoration-[2px]',
                'focus-visible:underline focus-visible:underline-offset-[5px]',
                'focus-visible:decoration-[2px]',
              )}
              href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

/**
 * renders the legal-link row shown below the footer divider
 * @returns the rendered legal navigation
 */
const FooterLegalNav: FC = () => {
  return (
    <nav aria-label="Legal">
      <ul
        className={classnames(
          'footer-legal-list',
          'flex flex-wrap items-center gap-3 m-0 p-0 list-none',
          'max-[720px]:justify-center',
        )}>
        {FOOTER_LEGAL_ITEMS.map((item) => (
          <li className="inline-flex items-center" key={item.href}>
            <a
              className={classnames(
                'inline-flex items-center min-h-11',
                'text-ink font-bold leading-[1.5] no-underline',
                'hover:underline hover:underline-offset-[5px]',
                'hover:decoration-[2px]',
                'focus-visible:underline focus-visible:underline-offset-[5px]',
                'focus-visible:decoration-[2px]',
              )}
              href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

/**
 * renders the site-wide footer at the end of the marketing page
 *
 * provides a structured three-column layout (brand and tagline, navigation
 * recap, contact channel) above a divider and a copyright row. renders as
 * the page's `contentinfo` landmark via an explicit role to remain a
 * landmark even when nested inside `<main>`
 * @returns the rendered site footer
 */
export const SiteFooter: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={classnames(
        'w-full max-w-[1120px] mx-auto',
        '[padding-block:clamp(var(--spacing)*16,8vw,var(--spacing)*24)]',
        'max-[620px]:[padding-block:calc(var(--spacing)*16)]',
        'flex flex-col gap-8 pb-12 border-t border-line text-ink-soft',
      )}
      role="contentinfo">
      <div
        className={classnames(
          'grid grid-cols-[2fr_1fr_1fr] gap-12 items-start',
          'max-[720px]:grid-cols-1 max-[720px]:gap-7 max-[720px]:text-center',
        )}>
        <div
          className={classnames(
            'flex flex-col gap-4 max-w-[38ch]',
            'max-[720px]:items-center max-[720px]:max-w-none',
          )}>
          <BrandLockup />
          <p
            className={
              'mb-0 text-ink-soft text-base leading-[1.58] [text-wrap:pretty]'
            }>
            Launch films, landing narratives, and campaign cutdowns for teams
            shipping something worth noticing.
          </p>
        </div>

        <FooterNav />

        <div
          className={classnames(
            'flex flex-col items-start',
            'max-[720px]:items-center',
          )}>
          <h2
            className={classnames(
              'mt-0 mb-3 text-ink font-display text-ui font-bold',
              'uppercase tracking-[0.04em]',
            )}>
            Contact
          </h2>
          <a
            className={classnames(
              'inline-flex items-center min-h-11',
              'py-2 px-4 -ms-4 rounded-md',
              'text-ink font-bold leading-[1.4]',
              'underline underline-offset-[5px] decoration-[2px]',
              'hover:bg-surface-on-paper-strong',
              'max-[720px]:ms-0',
            )}
            href="mailto:hello@acme.example">
            hello@acme.example
          </a>
          <p className="mt-2 text-ink-soft text-base leading-[1.58]">
            We reply within one business day.
          </p>
        </div>
      </div>

      <div aria-hidden="true" className="h-px bg-line" />

      <FooterLegalNav />

      <div
        className={classnames(
          'flex flex-wrap justify-between items-center gap-y-3 gap-x-6',
          'text-ink-soft text-base',
          'max-[720px]:flex-col max-[720px]:items-center',
          'max-[720px]:gap-2 max-[720px]:text-center',
        )}>
        <p className="m-0">{`© ${year} ACME Inc. All rights reserved.`}</p>
        <p className="m-0">Built for ambitious launches.</p>
      </div>
    </footer>
  );
};
