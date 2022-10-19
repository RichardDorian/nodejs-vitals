function generateRandomNumberE(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomNumberI(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = { generateRandomNumberE, generateRandomNumberI };
