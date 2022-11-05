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
     * @since `nodejs-vitals@1.0.2`
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
     * @since `nodejs-vitals@1.0.2`
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
     * @since `nodejs-vitals@1.0.2`
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
  export class Logger {
    /**
     * Name of this logger, the name is showed in the log
     * @since `nodejs-vitals@1.0.2`
     */
    public readonly name: string;
    /**
     * Options passed to this instance
     * @since `nodejs-vitals@1.0.2`
     */
    readonly #options: LoggerOptions;
    /**
     * `#prefix` is an array that will prefix every logs
     * @since `nodejs-vitals@1.0.2`
     */
    readonly #prefix: string[];
    /**
     * Instanciate a new `Logger`
     * @param name Name of the logger
     * @param options Options to modify the behavior of the logger
     * @example
     * ```javascript
     * const logger = new Logger('App');
     * logger.info('Logger successfuly created!');
     * ```
     * @since `nodejs-vitals@1.0.2`
     */
    public constructor(name?: string, options?: LoggerOptions);
    public log(...args: any[]): void;
    public debug(...args: any[]): void;
    public info(...args: any[]): void;
    public warn(...args: any[]): void;
    public error(...args: any[]): void;
    /**
     * Processes the log call
     * @param level Level of the log
     * @param args Data to pass to the log method
     * @since `nodejs-vitals@1.0.2`
     */
    #process(level: string, ...args: any[]): void;
    /**
     * Generates the prefix for this logger
     * @since `nodejs-vitals@1.0.2`
     */
    #getPrefix(): string[];
    /**
     * Gets the current time in a displayable format
     * @since `nodejs-vitals@1.0.2`
     */
    #getTime(): string;
    /**
     * Original methods of the `console` object
     * @since `nodejs-vitals@1.0.2`
     */
    public static readonly OriginalLogMethods: {
      log: (...data: any[]) => void;
      debug: (...data: any[]) => void;
      info: (...data: any[]) => void;
      warn: (...data: any[]) => void;
      error: (...data: any[]) => void;
    };
    /**
     * Overrides the default log methods of
     * the `console` object and replaces them
     * with the methods of the provided logger
     * @param logger Logger to use
     * @example
     * ```javascript
     * const logger = new Logger('App');
     * overrideOriginalLogMethods(logger);
     *
     * console.log('Hello World!');
     * // Same as
     * logger.log('Hello World!');
     * ```
     * @since `nodejs-vitals@1.0.2`
     */
    public static overrideOriginalLogMethods(logger?: Logger): void;
    /**
     * Overrides the default log methods of
     * the `console` object and replaces them
     * with a newly created logger. The logger
     * is created with the given target.
     * @param target Target type (Defaults to `node`)
     * @example
     * ```javascript
     * const logger = new Logger('App');
     * overrideOriginalLogMethods(logger);
     *
     * console.log('Hello World!');
     * // Same as
     * logger.log('Hello World!');
     * ```
     * @since `nodejs-vitals@1.0.2`
     */
    public static overrideOriginalLogMethods(
      target?: LoggerOptions['target']
    ): void;
    public static overrideOriginalLogMethods(
      arg?: Logger | LoggerOptions['target']
    ): void;
  }
  export namespace Logger {
    /**
     * Enumeration of the colors that
     * can be used inside a terminal
     * @since `nodejs-vitals@1.0.2`
     */
    enum Colors {
      RESET,
      BRIGHT,
      DIM,
      UNDERSCORE,
      BlINK,
      REVERSE,
      HIDDEN,
      FG_BLACK,
      FG_RED,
      FG_GREEN,
      FG_YELLOW,
      FG_BlUE,
      FG_MAGENTA,
      FG_CYAN,
      FG_WHITE,
      BG_BLACK,
      BG_RED,
      BG_GREEN,
      BG_YELLOW,
      BG_BlUE,
      BG_MAGENTA,
      BG_CYAN,
      BG_WHITE,
    }
  }
  /**
   * Options you can pass to a `Logger`
   * to change its behavior
   * @since `nodejs-vitals@1.0.2`
   */
  export interface LoggerOptions {
    /**
     * The group is a string that will
     * be added next to the logger's name
     * in a log
     * @example
     * ```bash
     * # Without
     * 21:01:55:796 > [INFO] [App] Hello World!
     *
     * # With the group
     * 21:01:55:796 > [INFO] [App:GroupHere] Hello World!
     * ```
     * @since `nodejs-vitals@1.0.2`
     */
    group?: string;
    /**
     * Defines in what environment
     * this logger will be used.
     * Could be a `browser` or a `node`
     * environment.
     * @since `nodejs-vitals@1.0.2`
     */
    target?: 'node' | 'browser';
    /**
     * Whether or not to show
     * milliseconds in the time
     * part of the log
     * @example
     * ```bash
     * # Without
     * 22:42:18 > [INFO] [App] test
     *
     * # With
     * 22:42:18:561 > [INFO] [App] test
     * ```
     * @since `nodejs-vitals@1.0.2`
     */
    showMilliseconds?: boolean;
    /**
     * The color that will be used in the
     * name. In `node` environment you can
     * use the `Colors` enum (static field
     * of the `Logger` class). In a `browser`
     * environment you can pass any css color.
     * @example
     * ```javascript
     * const nodeLogger = new Logger({
     *   target: 'node',
     *   color: Logger.Colors.FG_BLUE
     * });
     *
     * const browserLogger = new Logger({
     *   target: 'browser',
     *   color: '#fe62ea'
     * })
     * ```
     * @since `nodejs-vitals@1.0.2`
     */
    color?: string | Logger.Colors;
    /**
     * A string that will be added after
     * the time in the log. Defaults to `>`.
     * @example
     * ```bash
     * # Without (defaults to '>')
     * 22:49:14 > [INFO] [App] test
     *
     * # With (timeDelimiter set to '-')
     * 22:49:14 - [INFO] [App] test
     * ```
     * @since `nodejs-vitals@1.0.2`
     */
    timeDelimiter?: string;
  }
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
