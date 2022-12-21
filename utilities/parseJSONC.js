const validatePrimitive = require('../validation/validatePrimitive');
const { readFileSync } = require('fs');

const regex = /\/\/.*|\/\*\*(.|\n|\r|\r\n|\n\r)*\*\//g;

module.exports = function parseJSONC(text, reviver) {
  validatePrimitive(text, 'string', 'text');

  for (const match of text.match(regex)) text = text.replace(match, '');

  return JSON.parse(text, reviver);
};

// Adding the .jsonc extensions to node require
require.extensions['.jsonc'] = (m, filename) => {
  const file = readFileSync(filename, 'utf8');

  try {
    m.exports = module.exports(file);
  } catch (err) {
    err.message = filename + ': ' + err.message;
    throw err;
  }
};
