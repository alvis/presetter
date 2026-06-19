import { classnames } from '#classnames';

import type { CSSProperties, FC, PropsWithChildren } from 'react';

/** props accepted by the {@link PressableAction} component */
export type PressableActionProps = PropsWithChildren<{
  /** optional explicit accessible name override */
  readonly ariaLabel?: string;
  /** optional extra tailwind classes appended to the shared base */
  readonly className?: string;
  /** when true, disables the button form and dims its appearance */
  readonly disabled?: boolean;
  /** when set, renders an `<a>` with this anchor target instead of a button */
  readonly href?: string;
  /** click handler — ignored in the anchor form */
  readonly onClick?: () => void;
  /** optional inline style passthrough */
  readonly style?: CSSProperties;
  /** native button type — defaults to `"button"` */
  readonly type?: 'button' | 'submit';
}>;

/**
 * renders a polymorphic pressable element
 *
 * renders either an `<a>` (when `href` is provided) or a `<button>`; the
 * shared base classes provide the minimum hit-target (44px), the
 * cross-property easing motion, the hover lift (only on devices with a
 * real hover capability), and the active scale-down; consumers
 * (button/link wrappers) layer their own appearance utilities on top via
 * `className`
 * @param props props that configure the rendered element
 * @param props.ariaLabel optional explicit accessible name override
 * @param props.children rendered label or children
 * @param props.className optional extra tailwind classes appended to the shared base
 * @param props.disabled when true, disables the button form and dims its appearance
 * @param props.href when set, renders an `<a>` with this anchor target instead of a button
 * @param props.onClick click handler — ignored in the anchor form
 * @param props.style optional inline style passthrough
 * @param props.type native button type — defaults to `"button"`
 * @returns the rendered anchor or button
 */
export const PressableAction: FC<PressableActionProps> = ({
  ariaLabel,
  children,
  className,
  disabled,
  href,
  onClick,
  style,
  type = 'button',
}) => {
  if (href) {
    return (
      <a
        aria-label={ariaLabel}
        className={classnames(
          'inline-flex items-center justify-center min-h-11',
          'transition-[transform,background-color,color,box-shadow]',
          'duration-[180ms] ease-out',
          'hover:[@media(hover:hover)]:-translate-y-0.5',
          'active:scale-[0.97]',
          'disabled:cursor-not-allowed disabled:opacity-[0.58]',
          'disabled:transform-none',
          className,
        )}
        href={href}
        style={style}>
        {children}
      </a>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      className={classnames(
        'inline-flex items-center justify-center min-h-11',
        'transition-[transform,background-color,color,box-shadow]',
        'duration-[180ms] ease-out',
        'hover:[@media(hover:hover)]:-translate-y-0.5',
        'active:scale-[0.97]',
        'disabled:cursor-not-allowed disabled:opacity-[0.58]',
        'disabled:transform-none',
        className,
      )}
      disabled={disabled}
      style={style}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}>
      {children}
    </button>
  );
};
