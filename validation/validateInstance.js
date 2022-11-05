module.exports = function validateInstance(value, constructor, argumentName) {
  if (value instanceof constructor) return;

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
    `${argumentName} must be an instance of ${constructor.name}. Received ${
      primitive ? 'a type of' : 'an instance of'
    } ${actualType}`
  );
  error.code = 'ERR_INVALID_ARG_TYPE';
  throw error;
};
