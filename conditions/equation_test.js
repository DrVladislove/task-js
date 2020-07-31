const operations = require("./equation.js");
const assert = require("assert");

describe("equation", () => {
  it("Два корня уравнения", () => {
    assert.equal(
      operations.equation(1, 2, -3),
      "Первый корень = " + 1 + "; Второй корень = " + -3
    );
  });

  it("Один корень уравнения", () => {
    assert.equal(operations.equation(1, 6, 9), "Корень = " + -3);
  });

  it("Корней нет", () => {
    assert.equal(operations.equation(1, 2, 17), "Корней нет");
  });
});
