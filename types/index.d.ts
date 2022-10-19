/// <reference path="algorithms.d.ts" />
/// <reference path="errors.d.ts" />
/// <reference path="structures.d.ts" />

declare module 'nodejs-vitals' {
  import * as err from 'nodejs-vitals/errors';
  export const errors = err;
  export * from 'nodejs-vitals/algorithms';
  export * from 'nodejs-vitals/structures';
}
