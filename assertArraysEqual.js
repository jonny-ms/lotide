const eqArrays = require("./eqArrays")

const assertArraysEqual = function(array1, array2) {
  const affirmativeEmoji = String.fromCodePoint(0x1F60E);
  const negativeEmoji = String.fromCodePoint(0x274C);
  const pass = `${affirmativeEmoji} Assertion Passed: ${array1} === ${array2}`;
  const fail = `${negativeEmoji} Assertion Failed: ${array1} !== ${array2}`;
  if (eqArrays(array1, array2)) console.log(pass);
  else console.log(fail);
};

module.exports = assertArraysEqual;