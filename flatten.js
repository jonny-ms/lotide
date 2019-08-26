const flatten = function(arr) {
  let output = [];
  arr.forEach(function(item) {
    if (!Array.isArray(item)) {
      output.push(item);
    } else {
     flatten(item);
    }
  });
  return output;
};
console.log(flatten([2, [3, 4], [2, 3]]))
module.exports = flatten;