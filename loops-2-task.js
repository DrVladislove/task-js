//TASK 2

function multiplicationTable() {
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      var result = i * j;
      console.log(i + "*" + j + "=" + result);
    }
  }
}
multiplicationTable();
