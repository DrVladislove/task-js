const operations = require("./year.js");
const assert = require("assert");

describe("year", () => {
  it("Правильно определяет невисокосный год", () => {
    assert.equal(operations.year(1995), " Невисокосный");
  });

  it("Правильно определяет высокосный год", () => {
    assert.equal(operations.year(2020), " Высокосный");
  });
});
