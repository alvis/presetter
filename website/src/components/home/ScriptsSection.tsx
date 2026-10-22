import Link from '@docusaurus/Link';

import clsx from 'clsx';

import { useState } from 'react';

import ChapterDivider from './ChapterDivider';
import { chapterById } from './chapters';
import styles from './ScriptsSection.module.css';
import {
  LOCAL_TEST_COMMAND,
  LOCAL_TEST_NOTE,
  localTestTree,
  originLabels,
  packageScripts,
  scriptNotes,
  scriptTrees,
} from './scriptTrees';

import section from './section.module.css';

import type { CSSProperties, ReactNode } from 'react';

import type { ScriptOrigin } from './scriptTrees';

const chapter = chapterById.scripts;

const RUN_FACTS = [
  {
    key: 'Local wins',
    text: 'A script you write in package.json beats the preset version of the same name. Add --template to run the preset one anyway.',
  },
  {
    key: 'run "test:*"',
    text: 'Patterns select tasks: * matches one level of subtasks, ** matches any depth.',
  },
  {
    key: 'Preset binaries',
    text: 'Each preset adds its bin path to PATH, so eslint or vitest resolve without being direct dependencies.',
  },
];

/** indentation per tree depth, in pixels */
const TREE_INDENT_PX = 18;

/** stagger between tree nodes as they rise in */
const TREE_STAGGER_MS = 40;

const originClasses: Record<ScriptOrigin, string | undefined> = {
  essentials: styles.originEssentials,
  esm: styles.originEsm,
  local: styles.originLocal,
};

interface PackagePanelProps {
  /** script currently being run */
  readonly runTask: string;
  /** whether test is overridden in package.json */
  readonly localTest: boolean;
  /** selects the script to run */
  readonly onRun: (name: string) => void;
  /** switches the local test override on or off */
  readonly onToggleLocal: () => void;
}

interface RunPanelProps {
  /** script currently being run */
  readonly runTask: string;
  /** whether the local test override replaces the preset tree */
  readonly isLocal: boolean;
}

/**
 * renders the package.json panel whose scripts can be run or overridden locally
 * @param props component props
 * @param props.runTask script currently being run
 * @param props.localTest whether test is overridden in package.json
 * @param props.onRun selects a script to run
 * @param props.onToggleLocal toggles the local test override
 * @returns the package.json panel
 */
function PackagePanel({
  runTask,
  localTest,
  onRun,
  onToggleLocal,
}: PackagePanelProps): ReactNode {
  return (
    <div className={section.darkPanel}>
      <div className={section.panelHead}>
        <span className={section.panelFile}>package.json</span>
        <span className={section.panelMeta}>scripts</span>
      </div>
      <div className={styles.scripts} translate="no">
        <div className={styles.brace}>
          <span className={styles.name}>"scripts"</span>: {'{'}
        </div>
        {packageScripts.map(({ name, command }) => {
          const active = runTask === name;
          const local = localTest && name === 'test';

          return (
            <button
              aria-pressed={active}
              className={clsx(styles.script, active && styles.scriptActive)}
              key={name}
              type="button"
              onClick={() => onRun(name)}>
              <span className={styles.scriptText}>
                <span className={styles.name}>"{name}"</span>
                <span className={styles.colon}>: </span>
                <span className={styles.command}>
                  "{local ? LOCAL_TEST_COMMAND : command}"
                </span>
              </span>
              <span
                className={clsx(
                  styles.scriptTag,
                  local && styles.scriptTagLocal,
                )}>
                {local ? 'local' : active ? '← running' : ''}
              </span>
            </button>
          );
        })}
        <div className={styles.braceEnd}>{'}'}</div>
      </div>
      <div className={styles.panelFoot}>
        <span className={styles.footNote}>
          Need something different? Write it locally.
        </span>
        <button
          aria-pressed={localTest}
          className={clsx(styles.localToggle, localTest && styles.localOn)}
          type="button"
          onClick={onToggleLocal}>
          {localTest ? 'Use the preset test' : 'Override test locally'}
        </button>
      </div>
    </div>
  );
}

/**
 * renders the resolved task tree for the script being run
 * @param props component props
 * @param props.runTask script currently being run
 * @param props.isLocal whether the local test override is in effect
 * @returns the panel listing every resolved task
 */
function RunPanel({ runTask, isLocal }: RunPanelProps): ReactNode {
  const tree = isLocal ? localTestTree : (scriptTrees[runTask] ?? []);
  const note = isLocal ? LOCAL_TEST_NOTE : scriptNotes[runTask];

  return (
    <div className={section.darkPanel}>
      <div aria-live="polite" className={section.panelHead}>
        <span className={styles.runCommand} translate="no">
          <span className={styles.name}>$ </span>npm run {runTask}
        </span>
        <span className={styles.runCount}>
          {isLocal ? 'local script' : `${tree.length} tasks resolved`}
        </span>
      </div>
      <ol
        className={styles.tree}
        key={`${runTask}-${String(isLocal)}`}
        translate="no">
        {tree.map(({ depth, name, command, origin }, index) => {
          const style: CSSProperties = {
            marginLeft: `${depth * TREE_INDENT_PX}px`,
            animationDelay: `${index * TREE_STAGGER_MS}ms`,
          };

          return (
            <li
              className={clsx(styles.task, originClasses[origin])}
              key={`${depth}-${name}`}
              style={style}>
              <span className={styles.name}>{name}</span>
              <span className={styles.origin}>{originLabels[origin]}</span>
              <span className={styles.taskCommand}>{command}</span>
            </li>
          );
        })}
      </ol>
      <p className={styles.note}>{note}</p>
    </div>
  );
}

/**
 * renders chapter 03, an interactive view of how package.json scripts resolve through the preset stack
 * @returns the scripts section element
 */
export default function ScriptsSection(): ReactNode {
  const [runTask, setRunTask] = useState('build');
  const [localTest, setLocalTest] = useState(false);

  const toggleLocal = (): void => {
    setLocalTest((current) => !current);
    setRunTask('test');
  };

  return (
    <section className={section.section} id={chapter.id} tabIndex={-1}>
      <ChapterDivider chapter={chapter} />
      <div className={section.container}>
        <div className={section.head} data-reveal="block">
          <h2 className={section.title}>
            Your package.json scripts come from the preset too.
          </h2>
          <p className={section.lead}>
            Each script becomes a one-liner that calls{' '}
            <code className={section.mono}>run</code>. Presetter looks the task
            up in your preset stack, expands the tasks it calls, and forwards
            anything after <code className={section.mono}>--</code>. Update the
            preset and every repo picks up the new build, test, and release
            steps.
          </p>
        </div>

        <div className={styles.panels} data-reveal="block">
          <PackagePanel
            localTest={localTest}
            runTask={runTask}
            onRun={setRunTask}
            onToggleLocal={toggleLocal}
          />
          <RunPanel
            isLocal={localTest && runTask === 'test'}
            runTask={runTask}
          />
        </div>

        <div className={styles.facts} data-reveal="block">
          {RUN_FACTS.map(({ key, text }) => (
            <div className={clsx(section.card, styles.fact)} key={key}>
              <span className={section.cardKey}>{key}</span>
              <p className={section.cardText}>{text}</p>
            </div>
          ))}
        </div>
        <div className={styles.links} data-reveal="block">
          <Link
            className={section.arrowLink}
            to="/docs/tutorials/custom-presets">
            Read the tutorial <span aria-hidden="true">→</span>
          </Link>
          <Link
            className={section.arrowLink}
            to="/docs/api/type-aliases/Scripts">
            Scripts API reference <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
