import clsx from 'clsx';

import styles from './ChapterDivider.module.css';
import section from './section.module.css';

import type { ReactNode } from 'react';

import type { Chapter } from './chapters';

export interface ChapterDividerProps {
  /** chapter whose number and eyebrow are shown; its id selects the wave shape, gradient and ring angle */
  readonly chapter: Chapter;
}

/**
 * renders the numbered chapter divider with its drifting wave and spinning ring
 * @param props component props
 * @param props.chapter chapter whose number and eyebrow are shown
 * @returns the divider element
 */
export default function ChapterDivider({
  chapter,
}: ChapterDividerProps): ReactNode {
  return (
    <div className={clsx(styles.divider, styles[chapter.id])}>
      <div aria-hidden="true" className={styles.wave} />
      <div className={styles.rule}>
        <div className={clsx(section.container, styles.ruleGrid)}>
          <span
            aria-hidden="true"
            className={styles.lineStart}
            data-reveal="line"
          />
          <p className={styles.badgeRow} data-reveal="block">
            <span aria-hidden="true" className={styles.badge}>
              <span className={styles.ring} />
              <span className={styles.number}>{chapter.number}</span>
            </span>
            <span className={styles.label}>{chapter.eyebrow}</span>
          </p>
          <span
            aria-hidden="true"
            className={styles.lineEnd}
            data-reveal="line"
          />
        </div>
      </div>
    </div>
  );
}
