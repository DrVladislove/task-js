const operations = require("./operations-conditions-3.js");
const assert = require("assert");
it("Правильно определяет оценки conditions-task-3", () => {
  assert.equal(operations.assignGrade(62, 75), "mark is 4");
});
