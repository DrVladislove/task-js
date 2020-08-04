const operations = require("./natural-numbers.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("naturalNumbers", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("equality proven", function () {
    operations.naturalNumbers(56);
    var sum, mul;
    sum = 0;
    for (var i = 1; i <= 56; i++) {
      sum += i;
      mul = (56 * (56 + 1)) / 2;
    }
    expect(spy.calledWithExactly(56, "\n", sum, "\n", mul)).to.be.true;
  });

  it("equality proven", function () {
    operations.naturalNumbers(71);
    var sum, mul;
    sum = 0;
    for (var i = 1; i <= 71; i++) {
      sum += i;
      mul = (71 * (71 + 1)) / 2;
    }
    expect(spy.calledWithExactly(71, "\n", sum, "\n", mul)).to.be.true;
  });
});
