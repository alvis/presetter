import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import clsx from 'clsx';

import { useRef } from 'react';

import { chapterById, HERO_ID } from './chapters';
import styles from './HeroSection.module.css';
import { useAutoCycle } from './hooks';
import InstallCommand from './InstallCommand';
import SectionLink from './SectionLink';
import TokenizedCode from './TokenizedCode';

import type { ReactNode } from 'react';

const HERO_CODE = `import { preset } from 'presetter';
import essentials from '@presetter/preset-essentials';
import react from '@presetter/preset-react';
import strict from '@presetter/preset-strict';

export default preset('app', {
  extends: [essentials, react, strict],
});`;

/** generated files that appear around the logo, one per bootstrap step */
const GHOST_FILES = [
  { name: 'eslint.config.ts', className: styles.fileEslint },
  { name: 'vitest.config.ts', className: styles.fileVitest },
  { name: '.gitignore', className: styles.fileGitignore },
  { name: 'generated/', className: styles.fileGenerated },
];

/** number of steps in the bootstrap loop, which runs from step 0 to 10 */
const HERO_STEP_COUNT = 11;

/** time between bootstrap steps */
const HERO_STEP_MS = 650;

/** step shown when the loop does not run, with every file generated */
const HERO_FINAL_STEP = 10;

/** step from which the bootstrap summary is shown */
const HERO_DONE_STEP = 5;

/**
 * renders the hero copy column: release pill, headline, calls to action and install chip
 * @returns the hero copy element
 */
function HeroCopy(): ReactNode {
  return (
    <div className={styles.copy}>
      <Link className={styles.release} to="/blog/presetter-v9-release">
        <span aria-hidden="true" className={styles.releaseDot} />
        <span className={styles.releaseTag}>v9</span>
        <span>
          Scoped packages, git-cliff releases, and new runtime presets
        </span>
        <span aria-hidden="true">→</span>
      </Link>
      <p className={styles.eyebrow}>
        Configuration clarity for serious TypeScript teams
      </p>
      <h1 className={styles.title}>
        <span className={styles.titleLine}>
          Stop <span className={styles.squiggle}>copying configs</span>.
        </span>
        <span className={styles.slab}>
          <span className={styles.slabText}>Ship a preset.</span>
          <span aria-hidden="true" className={styles.slabCaret} />
        </span>
        <span className={styles.sticker}>↳ your opinions, versioned</span>
      </h1>
      <p className={styles.lead}>
        Describe your toolchain once in{' '}
        <code className={styles.leadCode}>presetter.config.ts</code>. Presetter
        installs declared packages and scripts, then generates the ESLint,
        Vitest and TypeScript config each repo expects, and keeps every repo in
        step when the preset moves.
      </p>
      <div className={styles.actions}>
        <SectionLink
          className={styles.primaryAction}
          targetId={chapterById.explore.id}>
          Build Your Stack
        </SectionLink>
        <SectionLink
          className={styles.secondaryAction}
          targetId={chapterById.yours.id}>
          Create your own preset <span aria-hidden="true">→</span>
        </SectionLink>
      </div>
      <InstallCommand
        classNames={{
          root: styles.install,
          command: styles.installCommand,
          prompt: styles.installPrompt,
          copy: styles.installCopy,
        }}
      />
    </div>
  );
}

/**
 * renders the animated bootstrap stage where generated files appear around the logo
 * @returns the decorative stage element
 */
function HeroStage(): ReactNode {
  const logoUrl = useBaseUrl('/images/logo.svg');
  const stageRef = useRef<HTMLDivElement>(null);
  const [cycleStep, , running] = useAutoCycle({
    length: HERO_STEP_COUNT,
    intervalMs: HERO_STEP_MS,
    viewportRef: stageRef,
  });
  const step = running ? cycleStep : HERO_FINAL_STEP;

  return (
    <div aria-hidden="true" className={styles.stage} ref={stageRef}>
      <div className={styles.stageGlow} />
      {GHOST_FILES.map(({ name, className }, index) => (
        <span
          className={clsx(
            styles.file,
            className,
            step > index && styles.fileShown,
          )}
          key={name}>
          <span className={styles.fileCheck}>✓</span>
          {name}
        </span>
      ))}
      <img
        alt=""
        className={styles.stageLogo}
        height={132}
        src={logoUrl}
        width={132}
      />
      <div className={styles.terminal}>
        <span className={styles.terminalCommand}>
          <span className={styles.terminalPrompt}>$</span> presetter bootstrap
          <span
            className={clsx(
              styles.terminalCaret,
              step !== 0 && styles.terminalCaretHidden,
            )}
          />
        </span>
        <span
          className={clsx(
            styles.terminalDone,
            step >= HERO_DONE_STEP && styles.terminalDoneShown,
          )}>
          4 files · ghosted by .gitignore
        </span>
      </div>
    </div>
  );
}

/**
 * renders the homepage hero with its headline and the one-source-of-truth illustration
 * @returns the hero section element
 */
export default function HeroSection(): ReactNode {
  return (
    <section className={styles.hero} id={HERO_ID}>
      <div aria-hidden="true" className={styles.backdrop} />
      <div className={styles.grid}>
        <HeroCopy />
        <div className={styles.visual}>
          <div className={styles.glassCard}>
            <div className={styles.darkCard}>
              <div aria-hidden="true" className={styles.darkGrid} />
              <p className={styles.visualLabel}>
                One source of truth for every package
              </p>
              <div className={styles.configPanel}>
                <div className={styles.configHead}>
                  <span className={styles.configFile}>presetter.config.ts</span>
                  <span className={styles.configBadge}>shared baseline</span>
                </div>
                <div className={styles.configCode}>
                  <TokenizedCode source={HERO_CODE} />
                </div>
              </div>
              <HeroStage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
