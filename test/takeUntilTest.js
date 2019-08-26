const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] if given the array '[1, 2, 5, 7, 2, -1, 2, 4, 5]' and the callback function 'x => x < 0'", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("returns ['I\'ve', 'been', 'to', 'Hollywood'] if given the array '['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'] and the callback function 'x => x === ',''", () => {
    assert.deepEqual(takeUntil(['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'], x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });
});