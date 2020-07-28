/*1. Какое из чисел больше?
Напишите функцию greaterNum которая: принимает 2 аргумента(числа).
Bозвращает наибольшее число из полученных в аргументы.
 Вызовите два раза с разными парами чисел, и выведите в консоль (например, "Наибольшее число между 5 и 10: 10.").
*/

const operations = require("./operations-conditions-1.js");
const assert = require("assert");

it("Правильно определяет условие conditions-task-1", () => {
  assert.equal(operations.greaterNum(5, 10), 10);
});
