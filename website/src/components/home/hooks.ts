import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';

import type { RefObject } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/** viewport fraction a chapter top must pass to become the active chapter */
const ACTIVE_CHAPTER_LINE = 0.45;

/** hero bottom position, in pixels, below which the chapter navigation appears */
const PAST_HERO_LINE = 140;

/** fraction of the viewport an element must enter before it starts hidden */
const REVEAL_START_LINE = 0.92;

/** fraction of the viewport at which a safety sweep reveals pending elements */
const REVEAL_SWEEP_LINE = 0.95;

/** time for the longest reveal transition to finish before the element's own transitions return */
const REVEAL_SETTLE_MS = 1400;

/** delay before reveal targets are measured, letting layout settle after hydration */
const REVEAL_SETUP_DELAY_MS = 60;

/** time between the safety sweeps that run right after setup */
const REVEAL_SWEEP_INTERVAL_MS = 500;

/** number of safety sweeps that run right after setup */
const REVEAL_SWEEP_TICKS = 12;

/** delay of the one-off safety sweep that catches late layout shifts */
const REVEAL_SAFETY_SWEEP_MS = 1500;

/** delay of the sweep that runs once web fonts have loaded and reflowed the page */
const REVEAL_FONT_SWEEP_DELAY_MS = 50;

/** how long a copy result stays on its button before the label resets */
const COPY_RESET_MS = 1600;

/**
 * subscribes to changes of the reduced-motion preference
 * @param onChange callback fired when the preference changes
 * @returns an unsubscribe function
 */
function subscribeReducedMotion(onChange: () => void): () => void {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener('change', onChange);

  return () => query.removeEventListener('change', onChange);
}

/**
 * reads the reduced-motion preference in the browser
 * @returns true when the user prefers reduced motion
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * subscribes to page visibility changes, such as switching browser tabs
 * @param onChange callback fired when the visibility changes
 * @returns an unsubscribe function
 */
function subscribePageVisibility(onChange: () => void): () => void {
  document.addEventListener('visibilitychange', onChange);

  return () => document.removeEventListener('visibilitychange', onChange);
}

/**
 * reads whether the page is currently visible
 * @returns true when the document is visible
 */
function isPageVisible(): boolean {
  return document.visibilityState === 'visible';
}

/**
 * reports a fixed value during server rendering
 * @returns always false
 */
function getServerFalse(): boolean {
  return false;
}

/**
 * reports a fixed value during server rendering
 * @returns always true
 */
function getServerTrue(): boolean {
  return true;
}

/**
 * tracks the user's reduced-motion preference
 * @returns true when the user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    prefersReducedMotion,
    getServerFalse,
  );
}

/**
 * tracks whether an element is within the viewport
 * @param ref the element to watch; without one it always counts as in view
 * @returns true while the element intersects the viewport
 */
function useInView(ref: RefObject<Element | null> | undefined): boolean {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const element = ref?.current;

    if (!element || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setInView(entry.isIntersecting);
      }
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

/**
 * scrolls a section into view below the sticky navigation, then moves focus and the url hash to it
 *
 * the offset comes from the section's css scroll-margin-top
 * @param id the id of the target element, which should accept programmatic focus
 */
export function scrollToSection(id: string): void {
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: prefersReducedMotion() ? 'instant' : 'smooth',
    block: 'start',
  });
  window.history.replaceState(window.history.state, '', `#${id}`);
  target.focus({ preventScroll: true });
}

/** options for {@link useAutoCycle} */
export interface AutoCycleOptions {
  /** number of positions in the cycle */
  length: number;
  /** time between steps */
  intervalMs: number;
  /** element whose visibility gates the cycle, which pauses while it is off-screen */
  viewportRef?: RefObject<Element | null>;
}

/** the current index, a selector that stops the cycle, and whether the cycle is advancing right now */
export type AutoCycle = [
  index: number,
  select: (index: number) => void,
  running: boolean,
];

/**
 * advances an index on a fixed interval until the user picks a position
 *
 * the cycle never runs under reduced motion, and pauses while its element is off-screen or the tab is hidden
 * @param options cycle length, timing and the element that gates it
 * @param options.length number of positions in the cycle
 * @param options.intervalMs time between steps
 * @param options.viewportRef element whose visibility pauses the cycle while off-screen
 * @returns the current index, a selector that stops the cycle, and whether the cycle is advancing right now;
 * the flag is false while paused, so timed visuals restart in step with the interval when it resumes
 */
export function useAutoCycle({
  length,
  intervalMs,
  viewportRef,
}: AutoCycleOptions): AutoCycle {
  const reducedMotion = usePrefersReducedMotion();
  const pageVisible = useSyncExternalStore(
    subscribePageVisibility,
    isPageVisible,
    getServerTrue,
  );
  const inView = useInView(viewportRef);
  const [index, setIndex] = useState(0);
  const [stopped, setStopped] = useState(false);
  const ticking = !stopped && !reducedMotion && pageVisible && inView;

  useEffect(() => {
    if (!ticking) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [length, intervalMs, ticking]);

  const select = useCallback((next: number): void => {
    setStopped(true);
    setIndex(next);
  }, []);

  return [index, select, ticking];
}

/** outcome of the latest copy attempt */
export type CopyStatus = 'idle' | 'copied' | 'failed';

/**
 * copies text to the clipboard and reports the outcome for a moment
 * @param resetMs how long the outcome is kept before returning to idle
 * @returns the latest outcome and a copy function
 */
export function useCopy(
  resetMs = COPY_RESET_MS,
): [status: CopyStatus, copy: (text: string) => void] {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const resetTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimerRef.current), []);

  const copy = useCallback(
    (text: string): void => {
      const attempt = async (): Promise<CopyStatus> => {
        try {
          // NOTE: the clipboard api is missing on insecure origins, which throws here and is caught below
          await navigator.clipboard.writeText(text);

          return 'copied';
        } catch {
          return 'failed';
        }
      };

      void attempt().then((outcome) => {
        setStatus(outcome);
        window.clearTimeout(resetTimerRef.current);
        resetTimerRef.current = window.setTimeout(() => {
          setStatus('idle');
        }, resetMs);
      });
    },
    [resetMs],
  );

  return [status, copy];
}

/** scroll position derived by {@link useChapterTracking} */
export interface ChapterTracking {
  /** index of the chapter currently being read, or -1 above the first chapter */
  active: number;
  /** whether the hero has scrolled out of view */
  pastHero: boolean;
}

/**
 * finds the last chapter whose top has passed the activation line
 * @param chapterIds ids of the chapter elements in page order
 * @returns the index of the active chapter, or -1
 */
function findActiveChapter(chapterIds: readonly string[]): number {
  const line = window.innerHeight * ACTIVE_CHAPTER_LINE;

  return chapterIds.reduce((active, id, index) => {
    const top = document.getElementById(id)?.getBoundingClientRect().top;

    return top !== undefined && top < line ? index : active;
  }, -1);
}

/**
 * tracks the active chapter, the hero boundary, and page scroll progress
 * @param chapterIds ids of the chapter elements in page order
 * @param heroId id of the hero element
 * @param progressRef element scaled horizontally to show scroll progress
 * @returns the active chapter and whether the hero is out of view
 */
export function useChapterTracking(
  chapterIds: readonly string[],
  heroId: string,
  progressRef: RefObject<HTMLElement | null>,
): ChapterTracking {
  const [tracking, setTracking] = useState<ChapterTracking>({
    active: -1,
    pastHero: false,
  });

  useEffect(() => {
    let frame = 0;

    const measure = (): void => {
      frame = 0;

      const scroller = document.scrollingElement ?? document.documentElement;
      const max = scroller.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, scroller.scrollTop / max) : 0;

      progressRef.current?.style.setProperty(
        'transform',
        `scaleX(${progress})`,
      );

      const heroBottom = document
        .getElementById(heroId)
        ?.getBoundingClientRect().bottom;
      const pastHero = heroBottom !== undefined && heroBottom < PAST_HERO_LINE;
      const active = findActiveChapter(chapterIds);

      setTracking((current) =>
        current.active === active && current.pastHero === pastHero
          ? current
          : { active, pastHero },
      );
    };

    const schedule = (): void => {
      frame ||= window.requestAnimationFrame(measure);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [chapterIds, heroId, progressRef]);

  return tracking;
}

/** a set of pending timeouts that can be cleared together */
interface TimerBag {
  /** runs the callback after the delay unless the bag is cleared first */
  later: (callback: () => void, delay: number) => void;
  /** cancels every pending timeout */
  clear: () => void;
}

/**
 * creates a bag that tracks timeouts so an effect can cancel them on cleanup
 * @returns a bag that schedules and cancels timeouts
 */
function createTimerBag(): TimerBag {
  const timers = new Set<number>();

  return {
    later: (callback, delay) => {
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        callback();
      }, delay);
      timers.add(timer);
    },
    clear: () => {
      for (const timer of timers) {
        window.clearTimeout(timer);
      }

      timers.clear();
    },
  };
}

/**
 * hides a reveal target until it scrolls into view
 * @param element the element carrying a data-reveal attribute
 */
function hideRevealTarget(element: HTMLElement): void {
  const delay = Number(element.dataset.revealDelay ?? 0);

  element.style.setProperty('--home-reveal-delay', `${delay}ms`);
  element.dataset.revealState = 'hidden';
}

/**
 * clears every reveal marker so the element renders normally
 * @param element the element to restore
 */
function restoreRevealTarget(element: HTMLElement): void {
  delete element.dataset.revealState;
  element.style.removeProperty('--home-reveal-delay');
}

/**
 * fades and lifts `[data-reveal]` descendants into view as they scroll in
 *
 * content renders visible on the server and without JavaScript; targets are only hidden after mount,
 * and nothing is hidden when the user prefers reduced motion
 * @param rootRef container whose reveal targets are animated
 */
export function useReveal(rootRef: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const root = rootRef.current;

    if (
      !root ||
      prefersReducedMotion() ||
      document.visibilityState !== 'visible' ||
      !('IntersectionObserver' in window)
    ) {
      return undefined;
    }

    const pending = new Set<HTMLElement>();
    const { later, clear } = createTimerBag();
    let sweepInterval: number | undefined;
    let frame = 0;
    let disposed = false;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    const sweep = (): void => {
      frame = 0;

      const line = window.innerHeight * REVEAL_SWEEP_LINE;

      for (const element of pending) {
        if (element.getBoundingClientRect().top < line) {
          show(element);
        }
      }
    };

    const scheduleSweep = (): void => {
      frame ||= window.requestAnimationFrame(sweep);
    };

    // NOTE: once every target is shown there is nothing left to watch
    const detach = (): void => {
      window.removeEventListener('scroll', scheduleSweep);
      window.cancelAnimationFrame(frame);
      window.clearInterval(sweepInterval);
      observer.disconnect();
    };

    const show = (element: HTMLElement): void => {
      if (!pending.delete(element)) {
        return;
      }

      observer.unobserve(element);
      element.dataset.revealState = 'shown';

      const delay = Number(element.dataset.revealDelay ?? 0);
      later(() => restoreRevealTarget(element), REVEAL_SETTLE_MS + delay);

      if (pending.size === 0) {
        detach();
      }
    };

    const setup = (): void => {
      const line = window.innerHeight * REVEAL_START_LINE;

      for (const element of root.querySelectorAll<HTMLElement>(
        '[data-reveal]',
      )) {
        if (element.getBoundingClientRect().top >= line) {
          hideRevealTarget(element);
          pending.add(element);
          observer.observe(element);
        }
      }

      if (pending.size === 0) {
        detach();

        return;
      }

      window.addEventListener('scroll', scheduleSweep, { passive: true });

      let ticks = 0;
      sweepInterval = window.setInterval(() => {
        sweep();
        ticks += 1;

        if (ticks > REVEAL_SWEEP_TICKS) {
          window.clearInterval(sweepInterval);
        }
      }, REVEAL_SWEEP_INTERVAL_MS);

      later(sweep, REVEAL_SAFETY_SWEEP_MS);
      void document.fonts.ready.then(() => {
        if (!disposed) {
          later(sweep, REVEAL_FONT_SWEEP_DELAY_MS);
        }
      });
    };

    later(setup, REVEAL_SETUP_DELAY_MS);

    return () => {
      disposed = true;
      detach();
      clear();

      for (const element of root.querySelectorAll<HTMLElement>(
        '[data-reveal-state]',
      )) {
        restoreRevealTarget(element);
      }
    };
  }, [rootRef]);
}
