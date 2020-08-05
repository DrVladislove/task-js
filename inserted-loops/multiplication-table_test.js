const operations = require("./multiplication-table.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("multiplicationTable", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Shows multiplication table correctly", function () {
    operations.multiplicationTable();

    for (var i = 1; i <= 9; i++) {
      for (var j = 1; j <= 9; j++) {
        expect(spy.calledWithExactly(i * j)).to.be.true;
      }
    }
  });
});
