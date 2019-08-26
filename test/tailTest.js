const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("should return [] for ['Lighthouse']", () => {
    assert.deepEqual(tail(["Lighthouse"]), []);
  });
});