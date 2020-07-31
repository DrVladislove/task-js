/*
Вводятся три целых числа. Определить какое из них наибольшее.
*/
function greaterNum(x, y, z) {
  if (x > y && x > z) {
    return x + " Наибольшее число из трех";
  } else if (y > x && y > z) {
    return y + " Наибольшее число из трех";
  } else if (z > x && z > y) {
    return z + " Наибольшее число из трех";
  }
}

module.exports = {
  greaterNum,
};
