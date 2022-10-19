declare module 'nodejs-vitals/utilities' {
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
   * @since `nodejs-utilities@1.0.1`
   */
  export function wait(ms: number): Promise<void>;
  /**
   * Reads and parses as JSON the given
   * file path synchronously
   * @param path A path to a file
   * @returns An object containing the parsed file
   * @since `nodejs-utilities@1.0.1`
   */
  export function readJSONFileSync<T = any>(path: string): T;
  /**
   * Reads and parses as JSON the given
   * file path asynchronously
   * @param path A path to a file
   * @returns An object containing the parsed file
   * @since `nodejs-utilities@1.0.1`
   */
  export function readJSONFile<T = any>(path: string): Promise<T>;
}
