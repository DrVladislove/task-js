/*1. Генератор четных - нечетных чисел
Создайте цикл, который будет случайным образом генерировать 5 чисел от 0 до 20.
 Для каждого случая будет проверятся текущее число (четное или нечетное), и выводится результат на экран (например, 2 - четное).
 Решение оформите в виде функции numberGenerator()
 */
const operations = require("./operations-loops-1.js");
const assert = require("assert");

it("Правильно находит Нечетные loops-task-1", () => {
  assert.equal(operations.numberGenerator(), "Нечетное");
});
it("Правильно находит Четные loops-task-1", () => {
  assert.equal(operations.numberGenerator(), "Четное");
});
