/*
Вводятся три разных числа. 
Найти, какое из них является средним (больше одного, но меньше другого).
 */

function numbers(a, b, c) {
  if (a > b && a < c) {
    return a + " Среднее число";
  } else if (a < b && a > c) {
    return a + " Среднее число";
  } else if (b > c && b < a) {
    return b + " Среднее число";
  } else if (b < c && b > a) {
    return b + " Среднее число";
  } else if (c > a && c < b) {
    return c + " Среднее число";
  } else if (c < a && c > b) {
    return c + " Среднее число";
  }
}

module.exports = {
  numbers,
};
