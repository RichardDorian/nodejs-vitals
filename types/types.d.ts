// This file declares type
// definitions that can be
// use everywhere in the project,
// no need to import them.

/**
 * All JavaScript primitives
 * @since `nodejs-vitals@1.0.3`
 */
declare type Types = {
  bigint: bigint;
  boolean: boolean;
  function: Function;
  number: number;
  object: Object;
  string: string;
  symbol: Symbol;
  undefined: undefined;
};

/**
 * A falsy (sometimes written falsey) value is a value that is
 * considered false when encountered in a Boolean context.
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * @since `nodejs-vitals@1.0.3`
 */
declare type Falsy = false | 0 | -0 | 0n | '' | null | undefined;

/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing
 * @since `nodejs-vitals@1.0.3`
 */
declare type Nullish = null | undefined;

/** @since `nodejs-vitals@1.0.3` */
declare type ConstructorResolvable = new () => any;
