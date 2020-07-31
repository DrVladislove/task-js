/*
Найти корни квадратного уравнения и вывести их на экран, если они есть. 
Если корней нет, то вывести сообщение об этом. Конкретное квадратное уравнение определяется коэффициентами a, b, c, которые вводит пользователь.
*/

function equation(a, b, c) {
  var discr = b * b - 4 * a * c,
    x,
    x1,
    x2;
  if (discr > 0) {
    x1 = (-b + Math.sqrt(discr)) / (2 * a);
    x2 = (-b - Math.sqrt(discr)) / (2 * a);
    return "Первый корень = " + x1 + "; Второй корень = " + x2;
  } else if (discr == 0) {
    x = -b / (2 * a);
    return "Корень = " + x;
  } else if (discr < 0) {
    return "Корней нет";
  }
}
console.log(equation(1, 2, -3));

module.exports = {
  equation,
};
