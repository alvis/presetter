/**
 * Button component props.
 */
export interface ButtonProps {
  /** The button label text */
  label: string;
}

/**
 * Render a simple button component.
 * @param props - Button properties
 * @returns HTML string representation of a button
 */
export function Button(props: ButtonProps): string {
  return `<button>${props.label}</button>`;
}
