/** Mobile-only Algolia DocSearch button. */

import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './MobileSearchButton.module.css';

import type React from 'react';

const SEARCH_LABEL = translate({
  id: 'theme.SearchBar.label',
  message: 'Search',
  description: 'The ARIA label and placeholder for search button',
});

/**
 * Renders the compact DocSearch button in the mobile navbar slot.
 * @returns DocSearch button wrapped for the navbar layout.
 */
export default function MobileSearchButton(): React.ReactNode {
  const { siteConfig } = useDocusaurusContext();

  if (!siteConfig.themeConfig.algolia) {
    return null;
  }

  return (
    <div className={styles.trigger}>
      <button
        aria-label={SEARCH_LABEL}
        className={styles.button}
        type="button"
        onClick={() =>
          document
            .querySelector<HTMLButtonElement>(
              ".navbar [class*='navbarSearchContainer'] .DocSearch-Button",
            )
            ?.click()
        }>
        <svg
          aria-hidden
          className={styles.icon}
          height="20"
          viewBox="0 0 24 24"
          width="20">
          <circle
            cx="11"
            cy="11"
            fill="none"
            r="8"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="m21 21-4.3-4.3"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
