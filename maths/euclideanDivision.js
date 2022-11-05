const { validatePrimitive } = require('../validation');

module.exports = function euclideanDivision(a, b) {
  validatePrimitive(a, 'number', 'a');
  validatePrimitive(b, 'number', 'b');

  if (b === 0) throw new Error('"b" must no be equal to 0');

  let q = 0;
  while (a >= b) {
    q++;
    a -= b;
  }

  return { q, r: a };
};
