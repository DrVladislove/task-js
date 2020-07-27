const operations = require("./operations-conditions-2.js");

it("Выдает правильный язык conditions-task-2", () => {
  assert.equal(operations.helloWorld("en"), "Hello");
});
