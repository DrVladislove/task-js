const operations = require("./check-dividing.js");
const assert = require("assert");

describe("checkDividing", () => {
  it("Число делится нацело", () => {
    assert.equal(operations.checkDividing(-8, 4), -2);
  });

  it("Число делится с остатком", () => {
    assert.equal(operations.checkDividing(9, 4), 1);
  });

  it("Число делится нацело", () => {
    assert.equal(operations.checkDividing(15, 3), 5);
  });

  it("Число делится нацело", () => {
    assert.equal(operations.checkDividing(0, 2), 0);
  });
});
