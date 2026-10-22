import { useRef } from 'react';

import { useReveal } from './hooks';

import type { ReactNode } from 'react';

export interface RevealRootProps {
  /** class for the wrapper, typically the page token layer */
  readonly className?: string;
  /** content whose `[data-reveal]` descendants animate in on scroll */
  readonly children: ReactNode;
}

/**
 * wraps homepage content so its `[data-reveal]` descendants rise into view as they scroll in
 * @param props component props
 * @param props.className class for the wrapper
 * @param props.children content whose reveal targets are animated
 * @returns the wrapper element
 */
export default function RevealRoot({
  className,
  children,
}: RevealRootProps): ReactNode {
  const rootRef = useRef<HTMLDivElement>(null);

  useReveal(rootRef);

  return (
    <div className={className} ref={rootRef}>
      {children}
    </div>
  );
}
