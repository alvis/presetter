import useBaseUrl from '@docusaurus/useBaseUrl';

import clsx from 'clsx';

import ChapterDivider from './ChapterDivider';
import { chapterById } from './chapters';
import styles from './OpinionsSection.module.css';
import section from './section.module.css';
import SectionLink from './SectionLink';
import TokenizedCode from './TokenizedCode';

import type { ReactNode } from 'react';

const chapter = chapterById.opinions;

const OPINIONS = [
  {
    pkg: 'preset-essentials',
    text: 'TypeScript, ESLint, Vitest, Prettier and Husky, all switched on.',
    tag: 'Foundation',
  },
  {
    pkg: 'preset-esm',
    text: 'ESM-first. Modern Node.js projects and libraries.',
    tag: 'Module system',
  },
  {
    pkg: 'preset-strict',
    text: 'Security rules and a 100% coverage gate.',
    tag: 'Quality',
  },
  {
    pkg: 'preset-web',
    text: 'Browser globals and Tailwind linting.',
    tag: 'Extension',
  },
  { pkg: 'preset-react', text: 'React and TSX tooling.', tag: 'Extension' },
  {
    pkg: 'preset-next',
    text: 'esm + node + strict + web + react, composed for the App Router.',
    tag: 'Framework',
  },
];

const PATHS = [
  {
    letter: 'A',
    title: 'Use as-is',
    text: 'My defaults suit you. One line and you are done.',
    code: `// presetter.config.ts
export { default } from
  '@presetter/preset-esm';`,
    featured: false,
  },
  {
    letter: 'B',
    title: 'Override what differs',
    text: 'Keep the baseline, change the few values you disagree with, in plain sight.',
    code: `export default preset('my-project', {
  extends: [esm],
  override: {
    variables: { source: 'source' },
    assets: { '.gitignore': null },
  },
});`,
    featured: false,
  },
  {
    letter: 'C',
    title: 'Write your own preset',
    text: 'Encode your team’s opinions once and share them across every repo you own.',
    code: `export default preset('@acme/preset', {
  extends: [esm],
  scripts: { test: 'vitest' },
});`,
    featured: true,
  },
];

/** stagger between the path cards as they reveal */
const PATH_REVEAL_STAGGER_MS = 120;

/**
 * renders chapter 02, the official presets' opinions and the three ways to adopt them
 * @returns the opinions section element
 */
export default function OpinionsSection(): ReactNode {
  const logoUrl = useBaseUrl('/images/logo.svg');

  return (
    <section
      className={clsx(section.section, styles.opinions)}
      id={chapter.id}
      tabIndex={-1}>
      <div aria-hidden="true" className={styles.glow} />
      <ChapterDivider chapter={chapter} />
      <div className={section.container}>
        <div className={section.head} data-reveal="block">
          <h2 className={section.title}>
            The official presets are opinionated. On purpose.
          </h2>
          <div className={styles.headAside}>
            <p className={section.lead}>
              They encode how I build TypeScript projects: ESM first, strict
              linting, full coverage gates, Husky hooks. That fits my work. It
              may not fit yours, and Presetter is built for that.
            </p>
            <p className={styles.byline}>
              <img
                alt=""
                className={styles.bylineAvatar}
                height={26}
                src={logoUrl}
                width={26}
              />
              Alvis Tang, maintainer
            </p>
          </div>
        </div>

        <ul className={styles.opinionGrid} data-reveal="block">
          {OPINIONS.map(({ pkg, text, tag }) => (
            <li className={clsx(section.card, styles.opinion)} key={pkg}>
              <span className={section.cardKey}>{pkg}</span>
              <span className={styles.opinionText}>{text}</span>
              <span className={styles.tag}>{tag}</span>
            </li>
          ))}
        </ul>

        <div className={styles.pathsHead} data-reveal="block">
          <h3 className={styles.pathsTitle}>Agree, adjust, or replace them.</h3>
          <span className={styles.pathsNote}>
            Three ways to start. All of them are a single file.
          </span>
        </div>
        <div className={styles.pathGrid}>
          {PATHS.map(({ letter, title, text, code, featured }, index) => (
            <article
              className={clsx(styles.path, featured && styles.pathFeatured)}
              data-reveal="block"
              data-reveal-delay={index * PATH_REVEAL_STAGGER_MS}
              key={letter}>
              <div className={styles.pathTop}>
                <span className={styles.pathLetter}>{letter}</span>
                {featured ? (
                  <span className={styles.pathBadge}>Make it yours</span>
                ) : null}
              </div>
              <div>
                <h4 className={styles.pathTitle}>{title}</h4>
                <p className={styles.pathText}>{text}</p>
              </div>
              <div className={styles.pathCode}>
                <TokenizedCode source={code} />
              </div>
              {featured ? (
                <SectionLink
                  className={styles.pathAction}
                  targetId={chapterById.yours.id}>
                  See how easy it is <span aria-hidden="true">→</span>
                </SectionLink>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
