declare module 'nodejs-vitals/utilities' {
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
