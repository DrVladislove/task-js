const operations = require("./sum-multiply.js");
const assert = require("assert");

describe("sumMul", () => {
  it("Сумма цифр введенного натурального числа", () => {
    assert.equal(operations.sumMul(456, "sum"), 15);
  });

  it("Произведение цифр введенного натурального числа", () => {
    assert.equal(operations.sumMul(456, "mul"), 120);
  });
});
