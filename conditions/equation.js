function equation(a, b, c) {
  var discr = b ** 2 - 4 * a * c,
    x,
    x1,
    x2;
  if (discr > 0) {
    x1 = (-b + Math.sqrt(discr)) / (2 * a);
    x2 = (-b - Math.sqrt(discr)) / (2 * a);
    console.log("Первый корень = " + x1 + "; Второй корень = " + x2);
  } else if (discr == 0) {
    x = -b / (2 * a);
    console.log("Корень = " + x);
  } else if (discr < 0) {
    console.log("Корней нет");
  }
}
equation(9, -6, 2);
