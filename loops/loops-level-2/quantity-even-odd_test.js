const operations = require("./quantity-even-odd.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("quantityEvenOdd", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Counts quantity of even/odd correctly", function () {
    operations.quantityEvenOdd(100238);

    expect(spy.calledWithExactly(100238)).to.be.true;
    var even = 0,
      odd = 0,
      i = 100238;
    while (i > 0) {
      if (i % 2 == 0) {
        even++;
      } else {
        odd++;
      }
      i = Math.trunc(i / 10);
    }
    expect(spy.calledWithExactly("Четных: " + even + " Нечетных: " + odd)).to.be
      .true;
  });

  it("Counts quantity of even/odd correctly", function () {
    operations.quantityEvenOdd(56709);

    expect(spy.calledWithExactly(56709)).to.be.true;
    var even = 0,
      odd = 0,
      i = 56709;
    while (i > 0) {
      if (i % 2 == 0) {
        even++;
      } else {
        odd++;
      }
      i = Math.trunc(i / 10);
    }
    expect(spy.calledWithExactly("Четных: " + even + " Нечетных: " + odd)).to.be
      .true;
  });
});
