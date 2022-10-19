const { validatePrimitive } = require('../validation');

module.exports = async function wait(ms) {
  validatePrimitive(ms, 'number', 'ms');

  return new Promise((resolve) => setTimeout(resolve, ms));
};
