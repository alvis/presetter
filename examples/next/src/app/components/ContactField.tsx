import { classnames } from '#classnames';

import type { FC, PropsWithChildren } from 'react';

/** props accepted by the {@link ContactField} component */
export type ContactFieldProps = PropsWithChildren<{
  /** id of the associated input or textarea */
  readonly htmlFor: string;
  /** visible label text */
  readonly label: string;
}>;

/**
 * renders a labelled wrapper around a contact form field
 *
 * the label stacks its visible text above the slot for the actual input
 * the descendant selectors handle the shared input and textarea appearance
 * so each caller does not have to repeat the same utility list
 * @param props props that configure the rendered field
 * @param props.children field input rendered inside the label
 * @param props.htmlFor id of the associated input or textarea
 * @param props.label visible label text
 * @returns the rendered labelled field wrapper
 */
export const ContactField: FC<ContactFieldProps> = ({
  children,
  htmlFor,
  label,
}) => {
  return (
    <label
      className={classnames(
        'grid gap-2 text-ink text-ui font-bold',
        '[&_input]:w-full [&_textarea]:w-full',
        '[&_input]:border [&_input]:border-line',
        '[&_textarea]:border [&_textarea]:border-line',
        '[&_input]:rounded-sm [&_textarea]:rounded-sm',
        '[&_input]:bg-surface-bright [&_textarea]:bg-surface-bright',
        '[&_input]:text-ink [&_textarea]:text-ink',
        '[&_input]:px-4 [&_input]:py-3',
        '[&_textarea]:px-4 [&_textarea]:py-3',
      )}
      htmlFor={htmlFor}>
      {label}
      {children}
    </label>
  );
};
