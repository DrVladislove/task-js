const operations = require("./value-of-function.js");
const assert = require("assert");

describe("valueOfFunction", () => {
  it("x > 0", () => {
    assert.equal(operations.valueOfFunction(2), -6);
  });

  it("x == 0", () => {
    assert.equal(operations.valueOfFunction(0), 0);
  });

  it("x < 0", () => {
    assert.equal(operations.valueOfFunction(-3), 5);
  });
});
