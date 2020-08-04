function numbers(a, b, c) {
  if (a > b && a < c) {
    console.log(a, "Среднее число");
  } else if (a < b && a > c) {
    console.log(a, "Среднее число");
  } else if (b > c && b < a) {
    console.log(b, "Среднее число");
  } else if (b < c && b > a) {
    console.log(b, "Среднее число");
  } else if (c > a && c < b) {
    console.log(c, "Среднее число");
  } else if (c < a && c > b) {
    console.log(c, "Среднее число");
  }
}
numbers(572, 234, 624);
