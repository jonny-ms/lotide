const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("returns { h: 1, e: 1, l: 2, o: 1 } for 'hello'", () => {
    assert.deepEqual(countLetters('hello'), { h: 1, e: 1, l: 2, o: 1 });
  });
  it("returns 4 when passed the string 'lighthouse in the house' and the key 'h' is called", () => {
    assert.deepEqual(countLetters('lighthouse in the house').h, 4);
  });
});