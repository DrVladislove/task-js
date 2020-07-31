const operations = require("./highest-number.js");
const assert = require("assert");

describe("highestNumber", () => {
  it("Правильно находит наибольшую цифру числа", () => {
    assert.equal(operations.highestNumber(456985), 8);
  });

  it("Правильно находит наибольшую цифру числа", () => {
    assert.equal(operations.highestNumber(764580), 8);
  });
});
