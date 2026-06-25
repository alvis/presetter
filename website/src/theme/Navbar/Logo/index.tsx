/* eslint better-tailwindcss/no-unknown-classes: off */

import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

import type React from 'react';

export default function NavbarLogo(): React.ReactNode {
  const { navbar } = useThemeConfig();
  const logo = navbar.logo;

  if (!logo) {
    return navbar.title;
  }

  const logoHref = logo.href ?? '/';
  const logoSrc = useBaseUrl(logo.src);
  const altText = logo.alt ?? navbar.title ?? 'Logo';

  return (
    <Link className="navbar__brand" to={logoHref}>
      <div className="navbar__logo">
        <img
          alt={altText}
          className={styles.logoImage}
          decoding="async"
          height={32}
          loading="eager"
          src={logoSrc}
          width={32}
        />
      </div>
      {navbar.title ? (
        <b className="navbar__title text--truncate">{navbar.title}</b>
      ) : null}
    </Link>
  );
}
