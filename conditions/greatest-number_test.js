const operations = require("./greatest-number.js");
const assert = require("assert");

describe("greaterNum", () => {
  it("Наибольшее число из трех", () => {
    assert.equal(
      operations.greaterNum(20, 23, 15),
      23 + " Наибольшее число из трех"
    );
  });

  it("Наибольшее число из трех", () => {
    assert.equal(
      operations.greaterNum(-10, 0, 1),
      1 + " Наибольшее число из трех"
    );
  });

  it("Наибольшее число из трех", () => {
    assert.equal(
      operations.greaterNum(0, -5, -15),
      0 + " Наибольшее число из трех"
    );
  });
});
