var operations = require("./loop-steps.js");
var sinon = require("sinon/");
var expect = require("chai").expect;

describe("loopSteps", () => {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore;
  });

  it("Print steps", function () {
    operations.loopSteps(1, 3, 1);
    for (var i = 1; i <= 3; i = i + 1) {
      expect(spy.calledWithExactly(i)).to.be.true;
    }
  });

  it("Print steps", function () {
    operations.loopSteps(10, 35, 5);
    for (var i = 10; i <= 35; i = i + 5) {
      expect(spy.calledWithExactly(i)).to.be.true;
    }
  });

  it("Print steps", function () {
    operations.loopSteps(5, 20, 5);
    for (var i = 5; i <= 20; i = i + 5) {
      expect(spy.calledWithExactly(i)).to.be.true;
    }
  });
});
