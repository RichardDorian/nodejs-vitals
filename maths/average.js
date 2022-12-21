const validatePrimitiveArray = require('../validation/validatePrimitiveArray');
const sum = require('./sum');

module.exports = function average(...array) {
  validatePrimitiveArray(array, 'number', 'array');

  return sum(Symbol.for('SkipValidation'), ...array) / array.length;
};
