import type { FC } from 'react';

/** props accepted by the {@link PricePlanCard} component */
export interface PricePlanCardProps {
  /** descriptive paragraph rendered beneath the price */
  readonly detail: string;
  /** when true, renders the inked "most requested" variant */
  readonly featured?: boolean;
  /** plan name rendered as the H3 heading and inside the CTA label */
  readonly name: string;
  /** headline price rendered as the dominant numeric line (e.g. `"$18k"`) */
  readonly price: string;
}

/**
 * renders a single pricing card inside the pricing section grid
 *
 * two visual variants are supported via the `featured` prop:
 * - default: paper-veil card with ink typography and a chip-bg CTA
 * - featured: inked background card with paper typography, an extra
 *   "Most requested" badge, and a paper-bg CTA
 * @param props props that configure the rendered card
 * @param props.detail descriptive paragraph rendered beneath the price
 * @param props.featured when true, renders the inked "most requested" variant
 * @param props.name plan name rendered as the H3 heading and inside the CTA label
 * @param props.price headline price rendered as the dominant numeric line (e.g. `"$18k"`)
 * @returns the rendered pricing card
 */
export const PricePlanCard: FC<PricePlanCardProps> = ({
  detail,
  featured,
  name,
  price,
}) => {
  const cardClassName = featured
    ? 'relative grid gap-4 content-start min-h-[360px] p-6 rounded-lg ' +
      'shadow-soft [background:var(--color-ink)] ' +
      'max-[620px]:min-h-0 ' +
      'text-paper'
    : 'relative grid gap-4 content-start min-h-[360px] p-6 rounded-lg ' +
      'bg-surface-on-paper-veil shadow-soft ' +
      'max-[620px]:min-h-0';

  const headingClassName = featured
    ? 'mb-2 text-3xl leading-[1.2] text-paper'
    : 'mb-2 text-3xl leading-[1.2] text-ink';

  const priceClassName = featured
    ? 'm-0 text-paper font-display font-black leading-none ' +
      '[font-variant-numeric:tabular-nums] ' +
      'text-8xl max-[620px]:text-6xl'
    : 'm-0 text-coral font-display font-black leading-none ' +
      '[font-variant-numeric:tabular-nums] ' +
      'text-8xl max-[620px]:text-6xl';

  const detailClassName = featured
    ? 'mb-0 text-paper text-base leading-[1.58] [text-wrap:pretty]'
    : 'mb-0 text-ink-soft text-base leading-[1.58] [text-wrap:pretty]';

  const ctaClassName = featured
    ? 'inline-flex items-center justify-center min-h-11 px-4 rounded-sm ' +
      'bg-paper text-ink text-ui font-bold whitespace-nowrap ' +
      'transition-[transform,background-color,color,box-shadow] ' +
      'duration-[180ms] ease-out ' +
      'hover:[@media(hover:hover)]:-translate-y-0.5 active:scale-[0.97]'
    : 'inline-flex items-center justify-center min-h-11 px-4 rounded-sm ' +
      'bg-chip-bg text-ink text-ui font-bold whitespace-nowrap ' +
      'transition-[transform,background-color,color,box-shadow] ' +
      'duration-[180ms] ease-out ' +
      'hover:[@media(hover:hover)]:-translate-y-0.5 active:scale-[0.97]';

  return (
    <article className={cardClassName}>
      {featured ? (
        <span
          className={
            'inline-flex items-center min-h-8 rounded-full ' +
            'bg-chip-bg text-moss text-eyebrow font-bold ' +
            'w-max px-3'
          }>
          Most requested
        </span>
      ) : null}
      <h3 className={headingClassName}>{name}</h3>
      <p className={priceClassName}>{price}</p>
      <p className={detailClassName}>{detail}</p>
      <a className={ctaClassName} href="#contact">
        Start with {name}
      </a>
    </article>
  );
};
