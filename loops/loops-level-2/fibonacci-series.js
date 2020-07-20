function fibonacciSeries(n) {
  console.log(n, "\n");
  var num1 = 1,
    num2 = 2,
    a;
  console.log(num1, "\n", num2);
  for (var i = 3; i <= n; i++) {
    console.log(num1 + num2);
    a = num1;
    num1 = num2;
    num2 = a + num1;
  }
}
fibonacciSeries(12);
