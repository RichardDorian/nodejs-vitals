const { QueueOverflowError } = require('../errors');

class Queue {
  #first;
  #last;

  constructor(maxSize) {
    this.#first = null;
    this.#last = null;
    this.length = 0;
    this.maxSize = maxSize;
  }

  enqueue(value) {
    if (this.isFull()) throw new QueueOverflowError(this.maxSize);

    const node = new QueueNode(value);

    if (this.isEmpty()) {
      this.#first = node;
      this.#last = node;
    } else {
      this.#last.next = node;
      this.#last = node;
    }

    this.length++;
  }

  dequeue() {
    if (!this.#first) return null;

    const value = this.#first.value;
    this.#first = this.#first.next;
    this.length--;

    return value;
  }

  isEmpty() {
    return this.length === 0;
  }

  isFull() {
    return this.maxSize && this.length >= this.maxSize;
  }
}

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = { Queue, QueueNode };
