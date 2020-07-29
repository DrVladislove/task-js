/*1. Какое из чисел больше?
Напишите функцию greaterNum которая: принимает 2 аргумента(числа).
Bозвращает наибольшее число из полученных в аргументы.
 Вызовите два раза с разными парами чисел, и выведите в консоль (например, "Наибольшее число между 5 и 10: 10.").
*/

const operations = require("./operations-conditions-1.js");
const assert = require("assert");

it("Правильно определяет большее число", () => {
  assert.equal(operations.greaterNum(0, 1), 1);
});
it("Правильно определяет большее число>", () => {
  assert.equal(operations.greaterNum(1, 1), 1);
});
it("Правильно определяет большее число", () => {
  assert.equal(operations.greaterNum(-1, 0), 0);
});
it("Правильно определяет большее число", () => {
  assert.equal(operations.greaterNum(-2, 2), 2);
});
