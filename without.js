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

const without = function(source, itemsToRemove) {
  return source.filter((item) => !itemsToRemove.includes(item));
};

// //TEST CODE
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 3, 12, 4, "7", 1], [1, "7", 12]), [3, 4]);
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);