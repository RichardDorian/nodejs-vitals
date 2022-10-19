const { readFileSync } = require('fs');
const { readFile } = require('fs/promises');

const { validatePrimitive } = require('../validation');

function readJSONFileSync(path) {
  validatePrimitive(path, 'string', 'path');

  const raw = readFileSync(path, 'utf8');
  return JSON.parse(raw);
}

async function readJSONFile(path) {
  validatePrimitive(path, 'string', 'path');

  const raw = await readFile(path, 'utf8');
  return JSON.parse(raw);
}

module.exports = { readJSONFileSync, readJSONFile };
