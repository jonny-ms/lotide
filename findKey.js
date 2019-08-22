const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) return key;
  }
};


//TEST CODE

// const assertEqual = function(actual, expected) {
//   const affirmativeEmoji = String.fromCodePoint(0x1F60E);
//   const negativeEmoji = String.fromCodePoint(0x274C);
//   const affirmativeMessage = `${affirmativeEmoji} Assertion Passed: ${actual} === ${expected}`;
//   const negativeMessage = `${negativeEmoji} Assertion Failed: ${actual} !== ${expected}`;
//   return (actual === expected) ? console.log(affirmativeMessage) : console.log(negativeMessage);
// };
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 1), "Blue Hill");