const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CODE
// const assertArraysEqual = function(array1, array2) {
//   const affirmativeEmoji = String.fromCodePoint(0x1F60E);
//   const negativeEmoji = String.fromCodePoint(0x274C);
//   const pass = `${affirmativeEmoji} Assertion Passed: ${array1} === ${array2}`;
//   const fail = `${negativeEmoji} Assertion Failed: ${array1} !== ${array2}`;

//   if (array1.length !== array2.length) {
//     return console.log(fail);
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) return console.log(fail);
//     }
//     return console.log(pass);
//   }
// };

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// const result2 = map(numbers, number => number * 2);
// assertArraysEqual(result2, [2, 4, 6, 8, 10, 14, 20, 28, 34, 36]);

// const arr = ["hidden", "troll"];
// const result3 = map(arr, i => i.length);
// assertArraysEqual(result3, [6, 5]);