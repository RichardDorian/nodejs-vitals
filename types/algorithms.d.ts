declare module 'nodejs-utilities/algorithms' {
  /**
   * In computer science, binary search, also known as half-interval
   * search, logarithmic search, or binary chop, is a search algorithm
   * that finds the position of a target value within a sorted array.
   * Binary search compares the target value to the middle element
   * of the array. [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
   *
   * Time complexity:
   * - `Ω(1)`
   * - `O(log n)`
   * @param array Sorted array to search in
   * @param key The key to search for
   * @returns The index of the key if found, `-1` otherwise
   * @example In an sorted array of numbers
   * ```javascript
   * // Sorted array of numbers
   * const arr = [ 2, 4, 8, 16, 32, 64, 128 ];
   *
   * binarySearch(arr, 8); // 2
   * binarySearch(arr, 16); // 3
   * binarySearch(arr, 256); // -1
   * ```
   * @example In a sorted array of strings
   * ```javascript
   * const arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ];
   * binarySearch(arr, 'c'); // 2
   * binarySearch(arr, 'z'); // -1
   * ```
   * @since `nodejs-utilities@1.0.0`
   */
  export function binarySearch<T = any>(array: T[], key: T): number;
  /**
   * In computer science, selection sort is an in-place comparison
   * sorting algorithm. It has an O(n²) time complexity, which makes
   * it inefficient on large lists, and generally performs worse
   * than the similar insertion sort. [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
   *
   * Time complexity:
   * - `Θ(n²)`
   * @param array The array to sort
   * @returns The sorted array
   * @example Unsorted array of numbers
   * ```javascript
   * const arr = [ 9, 7, 2, 6, 4, 42 ];
   * selectionSort(arr); // [ 2, 4, 6, 7, 9, 42 ]
   * ```
   * @example Unsorted array of strings
   * ```javascript
   * const arr = [ 'b', 'y', 'q', 'k' ];
   * selectionSort(arr); // [ 'b', 'k', 'q', 'y' ]
   * ```
   * @since `nodejs-utilities@1.0.0`
   */
  export function selectionSort<T = any>(array: T[]): T[];
}
