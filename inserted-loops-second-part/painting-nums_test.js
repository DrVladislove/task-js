const operations = require("./painting-nums.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("paintingNums", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Paints by nums correctly", function () {
    operations.paintingNums(9);

    var i, j;

    for (i = 1; i <= 9; ++i) {
      var line = "";
      for (j = 1; j <= i; ++j) {
        line = line + i;
      }
      expect(spy.calledWithExactly(line)).to.be.true;
    }
  });
});
