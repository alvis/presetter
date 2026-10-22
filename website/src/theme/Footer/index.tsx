import Link from '@docusaurus/Link';
import {
  isMultiColumnFooterLinks,
  useThemeConfig,
} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

import InstallCommand from '#components/home/InstallCommand';

import styles from './styles.module.css';

import type {
  FooterColumnItem,
  FooterLinkItem,
} from '@docusaurus/theme-common';
import type { ReactNode } from 'react';

const REPOSITORY_URL = 'https://github.com/alvis/presetter';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/** scrolls back to the top, smoothly unless the visitor prefers reduced motion */
function scrollToTop(): void {
  const reduceMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;

  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}

/**
 * renders one footer link, routing internal paths through the site router
 * @param props the link to render
 * @param props.item link label and target from the theme config
 * @returns an anchor to the configured target
 */
function FooterLink({ item }: { readonly item: FooterLinkItem }): ReactNode {
  const target = item.href ? { href: item.href } : { to: item.to };

  return (
    <Link className={styles.link} {...target}>
      {item.label}
    </Link>
  );
}

/**
 * renders a titled column of footer links
 * @param props the column to render
 * @param props.column column title and links from the theme config
 * @returns the titled list of links
 */
function FooterColumn({
  column,
}: {
  readonly column: FooterColumnItem;
}): ReactNode {
  return (
    <div className={styles.column}>
      {column.title ? (
        <h3 className={styles.columnTitle}>{column.title}</h3>
      ) : null}
      {column.items.map((item) => (
        <FooterLink item={item} key={item.href ?? item.to ?? item.label} />
      ))}
    </div>
  );
}

/**
 * site footer: a get-started call to action beside the configured link columns
 * @returns the footer, or nothing when the theme config has no footer
 */
export default function Footer(): ReactNode {
  const { footer } = useThemeConfig();
  const logoSrc = useBaseUrl(footer?.logo?.src ?? '');

  if (!footer) {
    return null;
  }

  const columns = isMultiColumnFooterLinks(footer.links) ? footer.links : [];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.cta}>
            <p className={styles.kicker}>Get started</p>
            <h2 className={styles.title}>
              One preset.
              <br />
              Every repo in sync.
            </h2>
            <InstallCommand
              classNames={{
                root: styles.install,
                command: styles.installCommand,
                prompt: styles.installPrompt,
                copy: styles.installCopy,
              }}
            />
            <div className={styles.actions}>
              <Link className={styles.primaryAction} to="/docs/">
                Read the docs
              </Link>
              <Link className={styles.secondaryAction} href={REPOSITORY_URL}>
                Star on GitHub
              </Link>
            </div>
          </div>
          <nav aria-label="Footer" className={styles.columns}>
            {columns.map((column) => (
              <FooterColumn
                column={column}
                key={
                  column.title ?? column.items.map((item) => item.label).join()
                }
              />
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <Link className={styles.brand} to={footer.logo?.href ?? '/'}>
            {footer.logo ? (
              <img
                alt=""
                className={styles.brandLogo}
                height={32}
                loading="lazy"
                src={logoSrc}
                width={32}
              />
            ) : null}
            <span>Presetter</span>
          </Link>
          <div className={styles.meta}>
            <span>MIT License</span>
            <button
              className={styles.toTop}
              type="button"
              onClick={scrollToTop}>
              Back to top <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
