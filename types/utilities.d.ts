declare module 'nodejs-vitals/utilities' {
  /**
   * An intrinsic object that provides functions to
   * read and parse environment variables
   */
  export const env: {
    /**
     * Gets the value of an environement variable
     * @param variable Name of the environment variable
     * @returns The value of the environment variable or
     * `undefined` if the key doesn't exist
     * @example
     * ```javascript
     * // On a linux platform
     * env.getString('HOME'); // '/home/linus'
     * env.getString('INEXISTANT_VARIABLE'); // undefined
     * ```
     * @since `nodejs-vitals@1.0.1`
     */
    getString(variable: string): string | undefined;
    /**
     * Gets the value of an environement variable and
     * parses it as a number
     * @param variable Name of the environment variable
     * @returns The value of the environment variable or
     * `undefined` if the key doesn't exist
     * @example
     * ```javascript
     * // On a win32 platform
     * env.getNumber('NUMBER_OF_PROCESSORS'); // 12
     * env.getNumber('INEXISTANT_VARIABLE'); // undefined
     * ```
     * @since `nodejs-vitals@1.0.1`
     */
    getNumber(variable: string): number | undefined;
    /**
     * Gets the value of an environement variable and
     * parses it as a JSON string
     * @param variable Name of the environment variable
     * @returns The value of the environment variable or
     * `undefined` if the key doesn't exist or the value
     * isn't a JSON string
     * @example
     * ```javascript
     * env.getJSON('MY_JSON_STRING'); // { str: 'Hello World!', num: 45, bool: true }
     * env.getJSON('INVALID_JSON_STRING'); // undefined
     * env.getJSON('INEXISTANT_VARIABLE'); // undefined
     * ```
     * @example with TypeScript type parameters
     * ```typescript
     * env.getJSON<{ test: string }>('MY_JSON_STRING'); // { test: 'my super string' }
     * ```
     * @since `nodejs-vitals@1.0.1`
     */
    getJSON<T = any>(variable: string): T | undefined;
  };
  /**
   * Generates a pseudorandom number between
   * a min number (inclusive) and a max number (exclusive)
   * @param min The minimum number possible (inclusive)
   * @param max The maximum number possible (exclusive)
   * @returns The generated number
   * @example
   * ```javascript
   * generateRandomNumberE(0, 10); // 9
   * generateRandomNumberE(0, 10); // 3
   * generateRandomNumberE(0, 10); // 6
   * ```
   * @since `nodejs-vitals@1.0.1`
   */
  export function generateRandomNumberE(min: number, max: number): number;
  /**
   * Generates a pseudorandom number between
   * a min number (inclusive) and a max number (inclusive)
   * @param min The minimum number possible (inclusive)
   * @param max The maximum number possible (inclusive)
   * @returns The generated number
   * @example
   * ```javascript
   * generateRandomNumberI(0, 10); // 2
   * generateRandomNumberI(0, 10); // 10
   * generateRandomNumberI(0, 10); // 5
   * ```
   * @since `nodejs-vitals@1.0.1`
   */
  export function generateRandomNumberI(min: number, max: number): number;
  /**
   * Reads and parses as JSON the given
   * file path synchronously
   * @param path A path to a file
   * @returns An object containing the parsed file
   * @since `nodejs-vitals@1.0.1`
   */
  export function readJSONFileSync<T = any>(path: string): T;
  /**
   * Reads and parses as JSON the given
   * file path asynchronously
   * @param path A path to a file
   * @returns An object containing the parsed file
   * @since `nodejs-vitals@1.0.1`
   */
  export function readJSONFile<T = any>(path: string): Promise<T>;
  /**
   * Wait the given amount of time
   * @param ms Time to wait, in milliseconds
   * @returns A promise that will resolve after
   * the given amount of time
   * @example Exit after 5 seconds
   * ```javascript
   * await wait(5 * 1000);
   * process.exit(0);
   * ```
   * @example Basic console logging
   * ```javascript
   * console.log('Foo');
   * await wait(10 * 1000);
   * console.log('Bar, printed 10 seconds after the first log')
   * ```
   * @since `nodejs-vitals@1.0.1`
   */
  export function wait(ms: number): Promise<void>;
}
