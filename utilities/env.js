const process = require('process');

function getString(variable) {
  return process.env[variable];
}

function getNumber(variable) {
  const raw = process.env[variable];
  const parsed = Number(raw);
  if (!raw || isNaN(parsed)) return;
  return parsed;
}

function getJSON(variable) {
  const raw = process.env[variable];
  if (!raw) return;

  try {
    return JSON.parse(variable);
  } catch (error) {
    if (
      error.name === 'SyntaxError' &&
      error.message.endsWith('is not valid JSON')
    )
      return;
    // Only throwing if it is not a JSON parse error
    throw error;
  }
}

module.exports = { getString, getNumber, getJSON };
