const operations = require("./operations-math.js");
const assert = require("assert");

describe("Math operations", function () {
  it("Function finds multiplying 2 and 3 correctly", () => {
    assert.equal(operations.multiply(2, 3), 6);
  });

  it("Function finds dividing 9 and 3 correctly", () => {
    assert.equal(operations.divide(9, 3), 3);
  });

  it("Function finds sum 4 and 3 correctly", () => {
    assert.equal(operations.sum(4, 3), 7);
  });
});
