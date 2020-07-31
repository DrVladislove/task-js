/*Вводятся два целых числа.
Проверить делится ли первое на второе.
Вывести на экран сообщение об этом, а также остаток (если он есть) и частное (в любом случае).
*/

function checkDividing(a, b) {
  var res1 = a / b;
  var res2 = a % b;
  if (a % b == 0) {
    return res1;
  } else {
    return res2;
  }
}

module.exports = {
  checkDividing,
};
