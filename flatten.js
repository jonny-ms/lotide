const assertArraysEqual = function(array1, array2) {
  const affirmativeEmoji = String.fromCodePoint(0x1F60E);
  const negativeEmoji = String.fromCodePoint(0x274C);
  const pass = `${affirmativeEmoji} Assertion Passed: ${array1} === ${array2}`;
  const fail = `${negativeEmoji} Assertion Failed: ${array1} !== ${array2}`;

  if (array1.length !== array2.length) {
    return console.log(fail);
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return console.log(fail);
    }
    return console.log(pass);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
    return true;
  }
};

const flatten = function(arr) {
  let output = [];
  arr.forEach(function(item) {
    if (!Array.isArray(item)) {
      output.push(item);
    } else {
      return flatten(item);
    }
  });
  return output;
};

// TEST CODE
// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([1,[ 2, [3, [4]], 5], [6]]));