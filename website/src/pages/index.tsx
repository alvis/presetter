/* eslint better-tailwindcss/no-unknown-classes: off, max-lines-per-function: off */

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import DeferredPresetExplorer from '#components/interactive/DeferredPresetExplorer';
import WhyPresetterSection from '#components/WhyPresetterSection';

import styles from './index.module.css';

import type { ReactNode } from 'react';

const proofPoints = [
  {
    label: 'Single source',
    value: 'One readable preset file for your whole toolchain',
    hint: 'See the config model',
    href: '/docs/introduction/configuration',
  },
  {
    label: 'Agent setup',
    value:
      'Sync coding-agent settings, plugins, skills, and MCP files across repos',
    hint: 'See the tutorial',
    href: '/docs/tutorials/ai-agent-presets',
  },
  {
    label: 'Scale path',
    value: 'Grow from app to monorepo without rethinking your stack',
    hint: 'See the monorepo guide',
    href: '/docs/tutorials/monorepo-setup',
  },
];

/**
 * Hero header section for the homepage.
 * @returns The hero header JSX element.
 */
function HomepageHero(): ReactNode {
  const heroLogoUrl = useBaseUrl('/images/logo.svg');
  const agentTutorialUrl = useBaseUrl('/docs/tutorials/ai-agent-presets');
  const releaseUrl = useBaseUrl('/blog/presetter-v9-release');
  const scrollToPresetExplorer = (): void => {
    document
      .getElementById('preset-explorer')
      ?.scrollIntoView({ behavior: 'smooth' });
  };
  const presetSelections = ['essentials', 'react', 'strict'];
  const ghostFiles = [
    'eslint.config.ts',
    'vitest.config.ts',
    '.gitignore',
    'generated/',
  ];

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroShell}>
          <div className={styles.heroContent}>
            <Link className={styles.releasePill} to={releaseUrl}>
              <span aria-hidden="true" className={styles.releaseDot} />
              <span className={styles.releaseTag}>v9</span>
              <span className={styles.releaseText}>
                Scoped packages, git-cliff releases, and new runtime presets
              </span>
              <span aria-hidden="true" className={styles.releaseTextShort}>
                is here
              </span>
              <span aria-hidden="true" className={styles.releaseArrow}>
                →
              </span>
            </Link>
            <div className={styles.eyebrow}>
              Configuration clarity for serious TypeScript teams
            </div>
            <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
              One preset stack. Zero config drift.
            </Heading>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
              Presetter replaces config drift with one explicit preset stack, so
              teams can move faster without losing trust in the toolchain.
            </p>
            <div className={styles.buttons}>
              <button
                className={clsx(
                  'button button--primary button--lg',
                  styles.primaryButton,
                )}
                type="button"
                onClick={scrollToPresetExplorer}>
                Build Your Stack
              </button>
            </div>
            <p className={styles.heroSupport}>
              The Presetter ghost conjures generated config when the toolchain
              needs it, while Git keeps the noisy artifacts out of sight.
            </p>
            <Link className={styles.heroAgentSpotlight} to={agentTutorialUrl}>
              <span aria-hidden="true" className={styles.heroAgentGlow} />
              <span className={styles.heroAgentLabel}>
                Also works for coding-agent setup
              </span>
              <span className={styles.heroAgentText}>
                Sync coding-agent setup across repos, including Claude Code
                instructions, plugins, and skills.
              </span>
              <span className={styles.heroAgentAction}>
                <span className={styles.heroAgentActionText}>
                  View tutorial
                </span>
                <span aria-hidden="true" className={styles.heroAgentArrow}>
                  →
                </span>
              </span>
            </Link>
          </div>

          <div aria-hidden="true" className={styles.heroVisual}>
            <div className={styles.logoCard}>
              <div className={styles.heroCanvas}>
                <div className={styles.canvasGrid} />
                <div className={styles.heroFrame}>
                  <p className={styles.heroFrameLabel}>
                    One source of truth for every package
                  </p>
                </div>
                <div className={styles.heroWorkflow}>
                  <div className={styles.sourceCard}>
                    <div className={styles.sourceHeader}>
                      <div>
                        <p className={styles.cardEyebrow}>Preset composition</p>
                        <p className={styles.sourceLead}>
                          Compose the stack once.
                        </p>
                      </div>
                      <span className={styles.sourceBadge}>
                        shared baseline
                      </span>
                    </div>
                    <pre className={styles.sourceCode}>
                      <code>{`import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';
import react from '@presetter/preset-react';
import strict from '@presetter/preset-strict';

export default preset('app', {
  extends: [${presetSelections.join(', ')}],
});`}</code>
                    </pre>
                  </div>

                  <div className={styles.workspacePanel}>
                    <div className={styles.workspaceHeader}>
                      <div>
                        <p className={styles.cardEyebrow}>Presetter ghost</p>
                        <p className={styles.workspaceLead}>
                          Conjures config. Keeps the repo calm.
                        </p>
                      </div>
                    </div>
                    <div className={styles.illustrationShell}>
                      {ghostFiles.map((file) => (
                        <span className={styles.ghostOrbitFile} key={file}>
                          {file}
                        </span>
                      ))}
                      <img
                        alt=""
                        className={styles.heroGhost}
                        height={220}
                        src={heroLogoUrl}
                        width={220}
                      />
                      <div className={styles.gitignoreCallout}>
                        <span className={styles.gitignoreLabel}>
                          Git stays clean
                        </span>
                        <span className={styles.gitignoreValue}>
                          Generated files stay ghosted behind .gitignore
                        </span>
                      </div>
                    </div>
                    <p className={styles.workspaceSummary}>
                      Generated wrappers stay out of sight, while resolved
                      assets still make the toolchain work exactly as expected.
                      The same preset can sync shared coding-agent setup across
                      repositories too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * Proof points section highlighting key Presetter benefits.
 * @returns The proof section JSX element.
 */
function ProofPointsSection(): ReactNode {
  return (
    <section className={styles.proofSection}>
      <div className="container">
        <div className={styles.proofGrid}>
          {proofPoints.map((point) => (
            <Link
              className={clsx(styles.proofCard, styles.proofCardLink)}
              key={point.label}
              to={point.href}>
              <p className={styles.proofLabel}>{point.label}</p>
              <p className={styles.proofValue}>{point.value}</p>
              <p className={styles.proofHint}>{point.hint}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Interactive preset explorer section.
 * @returns The explorer section JSX element.
 */
function PresetExplorerSection(): ReactNode {
  return (
    <section className={styles.explorerSection} id="preset-explorer">
      <div className="container">
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.sectionEyebrow}>Interactive explorer</p>
            <Heading as="h2" className={styles.sectionTitle}>
              Assemble the preset stack that matches your project.
            </Heading>
          </div>
          <p className={styles.sectionDescription}>
            Filter by category, complexity, or feature set, then generate an
            installation command and starter config without losing sight of what
            each preset contributes.
          </p>
        </div>

        <DeferredPresetExplorer />
      </div>
    </section>
  );
}

/**
 * Decorative visual transition between page sections.
 * @param root0 Component props.
 * @param root0.className Additional class name for section-specific transition styling.
 * @returns The section transition JSX element.
 */
function DecorativeSectionTransition({
  className,
}: {
  readonly className: string | undefined;
}): ReactNode {
  return (
    <div
      aria-hidden="true"
      className={clsx(styles.sectionTransition, className)}>
      <div className={styles.sectionTransitionLayer} />
      <div className={styles.sectionTransitionAccent} />
    </div>
  );
}

export default function Homepage(): ReactNode {
  return (
    <Layout
      description="Presetter helps TypeScript teams compose, bootstrap, and scale their configuration with a cleaner system"
      title="Configuration Management That Scales">
      <HomepageHero />
      <main>
        <DecorativeSectionTransition className={styles.heroToProof} />
        <ProofPointsSection />
        <DecorativeSectionTransition className={styles.proofToFeatures} />
        <WhyPresetterSection />
        <DecorativeSectionTransition className={styles.featuresToExplorer} />
        <PresetExplorerSection />
      </main>
    </Layout>
  );
}
