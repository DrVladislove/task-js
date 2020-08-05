const operations = require("./rectangle.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("rectangle", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Prints rectangle correctly", function () {
    operations.rectangle();

    var i, j;
    for (i = 0; i < 10; i++) {
      var line = "";
      if (i == 0 || i == 9) {
        for (j = 0; j < 20; j++) {
          line += "—";
        }
      } else {
        line += "|";
        for (j = 1; j < 19; j++) {
          line += "*";
        }
        line += "|";
      }
      expect(spy.calledWithExactly(line)).to.be.true;
    }
  });
});
