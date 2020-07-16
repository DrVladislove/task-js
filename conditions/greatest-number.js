function greaterNum(x, y, z) {
  if (x > y && x > z) {
    console.log(x + " Наибольшее число из трех");
  } else if (y > x && y > z) {
    console.log(y + " Наибольшее число из трех");
  } else if (z > x && z > y) {
    console.log(z + " Наибольшее число из трех");
  }
}
greaterNum(20, 23, 15);
