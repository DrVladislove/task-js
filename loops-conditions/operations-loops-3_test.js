const operations = require("./operations-loops-3");
const assert = require("assert");

describe("checkAssignGrade", function () {
  it("Marks were put correctly  ", () => {
    assert.equal(operations.checkAssignGrade(), "mark is 5");
  });
});
