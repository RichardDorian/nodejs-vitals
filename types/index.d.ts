/// <reference path="types.d.ts" />

/// <reference path="algorithms.d.ts" />
/// <reference path="errors.d.ts" />
/// <reference path="maths.d.ts" />
/// <reference path="structures.d.ts" />
/// <reference path="utilities.d.ts" />
/// <reference path="validation.d.ts" />

declare module 'nodejs-vitals' {
  import * as err from 'nodejs-vitals/errors';
  export const errors: typeof err;
  export * from 'nodejs-vitals/algorithms';
  export * from 'nodejs-vitals/maths';
  export * from 'nodejs-vitals/structures';
  export * from 'nodejs-vitals/utilities';
  export * from 'nodejs-vitals/validation';
}
