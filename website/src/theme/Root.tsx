import { useEffect } from 'react';

import type { ReactNode } from 'react';

export type WebsiteRootProps = {
  children: ReactNode;
};

/**
 * Checks whether global keyboard shortcuts should ignore a target.
 * @param target Event target that received the keyboard event.
 * @returns Whether the target accepts user text input.
 */
function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  if (target.isContentEditable) {
    return true;
  }

  const tagName = target.tagName;

  return tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT';
}

/**
 * Finds the mounted DocSearch button that can receive the shortcut.
 * @returns Visible DocSearch button, if one is mounted.
 */
function getVisibleSearchButton(): HTMLButtonElement | null {
  const buttons = Array.from(
    document.querySelectorAll<HTMLButtonElement>('button.DocSearch-Button'),
  );

  return (
    buttons.find((button) => {
      const styles = window.getComputedStyle(button);

      return (
        !button.disabled &&
        styles.display !== 'none' &&
        styles.visibility !== 'hidden' &&
        button.getClientRects().length > 0
      );
    }) ?? null
  );
}

export default function WebsiteRoot({ children }: WebsiteRootProps): ReactNode {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.defaultPrevented || event.repeat) {
        return;
      }

      if (!(event.metaKey || event.ctrlKey) || event.altKey || event.shiftKey) {
        return;
      }

      if (event.key.toLowerCase() !== 'k') {
        return;
      }

      if (isEditableTarget(event.target)) {
        return;
      }

      const button = getVisibleSearchButton();
      if (!button) {
        return;
      }

      event.preventDefault();
      button.click();
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return children;
}
