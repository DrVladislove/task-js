/*
Напишите программу, доказывающую или проверяющую, что для множества натуральных чисел выполняется равенство:
1+2+...+n = n(n+1)/2, где n - любое натуральное число.
*/

function naturalNumbers(n) {
  var sum, mul;
  sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
    mul = (n * (n + 1)) / 2;
  }
  console.log(n, "\n", sum, "\n", mul);
}

module.exports = {
  naturalNumbers,
};
