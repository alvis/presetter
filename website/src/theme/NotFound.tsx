/* eslint max-lines-per-function: off */

import Link from '@docusaurus/Link';

import { PageMetadata } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import styles from './NotFound.module.css';

import type { ReactNode } from 'react';

interface PopularLink {
  readonly label: string;
  readonly to: string;
  readonly description: string;
}

const POPULAR_LINKS: readonly PopularLink[] = [
  {
    label: 'Read the Introduction',
    to: '/docs/',
    description: 'Understand what Presetter is and why it exists.',
  },
  {
    label: 'Start the Getting Started guide',
    to: '/docs/introduction/getting-started',
    description: 'Install Presetter and scaffold a project in minutes.',
  },
  {
    label: 'Browse the CLI Reference',
    to: '/docs/cli-reference',
    description: 'Every command, flag, and option explained.',
  },
  {
    label: 'Explore the API Reference',
    to: '/docs/api',
    description: 'Programmatic usage of the Presetter core.',
  },
  {
    label: 'Follow a Tutorial',
    to: '/docs/tutorials',
    description: 'Step-by-step walkthroughs for real projects.',
  },
];

const ISSUE_BASE_URL = 'https://github.com/alvis/presetter/issues/new';

/**
 * Build a GitHub issue URL that pre-fills title/body with the broken path.
 * @param pathname Current window pathname (unknown on server render).
 * @returns Pre-filled GitHub new-issue URL.
 */
function buildReportUrl(pathname: string): string {
  const params = new URLSearchParams({
    title: `Broken link: ${pathname}`,
    body: `The following URL returned a 404 on the Presetter docs site:\n\nURL: ${pathname}\n\nPlease describe where you found the link (search engine, another doc page, etc.).`,
    labels: 'docs,broken-link',
  });

  return `${ISSUE_BASE_URL}?${params.toString()}`;
}

/** Lists popular documentation destinations rendered as cards. */
function PopularDocumentationLinks(): ReactNode {
  return (
    <ul className={styles.popularList}>
      {POPULAR_LINKS.map((link) => (
        <li key={link.to}>
          <Link className={styles.popularCard} to={link.to}>
            <span className={styles.popularLabel}>{link.label}</span>
            <span className={styles.popularDescription}>
              {link.description}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Custom 404 page with search, popular docs, and broken-link reporting.
 * @returns The NotFound page element.
 */
export default function NotFoundPage(): ReactNode {
  const searchSectionRef = useRef<HTMLElement | null>(null);
  const primaryActionRef = useRef<HTMLButtonElement | null>(null);
  const [reportUrl, setReportUrl] = useState<string>(() =>
    buildReportUrl('unknown'),
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    setReportUrl(buildReportUrl(window.location.pathname));
  }, []);

  // focus management — move focus to the search input at desktop, or to the
  // primary "Search the docs" CTA at mobile where the input is inside a drawer
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const desktopInput =
        searchSectionRef.current?.querySelector<HTMLInputElement>(
          'input[type="search"], input.navbar__search-input, input',
        );

      if (desktopInput && desktopInput.offsetParent !== null) {
        desktopInput.focus({ preventScroll: true });

        return;
      }

      primaryActionRef.current?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleFocusSearch = useCallback(() => {
    const input = searchSectionRef.current?.querySelector<HTMLInputElement>(
      'input[type="search"], input.navbar__search-input, input',
    );

    if (input) {
      input.focus();
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });

      return;
    }

    // mobile fallback — trigger the Docusaurus search drawer via its toggle
    const toggle = document.querySelector<HTMLButtonElement>(
      'button.DocSearch-Button, .navbar__search .DocSearch-Button',
    );
    toggle?.click();
  }, []);

  const title = useMemo(
    () =>
      translate({
        id: 'theme.NotFound.title',
        message: 'Page Not Found',
      }),
    [],
  );

  return (
    <>
      <PageMetadata title={title} />
      <Layout>
        <main className={styles.wrapper} role="main">
          <div aria-hidden="true" className={styles.glyphBackdrop} />
          <div className={styles.container}>
            <p className={styles.eyebrow}>404</p>
            <Heading as="h1" className={styles.title}>
              Page not found
            </Heading>
            <p className={styles.subtitle}>
              We couldn&apos;t find that page. The link may be outdated or
              mistyped. Try searching the docs, or jump to one of the popular
              destinations below.
            </p>

            <div className={styles.primaryActions}>
              <button
                className={styles.primaryCta}
                ref={primaryActionRef}
                type="button"
                onClick={handleFocusSearch}>
                Search the docs
              </button>
              <Link className={styles.secondaryCta} to="/">
                Return home
              </Link>
            </div>

            <section
              aria-labelledby="not-found-search-title"
              className={styles.searchSection}
              ref={searchSectionRef}>
              <Heading
                as="h2"
                className={styles.sectionTitle}
                id="not-found-search-title">
                Search the documentation
              </Heading>
              <div className={styles.searchBarWrapper}>
                <SearchBar />
              </div>
            </section>

            <section
              aria-labelledby="not-found-popular-title"
              className={styles.popular}>
              <Heading
                as="h2"
                className={styles.sectionTitle}
                id="not-found-popular-title">
                Popular destinations
              </Heading>
              <PopularDocumentationLinks />
            </section>

            <p className={styles.reportRow}>
              Still stuck?{' '}
              <Link
                className={styles.reportLink}
                rel="noopener noreferrer"
                target="_blank"
                to={reportUrl}>
                Report a broken link on GitHub
              </Link>
              .
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
}
