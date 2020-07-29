function multiplicationTable() {
  var resultString;
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      resultString = i + " * " + j + " = " + i * j;
    }
  }
}
multiplicationTable();
module.exports = {
  multiplicationTable,
};
