/*
"Рисование" символами. Выведите на экран числа в следующем виде:
  1
  2  2
  3  3  3
  4  4  4  4
  5  5  5  5  5
и т.д.
*/

function paintingNums(n) {
  var i, j;

  for (i = 1; i <= n; ++i) {
    var line = "";
    for (j = 1; j <= i; ++j) {
      line = line + i;
    }
    console.log(line);
  }
}
module.exports = {
  paintingNums,
};
