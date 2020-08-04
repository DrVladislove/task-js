const operations = require("./quantity-of-simple");
const sinon = require("sinon");
const expect = require("chai").expect;

describe("quantityOfSimpleNum", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Shows simple nums correctly", function () {
    operations.quantityOfSimpleNum;

    var nums = [];
    while (nums.length < 10) {
      var randomizer = Math.ceil(Math.random() * 100);
      if (nums.indexOf(randomizer) === -1) {
        nums.push(randomizer);
      }
    }
    expect(spy.calledWithExactly(nums));
    var count = 10;

    for (var i = 0; i < nums.length; i++) {
      nums.forEach(function (item) {
        for (var j = 2; j <= Math.sqrt(item) + 1; j++) {
          if (item % j == 0) {
            count -= 1;
            break;
          }
        }
      });
      expect(spy.calledWithExactly("Простых чисел: ", count));
      break;
    }
  });
});
