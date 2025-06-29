import { type Theme, theme } from '../index';

/**
 * A utility type that makes all properties of an object optional while preserving primitive types.
 * This is more sophisticated than the previous version and correctly handles primitives, functions,
 * and arrays without making them deeply partial.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends any[]
    ? T[P] // Arrays are kept as-is
    : T[P] extends (...args: any[]) => any
      ? T[P] // Functions are kept as-is
      : T[P] extends object
        ? T[P] extends Date
          ? T[P] // Dates are kept as-is
          : T[P] extends RegExp
            ? T[P] // RegExp are kept as-is
            : DeepPartial<T[P]> // Only objects are made deeply partial
        : T[P]; // Primitives (number, string, boolean, etc.) are kept as-is
};

/**
 * A helper function to check if an item is a non-array object.
 */
const isObject = (item: any): item is object => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

/**
 * A robust deep-merge function that combines two objects.
 * It recursively merges nested objects, and values from the `source`
 * object will overwrite values from the `target` object.
 */
const mergeDeep = <T extends object>(target: T, source: DeepPartial<T>): T => {
  const output = { ...target } as T;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const sourceKey = key as keyof DeepPartial<T>;
      const sourceValue = source[sourceKey];

      if (
        isObject(sourceValue) &&
        key in target &&
        isObject(target[key as keyof T])
      ) {
        // If the key exists in both and both values are objects, recurse
        output[key as keyof T] = mergeDeep(
          target[key as keyof T] as object,
          sourceValue as object
        ) as T[keyof T];
      } else {
        // Otherwise, directly assign the value from the source
        (output as any)[key] = sourceValue;
      }
    });
  }

  return output;
};

/**
 * Extends the default Materio UI theme with custom overrides.
 * This function deeply merges your custom theme object with the default theme,
 * allowing you to customize only the parts you need without having to rewrite
 * the entire theme.
 *
 * @param overrides A partial theme object containing your customizations.
 * @returns A complete, merged theme object.
 */
export const extendTheme = (overrides: DeepPartial<Theme>): Theme => {
  return mergeDeep(theme, overrides);
};
