const assertEqual = function(actual, expected) {
  const affirmativeEmoji = String.fromCodePoint(0x1F60E);
  const negativeEmoji = String.fromCodePoint(0x274C);
  const affirmativeMessage = `${affirmativeEmoji} Assertion Passed: ${actual} === ${expected}`;
  const negativeMessage = `${negativeEmoji} Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected) ? console.log(affirmativeMessage) : console.log(negativeMessage);
};

module.exports = assertEqual;