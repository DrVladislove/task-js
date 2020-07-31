const operations = require("./three-numbers.js");
const assert = require("assert");

describe("numbers", () => {
  it("Правильно определяется среднее число", () => {
    assert.equal(operations.numbers(572, 234, 624), 572 + " Среднее число");
  });

  it("Правильно определяется среднее число", () => {
    assert.equal(operations.numbers(-3, 0, 2), 0 + " Среднее число");
  });

  it("Правильно определяется среднее число", () => {
    assert.equal(operations.numbers(1, 0, 3), 1 + " Среднее число");
  });
});
