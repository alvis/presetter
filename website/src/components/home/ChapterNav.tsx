import clsx from 'clsx';

import { useRef } from 'react';

import styles from './ChapterNav.module.css';
import { chapterIds, chapters, HERO_ID } from './chapters';
import { useChapterTracking } from './hooks';
import SectionLink from './SectionLink';

import type { ReactNode } from 'react';

/**
 * renders the homepage chapter strip, scroll progress bar and right-hand chapter rail
 * @returns the chapter navigation elements
 */
export default function ChapterNav(): ReactNode {
  const progressRef = useRef<HTMLSpanElement>(null);
  const { active, pastHero } = useChapterTracking(
    chapterIds,
    HERO_ID,
    progressRef,
  );

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.shell}>
          <nav
            aria-hidden={!pastHero}
            aria-label="On this page"
            className={clsx(styles.strip, pastHero && styles.stripOpen)}
            data-home-strip={pastHero ? 'open' : 'closed'}
            inert={!pastHero}>
            <div className={styles.stripInner}>
              <span className={styles.stripLabel}>On this page</span>
              {chapters.map(({ id, number, label }, index) => (
                <SectionLink
                  aria-current={active === index ? 'location' : undefined}
                  className={clsx(
                    styles.pill,
                    active === index && styles.pillActive,
                  )}
                  key={id}
                  targetId={id}>
                  <span className={styles.pillNumber}>{number}</span>
                  {label}
                </SectionLink>
              ))}
            </div>
          </nav>
          <span aria-hidden="true" className={styles.hairline} />
          <span
            aria-hidden="true"
            className={styles.progress}
            ref={progressRef}
          />
        </div>
      </div>
      <nav
        aria-hidden={!pastHero}
        aria-label="Chapters"
        className={clsx(styles.rail, pastHero && styles.railOpen)}
        inert={!pastHero}>
        {chapters.map(({ id, label }, index) => (
          <SectionLink
            aria-current={active === index ? 'location' : undefined}
            className={clsx(
              styles.railItem,
              active === index && styles.railItemActive,
            )}
            key={id}
            targetId={id}
            title={label}>
            <span className={styles.railLabel}>{label}</span>
            <span aria-hidden="true" className={styles.railDot} />
          </SectionLink>
        ))}
      </nav>
    </>
  );
}
