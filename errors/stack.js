module.exports = class StackOverflowError extends Error {
  constructor(maxSize) {
    super(`Stack is full (max size is ${maxSize})`);
    this.name = Object.getPrototypeOf(this).constructor.name;
    this.maxSize = maxSize;
  }
};
