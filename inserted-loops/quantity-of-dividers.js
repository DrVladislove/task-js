/*
В введенном промежутке натуральных чисел найти те, количество делителей у которых не меньше введенного значения. 
Для найденных чисел вывести на экран количество делителей и все делители.
*/

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
quantityOfDividers(21, 44, 5);

module.exports = {
  quantityOfDividers,
};
