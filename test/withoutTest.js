const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("returns ['1', '2'] if given the two arrays: ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });
  it("returns [2, 3] if given the two arrays: [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
});