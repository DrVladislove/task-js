function factorial(a) {
  var x = 0;
  if (a > 0) {
    x = 1;
  }
  for (let i = 2; i <= a; i++) {
    x *= i;
  }
  console.log(x);
}
factorial(4);
