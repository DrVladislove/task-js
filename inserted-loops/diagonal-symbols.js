// Вывести какой-либо символ по диагоналям воображаемого квадрата.

function diagonalSymbols() {
  var i, j;
  for (i = 0; i < 20; i++) {
    let line = "";
    for (j = 0; j < 20; j++) {
      if (i == j || i == 19 - j) {
        line += "x";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

module.exports = {
  diagonalSymbols,
};
