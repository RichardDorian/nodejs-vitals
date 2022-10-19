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
  export function isArrayOf<T extends keyof Types>(
    type: T,
    arr: unknown
  ): arr is Types[T][];
}
