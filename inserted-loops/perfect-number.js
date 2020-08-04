/*
Найти все совершенные числа до 10000. 
Совершенное число - это такое число, которое равно сумме всех своих делителей, кроме себя самого. 
Например, число 6 является совершенным, т.к. кроме себя самого делится на числа 1, 2 и 3, которые в сумме дают 6.
*/

function perfectNumber() {
  var sum;
  for (var i = 2; i < 10000; i++) {
    sum = 0;
    for (var j = 1; j < i; j++) {
      if (i % j == 0) {
        sum += j;
      }
    }
    if (sum == i) {
      console.log(i, " ");
    }
  }
}
perfectNumber();

module.exports = {
  perfectNumber,
};
