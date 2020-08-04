// Вывести на экран таблицу умножения (от 1 до 9).

function multiplicationTable() {
  for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
      console.log(i * j);
    }
  }
}

module.exports = {
  multiplicationTable,
};
