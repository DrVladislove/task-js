function tableOfValue(x1, x2, up) {
  var y;
  while (x1 <= x2) {
    y = -0.23 * Math.pow(x1, 2) + x1;
    x1 += up;
    console.log(y.toFixed(2));
  }
}
tableOfValue(5, 10, 1);
