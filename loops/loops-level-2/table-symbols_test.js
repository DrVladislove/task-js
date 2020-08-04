const operations = require("./table-symbols.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("tableSymbols", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Shows codes and symbols of table ASCII correctly", function () {
    operations.tableSymbols();
    var i;
    for (i = 32; i <= 127; i++) {
      expect(spy.calledWithExactly(i + " " + String.fromCharCode(i), "\n")).to
        .be.true;
    }
  });
});
