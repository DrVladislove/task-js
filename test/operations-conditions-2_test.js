/*2. Переводчик
Напишите функцию helloWorld которая: Принимает 1 аргумент, код языка (например "en", "es") верните "Hello, World" для данного языка(хотя бы три языка).
 По умолчанию возвращает русский вариант.
 */
const assert = require("assert");
const operations = require("./operations-conditions-2.js");

it("Выдает правильный язык conditions-task-2", () => {
  assert.equal(operations.helloWorld("en"), "Hello");
});
it("Выдает правильный язык conditions-task-2", () => {
  assert.equal(operations.helloWorld("es"), "Hola");
});
it("Выдает правильный язык conditions-task-2", () => {
  assert.equal(operations.helloWorld(), "Привет");
});