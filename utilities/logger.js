const validateInPrimitiveArray = require('../validation/validateInPrimitiveArray');
const validatePrimitive = require('../validation/validatePrimitive');
const validateObject = require('../validation/validateObject');
const validateInstance = require('../validation/validateInstance');

const OriginalLogMethods = Object.freeze({
  log: console.log,
  debug: console.debug,
  info: console.info,
  warn: console.warn,
  error: console.error,
});

const LoggerOptionsValidationScheme = {
  'group?': 'string',
  'target?': ['string', 'node', 'broswer'],
  'showMilliseconds?': 'boolean',
  'color?': 'string',
  'timeDelimiter?': 'string',
};

module.exports = class Logger {
  #options;
  #prefix;

  constructor(name = '', options = {}) {
    validatePrimitive(name, 'string', 'name');
    validateObject(options, LoggerOptionsValidationScheme, 'options');

    this.name = name;
    this.#options = options;
    this.#prefix = this.#getPrefix();
  }

  log(...args) {
    this.#process('log', ...args);
  }

  debug(...args) {
    this.#process('debug', ...args);
  }

  info(...args) {
    this.#process('info', ...args);
  }

  warn(...args) {
    this.#process('warn', ...args);
  }

  error(...args) {
    this.#process('error', ...args);
  }

  #process(level, ...args) {
    OriginalLogMethods[level](
      this.#getTime(),
      `[${level.toUpperCase()}]`,
      ...this.#prefix,
      ...args
    );
  }

  #getPrefix() {
    if (!this.name) return [];

    const prefix = [
      `[${this.name}${this.#options.group ? `:${this.#options.group}` : ''}]`,
    ];

    if (this.#options.target === 'node') {
      prefix[0] = this.#options.color + prefix[0] + Logger.Colors.RESET;
    }

    if (this.#options.target === 'browser') {
      prefix[0] = '%c' + prefix[0];
      prefix.push(`color: ${this.#options.color}`);
    }

    return prefix;
  }

  #getTime() {
    const date = new Date();

    function pad(num, size) {
      num = num.toString();
      while (num.length < size) num = '0' + num;
      return num;
    }

    return `${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}:${pad(
      date.getSeconds(),
      2
    )}${
      this.#options.showMilliseconds ? `:${pad(date.getMilliseconds(), 3)}` : ''
    } ${this.#options.timeDelimiter ?? '>'}`;
  }

  static OriginalLogMethods = OriginalLogMethods;

  static Colors = Object.freeze({
    RESET: '\x1b[0m',
    BRIGHT: '\x1b[1m',
    DIM: '\x1b[2m',
    UNDERSCORE: '\x1b[4m',
    BlINK: '\x1b[5m',
    REVERSE: '\x1b[7m',
    HIDDEN: '\x1b[8m',
    FG_BLACK: '\x1b[30m',
    FG_RED: '\x1b[31m',
    FG_GREEN: '\x1b[32m',
    FG_YELLOW: '\x1b[33m',
    FG_BlUE: '\x1b[34m',
    FG_MAGENTA: '\x1b[35m',
    FG_CYAN: '\x1b[36m',
    FG_WHITE: '\x1b[37m',
    BG_BLACK: '\x1b[40m',
    BG_RED: '\x1b[41m',
    BG_GREEN: '\x1b[42m',
    BG_YELLOW: '\x1b[43m',
    BG_BlUE: '\x1b[44m',
    BG_MAGENTA: '\x1b[45m',
    BG_CYAN: '\x1b[46m',
    BG_WHITE: '\x1b[47m',
  });

  static overrideOriginalLogMethods(arg) {
    if (typeof arg === 'string') {
      validateInPrimitiveArray(arg, 'string', ['node', 'browser'], 'target');
      arg = new Logger(undefined, { target: arg });
    }

    validateInstance(arg, Logger, 'logger');

    for (const type of Object.keys(OriginalLogMethods))
      console[type] = (...args) => arg[type](...args);
  }
};
