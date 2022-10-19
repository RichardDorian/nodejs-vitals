/// <reference path="algorithms.d.ts" />
/// <reference path="errors.d.ts" />
/// <reference path="structures.d.ts" />

declare module 'nodejs-utilities' {
  import * as err from 'nodejs-utilities/errors';
  export const errors = err;
  export * from 'nodejs-utilities/algorithms';
  export * from 'nodejs-utilities/structures';
}
