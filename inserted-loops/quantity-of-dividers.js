function quantityOfDividers(a, b, n) {
  var m;

  console.log("Числовой промежуток: ", a, ";", b);
  console.log("Количество делителей не менее: ", n);

  while (a <= b) {
    m = 0;
    for (var i = 1; i <= a; i++) {
      if (a % i == 0) {
        m += 1;
      }
    }
    if (m >= n) {
      console.log(a, "—", m, " : ");

      for (var i = 1; i <= a; i++) {
        if (a % i == 0) {
          console.log(i);
        }
      }
    }
    a += 1;
  }
}
quantityOfDividers(343, 434, 20);
