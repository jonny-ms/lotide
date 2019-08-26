const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns [1] when passing the word 'hello' and calling the value of the key 'e'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns [1, 8, 10] when checking the value of the 'e' key in 'hello there!'", () => {
    assert.deepEqual(letterPositions("hello there!").e, [1, 8, 10]);
  });
});