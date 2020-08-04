const operations = require("./sum-of-elements.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("sumOfElements", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Shows sum of elements correctly", function () {
    operations.sumOfElements(4);
    var a, b;
    a = 1;
    b = 0;
    for (let i = 0; i < 4; i++) {
      b += a;
      a /= 2;
    }
    expect(spy.calledWithExactly(a)).to.be.true;
  });

  it("Shows sum of elements correctly", function () {
    operations.sumOfElements(6);
    var a, b;
    a = 1;
    b = 0;
    for (let i = 0; i < 6; i++) {
      b += a;
      a /= 2;
    }
    expect(spy.calledWithExactly(a)).to.be.true;
  });
});
