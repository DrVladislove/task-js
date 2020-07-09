const operations = require("./operations-conditions-2.js");
const assert = require("assert");

it("Выдает правильный язык conditions-task-2", () => {
  assert.equal(operations.helloWorld("en"), "Hello");
});
