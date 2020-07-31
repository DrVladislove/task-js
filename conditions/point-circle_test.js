const operations = require("./point-circle.js");
const assert = require("assert");

describe("pointCircle", () => {
  it("Точка принадлежит кругу", () => {
    assert.equal(operations.pointCircle(-1, -2, 5), "Точка принадлежит кругу");
  });
  it("Точка лежит за пределами круга", () => {
    assert.equal(
      operations.pointCircle(10, -3, 5),
      "Точка лежит за пределами круга"
    );
  });
});
