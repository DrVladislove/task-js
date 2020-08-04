/*Посчитать четные и нечетные цифры введенного натурального числа. 
Например, если введено число 34560, то у него 3 четные цифры (4, 6 и 0) и 2 нечетные (3 и 5).
*/

function quantityEvenOdd(a) {
  console.log(a);
  var even = 0,
    odd = 0;
  while (a > 0) {
    if (a % 2 == 0) {
      even++;
    } else {
      odd++;
    }
    a = Math.trunc(a / 10);
  }

  console.log("Четных: " + even + " Нечетных: " + odd);
}

module.exports = {
  quantityEvenOdd,
};
