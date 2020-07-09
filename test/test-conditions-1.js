const operations = require("./operations-conditions-1.js");
const assert = require("assert");

it("Правильно определяет условие conditions-task-1", () => {
  assert.equal(operations.greaterNum(5, 10), 10);
});
