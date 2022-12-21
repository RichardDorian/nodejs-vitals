const validateInstance = require('../validation/validateInstance');
const validatePrimitiveArray = require('../validation/validatePrimitiveArray');

module.exports = function getClosestColor(color, colors) {
  validatePrimitiveArray(color, 'number', 'color');
  validateInstance(colors, Array, 'colors');
  if (colors.length === 0)
    throw new Error('colors array must contain at least one color');
  for (const color of colors) validatePrimitiveArray(color, 'number', 'colors');

  let closest;
  for (const _color of colors) {
    const [c1X, c1Y, c1Z] = color;
    const [c2X, c2Y, c2Z] = _color;

    const distance = Math.sqrt(
      Math.pow(c2X - c1X, 2) + Math.pow(c2Y - c1Y, 2) + Math.pow(c2Z - c1Z, 2)
    );
    if (!closest || distance < closest[3]) closest = [c2X, c2Y, c2Z, distance];
  }

  closest?.pop();
  return closest;
};
