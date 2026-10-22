import { scrollToSection } from './hooks';

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';

export interface SectionLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'onClick'
> {
  /** id of the homepage section to scroll to */
  readonly targetId: string;
  /** link content */
  readonly children: ReactNode;
}

/**
 * tells whether a click should keep the browser's default link behavior, such as opening a new tab
 * @param event mouse event raised on the link
 * @returns true for modified or non-primary clicks
 */
function isModifiedClick(event: MouseEvent<HTMLAnchorElement>): boolean {
  return (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

/**
 * renders an in-page link that smoothly scrolls to a section and moves focus there
 * @param props anchor attributes plus the id of the section to reach
 * @param props.targetId id of the homepage section to scroll to
 * @param props.children link content
 * @returns the link element
 */
export default function SectionLink({
  targetId,
  children,
  ...rest
}: SectionLinkProps): ReactNode {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    if (event.defaultPrevented || isModifiedClick(event)) {
      return;
    }

    event.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <a {...rest} href={`#${targetId}`} onClick={handleClick}>
      {children}
    </a>
  );
}
