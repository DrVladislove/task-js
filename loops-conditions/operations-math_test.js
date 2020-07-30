const operations = require("./operations-math.js");
const assert = require("assert");

describe("Математические операции", function () {
  it("Правильно находит произведение 2 и 3", () => {
    assert.equal(operations.multiply(2, 3), 6);
  });

  it("Правильно производит деление 9 на 3", () => {
    assert.equal(operations.divide(9, 3), 3);
  });

  it("Правильно находит сумму 4 и 3", () => {
    assert.equal(operations.sum(4, 3), 7);
  });
});
