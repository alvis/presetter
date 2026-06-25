/* eslint better-tailwindcss/no-unknown-classes: off */

import Heading from '@theme/Heading';
import clsx from 'clsx';

import styles from './WhyPresetterSection.module.css';

import type { ReactNode } from 'react';

type PresetterBenefitCardProps = {
  kicker: string;
  title: string;
  description: string;
  details: string[];
};

const presetterBenefits: PresetterBenefitCardProps[] = [
  {
    kicker: 'Foundation',
    title: 'Start from a stable baseline',
    description:
      'Presetter gives you a clean default posture for linting, formatting, testing, and TypeScript before the project drifts into one-off decisions.',
    details: [
      'Readable generated files instead of hidden magic',
      'Fast bootstrap path for greenfield work',
      'A clear starting point for team conventions',
    ],
  },
  {
    kicker: 'Composition',
    title: 'Layer only the capabilities you need',
    description:
      'Combine presets for frameworks, module systems, and code quality so the toolchain evolves with your product instead of fighting it.',
    details: [
      'React, ESM, hybrid modules, strict mode, and monorepos',
      'Predictable composition across packages and apps',
      'A system that stays understandable under pressure',
    ],
  },
  {
    kicker: 'Scale',
    title: 'Keep growth calm as the stack expands',
    description:
      'What starts as one package can become a larger workspace without rethinking the entire configuration story from scratch.',
    details: [
      'Single-package and monorepo paths fit the same mental model',
      'Commands and presets stay explicit as complexity rises',
      'A stronger developer experience for long-lived codebases',
    ],
  },
];

/**
 * Renders one homepage feature card.
 * @param props Feature copy rendered in the card.
 * @returns Feature card element.
 */
function PresetterBenefitCard(props: PresetterBenefitCardProps): ReactNode {
  const { kicker, title, description, details } = props;

  return (
    <article className={clsx('col col--4', styles.featureColumn)}>
      <div className={styles.feature}>
        <p className={styles.kicker}>{kicker}</p>
        <Heading as="h3" className={styles.title}>
          {title}
        </Heading>
        <p className={styles.description}>{description}</p>
        <ul className={styles.detailList}>
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function WhyPresetterSection(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Why Presetter</p>
            <Heading as="h2" className={styles.sectionTitle}>
              A quieter, sharper workflow for configuration-heavy projects.
            </Heading>
          </div>
          <p className={styles.sectionDescription}>
            The new identity leans into discipline and clarity. The product
            should feel the same: composed, reliable, and engineered to hold up
            as your tooling surface area grows.
          </p>
        </div>
        <div className="row">
          {presetterBenefits.map((benefit, benefitIndex) => (
            <PresetterBenefitCard key={benefitIndex} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
