function multiplicationTable() {
  var resultString;
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      resultString = i + " * " + j + " = " + i * j;
    }
  }
}
multiplicationTable();
module.exports = {
  multiplicationTable,
};

const expect = require("expect");
var sinon = require("sinon");

describe("multiplicationTable", function () {
  var spy;

  before(function () {
    // runs before all tests in this block
    spy = sinon.spy(console, "log");
    multiplicationTable();
  });

  after(function () {
    // runs after all tests in this block
    console.log.restore();
  });

  it("Выводит таблицу", function () {
    var resultString;
    for (var i = 1; i <= 10; i++) {
      for (var j = 1; j <= 10; j++) {
        resultString = i + " * " + j + " = " + i * j;

        expect(spy.calledWithExactly(resultString));
      }
    }
  });

  it("Выводит результат 100 раз", function () {
    expect(spy.callCount);
  });
});
