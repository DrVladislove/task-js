function naturalNumbers(n) {
  var a, sum, mul;
  sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    mul = (n * (n + 1)) / 2;
  }
  console.log(n, "\n", sum, "\n", mul);
}
naturalNumbers(141);
