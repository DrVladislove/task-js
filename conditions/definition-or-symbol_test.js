const operations = require("./definition-or-symbol.js");
const assert = require("assert");

describe("definition", () => {
  it("Определяет код символа по таблице ASCII правильно", () => {
    assert.equal(operations.definition(66), "B");
  });

  it("Определяет код символа по таблице ASCII правильно", () => {
    assert.equal(operations.definition(64), "@");
  });

  it("Определяет код символа по таблице ASCII правильно", () => {
    assert.equal(operations.definition(126), "~");
  });

  it("Определяет код символа по таблице ASCII правильно", () => {
    assert.equal(operations.definition(77), "M");
  });
});
