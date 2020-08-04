/*
Найти сумму n элементов следующего ряда чисел:
1 -0.5 0.25 -0.125 ...
Количество элементов (n) вводится с клавиатуры.
*/

function sumOfElements(n) {
  var a, b;
  a = 1;
  b = 0;
  for (let i = 0; i < n; i++) {
    b += a;
    a /= 2;
  }
  console.log(a);
}

module.exports = {
  sumOfElements,
};
