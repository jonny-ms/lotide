const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] when given the array: ['ground', 'control', 'to', 'major', 'tom'] and the callback: w => w[0]", () => {
    assert.deepEqual(map(['ground', 'control', 'to', 'major', 'tom'], w => w[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns [2, 4, 6, 8, 10, 14, 20, 28, 34, 36] when given the array: [1, 2, 3, 4, 5, 7, 10, 14, 17, 18] and the callback: n => n * 2", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5, 7, 10, 14, 17, 18], n => n * 2), [2, 4, 6, 8, 10, 14, 20, 28, 34, 36]);
  });
  it("returns [6, 5] when given the array: ['hidden', 'troll'] and the callback: i => i.length", () => {
    assert.deepEqual(map(["hidden", "troll"], i => i.length), [6, 5]);
  });
});