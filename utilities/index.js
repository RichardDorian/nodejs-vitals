module.exports = {
  env: require('./env'),
  ...require('./generateRandomNumber'),
  ...require('./readJSONFile'),
  wait: require('./wait'),
};
