function calculator(x, y, sign) {
  var sign = "/";
  while (sign != "0") {
    if (sign == "0") {
      break;
    }
    if (sign == "+" || sign == "-" || sign == "*" || sign == "/") {
      switch (sign) {
        case "+":
          console.log(x + y);
          break;
        case "-":
          console.log(x - y);
          break;
        case "*":
          console.log(x * y);
          break;
        case "/":
          if (y != 0) {
            console.log(x / y);
          } else console.log("Делить на ноль нельзя!");
      }
    } else console.log("Неверно указан знак");
    break;
  }
}
calculator(9, 3);
