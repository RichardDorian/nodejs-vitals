const { isPrimitive } = require('./primitives');

module.exports = function validatePrimitive(value, type, argumentName) {
  if (!isPrimitive(type))
    throw new TypeError(
      `The "type" argument must be a string representing a primitive. Received ${type}`
    );

  if (typeof value === type) return;

  argumentName = argumentName
    ? `The "${argumentName}" argument`
    : 'The argument';

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
};
