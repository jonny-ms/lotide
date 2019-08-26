const flatten = function(arr) {
  let output = [];
  arr.forEach(function(item) {
    if (!Array.isArray(item)) {
      output.push(item);
    } else {
     return output.push(...flatten(item));
    }
  });
  return output;
};

module.exports = flatten;