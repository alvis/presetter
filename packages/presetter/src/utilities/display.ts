/**
 * displays the content of a variable
 * @param content the content to display
 * @param level the level of nesting
 * @returns a string representation of the content
 */
export function display(content: unknown, level = 0): string {
  if (typeof content === 'function') {
    return 'Function';
  } else if (Array.isArray(content)) {
    return `Array(${content.length})`;
  } else if (content instanceof Buffer) {
    return 'Buffer';
  } else if (content === null) {
    return 'null';
  } else if (typeof content === 'object') {
    return `Object({${
      level > 1
        ? '...' // skip displaying nested objects
        : '\n' +
          Object.keys(content)
            .map(
              (key) =>
                // indent the content based on the level
                '  '.repeat(level + 1) +
                `${key}: ` +
                display(content[key], level + 1),
            )
            .join('\n') +
          '\n' +
          '  '.repeat(level)
    }})`;
  }

  return typeof content;
}

/**
 * displays the content of a variable with a prefix
 * @param prefix the prefix to add to the display
 * @param content the content to display
 * @returns a string representation of the content with the prefix
 */
export function prefixDisplay(prefix: string, content: unknown): string {
  const representation = display(content);
  const indent = ' '.repeat(prefix.length);

  return (
    prefix +
    representation
      .split('\n')
      .join('\n' + indent)
      .trim()
  );
}
