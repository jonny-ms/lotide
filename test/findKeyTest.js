const assert = require("chai").assert;
const findKey = require("../findKey");

describe("#findKey", () => {
  it("returns the first key for which the callback is truthy when given an object and a callback", () => {
    let restaurants = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.deepEqual(findKey(restaurants, x => x.stars === 2), "noma");
  });
  it("returns the first key for which the callback is truthy when given an object and a callback", () => {
    let restaurants = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.deepEqual(findKey(restaurants, x => x.stars === 1), "Blue Hill");
  });
  it("returns undefined if no key is found key", () => {
    let restaurants = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.deepEqual(findKey(restaurants, x => x.stars === 0), undefined);
  });
});