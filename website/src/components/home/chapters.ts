/** identifier of a numbered homepage chapter, also used as its section id */
export type ChapterId = 'drift' | 'opinions' | 'scripts' | 'yours' | 'explore';

/** a numbered homepage chapter reachable from the chapter navigation */
export interface Chapter {
  /** id of the section element */
  id: ChapterId;
  /** two-digit chapter number */
  number: string;
  /** short label shown in the chapter navigation */
  label: string;
  /** eyebrow shown beside the number at the top of the chapter */
  eyebrow: string;
}

/** id of the hero section, whose bottom edge reveals the chapter navigation */
export const HERO_ID = 'hero';

export const chapterById: Readonly<Record<ChapterId, Chapter>> = {
  drift: {
    id: 'drift',
    number: '01',
    label: 'Config drift',
    eyebrow: 'The problem',
  },
  opinions: {
    id: 'opinions',
    number: '02',
    label: 'Opinionated presets',
    eyebrow: 'Opinionated by design',
  },
  scripts: {
    id: 'scripts',
    number: '03',
    label: 'Managed scripts',
    eyebrow: 'Managed scripts',
  },
  yours: {
    id: 'yours',
    number: '04',
    label: 'Your own preset',
    eyebrow: 'Your own managed preset',
  },
  explore: {
    id: 'explore',
    number: '05',
    label: 'Build your stack',
    eyebrow: 'Interactive explorer',
  },
};

/** chapters in page order */
export const chapters: readonly Chapter[] = [
  chapterById.drift,
  chapterById.opinions,
  chapterById.scripts,
  chapterById.yours,
  chapterById.explore,
];

export const chapterIds: readonly string[] = chapters.map(({ id }) => id);
