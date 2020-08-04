const operations = require("./reverse-number.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("reverseNumber", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Reverses number 3486 correctly", function () {
    operations.reverseNumber(3486);
    var b = 0;
    i = 3486;
    for (; i; i = Math.floor(i / 10)) {
      b *= 10;
      b += i % 10;
    }
    expect(spy.calledWithExactly(b)).to.be.true;
  });

  it("Reverses number 123456 correctly", function () {
    operations.reverseNumber(123456);
    var b = 0;
    i = 123456;
    for (; i; i = Math.floor(i / 10)) {
      b *= 10;
      b += i % 10;
    }
    expect(spy.calledWithExactly(b)).to.be.true;
  });
});
