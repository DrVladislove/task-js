/*
Дана следующая функция y=f(x):
y = 2x - 10, если x > 0
y = 0, если x = 0
y = 2 * |x| - 1, если x < 0

Требуется найти значение функции по переданному x.
*/

function valueOfFunction(x) {
  var option1 = 2 * x - 10,
    option2 = 0,
    option3 = 2 * Math.abs(x) - 1,
    y;
  if (x > 0) {
    y = option1;
    return y;
  } else if (x == 0) {
    y = option2;
    return y;
  } else if (x < 0) {
    y = option3;
    return y;
  }
}

module.exports = {
  valueOfFunction,
};
