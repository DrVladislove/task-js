const operations = require("./operations-loops-1.js");
const assert = require("assert");

it("Правильно находит Нечетные loops-task-1", () => {
  assert.equal(operations.numberGenerator(), "Нечетное");
});
it("Правильно находит Четные loops-task-1", () => {
  assert.equal(operations.numberGenerator(), "Четное");
});
