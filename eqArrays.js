const assertEqual = function(actual, expected) {
  const affirmativeEmoji = String.fromCodePoint(0x1F60E);
  const negativeEmoji = String.fromCodePoint(0x274C);
  const affirmativeMessage = `${affirmativeEmoji} Assertion Passed: ${actual} === ${expected}`;
  const negativeMessage = `${negativeEmoji} Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected) ? console.log(affirmativeMessage) : console.log(negativeMessage);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);