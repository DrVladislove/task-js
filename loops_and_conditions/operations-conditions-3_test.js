const operations = require("./operations-conditions-3.js");
const assert = require("assert");

describe("assignGrade", function () {
  it("Function puts mark correctly (4)", () => {
    assert.equal(operations.assignGrade(62), "mark is 4");
  });

  it("Function puts mark correctly (5)", () => {
    assert.equal(operations.assignGrade(81), "mark is 5");
  });

  it("Function puts mark correctly (3)", () => {
    assert.equal(operations.assignGrade(57), "mark is 3");
  });

  it("Function puts mark correctly (2)", () => {
    assert.equal(operations.assignGrade(35), "mark is 2");
  });

  it("Function puts mark correctly (1)", () => {
    assert.equal(operations.assignGrade(15), "mark is 1");
  });
});
