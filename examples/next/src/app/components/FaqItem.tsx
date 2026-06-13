import type { FC } from 'react';

/** props accepted by the {@link FaqItem} component */
export type FaqItemProps = {
  /** answer paragraph revealed when the item is expanded */
  readonly answer: string;
  /** question text rendered as the always-visible summary */
  readonly question: string;
};

/**
 * renders a single collapsible question and answer pair
 *
 * uses a native `<details>` element so disclosure works without JavaScript
 * the `last:border-b` rule on the wrapper recreates the original closing
 * hairline rule below the final entry without an extra wrapper element
 * @param props props that configure the rendered FAQ item
 * @param props.answer answer paragraph revealed when the item is expanded
 * @param props.question question text rendered as the always-visible summary
 * @returns the rendered FAQ disclosure
 */
export const FaqItem: FC<FaqItemProps> = ({ answer, question }) => {
  return (
    <details className="py-5 border-t border-line last:border-b">
      <summary
        className={
          'min-h-11 text-ink cursor-pointer ' +
          'text-lg font-bold ' +
          'transition-[transform,background-color,color,box-shadow] ' +
          'duration-[180ms] ease-out ' +
          'hover:[@media(hover:hover)]:text-coral'
        }>
        {question}
      </summary>
      <p
        className={
          'pt-3 mb-0 text-ink-soft text-base leading-[1.58] [text-wrap:pretty]'
        }>
        {answer}
      </p>
    </details>
  );
};
