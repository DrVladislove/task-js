const operations = require("./fibonacci-series.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("fibonacciSeries", function () {
  var spy;
  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Shows fibonacci series correctly", function () {
    operations.fibonacciSeries(9);
    expect(spy.calledWithExactly(9, "\n")).to.be.true;
    var num1 = 1,
      num2 = 2,
      a;
    expect(spy.calledWithExactly(num1, "\n", num2)).to.be.true;
    for (var i = 3; i <= 9; i++) {
      expect(spy.calledWithExactly(num1 + num2)).to.be.true;
      a = num1;
      num1 = num2;
      num2 = a + num1;
    }
  });

  it("Shows fibonacci series correctly", function () {
    operations.fibonacciSeries(12);
    expect(spy.calledWithExactly(12, "\n")).to.be.true;
    var num1 = 1,
      num2 = 2,
      a;
    expect(spy.calledWithExactly(num1, "\n", num2)).to.be.true;
    for (var i = 3; i <= 12; i++) {
      expect(spy.calledWithExactly(num1 + num2)).to.be.true;
      a = num1;
      num1 = num2;
      num2 = a + num1;
    }
  });
});
