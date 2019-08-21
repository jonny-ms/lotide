const letterPositions = function(sentence) {
  const results = {};
  let position = 0;
  for (const letter of sentence) {
    if (letter) {
      if (results[letter]) {
        results[letter].push(position);
        position += 1;
      } else {
        results[letter] = [position];
        position += 1;
      }
    }
  }
  return results;
};

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

//TEST CODE
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello there!").e, [1, 8, 10]);