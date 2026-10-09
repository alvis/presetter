/** naming selectors shared by React and Next.js JSX files */
export const REACT_NAMING_CONVENTION_OPTIONS = [
  {
    selector: 'default',
    format: [
      'camelCase', // default
    ],
    leadingUnderscore: 'allow', // default
    trailingUnderscore: 'allow', // default
  },
  {
    selector: 'import',
    format: [
      'camelCase', // default, for functions and variables
      'PascalCase', // default, for classes
    ],
  },
  {
    selector: 'function',
    format: [
      'camelCase', // default
      'PascalCase', // for react components
    ],
  },
  {
    selector: 'objectLiteralMethod',
    format: null, // disable as an object literal is likely used for assigning parameters to a third-party library
  },
  {
    selector: 'objectLiteralProperty',
    format: null, // disable as an object literal is likely used for assigning parameters to a third-party library
  },
  {
    selector: 'parameter',
    format: [
      'camelCase', // default
      'PascalCase', // for react components
    ],
    leadingUnderscore: 'allow', // default
    trailingUnderscore: 'allow', // default
  },
  {
    selector: 'variable',
    format: [
      'PascalCase', // for react functional components
      'camelCase', // default, for variables
      'UPPER_CASE', // default, for constants
    ],
    leadingUnderscore: 'allow', // add _prefix to ignore the rule
    trailingUnderscore: 'allow', // add _suffix to ignore the rule
  },
  {
    selector: 'typeLike',
    format: [
      'PascalCase', // default
    ],
  },
];
