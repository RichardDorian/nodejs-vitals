const { validatePrimitive } = require('../validation');

module.exports = function solveQuadratic(a, b, c) {
  validatePrimitive(a, 'number', 'a');
  validatePrimitive(b, 'number', 'b');
  validatePrimitive(c, 'number', 'b');

  if (a === 0) throw new Error('"a" must no be equal to 0');

  const discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) return { discriminant };

  if (discriminant === 0)
    return {
      discriminant,
      x: -b / (2 * a),
    };

  const discriminantSqrt = c === 0 ? b : Math.sqrt(discriminant);

  return {
    discriminant,
    x1: (-b - discriminantSqrt) / (2 * a),
    x2: (-b + discriminantSqrt) / (2 * a),
  };
};
