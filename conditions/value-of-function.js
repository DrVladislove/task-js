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
    result;
  if (x > 0) {
    console.log((result = option1));
  } else if (x == 0) {
    console.log((result = option2));
  } else if (x < 0) {
    console.log((result = option3));
  }
}
valueOfFunction(-2);
