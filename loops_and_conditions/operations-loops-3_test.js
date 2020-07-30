const operations = require("./operations-loops-3.js");
const assert = require("assert");

describe("checkAssignGrade", function () {
  it("Marks were put correctly  ", () => {
    assert.equal(operations.checkAssignGrade(), "mark is 5");
  });
});
