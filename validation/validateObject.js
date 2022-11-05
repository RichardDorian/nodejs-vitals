const validateInPrimitiveArray = require('./validateInPrimitiveArray');

const validateFunctions = {
  validatePrimitive: require('./validatePrimitive'),
  validateInstance: require('./validateInstance'),
};

module.exports = function validateObject(object, scheme, objectName = '@') {
  validateFunctions.validatePrimitive(object, 'object', 'object');

  for (const _field of Object.keys(scheme)) {
    const required = !_field.endsWith('?');
    const field = required ? _field : _field.replace('?', '');
    const argumentName = `${objectName}.${field}`;

    let shouldCheck = true;
    if (!required && !Object.prototype.hasOwnProperty.call(object, field))
      shouldCheck = false;

    if (!shouldCheck) continue;

    const fieldTypeOf = typeof scheme[_field];

    if (Array.isArray(scheme[_field])) {
      const arrayType = scheme[_field][0];
      const values = scheme[_field].slice(1);
      validateInPrimitiveArray(object[field], arrayType, values, argumentName);
      continue;
    }

    if (fieldTypeOf === 'object') {
      validateFunctions.validatePrimitive(
        object[field],
        'object',
        argumentName
      );
      validateObject(object[field], scheme[_field], argumentName);
      continue;
    }

    const validateFunction =
      fieldTypeOf === 'string'
        ? 'validatePrimitive'
        : fieldTypeOf === 'function'
        ? 'validateInstance'
        : 'INVALID';

    if (validateFunction === 'INVALID')
      throw new TypeError(
        `Invalid scheme: the value of a ${_field} must be a string (representing a primitive) or a constructor. Recevied ${fieldTypeOf}`
      );

    validateFunctions[validateFunction](
      object[field],
      scheme[_field],
      argumentName
    );
  }
};
