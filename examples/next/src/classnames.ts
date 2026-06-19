import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

/**
 * joins conditional classes and resolves Tailwind conflicts
 * @param inputs class values accepted by {@link clsx}
 * @returns merged class name string
 */
export function classnames(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
