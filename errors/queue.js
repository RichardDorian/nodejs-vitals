module.exports = class QueueOverflowError extends Error {
  constructor(maxSize) {
    super(`Queue is full (max size is ${maxSize})`);
    this.name = Object.getPrototypeOf(this).constructor.name;
    this.maxSize = maxSize;
  }
};
