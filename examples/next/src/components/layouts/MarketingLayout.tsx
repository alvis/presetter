import { classnames } from '#classnames';
import { SiteFooter, SiteNav } from '#components/composites';

import type { FC, PropsWithChildren } from 'react';

/** navigation item rendered inside the marketing site header */
export type MarketingNavItem = {
  /** anchor target, e.g. `#work` */
  readonly href: string;
  /** visible link label */
  readonly label: string;
};

/** props accepted by the {@link MarketingLayout} component */
export type MarketingLayoutProps = PropsWithChildren<{
  /** navigation items shown in the site header */
  readonly navItems: readonly MarketingNavItem[];
}>;

/**
 * renders the marketing page shell with skip link, primary nav, and footer
 *
 * anchors the marketing pages by composing the shared site header, the
 * `<main>` landmark, and the site footer. the first focusable element is
 * a skip link that jumps directly to `#main-content` so keyboard users can
 * bypass the navigation. callers control the section composition via
 * `children` and supply nav items per page
 * @param props props that configure the rendered layout
 * @param props.children rendered section composition nested inside the `<main>` landmark
 * @param props.navItems navigation items shown in the site header
 * @returns the rendered marketing layout shell
 */
export const MarketingLayout: FC<MarketingLayoutProps> = ({
  children,
  navItems,
}) => {
  return (
    <>
      <a
        className={classnames(
          'absolute top-3 left-3 z-[999]',
          'inline-flex items-center min-h-11',
          'px-5 py-3 rounded-md',
          'bg-ink text-paper font-bold',
          '-translate-y-[200%] focus:translate-y-0',
          'focus-visible:translate-y-0',
          'transition-transform duration-[180ms] ease-out',
        )}
        href="#main-content">
        Skip to main content
      </a>
      <SiteNav navItems={navItems} />
      <main
        className={classnames(
          'page-shell-grid',
          'relative min-h-svh overflow-hidden',
          'px-4 pb-12 max-[620px]:px-3 max-[620px]:pb-8',
          'sm:px-6 lg:px-16',
        )}
        id="main-content"
        tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
};
