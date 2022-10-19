declare module 'nodejs-vitals/errors' {
  export class QueueOverflowError extends Error {
    public constructor(maxSize: number);
  }
}
