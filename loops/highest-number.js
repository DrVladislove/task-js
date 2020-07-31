/*
С клавиатуры вводится натуральное число. Найти его наибольшую цифру.

Например, введено число 764580. Наибольшая цифра в нем 8.
*/

function highestNumber(a) {
  var b;
  b = a % 10;
  a = a / 10;
  while (a > 0) {
    if (a % 10 > b) {
      b = a % 10;
      a = a / 10;
    }
    return Math.trunc(b);
  }
}

module.exports = {
  highestNumber,
};
