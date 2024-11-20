# Code Instructions for GitHub Copilot

## Writing Conventions

- Use American English throughout:
  - This aligns with 99% of third-party libraries.
  - Ensures consistent language, improving the developer experience.

---

## Documentation Guidelines

### JSDoc Comments

- Begin JSDoc comments with a third-person singular action verb (e.g., ✅ `handles` not ❌ `handle`).
- Write all comments and JSDoc in lowercase.
- Omit hyphens in `@param` tags.
- Exclude TypeScript types from JSDoc comments.
- Do not end JSDoc comments with a period.
- List all possible `@throws` cases with conditions.
- Use single-line JSDoc comments when possible:
  - ✅ **Preferred**:

      ```typescript
      /** merges two configuration objects */
      ```

  - ❌ Avoid multi-line JSDoc if it can fit on one line:

      ```typescript
      /**
       * merges two configuration objects
       */
      ```

#### JSDoc Examples

```typescript
/**
 * merges two configuration objects
 * @param target the target configuration object
 * @param source the source configuration object
 * @returns the merged configuration object
 * @throws TypeError if either argument is not an object
 */
function merge(target: object, source: object): object {
  if (typeof target !== 'object' || typeof source !== 'object') {
    throw new TypeError('both target and source must be objects');
  }

  const result = { ...target };

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = merge(result[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
  }

  return result;
}
```

### Explanatory Comments

- Use `// NOTE: <explanation>` for explaining logic.
- For multi-line notes, leave the first line empty and use multiple lines:

    ```typescript
    // NOTE:
    // this function performs a deep merge of two objects
    // it recursively merges nested objects
    ```

---

## Best Practices

- Only comment on:
  - Unconventional or complex code.
  - Rarely implemented features.
- Focus on explaining _why_ rather than _what_.

### ✅ **Good Comment**

```typescript
// check if user exists before proceeding
if (!user) throw new Error("User not found");
```

### ❌ **Unnecessary Comment**

```typescript
// loop through the array
for (let i = 0; i < arr.length; i++) {...}
```

---

## Interface Guidelines

- Document all fields using JSDoc.
- Group fields logically with concise descriptions.
- Use `// <group description> //` to separate field groups.

### Interface Example

```typescript
/** describes a product */
interface Product {
  // metadata //
  /** unique identifier */
  id: number;

  // details //
  /** product name */
  name: string;
  /** product price */
  price: number;
}
```

---

## Testing Guidelines

- **Framework**: Use Vitest for testing.

- **File Naming**:
  - Unit tests: Use `.spec.ts`.
  - Integration tests: Use `.integration.ts`.

- **Test Isolation**:
  - Unit tests (`.spec.ts`) must not interact with real databases or third-party services. Use mocking to simulate dependencies.
  - Integration tests (`.integration.ts`) may interact with real services or databases. Ensure all required credentials are set before running these tests.

- **Test Descriptions**:
  - Write descriptions in lowercase.
  - Use prefixes for specific test types:
    - `fn:` for function tests.
    - `op:` for operation tests.
    - `cl:` for class tests.
    - `ty:` for utility type tests.

### Test Example

```typescript
import { describe, it, expect } from 'vitest';

describe('fn:merge', () => {
  it('should merge two flat objects correctly', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };

    const result = merge(target, source);
    const expected = { a: 1, b: 3, c: 4 };

    expect(result).toEqual(expected);
  });

  it('should perform a deep merge of nested objects', () => {
    const target = { a: { b: 1 } };
    const source = { a: { c: 2 } };

    const result = merge(target, source);
    const expected = { a: { b: 1, c: 2 } };

    expect(result).toEqual(expected);
  });
});
```
