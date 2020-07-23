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
paintingNums(9);
