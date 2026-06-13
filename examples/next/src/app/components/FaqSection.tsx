import { SectionHeading } from '#components/primitives';

import { FaqItem } from './FaqItem';

import type { FC } from 'react';

import type { FaqItemProps } from './FaqItem';

/** props accepted by the {@link FaqSection} component */
export type FaqSectionProps = {
  /** FAQ items rendered as a vertical list of disclosures */
  readonly faqs: readonly FaqItemProps[];
};

/**
 * renders the FAQ section with a stacked heading column and a list of items
 *
 * the section breaks the normal `SectionHeading` layout: the kicker and H2
 * sit stacked in the left column while the FAQ list fills the right
 * column. the `[&_>_div:first-child]` overrides reset the heading's
 * internal 2-col grid and bottom margin inside this section
 * @param props props that configure the rendered section
 * @param props.faqs FAQ items rendered as a vertical list of disclosures
 * @returns the rendered FAQ section
 */
export const FaqSection: FC<FaqSectionProps> = ({ faqs }) => {
  return (
    <section
      aria-labelledby="faq-title"
      className={
        'w-full max-w-[1120px] mx-auto ' +
        '[padding-block:clamp(var(--spacing)*16,8vw,var(--spacing)*24)] ' +
        'max-[620px]:[padding-block:calc(var(--spacing)*16)] ' +
        'grid grid-cols-[0.8fr_1fr] gap-8 ' +
        'max-[900px]:grid-cols-1 ' +
        '[&_>_div:first-child]:!block [&_>_div:first-child]:!mb-0'
      }>
      <SectionHeading
        eyebrow="Questions"
        title="What teams ask before bringing us in."
        titleId="faq-title"
      />
      <div className="grid gap-3">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  );
};
