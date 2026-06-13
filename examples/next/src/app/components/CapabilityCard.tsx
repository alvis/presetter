import type { FC } from 'react';

/** props accepted by the {@link CapabilityCard} component */
export type CapabilityCardProps = {
  /** descriptive paragraph rendered under the title */
  readonly body: string;
  /** when true, renders the inked, taller "featured" variant */
  readonly featured?: boolean;
  /** generated editorial image rendered in the card */
  readonly image: {
    /** accessible description for the image */
    readonly alt: string;
    /** image URL, usually from the public images directory */
    readonly src: string;
  };
  /** card title rendered as the H3 heading */
  readonly title: string;
};

/**
 * renders a single capability card inside the "Services" grid
 *
 * two visual variants are supported via the `featured` prop:
 * - default: paper-veil card with ink typography
 * - featured: inked gradient card with paper typography that spans two
 *   grid rows on wide viewports
 * @param props props that configure the rendered card
 * @param props.body descriptive paragraph rendered under the title
 * @param props.featured when true, renders the inked, taller "featured" variant
 * @param props.image generated editorial image rendered in the card
 * @param props.title card title rendered as the H3 heading
 * @returns the rendered capability card
 */
export const CapabilityCard: FC<CapabilityCardProps> = ({
  body,
  featured,
  image,
  title,
}) => {
  const cardClassName = featured
    ? 'flex flex-col min-h-[220px] p-8 rounded-xl overflow-hidden ' +
      'bg-surface-on-paper-veil ' +
      'shadow-[inset_0_1px_0_var(--color-surface-bright-veil),var(--shadow-soft)] ' +
      'row-span-2 min-h-[456px] text-paper ' +
      '[background:linear-gradient(160deg,var(--color-ink-soft),var(--color-moss)),var(--color-ink)] ' +
      'max-[900px]:row-auto max-[900px]:min-h-[260px]'
    : 'flex flex-col min-h-[220px] p-8 rounded-xl overflow-hidden ' +
      'bg-surface-on-paper-veil ' +
      'shadow-[inset_0_1px_0_var(--color-surface-bright-veil),var(--shadow-soft)]';

  const headingClassName = featured
    ? 'mb-2 text-paper text-3xl leading-[1.2]'
    : 'mb-2 text-ink text-3xl leading-[1.2]';

  const bodyClassName = featured
    ? 'mb-0 text-paper text-base leading-[1.58] [text-wrap:pretty]'
    : 'mb-0 text-ink-soft text-base leading-[1.58] [text-wrap:pretty]';

  const imageClassName =
    'mt-6 block w-full rounded-lg object-cover ' +
    'aspect-[3/2] shadow-[0_18px_42px_var(--color-shadow-soft)] ' +
    (featured
      ? 'min-h-[236px] flex-1 border border-surface-bright-veil'
      : 'max-h-[180px] border border-line');

  return (
    <article className={cardClassName}>
      <h3 className={headingClassName}>{title}</h3>
      <p className={bodyClassName}>{body}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={image.alt}
        className={imageClassName}
        height="800"
        loading="lazy"
        src={image.src}
        width="1200"
      />
    </article>
  );
};
