const assertEqual = function(actual, expected) {
  const affirmativeEmoji = String.fromCodePoint(0x1F60E);
  const negativeEmoji = String.fromCodePoint(0x274C);
  const affirmativeMessage = `${affirmativeEmoji} Assertion Passed: ${actual} === ${expected}`;
  const negativeMessage = `${negativeEmoji} Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected) ? console.log(affirmativeMessage) : console.log(negativeMessage);
};

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

//TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);