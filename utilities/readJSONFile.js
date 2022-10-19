const { readFileSync } = require('fs');
const { readFile } = require('fs/promises');

function readJSONFileSync(path) {
  const raw = readFileSync(path, 'utf8');
  return JSON.parse(raw);
}

async function readJSONFile(path) {
  const raw = await readFile(path, 'utf8');
  return JSON.parse(raw);
}

module.exports = { readJSONFileSync, readJSONFile };
