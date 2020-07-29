/*2. Переводчик
Напишите функцию helloWorld которая: Принимает 1 аргумент, код языка (например "en", "es") верните "Hello, World" для данного языка(хотя бы три языка).
 По умолчанию возвращает русский вариант.
 */

function helloWorld(lang) {
  switch (lang) {
    case "en":
      return "Hello";
    case "es":
      return "Hola";
    default:
      return "Привет";
  }
}
module.exports = {
  helloWorld,
};
