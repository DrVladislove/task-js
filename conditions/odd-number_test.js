const operations = require("./odd-number.js");
const assert = require("assert");

describe("oddNumber", () => {
  it("Число нечетное", () => {
    assert.equal(operations.oddNumber(), "Нечетное");
  });
});
