const findKeyByValue = function(obj, value) {
  for (const keys in obj) {
    if (obj[keys].includes(value)) {
      return keys;
    }
  }
};

module.exports = findKeyByValue;