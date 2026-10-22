import Link from '@docusaurus/Link';

import clsx from 'clsx';

import { useState } from 'react';

import ChapterDivider from './ChapterDivider';
import { chapterById } from './chapters';
import CopyButton from './CopyButton';
import styles from './ExploreSection.module.css';
import { presetGroups, presets } from './presetData';
import section from './section.module.css';
import SectionLink from './SectionLink';
import TokenizedCode from './TokenizedCode';

import type { ReactNode } from 'react';

import type { Preset } from './presetData';

const chapter = chapterById.explore;

/** presets selected when the page loads */
const DEFAULT_SELECTION: readonly Preset[] = presets.filter(({ id }) =>
  ['esm', 'strict'].includes(id),
);

const PROOF_POINTS = [
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

/** stagger between the proof cards as they reveal */
const PROOF_REVEAL_STAGGER_MS = 100;

/**
 * builds the install command for the selected presets
 * @param selection selected presets in click order
 * @returns the npm install command
 */
function buildCommand(selection: readonly Preset[]): string {
  return [
    'npm install --save-dev presetter',
    ...selection.map(({ packageName }) => packageName),
  ].join(' ');
}

/**
 * builds a starter presetter.config.ts for the selected presets
 * @param selection selected presets in click order
 * @returns the config source
 */
function buildConfig(selection: readonly Preset[]): string {
  if (selection.length === 0) {
    return '// pick at least one preset';
  }

  return [
    "import { preset } from 'presetter';",
    ...selection.map(
      ({ id, packageName }) => `import ${id} from '${packageName}';`,
    ),
    '',
    "export default preset('my-project', {",
    `  extends: [${selection.map(({ id }) => id).join(', ')}],`,
    '});',
  ].join('\n');
}

interface PresetPickerProps {
  /** selected presets in click order */
  readonly selection: readonly Preset[];
  /** adds a preset to the selection, or removes it when already selected */
  readonly onToggle: (preset: Preset) => void;
}

/**
 * renders the preset picker grouped by role
 * @param props component props
 * @param props.selection selected presets in click order
 * @param props.onToggle toggles a preset in or out of the selection
 * @returns the picker element
 */
function PresetPicker({ selection, onToggle }: PresetPickerProps): ReactNode {
  return (
    <div className={styles.groups}>
      {presetGroups.map((group) => (
        <div
          aria-labelledby={`preset-group-${group.id}`}
          key={group.id}
          role="group">
          <h3 className={styles.groupTitle} id={`preset-group-${group.id}`}>
            {group.label}
          </h3>
          <div className={styles.items}>
            {presets
              .filter((preset) => preset.group === group.id)
              .map((preset) => {
                const selected = selection.includes(preset);

                return (
                  <button
                    aria-pressed={selected}
                    className={clsx(styles.item, selected && styles.itemOn)}
                    key={preset.id}
                    type="button"
                    onClick={() => onToggle(preset)}>
                    <span aria-hidden="true" className={styles.check}>
                      {selected ? '✓' : ''}
                    </span>
                    <span className={styles.itemId}>{preset.id}</span>
                    <span className={styles.itemSummary}>{preset.summary}</span>
                  </button>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * renders chapter 05, the preset picker with its live install command and config
 * @returns the explore section element
 */
export default function ExploreSection(): ReactNode {
  const [selection, setSelection] =
    useState<readonly Preset[]>(DEFAULT_SELECTION);
  const command = buildCommand(selection);
  const config = buildConfig(selection);

  const toggle = (preset: Preset): void => {
    setSelection((current) =>
      current.includes(preset)
        ? current.filter((selected) => selected !== preset)
        : [...current, preset],
    );
  };

  return (
    <section
      className={clsx(section.section, styles.explore)}
      id={chapter.id}
      tabIndex={-1}>
      <ChapterDivider chapter={chapter} />
      <div className={section.container}>
        <div className={section.head} data-reveal="block">
          <h2 className={section.title}>
            Assemble the preset stack that matches your project.
          </h2>
          <p className={section.lead}>
            Pick the presets you want to start from. The install command and
            config update as you go. When the stack settles, it is a good first
            draft of your own preset.
          </p>
        </div>

        <div className={styles.layout} data-reveal="block">
          <PresetPicker selection={selection} onToggle={toggle} />
          <div className={styles.output}>
            <div className={section.darkPanel}>
              <div className={section.panelHead}>
                <span className={section.panelFile}>terminal</span>
                <CopyButton
                  className={styles.copy}
                  label="Copy stack install command"
                  text={command}
                />
              </div>
              <div className={styles.command} translate="no">
                <span className={styles.prompt}>$ </span>
                {command}
              </div>
            </div>
            <div className={section.darkPanel}>
              <div className={section.panelHead}>
                <span className={section.panelFile}>presetter.config.ts</span>
                <CopyButton
                  className={styles.copy}
                  label="Copy presetter.config.ts"
                  text={config}
                />
              </div>
              <div className={styles.config}>
                <TokenizedCode source={config} />
              </div>
            </div>
            <SectionLink
              className={styles.toYours}
              targetId={chapterById.yours.id}>
              Turn this stack into your own preset{' '}
              <span aria-hidden="true">→</span>
            </SectionLink>
          </div>
        </div>

        <div className={styles.proofs}>
          {PROOF_POINTS.map(({ label, value, hint, href }, index) => (
            <Link
              className={styles.proof}
              data-reveal="block"
              data-reveal-delay={index * PROOF_REVEAL_STAGGER_MS}
              key={label}
              to={href}>
              <span className={styles.proofLabel}>{label}</span>
              <span className={styles.proofValue}>{value}</span>
              <span className={styles.proofHint}>
                {hint} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
