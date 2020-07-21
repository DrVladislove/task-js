function rectangle() {
  var i, j;
  for (i = 0; i < 10; i++) {
    var line = "";
    if (i == 0 || i == 9) {
      for (j = 0; j < 20; j++) {
        line += "—";
      }
    } else {
      line += "|";
      for (j = 1; j < 19; j++) {
        line += "*";
      }
      line += "|";
    }
    console.log(line);
  }
}
rectangle();
