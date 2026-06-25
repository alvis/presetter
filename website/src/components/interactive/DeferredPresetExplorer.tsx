/* eslint better-tailwindcss/no-unknown-classes: off, @typescript-eslint/no-magic-numbers: off, react/destructuring-assignment: off, react/sort-comp: off */

import Heading from '@theme/Heading';

import clsx from 'clsx';

import React, {
  Component,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import loadingStyles from './DeferredPresetExplorer.module.css';
import { presetCategoryLabels, presets } from './presetData';
import styles from './PresetExplorer.module.css';

import type { ErrorInfo, ReactNode } from 'react';

const ISSUES_URL = 'https://github.com/alvis/presetter/issues';

type LazyPresetExplorerModule = typeof import('./PresetExplorer');

/**
 * Loads the lazy preset explorer chunk, throwing on failure so the error
 * boundary can render the fallback UI.
 * @returns A dynamic import promise resolving to the explorer module.
 */
async function importPresetExplorer(): Promise<LazyPresetExplorerModule> {
  return import('./PresetExplorer');
}

const LazyPresetExplorer = React.lazy(importPresetExplorer);

/**
 * Renders the static preview shown before the interactive explorer loads.
 * @returns Preset explorer preview shell.
 */
function PresetExplorerPreview(): React.ReactElement {
  const previewPresets = useMemo(() => presets.slice(0, 4), []);

  return (
    <div className={clsx(styles.shell, styles.previewShell)}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Interactive builder</p>
          <Heading as="h3" className={styles.title}>
            Preset Explorer
          </Heading>
          <p className={styles.description}>
            The live configurator loads when this section is near the viewport
            so the page stays responsive during first paint.
          </p>
        </div>
        <div className={styles.selectionBadge}>Preparing live builder</div>
      </div>

      <div aria-hidden="true" className={styles.previewGrid}>
        {previewPresets.map((preset) => (
          <div
            className={clsx(styles.card, styles.previewCard)}
            key={preset.id}>
            <div className={styles.cardTop}>
              <span className={styles.categoryBadge}>
                {presetCategoryLabels[preset.category]}
              </span>
              <span
                className={clsx(
                  styles.complexityBadge,
                  styles[preset.complexity],
                )}>
                {preset.complexity}
              </span>
            </div>

            <div className={styles.cardTitleRow}>
              <h4 className={styles.cardTitle}>{preset.name}</h4>
              <span className={styles.sizeBadge}>{preset.size}</span>
            </div>

            <p className={styles.cardDescription}>{preset.description}</p>

            <div className={styles.featureList}>
              {preset.features.slice(0, 3).map((feature) => (
                <span className={styles.featureChip} key={feature}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.previewOutput}>
        <p className={styles.previewNoteTitle}>What the live explorer adds</p>
        <ul className={styles.noteList}>
          <li>Dependency-safe preset selection with automatic requirements.</li>
          <li>
            Generated install commands and starter config in sync with your
            stack.
          </li>
          <li>
            Category filters derived from the preset data so no view can go
            stale.
          </li>
        </ul>
      </div>
    </div>
  );
}

/**
 * Renders the loading skeleton while the explorer chunk is pending.
 * @returns Accessible loading placeholder.
 */
function PresetExplorerLoadingSkeleton(): React.ReactElement {
  const skeletonCards = [0, 1, 2, 3];
  const skeletonLines = [0, 1, 2];

  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className={loadingStyles.loadingShell}
      role="status">
      <span className={loadingStyles.srOnly}>Loading preset explorer…</span>
      <div aria-hidden="true" className={loadingStyles.skeletonHeader}>
        <div
          className={clsx(
            loadingStyles.skeletonLine,
            loadingStyles.skeletonTitle,
          )}
        />
        <div
          className={clsx(
            loadingStyles.skeletonLine,
            loadingStyles.skeletonSubtitle,
          )}
        />
      </div>
      <div aria-hidden="true" className={loadingStyles.skeletonGrid}>
        {skeletonCards.map((index) => (
          <div className={loadingStyles.skeletonCard} key={index}>
            {skeletonLines.map((lineIndex) => (
              <div className={loadingStyles.skeletonBlock} key={lineIndex} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface PresetExplorerErrorStateProps {
  onRetry: () => void;
}

/**
 * Renders the error fallback shown when the deferred chunk or preset data fail
 * to load — problem + cause + solution structure per DES-COPY-02.
 * @param props Component props.
 * @param props.onRetry Handler that triggers a fresh import attempt.
 * @returns Error card with retry action and issue-tracker link.
 */
function PresetExplorerErrorState({
  onRetry,
}: PresetExplorerErrorStateProps): React.ReactElement {
  return (
    <div
      aria-live="assertive"
      className={loadingStyles.errorShell}
      role="alert">
      <span aria-hidden="true" className={loadingStyles.errorIcon}>
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      </span>
      <Heading as="h3" className={loadingStyles.errorTitle}>
        Couldn&apos;t load the preset explorer.
      </Heading>
      <p className={loadingStyles.errorBody}>
        A network hiccup or blocked script stopped the interactive builder from
        loading. Retrying usually works — if it keeps failing, please open an
        issue so we can fix it.
      </p>
      <div className={loadingStyles.errorActions}>
        <button
          className={clsx(
            'button button--primary',
            loadingStyles.errorPrimaryAction,
          )}
          type="button"
          onClick={onRetry}>
          Retry
        </button>
        <a
          className={clsx(
            'button button--secondary',
            loadingStyles.errorSecondaryAction,
          )}
          href={ISSUES_URL}
          rel="noreferrer noopener"
          target="_blank">
          Report on GitHub
        </a>
      </div>
    </div>
  );
}

interface PresetExplorerErrorBoundaryProps {
  children: ReactNode;
  onRetry: () => void;
  resetKey: number;
}

interface PresetExplorerErrorBoundaryState {
  hasError: boolean;
}

/**
 * Catches render-time errors from the lazy explorer (including dynamic import
 * rejections re-thrown by React.Suspense) and surfaces the recoverable error
 * state.
 */
class PresetExplorerErrorBoundary extends Component<
  PresetExplorerErrorBoundaryProps,
  PresetExplorerErrorBoundaryState
> {
  public state: PresetExplorerErrorBoundaryState = { hasError: false };

  /**
   * Marks the boundary as failed after a child render error.
   * @returns Updated error boundary state.
   */
  public static getDerivedStateFromError(): PresetExplorerErrorBoundaryState {
    return { hasError: true };
  }

  /**
   * Resets the error boundary when the retry key changes.
   * @param previousProps Props from the previous render.
   */
  public componentDidUpdate(
    previousProps: PresetExplorerErrorBoundaryProps,
  ): void {
    if (previousProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  /**
   * Reports recoverable explorer render failures to browser devtools.
   * @param error Error thrown while rendering the explorer tree.
   * @param info React component stack for the render failure.
   */
  public componentDidCatch(error: Error, info: ErrorInfo): void {
    // surface render failures to browser devtools without crashing the page
    console.error('PresetExplorer failed to load', error, info);
  }

  /**
   * Renders children or the retry fallback after a captured error.
   * @returns Explorer boundary content.
   */
  public render(): ReactNode {
    if (this.state.hasError) {
      return <PresetExplorerErrorState onRetry={this.props.onRetry} />;
    }

    return this.props.children;
  }
}

export default function DeferredPresetExplorer(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);

      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '360px 0px' },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleRetry = useCallback(() => {
    setRetryKey((previous) => previous + 1);
  }, []);

  return (
    <div ref={containerRef}>
      <PresetExplorerErrorBoundary resetKey={retryKey} onRetry={handleRetry}>
        <Suspense fallback={<PresetExplorerLoadingSkeleton />}>
          {shouldLoad ? (
            <LazyPresetExplorer key={retryKey} />
          ) : (
            <PresetExplorerPreview />
          )}
        </Suspense>
      </PresetExplorerErrorBoundary>
    </div>
  );
}
