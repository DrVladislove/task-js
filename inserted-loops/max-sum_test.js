const operations = require("./max-sum.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("maxSum", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Greatest number by sum", function () {
    operations.maxSum(3781);

    var max_s,
      max_m,
      s,
      m,
      i = 3781;
    max_m = 0;
    max_s = 0;
    expect(spy.calledWithExactly(i)).to.be.true;
    while (i != 0) {
      m = i;
      s = 0;
      while (i > 0) {
        s += Math.floor(i % 10);
        i = Math.floor(i / 10);
      }
      if (s > max_s) {
        max_s = s;
        max_m = m;
      }
    }
    expect(
      spy.calledWithExactly("Число имеет максимальную сумму цифр: ", max_s)
    ).to.be.true;
  });

  it("Greatest number by sum", function () {
    operations.maxSum(789);

    var max_s,
      max_m,
      s,
      m,
      i = 789;
    max_m = 0;
    max_s = 0;
    expect(spy.calledWithExactly(i)).to.be.true;
    while (i != 0) {
      m = i;
      s = 0;
      while (i > 0) {
        s += Math.floor(i % 10);
        i = Math.floor(i / 10);
      }
      if (s > max_s) {
        max_s = s;
        max_m = m;
      }
    }
    expect(
      spy.calledWithExactly("Число имеет максимальную сумму цифр: ", max_s)
    ).to.be.true;
  });
});
