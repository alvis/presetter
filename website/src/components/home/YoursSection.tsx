import Link from '@docusaurus/Link';

import clsx from 'clsx';

import { useRef } from 'react';

import { chapterById } from './chapters';
import { useAutoCycle } from './hooks';
import section from './section.module.css';
import TokenizedCode from './TokenizedCode';
import styles from './YoursSection.module.css';

import type { CSSProperties, ReactNode } from 'react';

const chapter = chapterById.yours;

const WRITE_CODE = `import { preset } from 'presetter';
import esm from '@presetter/preset-esm';

// your team's opinions, versioned in one place
export default preset('@acme/preset', {
  extends: [esm],
  variables: { source: 'src', output: 'dist' },
  setup: { scripts: { build: 'run build', test: 'run test --' } },
  assets: {
    'tsconfig.json': {
      compilerOptions: { target: 'ES2024' },
    },
  },
});`;

const PUBLISH_CODE = `$ npm version minor
v1.1.0
$ npm publish --access public
+ @acme/preset@1.1.0`;

const USE_CODE = `$ npx presetter use @acme/preset

// installs the preset and declared setup,
// writes presetter.config.ts, then bootstraps

// after updating your preset version:
$ npx presetter bootstrap`;

/** what the code window shows below the code for a step */
type StepExtra = 'anatomy' | 'repos' | 'none';

/** one stage of writing, publishing and adopting a preset */
interface Step {
  /** step heading */
  title: string;
  /** short explanation under the heading */
  text: string;
  /** file name shown in the code window header */
  file: string;
  /** label shown at the right of the code window header */
  meta: string;
  /** code shown in the window */
  code: string;
  /** panel shown below the code */
  extra: StepExtra;
}

const STEPS: readonly Step[] = [
  {
    title: 'Write it',
    text: 'Call preset() in a TypeScript file. Extend an official preset, or start from nothing.',
    file: 'src/index.ts',
    meta: `${WRITE_CODE.split('\n').length} lines`,
    code: WRITE_CODE,
    extra: 'anatomy',
  },
  {
    title: 'Publish it',
    text: 'It is an ordinary npm package. Version and release it like any other.',
    file: 'terminal',
    meta: 'npm',
    code: PUBLISH_CODE,
    extra: 'none',
  },
  {
    title: 'Extend it everywhere',
    text: 'Each repo points at your preset. Bump the version, run bootstrap, and every repo moves together.',
    file: 'any repo',
    meta: 'use → bootstrap',
    code: USE_CODE,
    extra: 'repos',
  },
];

const ANATOMY = [
  { key: 'extends', text: 'Start from official presets, or none at all.' },
  { key: 'variables', text: 'Directories and targets your templates read.' },
  { key: 'setup', text: 'Packages and script delegates added by use.' },
  { key: 'assets', text: 'The config files Presetter generates.' },
];

const REPOS = ['apps/web', 'apps/api', 'packages/ui', 'tools/cli'];

/** time each step stays selected while the steps advance on their own */
const STEP_ADVANCE_MS = 7000;

/** stagger between code lines as they rise in */
const CODE_LINE_STAGGER_MS = 45;

/** delay before the first anatomy cell rises in */
const ANATOMY_DELAY_MS = 300;

/** stagger between anatomy cells */
const ANATOMY_STAGGER_MS = 90;

/** stagger between repo sync animations, in seconds */
const REPO_STAGGER_S = 0.35;

/**
 * renders the anatomy grid explaining each field of a preset
 * @returns the anatomy list
 */
function Anatomy(): ReactNode {
  return (
    <dl className={styles.anatomy}>
      {ANATOMY.map(({ key, text }, index) => (
        <div
          className={styles.anatomyCell}
          key={key}
          style={{
            animationDelay: `${ANATOMY_DELAY_MS + index * ANATOMY_STAGGER_MS}ms`,
          }}>
          <dt className={styles.anatomyKey}>{key}</dt>
          <dd className={styles.anatomyText}>{text}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * renders the repos picking up a new preset version one after another
 * @returns the repo sync list
 */
function RepoSync(): ReactNode {
  return (
    <div className={styles.repos}>
      <p className={styles.reposTitle}>
        Bump @acme/preset → every repo follows
      </p>
      {REPOS.map((name, index) => {
        const delay: CSSProperties = {
          animationDelay: `${index * REPO_STAGGER_S}s`,
        };

        return (
          <div className={styles.repo} key={name} style={delay}>
            <span className={styles.repoName}>{name}</span>
            <span className={styles.repoVersion}>
              <span className={styles.repoOld} style={delay}>
                @acme/preset 1.0.0
              </span>
              <span className={styles.repoNew} style={delay}>
                1.1.0 ✓ bootstrapped
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * renders the code window for the selected step
 * @param props component props
 * @param props.step the selected step
 * @returns the code window element
 */
function StepWindow({ step }: { readonly step: Step }): ReactNode {
  return (
    <div className={styles.window}>
      <div className={styles.windowHead}>
        <span aria-hidden="true" className={styles.dots}>
          <span />
          <span />
          <span />
        </span>
        <span className={styles.windowFile}>{step.file}</span>
        <span className={styles.windowMeta}>{step.meta}</span>
      </div>
      <div className={styles.windowCode}>
        <TokenizedCode
          lineStaggerMs={CODE_LINE_STAGGER_MS}
          source={step.code}
        />
      </div>
      {step.extra === 'anatomy' ? <Anatomy /> : null}
      {step.extra === 'repos' ? <RepoSync /> : null}
    </div>
  );
}

/**
 * renders chapter 04, the band showing how to write, publish and extend your own preset
 * @returns the band section element
 */
export default function YoursSection(): ReactNode {
  const layoutRef = useRef<HTMLDivElement>(null);
  const [active, select, running] = useAutoCycle({
    length: STEPS.length,
    intervalMs: STEP_ADVANCE_MS,
    viewportRef: layoutRef,
  });

  return (
    <section className={styles.yours} id={chapter.id} tabIndex={-1}>
      <div className={styles.band}>
        <div aria-hidden="true" className={styles.bandGrid} />
        <div className={clsx(section.container, styles.bandInner)}>
          <div className={styles.kicker} data-reveal="block">
            <span className={styles.kickerNumber}>{chapter.number}</span>
            <span
              aria-hidden="true"
              className={styles.kickerLine}
              data-reveal="line"
            />
            <span className={styles.kickerLabel}>{chapter.eyebrow}</span>
          </div>

          <div className={clsx(section.head, styles.head)} data-reveal="block">
            <h2 className={styles.title}>
              Creating a preset is <span className={styles.easy}>easy.</span>{' '}
              It's one TypeScript file.
            </h2>
            <p className={styles.lead}>
              A preset is the same <code className={styles.code}>preset()</code>{' '}
              call you already write in{' '}
              <code className={styles.code}>presetter.config.ts</code>,
              published as a package. Extend an official preset or start from
              nothing, add your opinions, and every repo that extends it stays
              in step.
            </p>
          </div>

          <div className={styles.layout} data-reveal="block" ref={layoutRef}>
            <div className={styles.steps}>
              {STEPS.map(({ title, text }, index) => {
                const selected = active === index;

                return (
                  <button
                    aria-pressed={selected}
                    className={clsx(styles.step, selected && styles.stepActive)}
                    key={title}
                    type="button"
                    onClick={() => select(index)}>
                    <span className={styles.stepNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.stepTitle}>{title}</span>
                    <span className={styles.stepText}>{text}</span>
                    {selected ? (
                      <span
                        aria-hidden="true"
                        className={clsx(
                          styles.stepBar,
                          running && styles.stepBarFilling,
                        )}
                        key={`${title}-${String(running)}`}
                      />
                    ) : null}
                  </button>
                );
              })}
              <Link
                className={styles.tutorialLink}
                to="/docs/tutorials/custom-presets">
                Read the custom preset tutorial{' '}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            {STEPS.map((step, index) =>
              index === active ? (
                <StepWindow key={step.title} step={step} />
              ) : null,
            )}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={styles.bandEdge} />
    </section>
  );
}
