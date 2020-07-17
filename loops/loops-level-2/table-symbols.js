function tableSymbols() {
  var i;
  for (i = 32; i <= 127; i++) {
    console.log(i + " " + String.fromCharCode(i), "\n");
  }
}

tableSymbols();
