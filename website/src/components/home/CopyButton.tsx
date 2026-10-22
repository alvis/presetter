import { useCopy } from './hooks';

import type { ReactNode } from 'react';

import type { CopyStatus } from './hooks';

const STATUS_TEXT: Record<CopyStatus, string> = {
  idle: 'Copy',
  copied: 'Copied',
  failed: 'Copy failed',
};

export interface CopyButtonProps {
  /** text written to the clipboard */
  readonly text: string;
  /** accessible name describing what is copied, e.g. "Copy stack install command" */
  readonly label: string;
  /** class for the button */
  readonly className?: string;
}

/**
 * renders a button that copies text and briefly reports whether it worked
 * @param props the copied text, its accessible name and styling
 * @param props.text text written to the clipboard
 * @param props.label accessible name describing what is copied
 * @param props.className class for the button
 * @returns a button whose label tracks the copy outcome
 */
export default function CopyButton({
  text,
  label,
  className,
}: CopyButtonProps): ReactNode {
  const [status, copy] = useCopy();

  return (
    <button
      aria-label={status === 'idle' ? label : STATUS_TEXT[status]}
      className={className}
      type="button"
      onClick={() => copy(text)}>
      {STATUS_TEXT[status]}
    </button>
  );
}
