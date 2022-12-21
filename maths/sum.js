const validatePrimitiveArray = require('../validation/validatePrimitiveArray');

module.exports = function sum(...array) {
  // If the first item of the array is a `SkipValidation`
  // symbol then we don't execute the validation step.
  // This is internally used when other functions are
  // already executing the validation step.
  if (array[0] !== Symbol.for('SkipValidation'))
    validatePrimitiveArray(array, 'number', 'array');
  else array.shift();

  return array.reduce((accumulator, number) => accumulator + number);
};
