import { classnames } from '#classnames';

import { PressableAction } from './PressableAction';

import type { FC, PropsWithChildren } from 'react';

/** props accepted by the {@link Button} component */
export type ButtonProps = PropsWithChildren<{
  /** optional extra tailwind classes appended to the variant base */
  readonly className?: string;
  /** when true, disables the button and dims its appearance */
  readonly disabled?: boolean;
  /** click handler */
  readonly onClick?: () => void;
  /** native button type — defaults to `"button"` */
  readonly type?: 'button' | 'submit';
  /** visual variant — defaults to `"primary"` */
  readonly variant?: 'primary' | 'secondary';
}>;

/**
 * renders a `<button>` styled as either a primary or secondary action
 *
 * wraps {@link PressableAction} so the shared hit-target and motion classes
 * apply consistently; the variant prop swaps the appearance layer between
 * the inked primary and the paper-veil secondary
 * @param props props that configure the rendered button
 * @param props.children rendered button label
 * @param props.className optional extra tailwind classes appended to the variant base
 * @param props.disabled when true, disables the button and dims its appearance
 * @param props.onClick click handler
 * @param props.type native button type — defaults to `"button"`
 * @param props.variant visual variant — defaults to `"primary"`
 * @returns the rendered button element
 */
export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
  type = 'button',
  variant = 'primary',
}) => {
  const variantClassName =
    variant === 'secondary'
      ? classnames(
          'px-6 rounded-md cursor-pointer',
          'border border-line bg-surface-on-paper-veil text-ink font-bold',
        )
      : classnames(
          'px-6 rounded-md border-0 cursor-pointer',
          'bg-ink text-paper font-bold shadow-crisp',
        );

  return (
    <PressableAction
      className={classnames(variantClassName, className)}
      disabled={disabled}
      type={type}
      onClick={onClick}>
      {children}
    </PressableAction>
  );
};
