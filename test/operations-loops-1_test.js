/*1. Генератор четных - нечетных чисел
Создайте цикл, который будет случайным образом генерировать 5 чисел от 0 до 20.
Для каждого случая будет проверятся текущее число (четное или нечетное), и выводится результат на экран (например, 2 - четное).
Решение оформите в виде функции numberGenerator()
*/

const operations = require("./operations-loops-1.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("numberGenerator", function () {
  var spy;

  beforeEach(function () {
    // runs before all tests in this block
    spy = sinon.spy(console, "log");
    operations.numberGenerator();
  });

  afterEach(function () {
    // runs after all tests in this block
    console.log.restore();
  });

  describe("Когда число нечетное", function () {
    before(function () {
      sinon.stub(Math, "random").returns(0.1);
    });

    after(function () {
      Math.random.restore();
    });

    it("возвращает результат - нечетное", function () {
      expect(spy.calledWith("3 нечетное")).to.be.true;
    });

    it("Выводит результат 5 раз", function () {
      expect(spy.callCount).to.be.eq(5);
    });
  });

  describe("Когда число четное", function () {
    before(function () {
      sinon.stub(Math, "random").returns(0.55);
    });

    after(function () {
      Math.random.restore();
    });

    it("возвращает результат - четное", function () {
      expect(spy.calledWith("12 четное")).to.be.true;
    });

    it("Выводит результат 5 раз", function () {
      expect(spy.callCount).to.be.eq(5);
    });
  });
});
