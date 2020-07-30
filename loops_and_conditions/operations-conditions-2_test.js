/*2. Переводчик
Напишите функцию helloWorld которая: Принимает 1 аргумент, код языка (например "en", "es") верните "Hello, World" для данного языка(хотя бы три языка).
 По умолчанию возвращает русский вариант.
 */
const assert = require("assert");
const operations = require("./operations-conditions-2.js");

describe("helloWorld", function () {
  it("Function defines language correctly 'en' —> Hello", () => {
    assert.equal(operations.helloWorld("en"), "Hello");
  });
  it("Function defines language correctly 'es' —> Hola", () => {
    assert.equal(operations.helloWorld("es"), "Hola");
  });
  it("Function defines language correctly 'default (ru)' —> Hello (on Russian)", () => {
    assert.equal(operations.helloWorld(), "Hello (on Russian)");
  });
});
