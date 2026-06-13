import './globals.css';

import type { Metadata, Viewport } from 'next';
import type { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'ACME Inc — Launch creative studio for ambitious teams',
  description:
    'ACME Inc turns product launches, founder stories, and customer proof into cinematic landing pages and social cuts built for ambitious launch teams.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

/** props accepted by the {@link RootLayout} component */
type RootLayoutProps = PropsWithChildren;

/**
 * renders the html and body shell shared by every app router page
 *
 * supplies the html lang attribute and the body wrapper that next.js
 * requires for every app router page. the layout is intentionally minimal
 * so per-page layouts (such as `MarketingLayout`) can supply richer shells
 * @param props props that configure the rendered layout
 * @param props.children rendered page content nested inside the html/body shell
 * @returns the rendered html shell
 */
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
