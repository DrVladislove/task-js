function checkDividing(a, b) {
  a / b;
  if (a % b) {
    console.log(
      "Число" +
        " " +
        a +
        " " +
        "делится на число " +
        b +
        " " +
        "с остатком " +
        (a % b) +
        "; " +
        "Частное: " +
        a / b
    );
  } else if (a / b) {
    console.log("Число " + a + " делится на число " + b + "; Ответ: " + a / b);
  }
}
checkDividing(15, 2);
