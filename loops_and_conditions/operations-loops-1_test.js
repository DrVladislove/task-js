/*1. Генератор четных - нечетных чисел
Создайте цикл, который будет случайным образом генерировать 5 чисел от 0 до 20.
Для каждого случая будет проверятся текущее число (четное или нечетное), и выводится результат на экран (например, 2 - четное).
Решение оформите в виде функции numberGenerator()
*/

const operations = require("./operations-loops-1.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("Number generator even/odd", function () {
  var spy;

  beforeEach(function () {
    // runs before all tests in this block
    spy = sinon.spy(console, "log");
  });

  afterEach(function () {
    // runs after all tests in this block
    console.log.restore();
  });

  describe("When number is odd", function () {
    before(function () {
      sinon.stub(Math, "random").returns(0.1);
    });

    after(function () {
      Math.random.restore();
    });

    it("Returns result — odd", function () {
      operations.numberGenerator();
      expect(spy.calledWith("3 odd")).to.be.true;
    });

    it("Show result 5 times", function () {
      operations.numberGenerator();
      expect(spy.callCount).to.be.eq(5);
    });
  });

  describe("When number is even", function () {
    before(function () {
      sinon.stub(Math, "random").returns(0.55);
    });

    after(function () {
      Math.random.restore();
    });

    it("Returns result — even", function () {
      operations.numberGenerator();
      expect(spy.calledWith("12 even")).to.be.true;
    });

    it("Show result 5 times", function () {
      operations.numberGenerator();
      expect(spy.callCount).to.be.eq(5);
    });
  });
});
