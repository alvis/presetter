import type { FC } from 'react';

/** single stat rendered inside the proof band */
export type ProofStat = {
  /** descriptive label rendered below the value (e.g. `"launches shipped"`) */
  readonly label: string;
  /** numeric or short-form value rendered as the dominant figure (e.g. `"42"`) */
  readonly value: string;
};

/** props accepted by the {@link ProofSection} component */
export type ProofSectionProps = {
  /** stats rendered in the three-up `<dl>` grid */
  readonly stats: readonly ProofStat[];
};

/**
 * renders the social-proof stats band beneath the hero service strip
 *
 * provides a two-column layout: the left column hosts the kicker and H2,
 * and the right column hosts a 3-up `<dl>` grid of stats mobile collapses
 * the outer grid and inner stat row to a single column
 * @param props props that configure the rendered section
 * @param props.stats stats rendered in the three-up `<dl>` grid
 * @returns the rendered proof section
 */
export const ProofSection: FC<ProofSectionProps> = ({ stats }) => {
  return (
    <section
      aria-labelledby="proof-title"
      className={
        'w-full max-w-[1120px] mx-auto ' +
        '[padding-block:clamp(var(--spacing)*16,8vw,var(--spacing)*24)] ' +
        'max-[620px]:[padding-block:calc(var(--spacing)*16)] ' +
        'grid grid-cols-[minmax(260px,0.8fr)_1fr] gap-8 items-end ' +
        'max-[900px]:grid-cols-1'
      }>
      <div>
        <p
          className={
            'mt-0 mb-4 font-black uppercase tracking-[0.08em] ' +
            'text-eyebrow text-moss ' +
            'max-[620px]:max-w-[30ch] max-[620px]:text-base ' +
            'max-[620px]:leading-[1.45] max-[620px]:tracking-[0.06em]'
          }>
          Proof before polish
        </p>
        <h2
          className={
            'mb-0 font-display text-ink leading-[1.05] [text-wrap:balance] ' +
            'text-9xl ' +
            'max-[620px]:text-4xl max-[620px]:leading-[1.04]'
          }
          id="proof-title">
          Creative that earns its place in the pipeline.
        </h2>
      </div>
      <dl
        className={
          'grid grid-cols-3 gap-4 m-0 ' +
          'max-[900px]:grid-cols-1 ' +
          'max-[620px]:gap-5'
        }>
        {stats.map((stat) => (
          <div className="pt-5 border-t-2 border-ink" key={stat.label}>
            <dt
              className={
                'text-coral font-display font-black leading-none ' +
                '[font-variant-numeric:tabular-nums] ' +
                'text-8xl ' +
                'max-[620px]:text-6xl'
              }>
              {stat.value}
            </dt>
            <dd className="mt-2 mb-0 text-ink-soft font-medium leading-[1.45]">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
