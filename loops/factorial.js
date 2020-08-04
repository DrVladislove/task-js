// Вычислить факториал введенного числа.

function factorial(a) {
  var x = 0;
  if (a > 0) {
    x = 1;
  }
  for (let i = 2; i <= a; i++) {
    x *= i;
  }
  return x;
}
factorial(4);

module.exports = {
  factorial,
};
