/*2. Переводчик
Напишите функцию helloWorld которая: Принимает 1 аргумент, код языка (например "en", "es") верните "Hello, World" для данного языка(хотя бы три языка).
 По умолчанию возвращает русский вариант.
 */
const assert = require("assert");
const operations = require("./operations-conditions-2.js");

describe("Переводчик", function () {
  it("Правильно определяет язык 'en' —> Hello", () => {
    assert.equal(operations.helloWorld("en"), "Hello");
  });
  it("Правильно определяет язык 'es' —> Hola", () => {
    assert.equal(operations.helloWorld("es"), "Hola");
  });
  it("Правильно определяет язык 'default (ru)' —> Привет", () => {
    assert.equal(operations.helloWorld(), "Привет");
  });
});
