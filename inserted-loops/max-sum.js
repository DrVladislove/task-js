function maxSum(n) {
  var max_s, max_m, s, m;
  max_m = 0;
  max_s = 0;
  console.log(n);
  while (n != 0) {
    m = n;
    s = 0;
    while (n > 0) {
      s += Math.floor(n % 10);
      n = Math.floor(n / 10);
    }
    if (s > max_s) {
      max_s = s;
      max_m = m;
    }
    console.log(n);
  }
  console.log("Число имеет максимальную сумму цифр: ", max_m, max_s);
}
maxSum(3781);
