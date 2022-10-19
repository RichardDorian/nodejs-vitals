module.exports = function binarySearch(array, key) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== key && start <= end) {
    if (key < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return array[middle] === key ? middle : -1;
};
