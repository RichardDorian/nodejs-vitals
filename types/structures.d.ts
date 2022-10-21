declare module 'nodejs-vitals/structures' {
  export class Queue<T = any> {
    /** Number of items currently waiting in the queue */
    public length: number;
    /** Maximum size of the stack */
    public readonly maxSize?: number;
    /** First item in the queue */
    private first: QueueNode<T>;
    /** Last item in teh queue */
    private last: QueueNode<T>;
    /**
     * Instantiate a new Queue
     * @param maxSize Maximum size of the queue (defaults to unlimited)
     * @example
     * ```javascript
     * // Queue with an unlimited size
     * const unlimitedQueue = new Queue();
     *
     * // Queue with a max size of 10
     * const limitedQueue = new Queue(10);
     *
     * // If you are using TypeScript you can use the type parameter to specify the type of the queue
     * const typedQueue = new Queue<string>();
     * ```
     * @since `nodejs-vitals@1.0.0`
     */
    public constructor(maxSize?: number);
    /**
     * Push a value at the end of the queue
     * @param value Value to add to the queue
     * @since `nodejs-vitals@1.0.0`
     */
    public enqueue(value: T): void;
    /**
     * Removes and returns the first item from the queue
     * @returns The item removed from the queue
     * @since `nodejs-vitals@1.0.0`
     */
    public dequeue(): T | undefined;
    /**
     * Returns true if the queue is empty, false otherwise
     * @returns True if the queue is empty, false otherwise
     * @since `nodejs-vitals@1.0.0`
     */
    public isEmpty(): boolean;
    /**
     * Returns true if the queue is full, false otherwise
     * @returns True if the queue is full, false otherwise
     * @since `nodejs-vitals@1.0.0`
     */
    public isFull(): boolean;
  }
  /**
   * Node class for the Queue
   * @since `nodejs-vitals@1.0.0`
   */
  export class QueueNode<T = any> {
    /** Value stored in the node */
    public value: T;
    /** Next node in the queue */
    public next: QueueNode<T> | undefined;
    /**
     * Instantiate a new QueueNode
     * @param value Value to store in the node
     * @since `nodejs-vitals@1.0.0`
     */
    public constructor(value: T);
  }
  /**
   * Stack data structure
   * @since `nodejs-vitals@1.0.0`
   */
  export class Stack<T = any> {
    /** Number of items currently in the stack */
    public length: number;
    /** Maximum size of the stack */
    public readonly maxSize?: number;
    /** Top item in the stack */
    private first: StackNode<T>;
    /**
     * Instantiate a new Stack
     * @param maxSize Maximum size of the stack (defaults to unlimited)
     * @example
     * ```javascript
     * // Stack with an unlimited size
     * const unlimitedStack = new Stack();
     *
     * // Stack with a max size of 10
     * const limitedStack = new Stack(10);
     *
     * // If you are using TypeScript you can use the type parameter to specify the type of the stack
     * const typedStack = new Queue<string>();
     * @since `nodejs-vitals@1.0.0`
     * ```
     */
    public constructor(maxSize?: number);
    /**
     * Push a value at the top of the stack
     * @param value Value to push onto the stack
     * @since `nodejs-vitals@1.0.0`
     */
    public push(value: T): void;
    /**
     * Removes and returns the top item from the stack
     * @returns The item removed from the stack or `undefined` if empty
     * @since `nodejs-vitals@1.0.0`
     */
    public pop(): T | undefined;
    /**
     * Returns the top item from the stack without removing it
     * @returns The top item from the stack or `undefined` if empty
     * @since `nodejs-vitals@1.0.0`
     */
    public peek(): T | undefined;
    /**
     * Returns true if the stack is empty, false otherwise
     * @returns True if the stack is empty, false otherwise
     * @since `nodejs-vitals@1.0.0`
     */
    public isEmpty(): boolean;
    /**
     * Returns true if the stack is full, false otherwise
     * @returns True if the stack is full, false otherwise
     * @since `nodejs-vitals@1.0.0`
     */
    public isFull(): boolean;
  }
  /**
   * Node class for the Stack
   * @since `nodejs-vitals@1.0.0`
   */
  export class StackNode<T = any> {
    /** Value stored in the node */
    public value: T;
    /** Next node in the stack */
    public next: StackNode<T> | undefined;
    /**
     * Instantiate a new StackNode
     * @param value Value to store in the node
     * @since `nodejs-vitals@1.0.0`
     */
    public constructor(value: T);
  }
}
