function oldtask() {
  var b, k, t;
  for (b = 0; b < 10; b++) {
    for (k = 0; k < 20; k++) {
      t = 100 - (b + k);
      if (20 * b + 10 * k + t == 200 && b + k + t == 100) {
        console.log("b= ", b, "\n", "k= ", k, "\n", "t= ", t);
      }
    }
  }
}
oldtask();
