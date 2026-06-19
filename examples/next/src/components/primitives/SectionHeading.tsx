import { classnames } from '#classnames';

import type { FC } from 'react';

/** props accepted by the {@link SectionHeading} component */
export type SectionHeadingProps = {
  /** small uppercase kicker rendered above the title (e.g. `"Services"`) */
  readonly eyebrow: string;
  /** main H2 title text */
  readonly title: string;
  /** optional dom id assigned to the H2 — used by `aria-labelledby` */
  readonly titleId?: string;
};

/**
 * renders the shared kicker + H2 heading block used by every marketing section
 *
 * lays out the kicker and H2 in a fixed 2-column grid that collapses to a
 * single column below 900px; the component owns the typography for the
 * shared section eyebrow and title pattern so consumers do not have to
 * re-declare it
 * @param props props that configure the rendered heading
 * @param props.eyebrow small uppercase kicker rendered above the title (e.g. `"Services"`)
 * @param props.title main H2 title text
 * @param props.titleId optional dom id assigned to the H2 — used by `aria-labelledby`
 * @returns the rendered section heading block
 */
export const SectionHeading: FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  titleId,
}) => {
  return (
    <div
      className={classnames(
        'grid grid-cols-[minmax(180px,0.38fr)_1fr] gap-8 mb-8 items-start',
        'max-[900px]:grid-cols-1',
      )}>
      <p
        className={classnames(
          'mt-0 mb-4 font-black uppercase tracking-[0.08em]',
          'text-eyebrow text-moss',
          'max-[620px]:max-w-[30ch] max-[620px]:text-base',
          'max-[620px]:leading-[1.45] max-[620px]:tracking-[0.06em]',
        )}>
        {eyebrow}
      </p>
      <h2
        className={classnames(
          'mb-0 font-display text-ink leading-[1.05] [text-wrap:balance]',
          'text-9xl',
          'max-[620px]:text-4xl max-[620px]:leading-[1.04]',
        )}
        id={titleId}>
        {title}
      </h2>
    </div>
  );
};
