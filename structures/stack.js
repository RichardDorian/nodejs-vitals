const { StackOverflowError } = require('../errors');

class Stack {
  #first;

  constructor(maxSize) {
    this.#first = null;
    this.length = 0;
    this.maxSize = maxSize;
  }

  push(value) {
    if (this.isFull()) throw new StackOverflowError(this.maxSize);

    const node = new StackNode(value);
    node.next = this.#first;
    this.#first = node;
    this.length++;
  }

  pop() {
    if (!this.#first) return null;

    const value = this.#first.value;
    this.#first = this.#first.next;
    this.length--;
    return value;
  }

  peek() {
    if (!this.#first) return null;
    return this.#first.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  isFull() {
    return this.maxSize && this.length >= this.maxSize;
  }
}

class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = { Stack, StackNode };
