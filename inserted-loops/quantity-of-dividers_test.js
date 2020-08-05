const operations = require("./quantity-of-dividers.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("quantityOfDividers", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Shows quantity of dividers correctly", function () {
    operations.quantityOfDividers(21, 44, 5);

    var m,
      num1 = 21,
      num2 = 44,
      num3 = 5;

    expect(spy.calledWithExactly("Числовой промежуток: ", 21, ";", 44)).to.be
      .true;
    expect(spy.calledWithExactly("Количество делителей не менее: ", 5)).to.be
      .true;

    while (num1 <= num2) {
      m = 0;
      for (var i = 1; i <= num1; i++) {
        if (num1 % i == 0) {
          m += 1;
        }
      }
      if (m >= num3) {
        expect(spy.calledWithExactly(num1, "—", m, " : ")).to.be.true;

        for (var i = 1; i <= num1; i++) {
          if (num1 % i == 0) {
            expect(spy.calledWithExactly(i));
          }
        }
      }
      num1 += 1;
    }
  });
});
