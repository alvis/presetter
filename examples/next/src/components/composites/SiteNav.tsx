import { classnames } from '#classnames';
import { BrandLockup, LinkButton } from '#components/primitives';

import type { FC } from 'react';

/** item shown in the primary navigation row */
export type NavItem = {
  /** anchor target, e.g. `#work` */
  readonly href: string;
  /** visible link label */
  readonly label: string;
};

/** props accepted by the {@link SiteNav} component */
export type SiteNavProps = {
  /** navigation items rendered between the brand mark and the CTA */
  readonly navItems: readonly NavItem[];
};

/**
 * renders the primary site navigation header
 *
 * uses a flex layout above 900px and switches to a 2-row CSS grid with
 * named `brand`/`cta`/`links` areas below that breakpoint; the
 * `max-[620px]` step tightens padding and reduces the corner radius for
 * very narrow viewports
 * @param props props that configure the rendered nav
 * @param props.navItems navigation items rendered between the brand mark and the CTA
 * @returns the rendered site header and primary navigation
 */
export const SiteNav: FC<SiteNavProps> = ({ navItems }) => {
  return (
    <header
      className={classnames(
        'pt-6 px-4',
        'sm:px-6 lg:px-16',
        'max-[620px]:px-3 max-[620px]:pt-3',
      )}>
      <nav
        aria-label="Primary navigation"
        className="w-full max-w-[1120px] mx-auto">
        <div
          className={classnames(
            'relative rounded-lg shadow-soft',
            'bg-surface-on-paper-strong',
            'px-5 py-3 max-[620px]:p-3 max-[620px]:rounded-md',
            'min-[901px]:flex min-[901px]:items-center',
            'min-[901px]:justify-between',
            'min-[901px]:gap-x-6 min-[901px]:gap-y-4',
            'min-[901px]:min-h-[76px]',
            'max-[900px]:grid max-[900px]:grid-cols-[minmax(0,1fr)_auto]',
            'max-[900px]:[grid-template-areas:"brand_cta""links_links"]',
            'max-[900px]:items-stretch',
            'max-[900px]:gap-x-4 max-[900px]:gap-y-3',
          )}>
          <div
            className={classnames(
              'max-[900px]:[grid-area:brand] max-[900px]:self-center',
              'max-[620px]:text-ui',
            )}>
            <BrandLockup />
          </div>
          <div
            aria-label="Page sections"
            className={classnames(
              'min-w-0 text-ink-soft text-ui font-medium',
              'min-[901px]:flex min-[901px]:flex-1',
              'min-[901px]:items-center',
              'min-[901px]:justify-center min-[901px]:flex-nowrap',
              'min-[901px]:[gap:clamp(var(--spacing)*4,3vw,var(--spacing)*8)]',
              'max-[900px]:[grid-area:links] max-[900px]:self-center',
              'max-[900px]:flex max-[900px]:justify-between',
              'max-[900px]:flex-nowrap',
              'max-[900px]:overflow-x-auto max-[900px]:w-full',
              'max-[900px]:px-1 max-[900px]:py-2 nav-links-scroll',
              'max-[620px]:gap-3 max-[620px]:text-xs',
            )}>
            {navItems.map((item) => (
              <a
                className={classnames(
                  'inline-flex items-center min-h-11 px-2 whitespace-nowrap',
                  'transition-[transform,background-color,color,box-shadow]',
                  'duration-[180ms] ease-out',
                  'hover:[@media(hover:hover)]:-translate-y-0.5',
                )}
                href={item.href}
                key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <LinkButton
            ariaLabel="Book a launch call"
            className={classnames(
              'inline-flex items-center justify-center gap-2 whitespace-nowrap',
              'min-h-11 px-5 rounded-md',
              'bg-ink text-paper text-ui font-bold shadow-crisp',
              'transition-[transform,background-color,color,box-shadow]',
              'duration-[180ms] ease-out',
              'hover:[@media(hover:hover)]:shadow-press',
              'max-[900px]:[grid-area:cta] max-[900px]:self-center',
              'max-[900px]:justify-self-end',
              'max-[620px]:gap-1 max-[620px]:px-2 max-[620px]:text-xs',
            )}
            href="#contact">
            <span className="max-[900px]:hidden">Book a launch call</span>
            <span className="hidden max-[900px]:inline">Book call</span>
            <span aria-hidden="true" className="max-[620px]:text-2xs">
              →
            </span>
          </LinkButton>
        </div>
      </nav>
    </header>
  );
};
