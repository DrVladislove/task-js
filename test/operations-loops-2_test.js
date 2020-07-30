/*2. Таблица умножения
Создайте цикл, который будет выполнятся от 1 до 10. Используйте вложенный цикл for, что бы показать таблицу для каждого множителя от 1 до 10 (всего 100 результатов). 
Решение оформите в виде функции multiplicationTable
*/

const operations = require("./operations-loops-2.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("multiplicationTable", function () {
  var spy;

  before(function () {
    // runs before all tests in this block
    spy = sinon.spy(console, "log");
    operations.multiplicationTable();
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

        expect(spy.calledWithExactly(resultString)).to.be.false;
      }
    }
  });

  it("Выводит результат 100 раз", function () {
    expect(spy.callCount).to.be.eq(0, 100);
  });
});
