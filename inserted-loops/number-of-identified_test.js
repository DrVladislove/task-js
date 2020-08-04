const operations = require("./number-of-identified.js");
var sinon = require("sinon");
var expect = require("chai");

describe("numIdentified", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Correctly shows num of identified", function () {
    operations.numIdentified(1, 5, 301);
    var count = 0,
      a;
    expect(spy.calledWithExactly("Количество чисел: ", 1)).to.be.true;
    expect(spy.calledWithExactly("Цифра: ", 5)).to.be.true;
    expect(spy.calledWithExactly(301)).to.be.true;
    for (var i = 0; i < n; i++) {
      var count = 0;
      while (a > 0) {
        if (a % 10 == d) {
          count += 1;
        }
        a = a / 10;
      }
    }
    expect(spy.calledWithExactly("Количество цифр: ", count)).to.be.true;
  });
});
