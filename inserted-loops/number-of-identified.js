/*
Посчитать, сколько раз встречается определенная цифра в введенной последовательности чисел. 
Количество вводимых чисел и цифра, которую необходимо посчитать, задаются вводом с клавиатуры.
*/

function numIdentified(n, d, a) {
  var count = 0,
    a;
  console.log("Количество чисел: ", n);
  console.log("Цифра: ", d);
  console.log(a);
  for (var i = 0; i < n; i++) {
    var count = 0;
    while (a > 0) {
      if (a % 10 == d) {
        count += 1;
      }
      a = a / 10;
    }
  }

  console.log("Количество цифр: ", count);
}
numIdentified(1, 5, 301);

module.exports = {
  numIdentified,
};
