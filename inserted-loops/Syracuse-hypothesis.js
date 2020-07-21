function hypothesis(a, b) {
  var n, i;
  for (i = a; i <= b; i++) {
    n = i;
    console.log("—> ", n);
    while (n != 1) {
      if (n % 2 == 0) {
        n = n / 2;
      } else {
        n = (n * 3 + 1) / 2;
      }
      console.log(n);
    }
  }
}
hypothesis(10, 14);
