import Layout from '@theme/Layout';

import ChapterNav from '#components/home/ChapterNav';
import DriftSection from '#components/home/DriftSection';
import ExploreSection from '#components/home/ExploreSection';
import HeroSection from '#components/home/HeroSection';
import OpinionsSection from '#components/home/OpinionsSection';
import RevealRoot from '#components/home/RevealRoot';
import ScriptsSection from '#components/home/ScriptsSection';
import YoursSection from '#components/home/YoursSection';

import styles from './index.module.css';

import type { ReactNode } from 'react';

/**
 * renders the homepage, a five-chapter tour from config drift to building your own preset stack
 * @returns the homepage element
 */
export default function Homepage(): ReactNode {
  return (
    <Layout
      description="Presetter helps TypeScript teams compose, bootstrap, and scale their configuration with a cleaner system"
      title="Configuration Management That Scales">
      <RevealRoot className={styles.page}>
        <ChapterNav />
        <main>
          <HeroSection />
          <DriftSection />
          <OpinionsSection />
          <ScriptsSection />
          <YoursSection />
          <ExploreSection />
        </main>
      </RevealRoot>
    </Layout>
  );
}
