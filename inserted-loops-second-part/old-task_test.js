const operations = require("./old-task.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("oldTask", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Shows answer of task correctly", function () {
    operations.oldTask();

    var b, k, t;
    for (b = 0; b < 10; b++) {
      for (k = 0; k < 20; k++) {
        t = 100 - (b + k);
        if (20 * b + 10 * k + t == 200 && b + k + t == 100) {
          expect(
            spy.calledWithExactly("b= ", b, "\n", "k= ", k, "\n", "t= ", t)
          ).to.be.true;
        }
      }
    }
  });
});
