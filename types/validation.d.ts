type Types = {
  bigint: bigint;
  boolean: boolean;
  function: Function;
  number: number;
  object: Object;
  string: string;
  symbol: Symbol;
  undefined: undefined;
};

declare module 'nodejs-vitals/validation' {
  /**
   * Checks whether or not all the items in the
   * given array are type of the given type
   * @param type Type to check the items in the array for
   * @param arr The array to check
   * @returns Whether or not all the items are
   * type of the given type
   * @example
   * ```javascript
   * const arr = [ 2, 4, 'Hello World!', 8 ];
   * isArrayOf('number', arr); // false
   * ```
   * @example
   * ```javascript
   * const arr = [ 2, 4, 8, 12 ];
   * isArrayOf('number', arr); // true
   * ```
   * @since `nodejs-vitals@1.0.1`
   */
  export function isArrayOf<T extends keyof Types>(
    type: T,
    arr: unknown
  ): arr is Types[T][];
  /**
   * @enum Primitives in NodeJS
   * @since `nodejs-vitals@1.0.1`
   */
  export enum Primitives {
    BIGINT = 'bigint',
    BOOLEAN = 'boolean',
    FUNCTION = 'function',
    NUMBER = 'number',
    OBJECT = 'object',
    STRING = 'string',
    SYMBOL = 'symbol',
    UNDEFINED = 'undefined',
  }
  /**
   * Checks if the given string is
   * the name of a primitive
   * @param value Value to check for
   * @returns Whether or not the given string is the name of a primitive
   * @example
   * ```javascript
   * isPrimitive('bigint'); // true
   * isPrimitive('number'); // true
   * isPrimitive('Hello World!'); // false
   * ```
   * @since `nodejs-vitals@1.0.1`
   */
  export function isPrimitive(value: unknown): value is keyof Types;
  /**
   * Throws an error if the type of given value does
   * not match the name of the given primitive
   * @param value Value to check
   * @param type Name of the primitive
   * @param argumentName Optional, the argument name, displayed in the error message
   * @example
   * ```javascript
   * function add(a, b) {
   *   validatePrimitive(a, 'number', 'a'); // Throws an error if a
   *   validatePrimitive(b, 'number', 'b'); // or b is not a number
   *
   *   return a + b;
   * }
   * ```
   * @since `nodejs-vitals@1.0.1`
   */
  export function validatePrimitive(
    value: unknown,
    type: keyof Types,
    argumentName?: string
  ): void;
}
