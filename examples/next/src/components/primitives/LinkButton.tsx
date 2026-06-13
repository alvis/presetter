import { PressableAction } from './PressableAction';

import type { FC, PropsWithChildren } from 'react';

/** props accepted by the {@link LinkButton} component */
export type LinkButtonProps = PropsWithChildren<{
  /** optional explicit accessible name override */
  readonly ariaLabel?: string;
  /** optional extra tailwind classes appended to the variant base */
  readonly className?: string;
  /** anchor target */
  readonly href: string;
  /** visual variant — defaults to `"primary"` */
  readonly variant?: 'primary' | 'secondary';
}>;

/**
 * renders an anchor styled as either a primary or secondary action
 *
 * wraps {@link PressableAction} so the shared hit-target and motion classes
 * apply consistently; the variant prop swaps the appearance layer between
 * the inked primary and the paper-veil secondary
 * @param props props that configure the rendered link
 * @param props.ariaLabel optional explicit accessible name override
 * @param props.children rendered link label
 * @param props.className optional extra tailwind classes appended to the variant base
 * @param props.href anchor target
 * @param props.variant visual variant — defaults to `"primary"`
 * @returns the rendered anchor element
 */
export const LinkButton: FC<LinkButtonProps> = ({
  ariaLabel,
  children,
  className,
  href,
  variant = 'primary',
}) => {
  const variantClassName =
    variant === 'secondary'
      ? 'px-6 rounded-md cursor-pointer ' +
        'border border-line bg-surface-on-paper-veil text-ink font-bold'
      : 'px-6 rounded-md border-0 cursor-pointer ' +
        'bg-ink text-paper font-bold shadow-crisp';

  return (
    <PressableAction
      ariaLabel={ariaLabel}
      className={[variantClassName, className].filter(Boolean).join(' ')}
      href={href}>
      {children}
    </PressableAction>
  );
};
