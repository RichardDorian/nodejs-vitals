const { validatePrimitive } = require('../validation');

function degreesToRadians(x) {
  validatePrimitive(x, 'number', 'x');

  return (x * Math.PI) / 180;
}

function radiansToDegrees(x) {
  validatePrimitive(x, 'number', 'x');

  return (x * 180) / Math.PI;
}

module.exports = { degreesToRadians, radiansToDegrees };
