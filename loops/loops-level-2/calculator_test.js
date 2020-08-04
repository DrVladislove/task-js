const operations = require("./calculator.js");
const assert = require("assert");

describe("calculator", function () {
  it("Correctly finds sum of elements", function () {
    assert.equal(operations.calculator(2, 2, "+"), 4);
  });

  it("Correctly finds difference of elements", function () {
    assert.equal(operations.calculator(2, 2, "-"), 0);
  });

  it("Correctly finds multiplying of elements", function () {
    assert.equal(operations.calculator(2, 2, "*"), 4);
  });

  it("Correctly finds dividing of elements", function () {
    assert.equal(operations.calculator(2, 2, "/"), 1);
  });

  it("Сannot be divided by zero", function () {
    assert.equal(operations.calculator(2, 0, "/"), "Делить на ноль нельзя!");
  });

  it("Incorrect sign", function () {
    assert.equal(operations.calculator(2, 2, "$"), "Неверно указан знак");
  });
});
