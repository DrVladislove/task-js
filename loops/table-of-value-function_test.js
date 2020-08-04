const operations = require("./table-of-value-function.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("tableOfValue", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Prints function correctly with values 5, 10, 1", function () {
    operations.tableOfValue(5, 10, 1);
    var y;
    i = 5;
    for (; i <= 10; i += 1) {
      y = -0.23 * Math.pow(5, 2) + 5;
      expect(spy.calledWithExactly(y.toFixed(2))).to.be.true;
    }
  });

  it("Prints function correctly with values 1, 5, 0.5", function () {
    operations.tableOfValue(1, 5, 0.5);
    var y;
    i = 5;
    for (; i <= 5; i += 0.5) {
      y = -0.23 * Math.pow(1, 2) + 1;
      expect(spy.calledWithExactly(y.toFixed(2))).to.be.true;
    }
  });

  it("Prints function correctly with values -1, 5, 0.8", function () {
    operations.tableOfValue(-1, 5, 0.8);
    var y;
    i = 5;
    for (; i <= 5; i += 0.8) {
      y = -0.23 * Math.pow(-1, 2) + -1;
      expect(spy.calledWithExactly(y.toFixed(2))).to.be.true;
    }
  });
});
