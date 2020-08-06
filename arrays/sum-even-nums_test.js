function sumEvenNums() {}
sumEvenNums();

const sinon = require("sinon");
const expect = require("chai").expect;

describe("sumEvenNums", function () {
  var spy;
  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Correctly finds sum of even positive nums in array", function () {
    // operations.sumEvenNums()

    var arr = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 10) - 5
    );

    expect(spy.calledWithExactly(arr)).to.be.true;

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
      arr.forEach(function (item) {
        if (item >= 0 && item % 2 == 0) {
          sum += item / 10;
        }
      });
    }
    expect(spy.calledWithExactly(sum)).to.be.true;
  });
});
