var assert = require("assert");
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
