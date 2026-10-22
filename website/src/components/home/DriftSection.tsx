import useIsBrowser from '@docusaurus/useIsBrowser';

import clsx from 'clsx';

import { useEffect, useRef, useState } from 'react';

import ChapterDivider from './ChapterDivider';
import { chapterById } from './chapters';
import styles from './DriftSection.module.css';
import { useAutoCycle } from './hooks';

import section from './section.module.css';

import type { CSSProperties, ReactNode } from 'react';

const chapter = chapterById.drift;

/** time between automatic switches of the comparison */
const DRIFT_TOGGLE_MS = 4200;

/** wiggle duration of the first copied row, in seconds */
const WIGGLE_BASE_S = 2.6;

/** extra wiggle duration for each following row, in seconds, so rows drift out of step */
const WIGGLE_STEP_S = 0.45;

/** comparison views, in toggle order */
const BEFORE_VIEW = 0;
const AFTER_VIEW = 1;

const BEFORE_ROWS = [
  { path: 'apps/web/eslint.config.ts', note: 'React-specific edits' },
  {
    path: 'apps/api/eslint.config.ts',
    note: 'Similar, but not quite the same',
  },
  { path: 'packages/ui/vitest.config.ts', note: 'Local test tweaks' },
  {
    path: 'packages/core/tsconfig.json',
    note: 'Shared intent copied by hand',
  },
  { path: 'packages/runtime/package.json', note: 'Scripts slowly drift' },
];

const AFTER_ROWS = [
  { path: 'presetter.config.ts', note: 'Compose the maintained baseline' },
  { path: 'package.json', note: 'Scripts merge with preset scripts' },
  { path: 'generated config files', note: 'Output files can stay out of Git' },
];

const EXPLAINER_VIDEO = {
  src: 'https://github.com/user-attachments/assets/67375ea6-baa6-4363-803c-e2757ae02766',
  poster:
    'https://github.com/user-attachments/assets/d7942d49-9236-40b6-9c61-e9aea6df145a',
};

/**
 * computes the wiggle duration of a copied-config row, so rows drift out of step
 * @param index row position
 * @returns inline style with the animation duration
 */
function wiggleStyle(index: number): CSSProperties {
  return {
    animationDuration: `${(WIGGLE_BASE_S + index * WIGGLE_STEP_S).toFixed(2)}s`,
  };
}

/**
 * renders the copied-configs versus Presetter comparison card
 * @returns the comparison card element
 */
function DriftComparison(): ReactNode {
  const cardRef = useRef<HTMLDivElement>(null);
  const [view, select, running] = useAutoCycle({
    length: 2,
    intervalMs: DRIFT_TOGGLE_MS,
    viewportRef: cardRef,
  });
  const before = view === BEFORE_VIEW;

  return (
    <div className={styles.compare} data-reveal="block" ref={cardRef}>
      <div className={styles.compareHead}>
        <div
          aria-label="Compare setups"
          className={styles.segmented}
          role="group">
          <button
            aria-pressed={before}
            className={clsx(styles.tab, before && styles.tabActive)}
            type="button"
            onClick={() => select(BEFORE_VIEW)}>
            Copied configs
          </button>
          <button
            aria-pressed={!before}
            className={clsx(styles.tab, !before && styles.tabActive)}
            type="button"
            onClick={() => select(AFTER_VIEW)}>
            With Presetter
          </button>
        </div>
        {/* NOTE: only announce the caption once the user drives the toggle, not on every automatic switch */}
        <span aria-live={running ? 'off' : 'polite'} className={styles.caption}>
          {before
            ? 'Five copies of shared intent, each drifting a little.'
            : 'One explicit preset stack plus generated outputs.'}
        </span>
      </div>
      <div className={styles.compareBody}>
        <div
          aria-hidden={!before}
          className={clsx(
            styles.panel,
            styles.panelBefore,
            !before && styles.panelHidden,
          )}
          inert={!before}>
          <div className={styles.workspace}>workspace/</div>
          {BEFORE_ROWS.map(({ path, note }, index) => (
            <div
              className={clsx(styles.row, styles.rowCopied)}
              key={path}
              style={wiggleStyle(index)}>
              <span className={styles.rowPath}>{path}</span>
              <span className={clsx(styles.rowNote, styles.rowNoteWarn)}>
                <span aria-hidden="true">← </span>
                {note}
              </span>
            </div>
          ))}
        </div>
        <div
          aria-hidden={before}
          className={clsx(
            styles.panel,
            styles.panelAfter,
            before && styles.panelHidden,
          )}
          inert={before}>
          <div className={styles.workspace}>workspace/</div>
          {AFTER_ROWS.map(({ path, note }, index) => (
            <div
              className={clsx(
                styles.row,
                styles.rowManaged,
                index === 0 && styles.rowHighlight,
              )}
              key={path}>
              <span className={styles.rowPath}>
                <span className={styles.rowCheck}>✓</span>
                {path}
              </span>
              <span className={styles.rowNote}>
                <span aria-hidden="true">← </span>
                {note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * shows the explainer poster with a play button, switching to native controls once playback starts
 * @returns the explainer video frame
 */
function ExplainerVideo(): ReactNode {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isBrowser = useIsBrowser();
  const [started, setStarted] = useState(false);
  // NOTE: native controls stay off until playback so the poster's caption is not covered by the control bar,
  // but the server-rendered markup keeps them so the video still plays without javascript
  const showPlayButton = isBrowser && !started;

  // the play button unmounts on play, so focus moves to the video once its native controls render
  useEffect(() => {
    if (started) {
      videoRef.current?.focus();
    }
  }, [started]);

  const play = (): void => {
    setStarted(true);
    void videoRef.current?.play();
  };

  return (
    <div className={styles.videoFrame}>
      <video
        className={styles.video}
        controls={!showPlayButton}
        height={720}
        playsInline
        poster={EXPLAINER_VIDEO.poster}
        preload="none"
        ref={videoRef}
        src={EXPLAINER_VIDEO.src}
        title="Presetter explainer: follow one config from start to finish"
        width={1280}>
        <a href={EXPLAINER_VIDEO.src}>Watch the Presetter explainer</a>
      </video>
      {showPlayButton ? (
        <button
          aria-label="Play the 90-second explainer"
          className={styles.play}
          type="button"
          onClick={play}>
          <span aria-hidden="true" className={styles.playIcon} />
        </button>
      ) : null}
    </div>
  );
}

/**
 * renders chapter 01, the config-drift problem and the explainer video
 * @returns the drift section element
 */
export default function DriftSection(): ReactNode {
  return (
    <section
      className={clsx(section.section, styles.drift)}
      id={chapter.id}
      tabIndex={-1}>
      <ChapterDivider chapter={chapter} />
      <div className={section.container}>
        <div className={section.head} data-reveal="block">
          <h2 className={section.title}>
            Still copying configs between projects?
          </h2>
          <p className={section.lead}>
            Every repo starts clean. Then the same{' '}
            <code className={section.mono}>eslint</code>,{' '}
            <code className={section.mono}>vitest</code>,{' '}
            <code className={section.mono}>typescript</code>, build, and
            lifecycle settings fork in small ways across apps, packages,
            services, and CLIs.
          </p>
        </div>

        <DriftComparison />

        <div className={styles.explainer} data-reveal="block">
          <div>
            <p className={section.eyebrow}>90-second explainer</p>
            <h3 className={styles.explainerTitle}>
              Follow one config from start to finish.
            </h3>
            <p className={styles.explainerText}>
              Compose presets in one small file, generate the configs your tools
              expect, override a value in plain sight, and update by bumping the
              preset and running bootstrap again.
            </p>
          </div>
          <ExplainerVideo />
        </div>
      </div>
    </section>
  );
}
