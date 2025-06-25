import React from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PresetExplorer from '@site/src/components/interactive/PresetExplorer';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2 text--center">
            <img 
              src="/presetter/img/presetter-logo.svg" 
              alt="Presetter Logo" 
              style={{
                width: '120px',
                height: '120px',
                marginBottom: '2rem'
              }}
            />
            <Heading as="h1" className="hero__title">
              Configuration Management That Scales
            </Heading>
            <p className="hero__subtitle">
              Streamline your TypeScript projects with intelligent preset management. 
              No more configuration hell, just clean, maintainable setups that grow with your needs.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg margin-right--md"
                to="/docs/">
                Get Started
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/tutorials/">
                View Tutorials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Configuration Management That Scales"
      description="Presetter - The TypeScript configuration management system that transforms how you manage build tools and development environments across projects">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="preset-explorer-section">
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <Heading as="h2" className="text--center margin-bottom--lg">
                  Explore Presets
                </Heading>
                <p className="text--center margin-bottom--lg" style={{fontSize: '1.1rem', opacity: 0.8}}>
                  Discover the perfect combination of presets for your project. Mix and match configurations
                  to create your ideal development environment.
                </p>
                <PresetExplorer />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
