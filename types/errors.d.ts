declare module 'nodejs-utilities/errors' {
  export class QueueOverflowError extends Error {
    public constructor(maxSize: number);
  }
}
