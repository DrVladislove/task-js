const operations = require("./operations-conditions-1.js");
const assert = require("assert");

describe("greaterNum", () => {
  it("returns the first argument when it is bigger than a second one", () => {
    assert.equal(operations.greaterNum(0, 1), 1);
  });

  it("returns the first argument when it is bigger than a second one", () => {
    assert.equal(operations.greaterNum(1, 1), 1);
  });

  it("returns the first argument when it is bigger than a second one", () => {
    assert.equal(operations.greaterNum(-1, 0), 0);
  });

  it("returns the first argument when it is bigger than a second one", () => {
    assert.equal(operations.greaterNum(-2, 2), 2);
  });
});
