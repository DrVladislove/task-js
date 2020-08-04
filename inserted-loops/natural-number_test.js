const operations = require("./natural-number.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("naturalNumber", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Show multipliers correctly", function () {
    operations.naturalNumber(507);
    var i,
      f,
      j = 507;
    expect(spy.calledWithExactly(j)).to.be.true;
    while (j > 1) {
      i = 2;
      f = 0;
      while (1) {
        if (j % i == 0) {
          j = j / i;
          expect(spy.calledWithExactly(i, " ")).to.be.true;
          f = 1;
          break;
        } else {
          i += 1;
        }
      }
      if (f == 1) {
        continue;
      }
    }
  });

  it("Show multipliers correctly", function () {
    operations.naturalNumber(96);
    var i,
      f,
      j = 96;
    expect(spy.calledWithExactly(j)).to.be.true;
    while (j > 1) {
      i = 2;
      f = 0;
      while (1) {
        if (j % i == 0) {
          j = j / i;
          expect(spy.calledWithExactly(i, " ")).to.be.true;
          f = 1;
          break;
        } else {
          i += 1;
        }
      }
      if (f == 1) {
        continue;
      }
    }
  });
});
