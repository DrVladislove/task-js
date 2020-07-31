const operations = require("./factorial.js");
const assert = require("assert");

describe("factorial", () => {
  it("Правильно находит факториал числа", () => {
    assert.equal(operations.factorial(4), 24);
  });

  it("Правильно находит факториал числа", () => {
    assert.equal(operations.factorial(5), 120);
  });

  it("Правильно находит факториал числа", () => {
    assert.equal(operations.factorial(8), 40320);
  });
});
