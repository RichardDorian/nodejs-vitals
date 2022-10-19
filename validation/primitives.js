const Primitives = Object.freeze({
  BIGINT: 'bigint',
  BOOLEAN: 'boolean',
  FUNCTION: 'function',
  NUMBER: 'number',
  OBJECT: 'object',
  STRING: 'string',
  SYMBOL: 'symbol',
  UNDEFINED: 'undefined',
});

const primitives = Object.values(Primitives);

function isPrimitive(value) {
  return primitives.includes(value);
}

module.exports = { Primitives, isPrimitive };
