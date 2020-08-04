const operations = require("./diagonal-symbols.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("diagonalSymbols", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Shows diagonals by symbols correctly", function () {
    operations.diagonalSymbols();
    var i, j;
    for (i = 0; i < 20; i++) {
      let line = "";
      for (j = 0; j < 20; j++) {
        if (i == j || i == 19 - j) {
          line += "x";
        } else {
          line += " ";
        }
      }
      expect(spy.calledWithExactly(line)).to.be.true;
    }
  });
});
