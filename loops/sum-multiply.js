/*
Найти сумму и произведение цифр, введенного натурального числа. 
Например, если введено число 325, то сумма его цифр равна 10 (3+2+5), а произведение 30 (3*2*5).
*/

function sumMul(num, act) {
  switch (act) {
    case "sum":
      return num
        .toString()
        .split("")
        .reduce(function (a, b) {
          return +a + +b;
        });
    case "mul":
      var mul = 1;
      num
        .toString()
        .split("")
        .forEach(function (el) {
          mul *= el;
        });
      return mul;
  }
}

module.exports = {
  sumMul,
};
