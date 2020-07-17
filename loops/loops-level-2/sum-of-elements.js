function sumOfElements(n) {
  var a, b;
  a = 1;
  b = 0;
  for (let i = 0; i < n; i++) {
    b += a;
    a /= 2;
  }
  console.log(a);
}
sumOfElements(5);
