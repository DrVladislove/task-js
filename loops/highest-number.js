function highestNumber(a) {
  var m;
  b = a % 10;
  a = a / 10;
  while (a > 0) {
    if (a % 10 > b) {
      b = a % 10;
      a = a / 10;
    }
    console.log(Math.trunc(b));
  }
}
highestNumber(456985);
