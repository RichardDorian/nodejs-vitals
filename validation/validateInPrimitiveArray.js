const validatePrimitive = require('./validatePrimitive');

module.exports = function validateInPrimitiveArray(
  value,
  type,
  array,
  argumentName
) {
  validatePrimitive(value, type, argumentName);

  if (array.includes(value)) return;

  argumentName = argumentName
    ? `The "${argumentName}" argument`
    : 'The argument';

  const error = new TypeError(
    `${argumentName} must be one of the following values ${array}. Received ${value}`
  );
  error.code = 'ERR_INVALID_ARG_TYPE';
  throw error;
};
