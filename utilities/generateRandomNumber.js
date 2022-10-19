const { validatePrimitive } = require('../validation');

function generateRandomNumberE(min, max) {
  validatePrimitive(min, 'number', 'min');
  validatePrimitive(max, 'number', 'max');

  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomNumberI(min, max) {
  validatePrimitive(min, 'number', 'min');
  validatePrimitive(max, 'number', 'max');

  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = { generateRandomNumberE, generateRandomNumberI };
