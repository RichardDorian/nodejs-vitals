const validatePrimitive = require('./validatePrimitive');

module.exports = function validatePrimitiveArray(array, type, argumentName) {
  argumentName = argumentName
    ? `The "${argumentName}" argument`
    : 'The argument';

  if (!Array.isArray(array)) {
    let actualType = typeof value;
    let primitive = true;
    if (actualType === 'object')
      try {
        actualType = Object.getPrototypeOf(value).constructor.name;
        primitive = false;
      } catch (error) {}

    const error = new TypeError(
      `${argumentName} must be of type ${type}. Received ${
        primitive ? 'a type of' : 'an instance of'
      } ${actualType}`
    );
    error.code = 'ERR_INVALID_ARG_TYPE';
    throw error;
  }

  for (const value of array) {
    validatePrimitive(value, type);
  }
};
