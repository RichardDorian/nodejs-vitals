module.exports = function isArrayOf(type, array) {
  return array.every((value) => typeof value === type);
};
