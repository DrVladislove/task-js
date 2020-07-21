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
