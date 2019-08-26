const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it("returns the key if given an object and a value", () => {
    let bestTVShowsByGenre = {
      sciFi: ["The Expanse", "Dune"],
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined if given an object and a value that doesn't exist", () => {
    let bestTVShowsByGenre = {
      sciFi: ["The Expanse", "Dune"],
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("returns the key if given an object and a value that lives in said key's associated array", () => {
    let bestTVShowsByGenre = {
      sciFi: ["The Expanse", "Dune"],
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  });
});