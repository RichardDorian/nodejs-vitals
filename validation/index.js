module.exports = {
  isArrayOf: require('./isArrayOf'),
  ...require('./primitives'),
  validateInPrimitiveArray: require('./validateInPrimitiveArray'),
  validateInstance: require('./validateInstance'),
  validateObject: require('./validateObject'),
  validatePrimitive: require('./validatePrimitive'),
};
