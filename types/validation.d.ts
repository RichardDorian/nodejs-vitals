/// <reference path="types.d.ts" />

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
   * not match the name of the given primitive or if the
   * given value is not included in the given array.
   * @param value Value to check
   * @param type Name of the primitive
   * @param array Array to check the value presence in
   * @param argumentName Optional, the argument name, displayed in the error message
   * @example
   * ```javascript
   * function add(mode) {
   *   validateInPrimitiveArray(mode, 'string', ['node', 'bun', 'browser'], 'mode');
   *   // Throws an error if "mode" isn't a string or
   *   // if "mode" isn't (node or bun or browser)
   *
   *   return a + b;
   * }
   * ```
   * @since `nodejs-vitals@1.0.2`
   */
  export function validateInPrimitiveArray<T extends keyof Types>(
    value: unknown,
    type: T,
    array: Types[T][],
    argumentName?: string
  );
  /**
   * Throws an error if the type of the given value
   * is not an instance of the given class.
   * @param value Value to check
   * @param constructor Constructor of the class to check
   * @param argumentName Optional, the argument name, displayed in the error message
   * @example
   * ```javascript
   * function urlToString(url) {
   *   validateInstance(url, URL, 'url');
   *   return url.toString();
   * }
   * ```
   * @since `nodejs-vitals@1.0.3`
   */
  export function validateInstance(
    value: unknown,
    constructor: ConstructorResolvable,
    argumentName?: string
  ): void;
  /**
   * Throws an error if the given object doesn't
   * match with the given scheme.
   * @param object The object to check
   * @param scheme The scheme to use
   * @param objectName Optional, the argument name, displayed in the error message (defaults to `@`)
   * @example
   * ```javascript
   * const loginCredentialsScheme = {
   *   username: 'string', // Checks for a string
   *   password: 'string',
   *   'pinCode?': 'number', // Optional, checks for a number
   *   'websiteUrl?': URL, // Optional, checks for an instance of URL,
   *   'platform?': ['string', 'desktop', 'mobile'] // Optional, checks if the value is in the array of strings ['desktop', 'mobile']
   * }
   *
   * function login(credentials) {
   *    validateObject(credentials, loginCredentialsScheme, 'credentials');
   *    // Rest of your code
   * }
   * ```
   * @since `nodejs-vitals@1.0.3`
   */
  export function validateObject(
    object: unknown,
    scheme: ValidateObjectScheme,
    objectName?: string
  ): void;
  export type ValidateObjectScheme = {
    [key: string]: Primitives | [Primitives, any] | ValidateObjectScheme;
  };
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
