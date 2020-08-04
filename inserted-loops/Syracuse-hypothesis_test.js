const operations = require("./Syracuse-hypothesis.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("hypothesis", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Prove Syracuse hypothesis correctly", function () {
    operations.hypothesis(10, 14);

    var n, i;
    for (i = 10; i <= 14; i++) {
      n = i;
      expect(spy.calledWithExactly("—> ", n)).to.be.true;
      while (n != 1) {
        if (n % 2 == 0) {
          n = n / 2;
        } else {
          n = (n * 3 + 1) / 2;
        }
        expect(spy.calledWithExactly(n)).to.be.true;
      }
    }
  });

  it("Prove Syracuse hypothesis correctly", function () {
    operations.hypothesis(3, 10);

    var n, i;
    for (i = 3; i <= 10; i++) {
      n = i;
      expect(spy.calledWithExactly("—> ", n)).to.be.true;
      while (n != 1) {
        if (n % 2 == 0) {
          n = n / 2;
        } else {
          n = (n * 3 + 1) / 2;
        }
        expect(spy.calledWithExactly(n)).to.be.true;
      }
    }
  });
});
