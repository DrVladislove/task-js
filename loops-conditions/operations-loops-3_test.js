const operations = require("./operations-loops-3");
const assert = require("assert");

describe("checkAssignGrade", function () {
  it("Оценка результатов выполнена правильно loops-task-3", () => {
    assert.equal(operations.checkAssignGrade(), "mark is 5");
  });
});
