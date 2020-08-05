const operations = require("./perfect-number.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("perfectNumber", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Finds perfect number correctly", function () {
    operations.perfectNumber();
    var sum;
    for (var i = 2; i < 10000; i++) {
      sum = 0;
      for (var j = 1; j < i; j++) {
        if (i % j == 0) {
          sum += j;
        }
      }
      if (sum == i) {
        expect(spy.calledWithExactly(i, " ")).to.be.true;
      }
    }
  });
});
