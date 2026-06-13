import type { FC } from 'react';

/** props accepted by the {@link WorkItem} component */
export interface WorkItemProps {
  /** client name rendered as the small intro line */
  readonly client: string;
  /** descriptive paragraph stating the measurable outcome */
  readonly result: string;
  /** project headline or scope rendered as the H3 */
  readonly scope: string;
}

/**
 * renders a single project row inside the featured-work list
 *
 * uses a 3-column grid on wide viewports and stacks vertically below
 * 900px. the `last:border-b` rule recreates the original closing hairline
 * on the last row without needing an extra wrapper.
 * @param props props that configure the rendered row
 * @param props.client client name rendered as the small intro line
 * @param props.result descriptive paragraph stating the measurable outcome
 * @param props.scope project headline or scope rendered as the H3
 * @returns the rendered work item
 */
export const WorkItem: FC<WorkItemProps> = ({ client, result, scope }) => {
  return (
    <article
      className={
        'grid grid-cols-[minmax(230px,0.8fr)_minmax(260px,1fr)_auto] gap-6 ' +
        'items-center ' +
        'py-5 border-t border-line last:border-b ' +
        'max-[900px]:grid-cols-1 max-[900px]:items-start'
      }>
      <div>
        <p className="mb-0 text-ink-soft font-regular leading-[1.5]">
          {client}
        </p>
        <h3 className="mb-2 text-ink leading-[1.2] text-3xl">{scope}</h3>
      </div>
      <p className="mb-0 text-ink-soft font-regular leading-[1.5]">{result}</p>
      <a
        aria-label={`Discuss work like ${client}`}
        className={
          'inline-flex items-center justify-center min-h-11 px-4 rounded-sm ' +
          'bg-chip-bg text-ink text-ui font-bold whitespace-nowrap ' +
          'transition-[transform,background-color,color,box-shadow] ' +
          'duration-[180ms] ease-out ' +
          'hover:[@media(hover:hover)]:-translate-y-0.5 active:scale-[0.97] ' +
          'max-[900px]:w-max'
        }
        href="#contact">
        Discuss similar work
      </a>
    </article>
  );
};
