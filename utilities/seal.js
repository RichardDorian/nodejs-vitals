const validatePrimitive = require('../validation/validatePrimitive');

module.exports = function Seal(constructor) {
  validatePrimitive(constructor, 'function', 'constructor');

  Object.seal(constructor);
  Object.seal(constructor.prototype);
};
